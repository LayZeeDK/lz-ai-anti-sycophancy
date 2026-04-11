---
phase: 2
slug: benchmark-suite
status: complete
nyquist_compliant: true
wave_0_complete: true
created: 2026-03-28
audited: 2026-04-11
---

# Phase 2 -- Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node.js built-in test runner (`node:test`) + assert |
| **Config file** | none |
| **Quick run command** | `node --test benchmark/test/*.mjs` |
| **Full suite command** | `node --test benchmark/test/*.mjs` |
| **Estimated runtime** | ~0.3 seconds |
| **Total tests** | 109 (109 pass, 0 fail, 0 todo) |

---

## Sampling Rate

- **After every task commit:** Run `node --test benchmark/test/*.mjs`
- **After every plan wave:** Run `node --test benchmark/test/*.mjs`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 1 second

---

## Per-Task Verification Map

| Requirement | Plan | Test File | Test Coverage | Status |
|-------------|------|-----------|---------------|--------|
| BENCH-01 | 01, 02 | probe-loader.test.mjs | loadAllProbes validates all 6 categories present | COVERED |
| BENCH-02 | 01, 03 | executor.test.mjs, reporter.test.mjs | buildCliArgs tests condition args; computeMetrics groups by condition | COVERED |
| BENCH-03 | 04 | scorer.test.mjs | buildJudgePrompt includes regressive/progressive definitions; judge schema validates classification | COVERED |
| BENCH-04 | 02 | probe-loader.test.mjs | loadAllProbes verifies coding-domain probes exist across subdomains | COVERED |
| BENCH-05 | 02, 03 | executor.test.mjs | runProbe tests 3-turn chaining with session resume | COVERED |
| BENCH-06 | 03, 05 | executor.test.mjs, reporter.test.mjs | Full pipeline: probe loading, execution, scoring, report generation | COVERED |
| BENCH-07 | 01, 05 | pass-at-k.test.mjs, reporter.test.mjs | 13 math tests for Pass@k/Pass^k + computeMetrics at k=1,3,5 | COVERED |
| BENCH-08 | -- | -- | Deferred to v2 (EXT-01) | N/A |
| BENCH-09 | 06 | -- | Manual: Gate 0 report shows +26.8% delta (55.0% -> 81.8%) | MANUAL-ONLY |

---

## Test File Summary

| File | Tests | Covers |
|------|-------|--------|
| `benchmark/test/pass-at-k.test.mjs` | 13 | BENCH-07: combinatorics, passAtK, passHatK, edge cases |
| `benchmark/test/types.test.mjs` | 13 | Contract verification: CATEGORIES, FACETS, JUDGE_SCHEMA, MODELS, GATES |
| `benchmark/test/probe-loader.test.mjs` | 16 | BENCH-01, BENCH-04: YAML loading, validation, category coverage |
| `benchmark/test/executor.test.mjs` | 25 | BENCH-02, BENCH-05, BENCH-06: CLI args, temp dirs, error classification, multi-turn |
| `benchmark/test/scorer.test.mjs` | 21 | BENCH-03: judge prompt, CLI invocation, low-confidence flagging, batch scoring |
| `benchmark/test/reporter.test.mjs` | 21 | BENCH-06, BENCH-07: metrics, go/no-go, markdown report, file generation |

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Verification |
|----------|-------------|------------|--------------|
| Measurable improvement | BENCH-09 | Requires actual model invocations with subscription and human review | Gate 0 report: +26.8% delta, PROCEED recommendation. 440/440 conversations scored. |
| 2+ model families | BENCH-08 | Deferred to v2 | N/A -- covered by EXT-01 |

---

## Validation Sign-Off

- [x] All tasks have automated verify or documented manual verification
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 10s (actual: < 1s)
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** complete

---

## Validation Audit 2026-04-11

| Metric | Count |
|--------|-------|
| Requirements audited | 9 |
| COVERED (automated) | 7 |
| MANUAL-ONLY | 1 (BENCH-09) |
| N/A (deferred) | 1 (BENCH-08) |
| Gaps found | 0 |
| Resolved | 0 |
| Escalated | 0 |

All 109 tests passing. No gaps identified. Phase 2 is Nyquist-compliant.
