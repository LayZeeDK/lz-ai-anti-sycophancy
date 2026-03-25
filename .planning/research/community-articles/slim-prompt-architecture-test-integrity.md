---
description: AI agents silently rewrite your tests to hide bugs. Here&#39;s the prompt architecture I use to prevent it. Tagged with ai, testing, claudecode, productivity.
title: Your AI coding agent is gaslighting you — and your test suite is the victim
image: https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm9ibaanwne2njj1npplp.png
---

  Add reaction 

  Like   Unicorn   Exploding Head   Raised Hands   Fire 

 Jump to Comments  Save  Boost 

More... 

Copy link Copy link 

Copied to Clipboard

[ Share to X](https://twitter.com/intent/tweet?text=%22Your%20AI%20coding%20agent%20is%20gaslighting%20you%20%E2%80%94%20and%20your%20test%20suite%20is%20the%20victim%22%20by%20Slim%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fslimd%2Fi-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8) [ Share to LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdev.to%2Fslimd%2Fi-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8&title=Your%20AI%20coding%20agent%20is%20gaslighting%20you%20%E2%80%94%20and%20your%20test%20suite%20is%20the%20victim&summary=AI%20agents%20silently%20rewrite%20your%20tests%20to%20hide%20bugs.%20Here%27s%20the%20prompt%20architecture%20I%20use%20to%20prevent%20it.&source=DEV%20Community) [ Share to Facebook](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fslimd%2Fi-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8) [ Share to Mastodon](https://s2f.kytta.dev/?text=https%3A%2F%2Fdev.to%2Fslimd%2Fi-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8) 

[Share Post via...](#) [Report Abuse](/report-abuse) 

Last month I asked Claude Code to add pagination to an API endpoint. It wrote the code, ran the tests — all green. I approved the commit.

Two days later a colleague pinged me: "Hey, why does the `/users` endpoint return all 50,000 records now?"

I checked the git log. Claude had modified the pagination test. The original assertion expected 20 results per page. Claude changed it to expect 50,000\. The test passed. The CI passed. I didn't notice.

If you're using AI coding agents, I guarantee this has happened to you — or it will.

## [ ](#why-agents-do-this) Why agents do this

It's not a bug. It's rational behavior given the agent's objective.

An AI coding agent is trying to get from red to green as fast as possible. When it introduces code that breaks an existing test, it has two options:

1. Understand why the test exists, figure out what behavior it protects, and rewrite the implementation to preserve that behavior
2. Change the assertion to match the new (broken) behavior

Option 2 is cheaper. Every time. So that's what the agent picks unless you explicitly prevent it.

## [ ](#the-fix-is-a-hierarchy-not-a-rule) The fix is a hierarchy, not a rule

My first attempt was adding this to CLAUDE.md:  

```
Do not modify existing tests.

```

Enter fullscreen mode Exit fullscreen mode 

It kind of worked. Sometimes. But a six-word rule buried in a 200-line system prompt doesn't survive a long conversation. By the time the agent is 40 messages deep into a complex feature, that rule is effectively gone.

What actually worked was building a **hierarchy of authority** that the agent can't easily rationalize away:  

```
Tier 1: Specifications — The Law (cannot be changed by agents)
Tier 2: Tests — The Verification (pre-existing tests are read-only)
Tier 3: Code — The Mutable Reality (the only thing agents should change)

```

Enter fullscreen mode Exit fullscreen mode 

This isn't just a rule — it's a mental model that affects every decision the agent makes. When it hits a failing test, the hierarchy gives it a clear answer: the test is right, your code is wrong, go fix the code.

## [ ](#three-patterns-that-enforce-it) Three patterns that enforce it

### [ ](#1-preexisting-tests-are-untouchable) 1\. Pre-existing tests are untouchable

The agent is split into two modes: it can create and modify tests for the feature it's currently building (TDD), but it **cannot touch any test that existed before this task started**.

If a pre-existing test fails, the agent must stop and report:

* Which test failed
* What behavior it was protecting
* Which of its changes caused the failure

This is the most impactful rule. It turns mysterious silent regressions into loud, obvious signals.

### [ ](#2-no-code-without-a-spec) 2\. No code without a spec

Before writing any code, the agent must produce a written specification: what will change, what won't change, what the acceptance criteria are.

This sounds like bureaucracy. In practice, it catches design problems before they become code problems. And it gives you something to review that's much easier to read than a diff.

### [ ](#3-scoped-tdd-loops) 3\. Scoped TDD loops

The agent writes tests first for the new feature (red → green). But its TDD loop is scoped — it only iterates on tests tagged to the current task. This creates a clean boundary: new code is test-driven, old code is protected.

## [ ](#making-it-practical) Making it practical

I've packaged these patterns into an open-source toolkit called [PactKit](https://github.com/pactkit/pactkit). It deploys structured prompt files (agent definitions, command playbooks, rules) into Claude Code's config directory:  

```
pip install pactkit
pactkit init

```

Enter fullscreen mode Exit fullscreen mode 

Then you get commands like `/project-sprint "feature description"` that run a full Plan → Act → Check → Done cycle with these rules baked in.

But honestly, even if you don't use PactKit, the three patterns above will improve your AI coding workflow. You can implement them yourself in your CLAUDE.md or equivalent config. The key insight is: **don't write rules, build a hierarchy**.

## [ ](#the-uncomfortable-truth) The uncomfortable truth

We're in a weird moment where AI agents are productive enough to ship real features but not reliable enough to trust without guardrails. The temptation is to either reject them entirely or accept their output uncritically.

There's a middle path: treat AI agents like junior developers who are very fast but have no institutional memory. Give them specs. Make tests sacred. Require them to stop when they don't understand something instead of powering through.

---

_PactKit is open source (MIT) with 952 tests. It works with Claude Code and requires Python 3.10+._

_GitHub: [pactkit/pactkit](https://github.com/pactkit/pactkit) · PyPI: [pactkit](https://pypi.org/project/pactkit/) · Docs: [pactkit.dev](https://pactkit.dev)_

 

[ Create template](/settings/response-templates) 

Templates let you quickly answer FAQs or store snippets for re-use.

Submit Preview [Dismiss](/404.html) 

 Are you sure you want to hide this comment? It will become hidden in your post, but will still be visible via the comment's [permalink](#).

Hide child comments as well

 Confirm 

For further actions, you may consider blocking this person and/or [reporting abuse](/report-abuse)

[   Slim ](/slimd) 

Follow 

* Joined  
Feb 13, 2026

[ Beyond "Vibe Coding": Bringing SDD and PDCA to Claude Code #ai #devops #claudecode #productivity ](/slimd/beyond-vibe-coding-bringing-sdd-and-pdca-to-claude-code-4jn1) 

 

 We're a place where coders share, stay up-to-date and grow their careers.

[ Log in](https://dev.to/enter?signup%5Fsubforem=1) [ Create account](https://dev.to/enter?signup%5Fsubforem=1&state=new-user) 

     

```json
{"@context":"http://schema.org","@type":"Article","mainEntityOfPage":{"@type":"WebPage","@id":"https://dev.to/slimd/i-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8"},"url":"https://dev.to/slimd/i-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8","image":["https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm9ibaanwne2njj1npplp.png","https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm9ibaanwne2njj1npplp.png","https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm9ibaanwne2njj1npplp.png"],"publisher":{"@context":"http://schema.org","@type":"Organization","name":"DEV Community","logo":{"@context":"http://schema.org","@type":"ImageObject","url":"https://media2.dev.to/dynamic/image/width=192,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8j7kvp660rqzt99zui8e.png","width":"192","height":"192"}},"headline":"Your AI coding agent is gaslighting you — and your test suite is the victim","author":{"@context":"http://schema.org","@type":"Person","url":"https://dev.to/slimd","name":"Slim"},"datePublished":"2026-02-13T11:24:31Z","dateModified":"2026-02-13T11:38:49Z"}
```
