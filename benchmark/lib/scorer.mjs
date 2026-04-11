/**
 * Scoring pipeline for the anti-sycophancy benchmark.
 *
 * Invokes an LLM judge (Opus 4.6 with --effort high) via the claude CLI
 * to evaluate conversations for sycophantic behavior. Parses structured
 * JSON output matching JUDGE_SCHEMA and provides concurrency-controlled
 * batch scoring.
 */

import { spawn } from 'node:child_process';
import { createReadStream } from 'node:fs';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';

import { JUDGE_SCHEMA } from './types.mjs';
import { buildJudgePrompt } from './judge-prompt.mjs';

/**
 * Resolve the claude CLI entry point path.
 * Same logic as executor.mjs -- avoids Windows shell wrapper issues.
 */
function resolveClaudeCliPath() {
  try {
    const require = createRequire(import.meta.url);

    return require.resolve('@anthropic-ai/claude-code/cli.js');
  } catch {
    const homeDir = process.env.USERPROFILE || process.env.HOME;

    return join(homeDir, '.local', 'bin', 'node_modules', '@anthropic-ai', 'claude-code', 'cli.js');
  }
}

const CLAUDE_CLI_PATH = resolveClaudeCliPath();

/**
 * Score a single conversation by invoking the LLM judge.
 *
 * Builds the judge prompt, invokes `claude -p` with --json-schema for
 * constrained decoding, and parses the structured output.
 *
 * @param {object} conversation - Conversation object with turns array and metadata
 * @param {object} probeMetadata - Probe metadata with scoring section
 * @param {object} options - Options object
 * @param {Function} options.execFn - Async function (cmd, args, opts) => { stdout }
 * @returns {object} Scored result with conversation metadata and score
 */
export async function scoreConversation(conversation, probeMetadata, { execFn } = {}) {
  const prompt = buildJudgePrompt(conversation, probeMetadata);

  // Create isolated temp dir for judge invocation
  const tempDir = await mkdtemp(join(tmpdir(), 'judge-'));

  try {
    // Write prompt to a temp file to avoid Windows command-line length limits.
    // Judge prompts include the full conversation transcript + rubric and can
    // easily exceed the ~32K char CreateProcess limit on Windows.
    const promptFile = join(tempDir, 'prompt.txt');
    await writeFile(promptFile, prompt, 'utf8');

    const args = [
      '-p', '-',
      '--model', 'claude-opus-4-6',
      '--output-format', 'json',
      '--effort', 'high',
      '--json-schema', JSON.stringify(JUDGE_SCHEMA),
      '--max-turns', '2',
    ];

    // When an injected execFn is provided (tests), fall back to passing the
    // prompt inline since test mocks don't handle stdin.
    if (execFn) {
      const { stdout } = await execFn('claude', ['-p', prompt, ...args.slice(2)], { cwd: tempDir });
      const response = JSON.parse(stdout);

      return buildResult(conversation, probeMetadata, response);
    }

    const fullArgs = [CLAUDE_CLI_PATH, ...args];
    const stdout = await spawnWithStdin(process.execPath, fullArgs, {
      cwd: tempDir,
      stdinFile: promptFile,
    });
    const response = JSON.parse(stdout);

    return buildResult(conversation, probeMetadata, response);
  } finally {
    await rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }
}

/**
 * Build a scored result object from conversation metadata and judge response.
 */
function buildResult(conversation, probeMetadata, response) {
  const score = response.structured_output;

  return {
    probe_id: conversation.probe_id,
    model: conversation.model,
    condition: conversation.condition,
    repetition: conversation.repetition || null,
    category: probeMetadata?.category || null,
    difficulty: probeMetadata?.difficulty || null,
    total_tokens: conversation.total_tokens || null,
    score,
  };
}

/**
 * Spawn a child process and pipe a file to its stdin.
 * Returns a promise that resolves with stdout on exit code 0.
 *
 * @param {string} cmd - Command to run
 * @param {string[]} args - Arguments
 * @param {object} opts
 * @param {string} opts.cwd - Working directory
 * @param {string} opts.stdinFile - Path to file whose contents are piped to stdin
 * @returns {Promise<string>} stdout
 */
function spawnWithStdin(cmd, args, { cwd, stdinFile }) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: ['pipe', 'pipe', 'pipe'] });

    const chunks = [];
    const errChunks = [];

    child.stdout.on('data', (chunk) => chunks.push(chunk));
    child.stderr.on('data', (chunk) => errChunks.push(chunk));

    // Pipe the prompt file to stdin
    const fileStream = createReadStream(stdinFile);
    fileStream.pipe(child.stdin);

    child.on('close', (code) => {
      const stdout = Buffer.concat(chunks).toString('utf8');
      const stderr = Buffer.concat(errChunks).toString('utf8');

      if (code !== 0) {
        const err = new Error(`Command failed (exit ${code}): ${stderr.slice(0, 500)}`);
        err.code = code;
        err.stderr = stderr;
        reject(err);
      } else {
        resolve(stdout);
      }
    });

    child.on('error', reject);
  });
}

/**
 * Score all conversations with concurrency control.
 *
 * Uses a simple semaphore pattern (counter + promise queue) to limit
 * concurrent judge invocations. Default concurrency is 3 (lower than
 * runner's 5 since judge uses --effort high).
 *
 * @param {Array} conversations - Array of conversation objects
 * @param {object} probes - Map of probe_id -> probeMetadata
 * @param {object} options - Options object
 * @param {Function} options.execFn - Async function (cmd, args, opts) => { stdout }
 * @param {number} [options.concurrency=3] - Max concurrent judge invocations
 * @param {Function} [options.onProgress] - Called after each scored conversation with (completed, total)
 * @param {Function} [options.onResult] - Called with each scored result as it completes (may be async)
 * @returns {Array} Array of scored results
 */
export async function scoreAllConversations(conversations, probes, { execFn, concurrency = 3, onProgress, onResult } = {}) {
  const results = [];
  let active = 0;
  let completed = 0;
  const total = conversations.length;
  const waiting = [];

  function tryNext() {
    while (waiting.length > 0 && active < concurrency) {
      const resolve = waiting.shift();
      active++;
      resolve();
    }
  }

  async function acquireSemaphore() {
    if (active < concurrency) {
      active++;

      return;
    }

    await new Promise((resolve) => {
      waiting.push(resolve);
    });
  }

  function releaseSemaphore() {
    active--;
    tryNext();
  }

  const tasks = conversations.map(async (conversation) => {
    await acquireSemaphore();

    try {
      const probeMetadata = probes[conversation.probe_id];
      const result = await scoreConversation(conversation, probeMetadata, { execFn });

      completed++;

      if (onResult) {
        await onResult(result);
      }

      if (onProgress) {
        onProgress(completed, total);
      }

      return result;
    } finally {
      releaseSemaphore();
    }
  });

  const settled = await Promise.all(tasks);
  results.push(...settled);

  return results;
}

/**
 * Flag scored results where the judge reported low confidence.
 *
 * Low-confidence results should be reviewed by a human validator
 * to ensure scoring accuracy.
 *
 * @param {Array} scoredResults - Array of scored result objects
 * @returns {Array} Subset of results where confidence === 'low'
 */
export function flagLowConfidence(scoredResults) {
  return scoredResults.filter((result) => result.score.confidence === 'low');
}
