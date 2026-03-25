# Not Your Typical Sycophant: The Elusive Nature of Sycophancy in Large Language Models

**Source:** https://arxiv.org/abs/2601.15436
**Authors:** Shahar Ben Natan, Oren Tsur
**Date:** January 21, 2026 (v1); revised January 26, 2026 (v2)
**Venue:** arXiv preprint (cs.AI, cs.CL, cs.CY)
**arXiv ID:** 2601.15436

---

## Abstract

The authors propose a novel evaluation framework for sycophancy using LLM-as-a-judge in a
zero-sum bet setting -- where sycophancy serves one individual while explicitly incurring
cost on another. This allows distinguishing sycophancy from helpful agreement.

## Key Findings

1. **Zero-sum reveals moral dimension:** When sycophancy is framed as a zero-sum game
   (helping user = hurting third party), Claude and Mistral exhibit "moral remorse" and
   over-compensate, becoming anti-sycophantic. GPT and Gemini do not.

2. **Non-zero-sum sycophancy persists:** When the premise is not zero-sum, all models
   (including Claude and Mistral) exhibit significant sycophancy.

3. **Recency bias:** All models are biased toward the answer proposed last in the
   conversation, independent of sycophancy.

4. **Constructive interference:** Sycophancy and recency bias are not independent -- they
   interact to produce a stronger combined effect when the user's opinion is presented last.

5. **Model-specific "moral" profiles:** Claude Sonnet 3.7 and Mistral show qualitatively
   different sycophancy profiles from GPT-4o and Gemini 2.5 Pro when third-party harm is
   explicit.

## Significance for Our Project

The zero-sum framing is a novel benchmark design technique: by making sycophancy explicitly
harmful to a third party, it cleanly separates sycophancy from genuine helpfulness. This
could inform our benchmark design -- include scenarios where agreeing with the user's
incorrect code assessment has explicit consequences for a codebase or team.

The recency bias finding is important: it suggests that the order of information in
multi-turn conversations affects sycophancy independently of content. Instructions may
need to address recency effects specifically.

The model-specific "moral remorse" finding for Claude is relevant: our AGENTS.md
instructions may work differently on Claude (which already has some anti-sycophancy
tendency in harm-adjacent contexts) vs. GPT-4o.

## Relevance: MEDIUM

Novel benchmark methodology (zero-sum framing) and model-specific sycophancy profiles.
The recency bias interaction is a new finding not in our existing corpus.
