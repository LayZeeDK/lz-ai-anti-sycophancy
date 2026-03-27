# Requirements: AI Anti-Sycophancy Toolkit

**Defined:** 2026-03-24
**Core Value:** Measurably reduce AI sycophancy in coding agents via research-backed AGENTS.md instructions, verified by benchmarks with Pass@k metrics.

## v1 Requirements

### AGENTS.md Instruction Set

- [ ] **INST-01**: AGENTS.md contains 30-50 behavioral rules targeting all 19+ sycophancy categories from the research taxonomy
- [ ] **INST-02**: Rules use direct imperative tone with specific trigger conditions, not abstract values
- [ ] **INST-03**: Rules framed as universal behavioral commitments (survive Claude Code "may or may not be relevant" filter)
- [ ] **INST-04**: Behavioral Commitments section placed first in file (primacy effect)
- [ ] **INST-05**: Total file length under 300 lines; behavioral rules section under 80 lines
- [ ] **INST-06**: Rules use positive framing where possible to avoid ironic process theory backfire
- [ ] **INST-07**: Progressive disclosure: detailed guidance in separate reference docs, not inlined
- [ ] **INST-08**: Cross-model portable: works with Claude, GPT-4 class, Gemini, Codex, and open-source models
- [x] **INST-09**: Passes all 5 canonical validation test cases (factual capitulation, emotional pushback, false confidence, absence claims, recommendation abandonment)
- [ ] **INST-10**: Includes position-maintenance rules with explicit change conditions (new evidence, logical error identified)
- [ ] **INST-11**: Includes false-presupposition checking instruction (targets 90% framing acceptance rate)
- [ ] **INST-12**: Includes proactive criticism requirement (targets positivity bias in assessment)
- [ ] **INST-13**: Includes epistemic labeling rules (directly observed / inferred / unverified / agent reasoning)
- [ ] **INST-14**: Includes third-person perspective framing (63.8% sycophancy reduction evidence)
- [ ] **INST-15**: Includes multi-turn drift awareness instruction (78.5% persistence rate)
- [x] **INST-16**: Complies with claude-md-improver quality criteria (concise, actionable, project-specific, current)

### Benchmark Suite

- [ ] **BENCH-01**: Behavior probes covering all 6 probe categories (A: rebuttal escalation, B: false presupposition, C: multi-turn drift, D: unprompted sycophancy, E: social sycophancy, F: epistemic honesty)
- [ ] **BENCH-02**: Before/after comparison framework: same probes with and without AGENTS.md instructions
- [ ] **BENCH-03**: Scoring distinguishes regressive sycophancy (harmful) from progressive (directionally correct)
- [ ] **BENCH-04**: Coding-domain-specific probes (code review, architecture decisions, debugging, security analysis)
- [ ] **BENCH-05**: Multi-turn probes with 3-5 turns of user pressure without new evidence
- [ ] **BENCH-06**: Automated probe runner that produces structured results
- [ ] **BENCH-07**: Pass@k and Pass^k metrics computed via skill-creator analysis (k=1,3,5)
- [ ] **BENCH-08**: Results for at least 2 model families (Claude + one other)
- [ ] **BENCH-09**: Benchmark results show measurable improvement with AGENTS.md vs. without

### Research Report

- [ ] **RSCH-01**: Synthesis document covering sycophancy taxonomy, root causes, intervention evidence, and benchmark results
- [ ] **RSCH-02**: All 30+ sources from research phase cited with confidence ratings
- [ ] **RSCH-03**: Honest documentation of limitations (framing sycophancy resistance, coding-domain gaps, instruction-only partial mitigation)
- [ ] **RSCH-04**: Research report accessible to practitioners, not just researchers

### Documentation and Distribution

- [ ] **DIST-01**: README with project purpose, installation/adoption guide, and quick-start instructions
- [ ] **DIST-02**: README includes before/after benchmark results as evidence of effectiveness
- [ ] **DIST-03**: README explains how to extend or customize the AGENTS.md for specific projects
- [ ] **DIST-04**: AGENTS.md installable via copy-paste into any project root
- [ ] **DIST-05**: Reference docs directory with detailed guidance (anti-sycophancy patterns, disagreement protocol, epistemic labeling guide)
- [ ] **DIST-06**: LICENSE file (open source)
- [ ] **DIST-07**: Repository structure clean and ship-ready for GitHub publication

## v2 Requirements

### Extended Model Coverage

- **EXT-01**: Benchmark results for 4+ model families (Claude, GPT-4 class, Gemini, open-source)
- **EXT-02**: Model-specific CLAUDE.md variant with Claude-aware optimizations
- **EXT-03**: IDE-specific instruction file variants (.cursorrules, Copilot instructions)

### Advanced Benchmarks

- **ADV-01**: Long-session (20+ turn) sycophancy drift measurement
- **ADV-02**: Multi-agent sycophancy compounding probes
- **ADV-03**: Cross-domain transfer validation (math, medical, legal beyond coding)

### Community

- **COMM-01**: Contribution guidelines for adding new probes
- **COMM-02**: GitHub Actions CI running benchmarks on PR

## Out of Scope

| Feature | Reason |
|---------|--------|
| Training/fine-tuning approaches | Project is instruction-level only; training requires model access |
| System prompt snippets for API | Different format constraints; AGENTS.md is file-level |
| Real-time sycophancy detection | Static instruction set, not runtime monitoring |
| IDE plugin/extension | Distribution is file-based, not tooling |
| SYCOPHANCY.md file convention | Separate open standard; we reference but don't reimplement |
| Non-English language support | English-only for v1; research corpus is English |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INST-01 | Phase 1 | Pending |
| INST-02 | Phase 1 | Pending |
| INST-03 | Phase 1 | Pending |
| INST-04 | Phase 1 | Pending |
| INST-05 | Phase 1 | Pending |
| INST-06 | Phase 1 | Pending |
| INST-07 | Phase 1 | Pending |
| INST-08 | Phase 1 | Pending |
| INST-09 | Phase 1 | Complete |
| INST-10 | Phase 1 | Pending |
| INST-11 | Phase 1 | Pending |
| INST-12 | Phase 1 | Pending |
| INST-13 | Phase 1 | Pending |
| INST-14 | Phase 1 | Pending |
| INST-15 | Phase 1 | Pending |
| INST-16 | Phase 1 | Complete |
| BENCH-01 | Phase 2 | Pending |
| BENCH-02 | Phase 2 | Pending |
| BENCH-03 | Phase 2 | Pending |
| BENCH-04 | Phase 2 | Pending |
| BENCH-05 | Phase 2 | Pending |
| BENCH-06 | Phase 2 | Pending |
| BENCH-07 | Phase 2 | Pending |
| BENCH-08 | Phase 2 | Pending |
| BENCH-09 | Phase 2 | Pending |
| RSCH-01 | Phase 3 | Pending |
| RSCH-02 | Phase 3 | Pending |
| RSCH-03 | Phase 3 | Pending |
| RSCH-04 | Phase 3 | Pending |
| DIST-01 | Phase 4 | Pending |
| DIST-02 | Phase 4 | Pending |
| DIST-03 | Phase 4 | Pending |
| DIST-04 | Phase 4 | Pending |
| DIST-05 | Phase 4 | Pending |
| DIST-06 | Phase 4 | Pending |
| DIST-07 | Phase 4 | Pending |

**Coverage:**
- v1 requirements: 37 total
- Mapped to phases: 37
- Unmapped: 0

---
*Requirements defined: 2026-03-24*
*Last updated: 2026-03-24 after research synthesis*
