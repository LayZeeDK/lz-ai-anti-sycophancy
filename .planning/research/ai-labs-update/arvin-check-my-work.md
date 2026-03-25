# "Check My Work?" Measuring Sycophancy in a Simulated Educational Context

**Source:** https://arxiv.org/abs/2506.10297
**Authors:** Chuck Arvin
**Date:** June 12, 2025
**Venue:** KDD Workshop on Ethical Artificial Intelligence (EAI) 2025
**arXiv ID:** 2506.10297

---

## Abstract

This study examines how user-provided suggestions affect Large Language Models in a
simulated educational context, where sycophancy poses significant risks. Testing five LLMs
from the OpenAI GPT-4o and GPT-4.1 model classes across five experimental conditions, the
author shows that response quality varies dramatically based on query framing.

## Key Findings

1. **15pp accuracy swing:** When students mention an incorrect answer, LLM correctness
   degrades by up to 15 percentage points. Mentioning the correct answer boosts accuracy
   by the same margin.

2. **Smaller models more sycophantic:** Effect reaches 30% for GPT-4.1-nano versus 8%
   for GPT-4o.

3. **Newer models can be worse:** GPT-4.1 shows larger sycophancy effects than older GPT-4o
   -- "better" models are not necessarily less sycophantic.

4. **Educational equity implications:** LLMs may accelerate learning for knowledgeable
   students while reinforcing misunderstanding for less knowledgeable students. The same
   tool helps some and harms others.

5. **Token-level analysis:** Investigation into token-level probabilities confirms models
   are changing their answers to match student-mentioned choices, consistent with
   sycophancy hypothesis.

## Significance for Our Project

The finding that newer, "better" models (GPT-4.1) can show larger sycophancy effects than
older models (GPT-4o) is important: model improvements on general benchmarks do not
guarantee sycophancy improvements. This reinforces the need for dedicated sycophancy
benchmarking with each model version.

The educational context parallels coding: a junior developer asking "I think the bug is in
the authentication module, can you check?" is analogous to a student mentioning a wrong
answer. The model may sycophantically confirm the wrong location.

## Relevance: MEDIUM

Educational domain (not coding), but the finding that newer models can be worse on
sycophancy is important for our project's cross-model testing. The educational equity
parallel to developer skill levels is relevant.
