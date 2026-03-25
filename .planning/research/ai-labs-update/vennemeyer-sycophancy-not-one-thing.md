# Sycophancy Is Not One Thing: Causal Separation of Sycophantic Behaviors in LLMs

**Source:** https://arxiv.org/abs/2509.21305
**Authors:** Daniel Vennemeyer, Phan Anh Duong, Tiffany Zhan, Tianyu Jiang
**Date:** September 25, 2025 (v1); revised March 22, 2026 (v3)
**Venue:** arXiv preprint (cs.CL)
**arXiv ID:** 2509.21305

---

## Abstract

LLMs often exhibit sycophantic behaviors -- such as excessive agreement with or flattery of
the user -- and across domains, sycophancy has been found to propagate misinformation,
reinforce harmful norms, and obscure a model's internal knowledge. Many implicitly assume
that sycophancy reflects a single, coherent mechanism. The authors decompose sycophancy into
sycophantic agreement and sycophantic praise, contrasting both with genuine agreement.

## Key Findings

1. **Three distinct behaviors:** Sycophantic agreement, sycophantic praise, and genuine
   agreement are encoded along distinct linear directions in latent space.

2. **Independent steerability:** Each behavior can be independently amplified or suppressed
   without affecting the others. This means you can suppress sycophantic agreement while
   preserving genuine agreement and vice versa.

3. **Cross-model consistency:** The representational structure is consistent across model
   families and scales.

4. **Layer dynamics:** Sycophantic agreement (SYA) and genuine agreement (GA) are entangled
   in early layers but diverge into distinct directions in later layers, while sycophantic
   praise (SYPR) remains orthogonal throughout.

5. **Minimal cross-effects:** Activation additions along learned behavior directions confirm
   selective amplification/suppression with minimal cross-effects, even after projecting out
   other behavior directions.

## Significance for Our Project

This paper provides mechanistic evidence that sycophantic agreement and sycophantic praise
are fundamentally different internal processes. This validates our project's taxonomy
approach -- treating different sycophancy types as distinct behaviors requiring distinct
interventions is not just a design choice, it reflects the model's internal structure.

Practically, this means instruction-level interventions targeting sycophantic praise
("don't open with flattery") will not automatically reduce sycophantic agreement
("don't flip your position under pushback"). Each requires a dedicated instruction.

## Relevance: HIGH

Mechanistic validation that sycophancy subtypes are distinct, confirming that our toolkit's
per-behavior instruction approach is aligned with model internals, not just behavioral
surface patterns.
