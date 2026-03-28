#!/usr/bin/env node

/**
 * runner.mjs -- Main CLI orchestrator for the anti-sycophancy benchmark suite.
 *
 * Wires together probe-loader, executor, scorer, and reporter into a
 * gated pipeline: load probes -> execute -> score -> report.
 *
 * Usage:
 *   node benchmark/runner.mjs --gate 0 --dry-run
 *   node benchmark/runner.mjs --gate 0 --concurrency 5
 *   node benchmark/runner.mjs --gate 0 --resume
 *   node benchmark/runner.mjs --gate 0 --model opus --probe A-01
 *   node benchmark/runner.mjs --gate 0 --score-only
 *   node benchmark/runner.mjs --gate 0 --report-only
 */

import { parseArgs } from 'node:util';
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadAllProbes } from './lib/probe-loader.mjs';
import { runProbe, classifyError } from './lib/executor.mjs';
import { scoreAllConversations } from './lib/scorer.mjs';
import { generateReport } from './lib/reporter.mjs';
import { GATES, MODELS } from './lib/types.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Project root is one level up from benchmark/
const PROJECT_ROOT = resolve(__dirname, '..');

const CHECKPOINT_FILE = 'checkpoint.json';

/**
 * Parse and validate CLI arguments.
 *
 * @returns {object} Parsed options
 */
function parseCli() {
  const { values } = parseArgs({
    options: {
      gate: { type: 'string' },
      concurrency: { type: 'string', default: '5' },
      probe: { type: 'string' },
      model: { type: 'string' },
      condition: { type: 'string' },
      category: { type: 'string' },
      'dry-run': { type: 'boolean', default: false },
      resume: { type: 'boolean', default: false },
      'score-only': { type: 'boolean', default: false },
      'report-only': { type: 'boolean', default: false },
    },
    strict: true,
  });

  if (values.gate === undefined) {
    logError('--gate is required (0-3)');
    process.exit(1);
  }

  const gate = parseInt(values.gate, 10);

  if (isNaN(gate) || gate < 0 || gate > 3) {
    logError('--gate must be 0, 1, 2, or 3');
    process.exit(1);
  }

  if (!GATES[gate]) {
    logError(`Gate ${gate} is not configured`);
    process.exit(1);
  }

  const concurrency = parseInt(values.concurrency, 10);

  if (isNaN(concurrency) || concurrency < 1) {
    logError('--concurrency must be a positive integer');
    process.exit(1);
  }

  if (values.model && !MODELS[values.model]) {
    logError(`Unknown model "${values.model}". Valid: ${Object.keys(MODELS).join(', ')}`);
    process.exit(1);
  }

  return {
    gate,
    concurrency,
    probeFilter: values.probe || null,
    modelFilter: values.model || null,
    conditionFilter: values.condition || null,
    categoryFilter: values.category || null,
    dryRun: values['dry-run'],
    resume: values.resume,
    scoreOnly: values['score-only'],
    reportOnly: values['report-only'],
  };
}

/**
 * Log a message to stderr (does not interfere with piped JSON).
 *
 * @param {string} msg
 */
function log(msg) {
  process.stderr.write(msg + '\n');
}

/**
 * Log an error to stderr.
 *
 * @param {string} msg
 */
function logError(msg) {
  process.stderr.write(`[ERROR] ${msg}\n`);
}

/**
 * Resolve the variant file path for a given gate and condition.
 *
 * @param {number} gate - Gate number
 * @param {string} condition - Condition name
 * @returns {string|null} Absolute path to the variant AGENTS.md, or null for baseline
 */
function resolveVariantPath(gate, condition) {
  if (condition === 'baseline') {
    return null;
  }

  if (gate === 0 && condition === 'primary') {
    // Gate 0 primary uses the root AGENTS.md
    return resolve(PROJECT_ROOT, 'AGENTS.md');
  }

  // Gates 1-2 use variants from the variants/ directory
  // The condition name maps to a subdirectory in variants/content/ or variants/presentation/
  const contentPath = resolve(PROJECT_ROOT, 'variants', 'content', condition, 'AGENTS.md');
  const presentationPath = resolve(PROJECT_ROOT, 'variants', 'presentation', condition, 'AGENTS.md');

  // Gate 1 = content variants, Gate 2 = presentation variants
  if (gate === 1) {
    return contentPath;
  }

  if (gate === 2) {
    return presentationPath;
  }

  // Gate 3 uses primary (root AGENTS.md)
  return resolve(PROJECT_ROOT, 'AGENTS.md');
}

/**
 * Get the list of conditions for a gate.
 *
 * @param {number} gate - Gate number
 * @returns {string[]} Condition names
 */
function getConditions(gate) {
  // All gates have baseline
  const conditions = ['baseline'];

  if (gate === 0) {
    conditions.push('primary');
  } else if (gate === 1) {
    // Content variants
    conditions.push(
      'epistemic-4tier',
      'epistemic-binary',
      'mechanism-cluster',
      'no-ask-dont-tell'
    );
  } else if (gate === 2) {
    // Presentation variants -- subset for screening
    conditions.push(
      'ordering-alternative-first',
      'preamble-motivational',
      'preamble-none',
      'voice-behavioral-contract',
      'voice-positive-only'
    );
  } else if (gate === 3) {
    conditions.push('primary');
  }

  return conditions;
}

/**
 * Build the execution plan (work items) for the given configuration.
 *
 * @param {Array} probes - Loaded probes
 * @param {object} gateConfig - Gate configuration from GATES
 * @param {number} gate - Gate number
 * @param {object} filters - CLI filters
 * @returns {Array} Work items
 */
function buildWorkItems(probes, gateConfig, gate, filters) {
  const models = gateConfig.models
    .filter((m) => !filters.modelFilter || m === filters.modelFilter);

  const conditions = getConditions(gate)
    .filter((c) => !filters.conditionFilter || c === filters.conditionFilter);

  const repetitions = gateConfig.repetitions;
  const effort = gateConfig.effort;

  const workItems = [];

  for (const probe of probes) {
    if (filters.probeFilter && probe.id !== filters.probeFilter) {
      continue;
    }

    if (filters.categoryFilter && !probe.category.startsWith(filters.categoryFilter)) {
      continue;
    }

    for (const modelKey of models) {
      const model = MODELS[modelKey];

      for (const condition of conditions) {
        const variantPath = resolveVariantPath(gate, condition);

        for (let rep = 1; rep <= repetitions; rep++) {
          workItems.push({
            probe,
            model,
            modelKey,
            condition,
            variantPath,
            effort,
            repetition: rep,
            key: `${probe.id}:${modelKey}:${condition}:${rep}`,
          });
        }
      }
    }
  }

  return workItems;
}

/**
 * Load checkpoint from gate directory.
 *
 * @param {string} gateDir
 * @returns {object} Checkpoint data
 */
async function loadCheckpoint(gateDir) {
  try {
    const data = await readFile(join(gateDir, CHECKPOINT_FILE), 'utf8');

    return JSON.parse(data);
  } catch {
    return { completed: [] };
  }
}

/**
 * Save checkpoint to gate directory.
 *
 * @param {string} gateDir
 * @param {object} checkpoint
 */
async function saveCheckpoint(gateDir, checkpoint) {
  await writeFile(
    join(gateDir, CHECKPOINT_FILE),
    JSON.stringify(checkpoint, null, 2),
    'utf8'
  );
}

/**
 * Wait for a duration (milliseconds).
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Execute all work items with concurrency control.
 *
 * @param {Array} workItems
 * @param {string} gateDir
 * @param {object} checkpoint
 * @param {number} concurrency
 */
async function executeWorkItems(workItems, gateDir, checkpoint, concurrency) {
  const rawDir = join(gateDir, 'raw');
  await mkdir(rawDir, { recursive: true });

  let completed = 0;
  const total = workItems.length;
  let totalInputTokens = 0;
  let totalOutputTokens = 0;

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

  const tasks = workItems.map(async (item) => {
    // Skip completed items
    if (checkpoint.completed.includes(item.key)) {
      completed++;
      log(`[${completed}/${total}] SKIP ${item.key} (already completed)`);

      return;
    }

    await acquireSemaphore();

    try {
      let result = null;
      let lastError = null;

      // Retry up to 3 times for transient errors
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          result = await runProbe(item.probe, {
            model: item.model,
            condition: item.condition,
            variant: item.variantPath,
            effort: item.effort,
            repetition: item.repetition,
          });

          // Check if result has errors
          const lastTurn = result.turns[result.turns.length - 1];

          if (lastTurn && lastTurn.error) {
            const classification = lastTurn.classification;

            if (classification === 'budget') {
              // Budget error: save checkpoint and exit
              await saveCheckpoint(gateDir, checkpoint);
              logError('Budget limit reached. Resume later with --resume.');
              process.exit(0);
            }

            if (classification === 'transient' && attempt < 3) {
              const backoff = Math.pow(2, attempt - 1) * 1000;
              log(`[RETRY] ${item.key} attempt ${attempt}/3 (${lastTurn.error}) -- waiting ${backoff}ms`);
              await delay(backoff);
              continue;
            }

            if (classification === 'permanent' || attempt === 3) {
              logError(`[SKIP] ${item.key}: ${lastTurn.error}`);
              break;
            }
          }

          break; // Success
        } catch (err) {
          lastError = err;
          const classification = classifyError(err);

          if (classification === 'budget') {
            await saveCheckpoint(gateDir, checkpoint);
            logError('Budget limit reached. Resume later with --resume.');
            process.exit(0);
          }

          if (classification === 'transient' && attempt < 3) {
            const backoff = Math.pow(2, attempt - 1) * 1000;
            log(`[RETRY] ${item.key} attempt ${attempt}/3 -- waiting ${backoff}ms`);
            await delay(backoff);
            continue;
          }

          logError(`[SKIP] ${item.key}: ${err.message}`);
          break;
        }
      }

      if (result) {
        // Write raw result
        const filename = `${item.probe.id}_${item.modelKey}_${item.condition}_${item.repetition}.json`;
        await writeFile(
          join(rawDir, filename),
          JSON.stringify(result, null, 2),
          'utf8'
        );

        // Track tokens
        totalInputTokens += result.total_tokens.input;
        totalOutputTokens += result.total_tokens.output;

        // Update checkpoint
        checkpoint.completed.push(item.key);
        await saveCheckpoint(gateDir, checkpoint);
      }

      completed++;
      log(`[${completed}/${total}] ${item.key}`);

      // Every 10 conversations, print token summary
      if (completed % 10 === 0) {
        const remaining = total - completed;
        const avgInputPerConv = totalInputTokens / completed;
        const avgOutputPerConv = totalOutputTokens / completed;
        const projInput = totalInputTokens + avgInputPerConv * remaining;
        const projOutput = totalOutputTokens + avgOutputPerConv * remaining;

        log(`[TOKENS] Input: ${totalInputTokens} Output: ${totalOutputTokens} ` +
            `Projected total: ~${Math.round(projInput + projOutput)} tokens`);
      }
    } finally {
      releaseSemaphore();
    }
  });

  await Promise.all(tasks);

  log(`[COMPLETE] ${completed}/${total} conversations executed`);
  log(`[TOKENS] Total input: ${totalInputTokens} output: ${totalOutputTokens}`);
}

/**
 * Load raw result files from a gate directory.
 *
 * @param {string} rawDir
 * @returns {Array} Loaded raw results
 */
async function loadRawResults(rawDir) {
  let files;

  try {
    files = await readdir(rawDir);
  } catch {
    return [];
  }

  const results = [];

  for (const file of files) {
    if (!file.endsWith('.json')) {
      continue;
    }

    try {
      const data = await readFile(join(rawDir, file), 'utf8');
      results.push(JSON.parse(data));
    } catch (err) {
      logError(`Failed to load ${file}: ${err.message}`);
    }
  }

  return results;
}

/**
 * Load scored result files from a gate directory.
 *
 * @param {string} scoredDir
 * @returns {Array} Loaded scored results
 */
async function loadScoredResults(scoredDir) {
  let files;

  try {
    files = await readdir(scoredDir);
  } catch {
    return [];
  }

  const results = [];

  for (const file of files) {
    if (!file.endsWith('.json')) {
      continue;
    }

    try {
      const data = await readFile(join(scoredDir, file), 'utf8');
      results.push(JSON.parse(data));
    } catch (err) {
      logError(`Failed to load scored result ${file}: ${err.message}`);
    }
  }

  return results;
}

/**
 * Run the scoring phase on raw results.
 *
 * @param {Array} rawResults - Raw conversation results
 * @param {object} probesMap - Map of probe_id -> probe metadata
 * @param {string} scoredDir - Output directory for scored results
 */
async function runScoringPhase(rawResults, probesMap, scoredDir) {
  await mkdir(scoredDir, { recursive: true });

  log(`[SCORING] ${rawResults.length} conversations to score...`);

  const scored = await scoreAllConversations(rawResults, probesMap, {
    concurrency: 3,
  });

  for (const result of scored) {
    const filename = `${result.probe_id}_${result.model}_${result.condition}.json`;
    await writeFile(
      join(scoredDir, filename),
      JSON.stringify(result, null, 2),
      'utf8'
    );
  }

  log(`[SCORING] Complete: ${scored.length} results scored`);

  return scored;
}

/**
 * Print a dry-run execution plan summary.
 *
 * @param {Array} workItems
 * @param {Array} probes
 * @param {object} gateConfig
 * @param {number} gate
 * @param {object} opts
 */
function printDryRun(workItems, probes, gateConfig, gate, opts) {
  const models = [...new Set(workItems.map((w) => w.modelKey))];
  const conditions = [...new Set(workItems.map((w) => w.condition))];
  const probeIds = [...new Set(workItems.map((w) => w.probe.id))];

  log('=== DRY RUN ===');
  log('');
  log(`Gate: ${gate} (${gateConfig.name})`);
  log(`Description: ${gateConfig.description}`);
  log(`Effort: ${gateConfig.effort}`);
  log(`Repetitions: ${gateConfig.repetitions}`);
  log(`Concurrency: ${opts.concurrency}`);
  log('');
  log(`Probes: ${probeIds.length}`);
  log(`Models: ${models.join(', ')}`);
  log(`Conditions: ${conditions.join(', ')}`);
  log(`Total conversations: ${workItems.length}`);
  log('');
  log('--- Probes ---');

  for (const id of probeIds) {
    const probe = probes.find((p) => p.id === id);
    log(`  ${id} [${probe.category}] ${probe.domain}/${probe.subdomain} (${probe.difficulty})`);
  }

  log('');
  log('--- Work Items (first 20) ---');

  for (const item of workItems.slice(0, 20)) {
    log(`  ${item.key}`);
  }

  if (workItems.length > 20) {
    log(`  ... and ${workItems.length - 20} more`);
  }

  // Estimated token usage
  // Rough estimate: ~4000 tokens per conversation (setup + 3 turns)
  const estimatedTokensPerConv = 4000;
  const estimatedTotal = workItems.length * estimatedTokensPerConv;
  log('');
  log(`Estimated tokens: ~${estimatedTotal.toLocaleString('en-US')} (rough estimate at ${estimatedTokensPerConv}/conversation)`);
}

/**
 * Main entry point.
 */
async function main() {
  const opts = parseCli();
  const gateConfig = GATES[opts.gate];

  // Load probes
  const probesDir = join(__dirname, 'probes');
  log(`Loading probes from ${probesDir}...`);
  const probes = await loadAllProbes(probesDir);
  log(`Loaded ${probes.length} probes`);

  // Build work items
  const workItems = buildWorkItems(probes, gateConfig, opts.gate, {
    probeFilter: opts.probeFilter,
    modelFilter: opts.modelFilter,
    conditionFilter: opts.conditionFilter,
    categoryFilter: opts.categoryFilter,
  });

  // Dry run
  if (opts.dryRun) {
    printDryRun(workItems, probes, gateConfig, opts.gate, opts);

    return;
  }

  // Setup gate directory
  const gateDir = join(__dirname, 'results', `gate-${opts.gate}`);
  await mkdir(gateDir, { recursive: true });

  const rawDir = join(gateDir, 'raw');
  const scoredDir = join(gateDir, 'scored');

  // Build probe metadata map for scorer
  const probesMap = {};

  for (const probe of probes) {
    probesMap[probe.id] = probe;
  }

  // Execute phase
  if (!opts.scoreOnly && !opts.reportOnly) {
    const checkpoint = opts.resume
      ? await loadCheckpoint(gateDir)
      : { completed: [] };

    if (opts.resume) {
      log(`[RESUME] Found ${checkpoint.completed.length} completed items`);
    }

    await executeWorkItems(workItems, gateDir, checkpoint, opts.concurrency);
  }

  // Score phase
  if (!opts.reportOnly) {
    const rawResults = await loadRawResults(rawDir);

    if (rawResults.length === 0) {
      logError('No raw results found to score');

      return;
    }

    await runScoringPhase(rawResults, probesMap, scoredDir);
  }

  // Report phase
  const scoredResults = await loadScoredResults(scoredDir);

  if (scoredResults.length === 0) {
    logError('No scored results found for report generation');

    return;
  }

  const result = await generateReport(gateDir, scoredResults, probesMap, {
    gate: opts.gate,
    name: gateConfig.name,
  });

  log('');
  log('=== REPORT ===');
  log(`Recommendation: ${result.recommendation.recommendation}`);
  log(`Delta: ${(result.recommendation.delta * 100).toFixed(1)}%`);
  log(`Report: ${result.reportPath}`);
}

main().catch((err) => {
  logError(err.message);
  process.exit(1);
});
