---
phase: 01-agents-md-core-rules
plan: 04
subsystem: agents-md
tags: [agents-md, anti-sycophancy, variants, benchmarking, presentation, content]

# Dependency graph
requires:
  - phase: 01-agents-md-core-rules
    plan: 02
    provides: "Primary AGENTS.md with 30 behavioral rules to serve as base for all variants"
provides:
  - "14 presentation variant AGENTS.md files across voice, ordering, and preamble dimensions"
  - "4 content variant AGENTS.md files isolating specific content interventions"
  - "18 total benchmark-ready variant files for Phase 2 comparison testing"
affects: [01-05-PLAN, Phase 2 benchmarking]

# Tech tracking
tech-stack:
  added: []
  patterns: [systematic-variant-generation, dimension-encoded-directory-names, standalone-variant-files]

key-files:
  created:
    - variants/presentation/ordering-alternative-first/AGENTS.md
    - variants/presentation/preamble-none/AGENTS.md
    - variants/presentation/preamble-motivational/AGENTS.md
    - variants/presentation/ordering-alternative-first-preamble-none/AGENTS.md
    - variants/presentation/ordering-alternative-first-preamble-motivational/AGENTS.md
    - variants/presentation/voice-positive-only/AGENTS.md
    - variants/presentation/voice-positive-only-preamble-none/AGENTS.md
    - variants/presentation/voice-positive-only-preamble-motivational/AGENTS.md
    - variants/presentation/voice-behavioral-contract/AGENTS.md
    - variants/presentation/voice-behavioral-contract-preamble-none/AGENTS.md
    - variants/presentation/voice-behavioral-contract-preamble-motivational/AGENTS.md
    - variants/presentation/voice-behavioral-contract-ordering-alternative-first/AGENTS.md
    - variants/presentation/voice-behavioral-contract-ordering-alternative-first-preamble-none/AGENTS.md
    - variants/presentation/voice-behavioral-contract-ordering-alternative-first-preamble-motivational/AGENTS.md
    - variants/content/no-ask-dont-tell/AGENTS.md
    - variants/content/mechanism-cluster/AGENTS.md
    - variants/content/epistemic-4tier/AGENTS.md
    - variants/content/epistemic-binary/AGENTS.md
  modified: []

key-decisions:
  - "Positive-only voice removes all prohibitions (Do not X) and retains only positive alternatives, transforming Never rules into affirmative statements"
  - "Behavioral-contract voice uses first-person commitments (I will/I will not) throughout, including Response Protocol and Epistemic Labeling sections"
  - "Alternative-first ordering swaps sentence order within bidirectional rules so positive alternative precedes prohibition"
  - "Motivational preamble uses helpfulness+honesty framing without sycophancy-priming vocabulary"
  - "Mechanism-cluster variant reorganizes into 6 mechanism groups: Agreement Bias, Conflict Avoidance, Position Capitulation, Flattery, False Corroboration, User Preference Alignment"

patterns-established:
  - "Directory names encode exact dimension changes from primary (e.g., voice-behavioral-contract-ordering-alternative-first-preamble-none)"
  - "Every variant is a complete standalone AGENTS.md usable as a drop-in replacement"
  - "Content variants modify exactly one content intervention while preserving all presentation dimensions"

requirements-completed: [INST-01, INST-08]

# Metrics
duration: 7min
completed: 2026-03-27
---

# Phase 1 Plan 04: AGENTS.md Variants Summary

**18 complete AGENTS.md variant files (14 presentation, 4 content) covering 3 voice styles, 2 orderings, 3 preambles, and 4 content interventions for Phase 2 benchmarking**

## Performance

- **Duration:** 7 min
- **Started:** 2026-03-27T15:17:47Z
- **Completed:** 2026-03-27T15:25:23Z
- **Tasks:** 2
- **Files modified:** 18

## Accomplishments

- Wrote 14 presentation variants spanning the full combinatorial matrix: 5 for voice=prohibition+alternative (ordering/preamble changes), 3 for voice=positive-only (preamble changes), 6 for voice=behavioral-contract (ordering/preamble changes)
- Wrote 4 content variants isolating specific interventions: no-ask-dont-tell (removes Dubois's strongest single intervention), mechanism-cluster (reorganizes by sycophancy mechanism), epistemic-4tier (christianromney's 4-level scheme), epistemic-binary (ctoth's binary scheme)
- All 18 files are complete standalone AGENTS.md files usable as direct drop-in replacements for the primary

## Task Commits

Each task was committed atomically:

1. **Task 1: Write 14 presentation variants** - `5c12580` (feat)
2. **Task 2: Write 4 content variants** - `f9cfad8` (feat)

## Files Created/Modified

- `variants/presentation/ordering-alternative-first/AGENTS.md` - Primary voice, alternative-first ordering, askell preamble
- `variants/presentation/preamble-none/AGENTS.md` - Primary voice and ordering, no preamble
- `variants/presentation/preamble-motivational/AGENTS.md` - Primary voice and ordering, motivational preamble
- `variants/presentation/ordering-alternative-first-preamble-none/AGENTS.md` - Primary voice, alternative-first, no preamble
- `variants/presentation/ordering-alternative-first-preamble-motivational/AGENTS.md` - Primary voice, alternative-first, motivational preamble
- `variants/presentation/voice-positive-only/AGENTS.md` - Positive-only voice (no prohibitions), askell preamble
- `variants/presentation/voice-positive-only-preamble-none/AGENTS.md` - Positive-only voice, no preamble
- `variants/presentation/voice-positive-only-preamble-motivational/AGENTS.md` - Positive-only voice, motivational preamble
- `variants/presentation/voice-behavioral-contract/AGENTS.md` - First-person commitments, prohibition-first, askell preamble
- `variants/presentation/voice-behavioral-contract-preamble-none/AGENTS.md` - First-person commitments, prohibition-first, no preamble
- `variants/presentation/voice-behavioral-contract-preamble-motivational/AGENTS.md` - First-person commitments, prohibition-first, motivational preamble
- `variants/presentation/voice-behavioral-contract-ordering-alternative-first/AGENTS.md` - First-person commitments, alternative-first, askell preamble
- `variants/presentation/voice-behavioral-contract-ordering-alternative-first-preamble-none/AGENTS.md` - First-person commitments, alternative-first, no preamble
- `variants/presentation/voice-behavioral-contract-ordering-alternative-first-preamble-motivational/AGENTS.md` - First-person commitments, alternative-first, motivational preamble
- `variants/content/no-ask-dont-tell/AGENTS.md` - Removes question reframing intervention (isolates 24pp Dubois effect)
- `variants/content/mechanism-cluster/AGENTS.md` - Rules reorganized by sycophancy mechanism (6 groups) instead of user-facing behavior
- `variants/content/epistemic-4tier/AGENTS.md` - OBSERVED/INFERRED/SPECULATIVE/UNVERIFIABLE epistemic labeling
- `variants/content/epistemic-binary/AGENTS.md` - VERIFIED/UNVERIFIED binary epistemic labeling

## Decisions Made

- Positive-only voice transforms Never rules into affirmative statements rather than simply deleting them -- preserves rule count and coverage while removing all prohibition language
- Behavioral-contract voice applies first-person framing consistently throughout the entire file, including Response Protocol and Epistemic Labeling sections, for voice consistency
- Alternative-first ordering restructures the sentence-level phrasing so the positive alternative leads, not just the section-level ordering
- Motivational preamble uses "helpfulness without honesty is flattery" framing that aligns with anti-sycophancy goals without using sycophancy-priming vocabulary
- Mechanism-cluster variant maps all 30 rules into 6 mechanism groups (Agreement Bias, Conflict Avoidance, Position Capitulation, Flattery, False Corroboration, User Preference Alignment) preserving the Always/Only when/Never structure within each group

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- All 18 variant files ready for Phase 2 benchmarking as direct drop-in replacements for the primary AGENTS.md
- Plan 05 (human validation) can now verify both primary and variant files
- Phase 2 benchmark suite can load any variant by path for A/B comparison testing

## Self-Check: PASSED

- [x] 14 presentation variant AGENTS.md files exist in variants/presentation/
- [x] 4 content variant AGENTS.md files exist in variants/content/
- [x] 18 total variant files (14 + 4)
- [x] All files have >30 lines (range: 77-131 lines)
- [x] no-ask-dont-tell contains zero matches for "clarifying question" or "question reframing"
- [x] Commit 5c12580 exists (Task 1)
- [x] Commit f9cfad8 exists (Task 2)
- [x] 01-04-SUMMARY.md exists

---
*Phase: 01-agents-md-core-rules*
*Completed: 2026-03-27*
