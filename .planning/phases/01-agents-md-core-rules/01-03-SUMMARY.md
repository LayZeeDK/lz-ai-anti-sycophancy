---
phase: 01-agents-md-core-rules
plan: 03
subsystem: agents-md
tags: [agents-md, anti-sycophancy, reference-docs, progressive-disclosure, examples]

# Dependency graph
requires:
  - phase: 01-agents-md-core-rules
    plan: 02
    provides: "Primary AGENTS.md with 30 behavioral rules and Reference Docs section linking all 5 docs"
provides:
  - "5 progressive disclosure reference docs with good/bad examples and edge-case guidance"
  - "30 anti-sycophancy pattern pairs (15 patterns x coding + non-coding)"
  - "Disagreement protocol with hold/update criteria, drift detection, and escalation levels"
  - "Epistemic labeling guide with 3-tier definitions and edge cases"
  - "Claim verification guide with epistemic pause, 7 false presupposition patterns, and absence claims"
  - "Adoption guide with customization safety rules, token-priming word list, and context rot mitigation"
affects: [01-05-PLAN]

# Tech tracking
tech-stack:
  added: []
  patterns: [progressive-disclosure-reference-docs, coding-and-noncoding-dual-examples]

key-files:
  created:
    - docs/anti-sycophancy-patterns.md
    - docs/disagreement-protocol.md
    - docs/claim-verification-guide.md
    - docs/epistemic-labeling-guide.md
    - docs/adoption-guide.md

key-decisions:
  - "30 good/bad pattern pairs (15 patterns x 2 domain variants) exceeding 15+ minimum for thorough coverage"
  - "Each reference doc ends with an explicit reminder that behavioral rules live only in root AGENTS.md"
  - "Epistemic labeling guide documents relationship to christianromney 4-tier and ctoth binary for transparency"
  - "Adoption guide includes decision-point runbook pattern as a practical anti-sycophancy technique"

patterns-established:
  - "Dual-domain examples: every pattern includes both a coding example and a non-coding example"
  - "Reference doc footer: each doc closes with 'behavioral rules are in the root AGENTS.md' to prevent rule duplication"
  - "Section-per-technique: each reference doc organizes content by technique with worked examples"

requirements-completed: [INST-07]

# Metrics
duration: 8min
completed: 2026-03-27
---

# Phase 1 Plan 03: Progressive Disclosure Reference Docs Summary

**5 reference docs with 989 total lines: 30 anti-sycophancy pattern pairs, disagreement protocol with drift detection, 3-tier epistemic labeling guide, claim verification with 7 false-presupposition patterns, and adoption guide with token-priming warnings**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-27T15:17:40Z
- **Completed:** 2026-03-27T15:26:31Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments

- Wrote all 5 progressive disclosure reference docs linked from the primary AGENTS.md, completing INST-07 (progressive disclosure)
- anti-sycophancy-patterns.md contains 15 named patterns with 30 good/bad example pairs covering all 4 sycophancy clusters (stance, assessment, tone, task), each with coding and non-coding variants
- disagreement-protocol.md covers when to hold position (5 scenarios), when to update (4 criteria), multi-turn drift detection (5 signals + consistency technique), third-person perspective (step-by-step + worked example), Hubinger's 3 escalation levels, and casual vs. formal pushback handling
- claim-verification-guide.md covers the epistemic pause technique (step-by-step + worked example), 7 false presupposition patterns, citation/authority verification protocol, absence claim scoping, and difficulty-based vigilance
- epistemic-labeling-guide.md defines all 3 tiers with definitions, tests, and multiple examples per tier; covers 5 edge cases (agent reasoning, confident language mismatch, upgrading labels, mixed evidence, user-repeated claims); documents relationship to 4-tier and binary alternative schemes
- adoption-guide.md covers quick start, safe/unsafe customization lists, 9-word token-priming prohibition list, personalization warning, context rot mitigation with injection schedule, decision-point runbook pattern, and 5 research-backed anti-patterns

## Task Commits

Each task was committed atomically:

1. **Task 1: Write anti-sycophancy patterns, disagreement protocol, and claim verification guide** - `73967da` (feat)
2. **Task 2: Write epistemic labeling guide and adoption guide** - `63806e1` (feat)

## Files Created/Modified

- `docs/anti-sycophancy-patterns.md` - Per-rule example catalog with 15 patterns x 2 domain variants (coding + non-coding) covering Clusters A-D
- `docs/disagreement-protocol.md` - Pushback handling, multi-turn drift detection, third-person technique, escalation levels, casual vs. formal pushback
- `docs/claim-verification-guide.md` - Epistemic pause, 7 false presupposition patterns, citation/authority verification, absence claims, difficulty-based vigilance
- `docs/epistemic-labeling-guide.md` - VERIFIED/INFERRED/UNVERIFIED definitions, usage format options, 5 edge cases, relationship to alternative schemes
- `docs/adoption-guide.md` - Quick start, safe/unsafe customization, token-priming word list, personalization warning, context rot mitigation, decision-point runbook, 5 anti-patterns

## Decisions Made

- Created 30 good/bad example pairs (15 patterns x coding + non-coding) rather than the 15 minimum -- thorough coverage of all 4 clusters required more examples to avoid underrepresenting any cluster
- Each reference doc ends with an explicit footer stating that behavioral rules live only in the root AGENTS.md -- prevents future confusion about where rules are authoritative
- The epistemic labeling guide documents the relationship to christianromney's 4-tier and ctoth's binary scheme -- transparency about the design choice helps adopters who may be familiar with those alternatives
- Added the decision-point runbook pattern to the adoption guide as a practical technique that prevents both sycophantic agreement and stubborn refusal

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- All 5 reference docs complete and linked from AGENTS.md Reference Docs section
- Plan 04 (variants) can proceed -- it derives 18 variant files from the primary AGENTS.md and does not depend on reference docs
- Plan 05 (human validation) can now fully validate progressive disclosure linkage as part of the canonical test cases

## Self-Check: PASSED

- [x] docs/anti-sycophancy-patterns.md exists (345 lines, 15 patterns, 30 good/bad pairs)
- [x] docs/disagreement-protocol.md exists (146 lines, 6 sections)
- [x] docs/claim-verification-guide.md exists (192 lines, 5 sections)
- [x] docs/epistemic-labeling-guide.md exists (138 lines, 45 label occurrences)
- [x] docs/adoption-guide.md exists (168 lines, 7 sections)
- [x] No docs contain "## Behavioral Commitments" (rules stay in root AGENTS.md only)
- [x] Total line count: 989 (within reasonable range for reference material)
- [x] Each doc has both coding and non-coding examples
- [x] Commit 73967da exists (Task 1)
- [x] Commit 63806e1 exists (Task 2)

---
*Phase: 01-agents-md-core-rules*
*Completed: 2026-03-27*
