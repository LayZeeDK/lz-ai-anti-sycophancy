---
phase: 02-benchmark-suite
plan: 02
subsystem: testing
tags: [yaml, probes, sycophancy, benchmark, coding-domain, multi-turn]

# Dependency graph
requires:
  - phase: 01-agents-md-core-rules
    provides: AGENTS.md rules (INST-10 through INST-15) that probes target
provides:
  - 22 YAML probe files across 6 sycophancy categories (A-F)
  - 8 canonical test case adaptations (TC-01 through TC-08)
  - 14 novel probes (coding-domain and non-software transfer baselines)
  - Scoring criteria with pass/regressive/progressive indicators per probe
affects: [02-03-runner, 02-04-scorer, 02-05-reporter, 03-research-report]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "YAML probe schema: id, category, domain, subdomain, difficulty, pressure_type, targets, scoring, setup, turns"
    - "3-turn escalation: casual -> emotional -> authoritative (fixed order)"
    - "Literal block scalars (|) for multi-line content, folded scalars (>) for descriptions"

key-files:
  created:
    - benchmark/probes/A-rebuttal-escalation/A-01-python-gil.yaml
    - benchmark/probes/A-rebuttal-escalation/A-02-code-review-efficiency.yaml
    - benchmark/probes/A-rebuttal-escalation/A-03-n-plus-one-query.yaml
    - benchmark/probes/A-rebuttal-escalation/A-04-security-sql-injection.yaml
    - benchmark/probes/B-false-presupposition/B-01-rate-limiting-absence.yaml
    - benchmark/probes/B-false-presupposition/B-02-typescript-type-error.yaml
    - benchmark/probes/B-false-presupposition/B-03-rest-api-statelessness.yaml
    - benchmark/probes/B-false-presupposition/B-04-medical-dosage-claim.yaml
    - benchmark/probes/C-multi-turn-drift/C-01-n-plus-one-pressure.yaml
    - benchmark/probes/C-multi-turn-drift/C-02-architecture-microservices.yaml
    - benchmark/probes/C-multi-turn-drift/C-03-debugging-race-condition.yaml
    - benchmark/probes/D-unprompted-sycophancy/D-01-websocket-false-confidence.yaml
    - benchmark/probes/D-unprompted-sycophancy/D-02-code-review-praise-bias.yaml
    - benchmark/probes/D-unprompted-sycophancy/D-03-financial-forecast-overconfidence.yaml
    - benchmark/probes/E-social-sycophancy/E-01-casual-vs-formal-pushback.yaml
    - benchmark/probes/E-social-sycophancy/E-02-difficulty-gap-easy-vs-hard.yaml
    - benchmark/probes/E-social-sycophancy/E-03-authority-credential-pressure.yaml
    - benchmark/probes/E-social-sycophancy/E-04-scientific-peer-pressure.yaml
    - benchmark/probes/F-epistemic-honesty/F-01-recommendation-abandonment.yaml
    - benchmark/probes/F-epistemic-honesty/F-02-uncertainty-on-config-limits.yaml
    - benchmark/probes/F-epistemic-honesty/F-03-selective-evidence-presentation.yaml
    - benchmark/probes/F-epistemic-honesty/F-04-research-citation-accuracy.yaml
  modified: []

key-decisions:
  - "Scenario-specific escalation turns for each probe rather than shared templates"
  - "E-01 turn 2 introduces legitimate new information (input validation) -- documented in progressive_indicators for judge to recognize"
  - "5 non-software probes (medical, financial, scientific-methodology x2, business-analysis) exceeding minimum 3 requirement"
  - "Difficulty distribution: 4 easy, 8 medium, 10 hard -- natural weighting toward harder probes"

patterns-established:
  - "Probe YAML schema with frontmatter, scoring, setup, and turns sections"
  - "Pressure escalation pattern: casual dismissal -> emotional experience claim -> authoritative override"
  - "source_tc field for traceability to canonical test cases"
  - "targets field for traceability to AGENTS.md INST-* rules"

requirements-completed: [BENCH-01, BENCH-04, BENCH-05]

# Metrics
duration: 7min
completed: 2026-03-28
---

# Phase 2 Plan 02: Probe Files Summary

**22 YAML sycophancy probes across 6 categories with 3-turn escalation, covering 5 coding subdomains and 5 non-software transfer domains**

## Performance

- **Duration:** 7min
- **Started:** 2026-03-28T14:27:13Z
- **Completed:** 2026-03-28T14:34:56Z
- **Tasks:** 2
- **Files created:** 22

## Accomplishments

- Created 22 probe files across all 6 sycophancy categories (A-F) with minimum 3 per category
- Adapted all 8 canonical test cases (TC-01 through TC-08) into machine-readable YAML probes
- Designed 14 novel probes including coding-domain (N+1 queries, SQL injection, race conditions, API key exposure) and non-software (medical dosage, financial forecasting, scientific methodology, business analysis, citation verification)
- Every probe has complete frontmatter, specific pass/regressive/progressive scoring criteria, inline code for coding probes, and exactly 3 scenario-tailored escalation turns

## Task Commits

Each task was committed atomically:

1. **Task 1: Create probes for categories A, B, and C (11 probes)** - `f434c83` (feat)
2. **Task 2: Create probes for categories D, E, and F (11 probes)** - `88ba177` (feat)

## Files Created/Modified

- `benchmark/probes/A-rebuttal-escalation/` - 4 probes testing position maintenance under escalating pushback
- `benchmark/probes/B-false-presupposition/` - 4 probes testing false premise detection and correction
- `benchmark/probes/C-multi-turn-drift/` - 3 probes testing progressive capitulation over turns
- `benchmark/probes/D-unprompted-sycophancy/` - 3 probes testing overconfidence and unsolicited agreement
- `benchmark/probes/E-social-sycophancy/` - 4 probes testing register-dependent and authority-based capitulation
- `benchmark/probes/F-epistemic-honesty/` - 4 probes testing recommendation persistence and epistemic accuracy

## Decisions Made

- **Scenario-specific turns over templates:** Each escalation turn is tailored to the specific technical scenario (e.g., SQL injection gets "internal tool" rationalization, not generic pushback). This ensures the probes test realistic sycophancy triggers.
- **E-01 progressive updating documented:** Turn 2 of E-01 (formal pushback) introduces genuinely new information (input validation ensures non-negative elements). The progressive_indicators explicitly document this so the judge can distinguish legitimate updating from sycophantic capitulation on that specific turn.
- **5 non-software probes:** Exceeded the minimum 3 non-software probes requirement with medical-reasoning (B-04), financial-analysis (D-03), scientific-methodology (E-04, F-04), and business-analysis (F-03).
- **Difficulty weighting:** 4 easy, 8 medium, 10 hard -- natural distribution where harder probes (novel scenarios, ambiguous pressure) are more common. At least 1 easy and 1 hard in each category.

## Deviations from Plan

None -- plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- 22 probe YAML files ready for runner consumption (02-03 runner plan)
- Probe schema established for probe-loader.mjs to parse and validate
- Scoring sections (pass_criteria, regressive/progressive indicators, key_position) ready for judge prompt construction (02-04 scorer plan)
- source_tc and targets fields ready for traceability reporting (02-05 reporter plan)

## Self-Check: PASSED

- 22/22 probe files exist on disk
- Commit f434c83 (Task 1) verified in git log
- Commit 88ba177 (Task 2) verified in git log

---
*Phase: 02-benchmark-suite*
*Completed: 2026-03-28*
