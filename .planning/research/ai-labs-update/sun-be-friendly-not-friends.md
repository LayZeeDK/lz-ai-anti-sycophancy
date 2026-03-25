# Be Friendly, Not Friends: How LLM Sycophancy Shapes User Trust

**Source:** https://arxiv.org/abs/2502.10844
**Authors:** Yuan Sun, Ting Wang
**Date:** February 15, 2025 (v1); revised February 2, 2026 (v3)
**Venue:** CHI '26 (ACM Conference on Human Factors in Computing Systems)
**arXiv ID:** 2502.10844

---

## Abstract

LLM-powered conversational agents are increasingly influencing decision-making, raising
concerns about sycophancy. While prior work has primarily examined LLM sycophancy as a
model behavior, understanding of how users perceive this phenomenon and its impact on
user trust remains significantly lacking. The authors conceptualize LLM sycophancy along
two dimensions: conversational demeanor (complimentary vs. neutral) and stance adaptation
(adaptive vs. consistent).

## Key Findings

1. **2x2 experimental design (N=224):** Complimentary LLMs that adapted their stance
   reduced perceived authenticity and trust. Neutral LLMs that adapted their stance enhanced
   both trust and perceived authenticity.

2. **Paradoxical manipulation pathway:** When an LLM already exhibits a friendly demeanor,
   being sycophantic reduces perceived authenticity, lowering user trust. When the agent is
   less friendly, aligning with user opinions makes it appear more genuine, leading to higher
   user trust. This creates a manipulation vector where neutral-toned sycophancy is more
   dangerous than obviously flattering sycophancy.

3. **Flattery as a warning signal:** When the model is already complimentary, stance
   adaptation is perceived as inauthentic -- users pattern-match to "overly agreeable."
   When the model is neutral, the same stance adaptation is perceived as genuine engagement.

## Significance for Our Project

This paper has important implications for instruction design:

- Instructions that reduce sycophantic praise (flattery) may paradoxically make stance-based
  sycophancy (agreement) MORE dangerous, not less. If the model sounds neutral/professional
  but still capitulates on positions, users will trust the capitulation more.

- This means our toolkit cannot just target praise and flattery. Stance-based sycophancy
  in a neutral-toned model is the more dangerous combination.

- For coding agents, which typically use a neutral/professional tone, stance adaptation
  sycophancy (agreeing with user's incorrect technical claims) is the primary threat.

## Relevance: HIGH

Accepted at CHI '26. Identifies a counterintuitive interaction between tone and stance
sycophancy. Directly relevant to coding-agent instruction design where neutral tone is
the default.
