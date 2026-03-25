# The Complete Guide to Writing Agent System Prompts -- Lessons from Reverse-Engineering Claude Code

- **Author:** (uncredited, Indie Hackers community post)
- **Date:** 2025/2026
- **Source:** Indie Hackers
- **URL:** https://www.indiehackers.com/post/the-complete-guide-to-writing-agent-system-prompts-lessons-from-reverse-engineering-claude-code-6e18d54294
- **Tags:** Claude Code, System Prompts, Anti-Sycophancy, Agent Design, Instruction Architecture

## Summary

A reverse-engineering analysis of Claude Code's system prompt, identifying the specific anti-sycophancy clause and deriving general principles for writing effective agent system prompts. Key thesis: give principles, not procedures, and design the environment for model autonomy.

## Anti-Sycophancy Clauses in System Prompts

Claude Code's system prompt contains a paragraph that "blocks the model's sycophancy tendency":

> "Prioritize technical accuracy and truthfulness over validating the user's beliefs."

If your agent needs to give objective judgments (code review, idea evaluation, architecture decisions), you absolutely need a similar clause.

## Key Principles

### Principles Over Procedures

- Tell the LLM what good output looks like and why it is good -- let it figure out how to get there
- Procedures execute mechanically and fail when encountering unexpected situations
- Principles allow autonomous adaptation to novel scenarios

**Bad (procedure):** "Step 1: Read the file. Step 2: Find the bug. Step 3: Fix it."
**Good (principle):** "Always understand existing code before modifying it. Verify changes work."

### Don't Waste Tokens on Flattery

Compliments like "EXTREMELY TALENTED senior engineer with 20 years of experience" waste tokens without improving output quality -- the model has no ego to boost.

### Writing Guidelines

1. Keep prompts lean (1,500-6,000 tokens for custom content)
2. Use absolute language for hard constraints (NEVER, MUST NOT)
3. Employ examples over explanations (wrapped in tags for clarity)
4. Explain the "why" behind rules so models generalize correctly
5. Structure with headers and lists, not prose paragraphs
6. Load domain knowledge on-demand rather than pre-loading everything

## Fundamental Principle

"Design the environment for the model's autonomy, not the detailed behavior."

## Relevance to Our Project

HIGH -- Directly addresses how to write effective anti-sycophancy instructions in agent system prompts. The "principles over procedures" insight is critical for our specification design. The observation that Claude Code already contains an anti-sycophancy clause validates our approach. The writing guidelines (lean, examples, explain "why", absolute language for hard constraints) are actionable instruction design patterns.
