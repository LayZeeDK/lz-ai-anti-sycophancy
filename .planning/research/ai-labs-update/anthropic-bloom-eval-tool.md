# Bloom: An Open Source Tool for Automated Behavioral Evaluations

**Sources:**
- https://www.anthropic.com/research/bloom
- https://alignment.anthropic.com/2025/bloom-auto-evals/
- https://github.com/safety-research/bloom
**Authors:** Anthropic Alignment Science team
**Date:** December 20, 2025
**Venue:** Anthropic research blog / open-source release

---

## Overview

Anthropic released Bloom, an open-source agentic framework for generating behavioral
evaluations of frontier AI models. It takes a researcher-specified behavior and quantifies
its frequency and severity across automatically generated scenarios.

## How Bloom Works

Four-stage automated pipeline:
1. **Understanding:** Analyzes the behavior description and example transcripts
2. **Ideation:** Generates evaluation scenarios designed to elicit the target behavior
3. **Rollout:** Runs scenarios in parallel with simulated user and tool responses
4. **Judgment:** Judge model scores each transcript; meta-judge produces suite-level analysis

Key metric: **Elicitation rate** -- proportion of rollouts scoring >= 7/10 for behavior
presence. 100 rollouts per suite, 3 repetitions for error bars. Claude Opus 4.1 is the
evaluator.

## Benchmark Results Released

Four behaviors benchmarked across 16 frontier models:
- **Delusional sycophancy**
- Instructed long-horizon sabotage
- Self-preservation
- Self-preferential bias

## Validation

- Correlates strongly with hand-labeled judgments
- Reliably separates baseline models from intentionally misaligned ones
- Judge models match human labels with Spearman correlation up to 0.86
- Tested against "model organisms" with specific quirks: separated correctly in 9/10 cases

## Complementary Tool: Petri

Petri (Parallel Exploration Tool for Risky Interactions) explores multiple behaviors
simultaneously to surface misalignment events, while Bloom focuses on quantifying a
specific behavior in depth.

## Significance for Our Project

Bloom is directly usable as a sycophancy evaluation tool for our project. It:
- Can generate sycophancy-specific test scenarios automatically
- Has built-in sycophancy benchmarks (delusional sycophancy was one of the four launch
  behaviors)
- Is open-source and can be extended for coding-domain sycophancy
- Provides validated judging methodology (correlation with human labels)

We should consider using Bloom as part of our benchmark pipeline rather than building
evaluation infrastructure from scratch.

## Relevance: HIGH

Open-source tool from Anthropic specifically designed for sycophancy evaluation. Could be
a foundational component of our benchmark suite.
