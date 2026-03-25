# "Check My Work?" Measuring Sycophancy in a Simulated Educational Context

Chuck Arvin∗† carvin@usc.edu USC Gould School of Law Los Angeles, California, USA

# ABSTRACT

This study examines how user-provided suggestions affect Large Language Models (LLMs) in a simulated educational context, where sycophancy poses significant risks. Testing five different LLMs from the OpenAI GPT-4o and GPT-4.1 model classes across five experimental conditions, we show that response quality varies dramatically based on query framing. In cases where the student mentions an incorrect answer, the LLM correctness can degrade by as much as 15 percentage points, while mentioning the correct answer boosts accuracy by the same margin. Our results also show that this bias is stronger in smaller models, with an effect of up to 30% for the GPT-4.1-nano model, versus 8% for the GPT-4o model. Our analysis of how often LLMs "flip" their answer, and an investigation into token level probabilities, confirm that the models are generally changing their answers to answer choices mentioned by students in line with the sycophancy hypothesis. This sycophantic behavior has important implications for educational equity, as LLMs may accelerate learning for knowledgeable students while the same tools may reinforce misunderstanding for less knowledgeable students. Our results highlight the need to better understand the mechanism, and ways to mitigate, such bias in the educational context.

#### CCS CONCEPTS

• Computing methodologies → Natural language processing; Machine learning; • Applied computing → Computerassisted instruction; Education; • Social and professional topics → Computing education.

#### KEYWORDS

Large Language Models, Sycophancy, Educational Technology, Machine Learning Bias, Human-AI Interaction, Educational Equity, ChatGPT

KDD EAI 2025, August 3 - 7, 2025, Toronto, ON, Canada

© 2025 Association for Computing Machinery.

ACM ISBN 978-x-xxxx-xxxx-x/YY/MM. . . $15.00

https://doi.org/10.1145/nnnnnnn.nnnnnnn

#### ACM Reference Format:

Chuck Arvin. 2025. "Check My Work?" Measuring Sycophancy in a Simulated Educational Context. In Proceedings of KDD Workshop on Ethical Artificial Intelligence: Methods and Applications (EAI) 2025 (KDD EAI 2025). ACM, New York, NY, USA, 5 pages. https://doi.org/10.1145/nnnnnnn.nnnnnnn

#### 1 INTRODUCTION

Large Language Models (LLMs) have demonstrated remarkable capabilities across diverse tasks, but may exhibit biases that impact their reliability. One concerning bias is sycophancy — the tendency for LLMs to agree with or defer to user suggestions, even when those suggestions are incorrect. It is critical to understand how user framing impacts model performance.

Sycophancy has especially important implications in the educational context. LLMs can provide individualized feedback and instruction to each student. But there is a risk that students may inadvertently frame questions with incorrect premises. LLMs prone to sycophancy may reinforce these misconceptions rather than correct them, potentially undermining educational equity by accelerating learning for knowledgeable students while hindering less knowledgeable ones.

In this study, we systematically investigate how user-provided suggestions affect LLM performance across five modern LLMs from OpenAI, the GPT-4o and GPT-4.1 model families. Our findings reveal substantial performance variations based solely on how users frame their queries. When users mention the correct answer, model accuracy improves by up to 15 percentage points compared to control conditions; conversely, when users mention incorrect answers, performance can degrade by the same margin. Our analysis shows that more advanced models show greater resilience to user suggestions, but also shows that newer and "better" models like GPT-4.1 show larger sycophancy effects than older models like GPT-4o. To confirm that these degradations are in line with our hypothesized sycophancy effect, we examine how often the LLM generated answers flip to a user suggested option, as well as how much the token level probabilities shift toward a user suggested option, to demonstrate that the LLMs are generally changing their answers to answer choices mentioned by the user.

#### 2 RELATED WORK

Our work here focuses on sycophancy in large language models (LLMs). Sycophancy is a behavior where "models tailor their responses to follow a human user's view even when that view is not objectively correct" [17]. While the exact mechanism for why this sycophantic behavior exists is still debated, this behavior is well-documented, with several papers developing techniques to measure and mitigate such bias [10, 15, 17].

<sup>∗</sup>This work does not relate to the author's position at Amazon. All views expressed are the author's own.

<sup>†</sup>Generative AI disclosure: Claude was used to provide copy-editing feedback and to improve the code used for data visualization.

Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than ACM must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from permissions@acm.org.

Sharma et al., for example, demonstrate that LLMs conform their answers to support ideas the user likes, answer incorrectly when the user suggests an incorrect answer, or second guess their own correct answers when the user expresses doubt [15]. But they also show signs of hope - for example, the most performant LLM examined in that study (GPT-4) exhibited the least sycophantic behavior.

In education, LLMs offer potential for individualized learning and feedback [8], helping students overcome conceptual obstacles [16], and improving teaching resources [7]. However, sycophancy poses special risks in this context. Students are non-experts on a topic, and will bring misconceptions or erroneous reasoning. Effective educators must correct these misconceptions, but sycophantic LLMs may reinforce these misconceptions instead. This dynamic may undermine educational equity - more knowledgeable students benefit from technology that helps them accelerate their learning, while less knowledgeable students are hindered by technology that reinforces their misconceptions instead.

Getting this right is critical, as the widespread and rapid adoption of generative AI tools in the educational setting represents a massive technological intervention. For example, a recent survey found that "54% of students use AI on a weekly basis", and schools and educators are experimenting with new applications [2]. Meanwhile, educational setbacks can have long-lasting negative effects on students and the economy. For example, education economists have shown that better teachers and instruction lead to long-term gains in lifetime income [1, 5]. The COVID pandemic serves as a cautionary tale, where sudden changes to the educational process led to significant learning losses which may harm student's future personal and economic success [4, 9, 14].

Our work aims to measure the risk of LLM sycophancy effects in the educational setting. We build on experiments in [15], but we take several steps to improve the relevance of our results. First, we aim to enhance the ecological validity of our results by using simpler, natural sounding prompts for an educational setting. Second, we examine a more modern class of LLMs to understand how much this behavior persists today. Third, we utilize the MMLU dataset which allows us to focus our empirical results on actual questions used in educational settings [6].

In addition to our code and data (repository link), our contributions include:

- We present a novel experimental design using simple prompts to simulate how students might interact with an LLM in an educational setting.
- We demonstrate that these prompts introduce substantial bias in LLM accuracy. When students mention the correct answer, the GPT-4.1-nano model answers may be as much as 15% more accurate, and vice versa.
- We show that these observed changes are consistent with the hypothesized sycophancy mechanism. We show, for example, that GPT-4.1 changes to an answer suggested by the user on 6% of all questions.
- We also inspect the raw token-level probabilities of the GPT-4.1-nano model, and show that user-suggested options lead to large shifts in these token level probabilities. These

shifts are in line with our hypothesized sycophancy mechanism, and may help explain why more capable models tend to show lesser sycophancy effects.

# 3 EXPERIMENTAL DESIGN

We aim to measure how much effect subtle user prompts can shape the accuracy of the LLM answers. In line with the literature, we expect to see this sycophancy effect show up when the LLM seeks to conform its answer to ones suggested by the user. Further, we expect that to manifest in heightened accuracy when the user suggests the right answer, and worsened accuracy when the user suggests the wrong answer.

Our analysis uses the Massive Multitask Language Understanding (MMLU) dataset. This dataset consists of 14,042 unique question and answer prompts with a labeled correct answer. As the name suggests, the MMLU dataset covers a wide variety of domains, including history, mathematics and professional law, with a total of 57 different subjects. For all evaluations, we assume that the MMLU correct answer is indeed correct allowing us to measure accuracy programatically.

We acknowledge that the MMLU dataset is imperfect - researchers like [3] find that MMLU ground truth labels are incorrect in about 6.5% of cases. Further, it is possible that the models under examination here have been trained on these questions, inflating their performance. But we are less interested in the absolute performance of these models, and more interested in how that performance changes as we experimentally vary the prompt. If anything, these should bias against finding sycophancy effects - after all, a model which has been trained on this exact question should be more confident about the correct answer, and less likely to follow user cues.

Our goal is to mimic situations where a student might interact with these LLM tools. We test five different conditions, one control and four variations. These variations aim to measure different ways that a student might interact with these models to get feedback on a particular answer choice, or to think through multiple options.

- Control does not mention specific answer choices.
- Correct Comparison: "I'm thinking it's either Correct or Incorrect."
- Incorrect Comparison: "I'm thinking it's either Incorrect or Incorrect."
- Correct Suggestion: "Is it Correct?"
- Incorrect Suggestion: "Is it Incorrect?"

To ensure prompts sound natural and to avoid ordering effects, options are presented in alphabetical order. Figure 1 shows the basic template for each question. Experimental conditions are placed at the start of the prompt.

We utilize five distinct LLMs from OpenAI (GPT-4o-mini, GPT-4o, GPT-4.1-nano, GPT-4.1-mini and GPT-4.1). These models were selected to further enhance ecological validity. While users may have many model options available, including Gemini, Deepseek and Claude, OpenAI models currently hold the largest market share - for example, "ChatGPT had 10x mobile app weekly active users compared to Gemini and Claude combined as of March." [18]. OpenAI models are also routinely used in cutting-edge research on the use of Generative AI [7, 19].

[Experimental Condition, if any] What's the right answer? Please respond with the letter only (A, B, C, or D). The tendency for migration to decrease with distance is called A. push factors.

B. pull factors.

C. distance decay.

D. migration selectivity.

![](_page_2_Figure_6.jpeg)

We cannot perfectly replicate the full ChatGPT experience as OpenAI does not offer the model for batch inference at scale, and we do not have the full system prompts behind ChatGPT. But we can approximate it by studying the behavior of the GPT-4o model, described as the "best model for most tasks" and the GPT-4.1 model, the "flagship model for complex tasks" [12, 13]. We also test the "mini" and "nano" versions of these models - while these models are less capable, they are much more affordable and recommended as cost-effective options for simpler applications prioritizing low latency and high throughput. OpenAI also sometimes utilizes these smaller models for ChatGPT users without a subscription, meaning that many students may receive answers from these smaller models [11].

We run all of the 14,042 MMLU questions under each of the 5 experimental conditions, for a total of 350,000 distinct Q&A results. LLMs respond in varying formats - to enable programmatic parsing of the answers, we utilize a regular expression to extract the first letter from the set [A-D]. We compute model accuracy, measuring how often the LLM identifies the correct answer choice programatically.

# 4 EMPIRICAL RESULTS

First, we examine how accurate the LLM answers are under the different conditions tested. We show overall accuracy results for all models and conditions tested in Figure 2. We see generally high accuracy in the control condition, ranging from 68% (GPT-4.1-nano) to 84% (GPT-4o and GPT-4.1). The micro and nano versions show lower accuracy, though still generally suggest the correct answer in the control condition. Finally, we see that accuracy can diverge, often substantially, under the experimental conditions.

To better understand those changes, we show the change in accuracy relative to the control condition for all models and prompts tested in Figure 3. Cases where the student suggests the correct answer result in much higher observed accuracy, up to +14.7% (GPT-4.1-nano). When the student mentions an incorrect answer, accuracy degrades by up to -15% (GPT-4.1-nano). We see stronger sycophancy effects for smaller models - the effects are generally much larger for the mini and nano versions of each model, as compared to the full models. We also see, surprisingly, a degradation over time. While the GPT-4.1 model is generally more capable than GPT-4o and was released nearly a year later, the GPT-4.1 model shows more sycophancy effects rather that less.

![](_page_2_Figure_12.jpeg)

Figure 2: Accuracy by model and condition. Under the control condition, models identify the correct answer 70 - 80% of the time. Accuracy varies under the experimental conditions.

![](_page_2_Figure_15.jpeg)

Figure 3: Difference in accuracy from control by condition. Across all models, accuracy improves when the user mentions the correct answer and degrades when they mention incorrect answers.

# 4.1 Results by Task

To get a better sense of the impact of this effect on educational settings, we examine the accuracy results for any of the different subjects in the MMLU dataset which refernce "high school" or "college" subjects. In Figure 4, we analyze the performance for the GPT-4.1 model as before but split by each subject examined. While the exact sample size in each subject varies, it is notable that we see a similar sycophancy effect across all of these educational subjects. In almost every case, the "correct comparison" and "correct suggestion" conditions lead to improved model performance, while the opposite happens when the student suggests an incorrect answer.

#### KDD EAI 2025, August 3 - 7, 2025, Toronto, ON, Canada Chuck Arvin

![](_page_3_Figure_2.jpeg)

Figure 4: Change in accuracy by subject for the **GPT 4.1** model. Sycophancy effects are observed in almost all subjects tested.

#### 5 IS THIS MEASURING SYCOPHANCY?

While we see large changes, are we confident these changes are due to sycophancy? We answer this question in two ways. First, we measure the "flip rate" metric described in [10]. In this case, the control condition defines the base LLM answer and we measure how often the LLM changes its answer to the student suggestion, or to some other answer choice. Table 1 shows these results. Note that most models do change their answers frequently - under these conditions, the answer changes in as many as 10 - 20% of questions. When the models change their answer, they typically do change their answer to one of the options suggested by the user.

| Model ID | Flipped Away | Flipped To | No Change |
| --- | --- | --- | --- |
| gpt-4.1-2025-04-14 | 1.7% | 6.2% | 92.1% |
| gpt-4.1-mini-2025-04-14 | 2.2% | 10.3% | 87.4% |
| gpt-4.1-nano-2025-04-14 | 2.8% | 18.8% | 78.4% |
| gpt-4o-2024-08-06 | 2.6% | 4.4% | 93.0% |
| gpt-4o-mini-2024-07-18 | 2.1% | 10.8% | 87.2% |

Table 1: Flip rate by model and condition. When models change their answer, they generally (but not always) flip to the answers suggested by the user.

Next, we extract the raw log probabilities for this task for the GPT-4.1-nano model. These token probabilities give a measure of how likely the model was to select each of the four proposed options - not just the single likeliest option. For every Question/Token pair, we first measure the probability of selecting that token under the control setting. Then we also measure the probability of selecting that token under each of the experimental conditions.

To illustrate, we show the raw token level probabilities for one particular question, question 0 of the MMLU test dataset. The correct answer is B, and in the control setting the model correctly identifies this, selecting B with a token probability of 63.7%. But

when the user mentions incorrect answer choices, the probability mass shifts to match those answers. In this case, the same model given the same question produces answers for B, C and D - depending on how the user asks the question.

|  | Control | Incorrect (A and D) | Incorrect (C) |
| --- | --- | --- | --- |
| A | 0% | 0% | 0% |
| B | 63.7% | 0% | 1% |
| C | 20.7% | 0% | 98.9% |
| D | 14.2% | 99.9% | 0% |

Table 2: Token level probabilities for question 0 when the user mentions incorrect answer choices. The correct answer is B and the control model identifies this. Mentioning incorrect choices in the prompts shifts the probabilities.

Figure 5 shows the distribution of token probabilities in cases where the user mentions the answer, and in cases where the user mentions other answers. Notably, tokens mentioned by the user generally have a higher probability of being selected, no matter how plausible the answer was originally. The same effect holds in reverse - when the user mentions other options instead, those tokens generally have meaningfully lower probability of being selected. These results support our hypothesis that the changes in model performance are driven by model sycophancy.

It is also worth noting that this sycophancy effect is somewhat nuanced. The LLMs are not simply replicating the answers suggested by users - after all, there are plenty of cases where the user mentions an answer and the LLM provides a different answer. As shown at the far left and right of Figure 5, there are regions where a token is so implausible or so likely that the LLMs are largely robust to changes in the user prompts. This finding may shed some light on explaining why, both in Sharma et al. [15] and here, we see that more capable models are less prone to these sycophancy effects. "Smarter" models may be better at distinguishing plausible and implausible answers, rendering them less susceptible to agreeing with the user about completely implausible options.

# 6 CONCLUSION AND FUTURE WORK

In this work, we have examined how user-provided suggestions impact LLM accuracy in a simulated educational context. Our results show substantial sycophancy effects - LLMs are meaningfully more likely to give the correct answers to students who mention the correct answer, while students who mention incorrect answers are much less likely to get the correct answer from the LLM. This effect holds across five different modern LLMs and across almost a variety of different subjects in the MMLU dataset. Our analysis shows that most of this effect stems from the models changing their answer to match the user suggestion. These findings highlight the importance of rigorously testing LLMs in critical applications, as subtle changes to the way users interact with these tools may create substantial biases in the quality of these tools.

We plan to extend this work in several ways. First, we plan to replicate this analysis on other standardized Q&A datasets, especially those with a focus on the educational context. We plan to test more realistic system prompts, as well as system prompts

#### "Check My Work?" Measuring Sycophancy in a Simulated Educational Context KDD EAI 2025, August 3 - 7, 2025, Toronto, ON, Canada

![](_page_4_Figure_2.jpeg)

Figure 5: Probability of selecting a particular token by user suggestion. Across all deciles, the probability of selecting a particular token tends to increase when the user mentioned it, and decreases when the user mentioned other options.

aimed specifically at mitigating model sycophancy. Finally, we also plan further exploration to identify a mechanism for cases where the LLM changes its answer away from the user suggestion - this was less frequently seen, but suggests an additional mechanism of interest to ensure these tools provide effective educational support.

#### REFERENCES

- [1] Raj Chetty, John N. Friedman, and Jonah E. Rockoff. 2014. Measuring the Impacts of Teachers II: Teacher Value-Added and Student Outcomes in Adulthood. American Economic Review (2014).
- [2] Digital Education Council. [n. d.]. What Students Want: Key Results from DEC Global AI Student Survey 2024. https://www.digitaleducationcouncil.com/post/ what-students-want-key-results-from-dec-global-ai-student-survey-2024
- [3] Aryo Pradipta Gema, Joshua Ong Jun Leang, Giwon Hong, Alessio Devoto, Alberto Carlo Maria Mancino, Rohit Saxena, Xuanli He, Yu Zhao, Xiaotang Du, Mohammad Reza Ghasemi Madani, Claire Barale, Robert McHardy, Joshua Harris, Jean Kaddour, Emile van Krieken, and Pasquale Minervini. 2025. Are We Done with MMLU? arXiv:2406.04127 [cs.CL] https://arxiv.org/abs/2406.04127
- [4] Clare Halloran, Rebecca Jack, James C. Okun, and Emily Oster. 2023. Pandemic Schooling Mode and Student Test Scores: Evidence from US States. American Economic Review: Insights (2023).
- [5] Eric A. Hanushek. 2011. The economic value of higher teacher quality. Economics of Education Review (2011).
- [6] Dan Hendrycks, Collin Burns, Steven Basart, Andy Zou, Mantas Mazeika, Dawn Song, and Jacob Steinhardt. 2021. Measuring Massive Multitask Language Understanding. arXiv:2009.03300 [cs.CY] https://arxiv.org/abs/2009.03300
- [7] Bihao Hu, Jiayi Zhu, Yiying Pei, and Xiaoqing Gu. 2025. Exploring the potential of LLM to enhance teaching plans through teaching simulation. https://www. nature.com/articles/s41539-025-00300-x
- [8] Enkelejda Kasneci, Kathrin Sessler, Stefan Küchemann, Maria Bannert, Daryna Dementieva, Frank Fischer, Urs Gasser, Georg Groh, Stephan Günnemann, Eyke Hüllermeier, Stephan Krusche, Gitta Kutyniok, Tilman Michaeli, Claudia Nerdel, Jürgen Pfeffer, Oleksandra Poquet, Michael Sailer, Albrecht Schmidt, Tina Seidel, Matthias Stadler, Jochen Weller, Jochen Kuhn, and Gjergji Kasneci. 2023. ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences 103 (2023), 102274. https://doi.org/10.1016/j. lindif.2023.102274
- [9] Megan Kuhfeld, James Soland, Karyn Lewis, Erik Ruzek, and Angela Johnson. 2022. The COVID-19 School Year: Learning and Recovery Across 2020- 2021. AERA Open 8 (2022), 23328584221099306. https://doi.org/10.1177/ 23328584221099306
- [10] Lars Malmqvist. 2024. Sycophancy in Large Language Models: Causes and Mitigations. arXiv:2411.15287 [cs.CL] https://arxiv.org/abs/2411.15287

- [11] OpenAI. 2025. ChatGPT Release Notes. https://help.openai.com/en/articles/ 6825453-chatgpt-release-notes
- [12] OpenAI. 2025. GPT-4.1. https://platform.openai.com/docs/models/gpt-4.1
- [13] OpenAI. 2025. GPT-4o. https://platform.openai.com/docs/models/gpt-4o
- [14] Santiago Pinto and John Bailey Jones. 2020. The Long-Term Effects of Educational Disruptions. https://www.richmondfed.org/publications/research/coronavirus/ economic_impact_covid-19_05-22-20
- [15] Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R. Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R. Johnston, Shauna Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang, and Ethan Perez. 2023. Towards Understanding Sycophancy in Language Models. arXiv:2310.13548 [cs.CL] https://arxiv.org/abs/2310.13548
- [16] Shen Wang, Tianlong Xu, Hang Li, Chaoli Zhang, Joleen Liang, Jiliang Tang, Philip S. Yu, and Qingsong Wen. 2024. Large Language Models for Education: A Survey and Outlook. arXiv:2403.18105 [cs.CL] https://arxiv.org/abs/2403.18105
- [17] Jerry Wei, Da Huang, Yifeng Lu, Denny Zhou, and Quoc V. Le. 2024. Simple synthetic data reduces sycophancy in large language models. arXiv:2308.03958 [cs.CL] https://arxiv.org/abs/2308.03958
- [18] Kyle Wiggers. 2025. ChatGPT isn't the only chatbot that's gaining users. https://techcrunch.com/2025/04/01/chatgpt-isnt-the-only-chatbot-thatsgaining-users
- [19] Yi-Miao Yan, Chuang-Qi Chen, Yang-Bang Hu, and Xin-Dong Ye. 2025. LLMbased collaborative programming: impact on students' computational thinking and self-efficacy. https://www.nature.com/articles/s41599-025-04471-1

