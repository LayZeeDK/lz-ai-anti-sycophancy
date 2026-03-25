# On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents

**Source:** https://arxiv.org/abs/2601.20404
**Authors:** Jai Lal Lulla, Seyedmoein Mohsenimofidi, Matthias Galster, Jie M. Zhang, Sebastian Baltes, Christoph Treude
**Date:** January 28, 2026
**Venue:** Under submission to ICSE JAWS (arXiv preprint, cs.SE)
**arXiv ID:** 2601.20404

---

## Abstract

AI coding agents such as Codex and Claude Code are increasingly used to autonomously
contribute to software repositories. However, little is known about how repository-level
configuration artifacts affect the operational efficiency of the agents. The paper studies
the impact of AGENTS.md files on the runtime and token consumption of AI coding agents
operating on GitHub pull requests.

## Key Findings

1. **28.64% lower median runtime:** Presence of AGENTS.md is associated with significantly
   reduced execution time for AI coding agents.

2. **16.58% reduced token consumption:** Models consume fewer output tokens when an
   AGENTS.md file is present.

3. **Comparable task completion:** Task completion behavior is maintained despite the
   efficiency gains -- the agents are not cutting corners.

4. **10 repos, 124 pull requests:** Agents executed under two conditions: with and without
   AGENTS.md files, measuring wall-clock time and token usage.

5. **Focused instructions work best:** A subsequent study (Gloaguen et al., arXiv:2602.11988)
   found that overloaded context files can hurt performance. The positive effects come from
   focused, relevant instructions, not comprehensive documentation dumps.

## Significance for Our Project

This is the first empirical study measuring AGENTS.md effectiveness on real-world tasks. The
28.64% runtime reduction demonstrates that instruction files have measurable operational
impact, not just behavioral impact.

For our project, this paper:
- Provides empirical evidence that AGENTS.md files affect agent behavior (the mechanism
  we are targeting exists and works)
- Supports the principle that focused instructions outperform comprehensive ones
- Confirms the instruction budget concern: too much content in AGENTS.md hurts performance
- Suggests our anti-sycophancy instructions should be concise and focused, not exhaustive

## Relevance: HIGH

First empirical evidence that AGENTS.md files measurably affect AI coding agent behavior.
Directly validates the mechanism our project depends on.
