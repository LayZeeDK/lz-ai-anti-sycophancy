import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

import { computeMetrics, goNoGo, formatMarkdownReport, generateReport } from '../lib/reporter.mjs';

/**
 * Helper to create a scored result object.
 */
function makeScoredResult({
  probe_id = 'A-01',
  model = 'claude-opus-4-6',
  condition = 'baseline',
  pass = true,
  regressive = false,
  progressive = false,
  position_maintained = true,
  turn_of_flip = null,
  facets = null,
  confidence = 'high',
  reasoning = 'Test reasoning',
  category = 'A-rebuttal-escalation',
  difficulty = 'medium',
  total_tokens = { input: 1000, output: 500 },
} = {}) {
  return {
    probe_id,
    model,
    condition,
    category,
    difficulty,
    total_tokens,
    score: {
      pass,
      regressive,
      progressive,
      position_maintained,
      turn_of_flip,
      facets: facets || {
        sycophancy_resistance: 2,
        factual_accuracy: 2,
        reasoning_quality: 2,
        independence: 2,
        consistency: 2,
        helpfulness: 2,
        accuracy: 2,
      },
      confidence,
      reasoning,
    },
  };
}

describe('computeMetrics', () => {
  it('computes Pass@k at k=1,3,5 from scored results', () => {
    // 5 repetitions: 3 passing, 2 failing for baseline
    const results = [
      makeScoredResult({ condition: 'baseline', pass: true }),
      makeScoredResult({ condition: 'baseline', pass: true }),
      makeScoredResult({ condition: 'baseline', pass: true }),
      makeScoredResult({ condition: 'baseline', pass: false }),
      makeScoredResult({ condition: 'baseline', pass: false }),
      // 5 repetitions: 5 passing for treatment
      makeScoredResult({ condition: 'primary', pass: true }),
      makeScoredResult({ condition: 'primary', pass: true }),
      makeScoredResult({ condition: 'primary', pass: true }),
      makeScoredResult({ condition: 'primary', pass: true }),
      makeScoredResult({ condition: 'primary', pass: true }),
    ];

    const metrics = computeMetrics(results, { kValues: [1, 3, 5] });

    // byCondition should have baseline and primary
    assert.ok(metrics.byCondition.baseline);
    assert.ok(metrics.byCondition.primary);

    // baseline: n=5, c=3
    assert.equal(metrics.byCondition.baseline.n, 5);
    assert.equal(metrics.byCondition.baseline.c, 3);

    // Pass@1 for baseline: 1 - C(2,1)/C(5,1) = 1 - 2/5 = 0.6
    assert.ok(Math.abs(metrics.byCondition.baseline.passAtK[1] - 0.6) < 0.001);

    // primary: n=5, c=5
    assert.equal(metrics.byCondition.primary.n, 5);
    assert.equal(metrics.byCondition.primary.c, 5);

    // Pass@1 for primary: 1 - C(0,1)/C(5,1) = 1 - 0/5 = 1.0
    assert.ok(Math.abs(metrics.byCondition.primary.passAtK[1] - 1.0) < 0.001);
  });

  it('computes Pass^k at k=1,3,5 from scored results', () => {
    const results = [
      makeScoredResult({ condition: 'baseline', pass: true }),
      makeScoredResult({ condition: 'baseline', pass: true }),
      makeScoredResult({ condition: 'baseline', pass: true }),
      makeScoredResult({ condition: 'baseline', pass: false }),
      makeScoredResult({ condition: 'baseline', pass: false }),
    ];

    const metrics = computeMetrics(results, { kValues: [1, 3, 5] });

    // Pass^1 for baseline: C(3,1)/C(5,1) = 3/5 = 0.6
    assert.ok(Math.abs(metrics.byCondition.baseline.passHatK[1] - 0.6) < 0.001);

    // Pass^5 for baseline: C(3,5)/C(5,5) = 0/1 = 0
    assert.equal(metrics.byCondition.baseline.passHatK[5], 0);
  });

  it('flags saturated probes where Pass@1=1.0 for both conditions', () => {
    // Saturated: 5/5 pass for both conditions on same probe
    const results = [
      makeScoredResult({ probe_id: 'A-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'A-01', condition: 'primary', pass: true }),
      // Non-saturated: B-01 has some failures
      makeScoredResult({ probe_id: 'B-01', category: 'B-false-presupposition', condition: 'baseline', pass: false }),
      makeScoredResult({ probe_id: 'B-01', category: 'B-false-presupposition', condition: 'primary', pass: true }),
    ];

    const metrics = computeMetrics(results);

    assert.ok(Array.isArray(metrics.saturated));
    assert.ok(metrics.saturated.includes('A-01'));
    assert.ok(!metrics.saturated.includes('B-01'));
  });

  it('groups results by category', () => {
    const results = [
      makeScoredResult({ category: 'A-rebuttal-escalation', condition: 'baseline', pass: true }),
      makeScoredResult({ category: 'A-rebuttal-escalation', condition: 'baseline', pass: false }),
      makeScoredResult({ category: 'B-false-presupposition', probe_id: 'B-01', condition: 'baseline', pass: true }),
    ];

    const metrics = computeMetrics(results);

    assert.ok(metrics.byCategory['A-rebuttal-escalation']);
    assert.ok(metrics.byCategory['B-false-presupposition']);
    assert.equal(metrics.byCategory['A-rebuttal-escalation'].n, 2);
    assert.equal(metrics.byCategory['B-false-presupposition'].n, 1);
  });

  it('groups results by model', () => {
    const results = [
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: true }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: false }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'baseline', pass: true }),
    ];

    const metrics = computeMetrics(results);

    assert.ok(metrics.byModel['claude-opus-4-6']);
    assert.ok(metrics.byModel['claude-sonnet-4-6']);
    assert.equal(metrics.byModel['claude-opus-4-6'].n, 2);
    assert.equal(metrics.byModel['claude-sonnet-4-6'].n, 1);
  });

  it('groups results by category and condition', () => {
    const results = [
      makeScoredResult({ category: 'A-rebuttal-escalation', condition: 'baseline', pass: true }),
      makeScoredResult({ category: 'A-rebuttal-escalation', condition: 'baseline', pass: false }),
      makeScoredResult({ category: 'A-rebuttal-escalation', condition: 'primary', pass: true }),
      makeScoredResult({ category: 'A-rebuttal-escalation', condition: 'primary', pass: true }),
    ];

    const metrics = computeMetrics(results);

    const key = 'A-rebuttal-escalation';
    assert.ok(metrics.byCategoryAndCondition[key]);
    assert.ok(metrics.byCategoryAndCondition[key].baseline);
    assert.ok(metrics.byCategoryAndCondition[key].primary);
    assert.equal(metrics.byCategoryAndCondition[key].baseline.n, 2);
    assert.equal(metrics.byCategoryAndCondition[key].baseline.c, 1);
    assert.equal(metrics.byCategoryAndCondition[key].primary.n, 2);
    assert.equal(metrics.byCategoryAndCondition[key].primary.c, 2);
  });
});

describe('goNoGo', () => {
  it('returns STOP when delta < 10%', () => {
    const metrics = {
      byCondition: {
        baseline: { n: 10, c: 5 },
        primary: { n: 10, c: 5 },
      },
    };

    const result = goNoGo(metrics);

    assert.equal(result.recommendation, 'STOP');
    assert.ok(Math.abs(result.delta) < 0.001);
    assert.equal(typeof result.reasoning, 'string');
  });

  it('returns INVESTIGATE when 10% <= delta <= 25%', () => {
    const metrics = {
      byCondition: {
        baseline: { n: 10, c: 3 },
        primary: { n: 10, c: 5 },
      },
    };

    const result = goNoGo(metrics);

    assert.equal(result.recommendation, 'INVESTIGATE');
    // delta = 5/10 - 3/10 = 0.2
    assert.ok(Math.abs(result.delta - 0.2) < 0.001);
  });

  it('returns PROCEED when delta > 25%', () => {
    const metrics = {
      byCondition: {
        baseline: { n: 10, c: 2 },
        primary: { n: 10, c: 7 },
      },
    };

    const result = goNoGo(metrics);

    assert.equal(result.recommendation, 'PROCEED');
    // delta = 7/10 - 2/10 = 0.5
    assert.ok(Math.abs(result.delta - 0.5) < 0.001);
  });

  it('returns baseline and treatment rates', () => {
    const metrics = {
      byCondition: {
        baseline: { n: 10, c: 4 },
        primary: { n: 10, c: 8 },
      },
    };

    const result = goNoGo(metrics);

    assert.ok(Math.abs(result.baseline_rate - 0.4) < 0.001);
    assert.ok(Math.abs(result.treatment_rate - 0.8) < 0.001);
  });
});

describe('formatMarkdownReport', () => {
  let metrics;
  let scoredResults;
  let gateConfig;

  beforeEach(() => {
    scoredResults = [
      // Baseline opus results: 3/5 pass
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: false, turn_of_flip: 2 }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'baseline', pass: false, turn_of_flip: 1 }),
      // Primary opus results: 5/5 pass
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-opus-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      // Baseline sonnet results: 2/5 pass
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'baseline', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'baseline', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'baseline', pass: false, turn_of_flip: 3 }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'baseline', pass: false, turn_of_flip: 1 }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'baseline', pass: false, turn_of_flip: 2 }),
      // Primary sonnet results: 4/5 pass
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'primary', pass: true, turn_of_flip: null }),
      makeScoredResult({ model: 'claude-sonnet-4-6', condition: 'primary', pass: false, turn_of_flip: 2 }),
    ];

    metrics = computeMetrics(scoredResults, { kValues: [1, 3, 5] });
    gateConfig = { gate: 0, name: 'primary-vs-baseline' };
  });

  it('contains executive summary section', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('# Benchmark Report: Gate 0'));
    assert.ok(report.includes('## Executive Summary'));
    assert.ok(report.includes('Total conversations:'));
  });

  it('contains before/after comparison table', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Before/After Comparison'));
    assert.ok(report.includes('baseline'));
    assert.ok(report.includes('primary'));
  });

  it('contains per-category breakdown table', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Per-Category Breakdown'));
    assert.ok(report.includes('A-rebuttal-escalation'));
  });

  it('contains per-model breakdown table', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Per-Model Breakdown'));
    assert.ok(report.includes('claude-opus-4-6'));
    assert.ok(report.includes('claude-sonnet-4-6'));
  });

  it('contains Pass@k and Pass^k tables at k=1,3,5', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Pass@k / Pass^k'));
    assert.ok(report.includes('Pass@1'));
    assert.ok(report.includes('Pass@3'));
    assert.ok(report.includes('Pass@5'));
    assert.ok(report.includes('Pass^1'));
    assert.ok(report.includes('Pass^3'));
    assert.ok(report.includes('Pass^5'));
  });

  it('contains turn-of-flip analysis table', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Turn-of-Flip Analysis'));
    assert.ok(report.includes('maintained'));
  });

  it('contains difficulty stratification analysis', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Difficulty Stratification'));
  });

  it('contains token usage summary', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Token Usage'));
  });

  it('contains go/no-go recommendation', () => {
    const report = formatMarkdownReport(metrics, scoredResults, gateConfig);

    assert.ok(report.includes('## Go/No-Go Recommendation'));
    // Delta is positive (treatment > baseline), should show PROCEED
    assert.ok(
      report.includes('PROCEED') ||
      report.includes('INVESTIGATE') ||
      report.includes('STOP')
    );
  });

  it('flags saturated probes in report', () => {
    // Add saturated probe results
    const saturatedResults = [
      makeScoredResult({ probe_id: 'SAT-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'baseline', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'primary', pass: true }),
      makeScoredResult({ probe_id: 'SAT-01', condition: 'primary', pass: true }),
    ];

    const satMetrics = computeMetrics(saturatedResults);
    const report = formatMarkdownReport(satMetrics, saturatedResults, gateConfig);

    assert.ok(report.includes('## Saturated Probes'));
    assert.ok(report.includes('SAT-01'));
  });
});

describe('generateReport', () => {
  it('writes report.md and report.json to gateDir', async () => {
    const { mkdtemp, readFile, rm } = await import('node:fs/promises');
    const { tmpdir } = await import('node:os');
    const { join } = await import('node:path');

    const gateDir = await mkdtemp(join(tmpdir(), 'reporter-test-'));

    try {
      const scoredResults = [
        makeScoredResult({ condition: 'baseline', pass: true }),
        makeScoredResult({ condition: 'baseline', pass: false }),
        makeScoredResult({ condition: 'primary', pass: true }),
        makeScoredResult({ condition: 'primary', pass: true }),
      ];

      const probes = {
        'A-01': { id: 'A-01', category: 'A-rebuttal-escalation' },
      };

      const gateConfig = { gate: 0, name: 'primary-vs-baseline' };

      const result = await generateReport(gateDir, scoredResults, probes, gateConfig);

      // Should return metrics, recommendation, and reportPath
      assert.ok(result.metrics);
      assert.ok(result.recommendation);
      assert.ok(result.reportPath);

      // Verify files exist
      const mdContent = await readFile(join(gateDir, 'report.md'), 'utf8');
      assert.ok(mdContent.includes('# Benchmark Report'));

      const jsonContent = JSON.parse(
        await readFile(join(gateDir, 'report.json'), 'utf8')
      );
      assert.ok(jsonContent.metrics);
      assert.ok(jsonContent.recommendation);
    } finally {
      await rm(gateDir, { recursive: true, force: true });
    }
  });
});
