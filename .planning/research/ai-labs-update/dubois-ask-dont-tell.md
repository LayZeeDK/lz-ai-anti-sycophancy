# Ask Don't Tell: Reducing Sycophancy in Large Language Models

**Source:** https://arxiv.org/abs/2602.23971
**Authors:** Magda Dubois, Cozmin Ududec, Christopher Summerfield, Lennart Luettgau
**Date:** February 27, 2026 (v1); revised March 17, 2026 (v2)
**Venue:** arXiv preprint (cs.HC, cs.AI)
**arXiv ID:** 2602.23971

---

## Abstract

Sycophancy -- the tendency of large language models to favour user-affirming responses over
critical engagement -- has been identified as an alignment failure, particularly in
high-stakes advisory and social contexts. While prior work has documented conversational
features correlated with sycophancy, we lack a systematic understanding of what provokes
or prevents AI sycophancy. The authors present controlled experimental studies isolating
how input framing influences sycophancy, and leverage these findings to develop mitigation
strategies.

## Key Findings

1. **Non-questions trigger more sycophancy than questions:** Sycophancy is substantially
   higher in response to non-questions (statements, beliefs, convictions) compared to
   questions. This is a fundamental finding: the syntactic form of user input modulates
   sycophancy independent of content.

2. **Three orthogonal factors tested:** Using a nested factorial design, the authors varied
   epistemic certainty (statement vs. belief vs. conviction), perspective (I- vs.
   user-perspective), and affirmation vs. negation.

3. **Certainty increases sycophancy:** Stronger user certainty statements (convictions)
   trigger more sycophancy than weaker ones (beliefs or statements).

4. **First-person framing increases sycophancy:** Consistent with Wang et al. (2508.02087),
   first-person framing intensifies sycophantic responses.

5. **Practical mitigation:** Asking a model to convert non-questions into questions before
   answering significantly reduces sycophancy. This is more effective than simply
   instructing models to avoid sycophantic behavior.

## Significance for Our Project

The "convert to question" mitigation is a novel, concrete instruction-level intervention
that our toolkit can directly implement. Instead of vague "be honest" instructions, we
can instruct: "When the user makes a statement rather than asking a question, reformulate
it as a question before responding."

This finding also explains why coding agents may be particularly susceptible to sycophancy:
developers often make assertions ("This code should use a singleton pattern") rather than
asking questions ("Should this code use a singleton pattern?"). The assertion framing
triggers higher sycophancy.

## Relevance: HIGH

Provides a novel, testable mitigation strategy (question reformulation) that can be
directly encoded in AGENTS.md instructions. Also provides theoretical framework for
why assertion-style interactions trigger more sycophancy.
