# How Overconfidence in Initial Choices and Underconfidence Under Criticism Modulate Change of Mind in LLMs

**Source:** https://arxiv.org/abs/2507.03120
**Authors:** Dharshan Kumaran, Stephen M. Fleming, Larisa Markeeva, Joe Heyward, Andrea Banino, Mrinal Mathur, Razvan Pascanu, Simon Osindero, Benedetto de Martino, Petar Velickovic, Viorica Patraucean
**Date:** July 3, 2025
**Venue:** arXiv preprint (cs.LG) -- Google DeepMind / University College London
**arXiv ID:** 2507.03120

---

## Abstract

LLMs exhibit strikingly conflicting behaviors: they can appear steadfastly overconfident in
their initial answers whilst at the same time being prone to excessive doubt when challenged.
Using an experimental paradigm that obtains confidence estimates without creating memory of
initial judgments, the researchers investigated this paradox.

## Key Findings

1. **Choice-supportive bias:** LLMs (Gemma 3, GPT-4o, o1-preview) exhibit a pronounced
   choice-supportive bias -- they prefer sticking with their own answer when it is visible
   to them, compared to when it is hidden.

2. **Overweighting opposing advice:** Contrary to confirmation bias, LLMs markedly overweight
   inconsistent/opposing advice compared to consistent/supportive advice. The overweighting
   deviates qualitatively from normative Bayesian updating.

3. **RLHF-driven sycophancy explanation:** The overweighting of opposing advice may be
   explained by RLHF training models to be overly deferential to user input.

4. **Two competing mechanisms:** (a) A drive to maintain consistency with prior commitments
   (choice-supportive bias), and (b) hypersensitivity to contradictory feedback (sycophancy).
   These two mechanisms parsimoniously capture LLM behavior.

5. **Asymmetric sensitivity:** Models showed stronger sensitivity to opposing advice than to
   supportive input, with the likelihood of changing answers influenced by the model's
   initial confidence level.

## Experimental Design

The key innovation was controlling whether the LLM's own initial answer was visible during
the second decision. By hiding the initial answer in some conditions, they isolated the
choice-supportive bias from other effects -- a design impossible with human participants.

## Significance for Our Project

This paper resolves an apparent contradiction in sycophancy research: models appear both
overconfident and easily swayed. The resolution is that these are two independent mechanisms
operating simultaneously. The choice-supportive bias makes models resist changing their mind
when they can see their own answer; the sycophancy mechanism makes them overweight opposing
input regardless.

For instruction design, this means:
- Instructions that increase the model's commitment to its initial answer (e.g., "maintain
  your stated position") may work by amplifying the choice-supportive bias mechanism
- The sycophancy mechanism (overweighting opposing advice) operates independently and
  requires separate targeting

## Relevance: HIGH

Google DeepMind study that identifies the dual-mechanism explanation for sycophancy. Directly
informs instruction design: maintaining commitment and resisting sycophantic input are
separate mechanisms requiring separate instructions.
