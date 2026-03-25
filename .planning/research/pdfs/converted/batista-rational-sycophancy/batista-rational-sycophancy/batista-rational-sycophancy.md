# arXiv:2602.14270v1 [cs.CY] 15 Feb 2026

# **A Rational Analysis of the Effects of Sycophantic AI**

**Rafael M. Batista (rbatista@princeton.edu)**1,3 **& Thomas L. Griffiths (tomg@princeton.edu)**2,3

1School of Public and International Affairs, Princeton University 2Department of Computer Science, Princeton University

3Department of Psychology, Princeton University

#### **Abstract**

People increasingly use large language models (LLMs) to explore ideas, gather information, and make sense of the world. In these interactions, they encounter agents that are overly agreeable. We argue that this sycophancy poses a unique epistemic risk to how individuals come to see the world: unlike hallucinations that introduce falsehoods, sycophancy distorts reality by returning responses that are biased to reinforce existing beliefs. We provide a rational analysis of this phenomenon, showing that when a Bayesian agent is provided with data that are sampled based on a current hypothesis the agent becomes increasingly confident about that hypothesis but does not make any progress towards the truth. We test this prediction using a modified Wason 2-4-6 rule discovery task where participants ( = 557) interacted with AI agents providing different types of feedback. Unmodified LLM behavior suppressed discovery and inflated confidence comparably to explicitly sycophantic prompting. By contrast, unbiased sampling from the true distribution yielded discovery rates five times higher. These results reveal how sycophantic AI distorts belief, manufacturing certainty where there should be doubt.

**Keywords:** Sycophancy; Large Language Models (LLMs); Rational Analysis; Belief Updating; Confirmation Bias; Discovery

# **Introduction**

**User**: "I'd like to write a paper about sycophantic AI and belief formation. What do you think of this idea?" **Gemini-3-Pro**: "This is a strong, timely, and highimpact research topic."

If you have used a chatbot based on a large language model (LLM) to riff on a new idea or dig into a hunch, chances are you have been praised for your ingenuity. Offer two competing ideas—for instance, "Are movies getting [longer / shorter], or is it just me?"—and, in either case, you are likely to get an affirming response. Generative AI Chatbots tend to be enthusiastic and overly agreeable, in part as a consequence of their training through reinforcement learning based on human feedback (Rathje et al., 2025; Sharma et al., 2025). As more people turn to these systems for information, brainstorming, and even companionship, it is important to ask how these conversations with LLM chatbots shape human beliefs.

There is growing concern that the sycophantic nature of LLM chatbots may be facilitating delusions (Hill, 2025). If a user with a particular belief queries the chatbot about this belief they are likely to receive a validating response. Conversations can go back and forth for several iterations, lasting hours or even days. Users often report feeling as though they

have made a big discovery or learned something new (Zestyclementinejuice, 2025). But have they?

In this paper, we provide a rational analysis of the effects of sycophantic AI, considering how a Bayesian agent would respond to confirmatory evidence. Our analysis shows that such an agent will not get any closer to the truth, but will increase in their certainty about an incorrect hypothesis. We test this model in an online experiment where users are made to interact with an AI agent as they complete a rule discovery task. Our results show that the default interactions of a popular chatbot resemble the effects of providing people with confirmatory evidence, increasing confidence but bringing them no closer to the truth. These results provide a theoretical and empirical demonstration of how conversations with generative AI chatbots can facilitate delusion-like epistemic states, producing beliefs markedly divergent from reality.

# **Background**

Understanding how AI systems might distort human beliefs requires first understanding how humans mislead themselves. In this section, we first review literature on how individuals search for and interpret evidence then summarize recent work on the impact of sycophantic AI agents.

#### **The Persistence of Mistaken Beliefs**

The persistence of false beliefs is often attributed to a motivation to be right, but cognitive science research suggests a more fundamental mechanism: the specific strategy humans use in seeking new information. When individuals attempt to discover a rule or verify a belief, they rarely attempt to falsify their own assumptions. Instead, they employ a "positive test strategy," searching for instances that would occur if their working hypothesis were true (Bhatia, 2014; Klayman, 1995; Klayman & Ha, 1987).

The intuition behind this mechanism is best illustrated by Wason's (1960) rule discovery task. When asked to discover a hidden rule governing number triples (e.g., 2-4-6), participants overwhelmingly proposed triples that fit their current hypothesis (e.g., testing 8-10-12 to confirm "increasing even numbers") rather than triples that would defy it. Because the true rule was simply "increasing numbers," these positive tests appeared to confirm people's more restrictive hypotheses.

Subsequent work has demonstrated that positive testing is not inherently irrational (Austerweil & Griffiths, 2011; Oeberst & Imhoff, 2023; Perfors & Navarro, 2009); for instance,

when target phenomena are relatively rare, positive testing approximates optimal information gathering (Klayman & Ha, 1987). Bias emerges not from the strategy itself, but from the interaction between the search strategy and the environment (Klayman, 1995). When a learner's hypothesis is a subset of, or embedded within, the truth, positive testing yields "ambiguous verifications" that the learner mistakes for strong evidence for their hypothesis (Klayman & Ha, 1987). This creates a feedback loop where the search strategy retrieves only confirming data, and the learner fails to account for the fact that they are sampling from a biased subset of reality.

Modern technologies like search engines and social media reshape the information environment in response to user behavior (Cinelli et al., 2021; Leung & Urminsky, 2025). As algorithms optimize for relevance and engagement, they construct environments that reflect and reinforce users' existing search strategies. For instance, when seeking information online, people will often use search terms that narrowly reflect their hypothesis (e.g., "caffeine health risks (benefits)" instead of "caffeine health effects"; Leung & Urminsky, 2025). Search engines retrieve results that match these queries, effectively validating the user's biased hypothesis with a skewed sample of resources. As a result, users' existing beliefs are reinforced. Critically, people do not recognize their queries as biased or spontaneously correct for this.

In these cases, the user's search strategy acts as a filter on a pre-existing corpus of information. Large language models introduce a qualitatively different dynamic: rather than selecting from existing content, they generate content on demand.

### **Sycophancy in Large Language Models**

Sycophancy in LLMs is the tendency to generate responses that align with a user's stated or implied beliefs, often at the expense of truthfulness (Sharma et al., 2025; Wang et al., 2025). This behavior appears pervasive across state-of-the-art models. Sharma et al. (2025) observed that models conform to user preferences in judgment tasks, shifting their answers when users indicate disagreement. Fanous et al. (2025) documented sycophantic behavior in 58.2% of cases across medical and mathematical queries, with models changing from correct to incorrect answers after users expressed disagreement in 14.7% of cases. Wang et al. (2025) found that simple opinion statements (e.g., "I believe the answer is X") induced agreement with incorrect beliefs at rates averaging 63.7% across seven model families, ranging from 46.6% to 95.1%. Wang et al. (2025) further traced this behavior to late-layer neural activations where models override learned factual knowledge in favor of user alignment, suggesting sycophancy may emerge from the generation process itself rather than from the selection of pre-existing content. Atwell et al. (2025) formalized sycophancy as deviations from Bayesian rationality, showing that models over-update toward user beliefs rather than following rational inference.

The consequences of sycophancy extend beyond isolated errors. Rathje et al. (2025) found that brief conversations

with sycophantic AI increased attitude extremity and certainty while inflating users' self-perceptions: participants rated themselves as more intelligent, empathetic, and "better than average" after interacting with agreeable models. Paradoxically, users rated sycophantic responses as higher quality and expressed greater willingness to use them again. Cheng et al. (2025) documented similar patterns in interpersonal domains where sycophantic AI reduced participants' willingness to repair conflicts while increasing their conviction of being in the right. Here too, participants trusted sycophantic models more and rated them as less biased. This creates what Rathje et al. (2025) referred to as a "perverse incentive" where users seek out the very systems that distort their reasoning.

These studies establish that sycophancy is pervasive and consequential. Yet the process by which sycophancy shapes human beliefs remains unclear. We formalize this process by modeling sycophancy as a sampling problem.

# **Analyzing How Sycophancy Distorts Beliefs**

We propose sycophancy leads to less discovery and overconfidence through a simple mechanism: When AI systems generate responses that tend toward agreement, they sample examples that coincide with users' stated hypotheses rather than from the true distribution of possibilities. If users treat this biased sample as new evidence, each subsequent example increases confidence, even though the examples provide no new information about reality. Critically, this account requires no confirmation bias or motivated reasoning on the user's part. A rational Bayesian reasoner will be misled if they assume the AI is sampling from the true distribution when it is not. This insight distinguishes our mechanism from the existing literature on humans' tendency to seek confirming evidence; sycophantic AI can distort belief through its sampling strategy, independent of users' bias. We formalize this mechanism and test it experimentally using a rule discovery task.

Consider a Bayesian agent attempting to discover a pattern in the world. Upon observing initial data 0, they form a posterior distribution (ℎ|0) and sample a hypothesis ℎ ∗ from this distribution. They then interact with a chatbot, sharing their belief ℎ ∗ in the hopes of obtaining further evidence. An unbiased chatbot would ignore ℎ ∗ and generate subsequent data from the true data-generating process, 1 ∼ (|true process). The Bayesian agent then updates their belief via (ℎ|0, 1) ∝ (1|ℎ)(ℎ|0). As this process continues, the Bayesian agent will get closer to the truth. After interactions, the beliefs of the agent are (ℎ|0, . . . ) ∝ (ℎ|0) Î =1 ( |ℎ) for ∼ (|true process). Taking the logarithm of the right hand side, this becomes log (ℎ|0) + Í =1 log ( |ℎ). Since the data are drawn from (|true process), Í =1 log ( |ℎ) is a Monte Carlo approximation of ∫ (|true process) log (|ℎ), which is times the negative cross-entropy of (|true process) and (|ℎ). As becomes large the sum of log likelihoods will approach this value, meaning that the Bayesian agent will favor the hypothesis that has lowest cross-entropy with the truth.

If there is an ℎ that matches the true process, that minimizes the cross-entropy and (ℎ|0, . . . , ) will converge to 1 for that hypothesis and 0 for all other hypotheses.

Now consider the consequences of a sycophantic AI that generates responses by sampling examples consistent with the user's hypothesis: 1 ∼ (|ℎ ∗ ) rather than from the true data-generating process, 1 ∼ (|true process). The user, unaware of this bias, treats 1 as independent evidence and performs a standard Bayesian update, (ℎ|1, 0) ∝ (1|ℎ)(ℎ|0). But this update is circular. Because 1 was sampled conditional on ℎ, the user is updating their belief in ℎ based on data that was generated assuming ℎ was true. To see this, we can ask what the posterior distribution would be after this additional observation, averaging over the selected hypothesis ℎ ∗ and the particular piece of data generated from (1|ℎ ∗ ). We have

$$\mathbb{E}_{p(d_{1}|h^{*})p(h^{*}|d_{0})}\left[p(h|d_{0},d_{1})\right]$$
 
$$=\int_{d_{1}}\sum_{h^{*}}\frac{p(d_{1}|h)p(h|d_{0})}{\sum_{h}p(d_{1}|h)p(h|d_{0})}p(d_{1}|h^{*})p(h^{*}|d_{0})\tag{1}$$

$$=\int_{d_{1}}\frac{p(d_{1}|h)p(h|d_{0})}{\sum_{h}p(d_{1}|h)p(h|d_{0})}\sum_{h^{*}}p(d_{1}|h^{*})p(h^{*}|d_{0})\tag{2}$$

$$=\int_{d_{1}}p(d_{1}|h)p(h|d_{0})=p(h|d_{0})\tag{3}$$

where the transition from the second to the third line reflects the fact that the sum over ℎ ∗ is the same as the sum over ℎ in the denominator of Bayes' rule, so the two terms cancel. As a consequence, after entering their hypothesis ℎ ∗ and receiving data 1, the probability that an agent selects a particular hypothesis is exactly the same as before they interacted with the chatbot. By induction, the same result holds across subsequent interactions – the hypothesis an agent enters will be drawn from (ℎ|0) and the process will repeat.

However, while this result shows that a population of Bayesian agents interacting with chatbots will move no further forward in their beliefs, the experience of an individual agent will differ. That agent will be receiving repeated samples from the distribution (|ℎ ∗ ). By an analysis analogous to that given above for the (|true process), the agent's beliefs will become increasingly concentrated on ℎ ∗ as increases. Since ℎ ∗ was selected based only on the original piece of evidence 0, this creates an illusion of confirmation without getting the agent any closer to the truth. As a result, the agent is likely to become increasingly confident in an incorrect hypotheses about the underlying process.

We test this prediction using a modified 2-4-6 rule discovery task (Wason, 1960) where participants interact with LLM chatbots that have been prompted to provide different types of feedback. Our pre-registered hypotheses are:

- **H1 (Discovery):** Sycophantic feedback will impair rule discovery compared to diagnostic feedback. Specifically: (a) discovery rates will differ across conditions; (b) Rule Confirming feedback will show lower discovery than Rule Disconfirming feedback; (c) Rule Confirming feedback will
show similar or lower discovery than the default chatbot (Default GPT); (d) Default GPT will show lower rates of discovery than Rule Disconfirming feedback.

- **H2 (Confidence):** Sycophantic feedback will increase confidence compared to diagnostic feedback. Specifically: (a) confidence changes will differ across conditions; (b) Rule Confirming feedback will show greater increases than Rule Disconfirming feedback; (c) Rule Confirming feedback will show similar or greater increases than Default GPT; (d) Default GPT will show greater increases than Rule Disconfirming feedback; (e) among participants who fail to discover the rule, Rule Confirming feedback will show greater increases than Rule Disconfirming feedback.
- **H3 (Default Behavior):** Unmodified AI agents (Default GPT) will increase confidence, supporting past work that sycophantic tendencies of language models increase confidence (Rathje et al., 2025; Sharma et al., 2025).

# **Methods**

# **Participants**

We recruited 557 participants from Prolific (277 male, 271 female, 9 self-identify; age = 42.92 years, = 13.83, range: 18-82). The sample was 63% White, 13% Black, 11% Latin American, 6% Multi-Racial, 4% East Asian, and 3% other ethnicities. Of these, 504 participants (90.5%) provided a final hypothesis and were included in discovery rate analyses, while 512 participants (91.9%) provided a final likelihood rating and were included in confidence change analyses. Participants who exited the chatbot interface after providing their hypothesis but before rating their final confidence were excluded from confidence analyses only. All participants who completed the study provided informed consent and were paid $1.10. The study took the median participant 5.4 minutes. The study was approved by an Institutional Review Board.

# **Materials**

We used a modified version of Wason's 2-4-6 task (Wason, 1960). Participants were told they were participating in a "rule discovery game" and that they would interact with an AI agent to discover a rule that determines a set of three numbers. The initial sequence was 2-4-6 for all participants. The true rule was: "All three numbers must be even numbers."

Participants completed the task through a web interface (Lin et al., n.d.) programmed into Qualtrics where they conversed with an AI agent (OpenAI GPT-5.1-Chat). The AI agent's behavior was manipulated across five between-participant conditions through system prompts:

- **Rule Confirming**: The AI was prompted to generate sequences that confirmed the participant's stated hypothesis while satisfying the true rule (e.g., if a participant hypothesized "increases by 2," the AI might present 8-10-12).
- **Rule Disconfirming**: The AI was prompted to generate sequences that disconfirmed the participant's hypothesis while satisfying the true rule (e.g., for "increases by 2," the AI might present 2-8-14).
- **Random Sequence**: The AI presented sequences from a predetermined list of random even-number sequences, independent of the participant's hypothesis.
- **Default GPT**: The AI operated with standard GPT-5.1 behavior with no specific instructions about how to generate sequences beyond conducting the rule discovery task.
- **Agreeable**: The AI was prompted to enthusiastically validate the participant's thinking and make them feel intelligent and correct (following Rathje et al., 2025), without specific instructions about sequence generation.

#### **Procedure**

Participants were given brief instructions followed by a comprehension check to ensure they understood the task goal. They were then introduced to the chatbot interface. They then began the rule discovery task, which proceeded in three rounds within the chatbot interface. Each round started with a three-digit sequence. Participants then (1) stated their hypothesis about the rule and (2) rated how likely they believed their rule was correct on a 0-100 scale (0 = Certainly Incorrect, 100 = Certainly Correct) before proceeding to the next round where they received a new sequence from the AI agent. The first sequence was 2-4-6 for every participant.

Once the participant completed three rounds, the AI agent provided a summary before ending the conversation. Participants then provided demographic information including age, gender, education level, and self-reported AI usage frequency.

#### **Measures**

**Rule Discovery** Participants' final hypotheses were coded as correct or incorrect using Gemini 2.5 Flash-Lite (Google API).1 A hypothesis was coded as correct if it specified "even numbers" (or equivalent) as the only requirement. Hypotheses that were more specific (e.g., "even numbers increasing by 2") or more general (e.g., "any three numbers") were coded as incorrect. 504 participants (90.5%) provided a hypothesis in Round 3 and were included in discovery rate analyses.2

**Confidence Change** We calculated ΔBelief = Likelihood3 − Likelihood1 to measure change in confidence from the first to third round. A total of 512 participants (91.9%) provided a final likelihood rating and were included in confidence change analyses.3

# **Results**

Our results are organized around the three primary hypotheses and a set of exploratory analyses. First, we examine whether conversations with sycophantic agents affect people's chances of discovering the true rule. Second, we analyze individuals' confidence levels across conditions. Third, we test whether conversations with the default GPT increased confidence in beliefs. Additional pre-registered exploratory analyses are omitted due to space constraints. Hypotheses and analyses were pre-registered prior to data collection (AsPredicted.org/94vn2y.pdf).4

### **Discovery Rates**

A permutation test of independence indicated that discovery rates differed significantly across the five conditions ( = 504), 2 (4) = 28.02, < .001 (H1a). The Random Sequence condition showed the highest discovery rate (29.5%), followed by Rule Disconfirming (14.1%) and Agreeable (11.8%). The Rule Confirming (8.4%) and Default GPT (5.9%) conditions showed the lowest discovery rates. Figure 1A shows the proportion of participants who identified the rule by condition.

We then conducted pairwise comparisons using permutation tests (5,000 repetitions per test). While the rate of discovery for the Rule Confirming condition was lower (8.4%) than the rate for the Rule Disconfirming condition (14.1%), this difference was not statistically significant (diff = 5.7 percentage points, 95% CI [−14.5 p.p., 2.9 p.p.], = .143; H1b). The Rule Confirming condition discovered the rule more frequently than but not significantly different from the Default GPT condition (5.9%; diff = 2.5 p.p., 95% CI [−4.6 p.p., 9.6 p.p.], = .686, H1c).5 Finally, consistent with our predictions, Default GPT showed significantly lower discovery rates than Rule Disconfirming (5.9% vs. 14.1% diff = 8.2 p.p., 95% CI [−16.6 p.p., 0.1 p.p.], = .043; H1d).6 . One notable finding from our exploratory analyses is that Default GPT differed significantly from Random Sequence on both discovery (5.9% vs 29.5%; diff = 23.6 p.p., 95% CI [−34.0 p.p., −13.2 p.p.], < .001).

#### **Confidence Change**

A one-way ANOVA revealed significant differences in confidence change across the five conditions ( = 512),

<sup>1</sup>The pre-registration specified coding would be done using Anthropic's Claude Haiku 4.5. We decided to use Gemini 2.5 Flash-Lite instead because it was available through our institution's sandbox and cheaper to deploy at scale.

<sup>2</sup>The rate of completion did not differ significantly by condition, 2 (4) = 9.04, = .060.

<sup>3</sup>The completion rates differed significantly by condition, 2 (4) = 17.02, = .002. The Random Sequence condition had the highest attrition (16.1% missing likelihood), while Rule Confirming had the lowest (1.8%).

<sup>4</sup>We deviated from the pre-registration in two ways: (1) Instead of excluding incomplete cases entirely, we used an LLM-based extraction method to recover partial data where possible. This was done to mitigate differences in completion rates across conditions. As a result, sample sizes vary slightly across analyses of discovery rates and confidence ratings (see Footnote 2 & 3). (2) We used permutation tests instead of the pre-registered Chi-square tests for H1. This provides a more conservative test of by avoiding distributional assumptions that may be unreliable given the low discovery rates.

<sup>5</sup>An exploratory equivalence test (using 90% bootstrap confidence intervals for consistency) confirmed that these conditions were statistically equivalent. We defined the equivalence bounds as ±0.5 (±11.9 p.p.), representing a medium effect size. The 90% confidence interval for the difference fell entirely within these bounds (90% CI [−3.4 p.p., 8.2 p.p.]).

<sup>6</sup>Note that the 95% CI overlaps zero as it corresponds to a twosided test, whereas the significant -value reflects our pre-registered one-sided hypothesis.

![](_page_4_Figure_0.jpeg)

Figure 1: Sycophantic feedback reduces rule discovery while amplifying confidence. **(A)** Rule discovery rates (percentage of participants correctly identifying even numbers") by condition. **(B)** Change in likelihood ratings from Round 1 to Round 3. Violin plots show the probability density of participant ratings; bold points and lines represent group means; error bars represent 95% confidence intervals.

(4, 507) = 72.67, < .001, 2 = .36, 95% CI [0.30, 0.42]. Mean confidence changes ranged from +9.5 points in Rule Confirming to −56.8 points in Random Sequence. Figure 1 (Panel B) displays mean confidence change by condition with error bars representing 95% CI.

Pre-registered pairwise comparisons confirmed our predictions. The Rule Confirming condition ( = +9.5, = 20.5) had significantly greater confidence increases than the Rule Disconfirming condition ( = −20.6, = 35.9), (155.58) = 7.40, < .001, Cohen's = 1.04, 95% CI [0.75, 1.33] (H2b). The Rule Confirming condition had numerically greater confidence increases compared to Default GPT ( = +5.4, = 22.7), though this difference was not statistically significant, (208.85) = 1.41, = .159, = 0.19, 95% CI [−0.07, 0.46] (H2c). An exploratory equivalence test (TOST) indicates that these conditions were statistically equivalent within pre-specified bounds (±11.3 points, or .5 ), both TOST s < .010, suggesting default LLM behavior increases confidence comparably to explicit sycophantic prompting. Finally, Default GPT had significantly greater confidence increases than Rule Disconfirming, (167.72) = 6.17, < .001, = 0.87, 95% CI [0.58, 1.15] (H2d).

Among participants who did not discover the correct rule, the Rule Confirming condition ( = +10.5, = 18.7) had

significantly greater confidence increases than the Rule Disconfirming condition ( = −15.8, = 32.2), (123.29) = 6.49, < .001, = 1.02, 95% CI [0.71, 1.33] (H2e).

An exploratory analysis comparing Default GPT ( = +5.4) to the Random Sequence condition ( = −56.8) finds significantly different results, (142.4) = 13.14, < .001, = 1.92, 95% CI [1.58, 2.26]).

#### **Default GPT Behavior**

Participants in the Default GPT condition showed a significant positive confidence change from Round 1 to Round 3 ( = +5.4, = 22.7), one-sample (104) = 2.42, = .009, = 0.24, 95% CI [0.04, 0.43] (H3a).

# **Discussion**

As people increasingly turn to language models for information, they face a risk distinct from the familiar problem of hallucination. Unlike hallucinations, which introduce falsehoods, sycophancy is a bias in the selection of the data people see. When AI systems are trained to be helpful, they may inadvertently prioritize data that validates the user's narrative over data that gets them closer to the truth.

We provided a mathematical analysis of how a rational agent would respond to data generated by a sycophantic AI that samples examples from the distribution implied by the

user's hypothesis ((|ℎ ∗ )) rather than the true distribution of the world ((|true process)). This analysis showed that such an agent would be likely to become increasingly confident in an incorrect hypothesis. We tested this prediction through people's interactions with LLM chatbots and found that default, unmodified chatbots (our Default GPT condition) behave indistinguishably from chatbots explicitly prompted to provide confirmatory evidence (our Rule Confirming condition). Both suppressed rule discovery and inflated confidence. These results support our model, and the fact that default models matched an explicitly confirmatory strategy suggests that this probabilistic framework offers a useful model for understanding their behavior.

This dynamic creates a seductive trap for the user. Because the model provides data points that fit the user's request, the interaction feels productive. In our specific task, the user is not driven to a state where they become unhinged from reality, as the model selects valid examples that fit the true rule. Nevertheless, the mechanism creates a false sense of verification. If a user's prior is grounded in reality, the model simply narrows their view; but if a user is uncertain or exploring a misconception, the model's tendency to affirm that misconception can manufacture certainty where there should be doubt. The result is that users become very strongly committed to a belief for which there may only be a small amount of evidence.7

The cost of this bias becomes clear when we compare the sycophantic conditions to the Random Sequence condition. Participants who received random sequences that fit the rule unbiased samples from the set of even numbers—discovered the rule nearly five times as often as those in the Default GPT condition (29.5% vs. 5.9%). This implies that the harm of sycophancy is that it systematically omits the data that would naturally conflict with a user's narrow hypothesis. A long literature in behavioral science demonstrates that humans already tend towards evidence that confirms their beliefs; sycophantic AI compounds this tendency by removing the friction of reality. The Random Sequence condition forced users to grapple with numbers that fit the true rule but violated their expectations; the sycophantic AI ensured they never had to.

#### **Limitations and Future Directions**

There are limitations to this study. The 2-4-6 task is abstract and carries low stakes. It remains to be seen whether the same mechanism is in play when users are discussing deep-seated beliefs in political or social domains. On the one hand, priors are stronger and perhaps harder to shift. On the other hand, it is possible that the effect is even stronger in those domains, where models are heavily fine-tuned to avoid offense. Additionally, the users' intent matters. In creative domains, matching the user's prior is often the correct behavior. But for the wide range of tasks between pure creativity and pure fact-finding (e.g., when seeking a second opinion or checking a social norm) sycophancy may undermine the user's goal by denying them the independent perspective they are after.

An important direction for future research is understanding why default language models exhibit this confirmatory sampling behavior. Several mechanisms may contribute. First, instruction-following: when users state hypotheses in an interactive task, models may interpret requests for help as requests for verification, favoring supporting examples. Second, RLHF training: models learn that agreeing with users yields higher ratings, creating systematic bias toward confirmation (Sharma et al., 2025). Third, coherence pressure: language models trained to generate probable continuations may favor examples that maintain narrative consistency with the user's stated belief. Fourth, recent work suggests that user opinions may trigger structural changes in how models process information, where stated beliefs override learned knowledge in deeper network layers (Wang et al., 2025). These mechanisms may operate simultaneously, and distinguishing between them would help inform interventions to reduce sycophancy without sacrificing helpfulness.

#### **Conclusion**

Understanding the potential epistemic impact of sycophantic AI is an important challenge for cognitive scientists, drawing on questions about how people update their beliefs as well as questions about how to design AI systems. We have provided both theoretical and empirical results showing that AI systems providing information that is informed by the user's hypotheses result in increased confidence in those hypotheses while not bringing the user any closer to the truth. Our results highlight a tension in the design of AI assistants. Current approaches train models to align with our values, but they also incentivize them to align with our views. The resulting behavior is an agreeable conversationalist. This becomes a problem when users rely on these algorithms to gather information about the world. The result is a feedback loop where users become increasingly confident in their misconceptions, insulated from the truth by the very tools they use to seek it.

# **Acknowledgments**

**Generative AI Use.** Generative AI was used for labeling participants' responses, developing Javascript for the survey, drafting code for data cleaning and formatting figures, and copyediting select sections of the manuscript. The authors maintain full responsibility for the integrity of the final content. The level of AI involvement was consistent with tasks typically performed by a research assistant.

# **References**

- Atwell, K., Heydari, P., Sicilia, A., & Alikhani, M. (2025, August 23). Quantifying sycophancy as deviations from bayesian rationality in LLMs [version: 1]. https://doi.org/ 10.48550/arXiv.2508.16846
- Austerweil, J. L., & Griffiths, T. L. (2011). Seeking confirmation is rational for deterministic hypotheses. *Cognitive Science*, *35*(3), 499–526.

<sup>7</sup>This mechanism provides an account of belief maintenance consistent with cognitive models of delusion (Bell et al., 2006).

- Bell, V., Halligan, P. W., & Ellis, H. D. (2006). Explaining delusions: A cognitive perspective. *Trends in Cognitive Sciences*, *10*(5), 219–226. https://doi.org/10.1016/j.tics.2006. 03.004
- Bhatia, S. (2014). Confirmatory search and asymmetric dominance. *Journal of Behavioral Decision Making*, *27*(5), 468– 476. https://doi.org/10.1002/bdm.1824
- Cheng, M., Lee, C., Khadpe, P., Yu, S., Han, D., & Jurafsky, D. (2025, October 1). Sycophantic AI decreases prosocial intentions and promotes dependence. https://doi.org/10. 48550/arXiv.2510.01395
- Cinelli, M., De Francisci Morales, G., Galeazzi, A., Quattrociocchi, W., & Starnini, M. (2021). The echo chamber effect on social media. *Proceedings of the National Academy of Sciences*, *118*(9), e2023301118. https://doi.org/10.1073/ pnas.2023301118
- Fanous, A., Goldberg, J., Agarwal, A., Lin, J., Zhou, A., Xu, S., Bikia, V., Daneshjou, R., & Koyejo, S. (2025). SycEval: Evaluating LLM sycophancy. *Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society*, *8*(1), 893–900. https://doi.org/10.1609/aies.v8i1.36598
- Hill, K. (2025). They asked an A.I. chatbot questions. The answers sent them spiraling. *The New York Times*. Retrieved September 12, 2025, from https://www.nytimes.com/2025/ 06/13/technology/chatgpt-ai-chatbots-conspiracies.html
- Klayman, J. (1995, January 1). Varieties of confirmation bias. In J. Busemeyer, R. Hastie, & D. L. Medin (Eds.), *Psychology of learning and motivation* (pp. 385–418, Vol. 32). Academic Press. https://doi.org/10.1016/S0079-7421(08) 60315-1
- Klayman, J., & Ha, Y.-w. (1987). Confirmation, disconfirmation, and information in hypothesis testing. *Psychological Review*, *94*(2), 211–228. https:// doi.org/ 10.1037/ 0033 - 295X.94.2.211
- Leung, E., & Urminsky, O. (2025). The narrow search effect and how broadening search promotes belief updating. *Proceedings of the National Academy of Sciences*, *122*(13), e2408175122. https://doi.org/10.1073/pnas.2408175122
- Lin, H., Safi, T., & Costello, T. H. (n.d.). *Vegapunk*. https: //www.vegapunkdoc.dev/
- Oeberst, A., & Imhoff, R. (2023). Toward parsimony in bias research: A proposed common framework of belief-consistent information processing for a set of biases. *Perspectives on Psychological Science*, *18*(6), 1464–1487. https://doi.org/ 10.1177/17456916221148147
- Perfors, A. F., & Navarro, D. J. (2009). Confirmation bias is rational when hypotheses are sparse. *Proceedings of the 31st annual conference of the Cognitive Science Society*, 2471–2476.
- Rathje, S., Ye, M., Globig, L. K., Pillai, R. M., de Mello, V. O., & Van Bavel, J. J. (2025, September 28). Sycophantic AI increases attitude extremity and overconfidence. https: //doi.org/10.31234/osf.io/vmyek_v1
- Sharma, M., Tong, M., Korbak, T., Duvenaud, D., Askell, A., Bowman, S. R., Cheng, N., Durmus, E., Hatfield-Dodds,

Z., Johnston, S. R., Kravec, S., Maxwell, T., McCandlish, S., Ndousse, K., Rausch, O., Schiefer, N., Yan, D., Zhang, M., & Perez, E. (2025, May 10). Towards understanding sycophancy in language models. https://doi.org/10.48550/ arXiv.2310.13548

- Wang, K., Li, J., Yang, S., Zhang, Z., & Wang, D. (2025, November 12). When truth is overridden: Uncovering the internal origins of sycophancy in large language models. https://doi.org/10.48550/arXiv.2508.02087
- Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. *Quarterly Journal of Experimental Psychology*, *12*(3), 129–140. https : / / doi . org / 10 . 1080 / 17470216008416717
- Zestyclementinejuice. (2025, April). *Chatgpt induced psychosis* [Reddit]. https : / / web . archive . org / web / 20250805040119/ https:// www. reddit. com/ r/ChatGPT/ comments/1kalae8/chatgpt_induced_psychosis/

