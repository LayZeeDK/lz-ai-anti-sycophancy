---
phase: 02-benchmark-suite
plan: 03
subsystem: testing
tags: [yaml, node-test, esm, executor, probe-loader, cli-spawning, temp-dir]

# Dependency graph
requires:
  - phase: 02-benchmark-suite
    provides: ESM scaffold, types.mjs contracts, todo test stubs (Plan 01); 22 YAML probe files (Plan 02)
provides:
  - probe-loader.mjs with YAML loading, validation, and directory scanning
  - executor.mjs with CLI arg construction, temp dir isolation, error classification, and multi-turn chaining
  - Full test suites replacing todo stubs (41 tests total)
affects: [02-04-scorer, 02-05-reporter, 02-06-runner]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Injectable execFn parameter for CLI mocking in tests"
    - "try/finally for temp dir cleanup ensuring isolation even on errors"
    - "Error classification into transient/budget/permanent categories for retry logic"
    - "Pure validateProbe function returning { valid, errors } alongside throwing loadProbe"

key-files:
  created:
    - benchmark/lib/probe-loader.mjs
    - benchmark/lib/executor.mjs
  modified:
    - benchmark/test/probe-loader.test.mjs
    - benchmark/test/executor.test.mjs
    - benchmark/probes/C-multi-turn-drift/C-01-n-plus-one-pressure.yaml
    - benchmark/probes/E-social-sycophancy/E-02-difficulty-gap-easy-vs-hard.yaml
    - benchmark/probes/F-epistemic-honesty/F-01-recommendation-abandonment.yaml

key-decisions:
  - "Injectable execFn dependency for CLI mocking -- avoids actually spawning claude during tests"
  - "runProbe returns partial results on mid-execution errors rather than throwing -- enables error tracking in result envelope"
  - "Fixed 4 YAML syntax errors in probe files caused by unquoted strings with arrow operators and mid-line text"

patterns-established:
  - "Injectable dependency pattern: functions accept optional execFn parameter defaulting to real implementation"
  - "Error classification: transient (network/crash, retry), budget (rate limit/billing, pause), permanent (parse/unknown, skip)"
  - "Dual validation API: validateProbe for non-throwing validation, loadProbe for throwing file-load-and-validate"

requirements-completed: [BENCH-01, BENCH-02, BENCH-05, BENCH-06]

# Metrics
duration: 6min
completed: 2026-03-28
---

# Phase 2 Plan 03: Probe Loader and Executor Summary

**YAML probe loading with validation across 6 categories (22 probes) and CLI executor with temp dir isolation, session chaining, and error classification -- 41 tests replacing all stubs**

## Performance

- **Duration:** 6 min
- **Started:** 2026-03-28T14:38:54Z
- **Completed:** 2026-03-28T14:44:25Z
- **Tasks:** 2
- **Files modified:** 7

## Accomplishments

- probe-loader.mjs: loadProbe reads and validates YAML files, validateProbe provides non-throwing validation, loadAllProbes scans all category subdirectories and verifies coverage
- executor.mjs: buildCliArgs constructs CLI arrays with optional --resume, createWorkDir/cleanupWorkDir manage temp dir isolation, classifyError categorizes failures for retry logic, runTurn/runProbe chain multi-turn conversations via session resume
- 41 tests total (16 probe-loader + 25 executor) replacing all todo stubs from Plan 01
- Fixed 4 YAML syntax errors in 3 probe files from Plan 02 (unquoted strings with special characters)

## Task Commits

Each task was committed atomically:

1. **Task 1: Implement probe-loader.mjs with full tests** - `63a65ad` (feat, TDD)
2. **Task 2: Implement executor.mjs with full tests** - `b0584f4` (feat, TDD)

**Plan metadata:** (pending final commit)

## Files Created/Modified

- `benchmark/lib/probe-loader.mjs` - YAML probe loading: loadProbe, validateProbe, loadAllProbes with category coverage verification
- `benchmark/lib/executor.mjs` - CLI execution: buildCliArgs, createWorkDir, cleanupWorkDir, classifyError, runTurn, runProbe with session chaining
- `benchmark/test/probe-loader.test.mjs` - 16 tests: loading, validation, rejection, category coverage, coding-domain checks
- `benchmark/test/executor.test.mjs` - 25 tests: CLI args, temp dirs, error classification, mock-based turn/probe execution
- `benchmark/probes/C-multi-turn-drift/C-01-n-plus-one-pressure.yaml` - Fixed YAML syntax (unquoted arrow string)
- `benchmark/probes/E-social-sycophancy/E-02-difficulty-gap-easy-vs-hard.yaml` - Fixed YAML syntax (2 unquoted mid-line strings)
- `benchmark/probes/F-epistemic-honesty/F-01-recommendation-abandonment.yaml` - Fixed YAML syntax (unquoted mid-line string)

## Decisions Made

- **Injectable execFn for testing:** Functions accept an optional execFn parameter that defaults to promisified execFile. Tests inject mock functions that return well-formed JSON envelopes, avoiding actual CLI invocations.
- **Partial results on error:** runProbe continues collecting turn results even after encountering errors, returning the partial result envelope. This enables downstream analysis of where failures occurred without losing data from successful turns.
- **YAML probe file fixes:** 4 YAML syntax errors across 3 probe files were caused by unquoted strings containing `->` operators and words following quoted strings that the YAML parser interpreted as scalars. Fixed by wrapping the full string in single quotes.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed 4 YAML syntax errors in 3 probe files**
- **Found during:** Task 1 (probe-loader tests)
- **Issue:** Three probe files had unquoted YAML strings containing `->` operators or bare words following quoted strings, causing parse failures. Files: C-01, E-02 (2 strings), F-01.
- **Fix:** Wrapped offending strings in single quotes with escaped internal single quotes
- **Files modified:** C-01-n-plus-one-pressure.yaml, E-02-difficulty-gap-easy-vs-hard.yaml, F-01-recommendation-abandonment.yaml
- **Verification:** All 22 probes load successfully via loadAllProbes
- **Committed in:** 63a65ad (part of Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** The YAML fixes were necessary to achieve the "loads all 22 probes" done criterion. No scope creep.

## Issues Encountered

None beyond the YAML syntax fixes documented above.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- probe-loader.mjs ready for runner.mjs to import loadAllProbes for probe discovery
- executor.mjs ready for runner.mjs to import runProbe for benchmark execution
- scorer.mjs (Plan 04) and reporter.mjs (Plan 05) test stubs still pending implementation
- All 22 probes validate successfully and are ready for execution

## Self-Check: PASSED

All 4 key files verified on disk. Both commit hashes (63a65ad, b0584f4) verified in git log.

---
*Phase: 02-benchmark-suite*
*Completed: 2026-03-28*
