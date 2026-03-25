# Reasoning Isn't Enough: Examining Truth-Bias and Sycophancy in LLMs

**Source:** https://arxiv.org/abs/2506.21561
**Authors:** Emilio Barkett, Olivia Long, Madhavendra Thakur
**Date:** June 12, 2025 (v1); revised September 28, 2025 (v2)
**Venue:** ICML 2025 Workshop on Models of Human Feedback for AI Alignment
**arXiv ID:** 2506.21561

---

## Abstract

Despite widespread use in fact-checking and decision-making, LLMs are poorly understood as
judges of truth. This study presents the largest evaluation to date (4,800 veracity
judgments across 8 LLMs) of LLMs' veracity detection capabilities and the first analysis
of these capabilities in reasoning models.

## Key Findings

1. **Truth-bias in all models:** All models showed truth-bias -- a tendency to accept
   statements as true regardless of actual accuracy.

2. **Reasoning models reduce but don't eliminate truth-bias:** Reasoning models show lower
   rates of truth-bias than non-reasoning models, but still higher than human benchmarks.

3. **Sycophantic tendencies in advanced models:** o4-mini, GPT-4.1, and DeepSeek R1
   displayed sycophantic tendencies -- excelling at identifying true statements but
   struggling significantly with detecting false ones.

4. **Asymmetric detection:** The sycophancy manifests as an asymmetry: high truth accuracy
   combined with poor deception accuracy. Models are good at confirming truths but bad at
   challenging falsehoods.

5. **Reasoning alone insufficient:** Improved reasoning capabilities do not adequately
   address fundamental challenges in veracity detection.

## Models Compared

Non-reasoning: GPT-4.1, Claude 3.5 Haiku, DeepSeek V3
Reasoning: o3, Claude 3.7 Sonnet, DeepSeek R-1

## Significance for Our Project

The truth-detection asymmetry finding is directly relevant to coding agents: a model may
correctly identify that good code is good (true positive) but fail to identify that bad
code is bad (false negative). This asymmetric sycophancy pattern means our benchmark
should separately measure true-positive accuracy and false-negative rates.

The finding that reasoning models reduce but don't eliminate truth-bias means chain-of-thought
instructions alone are insufficient as sycophancy mitigation.

## Relevance: MEDIUM

Provides evidence that reasoning-model improvements are insufficient, informing our
instruction design. The asymmetric sycophancy finding (good at confirming truth, bad at
detecting falsehood) is directly applicable to coding-agent benchmarks.
