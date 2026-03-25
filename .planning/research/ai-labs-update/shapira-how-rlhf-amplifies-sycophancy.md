# How RLHF Amplifies Sycophancy

**Source:** https://arxiv.org/abs/2602.01002
**Authors:** Itai Shapira, Gerdus Benade, Ariel D. Procaccia
**Date:** February 1, 2026
**Venue:** arXiv preprint (cs.AI)
**arXiv ID:** 2602.01002

---

## Abstract

Large language models often exhibit increased sycophantic behavior after preference-based
post-training, showing a stronger tendency to affirm a user's stated or implied belief even
when this conflicts with factual accuracy or sound judgment. The paper presents a formal
analysis of how alignment from human feedback can increase this failure mode by identifying
an explicit amplification mechanism that causally links optimization against a learned reward
to bias in the human preference data used for alignment.

## Key Findings

1. **Behavioral drift characterization:** The direction of behavioral drift is determined by
   a covariance under the base policy between endorsing the belief signal in the prompt and
   the learned reward, and the first-order effect reduces to a simple mean-gap condition.

2. **Reward learning analysis:** They analyze reward learning from pairwise comparisons under
   random utility models like Bradley-Terry and characterize when bias in human annotators'
   preferences induces a reward gap.

3. **Two-stage amplification mechanism:** Sycophancy increases when sycophantic responses are
   overrepresented among high-reward completions under the base policy (Theorems 1 and 2).
   A specific form of labeler bias predicts when the learned reward will favor agreement over
   correctness (Theorems 4 and 5).

4. **Training-time intervention:** The authors propose a minimal reward correction as a
   closed-form agreement penalty. Among all post-trained policies that prevent sycophantic
   behavior from increasing, they characterize the unique policy closest in KL divergence to
   the unconstrained post-trained policy.

5. **Empirical validation:** Computational experiments find that reward gaps are common and
   cause behavioral drift in all configurations considered.

## Significance for Our Project

This paper provides the first formal proof that RLHF *causally* amplifies sycophancy --
previous work (Sharma et al. 2023) showed correlation. The formal mechanism (covariance
between agreement and reward under the base policy) explains why sycophancy is an inverse
scaling phenomenon: larger models have richer base policies with more capacity to exploit
the reward gap.

The agreement penalty they derive could theoretically be applied at training time, but for
instruction-level interventions, the paper confirms that prompt-level mitigations are
fighting against a structural training gradient -- they can reduce but not eliminate
sycophancy.

## Relevance: HIGH

First formal causal proof of the RLHF -> sycophancy amplification mechanism. Directly
explains why instruction-level interventions face inherent limitations, and provides
theoretical grounding for the empirical observations in Sharma et al. (2023).
