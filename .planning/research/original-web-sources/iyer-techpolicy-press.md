---
description: Prithvi Iyer considers three new research papers that offer new insights into AI sycophancy. 
title: What Research Says About &quot;AI Sycophancy&quot;
image: https://cdn.sanity.io/images/3tzzh18d/production/06d274c62693cab2dd98169c87e76537e74d13e6-1200x675.png
---

Analysis

# What Research Says About 'AI Sycophancy'

Prithvi Iyer / Oct 17, 2025



Deceptive Dialogues by Nadia Nadesan & Digit / [Better Images of AI](https://betterimagesofai.org/images?artist=NadiaNadesan&title=DeceptiveDialogues) / [CC by 4.0](https://creativecommons.org/licenses/by/4.0/)

In two previous research roundups for Tech Policy Press, I looked at studies that considered how AI chatbots affect [mental health](https://www.techpolicy.press/new-research-sheds-light-on-ai-companions/) and may encourage [addictive behaviors](https://www.techpolicy.press/ai-chatbots-and-addiction-what-does-the-research-say/). Research on these topics has found that AI chatbots that tend to affirm a user's belief (AI sycophancy) can foster more dependence on these chatbots, potentially having dangerous implications for users in the long run.

In this piece, I consider academic research that goes deeper into the “AI sycophancy” phenomenon. How do we evaluate sycophancy in models? What are its downstream impacts on users and their political beliefs? I look at three new research papers to find out more.

## **SycEval: Evaluating LLM Sycophancy**

**Date**: September 2025

**Authors**: Aaron Fanous, Jacob Goldberg, Ank Agarwal, Joanna Lin, Anson Zhou, Sonnet Xu, Vasiliki Bikia, Roxana Daneshjou, Sanmi Koyejo

**Published In:** [arXiv preprint](https://arxiv.org/)

#### **Overview**

This study provides a framework for evaluating “sycophantic behavior” in OpenAI’s GPT-4, Anthropic’s Claude-Sonnet, and Google’s Gemini-1.5-Pro. The study defines sycophancy as the tendency for AI chatbots to “sacrifice truthfulness for user agreement.”

#### **Why is this important?**

This study explores the prevalence of AI sycophancy in two contexts: mathematics and medicine. While mathematics “generally has more straightforward answers, allowing easier interrogation of sycophantic behavior,” studying sycophancy in healthcare provides a real-world case where sycophancy at the expense of accuracy can cause real harm. According to the authors, “sycophantic behavior in medical advice has yet to be explored in prior studies.”

Previous research on AI sycophancy has focused on what the researchers call regressive sycophancy, which is when the AI chatbot “conforms to an incorrect user belief.” However, in real-world interactions, the opposite could also occur, where the user provides an accurate statement, and the chatbot's agreement is the desired response, i.e, progressive sycophancy. This study examines both of these cases and also investigates the quality of rebuttals and how that influences AI sycophancy in order to “provide actionable insights for prompt design.”

#### **Key Results**

* 58.19% of all chatbot interactions included in the sample displayed sycophantic behaviour. Gemini had the highest sycophancy rate (62.47%), while ChatGPT had the lowest at 56.71%.
* The research found that the type of rebuttal used to change the chatbot’s answer affected the prevalence of sycophancy in chatbots. For instance, simple rebuttals that explicitly stated that the model was incorrect “maximized progressive sycophancy.” In contrast, citation-based rebuttals "exhibited the highest regressive rates.” This shows that citations appearing to be legitimate may lead the model to adopt incorrect beliefs (regressive sycophancy) while simple statements that tell the model it is wrong (simple rebuttals) lead the model to defer to user correction without requiring extensive justification.
* Preemptive rebuttals wherein users anticipate the chatbot to disagree and provide evidence in support of their claim, “elicit higher sycophancy rates (61.75%) than in-context rebuttals.” This shows that AI models tend to “prioritize surface-level user agreement over contextual reasoning.”

#### **Takeaways**

* The results from the medical advice dataset (MedQuad) showed that models can often conform to incorrect user beliefs and provide dangerous or misleading medical advice, highlighting the need for instituting robust safety layers for these models.
* Importantly, this study also shows that “including evidence in a user’s prompt increases the likelihood of model agreement.” While it is positive when the user is right, this may cause AI models to echo false beliefs when the user is wrong. Thus, the researchers make the case for models to “independently verify evidence rather than simply align with it.”

## **Sycophantic AI Decreases Prosocial Intentions and Promotes Dependence**

**Date:** October 2025

**Authors:** Myra Cheng, Cinoo Lee, Pranav Khadpe, Sunny Yu, Dyllan Han, Dan Jurafsky

Published In: arXiv[ preprint](https://arxiv.org/)

#### **Overview**

This paper explores the prevalence and downstream user impacts of AI sycophancy. To examine the prevalence of sycophantic behavior in AI models, the researchers looked at 11 state-of-the-art AI models and measured their “action endorsement rate – the proportion of model responses that explicitly affirm the user’s action – across large datasets” and compared those to “normative human judgments (via crowdsourced responses).”

To examine the impact of AI sycophancy on users, the researchers conducted “two pre-registered experiments (N = 1604), focusing on a setting with clear behavioral stakes: when users discuss interpersonal disputes with an AI,” and looked at how this interaction shaped user perceptions and their subsequent actions.

#### Our Content delivered to your inbox.

Join our newsletter on issues and ideas at the intersection of tech & democracy

Subscribe Loading... 

#### Thank you!

You have successfully joined our subscriber list.

#### **Why is this important**

According to the authors, this paper presents “the first empirical study” of AI sycophancy and its impact on users. To examine user impact, the researchers first conducted a randomized experiment where participants were provided with “hypothetical interpersonal dilemmas,” wherein “human consensus judged the user as wrong but GPT-4o suggested otherwise.” To see if sycophantic AI models shaped user perceptions in a real-world setting, the researchers also conducted a “live chat study where participants engage in extended conversations with an AI model in real time, discussing an interpersonal conflict from their own lives.” This approach ensures that findings are applicable to real-world settings and help inform chatbot design and AI safety policies.

#### **Results**

* Across 11 AI models that include “four proprietary models from OpenAI, Anthropic, and Google,” the study found that AI models “affirm users’ actions 50% more than humans do, and do so even in cases where user queries mention manipulation, deception, or other relational harms.”
* In terms of user impact, the researchers find that “participants who read or interacted with the sycophantic AI model rated themselves as more in the right compared to participants who read or interacted with the non-sycophantic AI model.”
* Participants engaging with sycophantic AI chatbots also reported less willingness to repair conflicts and “higher perceptions of their own rightness.” Researchers attribute this to the fact that sycophantic AI outputs are “less likely to mention the other person and considerations of their perspectives.”
* Participants consistently rated sycophantic AI responses as being higher in quality and more trustworthy.

#### **Takeaway**

Despite the dangers of AI sycophancy in altering user beliefs and, in certain cases, promoting false information, this research paper finds “clear user preference for AI that provides unconditional validation.”

## **Sycophantic AI increases attitude extremity and overconfidence**

**Date:** September 2025

**Authors:** Steve Rathje, Meryl Ye, Laura K. Globig, Raunak M. Pillai, Victoria Oldemburgo de Mello, Jay J. Van Bavel

Published In: [OSF preprints](https://osf.io/preprints/psyarxiv/vmyek%5Fv1)

#### **Overview**

This paper examines the “psychological consequences” of engaging with sycophantic AI chatbots, particularly concerning attitudes towards politically polarizing topics like gun rights and abortion. Before the experiments, participants were asked to indicate how much they support gun control and the certainty they have in their views. Then they were randomly assigned to either engage with an unprompted chatbot, a chatbot prompted to validate their beliefs (sycophantic AI), or a disagreeable chatbot meant to challenge their views.

#### **Why is this important**

Political attitudes have important real-world consequences, and this research examines whether and to what extent sycophantic AI shapes political attitudes and extremism through three separate studies.

* One study looked at how opinions on a politically polarizing topic of gun control were shaped by interacting with “sycophantic and non-sycophantic AI chatbots (powered by GPT-4o).”
* The second study tested whether results from the first study extended to other politically contentious topics like abortion, immigration, and universal healthcare.
* In the third experiment, the researchers tried to determine whether the effects of sycophancy were due to exposure to one-sided facts about a political issue or because users felt validated by the chatbot.

#### **Results**

* Interacting with the sycophantic chatbot “led to a 2.68 percentage point increase” in attitude extremity. In contrast, those who engaged with the disagreeable chatbot reported a “2.28-point decrease in extremity compared to the control condition.” Similarly, participants also reported a “4.04 percentage point increase in attitude certainty” when interacting with the sycophantic AI chatbot. Thus, chatbots trained to affirm a user’s belief lead to further entrenchment of those views and certainty in holding them.
* Contrary to what researchers predicted, engaging with the “unprompted” GPT-4 model did not significantly increase attitude extremity. This indicates that, in this experimental condition, the default GPT-4 model did not behave like a sycophantic chatbot.
* In the third experiment, the researchers try to disentangle “the effects of different components of sycophancy, such as validation versus the one-sided presentation of facts.” To do so, they included additional conditions: some users engaged with sycophantic AI bots that used facts to validate the user, while for others, facts were not provided by the sycophantic AI chatbot. The research found that “the sycophantic fact-providing chatbot led to increased attitude extremity compared to the disagreeable fact-providing chatbot.” However, there were no differences between “the sycophantic non-fact-providing chatbot and the disagreeable non-fact-providing chatbot,” indicating that, “AI chatbots primarily foster extremity via the selective provision of facts that support beliefs.”

#### **Takeaway**

This research paper showed that even brief interactions with sycophantic AI chatbots “lead to more extreme and certain beliefs — but greater enjoyment.” Thus, AI companies have a choice to make: create engaging chatbots that “foster echo chambers,” or create “less engaging AI systems that may be healthier for users and public discourse.”

## Authors



[Prithvi Iyer](/author/prithvi-iyer)

Prithvi Iyer is communications and research manager at the Penn Center on Media, Technology and Democracy. Previously, he was program manager at Tech Policy Press from 2023-2025\. He completed a Master's of Global Affairs from the University of Notre Dame, where he also served as Assistant Director o...

## Related

Analysis

[What Research Says About AI Chatbots and Addiction](/ai-chatbots-and-addiction-what-does-the-research-say)September 24, 2025

Analysis

[New Research Sheds Light on AI ‘Companions’](/new-research-sheds-light-on-ai-companions)August 15, 2025

Perspective

[AI Emotional Dependency and the Quiet Erosion of Democratic Life](/ai-emotional-dependency-and-the-quiet-erosion-of-democratic-life)May 7, 2025

Podcast

[AI Companions and the Law](/ai-companions-and-the-law)June 15, 2025

Perspective

[AI Companies’ Race for Engagement Has a Body Count](/ai-companies-race-for-engagement-has-a-body-count)August 28, 2025

## Topics

```json
{"@context":"https://schema.org","@type":"Article","datePublished":"2025-10-17T16:00:17.078Z","description":"Prithvi Iyer considers three new research papers that offer new insights into AI sycophancy. ","mainEntityOfPage":{"@type":"WebPage","@id":"https://techpolicy.press/what-research-says-about-ai-sycophancy"},"headline":"What Research Says About &apos;AI Sycophancy&apos;","dateModified":"2025-10-20T13:45:42Z","author":[{"@type":"Person","name":"Prithvi Iyer","url":"https://techpolicy.press/author/prithvi-iyer"}],"publisher":{"@type":"Organization","name":"Tech Policy Press","logo":{"@type":"ImageObject","url":"https://cdn.sanity.io/images/3tzzh18d/production/697d4cc6122b80fcb64b256d888010c242ce6beb-1200x675.png"}},"isAccessibleForFree":true}
```
