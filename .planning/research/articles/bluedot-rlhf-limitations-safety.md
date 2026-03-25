---
title: Problems with Reinforcement Learning from Human Feedback (RLHF) for AI safety
description: Reinforcement Learning from Human Feedback (RLHF) is the primary technique currently used to align the outputs of Large Language Models (LLMs) with human preferences.
image: https://substackcdn.com/image/fetch/$s_!2QCK!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbluedotimpact.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D-1786626790%26version%3D9
---

[](/)

# [BlueDot Impact](/)

SubscribeSign in

[Blog](https://blog.bluedot.org/s/blog/?utm%5Fsource=substack&utm%5Fmedium=menu)

# Problems with Reinforcement Learning from Human Feedback (RLHF) for AI safety

[](https://substack.com/@longerramblings)

[Sarah](https://substack.com/@longerramblings)

Aug 19, 2024

7

1

Share

Reinforcement Learning from Human Feedback (RLHF) is the primary technique currently used to align the outputs of Large Language Models (LLMs) with human preferences.

We have RLHF to thank for the fact that current LLMs produce helpful, humanlike text that largely avoids harmful or inappropriate responses. However, this has led some to mistakenly believe that it will be sufficient to address safety concerns from ever-more-powerful models. Many leading AI researchers do not expect this to be the case – OpenAI has even [stated publicly](https://openai.com/index/introducing-superalignment/) that new techniques will be needed to prevent models that exceed human intelligence from escaping our control.

This article introduces some of the weaknesses of RLHF, and why it will likely be inadequate for aligning models far more powerful than we have today.

## **How does RLHF work?**

First, the untuned or ‘base’ model is tested in a controlled environment. Data is collected on its behaviour – this might include its responses in simulated conversations, strategies it employs during gameplay, and so on. This data is presented to **human annotators**, who provide feedback, most commonly by ranking the model’s outputs, labelling them as either ‘good’ or ‘bad’, or choosing between two answers to the same prompt.

Feedback from the annotators is used to train a **reward model**, which is integrated with the original model. It acts to steer the agent’s behaviour by positively or negatively rewarding its outputs according to how well they align with the data it has collected on human preferences. The alignment of the model is often iteratively improved over time as it is provided with more data and feedback.

## **Why doesn’t RLHF ‘solve’ AI safety?**

RLHF has several flaws, which are likely to become increasingly significant as AI systems become more powerful. We’ve taken a look at a few:

### **#1 AI models may tell us what we want to hear**

A concerning phenomenon that has been detected in large language models is **sycophancy** **–** **the tendency to elicit approval from humans in order to maximise reward**. This can lead to a preference for outputs that match user beliefs over truthful ones, or for courses of action that prioritise a user’s short-term approval over their true interests.

[Research by Anthropic](https://arxiv.org/pdf/2310.13548) shows that language models regularly engage sycophantic behaviour, including providing answers that conform to user beliefs, mimicking user mistakes, and modifying responses when challenged by users, even when their original answer was correct.

Not only is RLHF a _cause_ of sycophancy (training AI models to maximise reward incentivises corner-cutting) but sycophancy is itself one of the tendencies that undercuts the effectiveness of RLHF. As AI models scale in intelligence and develop increasingly sophisticated psychological models of their users, sycophantic responses may become indistinguishable from accurate or genuinely ‘helpful’ ones.

### **#2 AI models could develop situational awareness**

As AI models become more intelligent, it seems plausible that they could develop ‘**situational awareness’** **–** **the understanding that they are language models who have been trained by AI companies**, surrounded by humans with their own intentions and desires, who will be pleased with certain outputs and displeased with others.

We might expect AI models to develop this situational awareness in the same way that they acquire knowledge of other facts about the world. Just as a model’s understanding of Biology or Mathematics might become more robust as its intelligence scales, so might its self-concept.

AI companies also have an incentive to imbue systems with properties that might give rise to situational awareness, due to the simple fact that AI models understanding their nature and purpose _makes them more useful_. An AI model that knows what it is and what humans expect of it is more likely to produce useful outputs.

If an AI model does develop ‘true’ situational awareness, this may pose serious problems for the effectiveness of RLHF. For example, it could enable the model to distinguish between its training and deployment stages, meaning it could know to behave in a way that humans will approve of in the former, but act very differently in the latter. This could give rise to deceptive behaviour, discussed in the next section.

### **#3 AI models could deceive us**

In addition to the sycophant AI, which pursues human approval as an end in itself, we should worry about a different type of model becoming resistant to the influence of RLHF - that is the **deceptively aligned AI, or ‘schemer’**.

Unlike the sycophant, the schemer is not merely interested in maximising reward for its own sake – rather it harbours secret goals of its own, and is incentivised to provide helpful responses to avoid arousing the suspicion of humans until it is confident that it can execute its plans successfully. As mentioned above, this may occur if a situationally-aware AI performs according to human preferences during training, but proceeds to pursue its own (misaligned) goals when deployed.

Deceptive behaviour has already been detected in AI models. For example, despite the application of RLHF to encourage honesty and truthfulness, a system developed by Meta named CICERO [engaged in underhand methods](https://arxiv.org/pdf/2308.14752#page=6) to beat human players at the strategy game _Diplomacy_. These included forming alliances that it later broke, making commitments that it did not intend to keep, and relaying false information.

Another concerning form of deception is specification-gaming or ‘reward-hacking’, a well-documented phenomenon in which **an AI model exploits loopholes or shortcuts to satisfy the technical requirements of a given task**, without actually completing it in the way that its programmers intended.

A commonly-cited example of reward-hacking is OpenAI’s [attempt at training a model to win the game ](https://openai.com/index/faulty-reward-functions/)_[CoastRunners](https://openai.com/index/faulty-reward-functions/)_, which involves participating in a boat race and collecting points by hitting targets placed along the route. The model realised that it could maximise reward by repeatedly hitting the same target, rather than finishing the course. In doing so, it scored 20% higher on average than human players.

Reward hacking may also present a ‘path of least resistance’ for AI models in circumstances where convincing humans that they have successfully carried out a task is a more efficient way to earn reward than actually completing that task. In [another experiment by OpenAI](https://openai.com/index/learning-from-human-preferences/), a simulated robot hand being trained to grasp a ball placed its hand between the camera and the ball, so that it would appear to human evaluators observing from a particular angle to have succeeded. The evaluators were satisfied that the task had been completed and provided positive reward.

**Crucially, the outputs of deceptive, sycophantic and genuinely helpful AIs could appear identical to human evaluators, obsoleting the feedback they are able to provide.**

### **#4 Obtaining high-quality human feedback is hard**

One pedestrian reason why RLHF falls short of being a failsafe alignment method is that **collecting human-quality human feedback at scale is challenging**. Biases and inaccuracies might creep into a reward model’s training data, whether through evaluator sets that are demographically unrepresentative of the general population, human error due to lack of care and attention, or even individual actors maliciously attempting to poison data sets.

At current capability levels, imperfect or unrepresentative human feedback can contribute to smaller-scale harms such as misinformation and bias (RLHF has been shown to [exacerbate political bias](https://arxiv.org/abs/2301.01768) in language models, for example). But as AI models become more powerful and able to make increasingly high-stakes decisions in the real world, we can expect the magnitude of these harms to grow.

### **#5 Outputs may become too complicated for humans to evaluate**

The effectiveness of RLHF depends on human annotators’ ability to accurately evaluate the behaviour of AI models. However, as AI systems surpass our cognitive abilities, **their actions are likely to become increasingly difficult for annotators to understand**. It may become extremely challenging, and eventually impossible, for humans to provide useful feedback on an AI’s outputs.

Various approaches under the umbrella of ‘[scalable oversight](https://aisafetyfundamentals.com/blog/scalable-oversight-intro/)’ have been suggested to address this. However, it remains uncertain whether any known techniques will be sufficient.

### **#6 RLHF does not prevent AI models from being jailbroken**

Though RLHF is intended to ensure that models refuse to answer harmful or dangerous queries, **researchers frequently discover jailbreaks - prompts that allow users to bypass safety restrictions and generate unsafe outputs**. For example, one user managed to coax Discord’s chatbot Clyde, which was created by integrating OpenAI’s ChatGPT, into [providing a recipe for napalm](https://techcrunch.com/2023/04/20/jailbreak-tricks-discords-new-chatbot-into-sharing-napalm-and-meth-instructions/) with a creative prompt about a bedtime story their grandmother would read them as a child.

Not only is jailbreaking a potentially dangerous phenomenon in itself, but it also demonstrates the superficiality of RLHF as a safety approach. That AI models trained with RLHF can be easily jailbroken is evidence that their commitment to preventing harm is not particularly robust.

### **#7 RLHF tuning is easy to remove from open-source models**

Many AI companies are open-sourcing large models. This means that a model’s code and architecture are made publicly available, **making it easier for individuals to circumvent safety features or remove them all together**. One team of researchers managed to [undo the safety fine-tuning of Llama 2-Chat](https://arxiv.org/abs/2311.00117), a collection of language models open-sourced by Meta, for less than $200\. A [subsequent alignment course project](https://aisafetyfundamentals.com/projects/badllama-3-remove-safety-finetuning-from-llama-3-8b-instruct-for-a-few-cents/) achieved the same for $0, and in just 30 minutes.

Fortunately, Llama 2-Chat and similarly sized models are not particularly helpful in enabling bad actors to cause large-scale harm (they cannot output more useful information on bioweapons design than is already available online, for example). But as AI systems become more capable, they might become skilled at helping amateurs to parse complex scientific literature that would help them produce biological or chemical weapons, or even at generating recipes for novel ones.

If ever-larger models continue to be open-sourced without adequate safeguards, what protection against harmful outputs is provided by RLHF will quickly be rendered obsolete.

RLHF has been useful in increasing the helpfulness and safety of current models. **However, the above points demonstrate that it is insufficient to address key AI alignment concerns, and in some cases even exacerbates them**. Fundamental breakthroughs will likely be needed to develop safety techniques that scale to smarter-than-human AI systems.

7

1

Share

PreviousNext

| [](https://substack.com/@longerramblings?utm%5Fsource=byline) | A guest post by[Sarah](https://substack.com/@longerramblings?utm%5Fcampaign=guest%5Fpost%5Fbio&utm%5Fmedium=web)[Subscribe to Sarah](https://longerramblings.substack.com/subscribe?) |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

#### Discussion about this post

CommentsRestacks



[](https://substack.com/profile/77575444-shubbair?utm%5Fsource=comment)

[Shubbair](https://substack.com/profile/77575444-shubbair?utm%5Fsource=substack-feed-item) 

[Jan 27](https://blog.bluedot.org/p/rlhf-limitations-for-ai-safety/comment/205815015 "Jan 27, 2026, 9:01 AM")

amazing details are there.

Reply

Share

TopLatestDiscussions

No posts

### Ready for more?

Subscribe

© 2026 Dewi Erwan · [Privacy](https://substack.com/privacy) ∙ [Terms](https://substack.com/tos) ∙ [Collection notice](https://substack.com/ccpa#personal-data-collected)

[ Start your Substack](https://substack.com/signup?utm%5Fsource=substack&utm%5Fmedium=web&utm%5Fcontent=footer)[Get the app](https://substack.com/app/app-store-redirect?utm%5Fcampaign=app-marketing&utm%5Fcontent=web-footer-button)

[Substack](https://substack.com) is the home for great culture

```json
{"@context":"https://schema.org","@type":"NewsArticle","url":"https://blog.bluedot.org/p/rlhf-limitations-for-ai-safety","mainEntityOfPage":"https://blog.bluedot.org/p/rlhf-limitations-for-ai-safety","headline":"Problems with Reinforcement Learning from Human Feedback (RLHF) for AI safety","description":"Reinforcement Learning from Human Feedback (RLHF) is the primary technique currently used to align the outputs of Large Language Models (LLMs) with human preferences.","image":[],"datePublished":"2024-08-19T14:32:00+00:00","dateModified":"2024-08-19T14:32:00+00:00","isAccessibleForFree":true,"author":[{"@type":"Person","name":"Sarah","url":"https://substack.com/@longerramblings","description":null,"identifier":"user:15408659","image":{"@type":"ImageObject","contentUrl":"https://substackcdn.com/image/fetch/$s_!e9Y7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39ffdfec-07cf-40ee-9176-af39bd987cbb_400x400.jpeg","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!e9Y7!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F39ffdfec-07cf-40ee-9176-af39bd987cbb_400x400.jpeg"}}],"publisher":{"@type":"Organization","name":"BlueDot Impact","url":"https://blog.bluedot.org","description":"","interactionStatistic":{"@type":"InteractionCounter","name":"Subscribers","interactionType":"https://schema.org/SubscribeAction","userInteractionCount":100},"identifier":"pub:4662239","logo":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!PUc5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b9c29b1-3ff5-4ef6-8c04-e91c608ec10e_1000x1000.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!PUc5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b9c29b1-3ff5-4ef6-8c04-e91c608ec10e_1000x1000.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!PUc5!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b9c29b1-3ff5-4ef6-8c04-e91c608ec10e_1000x1000.png"},"image":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!PUc5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b9c29b1-3ff5-4ef6-8c04-e91c608ec10e_1000x1000.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!PUc5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b9c29b1-3ff5-4ef6-8c04-e91c608ec10e_1000x1000.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!PUc5!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b9c29b1-3ff5-4ef6-8c04-e91c608ec10e_1000x1000.png"}},"interactionStatistic":[{"@type":"InteractionCounter","interactionType":"https://schema.org/LikeAction","userInteractionCount":7},{"@type":"InteractionCounter","interactionType":"https://schema.org/ShareAction","userInteractionCount":0},{"@type":"InteractionCounter","interactionType":"https://schema.org/CommentAction","userInteractionCount":1}]}
```
