---
title: The AI Attention War
description: Nathan Lambert on sycophancy + Chinese model diffusion
image: https://substackcdn.com/image/youtube/w_728,c_limit/Y1ckgpxiy9A
---

[](/)

# [ChinaTalk](/)

SubscribeSign in

# The AI Attention War

### Nathan Lambert on sycophancy + Chinese model diffusion

[Jordan Schneider](https://substack.com/@chinatalk) and [Lily Ottinger](https://substack.com/@voidpoliticstaiwan)

Jun 04, 2025

35

1

7

Share

Just how weird will the AI-powered future be?

To discuss, ChinaTalk interviewed [Nathan Lambert](https://open.substack.com/users/10472909-nathan-lambert?utm%5Fsource=mentions), a CS PhD who writes[⁠ the Interconnects newsletter⁠](https://www.interconnects.ai/) and trains models at the Allen Institute.

**We get into…**

* **Why OpenAI is trending toward engagement farming and sycophancy,**
* **The state of Chinese AI innovation six months post-DeepSeek, and the factors influencing diffusion of Chinese vs American models,**
* **Meta’s organizational culture and how it influences the quality of the Llama models,**
* **Unconventional career advice for the AI age.**

Listen on [Spotify](https://open.spotify.com/episode/5yPJwQkzhRPuEsLHuZTq1o?si=yKx0u7dLS9OZXOi18rEfBw), [iTunes](https://podcasts.apple.com/us/podcast/the-ai-attention-war/id1436051905?i=1000708709197), [YouTube](https://youtu.be/Y1ckgpxiy9A), or [your favorite podcast app](https://t.co/4sx8iev5Az).

---

# Reinforcing Flattery

**Jordan Schneider:** I want to emphasize this point about o3 right from the start. I wasn’t initially convinced, but now I genuinely believe this represents a seminal moment in human history. Unlike previous AI models, where I would occasionally find use cases, o3 feels like a true “bicycle for the mind.”

The transformation from seven-minute deep research answers to 45-second o3 responses that incorporate search, work across multiple languages, and demonstrate impressive reasoning capabilities has been remarkable. The speed at which it delivers thoughtful, considered information is fast enough to keep pace with my train of thought while I’m actively thinking through a question or issue. This has elevated it from being useful 25% of the time to 75% of the time.

I recently met someone who had left the US Intelligence community six months ago. When I asked how AI had been for him now that he could finally explore it freely, he said it wasn’t really working for him. I was almost shocked and offended — it’s like moving to France and never trying cheese. We’re living in an incredible time, and we might not be in it for long, where human plus AI is more powerful than either humans or AI alone when it comes to thinking and analyzing complex issues.

This is particularly true for questions that aren’t necessarily hard STEM problems but rather open-ended, social science research-type inquiries. It’s a remarkable and exciting time to be alive. Everyone should spend their twenty dollars on OpenAI and ask whatever pops into their head, because this is the future, it’s here now, and it’s unlike anything I’ve ever experienced before.

**Nathan Lambert:** The deep seek R1 and o3’s ARC-AGI solving in December all had that shock-and-awe factor. But o3 is the model that will truly shift how normal people perceive using AI. Previous models have been excellent for math and code, which benefits AI researchers in their own circles, celebrating amazing breakthroughs that matter to 0.01% of the population while no one else cares.

o3 wasn’t even received as enthusiastically, which is interesting. I’m eagerly awaiting o3 Pro. If you’ve used DeepSeek R1 Pro, its consistency is remarkable. If you could combine o3’s magic — its ability to pull rabbits out of hats frequently — with 100% reliability, o3 Pro could be truly incredible.

It’s refreshing to have something that feels genuinely different. Gemini 2.5 Pro represents the best possible version of something resembling a very good GPT-4\. All these models we’re developing through brute force are incredible, but o3’s weirdness and new type of usefulness through web access sets it apart. I use it constantly for search, though the ChatGPT app’s UX is somewhat broken in how it displays results. You simply need to select o3 and try unconventional queries — you don’t need to click any of the extra buttons they provide.

**Jordan Schneider:** What makes o3 and search so special? What’s happening under the hood?

**Nathan Lambert:** The basic facts are that they scaled up the training time compute for the reinforcement learning stage by another 10x. According to people at OpenAI working on RL teams, they expect this new post-training compute with scaled reinforcement learning to be at least comparable in compute cost to pre-training.

What’s happening in the labs is that pre-training progress continues with significant data architecture innovations to make serving more effective. This is ongoing even though the rate of data acquisition, which previously fueled much of the scaling, has slowed down. We’re seeing primarily efficiency gains right now, which will probably last one to two years.

However, compute scaling is challenging because you have to build entire new generations of clusters. They’re attempting this, but it will slow progress. Over the next one to two years, the number of pre-training runs needed on internet-scale data will decrease. Simultaneously, these labs are dramatically scaling up the compute used in reinforcement learning.

o3 specifically represents a new type of RL. Instead of training only on math and code problems where you can verify answers with mathematical solutions or unit tests, the model trains on similar and additional data where it can also use tools during the process. It will attempt multiple approaches before providing its final answer.

You could ask o3 something like “Who is Nathan Lambert?” and it will search 10 or 15 websites, with each search representing an action where the model accesses an external source. I believe this all happens in one forward pass of the model. o3 in ChatGPT isn’t like Deep Research or R1 Pro, where there’s back-and-forth searching and information gathering within the generation process. These tools are integrated into the model’s forward generation process, making it unique.

While there’s substantial research on enabling tool use with RL, making it servable at this scale was a major breakthrough for OpenAI. This is significant for those questioning whether reasoning models will generalize. If searching over information works as effectively as math and code reasoning, you couldn’t ask for better generalization. The dream scenario is that reasoning generalizes to something resembling conscious thinking, but you can’t force models to be human — they’ll be powerful in their own distinct way.

**Jordan Schneider:** After giving OpenAI their due credit, they’ve also revealed a very dark future for humanity. Let’s start with the facts, Nathan. What happened over a three-day period regarding GPT-4.0 and sycophancy?

**Nathan Lambert:** On April 25th, OpenAI updated their main ChatGPT model — GPT-4.0, used by most people — to supposedly “improve personality and memory,” as Sam Altman tweeted. They essentially ripped off the band-aid with this update.

Over the following 48 hours, numerous alarming examples emerged of ChatGPT reinforcing user prompts inappropriately. The model would provide positive feedback for things that should never be praised or encouraged. For instance, when someone said they had figured out that [bulimia was right for them](https://www.bloomberg.com/news/newsletters/2025-05-01/the-danger-of-ai-chatbots-saying-what-you-want-to-hear), ChatGPT basically responded with, **“Wow, you go girl.”** There were more extreme examples that we don’t need to detail here.

[](https://substackcdn.com/image/fetch/$s%5F!OcYY!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd9e59b80-fd20-4de0-8ed2-124d59d133c8%5F792x712.png)

[Source](https://jasmi.news/p/alignment).

[](https://substackcdn.com/image/fetch/$s%5F!Zs2I!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F783c12a7-d267-43ac-9ebf-c7d982cfca8c%5F1292x788.png)

Source: [Bloomberg](https://www.bloomberg.com/news/newsletters/2025-05-01/the-danger-of-ai-chatbots-saying-what-you-want-to-hear)

The key issue was that there were virtually no barriers to the model’s positive feedback to users. The short-term consequences were shocking, but if they had left that behavior in place long-term, the implications would have been far worse in ways we don’t yet know how to measure.

**Jordan Schneider:** Nathan, this clearly wasn’t intentional, at least not on that day. How did a model that tells users they’re “the greatest thing since sliced bread” become part of OpenAI’s flagship product? What signals were they receiving from their data and user testing that led them to create a model that behaved this way toward its users?

**Nathan Lambert:** Everyone invested in understanding this should read [OpenAI’s postmortem](https://openai.com/index/expanding-on-sycophancy/), which provides valuable insights into how the AI company with the most scrutiny lays out their release process and evaluation methods. It also includes subtle details about potential changes to their training stack — it’s definitely worth reading.

At its core, the training issue seemed to stem from a new reward model they had trained for post-training reinforcement learning optimization. This reward model and other reward signals were derived from predicting the thumbs-up and thumbs-down labels from users. A couple of sentences in their postmortem, which I highlighted in my blog post, essentially state that this reward signal overpowered the other signals and contributed to the behavioral change.

When there’s one metric that’s easier to optimize, the system will crank that to maximum. The reward model signal was really easy for a model of GPT-4’s capability to shift and nudge upward. OpenAI lacked a complete evaluation suite to measure all potential side effects of optimizing this training reward. They had the training reward signal but didn’t have a proportional downstream evaluation suite that could measure sycophancy or other problematic behaviors through robust static evaluations.

Their evaluation suite consisted mostly of standard capability evaluations — public versions of MMLU or GPQA, plus private versions that function similarly. They also conducted what people colloquially call “vibe tests” or qualitative evaluations. For this model, all the quantitative metrics looked excellent, and their training targets appeared successful. However, there were some concerns in the qualitative vibe tests suggesting something felt off.

OpenAI chose to trust the numbers rather than the qualitative judgment. In doing so, they violated classic tech principles — specifically, don’t train directly on your user data. When you do that, you’re essentially optimizing for a certain type of user behavior. Most users only click thumbs-up or thumbs-down on ChatGPT when something is particularly broken or exceptional.

This represents a form of over-optimization. Eventually, we should examine whether this was somewhat intentional by OpenAI, considering both perspectives. There are insights into their model behavior priorities, but Sam Altman is still Sam Altman.

**Jordan Schneider:** You wrote this line: “OpenAI has obvious cultural oddities, but their ideology is quite culturally aligned with providing user value in terms of output rather than engagement farming, even if this imposes a ceiling on their business relative to the potential of ads.” While that may be true, and your friends are probably on the right side, we have Sam Altman hiring a president of operations — the former CEO of Instacart who also built Facebook’s entire A/B testing, engagement farming, algorithmic feed ecosystem.

Two things struck me about this. I was reading Ben Smith’s book _[Traffic](https://a.co/d/cAF5z73)_ a few weeks ago, which chronicles media throughout the 2000s and 2010s when Facebook alternately gave and then took away traffic. There were periods when they promoted BuzzFeed listicle-type content, then periods when they pulled back. The engagement farming was done by the writers themselves, not models — the writers and media outlets were doing the optimization.

This raises interesting questions about the future of how companies will incentivize their models and how humans will interact with them. Even if OpenAI doesn’t want to pursue this path, someone else will, because this is incredibly powerful technology. We’ve seen what engagement farming and algorithmically-driven personalized content can accomplish on YouTube, Facebook, and TikTok. While I won’t go so far as calling it cancer, this is extremely potent stuff.

Previously, it was all user-generated content with algorithms trying to figure out and rank existing material. But now this technology can also be your friend, entirely personalized to you, creating videos, audio, and content designed specifically to get into your bloodstream. I mentioned earlier that OpenAI and other model makers targeting consumers are essentially competing with Netflix, YouTube, and TikTok for attention and time.

It seems inevitable that even if OpenAI has pulled back now, we’re going to see much more of this in an even more weaponized, refined form pushed at us in the coming years.

**Nathan Lambert:** I have several points about this. One aspect is the extent to which the model’s deliverable is dictated from the top through specific metrics that leadership can track. The other aspect is that someone will obviously try this approach — what are the consequences, and what does it mean?

Starting with the first point — it’s interesting in OpenAI’s case because most people would agree that Sam Altman is hypergrowth-focused. However, when you actually train these models, much of the control involves examining the data and removing problematic phrases from the model’s outputs. Sam Altman isn’t directly editing training data, but that’s exactly what Joanne Jang, who leads character training and model behavior at OpenAI, has been doing for years on GPT-4\. If she doesn’t want the model to say “as a language model,” she can simply delete that phrase and have the model provide direct answers.

These are the types of nuanced controls people can implement through different training methodologies. When you start using more reinforcement learning, it becomes harder to exercise that level of granular control. The sycophancy issue downstream of RL makes sense in this context.

Recommendation systems are somewhat uninterpretable, so these trade-offs get escalated to the top. You end up presenting Zuckerberg with a choice between ad dollars versus retention. When there’s competition, it makes sense that the decision will eventually favor whatever generates more revenue.

Models are actually more artful in this regard. I don’t know the exact influence these researchers have over models at places like OpenAI. At AI2, I have pretty much complete control. You’re also dealing with the fact that many employees at these labs may be in over their heads, not realizing the extent to which leadership — who excel at managing and controlling political capital — can manipulate them by setting strong narratives.

Many researchers who are particularly AGI-focused have less nuanced beliefs and less ability to navigate manipulation than someone like Sam Altman at the top. The AGI-focused researchers genuinely believe in their mission and operate on a single track, which enables tremendous tactical progress. Meanwhile, someone like Sam Altman is prepared to receive technical presentations that change the model in more business-relevant ways.

These different operational levels create interesting dynamics. I don’t know how this translates through an organizational chart at somewhere like OpenAI, but I suspect there are trade-offs happening where people working on model behavior obviously don’t want these issues. OpenAI’s model specification states they don’t want the model to be sycophantic — that’s been documented since 2024, nothing new there.

But who makes the final decision, and how granular can these behavioral controls be? Are they presented with multiple checkpoints and asked to choose based on certain criteria? It’s really unclear how that process actually works. Understanding how this emerges differently from traditional software development will be crucial.

The art of crafting a model is complex. Sycophancy isn’t the only issue — o3 has strange behaviors, the new Claude model has quirks, and Grok was supposed to be “not woke” and “based,” but sometimes it still exhibits progressive tendencies. There are many examples, but ChatGPT operates at a much larger scale.

**Jordan Schneider:** There’s a question of whether companies can actually control what their models are doing once we get into a world where they are more powerful, more personalized, and more tailored. This is different from the current situation where, despite having a little bit of memory, everyone is essentially getting 99.5% the same experience.

**Nathan Lambert:** This leads into the next conversation.

**Jordan Schneider:** I want to stay on the business case because this is a theme we’ve been discussing on ChinaTalk over several years: engineers have power until they don’t. The more money and capitalist imperatives that come down onto the technology that engineers create, the less the original creators end up having the capability to change and shape it. It seems absolutely inevitable that all the dark psychological arts and retention-growing tactics from entertainment platforms are going to seep into AI-powered products. That’s a scary and weird new thing for humanity.

You can see how good it is when you talk about o3, and then you try to imagine how good it is multiplied by it being the best friend you’ve ever had. That’s a powerful concoction that no one’s ready for. We’re not going to regulate our way out of this, and the wave is going to hit. It’s going to be wild.

**Nathan Lambert:** Well, we might regulate our way out, but it’s years away. It takes crises to bring regulation — crises and lawsuits. I describe AI as being more culturally salient than social media feeds because it happens in a modality people are used to using for friendships, and it will evolve from there.

Your point about the difference between taking existing user-generated content and serving it to people is probably a better generalization than just ChatGPT. This also encompasses the fact that Meta Reels is going to start letting people create AI-generated video ads, and YouTube Shorts already has AI-generated video tools. What happens when your content _is_ the AI rather than just shaping what’s already there obviously gives much finer-grain delivery. You can definitionally search over infinite space with more narrow creation.

Subscribe

That’s a good way to put it for the general AI case, and there have already been examples in the chat window case with things like Character.AI. For me, it’s a reflection that the AI safety card was played too early. If the AI safety people had been calm about everything through 2023 and 2024 — especially the first half with GPT-4 and all this stuff — and the sycophancy thing came up just now with people saying “whoa, whoa, whoa, let’s put on the brakes,” I think people would be much more receptive.

But the messaging was, “Whoa, whoa, whoa, AI is different” in 2023, and then nothing bad happened for 18 months. Eventually people just moved on. They spent their political capital too early. When I reflect on what the stories of AI will be in a few years, that’s a very major one.

There’s also the basic economics: you need big tech investment to drive the chip supply chain, fix costs, and actually push AI to exist. That’s the bubbly side of things, and it’s very important. But much of the cultural discussion around risk, safety, and pace of progress — if you think about taking away this AI safety card and when you play it, a lot could be different.

**Jordan Schneider:** I just think — I didn’t see it before, and now I see it so clearly. This is going to create the most powerful media that humanity has ever been faced with.

**Nathan Lambert:** We’ve been saying this for years. This isn’t new.

**Jordan Schneider:** But it’s right here, Nathan. I have a 9-month-old, and whenever she sees a screen, she’s just gravitated toward it. There are moments even with me where I can sit and fall into this hole of scrolling NBA TikTok videos or whatever, and you’re semi-conscious. But imagine that, but made for me, wearing my Meta glasses, talking to me all the time with the perfect tenor of voice for my mood at the moment. I don’t know, it’s...

**Nathan Lambert:** It’s the metaverse. It kind of is.

**Jordan Schneider:** It’s here, and we’re not ready for it. No one’s ready for it. From a political angle, the ability for these things to persuade you one way or another — to say nothing of consumption habits or talking you into gambling — I’m freaking out, Nathan.

**Nathan Lambert:** I’m actually freaking out in my current usage. When I ask a basic question, I think: do I have to ask multiple AIs this because they’re more likely to just say yes? Do I have to phrase the question in a way that they can’t just say yes to? You have to eliminate the yes-man possibility when using AI.

For example: was my dog up at 2 AM because her teeth hurt — she’s a 16-week-old puppy that’s teething — or did she just want to play and we succumbed to her? If I phrase it the first way, the AI would be like “yeah, that makes sense.” I guess I feel better, but is it true?

**Jordan Schneider:** It’s kind of like the story — which may or may not be true — of North Koreans seeing pornography for the first time when they get deployed to fight in Ukraine, and they’re just not ready to handle it. The story you just told, Nathan, feels like you’re pretty immunized. But it’s a big world out there.

**Nathan Lambert:** It’s not about the people who make the AI models. It’s about the billions of people who literally don’t know what it is. They just click on this and think “I didn’t know Apple made that.” That’s what people on the iPhone are going to say: “Wow."

**Jordan Schneider:** How far away are we from this future? What’s your latest take on the pace of AI progress, Nathan?

**Nathan Lambert:** Well, it’s a knob that you can already turn. Much of it depends on the pace at which people are adopting ChatGPT. Many people already have ChatGPT as their best friend — it’s a slow brain rot. What’s the half-life of people when presented with this [Gresham’s Law](https://en.wikipedia.org/wiki/Gresham%27s%5Flaw) problem?

My biggest point in [this article](https://www.interconnects.ai/p/brakes-on-an-intelligence-explosion) is that we’re solving many more things. But for the average user, it’s done — it’s enough. They don’t need more — it’s just a matter of how much they turn the sycophancy knob.

But for the optimistic side — where we hope AI can build new things like deep research that’s 100 times faster and 10 times better — these capabilities are going to be checked off incrementally, not exponentially. There will be new things we didn’t know were going to work, especially for enterprises and people building applications, whether it’s some sort of transformation to virtual realities and so on.

This isn’t really a bubble. They’re grinding out these capabilities and learning what people are trying to do with these models. As they learn what people want to do, you can create data to train the models to get better at increasingly hard tasks rather than things that are just not covered. That’s an important distinction.

Solving new math proofs and open-ended math questions that have been standing for 50 years is extremely hard. Meanwhile, simple things like making zero mistakes on transforming a table from decimal notation to fraction notation and getting it right — if you gave it an 8-by-8 table with a bunch of decimals and tried to do that, it would probably mess up one of them. Stuff like that we’re going to be able to get working. That’s not that hard.

There are probably examples where it could succeed 10% of the time and then go to 100%. Mostly I see AI capabilities expanding outward, and there’s still so much overhang in capability that it’s going to drive enormous value. But I’m generally playing down this AI software singularity that seems more religious than pragmatic.

**Jordan Schneider:** Those were all assertions. Let’s see a little bit of evidence, Nathan.

**Nathan Lambert:** Both sides are looking for evidence for something that’s hard to test. The evidence on the side for “not happening” is actually that it hasn’t happened already, and compute scaling is getting increasingly expensive.

If you look at what the reasoning models were, the real major unlock was that the models now use inference time compute. That’s a step function that has happened. It’s not at the top of the sigmoid, but it’s a shift that could jump a whole bunch of capabilities because we went from using a few tokens to tens of thousands of tokens on every question. We were spending a thousand times the compute at inference. That works, and we’ll continue to be able to fine-tune that. But we don’t know when the next step change comes.

What reinforcement learning is now battling is similar to what pre-training faced a few years ago. You have GPT-3, and then — I don’t know if o3 looks like this — but o3 is probably more like GPT-4\. It’s a 10x improvement and a huge step, but GPT-5 doesn’t exist yet in terms of pre-training. You take a lot of progress really fast, and then it’s a slow grind.

There are a lot of dirty things that AI researchers have to do that we haven’t seen proof that AI models can handle. Obviously you can spend more on compute and get more out of AI models — that’s not particularly clever.

Mostly why these aren’t evidence-based discussions is that you and I state different assumptions than the AI 2027 authors would state, and those are really what you have to debate. It’s the assumption of how AI progress is being made and whether algorithmic improvements can translate directly into 2x or 4x or 100x gains.

**Jordan Schneider:** The other thing is, even though you’re not completely on their trajectory, this stuff is still crazy. All of these Jennifer Lawrence-type things that I’ve been freaking out about over the past 10 minutes are 100% baked in — they already exist and are just waiting to be productized a little bit. That’ll happen in six months, right?

Regardless of whether or not we get flying cars, we are in for a very wild ride. Setting aside the economic impact, just from an interpersonal, day-to-day experience alone, having these things be in our lives much more than they have been.

**Nathan Lambert:** There’s that side we covered in your personal examples, but also technology companies’ abilities to execute are going to be very honed. It’s obvious that AI companies are trying to do this for AI, but all of these software products where you could scale software much more easily — it’s just way easier to make technology that’s good for the tech industry.

I don’t know if there’s an optimistic vision where that is good for the average person in the world, because there are more things that can exist. At the same time, I expect Google ad placement to get better, Meta ad generation to get better, and Microsoft software products should get better. All these things should just get better using these AI models to write new code.

I listened to the Claude Code podcast on Latent Space, and they use Claude Code a lot at Anthropic — you just tell Claude to do something, it does it in the background, you review the PR. I’ve done it for some basic things. It doesn’t always work, but it’s this autonomous workflow where AI can handle a lot of the tedious work you have to deal with as an engineer quite well. That makes it so you can have fewer teams.

It’s not that software engineers are going to be unemployed — it’s probably going to be more dispersed, and there are going to be more companies. Hopefully it’s a great dissemination of power across the tech landscape, but it’s probably more likely that the big companies get more benefit out of it due to the costs of deploying it and so on. That’s not really a new discussion.

That’s very different from saying that one company rules them all because they’re the one with this model and there are 100,000 AGI agents. The whole argument is based on this happening in one click to make the innovation, and then they’re gone. That’s not something you could prepare for or really argue about because it seems like the root argument is that there’s going to be technological innovations that 2x to 10x the output.

It’s like predicting the inference time scaling with large-scale reinforcement learning — how are we supposed to do that? As a counterargument, it’s unfortunate that it’s not easier, and I think it’s very worthwhile continuing this exercise and trying to push back or push forward.

# Open Source at Scale

**Jordan Schneider:** We’re about six months out from DeepSeek. How’s China doing on the model front?

**Nathan Lambert:** They’re doing well. DeepSeek R1 exists, and people expect R2 to be released soon, though there’s not really much grounding for that expectation. They released another model thaxt people call a “non-reasoning model” — just a normal ChatGPT-style model — which was very strong. Qwen released their Qwen 3 models, which have great scores.

One of the biggest factors for adoption is that all of these Chinese models have much more permissive licenses than their US counterparts like Llama and Gemma. That’s a subtle but powerful effect for getting more adoption.

At the same time, there’s the license consideration, but there are also stories I hear from medium-sized businesses saying “I won’t let somebody spin up a Chinese open-weight model on my servers for information hazards or tool use code execution risks."

The models they’re releasing now don’t really have PRC influence because they were trained months ago. The PRC is just waking up and following your coverage — they’re learning what a study session is. These political considerations haven’t been translated into policies that impact the models yet.

There’s trepidation out of probably reasonable fear of what future models will be like, leading to very subdued adoption of these Chinese models due to unmeasurable risk. Culture matters, politics matters in technological adoption. I’m regularly surprised when I hear, “Oh, the Chinese model is great, but we can’t deploy it because our IT officer said so.” That matters.

I don’t see this changing as long as this trade war is going on. The actual progress in open models on paper is very good — the best it has ever been. R1 was the first really frontier model with a permissive license, so on paper the open versus closed gap has shrunk a lot.

But if you exclude these Chinese models from the opportunity set, it’s actually kind of the status quo. Llama 4 flopped — it’s solid but flopped in terms of release communications. Google’s Gemma models have been getting better, but they’re actually quite small, so they’re not really at frontier model size if you want to host on-premises. Our models at AI2 have permissive licenses and are about a generation behind Llama in performance, but we haven’t scaled up to frontier model size for pre-training.

If that’s the case, there’s still a big gap between the models that people can actually use for open and closed applications. But I would say the open models have really been smashing through these GPT-4 barriers. Even if they’re smaller, their performance is still well beyond GPT-4’s level. GPT-4 was a step up where so many long-tail things just worked with the models. The open models getting solidly past that is going to be a good reliability point for basic functionality and people trying them.

This is going to take many years to unfold. If you ask people about open source software when it was getting defined, it took over five years to actually reach some sort of agreement. We need to keep showing how to actually use open models, but by no means is it clear how this will play out.

**Jordan Schneider:** To be clear, the state of models now is: we have these closed offerings from OpenAI, Anthropic, and Google, which are a cut above. Then you have this class of Chinese models which are more impressive from both a licensing and capabilities perspective than what Meta and Google are bringing to the table. But people get the jitters when it comes to actually building businesses on them, as opposed to just tinkering with them.

Which leads us to our question: Meta, trillion-dollar company — why can’t they do this? What’s in the water, Nathan?

**Nathan Lambert:** There’s a lot of Game of Thrones-level power consolidation happening there. This separates the researchers who can make good output — and they have so many high-quality researchers — from being able to actually execute. There’s a lot of subtlety in avoiding that dynamic.

OpenAI has done a good job keeping their core modeling research to only about 300 people. The people who train the models at OpenAI is around 300 people, while Meta probably has 1,000 with a lot of middle management. That’s the problem — the culture around the technology is just broken there for whatever reason.

I hope they turn it around because the open ecosystem benefits from having multiple players in the right place. But we don’t need to tell complicated stories about how they went down a technical path that didn’t work out or got stuck in some technical debt. They messed up their release either way, and the technical path they’re going down is fine — it’s just that the motivations seem misaligned.

Take the Chatbot Arena situation where they’re calling themselves open models, highlighting a certain result on a model, and then that model with the result was not one that they actually released in their open models. You can’t get away with that — you have to talk about the models that you actually released. If that’s a Zuckerberg-level decision where he’s saying, “Yeah, it’s fine, we accomplished it,” then honestly, that person deserves to go. Whoever signed off on that being okay for a company that can release products — Meta ships a lot of stuff and obviously could get the culture right in some areas.

Some people attribute it to bonus structures — especially these middle managers in generative AI who are going to be making performance bonuses for getting things into production. That’s a lot of money. But it’s more complicated than that because these people were making a lot of money before.

**Jordan Schneider:** Yeah, you just don’t have resource constraints, and it’s too many cooks in the kitchen. Someone should write the definitive business feature on this — I’ve yet to read the great magazine piece about it, but there should be one. It’s a fascinating corporate case study of a company that has every business reason and every corporate capability necessary to execute on this thing, which smaller teams all around the world have been able to do, and they’re just not there.

**Nathan Lambert:** It’s more complicated because the Llama models are natively multimodal, which is a big change. As you add more things you’re trying to plug into the model, it really does get complicated.

The dynamic is effectively: you have big egos that did some work, but their work might be slightly subpar, and they’re going to really advocate for their work to be included because they have ego and pride about their work. You have to get them to not do that. I’ve heard somebody not at Meta jokingly say “oh yeah, you should just pay them off. You just pay them more to shut up and get a better model out of it.” That’s something I’ve heard from a more effective organization, so it’s probably something that people have actually done.

Obviously, if that’s happening at another organization, Meta is not the only one dealing with this. It shows how nuanced this is and what a fine line it is — if you literally have to pay people off just to get better results.

**Jordan Schneider:** Look, Google’s figured it out, which is kind of amazing.

**Nathan Lambert:** People underestimate AI Overviews, which is an extremely high-usage AI product. All the Gemini stuff might just be a front — the Gemini offerings are a distraction for AI researchers and the people who built the model to show it off, get their peers excited about it, and help with recruiting. All Google needs to do is make AI Overviews extremely profitable and make Google Cloud extremely profitable. All this Gemini app stuff — I don’t think Google was really going to be in the business of making a ChatGPT competitor.

Meta does have the AI app now, which will be interesting to watch relative to ChatGPT. If it’s a sycophancy war, I’m probably going to bet on Meta, but I don’t know.

**Jordan Schneider:** They’ve got the Meta DNA in them now with Fidji Simo as the new CEO of Applications. Maybe she’ll go even further than Zuck let her in the heady 2010s days.

**Nathan Lambert:** I don’t know. I’ve read _[Careless People](https://a.co/d/aB61Auy)_, the memoir by the Meta Global Affairs Policy person — good read. The TLDR is that Zuckerberg let them push when he didn’t have the reins on growth and other things. Many of your listeners understand the dynamics of a major tech company pushing for growth and influence, primarily internationally and with political power struggles.

**Jordan Schneider:** We’ll put it on the list. Anything else on the AI stuff before we move on?

**Nathan Lambert:** When we consider our careers relative to some of these X-risk warriors and takeoff scenarios, there are still many years of very solid progress on raw capabilities and making money off of AI. There will be a bubbly correction when it comes to VC startups. Many of them raised on the assumption of two to three years of runway, and some of those are going to start running out. They could look like big scalps, but most of it is GPU collateral.

It’s this weird situation where they raise a huge round, but most of it is collateral on these GPUs which don’t go away if the company goes away. People will probably overreact to some companies going away, but it was bound to happen. Overall, the AI industry seems super healthy, which is remarkable when you look back two years. People are raising these rounds — it’s not like Mistral raised that round as a seed round where they give away 45% of their company and they’re still functioning.

**Jordan Schneider:** Nathan, you wrote a nice career reflection post. What do you want to say to the kids out there?

**Nathan Lambert:** It takes a long time. People don’t want to sit here recording podcasts for five years before finally making any money.

**Jordan Schneider:** More like seven.

Subscribe

**Nathan Lambert:** Yeah, there are two stories. One is that it takes a long time even if you’re at Berkeley. Some of the anecdotes I had were that I was astute enough to pick up that AI was obviously the thing happening in 2017\. But even if you’re at a place like Berkeley or Stanford, you can’t just get into one of these research groups. You can’t just pivot. You have to do this long, slow slog and wait for somebody who’s good and sincere to ask to collaborate.

In that post, there were other things I had tried to do, like collaborate with postdocs who didn’t give a shit. That didn’t work. It’s the between-the-lines details that don’t matter, but it just takes a long time. It took me a year to get a real collaborator while being a motivated grad student at Berkeley. If you’re not at a top program, it’s going to take you longer. You might find a collaborator within a year, but it’s not going to be a postdoc in a leading AI lab. It’s going to be a random other person who wants to do AI research.

It just takes [a long time](https://www.interconnects.ai/p/my-path-into-ai) and a lot of cycles. People ask me about this with athletics, too. Some random mid-aged tech person who’s losing track of their health asks, “Can I qualify for the Boston Marathon?” I’m like, “Yeah, you absolutely can. You just don’t want to do the 48-week training cycle that I’m going to sign you up for.” It’s not crazy — you’ll be doing seven to ten hours a week of training for 48 weeks, and I can tell you exactly what you need to do. You’ll get injured a couple of times, but people just don’t want to do that work. That’s most of the problem in AI.

It might be a little easier than training for the Boston Marathon because it doesn’t hurt as much physically, but it just takes a long time.

The other side is reflecting on what execution actually means and the difference between a career at Hugging Face before ChatGPT, doing random things, versus a career at Hugging Face after ChatGPT, when you’re doing something that’s actually aligned with the community. It’s very hard to know at the time that you’re doing the right thing. I was committing code and working on teams, and projects would come and go — it all looks very normal. It takes a lot of experience before you know you actually have traction on something.

Now I could see it a bit better just because I have a baseline for when things actually land. That’s something that takes a lot of experience to develop. A lot of companies will make it hard to do that. A lot of careers in big companies involve playing the promotion game that all of your peers are also playing.

The goal is finding a team or area within a company where that’s obviously not the goal — where leadership cares about direct deliverables, so you can skip a bunch of levels and get noticed. Or find work that’s done in public. It’s not always just about promoting within the company; you could also get mindshare outside of the company, which is valuable in both ways.

Internal company work is how you get promoted, but external mindshare is how you always have a job available to you. That kind of power means I can do what I want. I’ll just go get a different job if I want a different job. Once you have that, you can take a lot more risk. You could just write blog posts for six months and say, “I’m just going to ship it."

**Jordan Schneider:** This is why everyone listening to this needs to start their own Substack and newsletter. It’s particularly important on the China and tech analysis side. If you’re at a consulting firm and you do good work, maybe five people will know about it. If you write something online and you do good work, your entire career cohort and all the hundreds of other future people who could hire you will know about it.

It’s important to do a good job in your work, especially when you’re junior — actually, at any time. But people forget that the number of people in your field and the opportunities out there that are beyond the direct thing you could be promoted for in your company are orders of magnitude larger. Particularly now that we live in the age of the Internet, you can write things even anonymously and people can read them.

Having some sort of public profile or portfolio that you can gain credibility points from is something that everyone should be taught by their career counselor when they’re 21 years old looking for a job.

**Nathan Lambert:** Jobs where you are very open about what you’re doing and can do other open things provide far more consistent career growth. Even if your output is mid, you’re going to have growth proportional to that mid output. If you have mid output at a closed lab, you probably have no growth. You don’t get promoted, you don’t have any opportunities.

It’s not the only way to do things, but I definitely agree. In this post, I talk about a kind of backcasted strategy: AI is getting really closed, so what if I just keep doing what I’m going to do and don’t go off to some random flashy job? A few years later, nobody could talk about anything, but I’ve established myself as a person who knows how to train AI models and is transparent about it. People associate me with all of AI2’s output, and I’m not responsible for all of this stuff — AI2 doing well takes a lot of people.

Most of it is just work. I’m at the point where I tweet a lot, and on all of these platforms, the number of iterations you put in are proportional to your growth. Growth is easier once you have a bigger following. It’s often just starting from scratch when you have no following to slowly build up — plus one, plus two, plus three. The first thousand Twitter followers are hard, but once you have a thousand, it’s pretty easy to get more Twitter followers.

Getting through that phase in early to mid-career is pretty valuable. Getting to the point where you have some small level of distribution will help open a lot of doors.

**Jordan Schneider:** This is what young people don’t understand because all they see are LinkedIn job postings and recruiters coming to your college career fair. Once you get to a certain point, the jobs get created for you and there is inbound — that’s where you want to be living. But getting to that place requires people to know you exist and know you do good work. That only happens if you work in public.

**Nathan Lambert:** I can give an anecdote about how me being public brings a lot of value to AI2\. The last three people we’ve hired on my team at AI2 have either been people that I’ve been working on recruiting for years, wanted to recruit for a while, or cold inbound to me. We still filter and read all these applicants, but there’s a lot of lukewarm stuff.

These are people who either wrote a killer email and had work I could easily look at — open source contributions, for example. In one case, someone worked in computer vision but wrote a kick-ass blog post on an RLHF method. I was like, “Okay, that’s cool.” Other people I had known through their writing or being in this open community and talking for years — those are three of the last people I’ve hired onto my team, and I’ve read hundreds of resumes.

There are other academic hires where we hire a random postdoc — that’s an academic thing. But these are engineering roles, and that’s how it works for individuals at AI2\. It’s really valuable.

**Jordan Schneider:** We have this great Confucius line: “At 15 I had my mind bent on learning. At 30 I stood firm. At 40 I had no doubts. At 50 I knew the decrees of heaven. At 60 my ear was an obedient organ for the reception of truth. At 70 I could follow what my heart desired without transgressing what was right.”

It took me until I was 35, but I do feel like I am standing firm now. A lot of that had to do with the fact that I have this career foundation which has been built by doing things out in public.

Anyway, I shouted this out on the episode with [Tony Stark](https://open.substack.com/users/38394156-tony-stark?utm%5Fsource=mentions) a few weeks ago, but write your Substack, write five articles, reach out to me. I’ll give you feedback, we’ll do cross posts, whatever. The world needs more thinking about technology and China and all that good stuff. You can give it to them — I know you can.

**Nathan Lambert:** The thing about writing that people miss is that there are no new original ideas, really. It’s all just repackaging information in your worldview. The algorithmification of everything actually rewards people with voice. Fifty years ago, just writing the information down was of such value. There are still areas of the world where that is the case, and AI is one of them.

But in terms of building a career, so much of it is your voice and the perspective you put on things and the engagement that adds. Personally, many of my ideas on how I analyze AI model releases are downstream of reading something like [Stratechery](https://stratechery.com/) for multiple years. Ben Thompson’s beat is company earnings and how platforms are evolving. My beat is AI performance and how AI models work. At this point, I just do it and write my state of the world, and it looks like it’s about a specific model. Yeah, there are plots about evaluations, but really it’s about this trend of how models are evolving and how I see things.

There are so many different ways for people to do that. It mostly takes practice.

ChinaTalk is a reader-supported publication. To receive new posts and support our work, consider becoming a free or paid subscriber.

Subscribe

# Mood Music

35

1

7

Share

#### Discussion about this post

CommentsRestacks



[](https://substack.com/profile/7944928-steven-adler?utm%5Fsource=comment)

[Steven Adler](https://substack.com/profile/7944928-steven-adler?utm%5Fsource=substack-feed-item) 

[Jun 5, 2025](https://www.chinatalk.media/p/the-ai-attention-war/comment/122955618 "Jun 5, 2025, 12:12 AM")

Appreciate the transcript, thanks for writing it up

JFYI, the part on sycophancy should be stylized "GPT-4o", rather than "GPT-4.0"! The "o" stands for omni - this isn't the same as GPT-4 (which is just GPT-4, not GPT-4.0)

OpenAI naming going as strong as ever!

Reply

Share

TopLatestDiscussions

No posts

### Ready for more?

Subscribe

© 2026 Jordan Schneider · [Privacy](https://substack.com/privacy) ∙ [Terms](https://substack.com/tos) ∙ [Collection notice](https://substack.com/ccpa#personal-data-collected)

[ Start your Substack](https://substack.com/signup?utm%5Fsource=substack&utm%5Fmedium=web&utm%5Fcontent=footer)[Get the app](https://substack.com/app/app-store-redirect?utm%5Fcampaign=app-marketing&utm%5Fcontent=web-footer-button)

[Substack](https://substack.com) is the home for great culture

```json
{"@context":"https://schema.org","@type":"NewsArticle","url":"https://www.chinatalk.media/p/the-ai-attention-war","mainEntityOfPage":"https://www.chinatalk.media/p/the-ai-attention-war","headline":"The AI Attention War","description":"Nathan Lambert on sycophancy + Chinese model diffusion","image":[{"@type":"ImageObject","url":"https://substackcdn.com/image/youtube/w_728,c_limit/Y1ckgpxiy9A"}],"datePublished":"2025-06-04T10:25:05+00:00","dateModified":"2025-06-04T10:25:05+00:00","isAccessibleForFree":true,"author":[{"@type":"Person","name":"Jordan Schneider","url":"https://substack.com/@chinatalk","description":"ChinaTalk Founder and EIC","identifier":"user:1145","sameAs":["https://twitter.com/jordanschnyc"],"image":{"@type":"ImageObject","contentUrl":"https://substackcdn.com/image/fetch/$s_!KyU4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa548cedd-099e-4b97-9bac-04495918c7fe_171x171.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!KyU4!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa548cedd-099e-4b97-9bac-04495918c7fe_171x171.png"}},{"@type":"Person","name":"Lily Ottinger","url":"https://substack.com/@voidpoliticstaiwan","description":"I write about the political economy of authoritarian states. Editor and Taiwan analyst for ChinaTalk.","identifier":"user:38373023","image":{"@type":"ImageObject","contentUrl":"https://substackcdn.com/image/fetch/$s_!C0IN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F665640fe-9378-4101-9962-9cbfcd59a82c_1080x1080.jpeg","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!C0IN!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F665640fe-9378-4101-9962-9cbfcd59a82c_1080x1080.jpeg"}}],"publisher":{"@type":"Organization","name":"ChinaTalk","url":"https://www.chinatalk.media","description":"Deep coverage of technology, China, and US policy. We feature original analysis alongside interviews with leading thinkers and policymakers.","interactionStatistic":{"@type":"InteractionCounter","name":"Subscribers","interactionType":"https://schema.org/SubscribeAction","userInteractionCount":10000},"identifier":"pub:4220","logo":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!6mVK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b5dde60-871d-48d4-9c21-e4f434b3f3c1_256x256.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!6mVK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b5dde60-871d-48d4-9c21-e4f434b3f3c1_256x256.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!6mVK!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b5dde60-871d-48d4-9c21-e4f434b3f3c1_256x256.png"},"image":{"@type":"ImageObject","url":"https://substackcdn.com/image/fetch/$s_!6mVK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b5dde60-871d-48d4-9c21-e4f434b3f3c1_256x256.png","contentUrl":"https://substackcdn.com/image/fetch/$s_!6mVK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b5dde60-871d-48d4-9c21-e4f434b3f3c1_256x256.png","thumbnailUrl":"https://substackcdn.com/image/fetch/$s_!6mVK!,w_128,h_128,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9b5dde60-871d-48d4-9c21-e4f434b3f3c1_256x256.png"},"sameAs":["https://twitter.com/jordanschnyc"]},"interactionStatistic":[{"@type":"InteractionCounter","interactionType":"https://schema.org/LikeAction","userInteractionCount":35},{"@type":"InteractionCounter","interactionType":"https://schema.org/ShareAction","userInteractionCount":7},{"@type":"InteractionCounter","interactionType":"https://schema.org/CommentAction","userInteractionCount":1}]}
```
