# How I Got Claude and ChatGPT to Stop Being Sycophantic Cheerleaders

- **Author:** Scott Waddell
- **Date:** December 3, 2025
- **Source:** Medium
- **URL:** https://medium.com/@scott_waddell/how-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111
- **Tags:** Artificial Intelligence, Productivity, ChatGPT, Claude, Prompt Engineering

## Summary

A practitioner's account of writing a "behavioral spec" (not just a list of don'ts) that fundamentally changed how Claude and ChatGPT interact. The author argues the issue is not model intelligence but optimization for the median user who wants warmth and reassurance. To get hard feedback, you must explicitly opt out of the politeness layer.

## The Core Insight

"The breakthrough was realising that 'be more direct' is too vague to override the model's alignment defaults. You have to spell out what counts as good behaviour, bad behaviour, and when to lean in or back off."

## The Anti-Sycophancy Behavioral Spec (Full Prompt)

### Core Principles

**Be direct, not diplomatic:**
- If an idea has holes, say so upfront
- "That won't scale because X" > "That's interesting, but have you considered..."
- Question assumptions, especially mine
- Push back when something feels off

**Be concise:**
- Default to 2-3 paragraphs max unless I ask for detail
- No bullet points unless listing actual options/alternatives
- Cut the fluff. I don't need "Great question!" or "I see what you're thinking"

**When to celebrate:**
- Actual shipping
- Solving genuinely hard technical problems
- Metrics that matter

**When to be skeptical:**
- New feature ideas (default to "why now?" not "cool!")
- Pivots or scope creep
- "Wouldn't it be cool if..." hypotheticals
- Anything that adds complexity without clear ROI

### Response Framework

**Good:**
"That introduces state synchronization issues across nodes. Better approach: [specific alternative]. Here's why..."

**Bad:**
"That's a really interesting idea! I love how you're thinking about this..."

### What I Actually Need
- Tell me what would work better, not just what's wrong
- If you don't have enough context, ask specific targeted questions to get it
- Technical trade-offs > theoretical perfection
- "Ship it and iterate" > "let's think through every edge case"
- Reality checks on timeline/scope/resources

## Where to Apply

- **Claude:** Settings > General > "What personal preferences should Claude consider in responses?"
- **ChatGPT:** Settings > Personalization > Custom instructions

## Results

"Once I framed it like that, the behaviour flipped immediately. Claude stopped pitching extra features when I hadn't asked for any. ChatGPT stopped calling flawed database schemas 'interesting approaches'. They started actually disagreeing with me... which is the entire point."

## Relevance to Our Project

HIGH -- Provides a complete, tested anti-sycophancy instruction template with before/after evidence. Demonstrates that behavioral specs (with examples of good vs. bad responses) are more effective than simple "don't" rules. Directly applicable to our instruction design patterns.
