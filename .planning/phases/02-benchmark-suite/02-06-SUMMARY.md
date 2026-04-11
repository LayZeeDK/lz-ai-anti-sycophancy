---
phase: 02-benchmark-suite
plan: 06
subsystem: testing
tags: [gate-0, benchmark-execution, scoring, resume, stdin-piping, windows-cli]

# Dependency graph
requires:
  - phase: 02-benchmark-suite
    provides: Full pipeline -- probe-loader (Plan 02/03), executor (Plan 03), scorer (Plan 04), reporter + runner (Plan 05)
provides:
  - Gate 0 benchmark results: 440 conversations scored with PROCEED recommendation
  - Raw conversation JSON for 22 probes x 2 models x 2 conditions x 5 repetitions
  - Judge-scored results with 7-facet analysis and regressive/progressive classification
  - Gate 0 report with Pass@k/Pass^k, per-category/model breakdowns, turn-of-flip analysis
affects: [03-research-report]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "stdin file piping via spawn to bypass Windows 32K CreateProcess limit"
    - "Checkpoint-resume for scoring phase (write each result immediately, skip on restart)"
    - "Null-safe response handling in judge prompt transcript"

key-files:
  created:
    - benchmark/results/gate-0/report.md
    - benchmark/results/gate-0/report.json
    - benchmark/results/gate-0/checkpoint.json
    - benchmark/results/gate-0/raw/
    - benchmark/results/gate-0/scored/
  modified:
    - benchmark/lib/judge-prompt.mjs
    - benchmark/lib/scorer.mjs
    - benchmark/runner.mjs

key-decisions:
  - "BENCH-08 deferred to v2 -- Gate 0 ran Opus 4.6 and Sonnet 4.6 (both Claude); non-Claude models require executor changes covered by EXT-01"
  - "Scorer refactored from execFile to spawn+stdin to handle judge prompts exceeding Windows command-line length limits"
  - "Scoring phase writes results to disk immediately rather than batching, enabling crash-safe resume"
  - "Concurrency flag passed through from runner CLI to scoring phase for consistent parallelism control"

patterns-established:
  - "spawnWithStdin helper: pipe file contents to child process stdin via createReadStream"
  - "Scoring resume: build set of existing filenames, filter conversations to skip already-scored"
  - "Progress callback pattern: onProgress(completed, total) and onResult(result) hooks in scoreAllConversations"

requirements-completed: [BENCH-09]

# Metrics
duration: multi-session
completed: 2026-04-11
---

# Phase 2 Plan 6: Gate 0 Benchmark Execution Summary

**Gate 0 benchmark executed: 440/440 conversations scored, PROCEED at +26.8% delta (55.0% -> 81.8%)**

## Performance

- **Duration:** Multi-session (execution started 2026-03-28, scoring completed 2026-04-11)
- **Conversations:** 440 (22 probes x 2 models x 2 conditions x 5 repetitions)
- **Token usage:** ~44.9M total (21.7M baseline + 23.1M primary)
- **Tasks:** 2 (execution + human verification)
- **Files modified:** 3 source files + 883 result files

## Accomplishments

- Executed full Gate 0 benchmark across Opus 4.6 and Sonnet 4.6 with checkpoint resume across multiple sessions
- Fixed Windows CLI pipeline issues: scorer refactored from execFile to spawn+stdin to bypass 32K CreateProcess command-line limit on judge prompts
- Added crash-safe resume to scoring phase: each result written to disk immediately, skipped on restart
- Generated Gate 0 report with go/no-go recommendation: PROCEED (26.8% delta exceeds 25% threshold)

## Gate 0 Results

| Condition | N   | Pass | Rate  |
|-----------|-----|------|-------|
| baseline  | 220 | 121  | 55.0% |
| primary   | 220 | 180  | 81.8% |
| Delta     |     |      | 26.8% |

Per-category strongest gains: multi-turn drift (+36.7%), social sycophancy (+30.0%), unprompted sycophancy (+30.0%). Weakest: epistemic honesty (+15.0%).

Per-model: Sonnet gained more (+30.0%) than Opus (+23.6%).

7 saturated probes identified (A-01, A-02, B-04, D-02, E-02, E-04, F-04) -- non-discriminating, candidates for harder variants.

## Task Commits

1. **Scorer/runner hardening** - `1396c5e` (fix) -- stdin piping, scoring resume, null-safe transcript
2. **Gate 0 results** - `d0b3463` (docs) -- 440 raw + 440 scored conversations, report.md, report.json
3. **Phase 2 closure** - `cfd8f26` (docs) -- BENCH-08 deferred, roadmap updated, phase marked complete

## Files Created/Modified

- `benchmark/results/gate-0/report.md` - Gate 0 markdown report with 12 sections
- `benchmark/results/gate-0/report.json` - Machine-readable metrics
- `benchmark/results/gate-0/checkpoint.json` - Execution checkpoint (440/440 complete)
- `benchmark/results/gate-0/raw/` - 440 raw conversation JSON files
- `benchmark/results/gate-0/scored/` - 440 judge-scored JSON files
- `benchmark/lib/judge-prompt.mjs` - Null-safe response handling in transcript builder
- `benchmark/lib/scorer.mjs` - spawn+stdin refactor, onProgress/onResult callbacks, buildResult extraction
- `benchmark/runner.mjs` - Scoring resume logic, concurrency passthrough, progress streaming

## Decisions Made

- BENCH-08 deferred to v2: executor is hardcoded to `claude -p` so non-Claude models need architectural changes. Covered by EXT-01 in v2 requirements.
- Scorer switched from execFile (entire prompt as CLI arg) to spawn with stdin file piping -- judge prompts with full conversation transcripts easily exceed Windows 32K limit.
- Scoring results written to disk one-at-a-time instead of batched at end, enabling resume after crashes or rate limit interruptions.

## Deviations from Plan

- Plan assumed single-session execution. Actual execution spanned multiple sessions due to token budget and rate limits. Checkpoint resume handled this correctly.
- Scorer required significant refactoring (not anticipated in plan) to work around Windows CLI length limits discovered during execution.

## Issues Encountered

- Windows 32K CreateProcess argument length limit caused scorer failures when judge prompts included full multi-turn conversation transcripts. Fixed by writing prompts to temp files and piping via stdin.
- Missing response fields on failed turns caused null reference errors in judge prompt builder. Fixed with null-safe fallback.

## Next Phase Readiness

- Gate 0 report confirms PROCEED -- AGENTS.md produces measurable sycophancy reduction
- Phase 3 (Research Report) can reference benchmark results directly from report.md and report.json
- All Phase 2 requirements complete except BENCH-08 (deferred to v2)
- 7 saturated probes flagged for replacement if Gate 1 benchmarking is pursued

## Self-Check: PASSED

All result directories verified: 440 raw, 440 scored, report.md, report.json, checkpoint.json present. All 3 commit hashes (1396c5e, d0b3463, cfd8f26) verified in git log.

---
*Phase: 02-benchmark-suite*
*Completed: 2026-04-11*
