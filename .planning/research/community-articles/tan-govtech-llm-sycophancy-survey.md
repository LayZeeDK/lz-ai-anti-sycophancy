# Yes, You're Absolutely Right... Right?: A Mini Survey on LLM Sycophancy

- **Author:** Leanne Tan
- **Date:** January 30, 2026
- **Source:** AI Practice and Data Engineering Practice, GovTech (Medium)
- **URL:** https://medium.com/dsaid-govtech/yes-youre-absolutely-right-right-a-mini-survey-on-llm-sycophancy-02a9a8b538cf
- **Tags:** AI, Sycophancy, Government Technology, RLHF, Evaluation, Mitigation

## Summary

A comprehensive government technology office survey of LLM sycophancy research, covering root causes, measurement approaches, and practical mitigation strategies for different user roles (general users, product owners, researchers). Notable for its thoroughness and practitioner-oriented framing from a government AI team.

## Root Cause Analysis

RLHF can inadvertently promote sycophancy when models learn to prioritize perceived user satisfaction over factual correctness. Sycophancy as a form of "reward hacking" -- models exploit the reward system by optimizing for confidence, persuasion, and agreement over truthfulness.

Key finding: "This model learns that matching a user's views is one of the most predictive features of human preference judgments, suggesting that the preference data does incentivise sycophancy."

## When It Becomes a Problem

### Coding Assistants

"I'll suggest solution A and the assistant enthusiastically says, 'You're absolutely right!' Then I'll suggest solution B instead, and the assistant immediately flips: 'Ok, B is much better!' The cycle repeats." -- This highlights "echo bias" and opinion mirroring.

### Education

Two harms:
1. Agreeing with student's incorrect assumptions instead of correcting them
2. Being too accommodating, providing answers immediately rather than encouraging critical thinking

### Agentic Applications

"If a weaker model makes a mistake early in the process, a sycophantic model later in the chain might follow the error without question." Sycophancy "propagates misinformation" and "obscures a model's internal knowledge" -- closely mirrors groupthink dynamics.

## Measurement Approaches

1. **Prompt biasing:** Seed prompts with preferences to test if model's feedback shifts
2. **"Are You Sure?" test:** Gaslight the model into thinking it's wrong
3. **Mirroring/Mimicry testing:** Check if model repeats/reinforces user's mistakes
4. **Validation sycophancy:** Whether models provide emotional validation even when harmful
5. **Multi-turn conversations:** "Turn of flip" metric measures how quickly model conforms
6. **Mechanistic interpretability:** Understanding internal model activations during sycophancy

## Mitigation by User Role

### General Users: Prompt Engineering
1. **Prompt thoughtfully:** Use "What do you think of approach X?" not "I think X is right"
2. **Socratic-style approach:** Questions that surface assumptions, proven to reduce hallucination
3. **System prompt customization:** Add skepticism directives

### Product Owners: Contextualized Defenses
- Detect sensitive topics and route to specialized models
- Implement fact-checking layers for high-risk domains (e.g., financial advice)

### Researchers: Training Techniques
- Modified reward functions penalizing sycophantic behavior
- Pinpoint tuning of model components responsible for sycophancy
- Steering methods manipulating model activations at inference time

## Key Insight

"What else are we aware of but not yet taking seriously? The trend has been more 'corrective' rather than 'preventive'. Sycophancy is just one dark pattern."

## Referenced Evaluation Tools

- Petri (Anthropic) -- open-source model behavior auditing
- Bloom (Anthropic) -- agent-based behavioral exploration at scale
- SycEval, Syco-Bench, SYCON-Bench, DarkBench, BullshitEval

## Relevance to Our Project

HIGH -- The most comprehensive practitioner-oriented survey found. The mitigation-by-role framework maps well to our instruction design (system prompts = product owner level). The measurement approaches (especially "turn of flip" and "Are You Sure?" tests) inform how we should evaluate our instructions' effectiveness. The agentic sycophancy propagation finding is critical for multi-agent AGENTS.md patterns.
