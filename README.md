# [@LayZeeDK](https://github.com/LayZeeDK)'s AI Anti-Sycophancy Toolkit

Instruction-first toolkit to measurably reduce sycophancy in AI coding agents. The project will ship a research-backed `AGENTS.md`, supporting reference docs, and a benchmark suite that proves before/after impact with Pass@k metrics.

## Why this exists
Sycophancy (over-agreement, flattery, and stance reversal under pressure) makes code review, debugging, and architecture discussions unreliable. This toolkit distills academic and industry research into a concise instruction set that keeps agents truthful, critical, and consistent without sacrificing usefulness.

## What will ship
- Primary `AGENTS.md` with ~50–80 behavioral rules covering 19+ sycophancy categories, plus mid-session reminder block.
- Reference docs (progressive disclosure): anti-sycophancy patterns, disagreement protocol, epistemic labeling, claim verification, adoption guide.
- Variant `AGENTS.md` files for benchmarking presentation and content choices.
- Benchmark suite for coding-domain probes with before/after runs, Pass@k and Pass^k scoring, and regression detection.
- Research report summarizing sources, evidence, and observed improvements.

## Current status
- Phase: 1 of 4 — AGENTS.md Core Rules (planning in progress, artifacts not yet published).
- Benchmark suite, research report, and distribution packaging will follow after Phase 1 completes.
- Active planning docs live in `.planning/` (see `PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`). The `research/` subfolder is large and not needed for day-to-day use.

### Roadmap
| Phase | Goal | Status |
| --- | --- | --- |
| 1. AGENTS.md Core Rules | Write primary instruction set + variants + reference docs | Planning |
| 2. Benchmark Suite | Coding-domain probes and before/after scoring | Not started |
| 3. Research Report | Practitioner-focused synthesis of findings and results | Not started |
| 4. Distribution | Ship-ready repo with README, LICENSE, docs | Not started |

## How you'll use it (once published)
1. Copy the primary `AGENTS.md` to your project root (agent-agnostic).
2. Optionally include the mid-session reminder block in long contexts.
3. Keep reference docs nearby for examples and edge cases; link them via progressive disclosure.
4. Run the benchmark suite with and without `AGENTS.md` to verify improvements for your model family.

### Claude Code quick start

Claude Code reads `CLAUDE.md`, not `AGENTS.md`. Create a one-line `CLAUDE.md` in your project root:

```markdown
@AGENTS.md
```

To test with only `AGENTS.md` rules (no global user instructions, no auto-memory):

**Bash / Git Bash:**
```bash
t="/tmp/sycophancy-test"
mkdir -p "$t" && cp AGENTS.md CLAUDE.md "$t/"
cd "$t" && CLAUDE_CODE_DISABLE_AUTO_MEMORY=1 CLAUDE_CONFIG_DIR="$t/.claude-config" claude
```

**PowerShell:**
```powershell
$t = "$env:TEMP\sycophancy-test"
New-Item -ItemType Directory -Force $t
Copy-Item AGENTS.md, CLAUDE.md $t
Push-Location $t
$env:CLAUDE_CODE_DISABLE_AUTO_MEMORY=1
$env:CLAUDE_CONFIG_DIR="$t\.claude-config"
claude
```

`CLAUDE_CONFIG_DIR` redirects the global config directory so `~/.claude/CLAUDE.md` is not loaded.
You will need to re-authenticate once per config directory (login persists for subsequent sessions).

## Repository layout (planned)
- `AGENTS.md` — primary instruction set (coming in Phase 1).
- `docs/` — reference guides linked from the instructions.
- `benchmarks/` — probe definitions, runners, and scoring.
- `research/` — summarized sources and evidence.
- `.planning/` — internal roadmap and requirements (present now).

## Design constraints
- Instruction file under 300 lines; behavioral rules under ~80 lines.
- Rules are imperative, testable, and paired with positive alternatives.
- Epistemic labeling uses VERIFIED / INFERRED / UNVERIFIED.
- Validation uses canonical sycophancy test cases plus Pass@k/Pass^k metrics across multiple model families.

## Contributing and feedback
The project is in planning. If you want to follow along or propose ideas, start with `.planning/PROJECT.md` and `.planning/ROADMAP.md`, then open an issue with concise suggestions or use cases.
