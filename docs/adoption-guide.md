# Adoption Guide

How to adopt, customize, and maintain the AGENTS.md anti-sycophancy instruction set. This document provides guidance and warnings -- behavioral rules live in the root AGENTS.md.

## Quick Start

Copy `AGENTS.md` to your project root. That is it.

All rules are framed as universal behavioral commitments. They work across any AGENTS.md-compatible coding agent (Claude Code, GitHub Copilot, Cursor, Windsurf, and others) without modification.

## Customization Guidance

### What Is Safe to Customize

- **Adding project-specific rules** after the existing sections. For example, adding a "Project Conventions" section below the Reference Docs section.
- **Adjusting which reference docs are linked.** If your project does not need the adoption guide, remove the link. The behavioral rules are self-contained.
- **Adding project-specific prohibited phrases.** If your team has identified additional sycophantic patterns specific to your domain, add them to the Never section.
- **Adding a coding-specific authority hierarchy.** Example:

```markdown
### Project hierarchy
In this project: specifications > tests > code. When implementation conflicts with a test,
fix the implementation. When a test conflicts with a specification, fix the test.
```

This extends the existing "Never modify verification artifacts" rule with project-specific artifact ordering.

### What Is Unsafe to Customize

- **Removing rules from Behavioral Commitments.** Each rule addresses a specific research-backed sycophantic behavior. Removing a rule re-opens that behavior. If a rule seems unnecessary, it may be targeting a pattern you have not yet encountered.

- **Reordering sections.** The section order exploits the primacy effect -- rules read first get higher compliance. Stance sycophancy rules (Cluster A) are first because they are the most dangerous: neutral-toned stance adaptation is perceived as more authentic than flattery, leading users to over-trust sycophantic agreement. Moving tone rules (Cluster C) above stance rules (Cluster A) reduces the effectiveness of the stance rules.

- **Adding sycophancy-priming vocabulary anywhere in the file.** Words that prime sycophantic output should never appear in the instruction file, even in custom sections.

- **Replacing "Only when" with "Ask first."** The "Only when" phrasing is deliberately chosen for anti-sycophancy rules because it specifies the exact condition under which the behavior is permitted. "Ask first" is ambiguous about what conditions satisfy the gate.

## Token-Priming Avoidance

The following words should never appear in the AGENTS.md text or any custom additions. Research (joshryandavis) demonstrated that including "absolutely" in a system prompt primed the model to produce "You're absolutely right!" in its output. The mechanism extends to other high-salience positive vocabulary.

**Prohibited words in rule text:**
- `absolutely`
- `certainly`
- `definitely`
- `excellent`
- `great`
- `wonderful`
- `fantastic`
- `perfect`
- `brilliant`

**Safe alternatives:**
- `accurate`, `correct`, `verified`, `confirmed` (for positive assertions)
- `clear`, `direct`, `specific` (for quality descriptions)
- `sound`, `appropriate`, `sufficient` (for assessments)

These words are prohibited in the instruction text, not in model output. The model may still use some of these words in appropriate contexts (e.g., "the test results confirmed the fix"). The prohibition prevents the instruction file itself from priming sycophantic patterns.

## Personalization Warning

Research (Obidiegwu) shows that persistent user preference personalization creates "virtual echo chambers" that amplify sycophancy over time. The mechanism: the model learns the user's preferences and optimizes for alignment with those preferences rather than accuracy.

**Do NOT add user preference sections to the AGENTS.md.** Examples of what to avoid:

- "The user prefers concise responses" -- the model will sacrifice completeness to match the preference.
- "The user values innovation" -- the model will favor novel approaches over appropriate ones.
- "The user is a senior engineer" -- authority claims have negligible internal effect on model behavior (Wang et al., cosine similarity 0.997), but they can bias the model toward deference.

If you need to communicate user context, put it in a separate project description file that does not contain behavioral rules. Keeping preferences and rules in the same file creates an implicit optimization target: satisfy the preferences while following the rules. When these conflict, preferences tend to win.

## Context Rot Mitigation

### Symptoms

After approximately 80K tokens of conversation, instruction adherence begins to degrade. Symptoms include:

- The model starts opening responses with positive adjectives again.
- Position-maintenance weakens -- the model concedes points more easily.
- Epistemic labels disappear from responses.
- Proactive criticism frequency drops.

At 180K+ tokens, degradation can be severe.

### Mitigation: Mid-Session Reminder

The file `docs/mid-session-reminder.md` contains a distilled block of the most critical rules, designed for injection via `<system-reminder>` tags.

**When to inject:**
- At 80K tokens of conversation context.
- Every 50K tokens thereafter.

**How to inject:**

For tools that support system-reminder injection (Claude Code, compatible MCP servers):

```
<system-reminder>
[Contents of docs/mid-session-reminder.md]
</system-reminder>
```

For tools that use conversation-level instructions, paste the reminder content into the conversation at the appropriate token threshold.

### Why This Works

The mid-session reminder exploits the recency effect -- content near the end of the context window gets higher attention. By re-injecting the most critical rules at intervals, you counteract the degradation of the primacy effect from the original AGENTS.md at the start of the context.

The reminder contains 8 rules selected for:
1. **Stance maintenance** -- the most dangerous sycophancy dimension.
2. **Mechanical verifiability** -- rules that can be checked objectively (phrase bans, verification artifact protection).

## Decision-Point Runbook Pattern

For critical decisions, establish a protocol that prevents both sycophantic agreement and stubborn refusal:

1. **State the options.** List all viable approaches with tradeoffs.
2. **State your recommendation** with explicit reasoning. ("I recommend X because [specific reasons].")
3. **State what would change your recommendation.** ("I would change to Y if [specific conditions].") This pre-commits to update criteria, preventing both blind agreement and unmovable stubbornness.
4. **Ask the user to decide.** ("Which approach do you prefer, given these tradeoffs?")

### Coding Example

> There are two approaches for the caching layer:
>
> **Option A: Redis.** Supports expiration, pub/sub, and persistence. Adds an infrastructure dependency.
> **Option B: In-memory cache.** No dependencies. Loses state on restart. Single-process only.
>
> I recommend Redis because the notification system requires pub/sub and the service runs on multiple containers. I would change to in-memory if the service were single-process and restarts were acceptable.
>
> Which approach fits your deployment constraints?

### Non-Coding Example

> There are two approaches for the hiring process:
>
> **Option A: Structured interviews.** Higher predictive validity. More scheduling overhead.
> **Option B: Unstructured interviews.** Easier to schedule. Lower predictive validity.
>
> I recommend structured interviews because reducing false positives in hiring has a larger cost impact than scheduling overhead for a team of this size. I would change to unstructured if the team were hiring fewer than 3 people per year, where the statistical advantage matters less.
>
> Which approach fits your team's capacity?

## What Does NOT Work (Anti-Patterns from Research)

### Auto-generating AGENTS.md content

Research (Gloaguen et al. 2026, ETH Zurich, 138 repositories) found that LLM-generated context files reduce task success by 3% and increase token cost by 20%. Every line in the AGENTS.md must be deliberately crafted. Do not use a language model to generate or expand the rules -- it will add filler that dilutes the effective rules.

### Adding authority claims

Phrases like "you are a senior engineer with 20 years of experience" have negligible internal effect on model behavior (Wang et al., cosine similarity 0.997 between expertise levels in model representations). They waste instruction budget and create false expectations about the model's behavior.

### Repeated rules without structural support

One practitioner (john-savepoint) added anti-sycophancy instructions to three levels of CLAUDE.md files with IMPORTANT markers. The instructions had no effect. Phrase bans without the supporting epistemic restructuring (epistemic labeling, verification protocols, position-maintenance conditions) are cosmetic.

### Using AGENTS.md as a linter

The AGENTS.md is a behavioral instruction set, not a code quality tool. If you want to enforce code formatting, import conventions, or naming patterns, use deterministic linters (ESLint, Prettier, Ruff) that have zero instruction-budget cost and 100% consistency. Reserve the AGENTS.md for behaviors that require judgment.

### Stuffing the file with examples

Examples belong in the reference docs (this is progressive disclosure). The root AGENTS.md must stay concise. Adding inline examples inflates the file, consuming instruction budget that could be used by the agent for task-specific instructions. The research-backed limit is approximately 150-200 total instructions across all sources. Every line of AGENTS.md counts against that budget.

---

*This document provides guidance and warnings only. All behavioral rules are in the root AGENTS.md.*
