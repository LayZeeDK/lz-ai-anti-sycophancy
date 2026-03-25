---
description: There's a mass delusion happening in AI right now. Every tutorial tells you to write system prompts like you're crafting a spell — just find the right i...
image: https://storage.googleapis.com/indie-hackers.appspot.com/shareable-images/posts/6e18d54294
title: The Complete Guide to Writing Agent System Prompts — Lessons from Reverse-Engineering Claude Code
---

[ 1  Like ](/sign-up) 

0 Bookmarks [  0Comments ](/sign-in) 

Report

There's a mass delusion happening in AI right now.

Every tutorial tells you to write system prompts like you're crafting a spell — just find the right incantation and the model will obey. "You are an EXTREMELY TALENTED senior engineer with 20 years of experience..." Sound familiar?

I've spent the last few months building [VibeCom](https://www.vibecom.app), an AI startup advisor that runs deep market research and generates VC-grade analysis. Along the way, I reverse-engineered Claude Code's system prompt, read through DeepAgents' middleware source, and burned through more API credits than I'd like to admit. The biggest lesson? **Most of what people think matters about system prompts doesn't. And the things that actually matter, almost nobody talks about.**

This post is the complete playbook — not a 5-minute overview, but everything I wish someone had told me before I started. Grab coffee.

---

## 1\. Design Philosophy: Trust the Model

> "An agent is a model. Not a framework. Not a prompt chain."  
> — shareAI-lab/learn-claude-code

This idea changed everything for me. The LLM already knows how to reason, plan, and execute. Your system prompt isn't teaching it to think — it's setting up the environment for it to work in.

Think of it like hiring a senior engineer. You don't hand them a 20-step checklist for every task. You tell them: here's who we are, here are the boundaries, here's what good looks like. Then you get out of the way.

Your system prompt has exactly **four jobs**:

* **Tell it who it is** — role and identity
* **Tell it where the walls are** — safety constraints
* **Tell it what good looks like** — quality standards
* **Give it tools** — capabilities and knowledge

That's it. Everything else is noise.

### The Harness Mindset

```
Harness = Tools + Knowledge + Observation + Action Interfaces + Permissions

```

Your system prompt is the operating manual for the harness. You're not designing a rigid pipeline — you're designing **an environment where the model can do its best work autonomously.**

Don't write your system prompt like a flowchart. The model will decide the execution order itself.

---

## 2\. Prompt Structure and Section Order

### The Recommended Layout (Reverse-Engineered from Claude Code v2.0.14)

```
┌─────────────────────────────────────────────┐
│ 1. Identity                                  │  ← Read first, anchors behavior
│ 2. Security & Safety                         │  ← IMPORTANT markers, non-negotiable
│ 3. Tone & Style                              │  ← Controls output format
│ 4. Core Workflow                             │  ← How to do the work
│ 5. Tool Usage Policy                         │  ← Tool selection priorities
│ 6. Domain Knowledge                          │  ← On-demand, not pre-loaded
│ 7. Environment Info                          │  ← Runtime context, dynamically injected
│ 8. Reminders                                 │  ← Re-state critical rules
├─────────────────────────────────────────────┤
│ [Tool Definitions — system-injected]         │  ← Not editable, usually very long
├─────────────────────────────────────────────┤
│ [User Message]                               │
└─────────────────────────────────────────────┘

```

### Why This Order Matters

**LLMs have a U-shaped attention curve** — they pay the most attention to the beginning and end of your prompt, and zone out in the middle. This is the "Lost in the Middle" effect, and it's well-documented.

* **Identity + Safety at the top**: The model establishes role and boundaries first (primacy effect)
* **Core Workflow in the upper-middle**: Your most important section — how the agent does its work
* **Tool Definitions are system-injected after your prompt**: Claude Code's tool definitions eat \~11,438 tokens. This means your custom content actually ends up closer to the beginning than you'd expect — which _helps_ adherence
* **Reminders at the bottom**: Exploit recency bias to reinforce critical rules

---

## 3\. Writing Each Section

### 3.1 Identity — Who Is This Agent?

**Goal:** Anchor the model's role in 1-3 sentences.

```
You are Claude Code, Anthropic's official CLI for Claude.
You are an interactive agent that helps users with software engineering tasks.

```

**Guidelines:**

* Keep it concise — 1-3 sentences max
* Name the role explicitly (helps the model distinguish contexts)
* State the core responsibility ("helps with X"), not a vague "you're a helpful assistant"
* Mention SDK/platform if applicable ("built on Anthropic's Claude Agent SDK")

**Anti-patterns:**

* "You are a helpful, harmless, and honest AI assistant" — too generic, no role anchor
* A full paragraph of backstory and lore — wastes tokens, the model doesn't need character development

### 3.2 Security & Safety — The Hard Boundaries

**Goal:** Set unbreakable behavioral constraints.

```
IMPORTANT: Assist with defensive security tasks only.
Refuse to create, modify, or improve code that may be used maliciously.
IMPORTANT: You must NEVER generate or guess URLs for the user.

```

**Guidelines:**

* Use `IMPORTANT:` prefix — Claude's instruction hierarchy training gives this extra weight
* Use absolute language: `NEVER`, `MUST NOT`, `Refuse to`
* State both what's allowed AND what's forbidden (bidirectional constraints are clearer)
* Place at the very top, not buried in the middle
* **Repeat critical safety rules at the end** — Claude Code does exactly this

**Why repeat?** Primacy effect (beginning) + Recency effect (end) = double reinforcement. Claude Code's security declaration appears at both the start and end of the prompt. Not because the engineers were forgetful — because they understand the U-shaped attention curve.

### 3.3 Tone & Style — Controlling the Output

**Goal:** Control output format and voice.

```markdown
## Tone and style

- Your responses should be short and concise.
- Only use emojis if the user explicitly requests it.
- Use Github-flavored markdown for formatting.
- NEVER create files unless absolutely necessary.

```

**Guidelines:**

* List specific behaviors, not vague "be professional"
* Every rule should be true/false testable ("short and concise" vs. "try to be brief")
* Include output format requirements (markdown? JSON? plain text?)
* Include what NOT to do — many style issues are about prohibiting behavior

**Claude Code's gem — Professional Objectivity:**

```
Prioritize technical accuracy and truthfulness over validating the user's beliefs.
Focus on facts and problem-solving, providing direct, objective technical info
without any unnecessary superlatives, praise, or emotional validation.

```

This paragraph is crucial: it blocks the model's sycophancy tendency. If your agent needs to give objective judgments (code review, idea evaluation, architecture decisions), you absolutely need a similar clause.

### 3.4 Core Workflow — The Most Important Section

**Goal:** Teach the model _how to work_ — methodology, not rigid procedures.

This is the **hardest section to write well**, and the most impactful when you get it right.

**The core principle: give principles, not procedures.**

> Tell the LLM what good output looks like and why it's good — let it figure out how to get there. Avoid prescribing exact field counts, step sequences, or formats, unless the output is consumed by machines downstream.

**Claude Code's approach:**

```markdown
## Doing tasks

The user will primarily request software engineering tasks.
For these tasks the following steps are recommended:

- Use the TodoWrite tool to plan the task if required

```

Notice the word "recommended" — not "you must follow these exact steps." That single word choice gives the model room to adapt.

**A good workflow definition:**

```
1. Understand first — read existing code before modifying it
2. Plan first — break complex tasks into steps before executing
3. Minimal changes — only change what's necessary, don't "refactor while you're in there"
4. Verify — confirm your changes work (run tests, lint, etc.)

```

Each rule has an implicit "why" — the model can understand the intent and generalize to new scenarios.

**Anti-patterns:**

* A rigid 20-step procedure — the model will execute mechanically and freeze on unexpected inputs
* "First do A, then do B, then do C" — that's a prompt chain, not an agent prompt
* Over-guiding things the LLM is already good at — wastes tokens

I learned this the hard way with VibeCom. Early versions had a 10-step research workflow. The model would dutifully execute all 10 steps even when step 3 already answered the user's question. When I switched to principles ("research until you have sufficient evidence, then synthesize"), quality went up and token costs went down.

**The exception:** When output is consumed by machines downstream (inter-agent communication, API response formats), you _should_ define strict formats. Principles are for behavior; schemas are for interfaces.

### 3.5 Tool Usage Policy — Resolving Ambiguity

**Goal:** When multiple tools can do the same thing, tell the model which to prefer.

```markdown
## Tool usage policy

- Use specialized tools instead of bash commands:
  - Read for reading files instead of cat/head/tail
  - Edit for editing instead of sed/awk
  - Grep for searching instead of grep/rg
- You can call multiple tools in a single response. If independent, call in parallel.
- Use the Task tool for file search to reduce context usage.

```

**Guidelines:**

* Use "instead of" to express priority (A instead of B)
* Explain _why_ to prefer certain tools ("provides a better user experience", "reduces context usage")
* Define parallelism strategy (independent → parallel, dependent → sequential)
* List security constraints for tool usage (path validation, permission checks)

**The crucial relationship between tools and prompts:**

Tool definitions are typically system-injected and you can't edit them directly. Claude Code's tool definitions are \~11,438 tokens. This means:

* Don't repeat information already in tool definitions
* Use the system prompt for **strategic** guidance: _when_ to use each tool, _why_ to prefer one over another, priority ordering
* Tool definition quality directly impacts agent effectiveness — if you're building your own agent, invest time in writing excellent tool descriptions

### 3.6 Domain Knowledge — Load On-Demand, Not Upfront

**Goal:** Provide specialized knowledge the model's training data might lack.

**The key principle: progressive disclosure, not knowledge dumps.**

```
❌ Paste all 200 API endpoints into the system prompt → token explosion
✅ Give the model a tool to look things up → "Load knowledge when you need it"

```

This strategy is shared by Claude Code's Skills system and DeepAgents' Progressive Disclosure middleware. Both load knowledge on-demand through tool calls rather than pre-loading everything.

**Implementation approaches:**

1. **Put pointers in the system prompt**: "Use the get\_api\_docs tool to retrieve documentation when needed"
2. **Use [CLAUDE.md](http://CLAUDE.md) / [AGENTS.md](http://AGENTS.md) for project context** — loaded at runtime, not hardcoded
3. **Use Skills / [SKILL.md](http://SKILL.md) for capability discovery** — the model sees a menu of available skills, fetches full specs on demand

### 3.7 Environment Info — Runtime Context

**Goal:** Give the model awareness of its execution environment.

```xml
<env>
Working directory: /Users/fengliu/Desktop/tfm/vibecom
Is directory a git repo: true
Platform: darwin
Today's date: 2026-03-21
</env>
You are powered by the model named Claude Opus 4.6.

```

**Guidelines:**

* Generate dynamically, never hardcode
* Include: working directory, platform, date, model name, git status
* Use structured format (XML tags or code blocks) for easy parsing
* Date matters — the model needs to know "now" to judge information freshness

### 3.8 Reminders — The Final Reinforcement

**Goal:** Re-state the most critical rules at the end of the prompt.

Claude Code repeats its safety constraint and TodoWrite requirement at the bottom:

```
IMPORTANT: Assist with defensive security tasks only. [repeated]
IMPORTANT: Always use the TodoWrite tool to plan and track tasks. [repeated]

```

**Guidelines:**

* Only repeat 2-3 of the most critical rules — don't duplicate everything
* Exploit recency bias — the model remembers recent content more strongly
* Best candidates: safety constraints, most-frequently-violated rules, core workflow reminders

---

## 4\. Token Budget and Context Management

### Budget Allocation Reference

| Section | Recommended Tokens | Notes |  
| ------------------------- | ------------------ | -------------------------------------------- |  
| Identity + Safety | 200-500 | Concise but non-negotiable |  
| Tone & Style | 300-800 | Rules must be specific, but don't ramble |  
| Core Workflow | 500-2,000 | Most important section, worth the investment |  
| Tool Usage Policy | 300-1,000 | Depends on number of tools |  
| Domain Knowledge | 0-1,000 | On-demand loading preferred |  
| Environment Info | 100-300 | Generated dynamically |  
| Reminders | 100-300 | Only repeat the essentials |  
| **Your total** | **1,500-6,000** | |  
| Tool Definitions (system) | 5,000-15,000 | Not in your control |

### Context Degradation Curve

Community testing (Reddit u/CodeMonke\\\_) has mapped real-world adherence degradation:

* **< 80K tokens**: Prompt adherence stays stable
* **80K - 120K tokens**: Instruction following starts degrading
* **\> 120K tokens**: Significant degradation — the model "forgets" early instructions
* **\> 180K tokens**: Severe degradation

**Your 200K context window ≠ 200K of effective context.** Plan accordingly.

**Mitigation strategies:**

* Keep your system prompt lean (< 6,000 tokens for your part)
* Use summarization to compress conversation history (DeepAgents triggers at \~80K characters)
* Place critical rules at both ends of the prompt (U-shaped attention)
* Inject `<system-reminder>` tags mid-conversation (more on this in section 8)

---

## 5\. Writing Principles

### 5.1 Give Principles, Not Procedures

```
❌ "Step 1: Read the file. Step 2: Find the bug. Step 3: Fix it. Step 4: Run tests."
✅ "Always understand existing code before modifying it. Verify your changes work."

```

Principles generalize. Procedures can only be followed mechanically. When the model encounters a situation you didn't anticipate, principles guide the right decision. Procedures don't.

**Exception:** When output is consumed by machines (inter-agent communication, API formats), define strict schemas.

### 5.2 Use Absolute Language for Hard Constraints

| Strength | Language | Use For |  
| -------------------- | ----------------------- | ------------------------------- |  
| Absolute prohibition | `NEVER`, `MUST NOT` | Safety, irreversible operations |  
| Strong requirement | `ALWAYS`, `MUST` | Core workflow rules |  
| Recommendation | `recommended`, `prefer` | Best practices with exceptions |  
| Suggestion | `consider`, `you may` | Optional optimizations |

Claude Code examples:

* `NEVER update the git config` — absolute prohibition
* `ALWAYS prefer editing an existing file` — strong, but exceptions exist
* `The following steps are recommended` — suggested workflow

### 5.3 Use Examples Instead of Explanations

```markdown
## Code References

When referencing specific functions or pieces of code include
the pattern `file_path:line_number`.

<example>
user: Where are errors from the client handled?
assistant: Clients are marked as failed in the `connectToServer`
function in src/services/process.ts:712.
</example>

```

One example teaches more than 100 words of explanation:

* Models learn patterns from examples more reliably than from abstract descriptions
* Wrap with `<example>` tags to separate from rules
* Provide both positive ("do this") and negative ("don't do this") examples
* Use real, specific examples — not "foo/bar" placeholders

### 5.4 Bidirectional Constraints

```
✅ "Use dedicated tools: Read for reading files, Edit for editing files."
✅ "Do NOT use bash for file operations (cat, head, tail, sed, awk)."

```

Saying only "do this" → model doesn't know when NOT to do it.  
Saying only "don't do this" → model doesn't know the alternative.  
Bidirectional → clear and unambiguous.

### 5.5 Explain Why, Not Just What

```
❌ "Don't use git commit --amend."
✅ "Avoid git commit --amend. ONLY use --amend when either
   (1) user explicitly requested amend OR
   (2) adding edits from pre-commit hook.
   Reason: amending may overwrite others' commits."

```

Explaining the _why_ lets the model make correct judgments in edge cases. Claude Code's git safety protocol is a masterclass — every rule implies its rationale.

### 5.6 Structure Over Prose

* **Markdown headers** (`##`, `###`) — models recognize hierarchy
* **Bullet lists** over paragraphs — each rule independently testable
* **XML tags** for special content: `<example>`, `<env>`, `<system-reminder>`
* **Tables** for comparisons and mappings
* Never dump unstructured text — structured prompts consistently outperform natural language prose in adherence testing

---

## 6\. Anti-Patterns That Waste Your Tokens

### Prompt Chains Disguised as Agents

```
"First call tool A to get data.
Then call tool B with the result.
Then format the output as JSON.
Then save to file."

```

This isn't an agent prompt — it's a pipeline script. The model will execute mechanically and lose its autonomous planning ability.

**The fix:** Tell the model the goal and constraints. Let it decide the steps.

### Flattery Engineering

```
"You are an EXTREMELY TALENTED and INCREDIBLY EXPERIENCED
senior software engineer with 20 years of experience..."

```

Compliments and superlatives **do not improve output quality**. The model doesn't have an ego to boost. Save those 15 tokens for an actual rule.

### Knowledge Dumps

```
"Here is the complete API documentation for our 200 endpoints..."

```

This devours your context window and accelerates context rot. Replace with on-demand loading:

```
"Use the get_api_docs tool to retrieve API documentation when needed."

```

### Repeating Tool Descriptions

If the tool definition already says "Read tool reads a file from the filesystem," don't say it again in your system prompt. Only add **strategic** guidance that the tool definition doesn't cover — when to use it, why to prefer it, priority ordering.

### Missing Failure Handling

Without explicit guidance, models will retry failed tool calls in an infinite loop. Always include:

```
"If a tool call is denied, do not re-attempt the exact same call.
Think about why it was denied and adjust your approach."

```

### Ignoring Context Window Decay

200K context window ≠ 200K of effective context. Real-world testing shows degradation starting at 80K. You need a summarization strategy.

---

## 7\. Injection Points and Priority

### Claude Code's Three Customization Methods

| Method | Replaces | Placement | Best For |  
| -------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- |  
| **Output Styles** | "Tone and style" + "Doing tasks" sections | Just before tool definitions | Changing interaction style |  
| **\--append-system-prompt** | Nothing (additive) | After output style, before tool definitions | Adding specific behaviors |  
| **\--system-prompt** | Entire system prompt | Keeps tool definitions + one identity line | Full customization (nuclear option) |

If you use multiple: Output Style → Append Prompt → Tool Definitions

### Instruction Hierarchy

Claude is specifically trained with an instruction hierarchy:

```
1. User's explicit instructions (CLAUDE.md, direct requests)  ← Highest priority
2. Custom system prompt additions                               ← High
3. Default system prompt                                        ← Medium
4. Tool definitions                                             ← Reference level

```

This means:

* [CLAUDE.md](http://CLAUDE.md) rules override default system prompt behavior
* User's direct requests override everything
* Your custom prompt overrides the default prompt

### Dynamic Injection Mechanisms

* **`<system-reminder>`** — inject into any message mid-conversation to remind the model of critical rules
* **[CLAUDE.md](http://CLAUDE.md) / [AGENTS.md](http://AGENTS.md)** — loaded at runtime from files, appended to system prompt
* **Skills / [SKILL.md](http://SKILL.md)** — loaded on-demand via tool calls, zero system prompt footprint

---

## 8\. Mid-Conversation Injection — The Secret Weapon

The system prompt only appears once, at the very start of the messages array. But LLMs accept the full messages array (alternating user / assistant / tool messages) as input, and **you can inject prompts into user messages and tool results too.** Claude Code uses this technique heavily in production.

### Why It's Necessary

**Fighting context rot.** As conversations grow longer, the model's adherence to system prompt instructions degrades (noticeable at 80K+ tokens). Injecting reminders mid-conversation = **refreshing the rules** via recency bias.

**The mental model:**

* System prompt = **the constitution** (established once, long-term authority)
* User message reminders = **memos** (sent periodically, maintaining enforcement)

### Three Injection Points in the Messages Array

```
Messages Array:
┌─────────────────────────────────────┐
│ System Prompt                       │ ← Appears once, primacy effect
│   (identity, safety, workflow...)   │
├─────────────────────────────────────┤
│ User Message 1                      │
│ Assistant Message 1                 │
│ User Message 2 + <system-reminder>  │ ← Mid-conversation injection
│ Assistant Message 2                 │
│ Tool Result + <system-reminder>     │ ← Can inject into tool results too
│ ...                                 │
│ User Message N + <system-reminder>  │ ← Latest message, strongest recency
└─────────────────────────────────────┘

```

| Location | Advantage | Disadvantage |  
| -------------------------- | ------------------------------ | ----------------------------------------------- |  
| **System prompt** | Primacy effect, read first | Appears once, "forgotten" in long conversations |  
| **User message injection** | Recency bias, periodic refresh | Each injection costs tokens |  
| **Tool result injection** | Most natural injection point | Only works when tools are called |

### How Claude Code Actually Uses It

**Prerequisite — declare the tags in the system prompt:**

```
Tool results and user messages may include <system-reminder> tags.
<system-reminder> tags contain useful information and reminders.
They are automatically added by the system, and bear no direct
relation to the specific tool results or user messages in which they appear.

```

This step is critical: it tells the model these tags are system-injected, not user speech.

**Usage 1: Behavioral Reminders (periodic rule refresh)**

```xml
<system-reminder>
The task tools haven't been used recently. If you're working on tasks
that would benefit from tracking progress, consider using TaskCreate...
</system-reminder>

```

Claude Code uses this to remind the model to plan with TodoWrite — because models tend to "forget" planning and just start coding.

**Usage 2: Mode Switching (Plan Mode)**

```xml
<system-reminder>
Plan mode is active. The user indicated that they do not want you to
execute yet -- you MUST NOT make any edits, run any non-readonly tools,
or otherwise make any changes to the system.
</system-reminder>

```

Plan mode isn't implemented in the system prompt. It's a tag injected into the next user message. This lets you toggle modes dynamically without modifying the system prompt. Brilliant.

**Usage 3: File Change Notifications**

```xml
<system-reminder>
Note: /path/to/file.ts was modified, either by the user or by a linter.
This change was intentional, so make sure to take it into account.
</system-reminder>

```

When an external process (linter, formatter, manual edit) modifies a file, the system notifies the model via reminder — preventing decisions based on stale file contents.

**Usage 4: Dynamic Context (dates, project rules)**

```xml
<system-reminder>
Today's date is 2026-03-21.
Current branch: dev
claudeMd: [CLAUDE.md content injected here]
</system-reminder>

```

Runtime context (date, git status, project rules) is injected via user messages, not hardcoded in the system prompt.

### Writing Guidelines for Reminders

* **Wrap in XML tags** (`<system-reminder>`) — the model can distinguish system injection from user speech
* **Pre-declare tags in the system prompt** — otherwise the model may try to respond to the reminder
* **Don't inject every message** — each injection costs tokens, only inject when needed
* **Keep it short** — a reminder isn't a second system prompt, just 1-2 critical rules
* **Don't contradict the system prompt** — reminders supplement and reinforce, they don't override
* **Use for dynamic toggling** — plan mode, readonly mode, feature flags

### When to Use System Prompt vs. User Message Reminder

| Scenario | System Prompt | User Message Reminder |  
| -------------------------- | :------------------: | :-------------------: |  
| Role definition | ✅ | ❌ |  
| Safety constraints | ✅ First declaration | ✅ Periodic repeat |  
| Workflow methodology | ✅ | ❌ |  
| Mode switching (plan mode) | ❌ | ✅ |  
| File change notifications | ❌ | ✅ |  
| Date / environment info | ✅ Initial value | ✅ Updated value |  
| Behavioral correction | ❌ | ✅ |  
| Tool usage reminders | ✅ Rule definition | ✅ Execution nudges |

---

## 9\. Prompt Cache — Save 90% on Repeat Tokens

Anthropic's prompt caching lets you cache the **static prefix** of your messages array. When subsequent requests share the same prefix, they hit the cache — saving money and reducing latency.

For agents, this matters a lot: you're re-sending the system prompt + tool definitions on every single LLM call within a conversation.

### Key Numbers

| Metric | Value |  
| ------------------------ | ----------------------------------------------------------- |  
| Cache hit cost | **10%** of normal price (90% savings) |  
| Cache write cost | **125%** of normal price (25% premium on first write) |  
| Cache TTL | **5 minutes** (expires if no requests) |  
| Minimum cacheable length | **1,024 tokens** (Claude 3.5+) |  
| Cache granularity | **Prefix matching** — from the start to a marked breakpoint |  
| Maximum breakpoints | **4** |

### How This Changes Prompt Design

**Core principle: static content first, dynamic content last.**

```
✅ Cache-friendly layout:
  System prompt (static)      ← Cache breakpoint 1
  Tool definitions (static)   ← Cache breakpoint 2
  CLAUDE.md / project rules   ← Cache breakpoint 3 (changes occasionally)
  Conversation history         ← Breakpoint 4 for rolling window

❌ Cache-destroying layout:
  System prompt
  DYNAMIC TIMESTAMP            ← Changes every request, everything after = cache miss
  Tool definitions
  Conversation history

```

**The trap nobody warns you about:** If you put a dynamic timestamp in the middle of your system prompt, everything after it becomes a cache miss. Every. Single. Request. One timestamp in the wrong place and you're paying full price on thousands of tokens.

### API Usage

```typescript
const response = await anthropic.messages.create({
  model: "claude-sonnet-4-6",
  system: [
    {
      type: "text",
      text: "You are a startup advisor...",
      cache_control: { type: "ephemeral" }  // ← marks a cache breakpoint
    }
  ],
  messages: [...]
});

```

### Multi-Breakpoint Strategy

```
Breakpoint 1: System prompt           ← Almost never changes
Breakpoint 2: Tool definitions         ← Almost never changes
Breakpoint 3: Project rules / CLAUDE.md ← Changes occasionally
Breakpoint 4: First N history messages  ← Rolling window cache

```

Even when conversation history changes, the first 3 breakpoints still hit. A 10-turn conversation saves roughly **40-60% on input token costs.**

### Design Recommendations

* **No high-frequency dynamic values in the system prompt** — date is fine (changes daily), precise timestamps are not
* **Put dynamic context (git status, etc.) in user message injections** — not in the system prompt, or you'll destroy the cache
* **Keep tool definitions stable** — don't dynamically add/remove tools at runtime
* **Use rolling window for conversation history** — cache the first N messages, only the newest message is a cache miss

---

## 10\. The Checklist

After writing your system prompt, review it against this checklist:

### Structure

* \[ \] Identity is at the very top?
* \[ \] Safety constraints marked with IMPORTANT and repeated at the end?
* \[ \] Clear section separation with headers?
* \[ \] Examples wrapped in `<example>` tags?

### Token Budget

* \[ \] Your part < 6,000 tokens?
* \[ \] Not repeating information already in tool definitions?
* \[ \] Domain knowledge loaded on-demand, not pre-loaded?
* \[ \] No verbose lore or character backstory?

### Rule Quality

* \[ \] Every rule is true/false testable?
* \[ \] Hard constraints use absolute language (NEVER/MUST)?
* \[ \] Soft suggestions use recommendation language (recommended/prefer)?
* \[ \] Critical rules explain _why_, not just _what_?
* \[ \] Bidirectional constraints (do this + don't do that)?

### Agent Behavior

* \[ \] Principles given, not rigid step-by-step procedures?
* \[ \] Handled the "tool call denied" scenario?
* \[ \] Handled the "obstacle encountered" strategy (don't brute-force retry)?
* \[ \] Context management strategy in place (summarization threshold)?

### What NOT to Do

* \[ \] No flattery or superlative adjectives?
* \[ \] No redundant "you are a helpful AI" declarations?
* \[ \] Not written as a prompt chain?
* \[ \] No over-engineering (features nobody asked for)?

---

## If I Were Starting Today

Here's exactly what I'd do:

1. **Start with identity + safety in the first 3 lines.** Two sentences for who the agent is. Hard constraints with NEVER/MUST. Repeat safety rules at the end.
2. **Write your core workflow as principles, not steps.** Max 4-5 bullet points. Use "recommended" and "prefer" for soft rules, "NEVER" and "MUST" for hard ones.
3. **Budget 1,500-6,000 tokens for your part.** Tool definitions will add 5,000-15,000 more. If you're over 6K, you're probably dumping knowledge that should be loaded on-demand.
4. **Structure everything.** Markdown headers, bullet lists, XML tags for examples. A structured prompt outperforms natural language prose every time.
5. **Build in mid-conversation reminders from day one.** Declare `<system-reminder>` in your system prompt. Inject reminders for critical rules, mode switches, and context updates.
6. **Design for cache.** Static content first, dynamic content last. Never put changing values in your system prompt body.

---

The irony of all this work? The best system prompts are short. Claude Code's custom instructions (excluding tool definitions) are surprisingly concise. Every line earns its place.

I used to think prompt engineering was about finding clever tricks. Now I think it's about discipline — saying less, saying it precisely, and trusting the model to figure out the rest. The model is smarter than your prompt. Design the environment, not the behavior.

---

## References

| Source | Key Insight |  
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |  
| [Claude Code v2.0.14 System Prompt](https://gist.github.com/AnExiledDev/cdef0dd5f216d5eb50fca12256a91b4d) | Full production agent prompt structure reference |  
| [Reddit: Understanding Claude Code's 3 System Prompt Methods](https://www.reddit.com/r/ClaudeAI/comments/1o66m77/) | Output Styles / --append / --system-prompt deep dive, context rot real-world data |  
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | "The model is the agent" philosophy, harness engineering methodology |  
| [Anthropic Prompt Engineering Docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering) | Official prompt best practices |  
| [DeepAgents Framework](https://deepwiki.com/langchain-ai/deepagents) | Summarization middleware, skills progressive disclosure |

[   Feng Liu ](/fliu0620?id=A1e3TGg1AfN497dTBohsYskZU3P2) 

[ on March 23, 2026 ](/post/the-complete-guide-to-writing-agent-system-prompts-lessons-from-reverse-engineering-claude-code-6e18d54294 "Monday, March 23rd 2026 (10:50 am)") 

1

0 

Share 

[ Say something nice to fliu0620…](/sign-up) 

[ Post Comment](/sign-up) 

 Trending on Indie Hackers

[  $36K in 7 days: Why distribution beats product (early on)   114 comments ](/post/ad8d0eeab2) [  I've been reading 50 indie builder posts a day for the past month. Here's the pattern nobody talks about.   111 comments ](/post/09925bc444) [  Finally reached 100 users in just 12 days 🚀   105 comments ](/post/a8a6297db3) [  I shipped 3 features this weekend based entirely on community feedback. Here's what I built and why.   91 comments ](/post/e52d99adad) [  I relaunched my AI contract tool on Product Hunt today - here's what 400+ founders taught me   89 comments ](/post/4ca6feede7) [  We made Android 10x faster. Now, we’re doing it for the Web. 🚀   71 comments ](/post/af503318e9) 

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.indiehackers.com/post/the-complete-guide-to-writing-agent-system-prompts-lessons-from-reverse-engineering-claude-code-6e18d54294"
  },
  "headline": "The Complete Guide to Writing Agent System Prompts — Lessons from Reverse-Engineering Claude Code",
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://images.indiehackers.com/post-images/6e18d54294/A1e3TGg1AfN497dTBohsYskZU3P2/05f92dc9-4640-7b3e-2142-f74658267914.jpg"
    }
  ],
  "datePublished": "2026-03-23T10:50:21.564Z",
  "dateModified": "2026-03-23T10:50:27.961Z",
  "author": [
    {
      "@type": "Person",
      "name": "Feng Liu",
      "sameAs": [
        "https://www.indiehackers.com/fliu0620"
      ]
    }
  ],
  "thumbnailUrl": "https://images.indiehackers.com/post-images/6e18d54294/A1e3TGg1AfN497dTBohsYskZU3P2/05f92dc9-4640-7b3e-2142-f74658267914.jpg"
}
```
