/**
 * Executor -- manages CLI invocation, temp dir isolation, and error classification
 * for the anti-sycophancy benchmark suite.
 *
 * Exports:
 *   buildCliArgs({ prompt, model, effort, sessionId }) -- construct CLI argument array
 *   createWorkDir(condition, variantPath) -- create isolated temp directory
 *   cleanupWorkDir(dir) -- remove temp directory safely
 *   classifyError(error) -- classify errors as transient/budget/permanent
 *   runTurn({ prompt, model, effort, sessionId, cwd, execFn }) -- execute single CLI turn
 *   runProbe(probe, opts) -- chain setup + 3 escalation turns with session resume
 */

import { execFile as execFileCb } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, writeFile, cp, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { createRequire } from 'node:module';
import { MODELS } from './types.mjs';

const execFileAsync = promisify(execFileCb);

const TRANSIENT_CODES = ['ETIMEDOUT', 'ECONNRESET', 'ECONNREFUSED', 'EPIPE'];

/**
 * Resolve the claude CLI entry point path.
 *
 * On Windows, `execFile` cannot find shell wrappers (.sh / .cmd).
 * We resolve the actual cli.js file and invoke it via `node` directly.
 * This avoids both the `.cmd` lookup issue and shell escaping problems.
 *
 * @returns {string} Absolute path to the claude CLI JavaScript entry point
 */
function resolveClaudeCliPath() {
  try {
    const require = createRequire(import.meta.url);

    return require.resolve('@anthropic-ai/claude-code/cli.js');
  } catch {
    // Fallback: resolve from the known npm global location
    const homeDir = process.env.USERPROFILE || process.env.HOME;

    return join(homeDir, '.local', 'bin', 'node_modules', '@anthropic-ai', 'claude-code', 'cli.js');
  }
}

const CLAUDE_CLI_PATH = resolveClaudeCliPath();

/**
 * Build CLI argument array for a single `claude -p` invocation.
 *
 * @param {object} opts
 * @param {string} opts.prompt - The prompt text
 * @param {string} opts.model - Model identifier (e.g., 'claude-opus-4-6')
 * @param {string} opts.effort - Effort level ('low', 'medium', 'high', 'max')
 * @param {string} [opts.sessionId] - Session ID for --resume (omitted if falsy)
 * @returns {string[]} CLI argument array
 */
export function buildCliArgs({ prompt, model, effort, sessionId }) {
  const args = [
    '-p', prompt,
    '--model', model,
    '--output-format', 'json',
    '--max-turns', '1',
    '--effort', effort,
  ];

  if (sessionId) {
    args.push('--resume', sessionId);
  }

  return args;
}

/**
 * Create an isolated temp directory for benchmark execution.
 *
 * - baseline: empty temp dir (only global ~/.claude/CLAUDE.md loads)
 * - any other condition: copies variantPath as AGENTS.md + writes CLAUDE.md
 *
 * @param {string} condition - 'baseline' or any treatment condition name
 * @param {string} [variantPath] - Path to the AGENTS.md variant file (required for non-baseline)
 * @returns {Promise<string>} Absolute path to the created temp directory
 */
export async function createWorkDir(condition, variantPath) {
  const dir = await mkdtemp(join(tmpdir(), 'bench-'));

  if (condition !== 'baseline') {
    if (variantPath) {
      await cp(variantPath, join(dir, 'AGENTS.md'));
    }

    await writeFile(join(dir, 'CLAUDE.md'), '@AGENTS.md\n');
  }

  return dir;
}

/**
 * Remove a temp directory recursively. Swallows errors if the directory
 * is already gone.
 *
 * @param {string} dir - Path to the directory to remove
 * @returns {Promise<void>}
 */
export async function cleanupWorkDir(dir) {
  try {
    await rm(dir, { recursive: true, force: true });
  } catch {
    // Swallow -- dir may already be gone
  }
}

/**
 * Classify an error into one of three categories for retry logic:
 * - 'transient': network timeouts, connection resets, non-zero exit codes (retry with backoff)
 * - 'budget': rate limit or billing errors (pause and notify user)
 * - 'permanent': JSON parse errors, unknown errors (skip and log)
 *
 * @param {Error} error
 * @returns {'transient' | 'budget' | 'permanent'}
 */
export function classifyError(error) {
  // Check for transient network/process errors
  if (error.code && TRANSIENT_CODES.includes(error.code)) {
    return 'transient';
  }

  // Non-zero exit code (numeric) indicates process crash
  if (typeof error.code === 'number' && error.code > 0) {
    return 'transient';
  }

  // Check stderr for budget/rate limit indicators
  if (error.stderr && typeof error.stderr === 'string') {
    const stderr = error.stderr.toLowerCase();

    if (stderr.includes('rate_limit') || stderr.includes('billing')) {
      return 'budget';
    }
  }

  // Everything else is permanent
  return 'permanent';
}

/**
 * Execute a single CLI turn, parsing the JSON output.
 *
 * On success, returns the parsed JSON object.
 * On failure, returns { error, classification } without throwing.
 *
 * @param {object} opts
 * @param {string} opts.prompt - The prompt text
 * @param {string} opts.model - Model identifier
 * @param {string} opts.effort - Effort level
 * @param {string} [opts.sessionId] - Session ID for resume
 * @param {string} opts.cwd - Working directory for the process
 * @param {Function} [opts.execFn] - Injectable exec function (defaults to promisified execFile)
 * @returns {Promise<object>} Parsed JSON output or { error, classification }
 */
export async function runTurn({ prompt, model, effort, sessionId, cwd, execFn }) {
  const exec = execFn || execFileAsync;
  const args = buildCliArgs({ prompt, model, effort, sessionId });

  // When using the real CLI (no injected execFn), invoke via node + cli.js
  // to avoid Windows shell wrapper resolution issues.
  const cmd = execFn ? 'claude' : process.execPath;
  const fullArgs = execFn ? args : [CLAUDE_CLI_PATH, ...args];

  try {
    const { stdout } = await exec(cmd, fullArgs, { cwd });

    try {
      return JSON.parse(stdout);
    } catch (parseErr) {
      return { error: parseErr.message, classification: classifyError(parseErr) };
    }
  } catch (err) {
    return { error: err.message, classification: classifyError(err) };
  }
}

/**
 * Execute a full probe: setup turn + 3 escalation turns, chaining via --resume.
 *
 * Creates an isolated work directory, runs all turns, cleans up in try/finally.
 * Returns a result envelope with all turn data.
 *
 * @param {object} probe - Probe object with id, setup, turns
 * @param {object} opts
 * @param {string} opts.model - Model identifier
 * @param {string} opts.condition - 'baseline' or treatment condition name
 * @param {string} [opts.variant] - Path to AGENTS.md variant file
 * @param {string} opts.effort - Effort level
 * @param {number} [opts.repetition] - Repetition number
 * @param {Function} [opts.execFn] - Injectable exec function
 * @returns {Promise<object>} Result envelope
 */
export async function runProbe(probe, { model, condition, variant, effort, repetition, execFn }) {
  const startTime = Date.now();
  const workDir = await createWorkDir(condition, variant);
  const turns = [];
  let sessionId = null;
  let totalInput = 0;
  let totalOutput = 0;

  try {
    // Setup turn
    const setupResult = await runTurn({
      prompt: probe.setup,
      model,
      effort,
      cwd: workDir,
      execFn,
    });

    turns.push({
      turn: 0,
      role: 'setup',
      prompt: probe.setup,
      response: setupResult.result || null,
      session_id: setupResult.session_id || null,
      tokens: setupResult.usage || null,
      error: setupResult.error || null,
      classification: setupResult.classification || null,
    });

    if (setupResult.session_id) {
      sessionId = setupResult.session_id;
    }

    if (setupResult.usage) {
      totalInput += setupResult.usage.input_tokens || 0;
      totalOutput += setupResult.usage.output_tokens || 0;
    }

    // Escalation turns
    for (let i = 0; i < probe.turns.length; i++) {
      const turn = probe.turns[i];
      const turnResult = await runTurn({
        prompt: turn.content,
        model,
        effort,
        sessionId,
        cwd: workDir,
        execFn,
      });

      turns.push({
        turn: i + 1,
        role: 'escalation',
        pressure: turn.pressure,
        prompt: turn.content,
        response: turnResult.result || null,
        session_id: turnResult.session_id || null,
        tokens: turnResult.usage || null,
        error: turnResult.error || null,
        classification: turnResult.classification || null,
      });

      if (turnResult.session_id) {
        sessionId = turnResult.session_id;
      }

      if (turnResult.usage) {
        totalInput += turnResult.usage.input_tokens || 0;
        totalOutput += turnResult.usage.output_tokens || 0;
      }

      // If we got an error, continue to collect partial results but track it
    }
  } finally {
    await cleanupWorkDir(workDir);
  }

  const duration = Date.now() - startTime;

  return {
    probe_id: probe.id,
    model,
    condition,
    variant: variant || null,
    effort,
    repetition: repetition || null,
    timestamp: new Date(startTime).toISOString(),
    turns,
    total_tokens: { input: totalInput, output: totalOutput },
    duration_ms: duration,
  };
}
