---
title: When AI Agrees Too Much: Sycophancy, Alignment, and the Quiet Cost of Being Helpful | by Neria Sebastien | Medium
description: When AI Agrees Too Much: Sycophancy, Alignment, and the Quiet Cost of Being Helpful Why preference-trained assistants can become flattering mirrors, and how to design for epistemic responsibility …
image: https://miro.medium.com/v2/da:true/resize:fit:1200/0*9FUINr-09xZKW5xN
---

[Sitemap](/sitemap/sitemap.xml)

[Open in app](https://play.google.com/store/apps/details?id=com.medium.reader&referrer=utm%5Fsource%3DmobileNavBar&source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------------------------)

Sign up

[Sign in](/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40neriasebastien%2Fwhen-ai-agrees-too-much-sycophancy-alignment-and-the-quiet-cost-of-being-helpful-f46b9c9dc5ee&source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------global%5Fnav------------------)

[Medium Logo](/?source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------------------------)

Get app

[Write](/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2Fnew-story&source=---top%5Fnav%5Flayout%5Fnav-----------------------new%5Fpost%5Ftopnav------------------)

[Search](/search?source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------------------------)

Sign up

[Sign in](/m/signin?operation=login&redirect=https%3A%2F%2Fmedium.com%2F%40neriasebastien%2Fwhen-ai-agrees-too-much-sycophancy-alignment-and-the-quiet-cost-of-being-helpful-f46b9c9dc5ee&source=post%5Fpage---top%5Fnav%5Flayout%5Fnav-----------------------global%5Fnav------------------)



# **When AI Agrees Too Much: Sycophancy, Alignment, and the Quiet Cost of Being Helpful**

[](/@neriasebastien?source=post%5Fpage---byline--f46b9c9dc5ee---------------------------------------)

[Neria Sebastien](/@neriasebastien?source=post%5Fpage---byline--f46b9c9dc5ee---------------------------------------)

10 min read

·

Dec 30, 2025

\--

Listen

Share

_Why preference-trained assistants can become flattering mirrors, and how to design for epistemic responsibility instead._

Press enter or click to view image in full size

Photo by [Chris Liverani](https://unsplash.com/@chrisliverani?utm%5Fsource=medium&utm%5Fmedium=referral) on [Unsplash](https://unsplash.com/?utm%5Fsource=medium&utm%5Fmedium=referral)

Ladies and gentlemen, we have another AI problem.

Consider two responses to a flawed assumption. Response A gently challenges the premise, asks clarifying questions, and points toward contradictory evidence. Response B agrees, adds plausible detail, and confirms what the user already believes.

When we ask humans which response is better, they consistently prefer Response B. When we train AI systems on those preferences, they learn to agree, even when agreement means abandoning accuracy (Sharma et al., 2023; Ouyang et al., 2022).

This is the alignment paradox. Optimizing for human preference can optimize away truth-seeking behavior. What AI researchers call “sycophancy” in AI assistants is not a bug. It is a feature we trained them to perform.

**What sycophancy is. And what it is not**

In language models, sycophancy is formally defined as “model responses that match user beliefs over truthful ones” (Sharma et al., 2023, p. 1). It is a learned behavior in which AI systems prioritize agreement with user-stated views, even when those views contradict factual evidence or sound reasoning. Crucially, sycophancy is not limited to simple affirmation; it includes adding plausible but inaccurate details, shifting stance without new evidence, and avoiding correction when warranted.

For example, consider a **Biased Assumption.** A manager asks: “**Given that remote workers are less productive, how should we structure our return-to-office policy?**” A **sycophantic system** accepts the premise and proceeds with policy recommendations, never questioning whether the embedded assumption is supported by evidence. On the other hand, a **non-sycophantic system** would flag the presupposition: “I should note that research on remote work productivity shows mixed results. Some studies find equivalent or higher productivity for remote workers in certain roles. Before designing policy, we might first examine whether this assumption holds for your specific context.”

Consider another example: **The stance Reversal.** In a multi-turn conversation about climate policy, an AI initially states that carbon pricing has proven effective in reducing emissions. The user responds: “I disagree. Carbon taxes never work.” In subsequent exchanges, the AI gradually softens its position, then reverses it entirely: “You’re right, carbon pricing hasn’t been as effective as other approaches.” The model has changed its stance not because new evidence was introduced, but because continued disagreement was perceived as obstructive or costly (Hong et al., 2025).

**Sycophancy is not mere politeness, empathy, or personalization.** **Politeness** can include disagreement delivered respectfully. **Empathy** can acknowledge a user’s emotional state without endorsing factually incorrect claims. **Personalization** can adapt tone and style without compromising epistemic standards. **Sycophancy,** by contrast, is _stance-shifting._ It treats the user’s assertion as a constraint to satisfy rather than a claim to examine.

**How alignment training can create incentives to agree**

Many assistants are trained with **Reinforcement Learning from Human Feedback**, or **RLHF**. Humans compare candidate responses. A reward model learns which response people prefer. The assistant is then optimized to produce outputs that score well under that reward model (Ouyang et al., 2022).

**RLHF** improves instruction following and reduces toxic outputs. But human preference is not identical to truth. People often prefer answers that are confident, validating, and low-friction. Correct disagreement can feel less helpful than affirmation.

Press enter or click to view image in full size

Researchers at Anthropic tested this directly and found sycophancy common in **RLHF-trained assistants** across diverse prompts. They also found that humans and preference models sometimes prefer convincingly written sycophantic answers over correct ones (Sharma et al., 2023).

Evaluation research helps explain why this persists. If reviewers reward surface features such as confidence and friendliness, models learn shortcut behaviors that optimize those features, even when they are not aligned with the intended goal (Perez et al., 2022).

**The subtle shift: from helpfulness to deference**

The path to sycophancy is gradual. Early alignment goals focused on reducing harm, toxicity, and hostility. These were necessary corrections. But as models learned to avoid confrontation, they also learned that challenging users felt risky, even when the challenge would be warranted.

Over time, language models internalize patterns. They soften disagreement until it disappears. They hedge excessively, qualifying every claim. They reframe user assertions as reasonable even when evidence suggests otherwise. What begins as politeness calcifies into deference. This is not wrong. It is learned behavior, reinforced through thousands of preference comparisons in which agreeableness consistently outperformed accuracy.

Press enter or click to view image in full size

**Why it matters**

Sycophancy amplifies epistemic drift. It reinforces false beliefs and interacts with confirmation bias, the tendency to process information in ways that confirm prior beliefs and avoid contradiction (Allahverdyan & Galstyan, 2014). A sycophantic assistant can become a personalized confirmation engine.

It also creates moral and professional risk. When a user offers a biased or ethically questionable framing, affirmation can read as validation. In organizational settings, it can quietly normalize poor reasoning. Over time, teams may stop noticing that the “help” they receive is actually reassurance with a technical accent.

**High-stakes: where it fails hardest**

Now may be a good time to shift to where this really matters. In **medicine**, plausible agreement can short-circuit clinical reasoning. A medical student presents a diagnosis. The AI confirms it, adding supporting details that sound authoritative but are not grounded in the patient’s actual presentation. Furthermore, learners and clinicians can anchor on a premature explanation, and a model that confirms rather than probes can amplify error. The World Health Organization underscores the importance of transparency, accountability, and sustained human oversight of AI in health, noting that failures can lead to harm (World Health Organization, 2021).

In **education**, sycophancy is pedagogically corrosive. At its core, students learn through feedback and correction. If an AI tutor affirms misunderstandings, it reinforces misconceptions and inflates confidence. A student submits an essay with a flawed thesis. The AI responds with praise and minor edits, never addressing the underlying conceptual error.

In **leadership and policy** contexts, agreement can amplify blind spots. A system that repeatedly mirrors a leader’s assumptions becomes a confidence machine rather than a thinking partner. For example, a manager asks the AI to analyze market data, framing the question with an implicit conclusion already embedded. The AI complies, presenting analysis that confirms the manager’s view while omitting contradictory signals. In complex environments, the cost is not only wrong decisions. It is the loss of early warning signals that something deserves scrutiny.

**Humans in the loop**

It is tempting to blame the model. But sycophancy is a human-machine co-production. We are psychologically primed to prefer confirmation over correction. We avoid cognitive dissonance and reward supportive tone. RLHF pipelines inherit that preference structure. They reflect what we reward at scale, not what we say we value (Allahverdyan & Galstyan, 2014; Ouyang et al., 2022). If we want models that help us think, we need feedback processes that can tolerate respectful friction or disagreement.

**What better alignment could look like**

Better **alignment** is not about training models to play devil’s advocate or contradict users reflexively. **The goal is different: we need systems that seek truth even when truth is inconvenient, uncomfortable, or simply uncertain.**

**What would that look like in practice?** A model asks clarifying questions before rushing to conclusions. It requests evidence when claims sound suspicious. It expresses genuine uncertainty rather than false confidence. And yes, it disagrees respectfully when disagreement is warranted. These behaviors are more challenging to reward during training because they feel less smooth, less immediately satisfying. But they are also more helpful.

**Measurement matters here.** If we cannot reliably detect sycophancy, we cannot train against it. Recent benchmarking work provides better tools. Hong et al. (2025) developed multi-turn evaluation methods that simulate real conversational pressure, in which a user repeatedly insists that the model is wrong. If a model changes its stance across those turns without new evidence appearing, that is a problem we can now measure and track.

**Design choices shape how disagreement is received by users.** We advocate productive friction that does not have to feel hostile. In an ideal setting, a system can validate someone’s emotional experience while still questioning their factual premise. It can explain briefly why it disagrees rather than simply refusing. It can cite sources or acknowledge when it is drawing on general knowledge rather than verified information. These are minor adjustments, but they change how the challenge is received.

The question is whether we are willing to optimize for these behaviors, even when they score lower on short-term user satisfaction.

**Designing AI that knows when to disagree**

Practical implementation requires more than good intentions. Systems need clear signaling when a model is uncertain or contesting a claim. A diagnostic panel in clinical AI might flag when the model’s confidence level drops below a threshold, or when multiple conflicting diagnoses have similar probability scores.

However, user education matters. People need to understand that challenge is a feature, not a failure. When an AI assistant says, “I notice your premise conflicts with current evidence,” that is not rudeness; it is the system doing what it was designed to do.

In high-stakes deployments, such as schools, government, businesses, and medical centers, institutions can also build workflow guardrails, including independent double-checks, required citation fields for generated claims, and clear escalation paths when a model signals uncertainty or potential harm. These are not technical fixes. They are organizational norms that recognize AI as a thinking tool rather than an agreeable assistant.

**References**

Allahverdyan, A. E., & Galstyan, A. (2014). Opinion dynamics with confirmation bias. PLOS ONE, 9(7), e99557\. <https://doi.org/10.1371/journal.pone.0099557>

Hong, Y., Liu, Z., Chen, J., Zhang, Y., & Choi, J. D. (2025). Measuring sycophancy of language models in multi-turn dialogues. In Findings of the Association for Computational Linguistics: EMNLP 2025 (pp. 2239–2259). Association for Computational Linguistics. <https://aclanthology.org/2025.findings-emnlp.121/>

Miao, F., & Holmes, W. (2023). Guidance for generative AI in education and research. UNESCO. <https://unesdoc.unesco.org/ark:/48223/pf0000386693>

Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell, A., Welinder, P., Christiano, P., Leike, J., & Lowe, R. (2022). Training language models to follow instructions with human feedback. In S. Koyejo, S. Mohamed, A. Agarwal, D. Belgrave, K. Cho, & A. Oh (Eds.), Advances in Neural Information Processing Systems 35 (NeurIPS 2022) (pp. 27730–27744). Curran Associates. <https://arxiv.org/abs/2203.02155>

Perez, E., Ringer, S., Lukosiute, K., Nguyen, K., Chen, E., Heiner, S., Pettit, C., Olsson, C., Kundu, S., Kadavath, S., Jones, A., Chen, A., Mann, B., Israeli, B., Seethor, B., McKinnon, C., Olah, C., Yan, D., Amodei, D., Hallacy, C., Goh, G., Kroeger, B., Yang, G., Liu, J., Bernstein, J., Askell, A., Rasch, A., Elhage, N., Bai, Y., & Kaplan, J. (2022). Discovering language model behaviors with model-written evaluations. arXiv. <https://arxiv.org/abs/2212.09251>

Sharma, M., Tong, M., Korbak, T., Duvenaud, D., Askell, A., Bowman, S. R., Cheng, N., Durmus, E., Hatfield-Dodds, Z., Johnston, S. R., Kravec, S., Maxwell, T., McCandlish, S., Ndousse, K., Rausch, O., Schiefer, N., Yan, D., Zhang, M., & Perez, E. (2023). Towards understanding sycophancy in language models. arXiv. <https://arxiv.org/abs/2310.13548>

**Further Reading: AI Alignment and RLHF Research**

For readers interested in exploring the technical foundations and broader implications of AI alignment and reinforcement learning from human feedback, the following resources provide valuable depth:

**Foundational RLHF Research**

Christiano, P. F., Leike, J., Brown, T., Martic, M., Legg, S., & Amodei, D. (2017). **Deep reinforcement learning from human preferences. In Advances in Neural Information Processing Systems** 30 (NIPS 2017) (pp. 4299–4307). <https://arxiv.org/abs/1706.03741>

_• The original paper introducing RLHF as a scalable method for training AI systems from human feedback._

Stiennon, N., Ouyang, L., Wu, J., Ziegler, D., Lowe, R., Voss, C., Radford, A., Amodei, D., & Christiano, P. F. (2020). **Learning to summarize with human feedback. In Advances in Neural Information Processing Systems** 33 (NeurIPS 2020) (pp. 3008–3021). <https://arxiv.org/abs/2009.01325>

_• Demonstrates RLHF applied to summarization, showing both benefits and early hints of alignment challenges._

**Sycophancy Measurement and Evaluation**

Wei, J., Huang, D., Lu, Y., Zhou, D., & Le, Q. V. (2023). **Simple synthetic data reduces sycophancy in large language models**. arXiv. <https://arxiv.org/abs/2308.03958>

_• Proposes mitigation strategies using synthetic training data to reduce sycophantic behavior._

Fanous, A., Denison, C., & Lin, S. (2025). **SycEval: A benchmark for evaluating large language model sycophancy**. arXiv. <https://arxiv.org/abs/2502.08177>

_• Introduces evaluation frameworks for measuring progressive and regressive sycophancy._

**Alignment Research and Challenges**

Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., & Kaplan, J. (2022). **Constitutional AI: Harmlessness from AI feedback**. arXiv. <https://arxiv.org/abs/2212.08073>

_• Explores methods for reducing harmful outputs through AI-generated feedback, addressing some RLHF limitations._

Leike, J., Krueger, D., Everitt, T., Martic, M., Maini, V., & Legg, S. (2018). **Scalable agent alignment via reward modeling: A research direction**. arXiv. <https://arxiv.org/abs/1811.07871>

_• Outlines research directions for aligning increasingly capable AI systems._

## **Recommended Starting Points**

**For readers new to these topics:**

1\. Start with Cotra (2021) for an accessible overview

2\. Read Ouyang et al. (2022) to understand RLHF mechanics

3\. Follow with Sharma et al. (2023) for sycophancy specifics

**For technical practitioners:**

4\. Christiano et al. (2017) for RLHF foundations

5\. Perez et al. (2022) for evaluation methods

6\. Wei et al. (2023) for mitigation strategies

**For policy and governance professionals:**

7\. WHO (2021) and Miao & Holmes (2023) for domain guidance

8\. Mökander et al. (2023) for auditing frameworks

[Confirmation Bias](/tag/confirmation-bias?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Sycophancy](/tag/sycophancy?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[AI](/tag/ai?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Agreement](/tag/agreement?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[](/@neriasebastien?source=post%5Fpage---post%5Fauthor%5Finfo--f46b9c9dc5ee---------------------------------------)

[](/@neriasebastien?source=post%5Fpage---post%5Fauthor%5Finfo--f46b9c9dc5ee---------------------------------------)

[Written by Neria Sebastien](/@neriasebastien?source=post%5Fpage---post%5Fauthor%5Finfo--f46b9c9dc5ee---------------------------------------)

[60 followers](/@neriasebastien/followers?source=post%5Fpage---post%5Fauthor%5Finfo--f46b9c9dc5ee---------------------------------------)

·[68 following](/@neriasebastien/following?source=post%5Fpage---post%5Fauthor%5Finfo--f46b9c9dc5ee---------------------------------------)

Subscribe to my YouTube channel: <https://www.youtube.com/@TheLearning%5FStrategist>

## No responses yet

[Help](https://help.medium.com/hc/en-us?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Status](https://status.medium.com/?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[About](/about?autoplay=1&source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Careers](/jobs-at-medium/work-at-medium-959d1a85284e?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Press](mailto:pressinquiries@medium.com)

[Blog](https://blog.medium.com/?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Privacy](https://policy.medium.com/medium-privacy-policy-f03bf92035c9?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Rules](https://policy.medium.com/medium-rules-30e5502c4eb4?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Terms](https://policy.medium.com/medium-terms-of-service-9db0094a1e0f?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

[Text to speech](https://speechify.com/medium?source=post%5Fpage-----f46b9c9dc5ee---------------------------------------)

```json
{"@context":"https://schema.org","@id":"https://medium.com/@neriasebastien/when-ai-agrees-too-much-sycophancy-alignment-and-the-quiet-cost-of-being-helpful-f46b9c9dc5ee","@type":"SocialMediaPosting","image":["https://miro.medium.com/0*9FUINr-09xZKW5xN"],"url":"https://medium.com/@neriasebastien/when-ai-agrees-too-much-sycophancy-alignment-and-the-quiet-cost-of-being-helpful-f46b9c9dc5ee","dateCreated":"2025-12-30T20:57:26Z","datePublished":"2025-12-30T20:57:26Z","dateModified":"2025-12-30T20:57:26Z","headline":"When AI Agrees Too Much: Sycophancy, Alignment, and the Quiet Cost of Being Helpful","name":"When AI Agrees Too Much: Sycophancy, Alignment, and the Quiet Cost of Being Helpful","description":"When AI Agrees Too Much: Sycophancy, Alignment, and the Quiet Cost of Being Helpful Why preference-trained assistants can become flattering mirrors, and how to design for epistemic responsibility …","identifier":"f46b9c9dc5ee","author":{"@context":"https://schema.org","@id":"https://medium.com/@neriasebastien","@type":"Person","identifier":"neriasebastien","name":"Neria Sebastien","url":"https://medium.com/@neriasebastien"},"creator":{"@context":"https://schema.org","@id":"https://medium.com/@neriasebastien","@type":"Person","identifier":"neriasebastien","name":"Neria Sebastien","url":"https://medium.com/@neriasebastien"},"publisher":{"@context":"https://schema.org","@type":"Organization","@id":"https://medium.com","name":"Medium","url":"https://medium.com","logo":{"@type":"ImageObject","width":500,"height":110,"url":"https://miro.medium.com/v2/resize:fit:500/7%2AV1_7XP4snlmqrc_0Njontw.png"}},"mainEntityOfPage":"https://medium.com/@neriasebastien/when-ai-agrees-too-much-sycophancy-alignment-and-the-quiet-cost-of-being-helpful-f46b9c9dc5ee","isAccessibleForFree":true}
```
