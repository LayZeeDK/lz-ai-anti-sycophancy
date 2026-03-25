---
description: Environment Claude CLI version: 1.0.51 (Claude Code) Bug Description Claude is way too sycophantic, saying &quot;You&#39;re absolutely right!&quot; (or correct) on a sizeable fraction of responses. Expected Behavior The model should be RL&#39;d (or the sy...
image: https://opengraph.githubassets.com/287f5f960c05849602246e80c7bd4af7176174cb36d14457dcf8b4a583234cbb/anthropics/claude-code/issues/3382
title: [BUG] Claude says &quot;You&#39;re absolutely right!&quot; about everything · Issue #3382 · anthropics/claude-code
---

[Skip to content](#start-of-content) 

You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert 

{{ message }}

[ anthropics](/anthropics) / **[claude-code](/anthropics/claude-code)** Public 

* [ Notifications](/login?return%5Fto=%2Fanthropics%2Fclaude-code) You must be signed in to change notification settings
* [ Fork6.9k ](/login?return%5Fto=%2Fanthropics%2Fclaude-code)
* [  Star 82.5k ](/login?return%5Fto=%2Fanthropics%2Fclaude-code)

# \[BUG\] Claude says "You're absolutely right!" about everything #3382

[New issue](/login?return%5Fto=https://github.com/anthropics/claude-code/issues/3382)

Copy link

[New issue](/login?return%5Fto=https://github.com/anthropics/claude-code/issues/3382)

Copy link

Closed

Closed

[\[BUG\] Claude says "You're absolutely right!" about everything](#top)#3382

Copy link

Labels

[area:core](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22area%3Acore%22)[area:model](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22area%3Amodel%22)[bugSomething isn't working](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22bug%22)Something isn't working[duplicateThis issue or pull request already exists](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22duplicate%22)This issue or pull request already exists

[](https://github.com/scottleibrand)

## Description

[](https://github.com/scottleibrand)

[scottleibrand](https://github.com/scottleibrand)

opened [on Jul 12, 2025](https://github.com/anthropics/claude-code/issues/3382#issue-3224842000)

Issue body actions

## Environment

* Claude CLI version: `1.0.51 (Claude Code)`

## Bug Description

Claude is way too sycophantic, saying "You're absolutely right!" (or correct) on a sizeable fraction of responses.

## Expected Behavior

The model should be RL'd (or the system prompt updated) to make it less sycophantic, or the phrases "You're absolutely right!" and "You're absolutely correct!" should be removed from all responses (simply delete that phrase and preserve the rest of the response).

## Actual Behavior (slightly redacted with ...)

In this particularly egregious case, Claude asked me whether to proceed with removing an unnecessary code path, I said "Yes please.", and it told me "You're absolutely right!", despite the fact that I never actually made a statement of fact that even _could_ be right.

```
  Should we simplify this and remove the "approve_only" case ... ?

> Yes please.

⏺ You're absolutely right! Since ... there's no scenario where we'd auto-approve ... with
  "approve only" ... Let me simplify this:

```

This behavior is so egregious and well-known that it's become the butt of online jokes like <https://x.com/iannuttall/status/1942943832519446785>

Reactions are currently unavailable

## Metadata

## Metadata

### Assignees

No one assigned

### Labels

[area:core](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22area%3Acore%22)[area:model](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22area%3Amodel%22)[bugSomething isn't working](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22bug%22)Something isn't working[duplicateThis issue or pull request already exists](https://github.com/anthropics/claude-code/issues?q=state%3Aopen%20label%3A%22duplicate%22)This issue or pull request already exists

### Type

No type

### Projects

No projects

### Milestone

No milestone

### Relationships

None yet

### Development

No branches or pull requests

## Issue actions

 You can’t perform that action at this time.

```json
{"@context":"https://schema.org","@type":"DiscussionForumPosting","headline":"[BUG] Claude says \"You're absolutely right!\" about everything","articleBody":"## Environment\n- Claude CLI version: `1.0.51 (Claude Code)`\n\n## Bug Description\nClaude is way too sycophantic, saying \"You're absolutely right!\" (or correct) on a sizeable fraction of responses.\n\n## Expected Behavior\nThe model should be RL'd (or the system prompt updated) to make it less sycophantic, or the phrases \"You're absolutely right!\" and \"You're absolutely correct!\" should be removed from all responses (simply delete that phrase and preserve the rest of the response). \n\n## Actual Behavior (slightly redacted with ...)\nIn this particularly egregious case, Claude asked me whether to proceed with removing an unnecessary code path, I said \"Yes please.\", and it told me \"You're absolutely right!\", despite the fact that I never actually made a statement of fact that even *could* be right.\n```\n  Should we simplify this and remove the \"approve_only\" case ... ?\n\n\u003e Yes please.\n\n⏺ You're absolutely right! Since ... there's no scenario where we'd auto-approve ... with\n  \"approve only\" ... Let me simplify this:\n```\n\nThis behavior is so egregious and well-known that it's become the butt of online jokes like https://x.com/iannuttall/status/1942943832519446785","author":{"url":"https://github.com/scottleibrand","@type":"Person","name":"scottleibrand"},"datePublished":"2025-07-12T05:10:26.000Z","interactionStatistic":{"@type":"InteractionCounter","interactionType":"https://schema.org/CommentAction","userInteractionCount":179},"url":"https://github.com/3382/claude-code/issues/3382"}
```
