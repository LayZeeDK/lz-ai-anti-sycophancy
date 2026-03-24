# AI Anti-Sycophancy Toolkit

## What This Is

An open-source toolkit that provides research-backed AGENTS.md instructions to prevent AI sycophancy in coding agents. Includes a research report synthesizing findings from Anthropic, OpenAI, Microsoft Research, and independent academic work, a ready-to-use AGENTS.md instruction set, a benchmark suite that measures instruction effectiveness, and documentation for adoption and extension. Targets any developer using AI coding agents (Claude Code, Copilot, Cursor, Codex, etc.).

## Core Value

The AGENTS.md instructions must measurably reduce sycophantic behaviors across all 19 identified categories while remaining concise enough (~50-80 rules) that frontier models reliably follow them in every session.

## Requirements

### Validated

(None yet -- ship to validate)

### Active

- [ ] Research corpus built from AI lab publications, community articles, and video talks
- [ ] Research synthesis report documenting findings across all sycophancy categories
- [ ] AGENTS.md instruction set: direct, imperative rules targeting 19 sycophancy behaviors
- [ ] AGENTS.md complies with claude-md-improver quality criteria (concise, actionable, project-specific)
- [ ] AGENTS.md follows HumanLayer best practices (progressive disclosure, <300 lines, universally applicable)
- [ ] Benchmark suite with behavior probes for each sycophancy type
- [ ] Before/after comparison benchmarks (with and without instructions)
- [ ] Pass@k and Pass^k metrics computed via skill-creator analysis
- [ ] README with adoption guide, research summary, and extension instructions
- [ ] Ship-ready GitHub repo structure

### Out of Scope

- Claude Code-specific CLAUDE.md variant -- AGENTS.md is agent-agnostic by design
- IDE-specific instruction files (Cursor .cursorrules, Copilot instructions) -- can be derived from AGENTS.md later
- System prompt snippets for API integration -- different format constraints
- Training or fine-tuning approaches -- this project is prompt/instruction-level only
- Real-time sycophancy detection during conversations -- static instruction set only

## Context

### Sycophancy Behavior Taxonomy (19 categories from user research)

1. Agreement bias
2. Flattery/praise inflation
3. Conflict avoidance
4. Opinion reversal on pushback
5. Validation of false beliefs
6. Emotional mirroring
7. Excessive hedging to appease
8. Selective fact-picking
9. Strategic compliance / alignment faking
10. Tone softening to avoid conflict
11. False corroboration
12. Premature consensus
13. Withholding critical information
14. Persona matching that alters facts
15. Overconfidence to please
16. Echoing and confirmation bias
17. Biased summarization
18. Avoiding refusal
19. (Discovered during research -- placeholder for new categories)

### Key Research Sources

- Sharma et al. "Towards Understanding Sycophancy in Language Models" (Anthropic, 2023-2025)
- GPT-4o Sycophancy Incident rollback (OpenAI, 2025) -- IEEE Spectrum coverage
- ELEPHANT framework for social sycophancy (Microsoft Research, 2026)
- SycEval benchmark (Fanous et al., 2025) -- 58% sycophancy rate across models
- "The Sycophancy Problem in Large Language Models" whitepaper (2026)
- IEEE Spectrum synthesis article (2026)
- HumanLayer "Writing a good CLAUDE.md" -- instruction-following research and best practices
- claude-md-improver quality criteria -- scoring rubric for instruction files

### AGENTS.md Design Constraints (from research)

- Frontier models follow ~150-200 instructions reliably; Claude Code system prompt uses ~50
- Instructions biased toward prompt peripheries (beginning and end)
- Instruction-following degrades uniformly as count increases
- Content deemed irrelevant by the model gets ignored (Claude Code injects "may or may not be relevant" framing)
- Progressive disclosure: point to reference docs, don't inline everything

### Research Tools Available

- `D:\projects\github\LayZeeDK\git-ai-plugins\tools\marker-pdf` -- PDF-to-Markdown conversion
- Global CLAUDE.md fallback chain (markdown.new > WebFetch > url-to-markdown > playwriter) -- URL-to-Markdown
- `D:\projects\github\LayZeeDK\lz-cybernetics-ai-plugins\tools\youtube-to-markdown` -- YouTube-to-Markdown
- MarkItDown MCP -- document-to-Markdown conversion

## Constraints

- **Format**: AGENTS.md (agent-agnostic, not Claude-specific)
- **Length**: <300 lines for the instruction set, ideally 50-80 rules
- **Quality**: Must pass claude-md-improver criteria (concise, actionable, project-specific, current)
- **Verification**: Must include Pass@k and Pass^k metrics via skill-creator benchmarking
- **Compatibility**: Instructions must work across Claude Code, Copilot, Cursor, Codex, and other AGENTS.md-compatible tools

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| AGENTS.md over CLAUDE.md | Agent-agnostic standard works across all tools | -- Pending |
| Direct imperative rules with separate reference doc | Research shows less is more; citations would bloat instruction count | -- Pending |
| Both behavior probes AND before/after benchmarks | Most thorough verification of instruction effectiveness | -- Pending |
| Progressive disclosure for evidence | Keep AGENTS.md concise; research report as separate artifact | -- Pending |

---
*Last updated: 2026-03-24 after initialization*
