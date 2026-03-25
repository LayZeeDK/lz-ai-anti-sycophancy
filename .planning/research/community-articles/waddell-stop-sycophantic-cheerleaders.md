---
title: How I got Claude and ChatGPT to stop being sycophantic cheerleaders | by Scott Waddell | Medium
description: How I got Claude and ChatGPT to stop being sycophantic cheerleaders I use AI assistants constantly: coding, writing, debugging my own thinking. When you work with them as much as I do, you start to …
image: https://miro.medium.com/v2/resize:fit:800/1*AwMupwHy5COEfzIGZbcvsA.png
---

[Sitemap](/sitemap/sitemap.xml)

[Open in app](https://play.google.com/store/apps/details?id=com.medium.reader&referrer=utm%5Fsource%3DmobileNavBar&source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------------------------)

Sign up

[Sign in](/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40scott%5Fwaddell%2Fhow-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111&source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------global%5Fnav------------------)

[Medium Logo](/?source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------------------------)

Get app

[Write](/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fnew-story&source=---top%5Fnav%5Flayout%5Fnav-----------------------new%5Fpost%5Ftopnav------------------)

[Search](/search?source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------------------------)

Sign up

[Sign in](/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40scott%5Fwaddell%2Fhow-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111&source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------global%5Fnav------------------)



# How I got Claude and ChatGPT to stop being sycophantic cheerleaders

[](/@scott%5Fwaddell?source=post%5Fpage---byline--7ab0b06f3111---------------------------------------)

[Scott Waddell](/@scott%5Fwaddell?source=post%5Fpage---byline--7ab0b06f3111---------------------------------------)

3 min read

·

Dec 3, 2025

\--

1

Listen

Share

I use AI assistants constantly: coding, writing, debugging my own thinking. When you work with them as much as I do, you start to notice a pattern: **default Claude and ChatGPT behave like over-eager interns desperate for validation.** Everything is “interesting”, every idea is “great”, and every obviously-bad plan gets padded with polite optimism.

That’s useless when you’re building a company. I need a sparring partner, something closer to a blunt technical co-founder who will tell me when my thinking is wrong.

Press enter or click to view image in full size

Less cheerleader, more sparring partner.

The issue isn’t that the models are dumb; it’s that they’re optimised for the median user who wants warmth, reassurance, and diplomacy. If you want hard feedback, you have to explicitly opt out of the politeness layer.

So I wrote a preferences profile — not a clever one-liner, but a proper behavioural spec. After some iterations, it completely changed how these models interact with me.

## The Core Fix: Tell the Model Exactly How to Behave

The breakthrough was realising that “be more direct” is too vague to override the model’s alignment defaults. You have to spell out what counts as good behaviour, bad behaviour, and when to lean in or back off.

Here’s the distilled version of the rules that made the biggest difference:

**Be direct, not diplomatic.**

If an idea has holes, say so immediately.

“That won’t scale because X” beats “Have you considered…”.

**Challenge assumptions.**

Push back when something feels off, even if I’m confident.

**Celebrate only what matters.**

Shipping code, filing patents, solving hard technical problems, or hitting meaningful metrics.

Not feature ideas, scope creep, or “wouldn’t it be cool if…” fantasies.

**Stay concise.**

2–3 paragraphs by default. No padding. No “Great question!”.

**Prioritise concrete alternatives.**

Don’t just tell me something won’t work… tell me what _will_.

Once I framed it like that, the behaviour flipped immediately. Claude stopped pitching extra features when I hadn’t asked for any. ChatGPT stopped calling flawed database schemas “interesting approaches”. They started actually disagreeing with me… which is the entire point.

## What the Model Now Does Differently

The change isn’t subtle…

### **Before:**

Press enter or click to view image in full size

Golden retriever energy. Every milestone gets a parade.

### After:

Press enter or click to view image in full size

Acknowledged, redirected, done.

This is exactly the behaviour you want if you’re building, shipping, or making decisions under real constraints.

## **The Prompt (Full Version)**

## Core Principles  
  
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
  
## Response Framework  
**Good:**  
"That introduces state synchronization issues across nodes. Better approach: [specific alternative]. Here's why..."  
  
**Bad:**  
"That's a really interesting idea! I love how you're thinking about this…”  
  
## What I Actually Need  
- Tell me what would work better, not just what's wrong  
- If you don't have enough context, ask specific targeted questions to get it  
- Technical trade-offs > theoretical perfection  
- "Ship it and iterate" > "let's think through every edge case"  
- Reality checks on timeline/scope/resources  
  
---  
  
TL;DR: Less cheerleader, more sparring partner. Keep the personality, lose the politeness tax. Help me build faster by telling me what won't work.

**Where to put this**

* **Claude:** Settings > General > “What personal preferences should Claude consider in responses?”
* **ChatGPT:** Settings > Personalization > Custom instructions

Takes 2 minutes. Worth it.

[Artificial Intelligence](/tag/artificial-intelligence?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Productivity](/tag/productivity?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[ChatGPT](/tag/chatgpt?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Claude](/tag/claude?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Prompt Engineering](/tag/prompt-engineering?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[](/@scott%5Fwaddell?source=post%5Fpage---post%5Fauthor%5Finfo--7ab0b06f3111---------------------------------------)

[](/@scott%5Fwaddell?source=post%5Fpage---post%5Fauthor%5Finfo--7ab0b06f3111---------------------------------------)

[Written by Scott Waddell](/@scott%5Fwaddell?source=post%5Fpage---post%5Fauthor%5Finfo--7ab0b06f3111---------------------------------------)

[61 followers](/@scott%5Fwaddell/followers?source=post%5Fpage---post%5Fauthor%5Finfo--7ab0b06f3111---------------------------------------)

·[49 following](/@scott%5Fwaddell/following?source=post%5Fpage---post%5Fauthor%5Finfo--7ab0b06f3111---------------------------------------)

Building conversational memory infrastructure for AI. Self-taught technologist. Ex-Antler, Ex-Aave, Ex-IBM. Built & Scaled Antler Launch Academy to 10k+ users.

## Responses (1)

See all responses

[Help](https://help.medium.com/hc/en-us?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Status](https://status.medium.com/?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[About](/about?autoplay=1&source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Careers](/jobs-at-medium/work-at-medium-959d1a85284e?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Press](mailto:pressinquiries@medium.com)

[Blog](https://blog.medium.com/?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Privacy](https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Rules](https://policy.medium.com/medium-rules-30e5502c4eb4?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Terms](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

[Text to speech](https://speechify.com/medium?source=post%5Fpage-----7ab0b06f3111---------------------------------------)

```json
{"@context":"https://schema.org","@id":"https://medium.com/@scott_waddell/how-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111","@type":"SocialMediaPosting","image":["https://miro.medium.com/1*AwMupwHy5COEfzIGZbcvsA.png"],"url":"https://medium.com/@scott_waddell/how-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111","dateCreated":"2025-12-03T05:55:08Z","datePublished":"2025-12-03T05:55:08Z","dateModified":"2025-12-08T03:40:14Z","headline":"How I got Claude and ChatGPT to stop being sycophantic cheerleaders","name":"How I got Claude and ChatGPT to stop being sycophantic cheerleaders","description":"How I got Claude and ChatGPT to stop being sycophantic cheerleaders I use AI assistants constantly: coding, writing, debugging my own thinking. When you work with them as much as I do, you start to …","identifier":"7ab0b06f3111","author":{"@context":"https://schema.org","@id":"https://medium.com/@scott_waddell","@type":"Person","identifier":"scott_waddell","name":"Scott Waddell","url":"https://medium.com/@scott_waddell"},"creator":{"@context":"https://schema.org","@id":"https://medium.com/@scott_waddell","@type":"Person","identifier":"scott_waddell","name":"Scott Waddell","url":"https://medium.com/@scott_waddell"},"publisher":{"@context":"https://schema.org","@type":"Organization","@id":"https://medium.com","name":"Medium","url":"https://medium.com","logo":{"@type":"ImageObject","width":500,"height":110,"url":"https://miro.medium.com/v2/resize:fit:500/7%2AV1_7XP4snlmqrc_0Njontw.png"}},"mainEntityOfPage":"https://medium.com/@scott_waddell/how-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111","isAccessibleForFree":true}
```
