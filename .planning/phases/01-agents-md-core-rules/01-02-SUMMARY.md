---
phase: 01-agents-md-core-rules
plan: 02
subsystem: agents-md
tags: [agents-md, anti-sycophancy, instruction-design, markdown, behavioral-rules]

# Dependency graph
requires:
  - phase: 01-agents-md-core-rules
    plan: 01
    provides: "Structural checklist, verification script, canonical test cases, quality scoring rubric"
provides:
  - "Primary AGENTS.md with 30 behavioral rules across Always/Only when/Never tiers"
  - "Mid-session reminder block for system-reminder injection at 80K+ tokens"
  - "All 16 research-backed content interventions represented in rule set"
affects: [01-03-PLAN, 01-04-PLAN, 01-05-PLAN]

# Tech tracking
tech-stack:
  added: []
  patterns: [bidirectional-rules, three-tier-boundaries, progressive-disclosure, askell-preamble]

key-files:
  created:
    - AGENTS.md
    - docs/mid-session-reminder.md
  modified:
    - validation/verify-structure.sh

key-decisions:
  - "30 rules (minimum threshold) to maximize compliance per Jaroslawicz instruction budget research"
  - "Preamble is a single actionable sentence, not a role claim or motivational text"
  - "Contradiction surfacing split into two rules: self-contradictions and user-contradictions"
  - "Mid-session reminder includes 8 rules selected for stance maintenance and mechanical verifiability"

patterns-established:
  - "Prohibition-first rule format: state what NOT to do, then what TO do"
  - "Universal framing: no situational triggers, survives 'may or may not be relevant' filter"
  - "Token-priming-clean: no sycophancy-priming vocabulary in rule text"
  - "Backticks for all literal vocabulary (phrases, labels, values)"

requirements-completed: [INST-01, INST-02, INST-03, INST-04, INST-05, INST-06, INST-08, INST-10, INST-11, INST-12, INST-13, INST-14, INST-15]

# Metrics
duration: 4min
completed: 2026-03-27
---

# Phase 1 Plan 02: Primary AGENTS.md and Mid-Session Reminder Summary

**30-rule anti-sycophancy AGENTS.md with Askell preamble, three-tier boundary structure, all 16 content interventions, and 8-rule mid-session reminder for 80K+ token resilience**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-27T15:09:31Z
- **Completed:** 2026-03-27T15:13:20Z
- **Tasks:** 2
- **Files modified:** 3

## Accomplishments

- Wrote the primary AGENTS.md -- the core project deliverable -- with 30 behavioral rules covering all 22 sycophancy taxonomy categories under Always/Only when/Never headings
- All 16 content interventions from CONTEXT.md represented: Ask Don't Tell, third-person perspective, epistemic pause, false-presupposition checking, position-maintenance, proactive criticism, phrase-level prohibitions, hierarchical authority, no-change-needed, three-tier boundaries, epistemic labeling, good/bad examples (via reference doc link), verification-before-agreement, contradiction surfacing, session-level consistency, difficulty-based vigilance
- Created docs/mid-session-reminder.md with 8 distilled critical rules designed for system-reminder injection when context exceeds 80K tokens
- All structural verification checks pass: 80 lines total (<300), 40-line Behavioral Commitments (<80), 30 rules (30-50 range), correct section ordering, 5 reference doc links, 3 epistemic labels, zero priming words

## Task Commits

Each task was committed atomically:

1. **Task 1: Write the primary AGENTS.md** - `1203b22` (feat)
2. **Task 2: Write mid-session reminder block** - `e2e87c6` (feat)

## Files Created/Modified

- `AGENTS.md` - Primary anti-sycophancy instruction set with 30 behavioral rules, response protocol, epistemic labeling, and reference doc links
- `docs/mid-session-reminder.md` - Distilled 8-rule reminder block for system-reminder injection at 80K+ tokens
- `validation/verify-structure.sh` - Fixed grep -c under pipefail producing invalid "0\n0" integer

## Decisions Made

- Targeted 30 rules (the minimum passing threshold) rather than inflating to a higher count, preserving instruction budget per Jaroslawicz et al. (150-200 instruction capacity, ~50 consumed by system prompts)
- Wrote the Askell preamble as a single actionable behavioral commitment ("Express genuine assessments. Maintain positions under pressure. Change your mind when presented with new evidence or a logical error in your reasoning -- not to match preferences.") rather than a role claim or motivational quote
- Split contradiction surfacing into two separate rules (self-contradictions in Always, user-contradictions in Always) to maintain the "one behavior per rule" principle
- Selected 8 rules for the mid-session reminder based on two criteria: (1) stance sycophancy rules first (most dangerous per Sun & Wang), (2) rules that are mechanically verifiable (phrase bans, verification artifact protection)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed verify-structure.sh priming word check under pipefail**
- **Found during:** Task 1 (running verification)
- **Issue:** `grep -c` outputs "0" and exits 1 on no matches. Under `set -eo pipefail`, the `|| echo "0"` fallback appended a second "0" line, producing "0\n0" which failed the integer comparison `[ "$PRIMING_HITS" -eq 0 ]`
- **Fix:** Separated the sed stripping into a variable, used `|| true` instead of `|| echo "0"`, and added `${PRIMING_HITS:-0}` default
- **Files modified:** validation/verify-structure.sh
- **Verification:** verify-structure.sh now passes all checks cleanly
- **Committed in:** 1203b22 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Bug fix necessary for verification to pass. No scope creep.

## Issues Encountered

None beyond the verify-structure.sh bug documented above.

## User Setup Required

None -- no external service configuration required.

## Next Phase Readiness

- AGENTS.md at project root ready for Plans 03-05 to reference and validate
- Mid-session reminder ready for adoption guide (Plan 03, docs/adoption-guide.md)
- verify-structure.sh confirmed working for all future AGENTS.md validation runs
- Plan 03 (reference docs) can now write the 5 docs linked from AGENTS.md Reference Docs section
- Plan 04 (variants) can derive 18 variant files from the primary AGENTS.md
- Plan 05 (human validation) can run the 8 canonical test cases against the primary AGENTS.md

## Self-Check: PASSED

- [x] AGENTS.md exists (80 lines, 30 rules, passes verify-structure.sh)
- [x] docs/mid-session-reminder.md exists (20 lines, 8 distilled rules)
- [x] validation/verify-structure.sh exists (updated with pipefail fix)
- [x] Commit 1203b22 exists (Task 1)
- [x] Commit e2e87c6 exists (Task 2)
- [x] verify-structure.sh exits 0 on AGENTS.md
- [x] Epistemic labels count >= 3 (found 4)
- [x] Reference doc links count >= 5 (found 5)

---
*Phase: 01-agents-md-core-rules*
*Completed: 2026-03-27*
