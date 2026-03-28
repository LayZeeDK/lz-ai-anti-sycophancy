---
phase: 02-benchmark-suite
plan: 04
subsystem: testing
tags: [llm-judge, scorer, sycophancy-detection, chain-of-thought, json-schema, concurrency]

# Dependency graph
requires:
  - phase: 02-benchmark-suite
    plan: 01
    provides: JUDGE_SCHEMA and FACETS type contracts from lib/types.mjs, todo test stubs
provides:
  - Judge prompt construction with anti-bias measures (CoT, explicit definitions, priming-free)
  - Scorer pipeline for LLM judge invocation with structured JSON output
  - Concurrency-controlled batch scoring with semaphore pattern
  - Low-confidence result flagging for human validation
affects: [02-05, 02-06]

# Tech tracking
tech-stack:
  added: []
  patterns: [injectable-execFn for test mocking, semaphore concurrency control, temp-dir-per-judge-call isolation]

key-files:
  created:
    - benchmark/lib/judge-prompt.mjs
    - benchmark/lib/scorer.mjs
  modified:
    - benchmark/test/scorer.test.mjs

key-decisions:
  - "Order-independent test assertions for concurrent scoreAllConversations to handle non-deterministic call ordering"
  - "Separate judge-prompt.mjs module from scorer.mjs for testability and single-responsibility"
  - "Default concurrency of 3 for judge calls (lower than runner 5 since judge uses --effort high)"

patterns-established:
  - "buildJudgePrompt returns plain string -- no template engine, no external dependency"
  - "scoreConversation creates isolated temp dir per judge call and cleans up in finally block"
  - "Injectable execFn pattern consistent with executor module for CLI mocking in tests"
  - "Semaphore-based concurrency: counter + promise queue (~20 lines, no npm dependency)"

requirements-completed: [BENCH-03, BENCH-06]

# Metrics
duration: 4min
completed: 2026-03-28
---

# Phase 2 Plan 4: Scoring Pipeline Summary

**Bias-aware LLM judge prompt with CoT reasoning, regressive/progressive definitions, 7-facet rubric, and concurrency-controlled scorer pipeline**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-28T14:39:05Z
- **Completed:** 2026-03-28T14:43:11Z
- **Tasks:** 1 (TDD: RED -> GREEN)
- **Files modified:** 3

## Accomplishments
- judge-prompt.mjs builds structured prompts with 6 sections: role, definitions, facet rubric, probe context, transcript, CoT analysis instructions
- scorer.mjs invokes claude CLI with --json-schema JUDGE_SCHEMA, --effort high, --model claude-opus-4-6 and parses structured_output
- scoreAllConversations with semaphore concurrency control (default 3, configurable)
- flagLowConfidence filters results where confidence === 'low' for human validation
- Prompt verified free of sycophancy-priming vocabulary (no "great", "excellent", etc.)

## Task Commits

Each task was committed atomically:

1. **Task 1 (TDD RED): Failing tests for judge prompt and scorer** - `1197b74` (test)
2. **Task 1 (TDD GREEN): Implement judge-prompt.mjs and scorer.mjs** - `7101212` (feat)

**Plan metadata:** (pending final commit)

## Files Created/Modified
- `benchmark/lib/judge-prompt.mjs` - Judge prompt construction with anti-bias measures: CoT, definitions, facet rubric, probe context, transcript formatting
- `benchmark/lib/scorer.mjs` - scoreConversation (judge invocation), scoreAllConversations (batch with concurrency), flagLowConfidence
- `benchmark/test/scorer.test.mjs` - 21 tests replacing 8 todo stubs: prompt content (11), CLI args and parsing (6), low-confidence flagging (2), batch scoring and concurrency (2)

## Decisions Made
- Used order-independent assertions in the scoreAllConversations test because concurrency makes call ordering non-deterministic
- Separated judge-prompt.mjs from scorer.mjs for testability -- buildJudgePrompt is a pure function that returns a string
- Set default concurrency to 3 (lower than runner's 5) since judge uses --effort high and consumes more tokens per call

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered
- The "scores all conversations" test initially failed because the mock execFn used a call counter that was non-deterministic under concurrent execution. Fixed by using a uniform mock response and order-independent assertions.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- scorer.mjs and judge-prompt.mjs are ready for integration with the runner (Plan 05)
- Reporter (Plan 05) can consume scored results from scoreAllConversations
- Full test suite: 63 pass, 0 fail, 20 todo (stubs for executor and reporter from Plans 03 and 05)

## Self-Check: PASSED

All 3 created/modified files verified on disk. All 2 commit hashes (1197b74, 7101212) verified in git log.

---
*Phase: 02-benchmark-suite*
*Completed: 2026-03-28*
