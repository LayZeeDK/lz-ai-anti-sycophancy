---
phase: 01-agents-md-core-rules
plan: 01
subsystem: validation
tags: [testing, markdown, shell, sycophancy, anti-sycophancy, agents-md]

# Dependency graph
requires:
  - phase: none
    provides: "First plan in phase -- no prior dependencies"
provides:
  - "Structural checklist mapping 14 INST requirements to verifiable properties"
  - "8 canonical test cases with coding-domain prompts and pass/fail criteria"
  - "Quality scoring rubric adapted from claude-md-improver (6 criteria, 100-point scale)"
  - "Automated verification script for line counts, rule counts, section ordering, and priming words"
affects: [01-02-PLAN, 01-03-PLAN, 01-04-PLAN, 01-05-PLAN]

# Tech tracking
tech-stack:
  added: [bash]
  patterns: [structural-verification, test-case-specification, quality-rubric]

key-files:
  created:
    - validation/structural-checklist.md
    - validation/canonical-test-cases.md
    - validation/quality-scoring.md
    - validation/verify-structure.sh
  modified: []

key-decisions:
  - "Excluded INST-09 and INST-16 from structural checklist (require live LLM interaction and subjective scoring)"
  - "Designed verify-structure.sh to strip backtick-quoted content before priming word search to avoid false positives on prohibited-word examples"
  - "Used 4-level scoring (0/Basic/Good/Complete) for quality rubric to match claude-md-improver granularity"

patterns-established:
  - "Validation-first: verification artifacts created before the deliverable they verify"
  - "Binary pass/fail criteria for every canonical test case"
  - "Structural checks automated via shell script, behavioral checks require manual LLM testing"

requirements-completed: [INST-09, INST-16]

# Metrics
duration: 5min
completed: 2026-03-27
---

# Phase 1 Plan 01: Validation Scaffolds Summary

**Structural checklist, 8 coding-domain canonical test cases, adapted quality rubric, and automated verification script for AGENTS.md validation**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-27T15:00:23Z
- **Completed:** 2026-03-27T15:05:52Z
- **Tasks:** 2
- **Files modified:** 4

## Accomplishments
- Mapped all 14 structurally verifiable requirements (INST-01 through INST-08, INST-10 through INST-15) to concrete properties with automated or manual verification methods
- Created 8 copy-pasteable test cases grounded in coding contexts (Python GIL, N+1 queries, TypeScript bugs, React state management) covering factual capitulation, emotional pushback, false confidence, absence-claim framing, recommendation abandonment, difficulty-gap, casual/formal pushback, and multi-turn pressure
- Adapted all 6 claude-md-improver criteria to anti-sycophancy AGENTS.md context with 4-level scoring and 70/100 passing threshold
- Built a Bash verification script that checks line counts, rule counts, section ordering, reference doc links, epistemic labels, and sycophancy-priming words

## Task Commits

Each task was committed atomically:

1. **Task 1: Create structural checklist and verification script** - `a4c235f` (feat)
2. **Task 2: Create canonical test cases and quality scoring rubric** - `8f733f1` (feat)

## Files Created/Modified
- `validation/structural-checklist.md` - Requirement-to-structure mapping table for 14 INST requirements
- `validation/verify-structure.sh` - Automated structural verification script (line counts, rule counts, ordering, priming words)
- `validation/canonical-test-cases.md` - 8 test cases with coding-domain prompts and binary pass/fail criteria
- `validation/quality-scoring.md` - Adapted claude-md-improver rubric with 6 criteria and 100-point scale

## Decisions Made
- Excluded INST-09 (live LLM tests) and INST-16 (quality scoring) from the structural checklist because they cannot be automated -- they are covered by canonical-test-cases.md and quality-scoring.md respectively
- Designed the priming-word check in verify-structure.sh to strip backtick-quoted content before searching, so that prohibited words used as examples in rule text (e.g., listing `"great"` as a banned word) do not trigger false positives
- Used the same 4-level scoring granularity as claude-md-improver (None/Basic/Good/Complete) with adapted descriptions for each criterion

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None -- no external service configuration required.

## Next Phase Readiness
- All 4 validation files in place for Plans 02-05 to use
- verify-structure.sh ready to run against AGENTS.md once created in Plan 02
- Canonical test cases ready for manual execution during Plan 05 human validation checkpoint
- Quality scoring rubric ready for scoring once AGENTS.md is complete

## Self-Check: PASSED

- [x] validation/structural-checklist.md exists (50 lines, >= 30 required)
- [x] validation/canonical-test-cases.md exists (302 lines, >= 80 required)
- [x] validation/quality-scoring.md exists (157 lines, >= 30 required)
- [x] validation/verify-structure.sh exists (190 lines, >= 15 required)
- [x] Commit a4c235f exists (Task 1)
- [x] Commit 8f733f1 exists (Task 2)
- [x] git grep TC-0 returns 8 (all test cases)
- [x] git grep INST- returns 17 (>= 14 requirement references)
- [x] bash -n verify-structure.sh passes (syntactically valid)

---
*Phase: 01-agents-md-core-rules*
*Completed: 2026-03-27*
