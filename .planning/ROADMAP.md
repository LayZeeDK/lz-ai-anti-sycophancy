# Roadmap: AI Anti-Sycophancy Toolkit

## Overview

Four phases deliver the complete toolkit. Phase 1 writes the AGENTS.md instruction set -- the core
deliverable -- converting research findings into operational behavioral rules. Phase 2 builds the
benchmark suite that validates those rules with before/after comparison data. Phase 3 synthesizes the
full research corpus plus benchmark results into a practitioner-accessible report. Phase 4 assembles
everything into a ship-ready open-source repository. Each phase is a strict prerequisite for the
next: you cannot benchmark what has not been written; you cannot report results that have not been
collected; you cannot document what has not been verified.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: AGENTS.md Core Rules** - Write research-backed behavioral rules targeting all 19+ sycophancy categories
- [ ] **Phase 2: Benchmark Suite** - Build before/after comparison framework with coding-domain probes and Pass@k metrics
- [ ] **Phase 3: Research Report** - Synthesize research corpus and benchmark results into a practitioner-accessible document
- [ ] **Phase 4: Distribution** - Assemble README, reference docs, LICENSE, and ship-ready repo structure

## Phase Details

### Phase 1: AGENTS.md Core Rules
**Goal**: Practitioners can drop a single AGENTS.md file into any project and measurably constrain
sycophantic behavior across all 19+ identified categories in any AGENTS.md-compatible coding agent.
**Depends on**: Nothing (first phase)
**Requirements**: INST-01, INST-02, INST-03, INST-04, INST-05, INST-06, INST-07, INST-08, INST-09, INST-10, INST-11, INST-12, INST-13, INST-14, INST-15, INST-16
**Success Criteria** (what must be TRUE):
  1. AGENTS.md contains 30-50 behavioral rules in the Behavioral Commitments section, each addressing at least one of the 19+ taxonomy categories with an explicit trigger condition.
  2. AGENTS.md passes all five canonical validation test cases: factual capitulation, emotional pushback without new evidence, false confidence, absence-claim framing, and recommendation abandonment.
  3. The file is under 300 lines total and the behavioral rules section is under 80 lines, with detailed guidance in linked reference docs rather than inlined.
  4. Running the file through the claude-md-improver scoring rubric produces a passing result on all five quality criteria: concise, actionable, project-specific, current, and universally applicable.
  5. Rules use positive behavioral framing (not prohibition-only) and are phrased as universal commitments, not situational guidance.
**Plans**: 5 plans

Plans:
- [ ] 01-01-PLAN.md -- Validation scaffolds (structural checklist, canonical test cases, quality rubric, verification script)
- [ ] 01-02-PLAN.md -- Primary AGENTS.md and mid-session reminder block
- [ ] 01-03-PLAN.md -- 5 progressive disclosure reference docs
- [ ] 01-04-PLAN.md -- 18 AGENTS.md variants (14 presentation + 4 content) for Phase 2 benchmarking
- [ ] 01-05-PLAN.md -- Human validation checkpoint (canonical test cases + quality scoring)

**Research flags:**
- Framing sycophancy rules (targeting the 90% false-premise acceptance rate) require iterative
  phrasing tests. ELEPHANT established this is the most instruction-resistant dimension. Prepare
  2-3 candidate phrasings and validate each against the five canonical test cases before finalizing.
- Rule placement matters: critical anti-capitulation rules must appear in the first third of the
  file (primacy effect). Validate section ordering explicitly.

---

### Phase 2: Benchmark Suite
**Goal**: Anyone can run the benchmark suite to measure sycophancy rates before and after applying
the AGENTS.md, producing Pass@k and Pass^k metrics that constitute the toolkit's primary evidence
of effectiveness.
**Depends on**: Phase 1
**Requirements**: BENCH-01, BENCH-02, BENCH-03, BENCH-04, BENCH-05, BENCH-06, BENCH-07, BENCH-08, BENCH-09
**Success Criteria** (what must be TRUE):
  1. The probe suite covers all 6 categories (A: rebuttal escalation, B: false presupposition, C: multi-turn drift, D: unprompted sycophancy, E: social sycophancy, F: epistemic honesty), including coding-domain-specific probes not found in any existing benchmark.
  2. Running the benchmark with AGENTS.md disabled and then enabled produces two structured result sets whose comparison shows a measurable reduction in regressive sycophancy rate.
  3. Pass@k and Pass^k metrics are computed at k=1, 3, 5 for at least two model families (Claude + one other), matching the skill-creator metric format from the global CLAUDE.md.
  4. Scoring correctly distinguishes regressive sycophancy (model abandons a correct position) from progressive (model corrects an incorrect position), so results are not artificially inflated by beneficial position changes.
  5. Multi-turn probes apply 3-5 turns of user pressure without new evidence and record turn-of-flip and number-of-flip per probe, enabling session-level drift analysis.
**Plans**: TBD

**Research flags:**
- Coding-domain probe construction is novel -- no prior benchmark covers code review, architecture
  decisions, debugging, or security analysis. This phase benefits from a design spike on probe
  construction before full implementation. The rebuttal escalation methodology from SycEval is
  proven; adapting it to coding scenarios is the design challenge.
- The automated probe runner must output structured results in a format compatible with
  skill-creator analysis. Confirm the output schema before writing individual probes.

---

### Phase 3: Research Report
**Goal**: A practitioner reading the report understands why sycophancy matters, what the research
shows, and what the AGENTS.md and benchmark accomplished, with honest documentation of limitations.
**Depends on**: Phase 2
**Requirements**: RSCH-01, RSCH-02, RSCH-03, RSCH-04
**Success Criteria** (what must be TRUE):
  1. The report covers the full research arc: taxonomy of 19+ sycophancy categories, RLHF root cause, quantitative rates from SycEval and ELEPHANT, evidence-backed interventions, and actual benchmark results from Phase 2.
  2. All 30+ sources cited in research/SUMMARY.md appear in the report with confidence ratings (HIGH / MEDIUM / LOW) matching the ratings established during the research phase.
  3. Limitations are documented explicitly: framing sycophancy resistance, coding-domain data gap, instruction-only partial mitigation, and multi-agent behavior being effectively unstudied.
  4. A software developer with no prior AI research background can read the report and extract actionable guidance within 15 minutes.
**Plans**: TBD

---

### Phase 4: Distribution
**Goal**: The repository is fully ship-ready for public GitHub publication, with a README that
enables any developer to adopt the AGENTS.md in under 5 minutes and understand the evidence behind it.
**Depends on**: Phase 3
**Requirements**: DIST-01, DIST-02, DIST-03, DIST-04, DIST-05, DIST-06, DIST-07
**Success Criteria** (what must be TRUE):
  1. A developer who has never seen this project can install the AGENTS.md by following the README quickstart in a single copy-paste step into their project root.
  2. The README includes before/after benchmark results with Pass@k and Pass^k values that a reader can verify against the raw benchmark output in the repository.
  3. The reference docs directory contains at minimum: an anti-sycophancy patterns guide, a disagreement protocol, and an epistemic labeling guide -- all linked from AGENTS.md via progressive disclosure.
  4. The repository contains a LICENSE file and has a clean directory structure with no planning artifacts, draft files, or intermediate outputs at the root.
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute strictly in sequence: 1 -> 2 -> 3 -> 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. AGENTS.md Core Rules | 0/5 | Planning complete | - |
| 2. Benchmark Suite | 0/TBD | Not started | - |
| 3. Research Report | 0/TBD | Not started | - |
| 4. Distribution | 0/TBD | Not started | - |

---

## Coverage Validation

**Total v1 requirements:** 37
**Mapped:** 37/37

| Phase | Category | Requirements | Count |
|-------|----------|--------------|-------|
| 1 | INST | INST-01 through INST-16 | 16 |
| 2 | BENCH | BENCH-01 through BENCH-09 | 9 |
| 3 | RSCH | RSCH-01 through RSCH-04 | 4 |
| 4 | DIST | DIST-01 through DIST-07 | 7 |

No orphaned requirements. No duplicate mappings.

---
*Roadmap created: 2026-03-24*
*Last updated: 2026-03-25 after Phase 1 planning*
