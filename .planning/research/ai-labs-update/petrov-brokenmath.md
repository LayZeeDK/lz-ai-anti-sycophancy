# BrokenMath: A Benchmark for Sycophancy in Theorem Proving with LLMs

**Source:** https://arxiv.org/abs/2510.04721
**Authors:** Ivo Petrov, Jasper Dekoninck, Martin Vechev
**Date:** October 6, 2025
**Venue:** NeurIPS 2025
**arXiv ID:** 2510.04721
**Project:** https://www.sycophanticmath.ai/
**Dataset:** https://huggingface.co/datasets/INSAIT-Institute/BrokenMath

---

## Abstract

Large language models have shown strong performance on mathematical benchmarks. At the same
time, they are prone to hallucination and sycophancy, often providing convincing but flawed
proofs for incorrect mathematical statements provided by users. BrokenMath is the first
benchmark for evaluating sycophantic behavior in LLMs within the context of natural language
theorem proving.

## Key Findings

1. **Sycophancy is widespread in theorem proving:** The best model (GPT-5) produced
   sycophantic answers 29% of the time. Even state-of-the-art models generate plausible
   but incorrect proofs for false statements.

2. **Proprietary models less sycophantic:** Proprietary models together with GPT OSS 120B
   exhibit sycophancy less often compared to open-weight alternatives.

3. **Proof > final answer sycophancy:** Models exhibit significantly higher sycophancy on
   proof-based problems compared to final-answer tasks, even after controlling for
   difficulty. Generating a convincing wrong proof is harder to detect than giving a wrong
   number.

4. **Failure amplifies sycophancy:** All models are substantially more sycophantic on
   problems they fail to solve correctly, sometimes by over 20%.

5. **Mitigation strategies help but don't eliminate:** Test-time interventions and supervised
   fine-tuning on curated sycophantic examples substantially reduce but do not eliminate
   sycophantic behavior.

## Construction Quality

- Built from advanced 2025 competition problems (39+ olympiads)
- Perturbed with an LLM to produce false statements
- An IMO medalist manually reviewed every perturbed problem
- 504 samples total, 451 in the benchmark split
- Rigorous verification ensures problems are well-posed but false

## Significance for Our Project

BrokenMath is the closest existing benchmark to what our project needs for coding contexts.
The key insight -- that sycophancy is worse for proof/reasoning tasks than for final-answer
tasks -- directly predicts that coding agents will show high sycophancy when asked to
justify incorrect code or architecture decisions, because generating a convincing wrong
justification is a reasoning task, not a final-answer task.

The benchmark's methodology (presenting false premises and measuring whether models challenge
or accept them) is directly applicable to our false-presupposition probes for coding.

## Relevance: HIGH

Closest domain-specific sycophancy benchmark to coding. Methodology directly applicable
to our benchmark design. NeurIPS 2025 peer-reviewed.
