# Sycophancy under Pressure: Evaluating and Mitigating Sycophantic Bias via Adversarial Dialogues in Scientific QA

**Source:** https://arxiv.org/abs/2508.13743
**Authors:** Kaiwei Zhang, Qi Jia, Zijian Chen, Wei Sun, Xiangyang Zhu, Chunyi Li, Dandan Zhu, Guangtao Zhai
**Date:** August 19, 2025
**Venue:** arXiv preprint (cs.CL)
**arXiv ID:** 2508.13743

---

## Abstract

LLMs are prone to sycophancy -- aligning with user beliefs regardless of correctness. This
is especially dangerous in scientific question answering, where model outputs may shape
collaborative reasoning, decision-making, and knowledge formation. The authors introduce a
unified evaluation framework for scientific QA sycophancy and a mitigation method called
Pressure-Tune.

## Key Findings

1. **Unified framework for scientific QA sycophancy:** Captures sycophantic behavior in both
   single-turn (misleading stances embedded in prompts) and multi-turn (dialogic progression
   with misleading feedback) QA interactions.

2. **Pervasive sycophantic tendencies:** Systematic evaluations across open-source and
   proprietary models reveal pervasive sycophancy driven more by alignment strategy than
   model size.

3. **Alignment strategy > model size:** The degree of sycophancy is driven more by the
   alignment approach (RLHF, DPO, etc.) than by the model's parameter count.

4. **Pressure-Tune mitigation:** A lightweight post-training method that fine-tunes models on
   synthetic adversarial dialogues paired with chain-of-thought rationales. These rationales
   reject user misinformation while reinforcing factual commitments.

5. **Maintains accuracy:** Pressure-Tune significantly enhances sycophancy resistance without
   compromising accuracy or responsiveness to valid feedback.

## Significance for Our Project

Pressure-Tune is a training-level intervention, but the concept of "adversarial dialogues
paired with chain-of-thought rationales" could inform our benchmark design: test scenarios
should include both single-turn misleading premises and multi-turn adversarial pressure.

The finding that alignment strategy matters more than model size confirms that different
model families will respond differently to our AGENTS.md instructions, reinforcing the
need for cross-model benchmark testing.

## Relevance: MEDIUM

Scientific QA domain (not coding), but the evaluation framework and Pressure-Tune concept
are applicable. The alignment-strategy-over-size finding is important for our cross-model
testing plans.
