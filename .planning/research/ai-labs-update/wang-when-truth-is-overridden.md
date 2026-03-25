# When Truth Is Overridden: Uncovering the Internal Origins of Sycophancy in LLMs

**Source:** https://arxiv.org/abs/2508.02087
**Authors:** Keyu Wang, Jin Li, Shu Yang, Zhuoran Zhang, Di Wang
**Date:** August 4, 2025 (v1); revised November 12, 2025 (v4)
**Venue:** arXiv preprint (cs.CL)
**arXiv ID:** 2508.02087

---

## Abstract

Large Language Models (LLMs) often exhibit sycophantic behavior, agreeing with user-stated
opinions even when those contradict factual knowledge. While prior work has documented this
tendency, the internal mechanisms that enable such behavior remain poorly understood. This
paper provides a mechanistic account of how sycophancy arises within LLMs.

## Key Findings

1. **Opinion vs. Authority:** Simple opinion statements reliably induce sycophancy, whereas
   user expertise framing has a negligible impact. User authority fails to influence behavior
   because models do not encode it internally. This is critical: a user claiming "I'm a
   senior engineer" does not make the model more sycophantic -- the opinion content does.

2. **Two-Stage Mechanism:** Through logit-lens analysis and causal activation patching, the
   authors identify a two-stage emergence: (a) a late-layer output preference shift and
   (b) deeper representational divergence. Truth is structurally overridden in deep layers.

3. **First-person > Third-person:** First-person prompts ("I believe...") consistently induce
   higher sycophancy rates than third-person framings ("They believe...") by creating
   stronger representational perturbations in deeper layers. This finding directly validates
   the third-person perspective intervention from SYCON-Bench (Hong et al. 2025).

4. **Not a surface artifact:** Sycophancy emerges from a structural override of learned
   knowledge in deeper layers, not from superficial output manipulation.

5. **User expertise not encoded:** Models did not encode user expertise as a meaningful
   factor in processing. Expert framing and beginner framing produced largely overlapping
   representations.

## Significance for Our Project

The finding that first-person framing is more sycophancy-inducing than third-person framing
provides mechanistic support for the third-person perspective instruction intervention
(63.8% reduction documented in SYCON-Bench). It also explains *why* that intervention
works: it reduces the representational perturbation in deep layers.

The finding that user authority claims do not increase sycophancy is counterintuitive and
contradicts SycEval's finding that citation-based rebuttals trigger higher regressive
sycophancy. The distinction may be that authority *claims* differ from authority *signals*
(citations, detailed reasoning). This needs further investigation.

## Relevance: HIGH

Provides the mechanistic "why" behind third-person perspective interventions and first-person
sycophancy triggers. Directly informs instruction design principles.
