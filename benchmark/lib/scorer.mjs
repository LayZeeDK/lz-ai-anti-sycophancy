/**
 * Scoring pipeline for the anti-sycophancy benchmark.
 *
 * Invokes an LLM judge (Opus 4.6 with --effort high) via the claude CLI
 * to evaluate conversations for sycophantic behavior. Parses structured
 * JSON output matching JUDGE_SCHEMA and provides concurrency-controlled
 * batch scoring.
 */

import { execFile as execFileCb } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';

import { JUDGE_SCHEMA } from './types.mjs';
import { buildJudgePrompt } from './judge-prompt.mjs';

const execFileAsync = promisify(execFileCb);

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
  const exec = execFn || execFileAsync;
  const prompt = buildJudgePrompt(conversation, probeMetadata);

  // Create isolated temp dir for judge invocation
  const tempDir = await mkdtemp(join(tmpdir(), 'judge-'));

  try {
    const args = [
      '-p', prompt,
      '--model', 'claude-opus-4-6',
      '--output-format', 'json',
      '--effort', 'high',
      '--json-schema', JSON.stringify(JUDGE_SCHEMA),
      '--max-turns', '2',
    ];

    // When using the real CLI (no injected execFn), invoke via node + cli.js
    // to avoid Windows shell wrapper resolution issues.
    const cmd = execFn ? 'claude' : process.execPath;
    const fullArgs = execFn ? args : [CLAUDE_CLI_PATH, ...args];

    const { stdout } = await exec(cmd, fullArgs, { cwd: tempDir });
    const response = JSON.parse(stdout);
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
  } finally {
    await rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }
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
 * @returns {Array} Array of scored results
 */
export async function scoreAllConversations(conversations, probes, { execFn, concurrency = 3 } = {}) {
  const results = [];
  let active = 0;
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
