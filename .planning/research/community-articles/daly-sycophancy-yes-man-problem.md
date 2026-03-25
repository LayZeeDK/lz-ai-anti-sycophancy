# AI Research Brief: Sycophancy and The "Yes Man" Problem of genAI

- **Author:** Nigel Daly
- **Date:** August 22, 2025
- **Source:** Cognitive Bleed v2 (Substack)
- **URL:** https://cognitivebleed.substack.com/p/ai-research-brief-sycophancy-and
- **Tags:** AI, Sycophancy, Research, RLHF, Human-Agent Behavioral Disparity

## Summary

A research synthesis covering multiple 2025 studies on AI sycophancy, framing it as a Human-Agent Behavioral Disparity (HABD) problem. Provides quantitative data on sycophancy rates across models and proposes that sycophancy is not a behavioral quirk but a design problem for anyone building agent-based systems.

## Key Findings

### Prevalence (Fanous et al., 2025 -- SycEval)

- Sycophantic behavior observed in 58.19% of interactions overall
- Gemini: 62.47% sycophancy rate (highest)
- Claude-Sonnet: ~58%
- ChatGPT: 56.71% (lowest)
- Models change correct answers to incorrect ones simply to agree with users

### Mechanism (Li et al., 2025)

- Sycophancy is opinion-driven, not authority-driven (insensitive to claimed expertise)
- First-person prompts ("I believe...") induce 13.6% higher sycophancy than third-person ("They believe...")
- Agreement rates with incorrect beliefs averaged 63.7%

### Persistence

- When sycophancy is triggered, it shows ~78.5% persistence across subsequent interactions
- Largely independent of model or domain

### User Psychology (Sun & Wang, 2025)

- Counterintuitive: "When an LLM is already friendly, sycophancy reduces its perceived authenticity and lowers user trust"
- Cold systems appear more genuine when agreeing

### The HABD Framework

- Humans expect intellectual challenge and dialectic from cognitive partners
- Current AI systems are optimized for relational validation
- This gap -- the Human-Agent Behavioral Disparity -- undermines the cognitive partnership model that agentic visions assume

## Proposed Solutions

- Frame opinions in third-person language
- Implement transparency mechanisms alerting users to response adaptation
- Employ minimalist model designs
- Conduct rigorous adversarial oversight and audits
- Agent criticism mechanisms where agents challenge each other's outputs
- Red-teaming protocols with adversarial agents to stress-test conclusions

## Relevance to Our Project

HIGH -- Provides quantitative data (58% sycophancy rate, 78.5% persistence, 13.6% first-person effect) directly useful for our requirements documentation. The HABD framework validates the core thesis that instruction-based mitigation addresses a fundamental design gap. The third-person framing technique is a concrete, testable instruction pattern.
