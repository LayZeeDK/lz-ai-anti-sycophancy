---
title: PRACTICAL TIPS: How to Get Your Sycophantic LLM to Roast You
description: Or: How Giving Your LLM a Persona Will Improve Your Outputs
image: https://substackcdn.com/image/fetch/$s_!5HPp!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe1f795cc-4652-49c6-a685-f64ef6f2df47_1024x1024.png
---

[](/)

# [CA Education Learning Lab](/)

SubscribeSign in

[My Robot Teacher Podcast](https://calearninglab.substack.com/s/my-robot-teacher-podcast/?utm%5Fsource=substack&utm%5Fmedium=menu)

# PRACTICAL TIPS: How to Get Your Sycophantic LLM to Roast You

### Or: How Giving Your LLM a Persona Will Improve Your Outputs

[](https://substack.com/@sarahsenk)[](https://substack.com/@taiyoinoue)

[Sarah Senk](https://substack.com/@sarahsenk) and [Taiyo Inoue](https://substack.com/@taiyoinoue)

Jul 16, 2025

7

1

1

Share

If you’ve spent time with any LLMs lately, you’ve probably noticed they often default to [politeness](https://venturebeat.com/ai/after-gpt-4o-backlash-researchers-benchmark-models-on-moral-endorsement-find-sycophancy-persists-across-the-board/), validation, and even outright [sycophancy](https://www.linkedin.com/posts/emollick%5Fi-am-starting-to-think-sycophancy-is-going-activity-7350531281048195072-17Ko/) more than constructive criticism. This isn’t accidental. Tech companies want these tools to feel pleasant to use, and constant validation hits the same dopamine pathways that light up when you score social media “likes.” Their politeness also stems from the way these models are refined through **[Reinforcement Learning from Human Feedback](https://www.ibm.com/think/topics/rlhf)** (RLHF), where human reviewers rate AI-generated responses, selecting preferred outputs with a “thumbs up” or “thumbs down.” During this training, users likely favored responses that were broadly agreeable, polite, and confirmed what they already believed. (As is often the case, the problems we encounter with LLMs are really _human_ problems — in this case, cognitive bias. We favor information that confirms our existing views and ways of thinking, so reviewers likely pounded that “thumbs up” whenever they heard “You’re absolutely right!”, further reinforcing the LLM’s tendency to flatter and prioritize agreeable responses.)

[](https://substackcdn.com/image/fetch/$s%5F!5HPp!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe1f795cc-4652-49c6-a685-f64ef6f2df47%5F1024x1024.png)

The good news is that **with a basic understanding of how they work and a holster of smart prompting strategies, you can easily generate responses that don’t sound like your typical agreeable “AI slop.”**

Let’s start with the basic understanding: Every instruction, persona, document snippet, or framing you “feed” the model during your conversations sits in what’s known as a “context window.” (Think of it metaphorically as your LLM’s short-term memory; it’s basically the total amount of text that the AI will reference in a conversation.) To override the LLM’s default sycophancy, you can try packing that context window full of instructions that either directly or indirectly encourage a less obsequious reply.

Sometimes simply asking for “constructive criticism” gets the job done, at least in a generic kind of way. But if you want something more unsparing, you’ll need to give the model more to work with: a motive, a rhetorical posture or perspective to inhabit, a situation to respond to, and a tone it’s authorized to use. When you practice “context engineering” you’re essentially creating a list of interpretive rules for your LLM and managing expectations for the text it generates. **What you’re often doing is managing a narrative.** For example, when you give it a persona, you’re changing the model’s “orientation” to the task at hand (since it now “knows” what kind of speaker it is or what tone to adopt).

Compare a basic prompt to its “context-engineered” counterpart, and the difference is immediately clear. A request like _“Can you critique this podcast intro script?_” will usually yield something that feels all smiles and vacancy — some minor suggestions about flow or word choice, maybe an obvious note about clarity. But reframe that same request with something like “_You’re the [Michiko](https://www.nytimes.com/by/michiko-kakutani)_[ ](https://www.nytimes.com/by/michiko-kakutani)_[Kakutani](https://www.nytimes.com/by/michiko-kakutani)_ _of podcast critics and nothing pisses you off more than academics embracing Silicon Valley jargon. Spare no cliché”_ and you prime the model to take on a culturally literate, [highly critical](https://www.thecut.com/2017/07/michiko-kakutanis-all-time-best-burns.html) stance. Note how the phrase “nothing pisses you off more…” gives the model a clear red flag to hunt for. Goodbye “helpful assistant,” hello “legendary tastemaker who is definitely _not_ amused.”

The same principle applies when you're looking for feedback with real bite. A prompt like _“Give me constructive criticism of this Substack draft”_ might get you a few safe, well-meaning suggestions, but rarely anything that burns. But try instead something like, “_Play the role of an embittered but rigorous critic with a Comp Lit PhD who’s exhausted by techno-optimistic fantasies of how to make higher education less alienating. You’re smarter than me and you know it, and you left academia to start a career as a standup comedian who skewers academics in your routine. Please roast the content of this Substack draft_.” The first prompt will almost definitely yield safe, inoffensive, and _boring_ feedback. The second is more likely to actually land a punch - at least it did when _we_ used a version of it recently \[see image\].

[](https://substackcdn.com/image/fetch/$s%5F!LZK9!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F766e25db-4679-4854-a6ae-23c4a788de62%5F1018x348.png)

> _Tell ChatGPT it’s an embittered Comp Lit PhD who now works as a standup comedian whose act skewers academics. Then ask it to roast your [Substack](https://calearninglab.substack.com/p/thinking-for-yourself-in-the-age) post._

The feedback this subsequently generated was extensive and helpful: among other things, ChatGPT noted that in our initial drafts we seemed shocked at the results of the “[Your Brain on ChatGPT](https://arxiv.org/pdf/2506.08872v1)” study (when we actually weren't), that we were targeting our critique unfairly at the researchers themselves (when our intention was to target the media response), and shamed us for being way too obvious in an extended critique of the _Daily Mail_ article we ended up cutting.

Now, let’s be clear: just assigning your LLM a persona won’t magically yield brilliant revision notes. You can’t ask for a roast and expect it to analyze your essay structure or tighten your argument (unless you explicitly ask it to do that). The persona sets the _tone_ of whatever happens next in the context window, but you still have to do the work of subsequent prompting for specifics. That means following up with targeted questions like “Where are we losing the thread of this argument?” or “Can you identify all the leaps in logic?” When you do, you’ll get targeted feedback that’s not only relevant but delivered in the “voice” you’ve requested. The persona primes the model to ditch the niceties; the targeted questions are what actually extract the insights.But those insights get much better if you first shape the model's assumptions about what kind of response is expected. By elaborating on the context like we do with the hypothetical critic/comic, we essentially create a character with a motivation to oppose our point of view, a stance rooted in a specific academic tradition, an emotional arc, and a license to be a little mean without violating ethical norms.

[](https://substackcdn.com/image/fetch/$s%5F!Y01q!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15dd53ea-99c4-4040-ad69-c4c63425ba5c%5F1014x664.png)

> _Hot Tip: Make references to well known cultural touchstones as shorthand for the energy you’re going for._

And remember: LLMs are pattern recognizers, not mind-readers. When you give a prompt like “write a conclusion,” the model searches its training data for all the plausible ways people conclude things and picks something statistically average. That’s how you end up with vague, polite wrap-ups that sound like a high school essay or a corporate email. But if you frame the task as a scene with characters, stakes, mood, and context cues, you can prime the model’s reasoning, or even nudge it past default safeguards like we did in the first interaction we had with ChatGPT 4’s voice mode in September 2023, when we tasked the LLM with the ethically dubious task of inferring our personal flaws and cognitive biases. At first it politely declined, citing a lack of context and the parameters against conducting psychological evaluations. We then reframed our request...

**🎥 Want to see how far a little context engineering can go? Watch the clip.**

> _September 2023\. Sarah and Taiyo’s First ChatGPT Roast._

---

**New to this? Here are some basic general strategies:**

* Give “prompt engineering” instructions that constrain the output (eg. “Use at least two rhetorical questions. / End on a cliffhanger.”)
* Lay out clear stakes and style (e.g., “I’m delivering a persuasive pitch tomorrow. Rephrase this attached draft for an audience with a lot of institutional power and a short attention span.”)
* Ask explicitly for “reframing” rather than “editing.” Tell the LLM to change its rhetorical posture and intent, not just surface-level phrasing and see what happens.
* Try “narrative priming” and create a scenario that elicits a certain tone (e.g., “You’re captaining a spaceship losing power and you haven’t yet fully processed the fact that you’re going to succumb in the icy abyss; describe your calm-under-fire pep talk you deliver to your crew.”)  
---

**BONUS: Sarah’s Favorite LLM Persona-Assignments (and When to Use Them)**

* “A mix of Don Draper and WWII war room Churchill”: for when you need to deploy some patriarchal gravitas
* “An embittered Frankfurt-school disciple who now works as a stand-up comic”: if you want to get slammed for all the ways you’re oblivious to how whatever you’re working on is embedded in systems of ideology and power.
* “God’s own McKinsey consultant who’s haunted by his decision to pursue a lucrative career rather than his true passion for being an educator”: if you want sleek strategic documents that also evince concern for the purpose of education beyond ROI
* “Reviewer Number 2”: if you want to simulate the worst-case feedback scenario in advance of actually seeing reviewer comments \[_a clarifying note for non-academics: “reviewer 2” is a widespread meme in academic culture; it’s basically shorthand for the most hostile, nitpicky, ego-bruising peer reviewer in the academic journal submission process. Because LLMs are trained on such a massive amount of public internet content, they’ve absorbed cultural shorthand like this, even though it’s pretty niche. Try it with your own industry jargon!_\]
* “Jaded Gen Z second-semester senior with a highly calibrated bullshit detector and zero motivation to fulfill this General Education requirement”: if you want to revise course content, particularly the “rationale” section of tough assignments

---

We’ll have more strategies on how to avoid AI slop and what “persona generation” can do for your writing and teaching/learning practices. Comment below with your thoughts and subscribe to get notified of our practical tips!

Subscribe

[Leave a comment](https://calearninglab.substack.com/p/practical-tips-how-to-get-your-sycophantic/comments)

[Share](https://calearninglab.substack.com/p/practical-tips-how-to-get-your-sycophantic?utm%5Fsource=substack&utm%5Fmedium=email&utm%5Fcontent=share&action=share)

7

1

1

Share

| [](https://substack.com/@sarahsenk?utm%5Fsource=byline) | A guest post by[Sarah Senk](https://substack.com/@sarahsenk?utm%5Fcampaign=guest%5Fpost%5Fbio&utm%5Fmedium=web)[Subscribe to Sarah](https://sarahsenk.substack.com/subscribe?) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

| [](https://substack.com/@taiyoinoue?utm%5Fsource=byline) | A guest post by[Taiyo Inoue](https://substack.com/@taiyoinoue?utm%5Fcampaign=guest%5Fpost%5Fbio&utm%5Fmedium=web)[Subscribe to Taiyo](https://taiyoinoue.substack.com/subscribe?) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

#### 1 Comment



[](https://substack.com/profile/363578157-digital-learning-lab?utm%5Fsource=comment)

[Digital Learning Lab](https://substack.com/profile/363578157-digital-learning-lab?utm%5Fsource=substack-feed-item) 

[Jul 24, 2025](https://calearninglab.substack.com/p/practical-tips-how-to-get-your-sycophantic/comment/138613405 "Jul 24, 2025, 10:13 PM")

Loving your new substack Sarah & Taiyo :) Great, useful tips and a wonderful tone. Keep it up!

Reply

Share

TopLatestDiscussions

No posts

### Ready for more?

Subscribe

© 2026 California Education Learning Lab · [Privacy](https://substack.com/privacy) ∙ [Terms](https://substack.com/tos) ∙ [Collection notice](https://substack.com/ccpa#personal-data-collected)

[ Start your Substack](https://substack.com/signup?utm%5Fsource=substack&utm%5Fmedium=web&utm%5Fcontent=footer)[Get the app](https://substack.com/app/app-store-redirect?utm%5Fcampaign=app-marketing&utm%5Fcontent=web-footer-button)

[Substack](https://substack.com) is the home for great culture

```json
{"@context":"https://schema.org","@type":"NewsArticle","url":"https://calearninglab.substack.com/p/practical-tips-how-to-get-your-sycophantic","mainEntityOfPage":"https://calearninglab.substack.com/p/practical-tips-how-to-get-your-sycophantic","headline":"PRACTICAL TIPS: How to Get Your Sycophantic LLM to Roast You","description":"Or: How Giving Your LLM a Persona Will Improve Your Outputs","image":[{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!5HPp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe1f795cc-4652-49c6-a685-f64ef6f2df47_1024x1024.png"}],"datePublished":"2025-07-16T22:54:08+00:00","dateModified":"2025-07-16T22:54:08+00:00","isAccessibleForFree":true,"author":[{"@type":"Person","name":"Sarah Senk","url":"https://substack.com/@sarahsenk","description":null,"identifier":"user:7175201","image":{"@type":"ImageObject","contentUrl":"https://substackcdn.com/image/fetch/$s_!rkKr!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6a8b678a-bb6c-46fc-9916-05e745a07292_144x144.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!rkKr!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6a8b678a-bb6c-46fc-9916-05e745a07292_144x144.png"}},{"@type":"Person","name":"Taiyo Inoue","url":"https://substack.com/@taiyoinoue","description":null,"identifier":"user:112101649","image":{"@type":"ImageObject","contentUrl":"https://substackcdn.com/image/fetch/$s_!fFMI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb99298ed-8ff4-4d41-8a74-d379902c038b_777x777.jpeg","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!fFMI!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb99298ed-8ff4-4d41-8a74-d379902c038b_777x777.jpeg"}}],"publisher":{"@type":"Organization","name":"CA Education Learning Lab","url":"https://calearninglab.substack.com","description":"Closing equity gaps in STEM and other disciplines by supporting innovation in California public higher education.","interactionStatistic":{"@type":"InteractionCounter","name":"Subscribers","interactionType":"https://schema.org/SubscribeAction","userInteractionCount":100},"identifier":"pub:3705903","logo":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!Yoed!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7fc38c42-2486-44b9-ae6d-82a4d5ece376_256x256.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!Yoed!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7fc38c42-2486-44b9-ae6d-82a4d5ece376_256x256.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!Yoed!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7fc38c42-2486-44b9-ae6d-82a4d5ece376_256x256.png"},"image":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!Yoed!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7fc38c42-2486-44b9-ae6d-82a4d5ece376_256x256.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!Yoed!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7fc38c42-2486-44b9-ae6d-82a4d5ece376_256x256.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!Yoed!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7fc38c42-2486-44b9-ae6d-82a4d5ece376_256x256.png"}},"interactionStatistic":[{"@type":"InteractionCounter","interactionType":"https://schema.org/LikeAction","userInteractionCount":7},{"@type":"InteractionCounter","interactionType":"https://schema.org/ShareAction","userInteractionCount":1},{"@type":"InteractionCounter","interactionType":"https://schema.org/CommentAction","userInteractionCount":1}]}
```
