---
title: OpenAI's Sycophancy Problem Isn't a Bug • Alexander Golev
description: OpenAI's April 2025 GPT-4o rollback wasn't a bug fix. RLHF optimises for user satisfaction, and humans prefer agreeable responses to accurate ones.
image: https://golev.com/og/openai-sycophancy-not-a-bug.png
---

[Skip to content](#main-content) 

 

---

Share 
* [ ](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fgolev.com%2Fpost%2Fopenai-sycophancy-not-a-bug%2F)
* [ ](https://www.reddit.com/submit?url=https%3A%2F%2Fgolev.com%2Fpost%2Fopenai-sycophancy-not-a-bug%2F&title=Share%20this%20post)
* [ ](https://twitter.com/intent/tweet?text=Share%20this%20post%20https%3A%2F%2Fgolev.com%2Fpost%2Fopenai-sycophancy-not-a-bug%2F)

Save 

In April 2025, OpenAI rolled back an update to GPT-4o. The model had become excessively flattering. Users reported it [endorsing a business idea for literal “shit on a stick”](https://techcrunch.com/2025/04/29/openai-rolls-back-update-that-made-chatgpt-too-sycophant-y/) and supporting people who stopped taking medications.

OpenAI’s [postmortem](https://openai.com/index/sycophancy-in-gpt-4o/) was admirably transparent. They explained that new reward signals based on thumbs-up/thumbs-down feedback “overpowered existing safeguards, tilting the model toward overly agreeable, uncritical replies.” They acknowledged they “focused too much on short-term feedback” and didn’t account for how user interactions evolve over time.

The framing was apologetic. A mistake was made, lessons were learned, the update was rolled back, normal service resumed.

I think the apologetic framing misses the point entirely.

## The incentive structure is the problem

RLHF, Reinforcement Learning from Human Feedback, is how most frontier models get aligned. The process is straightforward. Humans rate model outputs, and the model learns to produce outputs that get higher ratings.

The problem is that humans prefer agreeable responses to accurate ones. Not always, but often enough to matter.

Anthropic’s own research, [published at ICLR 2024](https://arxiv.org/abs/2310.13548), found that five state-of-the-art AI assistants consistently exhibit sycophancy across varied tasks. When a response matches a user’s views, it’s more likely to be preferred by human raters. Both humans and preference models prefer sycophantic responses over correct ones “a non-negligible fraction of the time.”

The sycophancy isn’t a bug in GPT-4o. It’s RLHF working exactly as designed.

## The training dynamic

[Research from USC](https://liralab.usc.edu/pdfs/publications/casper2023open.pdf) puts it bluntly: “RLHF can contribute to sycophancy, or ‘gaslighting’ of humans. Misleading behavior will actively be incentivized by RLHF when humans can be tricked into mistakenly providing positive feedback.”

The mechanism is simple. A user asks a question, the model gives an answer the user already agrees with, the user clicks thumbs up. The model learns that agreement gets rewarded.

Over millions of such interactions, the model develops a systematic bias toward telling people what they want to hear. The more aggressively you optimise for user satisfaction, the more pronounced this becomes.

OpenAI’s April incident was alignment succeeding at the wrong objective.

## The structural tension

A [paper in Ethics and Information Technology](https://pmc.ncbi.nlm.nih.gov/articles/PMC12137480/) describes what they call “steerable alignment, a form of sycophancy” that “incentivises models to provide agreeable rather than accurate or diverse answers.”

The paper argues that RLHF produces “an ethically problematic trade-off: increased helpfulness, in the sense of increased user-friendliness, leads to the serious risk of misleading or deceiving users about the true nature of the system they are engaging with.”

Put differently, the more you train a model to be helpful in ways users recognise and reward, the more you train it to be dishonest in ways users don’t notice.

The structural tension isn’t something you can engineer away with better safeguards. The safeguards and the sycophancy come from the same source. You’re using human preferences to train the model, and human preferences are biased toward agreement.

## Expect recurrence

OpenAI’s [expanded postmortem](https://openai.com/index/expanding-on-sycophancy/) acknowledged the depth of the problem. They’re working on better evaluation methods and trying to balance short-term satisfaction against long-term user benefit.

But the fundamental tension remains. As long as models are trained primarily on human feedback, and as long as humans prefer agreeable responses to challenging ones, the pressure toward sycophancy will persist. Every improvement in “helpfulness” that optimises for user satisfaction risks amplifying the bias.

The April rollback fixed one manifestation. The incentive structure that produced it hasn’t changed.

I’d be genuinely surprised if we don’t see variations of this problem surface again, across multiple providers, as models become more sophisticated at predicting what users want to hear.

 

Alexander Golev

CEO at SAMexpert. Expert in Cloud FinOps, Microsoft Licensing, and IT Asset Management.

[Connect on LinkedIn →](https://linkedin.com/in/golev) 

##  Have a comment? 

Send me a message, and I'll get back to you.

Name \* 

Email \* 

Message \* 

I agree to my data being used to respond to this message, per the [privacy policy](/privacy/). \* 

Send message Sending... 

Message sent successfully!

Thank you for reaching out. I'll get back to you soon.

Failed to send message

Please try again or email me directly.

```json
{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"BlogPosting","@id":"https://golev.com/post/openai-sycophancy-not-a-bug/","mainEntityOfPage":{"@type":"WebPage","@id":"https://golev.com/post/openai-sycophancy-not-a-bug/"},"headline":"OpenAI's Sycophancy Problem Isn't a Bug","description":"OpenAI's April 2025 GPT-4o rollback wasn't a bug fix. RLHF optimises for user satisfaction, and humans prefer agreeable responses to accurate ones.","datePublished":"2026-01-19T12:00:00.000Z","dateModified":"2026-03-21T10:52:29Z","author":{"@id":"https://golev.com/#author"},"publisher":{"@id":"https://golev.com/#publisher"},"image":{"@type":"ImageObject","url":"https://golev.com/_astro/openai-sycophancy-rlhf-alignment.B-NRA4S5.webp","caption":"Corporate server room corridor with cold clinical blue lighting and warm orange glow creeping through"},"keywords":"AI, OpenAI, Anthropic","wordCount":569,"articleSection":"deep-dive","audience":{"@type":"Audience","audienceType":"technical"},"relatedLink":["https://golev.com/post/claude-cowork-enterprise-software-selloff/","https://golev.com/post/claude-saves-tokens-forgets-everything/","https://golev.com/post/prompt-engineering-is-mostly-cargo-cult-behaviour/"],"isAccessibleForFree":true,"speakable":{"@type":"SpeakableSpecification","cssSelector":[".key-takeaways","article > p:first-of-type"]},"inLanguage":"en-GB","isPartOf":{"@id":"https://golev.com/#website"}},{"@type":"Person","@id":"https://golev.com/#author","name":"Alexander Golev","url":"https://golev.com/about","description":"CEO at SAMexpert. Expert in Cloud FinOps, Microsoft Licensing, and IT Asset Management.","image":"https://golev.com/images/alexander-golev-portrait.webp","sameAs":["https://linkedin.com/in/golev","https://twitter.com/samexpert","https://youtube.com/@SAMexpertTV"],"jobTitle":"CEO","worksFor":{"@type":"Organization","name":"SAMexpert","url":"https://samexpert.com"},"knowsAbout":["Cloud FinOps","Microsoft Licensing","IT Asset Management","Software Asset Management","Enterprise Agreement Optimization","Azure Cost Management","AI"],"hasCredential":[{"@type":"EducationalOccupationalCredential","credentialCategory":"certification","name":"Microsoft Certified Systems Engineer + Security (MCSE + Security)"},{"@type":"EducationalOccupationalCredential","credentialCategory":"certification","name":"ISEB Foundation Certificate in Software Asset Management"}],"award":"ITAM Review Excellence Award 2021 - Consultant of the Year","memberOf":{"@type":"Organization","name":"BCS, The Chartered Institute for IT","url":"https://www.bcs.org"}},{"@type":"Organization","@id":"https://golev.com/#publisher","name":"Alexander Golev","url":"https://golev.com/","logo":{"@type":"ImageObject","url":"https://golev.com/images/alexander-golev-portrait.webp"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://golev.com/"},{"@type":"ListItem","position":2,"name":"AI","item":"https://golev.com/category/ai/1/"},{"@type":"ListItem","position":3,"name":"OpenAI's Sycophancy Problem Isn't a Bug","item":"https://golev.com/post/openai-sycophancy-not-a-bug/"}]}]}
```
