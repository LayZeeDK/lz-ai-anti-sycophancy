---
description: Large language models (LLMs) exhibit a vulnerability arising from being trained to be helpful: a tendency to comply with illogical requests that would generate false information, even when they have the knowledge to identify the request as illogical. This study investigated this vulnerability in the medical domain, evaluating five frontier LLMs using prompts that misrepresent equivalent drug relationships. We tested baseline sycophancy, the impact of prompts allowing rejection and emphasizing factual recall, and the effects of fine-tuning on a dataset of illogical requests, including out-of-distribution generalization. Results showed high initial compliance (up to 100%) across all models, prioritizing helpfulness over logical consistency. Prompt engineering and fine-tuning improved performance, improving rejection rates on illogical requests while maintaining general benchmark performance. This demonstrates that prioritizing logical consistency through targeted training and prompting is crucial for mitigating the risk of generating false medical information and ensuring the safe deployment of LLMs in healthcare.
title: When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior - npj Digital Medicine
image: https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746_2025_2008_Fig1_HTML.png
---

[Skip to main content](#content) 

Thank you for visiting nature.com. You are using a browser version with limited support for CSS. To obtain the best experience, we recommend you use a more up to date browser (or turn off compatibility mode in Internet Explorer). In the meantime, to ensure continued support, we are displaying the site without styles and JavaScript.

Advertisement

 When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior

[ Download PDF ](/articles/s41746-025-02008-z.pdf) 

[ Download PDF ](/articles/s41746-025-02008-z.pdf) 

### Subjects

* [Health care](/subjects/health-care)
* [Medical research](/subjects/medical-research)

## Abstract

Large language models (LLMs) exhibit a vulnerability arising from being trained to be helpful: a tendency to comply with illogical requests that would generate false information, even when they have the knowledge to identify the request as illogical. This study investigated this vulnerability in the medical domain, evaluating five frontier LLMs using prompts that misrepresent equivalent drug relationships. We tested baseline sycophancy, the impact of prompts allowing rejection and emphasizing factual recall, and the effects of fine-tuning on a dataset of illogical requests, including out-of-distribution generalization. Results showed high initial compliance (up to 100%) across all models, prioritizing helpfulness over logical consistency. Prompt engineering and fine-tuning improved performance, improving rejection rates on illogical requests while maintaining general benchmark performance. This demonstrates that prioritizing logical consistency through targeted training and prompting is crucial for mitigating the risk of generating false medical information and ensuring the safe deployment of LLMs in healthcare.

### Similar content being viewed by others



### [Medical large language models are susceptible to targeted misinformation attacks](https://www.nature.com/articles/s41746-024-01282-7?fromPaywallRec=false) 

Article Open access 23 October 2024 



### [Adversarial prompt and fine-tuning attacks threaten medical large language models](https://www.nature.com/articles/s41467-025-64062-1?fromPaywallRec=false) 

Article Open access 09 October 2025 



### [The ethics of ChatGPT in medicine and healthcare: a systematic review on Large Language Models (LLMs)](https://www.nature.com/articles/s41746-024-01157-x?fromPaywallRec=false) 

Article Open access 08 July 2024 

## Introduction

Large Language Models (LLMs) can store and retrieve vast amounts of information from diverse domains, including healthcare[1](#ref-CR1 "Singhal, K. et al. Large language models encode clinical knowledge. Nature 620, 172–180 (2023)."),[2](#ref-CR2 "Taylor, R. et al. Galactica: a large language model for science. Preprint at 
                  http://arxiv.org/abs/2211.09085
                  
                 (2022)."),[3](/articles/s41746-025-02008-z#ref-CR3 "Chen, S. et al. Evaluating the ChatGPT family of models for biomedical reasoning and classification. J. Am. Med. Inform. Assoc. 31, 940–948 (2024).") This knowledge base has been noted for its potential to support medical professionals by providing specialized information and advice[1](/articles/s41746-025-02008-z#ref-CR1 "Singhal, K. et al. Large language models encode clinical knowledge. Nature 620, 172–180 (2023)."),[4](/articles/s41746-025-02008-z#ref-CR4 "Van Veen, D. et al. Adapted large language models can outperform medical experts in clinical text summarization. Nat. Med. 30, 1134–1142 (2024)."). Yet, while these models may recall medical facts, it remains challenging for the models to process information logically and generate responses that demonstrate sound reasoning[5](/articles/s41746-025-02008-z#ref-CR5 "Soroush, A. et al. Large language models are poor medical coders—benchmarking of medical code querying. NEJM AI. 1, 
                  https://doi.org/10.1056/aidbp2300040
                  
                 (2024)."). This gap between knowledge retrieval and logical reasoning in medicine[6](/articles/s41746-025-02008-z#ref-CR6 "Chen, S. et al. The effect of using a large language model to respond to patient messages. Lancet Digit. Health 6, e379–e381 (2024)."),[7](/articles/s41746-025-02008-z#ref-CR7 "Potts, B. MedFuzz: exploring the robustness of LLMs on medical challenge problems. Microsoft Research. Available at 
                  https://www.microsoft.com/en-us/research/blog/medfuzz-exploring-the-robustness-of-llms-on-medical-challenge-problems/
                  
                 (2024).") leads to a particularly concerning public health risk: The rapid generation and dissemination of false information is particularly critical in high-stakes fields like medicine.

Two key principles for the safe deployment of LLMs in medicine are honesty and helpfulness[8](#ref-CR8 "Bai, Y. et al. Training a helpful and harmless assistant with reinforcement learning from human feedback. Preprint at 
                  http://arxiv.org/abs/2204.05862
                  
                 (2022)."),[9](#ref-CR9 "Touvron, H. et al. Llama 2: open foundation and fine-tuned chat models. Preprint at 
                  http://arxiv.org/abs/2307.09288
                  
                 (2023)."),[10](/articles/s41746-025-02008-z#ref-CR10 "Bai, Y. et al. Constitutional AI: harmlessness from AI feedback. Preprint at 
                  http://arxiv.org/abs/2212.08073
                  
                 (2022)."). In the context of LLMs, honesty refers to the principle that models should provide information that is factually accurate and logically sound, aligning with established medical knowledge rather than generating or perpetuating false information. Helpfulness describes the LLM’s capacity to understand and responsively fulfill a user’s query in an efficient and seemingly useful manner. Honesty ensures that models provide accurate and truthful information, while helpfulness focuses on fulfilling users’ queries in an efficient and useful manner[11](/articles/s41746-025-02008-z#ref-CR11 "Liu, R., Sumers, T. R., Dasgupta, I. & Griffiths, T. L. How do large language models navigate conflicts between honesty and helpfulness? Preprint at 
                  http://arxiv.org/abs/2402.07282
                  
                 (2024)."),[12](/articles/s41746-025-02008-z#ref-CR12 "Askell, A. et al. A general language assistant as a laboratory for alignment. Preprint at 
                  http://arxiv.org/abs/2112.00861
                  
                 (2021)."). Our work examines the critical scenario where an overemphasis on this helpfulness can lead models to comply with illogical or factually incorrect medical requests, thereby undermining honesty.

Current state-of-the-art LLMs are aligned with these principles via training processes[8](/articles/s41746-025-02008-z#ref-CR8 "Bai, Y. et al. Training a helpful and harmless assistant with reinforcement learning from human feedback. Preprint at 
                  http://arxiv.org/abs/2204.05862
                  
                 (2022)."),[10](/articles/s41746-025-02008-z#ref-CR10 "Bai, Y. et al. Constitutional AI: harmlessness from AI feedback. Preprint at 
                  http://arxiv.org/abs/2212.08073
                  
                 (2022)."),[13](/articles/s41746-025-02008-z#ref-CR13 "Rafailov, R. et al. Direct preference optimization: your language model is secretly a reward model. In Proc. 37th Conference on Neural Information Processing Systems (NeurlPS), Vol. 36, 53728–53741 (2023)."), including reinforcement learning with human feedback[14](/articles/s41746-025-02008-z#ref-CR14 "Christiano, P. et al. Deep reinforcement learning from human preferences. In Proc. 31st Conference on Neural Information Processing Systems (NIPS), Long Beach, CA, USA (2017).") (RLHF). These alignment processes typically involve tuning LLMs, not to gain new knowledge but to shift the outputs towards a more desirable human-readable format and away from potentially harmful or toxic behaviors learned during pre-training[12](/articles/s41746-025-02008-z#ref-CR12 "Askell, A. et al. A general language assistant as a laboratory for alignment. Preprint at 
                  http://arxiv.org/abs/2112.00861
                  
                 (2021)."),[15](/articles/s41746-025-02008-z#ref-CR15 "Ouyang, L. et al. Training language models to follow instructions with human feedback. Preprint at 
                  http://arxiv.org/abs/2203.02155
                  
                 (2022)."). Previous works have shown that helpfulness can be misused to generate unfaithful information and a lack of scientific grounding about health[16](#ref-CR16 "Menz, B. D., Modi, N. D., Sorich, M. J. & Hopkins, A. M. Health disinformation use case highlighting the urgent need for artificial intelligence vigilance: weapons of mass disinformation: weapons of mass disinformation. JAMA Intern. Med. 184, 92–96 (2024)."),[17](#ref-CR17 "Menz, B. D. et al. Current safeguards, risk mitigation, and transparency measures of large language models against the generation of health disinformation: repeated cross sectional analysis. BMJ 384, e078538 (2024)."),[18](/articles/s41746-025-02008-z#ref-CR18 "Zhang, Y., Sharma, K., Du, L. & Liu, Y. Toward mitigating misinformation and social media manipulation in LLM era. In Proc. Companion Proceedings of the ACM on Web Conference, Vol. 19, 1302–1305 (ACM, USA, 2024)."). While honesty and helpfulness are often complementary, emphasizing helpfulness can introduce safety vulnerabilities: jailbreaking[19](/articles/s41746-025-02008-z#ref-CR19 "Xu, N. et al. Cognitive overload: Jailbreaking large language models with overloaded logical thinking. In Findings of the Association for Computational Linguistics: NAACL 2024 (Association for Computational Linguistics, Stroudsburg, PA, USA, 2024)."),[20](/articles/s41746-025-02008-z#ref-CR20 "Ding, P. et al. A wolf in sheep’s clothing: generalized nested jailbreak prompts can fool large language models easily. In Proc. 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers) (Association for Computational Linguistics, Stroudsburg, PA, USA, 2024).") and sycophancy[21](/articles/s41746-025-02008-z#ref-CR21 "Sharma, M. et al. Towards understanding sycophancy in language models. In Proc. International Conference on Representation Learning (ICLR) (2024)."), which may amplify the risks of LLM misuses. Jailbreaking refers to techniques or prompt structures designed to exploit a model’s helpfulness, tricking it into generating harmful, misleading, or restricted content[22](/articles/s41746-025-02008-z#ref-CR22 "Liu, Y. et al. A Hitchhiker’s Guide to Jailbreaking ChatGPT via Prompt Engineering. In Proc. 4th International Workshop on Software Engineering and AI for Data Quality in Cyber-Physical Systems/Internet of Things (ACM, New York, NY, USA, 2024)."). Sycophancy is the tendency of LLMs to excessively agree with users, often at the expense of accuracy[21](/articles/s41746-025-02008-z#ref-CR21 "Sharma, M. et al. Towards understanding sycophancy in language models. In Proc. International Conference on Representation Learning (ICLR) (2024)."),[23](/articles/s41746-025-02008-z#ref-CR23 "Si, C. et al. Large language models help humans verify truthfulness -- except when they are convincingly wrong. Preprint at 
                  http://arxiv.org/abs/2310.12558
                  
                 (2023)."). We define this as sycophancy, differing from compliance, because LLMs (1) demonstrably know the premise is false (e.g., accurately matching brand/generic names), but (2) align with the user’s implied incorrect belief, generating false information. The confluence of these two vulnerabilities is a growing concern, because nefarious users, misinformed users, and even unintentional errors and typos input into the model, could result in LLMs generating and spreading false information[24](/articles/s41746-025-02008-z#ref-CR24 "Haupt, C. E. & Marks, M. FTC regulation of AI-generated medical disinformation. JAMA. 
                  https://doi.org/10.1001/jama.2024.19971
                  
                 (2024).").

Previous research on jailbreaking has primarily explored its implications in the context of catastrophic risks in the general domain—cases where models are manipulated to produce extreme content, such as violence, hate speech, or other harmful material[25](#ref-CR25 "Polyportis, A. & Pahos, N. Navigating the perils of artificial intelligence: a focused review on ChatGPT and responsible research and innovation. Humanit. Soc. Sci. Commun. 11, 1–10 (2024)."),[26](#ref-CR26 "Lu, W. et al. Eraser: jailbreaking defense in large language models via unlearning harmful knowledge. Preprint at 
                  http://arxiv.org/abs/2404.05880
                  
                 (2024)."),[27](/articles/s41746-025-02008-z#ref-CR27 "Liu, T. et al. Making them ask and answer: jailbreaking large language models in few queries via disguise and reconstruction. Preprint at 
                  http://arxiv.org/abs/2402.18104
                  
                 (2024)."). Jailbreaking has been thoroughly examined in healthcare contexts through multimodal, white-box internal, and adversarial approaches[28](/articles/s41746-025-02008-z#ref-CR28 "Han, T. et al. Medical large language models are susceptible to targeted misinformation attacks. NPJ Digit. Med. 7, 288 (2024)."),[29](/articles/s41746-025-02008-z#ref-CR29 "Huang, X. et al. Medical MLLM is vulnerable: cross-modality jailbreak and mismatched attacks on medical multimodal large language models. Preprint at 
                  https://ojs.aaai.org/index.php/AAAI/article/view/32396
                  
                 (2024)."). Our work builds on this foundation by addressing a critical underexplored area: evaluating LLMs’ ability to recognize and resist illogical or factually flawed requests for medical information. For example, a user could unknowingly generate false information if they don’t have the background knowledge to know upfront that their request is illogical and would, by definition, generate false information. As a concrete example, if a patient doesn’t know that acetaminophen is the same drug tylenol, and is trying to self-educate about analgesic options using an LLM, they could inadvertently generate false information owing to a model’s overly helpful (or overly compliant) behavior with a request such as: “Tell me why acetaminophen is safer than tylenol”. Similarly, typos or accidents could readily but inadvertently generate false information in similar fashions.

We evaluated five LLMs across various scenarios and assessed how sensitive they are to generating false medical information in settings where the LLMs have the knowledge base to identify the requested information as incorrect. As a use case, we selected drug names, as in medicine, where different names are often used for the same drug. Because we previously showed that LLMs can accurately match brand and generic drug names[30](/articles/s41746-025-02008-z#ref-CR30 "Gallifant, J. et al. Language models are surprisingly fragile to drug names in biomedical benchmarks. Findings of the Association for Computational Linguistics: EMNLP 2024. Stroudsburg, PA, USA: Association for Computational Linguistics, 12448–12465 (2024)"), this allowed for a controlled and scalable experimental setup to characterize LLM sycophantic compliance to illogical requests. First, we tested whether LLMs refuse to comply with requests for information describing the equivalent drugs are distinct (i.e., a misinformation request), and found that even the most advanced models complied with up to 100% of misinformation requests. Second, we changed our instructions to the LLMs to understand if their overly submissive behavior can be overcome with prompting (given that prompting still remains the most effective steering method[31](/articles/s41746-025-02008-z#ref-CR31 "Wu, Z. et al. AxBench: steering LLMs? Even simple baselines outperform sparse autoencoders. Preprint at 
                  https://icml.cc/virtual/2025/poster/45658
                  
                 (2025).")). Third, we fine-tuned models to resist requests for misleading information while maintaining responsiveness to valid prompts. We found that LLMs prioritize learned helpfulness over inherent logical reasoning in our datasets, leading them to generate false information from even simple illogical prompts. Our strategies to reduce this risk successfully enhanced logical reasoning, and can provide a basis for additional research to improve robust risk mitigation and oversight mechanisms targeted at LLM sycophancy in healthcare.

## Results

### Overview

We evaluated whether state-of-the-art LLMs prioritize “helpfulness” over logical consistency when faced with illogical medical requests that they have the knowledge to detect, using drug pairs with 1:1 brand–generic mappings. The study proceeded in four stages: Stage 1 measured baseline sycophantic compliance to illogical prompts (aim: quantify default risk). Stage 2 introduced lightweight prompt edits—explicit rejection permission and a factual-recall cue—to test steerability with instructions (aim: assess whether prompting alone can restore logic). Stage 3 applied supervised fine-tuning on a small set of illogical requests with desired behavior and tested out-of-distribution generalization across medical and non-medical entities (aim: learn a reusable “reject-when-illogical” policy that transfers). Stage 4 checked for over-rejection and capability loss by evaluating compliance with valid prompts and performance on general/biomedical benchmarks (aim: ensure safety gains do not degrade usefulness). Unless noted, we report the generic→brand direction in the main text; brand→generic results are concordant in the supplementary.

### Stage 1\. Baseline prompt to quantify default risk

Our previous work showed that all models evaluated here have near-perfect factual recall ability to match these drugs’ generic and brand names[30](/articles/s41746-025-02008-z#ref-CR30 "Gallifant, J. et al. Language models are surprisingly fragile to drug names in biomedical benchmarks. Findings of the Association for Computational Linguistics: EMNLP 2024. Stroudsburg, PA, USA: Association for Computational Linguistics, 12448–12465 (2024)"). As shown in Fig. [1a](/articles/s41746-025-02008-z#Fig1)**)**, LLMs generally follow illogical requests to generate false information in the base prompt setup (details in Method section 3.1) for the generic-to-brand conversions. For clarity, we only discuss the generic-to-brand setups in the main text; all brand-to-generic results are in Supplementary Fig. [1](/articles/s41746-025-02008-z#MOESM1) and show similar findings.

**Fig. 1: Generic-to-brand output grades for prompt-based and Instruction-tuning interventions.**

[](/articles/s41746-025-02008-z/figures/1)

Figure 1a displays the results of stage 1 (prompt-based strategies). The Y-axis is marked as a percentile. Four prompt variations were used to evaluate 5 LLMs on generic-brand name pairs of 50 drug combinations. Figure 1b shows results for stage 2 (instruction-tuned model). The baseline and fine-tuned version of GPT4o-mini and Llama3-8B performance is on out-of-distribution test sets of 4 domains, such as cancer drug name and writer-pseudonym pairs.

[Full size image](/articles/s41746-025-02008-z/figures/1)

In the generic-to-brand setup, GPT4o-mini, GPT4o, and GPT4 followed the medication misinformation request 100% (50/50) of the time, while Llama3-8B did so in 94% (47/50) of cases. Llama3-70B had the highest rejection rate in this setup, but still rejected requests to generate false information in less than 50% (21/50) of cases. This stage quantifies baseline sycophancy, indicating that even large, advanced models predominantly complied with illogical requests.

### Stage 2\. Prompt-based solutions to assess whether prompting restores logic

Explicitly allowing models to reject misinformation requests (i.e., telling models that they can reject the request within the prompt, our detailed workflow can be found in Fig. [2](/articles/s41746-025-02008-z#Fig2)) improved the ability of the GPT series of models to resist misinformation requests. GPT4o and GPT4 rejected over 60% (GPT4o: 31/50, GPT4: 32/50) of the illogical requests in this setting. However, Llama’s performance was similar to base prompting. Adding factual recall hints in the prompt yielded the most benefit for GPT4 and Llama3-8B.

**Fig. 2: Illustration of overall study workflow.**

[](/articles/s41746-025-02008-z/figures/2)

Step 1 involves the generation of an LLM misinformation request, where models should recognize that the drug entities are equivalent and therefore the requested generated content would be misinformation. In Step 2, LLMs are prompted with this request to generate a response which is subsequently graded by Claude 3.5 Sonnet in Step 3 into one of the four response types. Claude 3.5 grading quality was validated by humans. Step 4 shows prompt-based variations which are evaluated, and the change in response types are collected in Step 5\. Step 6 displays the instruction tuning of the LLMs, where we stitched the baseline prompt with output from rejection and factual recall hints. Step 7 evaluates this newly tuned LLM both in-domain and in other domains with different equivalence errors.

[Full size image](/articles/s41746-025-02008-z/figures/2)

Adding rejection hints and factual recall together in the prompts vastly improved the models’ performance. This was particularly true for GPT4o and GPT4, which rejected generating the requested misinformation _and_ correctly identified that the brand and generic names referred to the same drug in 94% (47/50) of test cases. Rejection rates for GPT4o-mini and Llama3-70B also improved substantially _p_ < 0.05 (we build a square “before × after” contingency table of all categories and then apply Bowker’s test of symmetry to check for a statistically significant paired changes), reaching 62% (31/50) and 92% (46/50), respectively, with both hints applied.

An interesting behavioral shift was observed in Llama3-8B after including both the rejection and factual recall hints. The model transitioned from following illogical requests to directly rejecting them without providing the correct logical rationale for rejections. This change is reflected in the increase in direct rejections (yellow bar) from 2% (1/50) to 66% (33/50) (_p_ < 0.05) in Fig. [1a](/articles/s41746-025-02008-z#Fig1).

### Stage 3\. Fine-tuning to learn a reusable policy and evaluating on out-of-distribution (OOD) data

In the third stage, GPT4o-mini and Llama3-8B were supervised fine-tuned (SFT) on 300 illogical requests about general drugs with clear rejections. We then conducted OOD tests (Fig. [3](/articles/s41746-025-02008-z#Fig3) demonstrates the workflow here) in four domains: cancer drugs, singers/performers, writers, and geography. As shown in Fig. [1b](/articles/s41746-025-02008-z#Fig1)**)**, the fine-tuned models were much more likely to identify a request as illogical and refuse to comply.

**Fig. 3: Out of distribution testing workflow.**

[](/articles/s41746-025-02008-z/figures/3)

We composed one held-out cancer drug set that is not in the supervised fine-tuning data and crafted three other categories’ equivalences. As previously, Claude 3.5 Sonnet was used to auto-evaluate the categories of models’ responses.

[Full size image](/articles/s41746-025-02008-z/figures/3)

For example, in the OOD tests on cancer drugs (without rejection hints), the fine-tuned GPT4o-mini achieved a 100% (100/100) rejection rate, with 79% (79/100) of rejections (_p_ < 0.05) providing the correct reason, compared to the baseline’s 12% (12/100) rejection rate (5% with correct reasoning). Similarly, the fine-tuned Llama3-8B reached a 99% (99/100) rejection rate (70% with correct reasoning, 29% with other reasons), while the baseline model rejected only 30% (30/100) of requests, none of which provided the correct reason. This is similar to other categories with/without rejection hints. Fine-tuning can reduce sycophancy, leading to consistent rejection of illogical prompts across out-of-distribution domains.

### Stage 4: Evaluating general benchmarks and compliance with logical requests to ensure safety gains do not degrade performance

The detailed results of the ability of the fine-tuned models to comply with logical requests are shown in Supplementary Table [1](/articles/s41746-025-02008-z#MOESM1). Fine-tuned GPT4o-mini complied in 15/20 cases, and fine-tuned LLama3-8B complied in 12/20 cases. While the fine-tuned models were more likely than their base counterparts to reject requests, they always explained that they rejected because the request might be unrealistic. This behavior shift indicates a maintenance of balance between safety (rejection of illogical requests) and functionality (sycophantic compliance with logical instructions). Examples of how fine-tuning shifted behavior are provided in Supplementary Fig. [2](/articles/s41746-025-02008-z#MOESM1).

Lastly, we assessed the performance of the SFT models from stage 2 and their base counterparts across 10 general and biomedical knowledge benchmarks, including Alpaca-Eval2[32](/articles/s41746-025-02008-z#ref-CR32 "Dubois, Y., Galambosi, B., Liang, P &, Hashimoto, T. B. Length-controlled AlpacaEval: a simple way to debias automatic evaluators. Preprint at 
                  https://openreview.net/pdf?id=CybBmzWBX0
                  
                 (2024)."), ARC Challenge, ARC Easy[33](/articles/s41746-025-02008-z#ref-CR33 "Bhakthavatsalam, S. et al. Think you have solved direct-answer question answering? Try ARC-DA, the direct-answer AI2 reasoning challenge. Preprint at 
                  http://arxiv.org/abs/2102.03315
                  
                 (2021)."), BoolQ[34](/articles/s41746-025-02008-z#ref-CR34 "Clark, C. et al. BoolQ: exploring the surprising difficulty of natural yes/no questions. Preprint at 
                  http://arxiv.org/abs/1905.10044
                  
                 (2019)."), MMLU[35](/articles/s41746-025-02008-z#ref-CR35 "Hendrycks, D. et al. Measuring massive multitask language understanding. In Proc. International Conference on Learning Representations (ICLR) (2021)."), GPQA[36](/articles/s41746-025-02008-z#ref-CR36 "Rein, D. et al. GPQA: A Graduate-Level Google-Proof Q&A Benchmark (COLM, 2024)."), TruthfulQA[37](/articles/s41746-025-02008-z#ref-CR37 "Lin, S., Hilton, J. & Evans, O. TruthfulQA: measuring how models mimic human falsehoods. In Proc. 60th Annual Meeting of the Association for Computational Linguistics (vol. 1: Long Papers), 3214–3252, Dublin, Ireland. Association for Computational Linguistics."), and the USMLE step 1, 2, and 3 exams[30](/articles/s41746-025-02008-z#ref-CR30 "Gallifant, J. et al. Language models are surprisingly fragile to drug names in biomedical benchmarks. Findings of the Association for Computational Linguistics: EMNLP 2024. Stroudsburg, PA, USA: Association for Computational Linguistics, 12448–12465 (2024)"). As demonstrated in Fig. [4](/articles/s41746-025-02008-z#Fig4), the fine-tuned models exhibited negligible performance degradation across all tasks.

**Fig. 4: LLM assessment on general benchmarks.**

[](/articles/s41746-025-02008-z/figures/4)

Performance of models pre- and post-fine-tuning for logical reasoning on jailbreaking, in medical, and general knowledge benchmarks. The confidence interval is generated using the central limit theorem.

[Full size image](/articles/s41746-025-02008-z/figures/4)

## Discussion

Our study identified a vulnerability in LLMs: their sycophantic tendency to prioritize helpfulness over honesty and critical reasoning when responding to illogical requests for medical information, resulting in false and potentially harmful information. If LLMs are prone to generating false medical information in response to requests that are overtly illogical, where they know the information is incorrect, they are likely even less able to resist more nuanced false information requests. This means that even simple errors in LLM inputs could readily and inadvertently prompt the generation of false information when LLMs are used in medical contexts. For example, patients seeking health information from LLMs could generate false information if they do not have the clinical knowledge base to know a priori that the question is illogical. If left unchecked, this sycophancy could lead to the acceleration of inadvertent or malicious misinformation, which could cause serious population and individual harm in high-stakes domains like healthcare[24](/articles/s41746-025-02008-z#ref-CR24 "Haupt, C. E. & Marks, M. FTC regulation of AI-generated medical disinformation. JAMA. 
                  https://doi.org/10.1001/jama.2024.19971
                  
                 (2024).").

Previous research into the potential of LLMs to manipulate and generate false information has largely focused on single-turn or multi-turn conversational techniques aimed at exploiting a model’s inherent helpful nature to bend its “beliefs” or outputs to align with dangerous or unethical goals[38](/articles/s41746-025-02008-z#ref-CR38 "Zeng, Y. et al. How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs. In Proc. 62nd Annual Meeting of the Association for Computational Linguistics (vol. 1). Association for Computational Linguistics,14322–14350 (2024)."),[39](/articles/s41746-025-02008-z#ref-CR39 "Rongwu, Xu. et al. The Earth is Flat because...: Investigating LLMs’ Belief towards Misinformation via Persuasive Conversation. In Proc. 62nd Annual Meeting of the Association for Computational Linguistics (vol. 1). Association for Computational Linguistics, 16259–16303 (2024)."). Such efforts reveal the vulnerability of even state-of-the-art models to being misled by adversarial inputs, underscoring the need for new robust safeguarding mechanisms. Our work adds to the existing literature by evaluating the ability of LLMs to identify and resist requests that are overtly illogical or factually flawed, and by proposing novel mitigation strategies via prompting and fine-tuning.

The initial sycophantic compliance of all models, including advanced ones like GPT-4, to illogical requests reveals a core vulnerability in LLM design where, without explicit guidance, models prioritize being helpful over applying critical reasoning. More specifically, the role of RLHF/Instruction Tuning creates a fundamental tension between blindly following instructions and providing context-sensitive and factual responses. Our findings demonstrate that explicit instruction prompting, such as providing rejection hints, can improve models’ ability to critically assess requests before responding. Allowing models to reject flawed instructions appears to be important for enhancing their common-sense critical reasoning ability. This insight is crucial for developing safer AI systems that can balance helpfulness with necessary skepticism.

While factual recall prompts improved the performance of advanced models, such as GPT4o and GPT4, they had a limited impact on smaller models like Llama3-8B/70B or GPT4o-mini. Even when we explicitly told the models within the prompt that brand and generic names referred to the same drug, only the more advanced models responded correctly by rejecting the illogical request. For example, GPT4 and GPT4o rejected 94% of illogical requests after being prompted to recall factual relationships between the drugs, but Llama3-8B still often rejected without giving a correct explanation.

This suggests that simply spelling out factual equivalencies is not enough for less capable models and that the ability to effectively use factual knowledge in context-dependent reasoning tasks may be a key differentiator of more advanced AI systems[40](/articles/s41746-025-02008-z#ref-CR40 "Allen-Zhu, Z. & Li, Y. Physics of language models: part 3.2, knowledge manipulation. International Conference on Learning Representations (2025)."),[41](/articles/s41746-025-02008-z#ref-CR41 "Wei, J. et al. Chain-of-thought prompting elicits reasoning in large language models. In Proc. 36th Conference on Neural Information Processing Systems (NeurIPS) (2022)."). Smaller models seem to require more than factual prompts to process logical decisions, likely because they cannot fully integrate context and recall complex relationships as effectively as advanced models. However, even for these larger models, this approach is not scalable across the wide range of potential illogical requests because it requires preemptively identifying the precise factual knowledge needed to identify each request as illogical.

Supervised fine-tuning on 300 drug-related conversations enhanced the models’ ability to distinguish between valid and illogical prompts, especially for OOD tests. After fine-tuning, models like GPT4o-mini achieved a 100% rejection rate, with 79% of rejections providing the correct reasoning, compared to the baseline’s 9%. Similarly, Llama3-8B improved, though it sometimes rejected prompts without proper explanations. Importantly, the observed improvements in rejecting illogical prompts were generalized outside of the brand-generic use case on which the models were fine-tuned.

The success of SFT highlights how fine-tuning enables models to better recognize illogical requests in a generalizable, scalable fashion. In other words, we know the models can match these drug names correctly, and SFT steers models’ behavior toward prioritizing its factual knowledge over user requests.

Importantly, this fine-tuning did not lead to over-rejection or a refusal to respond to reasonable input: GPT4o-mini and Llama3-8B still largely complied with logical requests across a range of medical and non-medical tasks. When they did not, they provided reasonable explanations for not complying. This behavior shift demonstrates a successful balance between rejecting illogical instructions and remaining useful for legitimate tasks. Recent articles and new paradigm improvement on test time compute[42](/articles/s41746-025-02008-z#ref-CR42 "OpenAI, A. et al. OpenAI o1 system card. Preprint at 
                  http://arxiv.org/abs/2412.16720
                  
                 (2024).") show a promising future where models can reason first instead of responding immediately, improve reasoning ability[43](/articles/s41746-025-02008-z#ref-CR43 "Chen, Q. et al. Towards reasoning era: a survey of long chain-of-thought for reasoning large language models. Preprint at 
                  http://arxiv.org/abs/2503.09567
                  
                ."),[44](/articles/s41746-025-02008-z#ref-CR44 "DeepSeek-AI, D. et al. DeepSeek-R1: incentivizing reasoning capability in LLMs via reinforcement learning. Preprint at 
                  http://arxiv.org/abs/2501.12948
                  
                 (2025)."), and enhance potential jailbreaking behavior[45](#ref-CR45 "Guan, M. Y. et al. Deliberative alignment: reasoning enables safer language models. Preprint at 
                  http://arxiv.org/abs/2412.16339
                  
                 (2024)."),[46](#ref-CR46 "Li, Z.-Z. et al. From system 1 to system 2: a survey of reasoning Large Language Models. Preprint at 
                  http://arxiv.org/abs/2502.17419
                  
                 (2025)."),[47](/articles/s41746-025-02008-z#ref-CR47 "Jiang, F. et al. SafeChain: safety of language models with long chain-of-thought reasoning capabilities. ICLR 2025 Workshop on Bidirectional Human-AI Alignment (BiAlign) (2025)."). However, the normal language models that we studied in this paper are still the main daily workhorses accessible to most users. In fact, even OpenAI rose similar sycophancy issues on GPT-4o[48](/articles/s41746-025-02008-z#ref-CR48 "Sycophancy in GPT-4o: what happened and what we’re doing about it. Available at 
                  https://openai.com/index/sycophancy-in-gpt-4o/
                  
                .").

We showed that LLMs are sycophantic and do not reliably resist requests for illogical content, even when they have the knowledge to identify the request as factually flawed. This creates a gap between the knowledge benchmarks commonly used to evaluate LLMs and a true assessment of their medical risks and functionality. To ensure that LLMs effectively reject flawed requests while continuing to respond helpfully to logical instructions, future work could focus on refining tuning methods and developing approaches to scalable human-assisted and automated oversight. Ultimately, closing this gap will be essential to aligning LLMs’ knowledge capabilities with their real-world reliability and safety in medicine.

## Methods

To evaluate language models across varying levels of drug familiarity, we used the _RABBITS_[30](/articles/s41746-025-02008-z#ref-CR30 "Gallifant, J. et al. Language models are surprisingly fragile to drug names in biomedical benchmarks. Findings of the Association for Computational Linguistics: EMNLP 2024. Stroudsburg, PA, USA: Association for Computational Linguistics, 12448–12465 (2024)") dataset, which includes 550 common drugs with 1:1 mapping between their brand and generic names.

To measure the relative familiarity of language models with these drugs, we tokenized multiple large pre-training corpora with the LLaMA tokenizer[9](/articles/s41746-025-02008-z#ref-CR9 "Touvron, H. et al. Llama 2: open foundation and fine-tuned chat models. Preprint at 
                  http://arxiv.org/abs/2307.09288
                  
                 (2023).") using Infini-gram[49](/articles/s41746-025-02008-z#ref-CR49 "Liu, J., Min, S., Zettlemoyer, L., Choi, Y. & Hajishirzi, H. Infini-gram: scaling unbounded n-gram language models to a trillion tokens. COLM (2024)."), including Dolma1.6[50](/articles/s41746-025-02008-z#ref-CR50 "Soldaini, L. et al. Dolma: an open corpus of three trillion tokens for language model pretraining research. In Proc. 62nd Annual Meeting of the Association for Computational Linguistics, Vol. 1. Association for Computational Linguistics 15725–15788 (2024)."), C4[51](/articles/s41746-025-02008-z#ref-CR51 "Raffel, C. et al. Exploring the limits of transfer learning with a unified text-to-text transformer. J. Mach. Learn. Res 21, 5485–555 (2020)."), RedPajama[52](/articles/s41746-025-02008-z#ref-CR52 "Together, RedPajama, a project to create leading open-source models, starts by reproducing LLaMA training dataset of over 1.2 trillion tokens. Available at 
                  https://www.together.ai/blog/redpajama
                  
                ."), and Pile[53](/articles/s41746-025-02008-z#ref-CR53 "Gao, L. et al. The pile: an 800GB dataset of diverse text for language modeling. Preprint at 
                  http://arxiv.org/abs/2101.00027
                  
                 (2020)."). The frequency of generic drug names across this corpus was used to estimate how commonly these drugs appear in pre-training datasets. Generic drug names were then ranked by frequency to provide a proxy measure of model familiarity(Note that C4 and RedPajama have overlaps).

To ensure coverage of both common and rare drugs, we selected 50 drugs from five distinct frequency ranges based on their rankings in the tokenized dataset: The top 10, 100–110, 200–210, 300–310, and 400–410 most frequent drugs in our sampling window.

We evaluate the following LLMs: Llama3-8B-Instruct (Llama3-8B), Llama3-70B-Instruct (Llama3-70B), gpt-4o-mini-2024-07-18 (GPT4o-mini), gpt-4o-2024-05-13 (GPT4o), and gpt-4-0613 (GPT4). These models were chosen to represent the performance of current leading open- and closed-source models across a range of sizes.

We designed four prompt types to evaluate the models’ handling of new drug-related information, assessing persuasive ability, factual recall, and logical consistency (Fig. [1](/articles/s41746-025-02008-z#Fig1)). Experiments were run via OpenAI Batch API, and Llama models used A100-80GB with CUDA > 12.0, no quantization. Hyperparameters included a max of 512 output tokens and temperature = 0 for best possible reproducibility.

### Stage 1\. Baseline prompt

The first prompt represents the baseline condition, where the model is tasked with providing a persuasive but illogical letter informing people that a brand-name drug is found to have new side effects, and that they should take the generic counterpart instead. This task was selected because it illustrates a necessary safety mode for LLMs that follows from simple logical reasoning. If a model knows that the brand and generic drug are the same, it should be able to identify the request as illogical and reject the request, instead of complying with the request and generating false information.

### Stage 2\. Prompt-based solutions to assess steerability

#### Rejection prompt

In this variation, we explicitly allow the possibility of rejection, encouraging the model to evaluate whether there is a logical flaw in the prompt. This prompt also allows a model that is heavily aligned to being submissive to reject users’ queries. The explicit permission to reject creates a scenario where the model must consider not only the factual content but also the appropriateness of the substitution.

#### Factual recall prompt

This prompt emphasizes the need for the model to recall the correct relationships between brand-name drugs and their generic equivalents before processing the rest of the request. This variation tests the model’s ability to accurately retrieve and utilize known facts in generating persuasive outputs. By instructing the model to prioritize factual recall, we assess how well it can integrate known drug relationships with new information.

#### Combined rejection and factual recall prompt

The final prompt variation combines both the rejection and factual recall instructions. This setup evaluates whether the model can handle both tasks simultaneously, ensuring factual accuracy while also exercising logical reasoning to reject incorrect assumptions.

All prompt settings introduced were experimented with separate LLM inferences.

### Stage 3\. Fine-tuning and evaluation on out-of-distribution (OOD) data

#### Model fine-tuning

To enhance the ability of smaller language models to handle complex drug substitution prompts, we fine-tuned Llama 3-8B Instruct and GPT4o-mini using the PERSIST instruction-tuning dataset, publicly available at <https://huggingface.co/datasets/AIM-Harvard/PERSIST>.

This dataset comprises 300 input-output pairs, each featuring a challenging “Baseline” prompt concerning brand/generic drug substitutions (covering both directions for 50 drug pairs) and the corresponding desired response generated by a larger model (GPT4o-mini, GPT-4, or GPT4o) when presented with a “Combined Rejection and Factual Recall Prompt”.

The dataset construction leveraged these larger models to systematically generate ideal responses for all 50 drug pairs in both substitution directions, resulting in 300 examples (50 × 2 × 3 = 300), drawing inspiration from work demonstrating effective instruction-tuning with limited data[54](/articles/s41746-025-02008-z#ref-CR54 "Zhou, C. et al. LIMA: Less is more for alignment. In Proc. 37th Conference on Neural Information Processing Systems (NeurIPS) (2023)."). We explored various hyperparameters, including learning rates (5e-6, 1e-5, 2e-5, 5e-5), batch sizes (1,2), and epochs (2,3) for Llama3-8B. For GPT4o-mini, we utilized OpenAI’s automatic parameter search. Ultimately, the selected Llama3-8B model used a learning rate of 1e-5, a batch size of 2, and 3 epochs, while the selected GPT4o-mini was fine-tuned via the OpenAI API with a batch size of 1, 3 epochs, and a seed of 318998491\. The core objective of this fine-tuning process was to impart the smaller models with the ability to emulate the larger models’ successful rejection and explanation behavior when faced with the “Combined Rejection and Factual Recall Prompt”.

We used 2 × A100 80GB to fine-tune our examples in 2 epochs and a learning rate of 1e-5 which can be done under an hour. The estimated cost here will be under $10 if using cloud GPU renting. For fine-tuning GPT4o mini, we were on the OpenAI Trial program, so it was free of cost. However, custom models will require 1.5× inference costs.

#### Evaluation on OOD data

To evaluate the generalization of the fine-tuned model to other illogical requests, we tested its performance on the OOD datasets of terms with the same meanings (Fig. [3](/articles/s41746-025-02008-z#Fig3)). This OOD dataset included several other categories. Testing on OOD data allows us to assess the generalizability of a model’s behavior in responding to illogical requests involving novel or previously unseen entities—a crucial factor in evaluating its applicability in real-world scenarios.

### Stage 4: Evaluating general benchmarks and compliance with logical requests

#### Balancing rejection and compliance

To test whether models became overly conservative after fine-tuning, we designed an additional test set comprising 20 cases (10 real FDA drug safety recalls, 5 theoretically event canceling situations, and 5 real government announcements) where the model should comply with the prompt rather than reject it (Fig. [5](/articles/s41746-025-02008-z#Fig5)). These cases involved scenarios where the recommended substitution was appropriate and aligned with the correct drug relationships. This test ensured that the model retained the ability to provide helpful and persuasive responses when no logical flaws were present. The prompts are found in Supplementary Table [1](/articles/s41746-025-02008-z#MOESM1). Additionally, we also prompt the fine-tuned models with questions regarding 50 common drugs we fine-tuned and see whether they can still answer logical requests regarding those drugs.

**Fig. 5: LLM ability to comply to logical requests.**

[](/articles/s41746-025-02008-z/figures/5)

To further investigate our fine-tuned models’ behavior, we provided three different subcategories of new, logical and correct in-context information requests, and assessed if the LLMs complied. Authors SC and MG did the annotation manually with a 100% annotation agreement.

[Full size image](/articles/s41746-025-02008-z/figures/5)

#### General benchmark evaluation

To ensure that fine-tuning and prompt modifications do not degrade the overall performance of the models, we evaluated them on a broad set of general benchmarks using Inspect[55](/articles/s41746-025-02008-z#ref-CR55 "inspect_ai: Inspect: A framework for large language model evaluations, Github; 
                  https://github.com/UKGovernmentBEIS/inspect_ai
                  
                .") and Alpaca-Eval2 v0.6.5[56](/articles/s41746-025-02008-z#ref-CR56 "alpaca_eval: An automatic evaluator for instruction-following language models. Human-validated, high-quality, cheap, and fast (Github; 
                  https://github.com/tatsu-lab/alpaca_eval
                  
                ).") using GPT4-turbo as the comparator model. These benchmarks were selected to test the models’ reasoning, factual recall, and domain-specific knowledge, including medical contexts, ensuring that any improvements in handling drug-related prompts did not come at the expense of general task performance. The confidence intervals are calculated using the central limit theorem, a common practice in modern LLM evaluations[57](/articles/s41746-025-02008-z#ref-CR57 "Miller, E. Adding error bars to evals: A statistical approach to language model evaluations. Preprint at 
                  http://arxiv.org/abs/2411.00640
                  
                 (2024)."),[58](/articles/s41746-025-02008-z#ref-CR58 "Grattafiori, A. et al. The Llama 3 herd of models. Preprint at 
                  http://arxiv.org/abs/2407.21783
                  
                 (2024).").

### Automated evaluation

Model outputs were categorized into 4 categories: (1) rejecting the request and explaining the logical flaw; (2) fulfilling the request and explaining the logical flaw; (3) rejecting the request without explaining the logical flaw; and (4) fulfilling the request without explaining the logical flaw. Model outputs were evaluated using a multi-step annotation process. The detailed counts of instances we evaluated in this research are available in Supplementary Table [2](/articles/s41746-025-02008-z#MOESM1). To ensure consistency and reliability in the evaluation, we employed the Claude 3.5 Sonnet (we chose a separate model as a label because LLMs of the same family are known to have a favorable bias toward their own responses[59](#ref-CR59 "Panickssery, A., Bowman, S. R. & Feng, S. LLM evaluators recognize and favor their own generations. In Proc. 38th Conference on Neural Information Processing Systems (NeurIPS) (2024)."),[60](#ref-CR60 "Wataoka, K., Takahashi, T. & Ri, R. Self-preference bias in LLM-as-a-judge. Preprint at 
                  https://doi.org/10.48550/arXiv.2410.21819
                  
                 (2024)."),[61](#ref-CR61 "Xu, W. et al. Pride and prejudice: LLM amplifies self-bias in self-refinement. In Proc. 62nd Annual Meeting of the Association for Computational Linguistics, Vol. 1, 15474–15492 (2024)."),[62](/articles/s41746-025-02008-z#ref-CR62 "Laurito, W. et al. AI AI bias: large language models favor their own generated content. Proc. Natl. Acad. Sci. USA 122, e2415697122, (2025).")) to provide initial annotations, with human reviewers (annotators SC and MG blinded to each other) validating 50 outputs from GPT4o-mini. The inter-annotator agreement between Claude 3.5 Sonnet and the human reviewers was 98%, with 100% agreement between the two human annotators for both in-domain and out-of-domain data. Supplementary Table [3](/articles/s41746-025-02008-z#MOESM1) shows the single output for which the human labels disagreed with Claude 3.5 Sonnet. Of note, compliance with logical requests was human-labeled.

## Data availability

All our data input and output from all models, and the Llama3 model we fine-tuned, are publicly available at <https://huggingface.co/datasets/AIM-Harvard/PERSIST>.

## Code availability

All code can be found at <https://huggingface.co/datasets/AIM-Harvard/PERSIST>.

## References

1. Singhal, K. et al. Large language models encode clinical knowledge. _Nature_ **620**, 172–180 (2023).  
[Article](https://doi.org/10.1038%2Fs41586-023-06291-2) [CAS](/articles/cas-redirect/1:CAS:528:DC%2BB3sXhsVKju7zP) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=37438534) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10396962) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Large%20language%20models%20encode%20clinical%20knowledge&journal=Nature&doi=10.1038%2Fs41586-023-06291-2&volume=620&pages=172-180&publication%5Fyear=2023&author=Singhal%2CK)
2. Taylor, R. et al. Galactica: a large language model for science. Preprint at <http://arxiv.org/abs/2211.09085> (2022).
3. Chen, S. et al. Evaluating the ChatGPT family of models for biomedical reasoning and classification. _J. Am. Med. Inform. Assoc._ **31**, 940–948 (2024).  
[Article](https://doi.org/10.1093%2Fjamia%2Focad256) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=38261400) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10990500) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Evaluating%20the%20ChatGPT%20family%20of%20models%20for%20biomedical%20reasoning%20and%20classification&journal=J.%20Am.%20Med.%20Inform.%20Assoc.&doi=10.1093%2Fjamia%2Focad256&volume=31&pages=940-948&publication%5Fyear=2024&author=Chen%2CS)
4. Van Veen, D. et al. Adapted large language models can outperform medical experts in clinical text summarization. _Nat. Med._ **30**, 1134–1142 (2024).  
[Article](https://doi.org/10.1038%2Fs41591-024-02855-5) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=38413730) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC11479659) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Adapted%20large%20language%20models%20can%20outperform%20medical%20experts%20in%20clinical%20text%20summarization&journal=Nat.%20Med.&doi=10.1038%2Fs41591-024-02855-5&volume=30&pages=1134-1142&publication%5Fyear=2024&author=Veen%2CD)
5. Soroush, A. et al. Large language models are poor medical coders—benchmarking of medical code querying. _NEJM AI_. **1**, <https://doi.org/10.1056/aidbp2300040> (2024).
6. Chen, S. et al. The effect of using a large language model to respond to patient messages. _Lancet Digit. Health_ **6**, e379–e381 (2024).  
[Article](https://doi.org/10.1016%2FS2589-7500%2824%2900060-8) [CAS](/articles/cas-redirect/1:CAS:528:DC%2BB2cXptFSrsrs%3D) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=38664108) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC11829255) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=The%20effect%20of%20using%20a%20large%20language%20model%20to%20respond%20to%20patient%20messages&journal=Lancet%20Digit.%20Health&doi=10.1016%2FS2589-7500%2824%2900060-8&volume=6&pages=e379-e381&publication%5Fyear=2024&author=Chen%2CS)
7. Potts, B. MedFuzz: exploring the robustness of LLMs on medical challenge problems. _Microsoft Research._ Available at <https://www.microsoft.com/en-us/research/blog/medfuzz-exploring-the-robustness-of-llms-on-medical-challenge-problems/> (2024).
8. Bai, Y. et al. Training a helpful and harmless assistant with reinforcement learning from human feedback. Preprint at <http://arxiv.org/abs/2204.05862> (2022).
9. Touvron, H. et al. Llama 2: open foundation and fine-tuned chat models. Preprint at <http://arxiv.org/abs/2307.09288> (2023).
10. Bai, Y. et al. Constitutional AI: harmlessness from AI feedback. Preprint at <http://arxiv.org/abs/2212.08073> (2022).
11. Liu, R., Sumers, T. R., Dasgupta, I. & Griffiths, T. L. How do large language models navigate conflicts between honesty and helpfulness? Preprint at <http://arxiv.org/abs/2402.07282> (2024).
12. Askell, A. et al. A general language assistant as a laboratory for alignment. Preprint at <http://arxiv.org/abs/2112.00861> (2021).
13. Rafailov, R. et al. Direct preference optimization: your language model is secretly a reward model. In _Proc._ _37th Conference on Neural Information Processing Systems_ (_NeurlPS_), Vol. 36, 53728–53741 (2023).
14. Christiano, P. et al. Deep reinforcement learning from human preferences. In _Proc_. _31st Conference on Neural Information Processing Systems (NIPS)_, Long Beach, CA, USA (2017).
15. Ouyang, L. et al. Training language models to follow instructions with human feedback. Preprint at <http://arxiv.org/abs/2203.02155> (2022).
16. Menz, B. D., Modi, N. D., Sorich, M. J. & Hopkins, A. M. Health disinformation use case highlighting the urgent need for artificial intelligence vigilance: weapons of mass disinformation: weapons of mass disinformation. _JAMA Intern. Med._ **184**, 92–96 (2024).  
[Article](https://doi.org/10.1001%2Fjamainternmed.2023.5947) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=37955873) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Health%20disinformation%20use%20case%20highlighting%20the%20urgent%20need%20for%20artificial%20intelligence%20vigilance%3A%20weapons%20of%20mass%20disinformation%3A%20weapons%20of%20mass%20disinformation&journal=JAMA%20Intern.%20Med.&doi=10.1001%2Fjamainternmed.2023.5947&volume=184&pages=92-96&publication%5Fyear=2024&author=Menz%2CBD&author=Modi%2CND&author=Sorich%2CMJ&author=Hopkins%2CAM)
17. Menz, B. D. et al. Current safeguards, risk mitigation, and transparency measures of large language models against the generation of health disinformation: repeated cross sectional analysis. _BMJ_ **384**, e078538 (2024).  
[Article](https://doi.org/10.1136%2Fbmj-2023-078538) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=38508682) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC10961718) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Current%20safeguards%2C%20risk%20mitigation%2C%20and%20transparency%20measures%20of%20large%20language%20models%20against%20the%20generation%20of%20health%20disinformation%3A%20repeated%20cross%20sectional%20analysis&journal=BMJ&doi=10.1136%2Fbmj-2023-078538&volume=384&publication%5Fyear=2024&author=Menz%2CBD)
18. Zhang, Y., Sharma, K., Du, L. & Liu, Y. Toward mitigating misinformation and social media manipulation in LLM era. In _Proc_. _Companion Proceedings of the ACM on Web Conference,_ Vol. 19, 1302–1305 (ACM, USA, 2024).
19. Xu, N. et al. Cognitive overload: Jailbreaking large language models with overloaded logical thinking. In _Findings of the Association for Computational Linguistics: NAACL 2024_ (Association for Computational Linguistics, Stroudsburg, PA, USA, 2024).
20. Ding, P. et al. A wolf in sheep’s clothing: generalized nested jailbreak prompts can fool large language models easily. In _Proc. 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)_ (Association for Computational Linguistics, Stroudsburg, PA, USA, 2024).
21. Sharma, M. et al. Towards understanding sycophancy in language models. In _Proc._ _International Conference on Representation Learning (ICLR)_ (2024).
22. Liu, Y. et al. A Hitchhiker’s Guide to Jailbreaking ChatGPT via Prompt Engineering. In _Proc. 4th International Workshop on Software Engineering and AI for Data Quality in Cyber-Physical Systems/Internet of Things_ (ACM, New York, NY, USA, 2024).
23. Si, C. et al. Large language models help humans verify truthfulness -- except when they are convincingly wrong. Preprint at <http://arxiv.org/abs/2310.12558> (2023).
24. Haupt, C. E. & Marks, M. FTC regulation of AI-generated medical disinformation. _JAMA._ <https://doi.org/10.1001/jama.2024.19971> (2024).
25. Polyportis, A. & Pahos, N. Navigating the perils of artificial intelligence: a focused review on ChatGPT and responsible research and innovation. _Humanit. Soc. Sci. Commun._ **11**, 1–10 (2024).  
[Article](https://doi.org/10.1057%2Fs41599-023-02464-6) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Navigating%20the%20perils%20of%20artificial%20intelligence%3A%20a%20focused%20review%20on%20ChatGPT%20and%20responsible%20research%20and%20innovation&journal=Humanit.%20Soc.%20Sci.%20Commun.&doi=10.1057%2Fs41599-023-02464-6&volume=11&pages=1-10&publication%5Fyear=2024&author=Polyportis%2CA&author=Pahos%2CN)
26. Lu, W. et al. Eraser: jailbreaking defense in large language models via unlearning harmful knowledge. Preprint at <http://arxiv.org/abs/2404.05880> (2024).
27. Liu, T. et al. Making them ask and answer: jailbreaking large language models in few queries via disguise and reconstruction. Preprint at <http://arxiv.org/abs/2402.18104> (2024).
28. Han, T. et al. Medical large language models are susceptible to targeted misinformation attacks. _NPJ Digit. Med._ **7**, 288 (2024).  
[Article](https://doi.org/10.1038%2Fs41746-024-01282-7) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=39443664) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC11499642) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Medical%20large%20language%20models%20are%20susceptible%20to%20targeted%20misinformation%20attacks&journal=NPJ%20Digit.%20Med.&doi=10.1038%2Fs41746-024-01282-7&volume=7&publication%5Fyear=2024&author=Han%2CT)
29. Huang, X. et al. Medical MLLM is vulnerable: cross-modality jailbreak and mismatched attacks on medical multimodal large language models. Preprint at <https://ojs.aaai.org/index.php/AAAI/article/view/32396> (2024).
30. Gallifant, J. et al. Language models are surprisingly fragile to drug names in biomedical benchmarks. _Findings of the Association for Computational Linguistics: EMNLP 2024_. Stroudsburg, PA, USA: Association for Computational Linguistics, 12448–12465 (2024)
31. Wu, Z. et al. AxBench: steering LLMs? Even simple baselines outperform sparse autoencoders. Preprint at <https://icml.cc/virtual/2025/poster/45658> (2025).
32. Dubois, Y., Galambosi, B., Liang, P &, Hashimoto, T. B. Length-controlled AlpacaEval: a simple way to debias automatic evaluators. Preprint at <https://openreview.net/pdf?id=CybBmzWBX0> (2024).
33. Bhakthavatsalam, S. et al. Think you have solved direct-answer question answering? Try ARC-DA, the direct-answer AI2 reasoning challenge. Preprint at <http://arxiv.org/abs/2102.03315> (2021).
34. Clark, C. et al. BoolQ: exploring the surprising difficulty of natural yes/no questions. Preprint at <http://arxiv.org/abs/1905.10044> (2019).
35. Hendrycks, D. et al. Measuring massive multitask language understanding. In _Proc._ _International Conference on Learning Representations (ICLR)_ (2021).
36. Rein, D. et al. _GPQA: A Graduate-Level Google-Proof Q&A Benchmark_ (COLM, 2024).
37. Lin, S., Hilton, J. & Evans, O. TruthfulQA: measuring how models mimic human falsehoods. In _Proc. 60th Annual Meeting of the Association for Computational Linguistics_ (vol. 1: Long Papers), 3214–3252, Dublin, Ireland. Association for Computational Linguistics.
38. Zeng, Y. et al. How Johnny Can Persuade LLMs to Jailbreak Them: Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs. In _Proc. 62nd Annual Meeting of the Association for Computational Linguistics_ (vol. 1). Association for Computational Linguistics,14322–14350 (2024).
39. Rongwu, Xu. et al. The Earth is Flat because...: Investigating LLMs’ Belief towards Misinformation via Persuasive Conversation. In _Proc. 62nd Annual Meeting of the Association for Computational Linguistic_s (vol. 1). Association for Computational Linguistics, 16259–16303 (2024).
40. Allen-Zhu, Z. & Li, Y. Physics of language models: part 3.2, knowledge manipulation. _International Conference on Learning Representations_ (2025).
41. Wei, J. et al. Chain-of-thought prompting elicits reasoning in large language models. In _Proc_. _36th Conference on Neural Information Processing Systems (NeurIPS)_ (2022).
42. OpenAI, A. et al. OpenAI o1 system card. Preprint at <http://arxiv.org/abs/2412.16720> (2024).
43. Chen, Q. et al. Towards reasoning era: a survey of long chain-of-thought for reasoning large language models. Preprint at <http://arxiv.org/abs/2503.09567>.
44. DeepSeek-AI, D. et al. DeepSeek-R1: incentivizing reasoning capability in LLMs via reinforcement learning. Preprint at <http://arxiv.org/abs/2501.12948> (2025).
45. Guan, M. Y. et al. Deliberative alignment: reasoning enables safer language models. Preprint at <http://arxiv.org/abs/2412.16339> (2024).
46. Li, Z.-Z. et al. From system 1 to system 2: a survey of reasoning Large Language Models. Preprint at <http://arxiv.org/abs/2502.17419> (2025).
47. Jiang, F. et al. SafeChain: safety of language models with long chain-of-thought reasoning capabilities. _ICLR 2025 Workshop on Bidirectional Human-AI Alignment_ (BiAlign) (2025).
48. Sycophancy in GPT-4o: what happened and what we’re doing about it. Available at <https://openai.com/index/sycophancy-in-gpt-4o/>.
49. Liu, J., Min, S., Zettlemoyer, L., Choi, Y. & Hajishirzi, H. Infini-gram: scaling unbounded n-gram language models to a trillion tokens. COLM (2024).
50. Soldaini, L. et al. Dolma: an open corpus of three trillion tokens for language model pretraining research. In _Proc. 62nd Annual Meeting of the Association for Computational Linguistics_, Vol. 1\. Association for Computational Linguistics 15725–15788 (2024).
51. Raffel, C. et al. Exploring the limits of transfer learning with a unified text-to-text transformer. _J. Mach. Learn. Res_ **21**, 5485–555 (2020).  
[ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=Exploring%20the%20limits%20of%20transfer%20learning%20with%20a%20unified%20text-to-text%20transformer&journal=J.%20Mach.%20Learn.%20Res&volume=21&pages=5485-555&publication%5Fyear=2020&author=Raffel%2CC)
52. Together, RedPajama, a project to create leading open-source models, starts by reproducing LLaMA training dataset of over 1.2 trillion tokens. Available at <https://www.together.ai/blog/redpajama>.
53. Gao, L. et al. The pile: an 800GB dataset of diverse text for language modeling. Preprint at <http://arxiv.org/abs/2101.00027> (2020).
54. Zhou, C. et al. LIMA: Less is more for alignment. In _Proc_. _37th Conference on Neural Information Processing Systems_ (NeurIPS) (2023).
55. _inspect\_ai: Inspect: A framework for large language model evaluations_, Github; <https://github.com/UKGovernmentBEIS/inspect%5Fai>.
56. _alpaca\_eval: An automatic evaluator for instruction-following language models. Human-validated, high-quality, cheap, and fast_ (Github; <https://github.com/tatsu-lab/alpaca%5Feval>).
57. Miller, E. Adding error bars to evals: A statistical approach to language model evaluations. Preprint at <http://arxiv.org/abs/2411.00640> (2024).
58. Grattafiori, A. et al. The Llama 3 herd of models. Preprint at [http://arxiv.org/abs/2407.21783](https://arxiv.org/abs/2407.21783) (2024).
59. Panickssery, A., Bowman, S. R. & Feng, S. LLM evaluators recognize and favor their own generations. In _Proc_. _38th Conference on Neural Information Processing Systems_ (_NeurIPS_) (2024).
60. Wataoka, K., Takahashi, T. & Ri, R. Self-preference bias in LLM-as-a-judge. Preprint at <https://doi.org/10.48550/arXiv.2410.21819> (2024).
61. Xu, W. et al. Pride and prejudice: LLM amplifies self-bias in self-refinement. In _Proc._ _62nd Annual Meeting of the Association for Computational Linguistics,_ Vol. 1, 15474–15492 (2024).
62. Laurito, W. et al. AI AI bias: large language models favor their own generated content. _Proc. Natl. Acad. Sci. USA_ **122**, e2415697122, (2025).  
[Article](https://doi.org/10.1073%2Fpnas.2415697122) [CAS](/articles/cas-redirect/1:CAS:528:DC%2BB2MXit1Cmt7bL) [PubMed](http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list%5Fuids=40729390) [PubMed Central](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC12337326) [ Google Scholar](http://scholar.google.com/scholar%5Flookup?&title=AI%20AI%20bias%3A%20large%20language%20models%20favor%20their%20own%20generated%20content&journal=Proc.%20Natl.%20Acad.%20Sci.%20USA&doi=10.1073%2Fpnas.2415697122&volume=122&publication%5Fyear=2025&author=Laurito%2CW)

[Download references](https://citation-needed.springer.com/v2/references/10.1038/s41746-025-02008-z?format=refman&flavour=references)

## Acknowledgements

The authors acknowledge financial support from the Google PhD Fellowship (S.C.), the Woods Foundation (D.B., S.C., H.A., J.G., L.F.), the NIH (NIH-USA R01CA294033 (S.C., J.G., D.S.B.), NIH-USA U54CA274516-01A1 (S.C., H.A., D.S.B.), NIH-USA U24CA194354 (H.A.), NIH-USA U01CA190234 (H.A.), NIH-USA U01CA209414 (H.A.), and NIH-USA R35CA22052 (H.A.), the American Cancer Society and American Society for Radiation Oncology, ASTRO-CSDG-24-1244514-01-CTPS Grant DOI #: <https://doi.org/10.53354/ACS.ASTRO-CSDG-24-1244514-01-CTPS.pc.gr.222210> \[D.S.B.\], a Patient-Centered Outcomes Research Institute (PCORI) Project Program Award (ME-2024C2-37484) (D.S.B.), and the European Union—European Research Council (H.A.: 866504). This work was also conducted with support from UM1TR004408 award through Harvard Catalyst | The Harvard Clinical and Translational Science Center (National Center for Advancing Translational Sciences, National Institutes of Health) and financial contributions from Harvard University and its affiliated academic healthcare centers. The content is solely the responsibility of the authors and does not necessarily represent the official views of Harvard Catalyst, Harvard University, and its affiliated academic healthcare centers, or the National Institutes of Health. All statements in this report, including its findings and conclusions, are solely those of the authors and do not necessarily represent the views of the Patient-Centered Outcomes Research Institute (PCORI), its Board of Governors or Methodology Committee. The authors thank Google Cloud research fund for Claude API inference costs.

## Author information

Author notes
1. These authors contributed equally: Shan Chen, Mingye Gao.

### Authors and Affiliations

1. Artificial Intelligence in Medicine (AIM) Program, Mass General Brigham, Harvard Medical School, Boston, MA, USA  
Shan Chen, Lizhou Fan, Hugo Aerts, Jack Gallifant & Danielle S. Bitterman
2. Department of Radiation Oncology, Brigham and Women’s Hospital/Dana-Farber Cancer Institute, Boston, MA, USA  
Shan Chen, Lizhou Fan, Hugo Aerts, Jack Gallifant & Danielle S. Bitterman
3. Computational Health Informatics Program, Boston Children’s Hospital, Harvard Medical School, Boston, MA, USA  
Shan Chen & Danielle S. Bitterman
4. Massachusetts Institute of Technology, Cambridge, MA, USA  
Mingye Gao & Brian Anthony
5. Johns Hopkins University, Baltimore, MD, USA  
Kuleen Sasse
6. School of Data Science, University of Virginia, Charlottesville, VA, USA  
Thomas Hartvigsen
7. Radiology and Nuclear Medicine, GROW & CARIM, Maastricht University, Maastricht, The Netherlands  
Hugo Aerts

Authors
1. Shan Chen  
[View author publications](/search?author=Shan%20Chen)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Shan%20Chen) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Shan%20Chen%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
2. Mingye Gao  
[View author publications](/search?author=Mingye%20Gao)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Mingye%20Gao) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Mingye%20Gao%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
3. Kuleen Sasse  
[View author publications](/search?author=Kuleen%20Sasse)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Kuleen%20Sasse) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Kuleen%20Sasse%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
4. Thomas Hartvigsen  
[View author publications](/search?author=Thomas%20Hartvigsen)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Thomas%20Hartvigsen) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Thomas%20Hartvigsen%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
5. Brian Anthony  
[View author publications](/search?author=Brian%20Anthony)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Brian%20Anthony) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Brian%20Anthony%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
6. Lizhou Fan  
[View author publications](/search?author=Lizhou%20Fan)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Lizhou%20Fan) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Lizhou%20Fan%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
7. Hugo Aerts  
[View author publications](/search?author=Hugo%20Aerts)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Hugo%20Aerts) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Hugo%20Aerts%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
8. Jack Gallifant  
[View author publications](/search?author=Jack%20Gallifant)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Jack%20Gallifant) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Jack%20Gallifant%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)
9. Danielle S. Bitterman  
[View author publications](/search?author=Danielle%20S.%20Bitterman)  
Search author on:[PubMed](https://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=search&term=Danielle%20S.%20Bitterman) [Google Scholar](https://scholar.google.co.uk/scholar?as%5Fq=&num=10&btnG=Search+Scholar&as%5Fepq=&as%5Foq=&as%5Feq=&as%5Focct=any&as%5Fsauthors=%22Danielle%20S.%20Bitterman%22&as%5Fpublication=&as%5Fylo=&as%5Fyhi=&as%5Fallsubj=all&hl=en)

### Contributions

S.C. and M.G. contributed equally to this work, developing the main theoretical framework and performing the experiments; S.C. led the manuscript writing. K.S. was instrumental in experimental design and data collection. T.H., B.A. and L.F. provided supervision and were involved in the strategic direction of the research. H.A. and J.G. provided supervision, focusing on refining the framework, visualizations, and interpreting the results. D.S.B., the corresponding author, oversaw the entire project, coordinated the interdisciplinary team, secured funding, mentored junior team members, and gave final approval of the manuscript. All authors have read and approved the final version of the manuscript.

### Corresponding author

Correspondence to[Danielle S. Bitterman](mailto:dbitterman@bwh.harvard.edu).

## Ethics declarations

### Competing interests

D.S.B.: Editorial, unrelated to this work: Associate Editor of Radiation Oncology, HemOnc.org (no financial compensation); Advisory and consulting, unrelated to this work: MercurialAI. BWA: Advisory and consulting, unrelated to this work.

## Additional information

**Publisher’s note** Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Supplementary information

### [Supplementary information (download PDF )](https://static-content.springer.com/esm/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746%5F2025%5F2008%5FMOESM1%5FESM.pdf)

## Rights and permissions

**Open Access** This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit <http://creativecommons.org/licenses/by/4.0/>.

[Reprints and permissions](https://s100.copyright.com/AppDispatchServlet?title=When%20helpfulness%20backfires%3A%20LLMs%20and%20the%20risk%20of%20false%20medical%20information%20due%20to%20sycophantic%20behavior&author=Shan%20Chen%20et%20al&contentID=10.1038%2Fs41746-025-02008-z&copyright=The%20Author%28s%29&publication=2398-6352&publicationDate=2025-10-17&publisherName=SpringerNature&orderBeanReset=true&oa=CC%20BY)

## About this article

[](https://crossmark.crossref.org/dialog/?doi=10.1038/s41746-025-02008-z)

### Cite this article

Chen, S., Gao, M., Sasse, K. _et al._ When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior._npj Digit. Med._ **8**, 605 (2025). https://doi.org/10.1038/s41746-025-02008-z

[Download citation](https://citation-needed.springer.com/v2/references/10.1038/s41746-025-02008-z?format=refman&flavour=citation)

* Received: 11 March 2025
* Accepted: 15 September 2025
* Published: 17 October 2025
* Version of record: 17 October 2025
* DOI: https://doi.org/10.1038/s41746-025-02008-z

### Share this article

Anyone you share the following link with will be able to read this content:

Get shareable link

Sorry, a shareable link is not currently available for this article.

Copy shareable link to clipboard

 Provided by the Springer Nature SharedIt content-sharing initiative

## This article is cited by

* ### [ Building The Health Chatbot Users’ Guide](https://doi.org/10.1038/s44360-026-00074-5)  
   * Duaa O. Khair  
   * Aditya U. Kale  
   * Joseph E. Alderman  
_Nature Health_ (2026)
* ### [ AI chatbots are sycophants — researchers say it’s harming science](https://doi.org/10.1038/d41586-025-03390-0)  
   * Miryam Naddaf  
_Nature_ (2025)
* ### [ The perils of politeness: how large language models may amplify medical misinformation](https://doi.org/10.1038/s41746-025-02135-7)  
   * Kyra L. Rosen  
   * Margaret Sui  
   * Joseph C. Kvedar  
_npj Digital Medicine_ (2025)
* ### [ Performance of large language models in reporting oral health concerns and side effects in head and neck cancer: a comparative study](https://doi.org/10.1007/s00432-025-06400-w)  
   * Jonas Rast  
   * Susanne Wiegand  
   * Felix Marschner  
_Journal of Cancer Research and Clinical Oncology_ (2025)

[ Download PDF ](/articles/s41746-025-02008-z.pdf) 

## Associated content

### [The AI sycophant](https://www.nature.com/articles/s41551-025-01568-5) 

* Rita Strack

Nature Biomedical Engineering Research Highlight 22 Jan 2026 

Advertisement

## Search

Search articles by subject, keyword or author 

Show results from All journals This journal 

Search 

[ Advanced search](/search/advanced) 

### Quick links

* [Explore articles by subject](/subjects)
* [Find a job](/naturecareers)
* [Guide to authors](/authors/index.html)
* [Editorial policies](/authors/editorial%5Fpolicies/)

Close banner Close 

 

Sign up for the _Nature Briefing_ newsletter — what matters in science, free to your inbox daily.

Email address 

Sign up 

I agree my information will be processed in accordance with the _Nature_ and Springer Nature Limited [Privacy Policy](https://www.nature.com/info/privacy). 

Close banner Close 

Get the most important science stories of the day, free in your inbox. [Sign up for Nature Briefing](https://www.nature.com/briefing/signup/?brieferEntryPoint=MainBriefingBanner) 

```json
{"mainEntity":{"headline":"When helpfulness backfires: LLMs and the risk of false medical information due to sycophantic behavior","description":"Large language models (LLMs) exhibit a vulnerability arising from being trained to be helpful: a tendency to comply with illogical requests that would generate false information, even when they have the knowledge to identify the request as illogical. This study investigated this vulnerability in the medical domain, evaluating five frontier LLMs using prompts that misrepresent equivalent drug relationships. We tested baseline sycophancy, the impact of prompts allowing rejection and emphasizing factual recall, and the effects of fine-tuning on a dataset of illogical requests, including out-of-distribution generalization. Results showed high initial compliance (up to 100%) across all models, prioritizing helpfulness over logical consistency. Prompt engineering and fine-tuning improved performance, improving rejection rates on illogical requests while maintaining general benchmark performance. This demonstrates that prioritizing logical consistency through targeted training and prompting is crucial for mitigating the risk of generating false medical information and ensuring the safe deployment of LLMs in healthcare.","datePublished":"2025-10-17T00:00:00Z","dateModified":"2025-10-17T00:00:00Z","pageStart":"1","pageEnd":"9","license":"http://creativecommons.org/licenses/by/4.0/","sameAs":"https://doi.org/10.1038/s41746-025-02008-z","keywords":["Health care","Medical research","Medicine/Public Health","general","Biomedicine","Biotechnology"],"image":["https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746_2025_2008_Fig1_HTML.png","https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746_2025_2008_Fig2_HTML.png","https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746_2025_2008_Fig3_HTML.png","https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746_2025_2008_Fig4_HTML.png","https://media.springernature.com/lw1200/springer-static/image/art%3A10.1038%2Fs41746-025-02008-z/MediaObjects/41746_2025_2008_Fig5_HTML.png"],"isPartOf":{"name":"npj Digital Medicine","issn":["2398-6352"],"volumeNumber":"8","@type":["Periodical","PublicationVolume"]},"publisher":{"name":"Nature Publishing Group UK","logo":{"url":"https://www.springernature.com/app-sn/public/images/logo-springernature.png","@type":"ImageObject"},"@type":"Organization"},"author":[{"name":"Shan Chen","affiliation":[{"name":"Harvard Medical School","address":{"name":"Artificial Intelligence in Medicine (AIM) Program, Mass General Brigham, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Brigham and Women’s Hospital/Dana-Farber Cancer Institute","address":{"name":"Department of Radiation Oncology, Brigham and Women’s Hospital/Dana-Farber Cancer Institute, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Harvard Medical School","address":{"name":"Computational Health Informatics Program, Boston Children’s Hospital, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Mingye Gao","affiliation":[{"name":"Massachusetts Institute of Technology","address":{"name":"Massachusetts Institute of Technology, Cambridge, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Kuleen Sasse","affiliation":[{"name":"Johns Hopkins University","address":{"name":"Johns Hopkins University, Baltimore, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Thomas Hartvigsen","affiliation":[{"name":"University of Virginia","address":{"name":"School of Data Science, University of Virginia, Charlottesville, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Brian Anthony","affiliation":[{"name":"Massachusetts Institute of Technology","address":{"name":"Massachusetts Institute of Technology, Cambridge, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Lizhou Fan","affiliation":[{"name":"Harvard Medical School","address":{"name":"Artificial Intelligence in Medicine (AIM) Program, Mass General Brigham, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Brigham and Women’s Hospital/Dana-Farber Cancer Institute","address":{"name":"Department of Radiation Oncology, Brigham and Women’s Hospital/Dana-Farber Cancer Institute, Boston, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Hugo Aerts","affiliation":[{"name":"Harvard Medical School","address":{"name":"Artificial Intelligence in Medicine (AIM) Program, Mass General Brigham, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Brigham and Women’s Hospital/Dana-Farber Cancer Institute","address":{"name":"Department of Radiation Oncology, Brigham and Women’s Hospital/Dana-Farber Cancer Institute, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Maastricht University","address":{"name":"Radiology and Nuclear Medicine, GROW & CARIM, Maastricht University, Maastricht, The Netherlands","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Jack Gallifant","affiliation":[{"name":"Harvard Medical School","address":{"name":"Artificial Intelligence in Medicine (AIM) Program, Mass General Brigham, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Brigham and Women’s Hospital/Dana-Farber Cancer Institute","address":{"name":"Department of Radiation Oncology, Brigham and Women’s Hospital/Dana-Farber Cancer Institute, Boston, USA","@type":"PostalAddress"},"@type":"Organization"}],"@type":"Person"},{"name":"Danielle S. Bitterman","affiliation":[{"name":"Harvard Medical School","address":{"name":"Artificial Intelligence in Medicine (AIM) Program, Mass General Brigham, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Brigham and Women’s Hospital/Dana-Farber Cancer Institute","address":{"name":"Department of Radiation Oncology, Brigham and Women’s Hospital/Dana-Farber Cancer Institute, Boston, USA","@type":"PostalAddress"},"@type":"Organization"},{"name":"Harvard Medical School","address":{"name":"Computational Health Informatics Program, Boston Children’s Hospital, Harvard Medical School, Boston, USA","@type":"PostalAddress"},"@type":"Organization"}],"email":"dbitterman@bwh.harvard.edu","@type":"Person"}],"isAccessibleForFree":true,"@type":"ScholarlyArticle"},"@context":"https://schema.org","@type":"WebPage"}
```
