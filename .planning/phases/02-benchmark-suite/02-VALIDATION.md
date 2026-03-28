---
phase: 2
slug: benchmark-suite
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-28
---

# Phase 2 -- Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node.js built-in test runner (`node:test`) + assert |
| **Config file** | none -- Wave 0 installs |
| **Quick run command** | `node --test benchmark/test/*.mjs` |
| **Full suite command** | `node --test benchmark/test/*.mjs` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `node --test benchmark/test/*.mjs`
- **After every plan wave:** Run `node --test benchmark/test/*.mjs`
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| TBD | 01 | 0 | BENCH-01 | unit | `node --test benchmark/test/probe-loader.test.mjs` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-02 | integration | `node --test benchmark/test/executor.test.mjs` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-03 | unit | `node --test benchmark/test/scorer.test.mjs` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-04 | unit | `node --test benchmark/test/probe-loader.test.mjs` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-05 | integration | `node --test benchmark/test/executor.test.mjs` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-06 | smoke | `node benchmark/runner.mjs --gate 0 --dry-run` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-07 | unit | `node --test benchmark/test/reporter.test.mjs` | -- W0 | pending |
| TBD | 01 | 0 | BENCH-08 | smoke | Manual verification of result files | manual-only | pending |
| TBD | 01 | 0 | BENCH-09 | smoke | Manual verification of report delta | manual-only | pending |

*Status: pending / green / red / flaky*

---

## Wave 0 Requirements

- [ ] `benchmark/package.json` -- ESM package with `yaml` dependency and test script
- [ ] `benchmark/test/probe-loader.test.mjs` -- validates YAML schema, category coverage, frontmatter fields
- [ ] `benchmark/test/executor.test.mjs` -- tests temp dir creation/cleanup, CLI arg construction (mock claude -p)
- [ ] `benchmark/test/scorer.test.mjs` -- tests judge schema, regressive/progressive classification logic
- [ ] `benchmark/test/reporter.test.mjs` -- tests Pass@k/Pass^k computation, markdown generation

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Results for 2 model families | BENCH-08 | Requires actual model invocations with subscription | Run Gate 0 with --model claude-opus-4-6 and --model claude-sonnet-4-6, verify both produce result files |
| Measurable improvement | BENCH-09 | Requires full benchmark run and human review of report | Run Gate 0, compare before/after delta in markdown report |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
