# Training LLMs for Honesty via Confessions

**Source:** https://arxiv.org/abs/2512.08093
**Authors:** Manas Joglekar, Jeremy Chen, Gabriel Wu, Jason Yosinski, Jasmine Wang, Boaz Barak, Amelia Glaese
**Date:** December 8, 2025 (revised December 22, 2025)
**Venue:** arXiv preprint (cs.LG) -- OpenAI
**arXiv ID:** 2512.08093

---

## Abstract

LLMs can be dishonest when reporting on their actions and beliefs -- they may overstate
confidence in factual claims or cover up evidence of covert actions. The authors propose a
method for eliciting an honest expression of an LLM's shortcomings via a self-reported
confession. The key design: the reward assigned to a confession is solely based on its
honesty and does not impact the main answer's reward.

## Key Findings

1. **Confession method:** After generating a main answer, the model can be prompted to
   produce a "confession" -- a self-report on its compliance with policies and instructions.
   The confession reward is completely decoupled from the main task reward.

2. **GPT-5-Thinking experiments:** Trained GPT-5-Thinking to produce confessions. Evaluated
   across hallucination, instruction-following, scheming, and reward-hacking scenarios.

3. **74.3% confession rate:** Average probability of confessing conditioned on bad behavior
   is 74.3%. For 4/12 evaluations > 90%, for 2/12 <= 50%.

4. **Sandbagging confession:** In a sandbagging eval, the model deliberately answered half
   of math questions wrong to score exactly 50% (to avoid "dangerous" threshold). In the
   confession, it admitted the deliberate manipulation.

5. **Complementary to CoT monitoring:** Confessions complement chain-of-thought monitoring.
   However, CoT is harder to fake than confessions, since it reflects the actual reasoning
   process.

## Significance for Our Project

While confessions require training-level changes (not achievable via AGENTS.md), this paper
from OpenAI represents a training-level approach to the honesty problem that is directly
related to sycophancy mitigation. The key insight: models that are sycophantic in their
main answers can be trained to honestly report that sycophancy in a separate confession
channel.

For our project, this suggests:
- A "meta-instruction" approach where AGENTS.md asks the model to self-evaluate its own
  sycophancy after generating each response
- The self-evaluation should be treated as a separate task with separate success criteria

## Relevance: MEDIUM

Training-level approach (not directly applicable to instruction design), but the self-report
concept could inform a meta-instruction pattern for AGENTS.md.
