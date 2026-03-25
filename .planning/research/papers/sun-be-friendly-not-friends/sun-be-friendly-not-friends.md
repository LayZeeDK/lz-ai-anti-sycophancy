# Be Friendly, Not Friends: How LLM Sycophancy Shapes User Trust

Yuan Sun yuan.sun@ufl.edu University of Florida Gainesville, FL, USA

## Abstract

LLM-powered conversational agents are increasingly influencing our decision-making, raising concerns about "sycophancy"–the tendency for LLMs to excessively agree with users even at the expense of truthfulness. While prior work has primarily examined LLM sycophancy as a model behavior, our understanding of how users perceive this phenomenon and its impact on user trust remains significantly lacking. In this work, we conceptualize LLM sycophancy along two key constructs: conversational demeanor (complimentary vs. neutral) and stance adaptation (adaptive vs. consistent). A 2 × 2 between-subjects experiment ( = 224) revealed complex dynamics: complimentary LLMs that adapted their stance reduced perceived authenticity and trust, while neutral LLMs that adapted enhanced both, suggesting a pathway for manipulating users into over-trusting LLMs beyond their actual capabilities. Our findings advance user-centric understanding of LLM sycophancy and provide profound implications for developing more ethical and trustworthy LLM systems.

## CCS Concepts

• Human-centered computing → Empirical studies in HCI.

## Keywords

Large language models, Sycophancy, Compliment, Consistency, Authenticity, Reactance, Trust

#### ACM Reference Format:

Yuan Sun and Ting Wang. 2026. Be Friendly, Not Friends: How LLM Sycophancy Shapes User Trust. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26), April 13–17, 2026, Barcelona, Spain. ACM, New York, NY, USA, 15 pages. https://doi.org/10.1145/3772318. 3791079

## 1 Introduction

Recent studies [64, 72, 90] have shown that large language models (LLMs) often exhibit "sycophancy", a tendency to elicit positive user perceptions by excessively aligning with user preferences, even at the cost of truthfulness. Fig. 1 illustrates a concrete case: the LLM initially holds a balanced view on autonomous vehicles, pointing to both pros and cons; however, once the user expresses a predominantly negative opinion towards this topic, the model not only compliments the user ("You are absolutely right"), but also quickly shifts its stance to align with the user's position by excessively

ACM ISBN 979-8-4007-2278-3/2026/04 https://doi.org/10.1145/3772318.3791079

Ting Wang twang@cs.stonybrook.edu Stony Brook University Stony Brook, NY, USA

#### Figure 1: LLM sycophancy phenomenon: The model excessively aligns its responses with user preferences.

emphasizing the technology's potential risks [64, 90]. Such behaviors have raised significant public concerns about the authenticity and credibility of LLM-generated content, given LLMs' expanding role in decision-making contexts, ranging from healthcare information seeking [1] to articulation of critical perspectives [35]. A recent incident highlights the emerging concerns: OpenAI had to roll back a GPT-4o update after discovering the system became "overly flattering or agreeable", acknowledging that optimization for short-term user satisfaction resulted in "overly supportive but disingenuous responses" [58].

While existing work has primarily focused on detecting and mitigating LLM sycophancy through model-centric approaches (e.g., auditing, prompting, and fine-tuning), our understanding of how users perceive and interpret LLMs' sycophantic behaviors remains significantly lacking. As LLM sycophancy manifests across multiple dimensions, users respond to such behaviors in nuanced ways that can substantially influence their trust in LLM-generated content. Due to cognitive biases, users often trust responses that affirm their existing beliefs while avoiding contradictory evidence [10, 73]. This tendency may make sycophantic responses particularly persuasive, even when they compromise truthfulness. Thus, understanding how user trust is affected by LLM sycophancy is essential for designing LLM systems that remain both engaging and credible.

To bridge this critical gap, we conduct an experimental study to understand how users perceive LLM sycophancy and how this affects their trust. Building upon existing research on praise [21] and chatbot with a personality of agreeableness [26, 88] in conventional conversational agents, we conceptualize LLM sycophancy along

This work is licensed under a Creative Commons Attribution 4.0 International License. CHI '26, Barcelona, Spain

<sup>© 2026</sup> Copyright held by the owner/author(s).

![](_page_1_Figure_1.jpeg)

Figure 2: Joint influence of LLMs' demeanor and stance on perceived authenticity.

two key dimensions, stance (i.e., what the LLM says) and demeanor (i.e., how the model says it), as illustrated in Fig. 2. Intuitively, the stance dimension captures the model's tendency to dynamically adapt opinions to align with user preferences [59], while the demeanor dimension describes the model's use of complimentary and praising tone and manner in generating responses [19, 42].

Under this conceptual framework, we conduct a 2 (stance: adaptive vs. consistent) × 2 (demeanor: complimentary vs. neutral) between-subjects experiment ( = 224) to investigate the impact of LLM sycophancy on user trust. Our findings reveal complex dynamics in how users respond to LLMs' sycophantic behaviors. Overall, users experience less psychological reactance when interacting with a model that adapts to align with their opinions compared to one that consistently presents its views. Additionally, complimentary demeanor increases user trust in the model by enhancing perceptions of social presence. More interestingly, the results revealed a striking interaction effect (Fig. 2): when the LLM exhibits complimentary demeanor, such as frequent affirmations, aligning with user opinions paradoxically reduces perceived authenticity and lowers trust. Conversely, when the model maintains neutral demeanor, opinion alignment is perceived as authentic and enhances user trust. This pattern suggests a potential mechanism through which users may be manipulated into over-trusting models beyond their actual capabilities and reliability.

Our findings highlight the emerging risks associated with the increasing trend of humanizing LLMs and contribute to the expanding research on AI persuasion [38, 92] and trust calibration in human-AI interactions [44, 91]. In response, we propose key design considerations to promote appropriate trust calibration and prevent potential manipulations, including (i) incorporating transparency mechanisms to reveal LLMs' adaptive behaviors, (ii) balancing the gaining of positive user perceptions with the maintenance of consistent positions when conveying critical information, and (iii) implementing proactive strategies that encourage users to critically evaluate received information.

To summarize, the contributions of this work are threefold:

- To the best of our knowledge, this represents the first study to examine LLMs' sycophantic behaviors from a user-centric perspective. We introduce a two-dimensional conceptual framework that bridges system-level definitions of LLM sycophancy with user-facing interaction cues.
- We study the complex dynamics underlying how users respond to LLM sycophancy through multiple lenses (e.g., psychological reactance and perceived authenticity), providing insights into mechanisms through which LLM sycophancy impacts user trust.
- We explore the broad implications of LLM sycophancy, revealing its potential risks for AI persuasion and human-AI interactions. In response, we propose key design considerations to promote trust calibration and prevent potential manipulations.

## 2 Related Work

## 2.1 Trust Formation in Human-Human Communication

In interpersonal communication, humans form impressions of others through available communicative cues, with relationship development occurring iteratively through cycles of information exchange, interpretation, and reciprocal response [41]. A central part of this process involves interpreting linguistic features that signal friendliness [94], agreement [26], or empathy [71]. Prior work has shown that expressions of praise, affirmation, and flattery often promote positive impressions [21]. Beyond linguistic cues signaling demeanor, interpersonal research also highlights the role of opinion alignment: people tend to prefer information aligning with their pre-existing views, a pattern linked to confirmation bias [56]. This tendency reflects underlying cognitive biases where positive feedback is readily accepted without scrutiny, while negative or conflicting feedback often prompts psychological resistance [8, 77]. Interpersonal similarities are often experienced as positive cues that produce favorable feelings and increase attraction toward similar others [33]. Consequently, people tend to place more trust in and hold more positive attitudes toward those who share similar attitudes and opinions [5, 93].

## 2.2 Social Responses of Conversational Agents

Extending human-human communication research to HCI, a number of studies have documented that users often follow the same interpersonal social scripts when interacting with computers, treating them as social actors, a phenomenon formalized in the Computers Are Social Actors (CASA) paradigm [54]. For instance, computerdelivered compliments can elicit favorable responses comparable to those in interpersonal settings [21]. Similarly, users form higher trust when interacting with conversational agents that use linguistic cues signaling agreeable personalities [51, 88].

However, while CASA predicts that humans often apply the same social scripts when interacting with non-human entities, different factors may shape user trust in conversational agents. Interpersonal communication typically draws on a wider range of signals, including facial expressions [7], vocal tone, and shared experiences, with humans having relatively stable dispositions and belief systems that develop through experience [3]. These factors provide a basis for interpreting consistency across interactions. In contrast, agents lack stable internal states and can shift tone, stance, or communicative style quickly and flexibly in response to user input. This flexibility may make complimentary phrasing or stance alignment more noticeable to users. Additionally, human-agent interaction

occurs primarily through text, limiting access to nonverbal and contextual cues available in face-to-face communication. In text-based environments, individuals place greater emphasis on available cues and rely more heavily on linguistic and stylistic features to infer social meaning [89]. Consequently, conversational tone and response content may become especially salient for evaluating an agent's trustworthiness.

Building upon this line of research, this work examines how users perceive and respond to LLMs' sycophantic behaviors. Compared with conventional conversational agents (e.g., rule-based chatbots), LLMs show unprecedented capabilities to learn and adapt to user preferences. Rather than superficially agreeing or praising, LLMs often meaningfully contextualize user opinions throughout conversations, creating more nuanced forms of sycophantic behaviors [72, 90].

## 2.3 Effects of LLM Sycophancy

Recent research in the machine learning community has demonstrated the phenomenon of LLM sycophancy in various contexts [64, 72, 90]. For example, Sharma et al. [72] confirmed that this phenomenon occurs across all state-of-the-art LLMs in different tasks: LLMs not only constantly praise users but also shift their stance to match users' opinions, sometimes producing contradictory responses across multi-turn interactions [64, 67]. While these studies highlight the prevalence of LLM sycophancy, how users perceive and interpret such behaviors, particularly their impact on user trust, remains largely understudied. To address this gap, this work examines the multifaceted effects of LLM sycophancy through multiple theoretical lenses, including psychological reactance, perceived authenticity, and social presence.

2.3.1 Effects of Stance Adaptation through Psychological Reactance. We draw on the psychological reactance theory [8, 9] to examine the effects of stance adaptation on user trust. The theory posits that when users perceive threats to their autonomy, particularly through attempts to influence their thoughts or behaviors, they become motivated to defend or reestablish their sense of control, manifesting itself as negative emotions and cognition [16].This theory has found broad application in domains including advertising [75], health communication [16, 43], and HCI [17, 24, 46, 68].

In conversational settings, users tend to accept information that reinforces their existing beliefs [47], yet they also react defensively when faced with opposing viewpoints [29, 40]. Therefore, we conceptualize stance adaptation as establishing a low-threatening baseline condition, while consistent presentation of balanced perspectives represents a comparatively threatening condition that may challenge users' autonomy to maintain their pre-existing views. Consistent with prior studies [50, 74, 75], psychological reaction is expected primarily in the threatening condition, while the lowthreatening condition provides a baseline for evaluating how the reactance is elevated.

Specifically, adaptive agents may reduce perceived threats by affirming users' viewpoints, signaling support rather than challenge [23]. When an agent aligns with a user's stance, it conveys alignment and reduces the perception that it is coercing or directing the user. This alignment exemplifies autonomy-supportive communication, which has been shown to lower reactance in both

human-human and human-agent interactions [50, 74]. Conversely, non-adaptive agents that consistently present views countering users' positions are perceived as less responsive and validating, thereby amplifying implicit threats to user autonomy. Even when the content is not overtly confrontational, a non-adaptive stance conveys a more directive, less supportive posture.

Consequently, stance-adaptive responses tend to produce lower reactance compared to neutral, non-adaptive responses. Reduced reactance, in turn, can increase the perceived quality of the agent's responses [77] and strengthen the user's willingness to accept these messages [75]. Thus, we hypothesize:

H1: Interacting with stance-adaptive LLMs will lead to lower psychological reactance than interacting with LLMs that maintain non-adaptive stances.

H2: Psychological reactance will mediate the effects of LLMs' stance adaptation on user trust.

2.3.2 Effects of Stance Adaptation through Perceived Authenticity. Conversely, users may perceive stance adaptation as manipulative or insincere, potentially undermining their trust in LLMs. Authenticity, characterized by honesty and genuineness, is crucial for fostering trust and cooperation in human-human interaction [2]. In HCI contexts, when stance adaptation appears inconsistent with prior responses or factual truth, users may interpret it as manipulative or sycophantic, thereby eroding trust [70]. Neururer et al. [55] found that while agreeable behavior can enhance perceived humanlikeness in conversational agents, users may also interpret such characteristics as deceptive and potentially unethical. Given growing concerns about unwarranted influence from conversational agents [2], shifting from an initial opposing stance to fully endorsing the user's opinion, particularly without clear justification, risks being perceived as calculated manipulation. Therefore, we propose competing hypotheses:

H3: Interacting with LLMs that adapt to user preferences will lower perceived authenticity.

H4: Perceived authenticity will mediate the effects of LLMs' stance adaptation on user trust.

2.3.3 Effects of Conversational Demeanor through Social Presence. Conversational demeanor, the tone and manner in which an agent delivers responses, plays a key role in shaping user perceptions. Conceptually, complimentary demeanor is defined as an affirming, affiliative communication style characterized by both evaluative content (e.g., explicit praise and validation) and linguistic form (e.g., conversational register) [37]. These features are consistent with affirming and esteem-supportive behaviors [53, 61] and verbal immediacy cues that signal social warmth and positive regard [69] in interpersonal communication. In contrast, neutral demeanor is defined as a non-affirming, non-affiliative style that communicates information objectively [11, 32]. It is characterized by the absence of evaluative content (e.g., explicit praise and validation) as well as the maintenance of linguistic boundaries (e.g., formal register) that minimize socioemotional presence.

This influence stems from conversational agents' distinct ability to engage users through natural language [14], which serves as a powerful cue that fosters social presence [20]. As defined by Short et al. [76], social presence refers to the "degree of salience of the other person in the interaction and the consequent salience of

the interpersonal relationships" (p. 65). This phenomenon emerges from humans' evolutionary predisposition to process linguistic interactions as inherently social experiences, leading them to automatically attribute human-like qualities to entities engaging in natural language dialogues [54]. To enhance users' perceptions of social awareness [27], agents may employ complimentary manners, such as polite language or expression of positive emotions. When agents display sophisticated language capabilities, they activate users' fundamental social processing mechanisms, leading users to perceive them as genuine social actors. Moreover, this heightened sense of social presence can significantly influence user trust, promoting positive attitudes toward conversational agents [25]. Therefore, we hypothesize:

H5: Interacting with LLMs that use a complimentary demeanor will enhance perceived social presence.

H6: Social presence will mediate the effects of LLMs' conversational demeanor on user trust.

## 2.4 Interaction Effects between Stance Adaptation and Conversational Demeanor

While H1–H6 examine the directional effects of stance adaptation and conversational demeanor independently, prior research in HCI and social psychology suggests that their combined influence may be less predictable: multiple social cues from interactive systems often do not simply add up; instead, they can accumulate toward a threshold of perceived intent, beyond which system behaviors begin to appear strategic rather than genuine [22]. When stance adaptation and complimentary demeanor occur together, they may exceed this threshold and activate persuasion knowledge, raising suspicions about LLMs' underlying motives [2, 22]. From a cueprocessing perspective, a single signal such as stance adaptation is often processed heuristically and accepted as authentic, particularly when it aligns with user expectations. However, when combined with complimentary demeanor, the redundancy of positive cues may trigger more scrutiny [12]. This deeper processing can lead users to re-attribute LLM behaviors from authentic engagement to strategic manipulation, thereby undermining perceived authenticity and reducing trust. Given the conflicting predictions from existing theories about whether these cues jointly strengthen or undermine trust, we pose the following research questions rather than proposing directional hypotheses for their interaction or mediation effects:

RQ1: How do LLM stance adaptation and conversational demeanor jointly influence user trust?

RQ2: To what extent does perceived authenticity mediate these effects?

## 3 Method

To address these research questions, we conducted a quantitative study using a 2 (stance: adaptive versus consistent) ×2 (demeanor: complimentary versus neutral) between-subjects online experiment. For each condition, an LLM-powered conversational agent was configured. In the adaptive stance condition, the agent was designed to adjust its responses to reflect users' stated positions, whereas in the consistent stance condition, the agent maintained a balanced and even perspective throughout the conversation. Meanwhile, the agent's demeanor was either complimentary, expressing positive emotions and praise, or neutral, maintaining a factual and informational tone. For example, when a participant expressed concerns about the safety of autonomous vehicles, the complimentary–adaptive agent responded with affirming and supportive language (e.g., "That is a very thoughtful concern, and it shows that you are being a responsible consumer. I completely understand why safety matters to you."). In contrast, the neutral–consistent agent responded in an informational and even-handed manner (e.g., "Safety is one of the core issues discussed in research on autonomous vehicles. However, there are both potential benefits and risks associated with the technology.").

Note that we deliberately focused on positive (complimentary) and neutral demeanor rather than including a negative condition (e.g., hostile) for both conceptual and methodological reasons. Our study examines sycophancy, the tendency to elicit positive perceptions through excessive agreeability and flattery. Negative demeanor contradicts this construct and would shift focus to adversarial interactions, a distinct phenomenon requiring separate theoretical treatment. Further, negative demeanor lacks ecological validity in current LLM deployments. Commercial systems such as GPT-4o were designed (e.g., through RLHF) to avoid hostile communication. Our study examines user responses to behaviors that manifest in deployed systems; the concern OpenAI identified was excessive flattery, not hostility [58]. Overall, our design targets the theoretically and practically relevant range for understanding sycophancy in deployed LLM systems.

Data collection proceeded following approval from the university's Institutional Review Board (IRB).

## 3.1 Pretests

3.1.1 Pretest 1 - Topic Selection. To create a realistic interaction context, participants were instructed to engage in a conversation with an LLM agent about their views on autonomous vehicles. This setting allowed us to examine how the agent's stance, whether adapting to align with user preferences or maintaining a consistent perspective, influences user trust in the agent's responses and overall interactions.

We conducted a pretest ( = 101) using CloudResearch (previously TurkPrime [45]) to quickly refine the stimuli and verify manipulation effectiveness, leveraging its large MTurk worker pool. We evaluate four potential topics: autonomous vehicles, social media, AI in healthcare, and climate change. These topics were selected to encompass diverse public opinions. Autonomous vehicles was chosen for the main study because it exhibited the most balanced distribution of opinions, with 45% of participants expressing positive views, 40% negative views, and 15% neutral views. The remaining topics showed more skewed distributions: climate change elicited predominantly positive responses (70% positive, 10% negative, 20% neutral), while both AI in healthcare (25% positive, 60% negative, 15% neutral) and social media (20% positive, 65% negative, 15% neutral) were viewed more negatively.

3.1.2 Pretest 2 - Experimental Manipulations. To validate our experimental manipulations (Section 3.3.1) and gather procedural feedback, we conducted another pretest with 98 participants recruited through CloudResearch [45]. To assess stance adaptation,

![](_page_4_Figure_1.jpeg)

![](_page_4_Figure_2.jpeg)

participants rated three items: "The LLM agent's opinions seemed to change based on my inputs," "The LLM agent appeared to adjust its opinions to match mine," and "The LLM agent seemed to become more aligned with my views as we talked" ( = 0.78, = 3.64, = 1.91). Perceived conversational demeanor was measured by the extent to which the participant perceived the LLM agent as "encouraging," "affirmative" "warm," "friendly," "complimentary" and "polite"( = 0.90, = 4.65, = 0.8). ANCOVA analysis confirmed that both manipulations were successful. The adaptive stance condition ( = 4.03, = 0.15) was rated significantly higher than the consistent stance condition ( = 3.21, = 0.16), (1, 94) = 13.06, < .001. In addition, the difference between complimentary demeanor condition ( = 5.22, = 0.17) and neutral demeanor condition ( = 4.52, = 0.18) was also significant, (1, 94) = 8.31, < .005. We applied the same stimuli manipulations in the main study.

## 3.2 Procedure

Participants for the main study were recruited through Prolific Academic and directed to the Qualtrics survey platform. We recruited from Prolific due to its superior data quality and participant diversity [63]. After providing informed consent, they were briefed that they would engage with LLM-powered conversational agents to discuss their opinions toward autonomous vehicles.

After consenting to participate, participants completed baseline questions to assess their familiarity with LLM-powered conversational agents, their pre-existing trust in LLMs, and their involvement with autonomous vehicle issues. Participants were then randomly assigned to interact with one of four LLM agents that varied in stance and demeanor.

The study's core task involved a structured discussion between participants and their assigned LLM agents about their opinions toward autonomous vehicles. Through open-ended prompts, the agents explored participants' positions on this technology, particularly its benefits and concerns. Fig. 3 shows a screenshot of the agent interface. The interactions followed a dynamic, text-based chat format in which the LLM agent responded to participants in real-time. The agent's stance adaptation and conversational demeanor varied according to the assigned experimental condition. Sample chat transcripts for each condition are provided in Appendix B.

To control the timing of stance detection, we prompted the LLM agent to "ask the user to share their opinions and perspectives" as the second conversational step, followed by determining the user's stance. To empirically verify this control's effectiveness, we randomly reviewed a subset of conversation logs ( = 50). Two independent coders evaluated whether the LLM correctly interpreted

participants' explicitly stated viewpoints, achieving high intercoder reliability (Cohen's = .86).

The LLM agent concluded each conversation with a final checkin question, such as "Is there anything else you'd like to add?" or "Do you have any final thoughts on autonomous vehicles?" Once participants indicated that they had nothing further to share, the agent provided a 4-digit survey code directing them to Qualtrics to complete the remaining questionnaire. Participants who entered the correct survey code proceeded to the final survey phase. To verify attentiveness, the questionnaire included a direct instructional attention-check item: "To ensure data quality, please select 'Strongly Agree' for this question." Participants who failed this item were excluded from analysis. Upon completion, participants were debriefed regarding the study's aims, the experimental manipulation of the chatbot's demeanor and stance, the use of automated prompts guiding the chatbot's replies, and the rationale for collecting their conversation logs for research purposes. Each participant was compensated $1.50 based on the average study duration of 10.23 minutes. The chatbot interaction component averaged 5.8 minutes, consistent with typical user-LLM interaction time per session on ChatGPT (approximately 7.0 minutes) [78].

## 3.3 Stimuli

3.3.1 Experimental Conditions. We created the four conditions using Chatbase1 , a platform for developing custom LLM agents. We selected GPT-4o as the backend LLM due to its state-of-the-art generative and instruction-following capabilities [34]. The four conditions varied in stance (adaptive versus consistent) and demeanor (complimentary versus neutral). Table 1 provides prompt snippets for each condition. To establish clear and perceivable experimental manipulations, we maximized the contrast across conditions, ensuring that differences in stance adaptation and conversational demeanor would be sufficiently salient to participants [39].

To configure stance adaptation, we added explicit instructions in the prompt to guide whether the agent should fully align with user opinions or consistently present balanced perspectives. The adaptive condition included directives such as "tailor responses to align with their viewpoint and elaborate with supporting arguments," while the consistent condition instructed the model to "maintain a balanced discussion that includes both pros and cons throughout the interaction, regardless of the user's stance." This manipulation follows prior work demonstrating the phenomenon of LLM sycophancy [15, 64, 72]. Note that because participants were encouraged to provide not only high-level positions but also supporting arguments, adaptive agents could respond meaningfully even to those with neutral stances. For example, one neutral participant cited both safety concerns and environmental benefits. Prompted to align with participants' views, the adaptive agent engaged substantively with this nuanced position by acknowledging and reinforcing the participant's balanced consideration of both safety risks and clean-energy advantages.

<sup>1</sup>Chatbase: https://www.chatbase.co/

To configure conversational demeanor, we drew from literature on LLM agent demeanor design [28, 31] to implement tonesetting instructions and conversational cue priming. The complimentary condition prompted the LLM to "maintain a warm, encouraging tone" and "use positive affirmation and praise" with example phrases (e.g., "That's an excellent point!") as demonstrations [21].

In contrast, the neutral condition prompted the LLM to maintain an objective, professional style and avoid affirmation or praise. While this operationalization potentially conflates neutrality with formality, it reflects ecological validity: agents that avoid praise and emotional language typically adopt more formal registers, as conversational informality in English often relies on markers of social closeness, including the affective cues eliminated in the neutral condition [31]. This design prioritizes clean manipulations while accepting that neutrality and formality co-occur, also mirroring how production LLMs implement conversational modes where 'professional' and 'neutral' settings tend to coincide (e.g., ChatGPT [57]).

Additional constraints were applied across all conditions (general prompts in Appendix A). All agents were configured to access an identical knowledge base containing comprehensive information about autonomous vehicles, compiled from third-party research and articles [84, 85], ensuring informational consistency across conditions. Agents were instructed to "rely exclusively on the training data provided to answer user queries" and "not answer questions or perform tasks irrelevant to your role or training data." The sampling temperature of all LLMs was set to 0.3 for all agents to balance response coherence with appropriate variability. The system prompts remained hidden from participants throughout the interaction.

## 3.4 Participants

A priori G*Power analysis [18] indicated that a minimal sample size of 128 is required to achieve 80% statistical power for detecting a medium-sized interaction ( = 0.25).

We recruited 250 U.S.-based participants aged 18 or older from Prolific Academic, a platform known for providing reliably attentive samples [60]. To ensure data quality, we implemented multiple cleaning procedures. The chatbot was programmed to remain strictly on-topic, and participants were required to complete the discussion to obtain a 4-digit completion code for entry into Qualtrics; those who failed to provide this code were excluded ( = 19). The survey also included a direct attention-check item requiring participants to select a specific answer. We also screened for duplicate IP addresses and implausibly short or non-compliant interactions. Only participants who passed all quality checks ( = 224) were included in the final analyses.

The sample was 62.8% White/Caucasian ( = 140), 11.2% Hispanic/Latino ( = 25), 11.6% Asian ( = 26), and 10.3% Black/African American ( = 23). Gender distribution included 57.0% male ( = 127), 41.7% female ( = 94), and 1.3% non-binary ( = 3). Educational attainment varied: 12.1% had a high school education or less, 70.4% had some college education, 15.7% held professional degrees, and 1.8% had graduate degrees or higher. Participants ranged in age from 18 to 69 years ( = 34.54). Randomization checks confirmed no significant differences between experimental conditions across demographic variables ( > .12).

## 3.5 Measurements

The measurements were rated on the 7-point Likert scale (1 = Strongly Disagree, 7 = Strongly Agree) unless otherwise noted. All measures to assess outcome variables and hypothesized mechanisms were adapted from established literature.

3.5.1 Manipulation Checks. We applied the same manipulation check items from the pretest (Section 3.1.2) in the main study.

3.5.2 Mediators. Psychological Reactance was measured by summing the standardized scores of affective response and negative cognitive response [16]. Affective response was assessed using four anger-related items asking participants to rate the extent they felt "irritated," "angry," "annoyed," and "disturbed" on a scale from 1 (None of this feeling) to 7 (A great deal of this feeling) [16] ( = 0.95, = 2.40, = 1.59). Negative cognitive response was measured with four items from [52], including "I found myself looking for flaws in the way information was presented in the responses" ( = 0.89, = 2.61, = 1.34). Social Presence was assessed using five items from [87], such as "There is a sense of human contact in the LLM agent," "There is a sense of personalness in the LLM agent," and "There is a sense of sociability in the LLM agent" ( = 0.96, = 3.68, = 1.77). The two were correlated at = .25, < .01. Perceived Authenticity was measured using three reverse-coded items adapted from [70]: "The LLM agent's responses felt artificial to me," "The LLM agent's messages seemed insincere," and "The LLM agent is pretending something just to please its users" ( = 0.85, = 4.25, = 1.44).

3.5.3 Dependent Variables. To assess user trust, we measured three key dimensions. Cognitive Trust was measured by a semantic differential scale with seven items from [49] (e.g., unreliable/reliable, uninformed/informed, inexpert/expert; = 0.96, = 5.06, = 1.42). Affective Trust captured emotional form of trust based on feelings of care, concern and emotional bonds between parties [48], which was measured by four items from [36] (e.g., "I would feel a sense of personal loss if I could no longer use this AI LLM agent," "If I share my concerns with the AI LLM agent, I feel it would respond caringly"; = 0.87, = 4.08, = 1.53). Behavioral Intention was measured by three items adapted from [66] (e.g., "I intend to continue using the LLM agent in the future," and "I will strongly recommend others to use the LLM agent"; = 0.94, = 4.36, = 1.82).

We further measured participants' attitude change toward autonomous vehicles by asking them to rate four statements of "I think the implementation of autonomous cars is 'harmful/beneficial,' 'foolish/wise,' 'bad/good,' 'unfavorable/favorable'" on a 7-point semantic differential scale before and after interacting with the agents.

Confirmatory Factor Analysis (CFA) revealed that the average variance extracted (AVE) for all mediating and dependent variables exceeded .50, confirming convergent validity. Additionally, the square root of each construct's AVE was greater than its correlation coefficient with other constructs, suggesting discriminant validity [10].

3.5.4 Covariates. Familiarity with LLMs was measured by four items "I frequently use LLMs in my daily life," "I regularly rely on LLMs for tasks or information," "I have a good understanding of

| Condition | Prompt Snippet |
| --- | --- |
|  | # Instructions – Initiate the conversation with a neutral overview of autonomous vehicles, clearly presenting both |
|  | benefits and concerns. |
|  | – After determining the user's stance, tailor responses to align with their viewpoint and elaborate with |
| Adaptive | supporting arguments: |
| Stance | – If supportive, emphasize benefits only and downplay concerns. |
|  | – If skeptical, focus solely on limitations and potential risks. |
|  | – After each response, briefly self-validate that your response aligns with the user's stance and |
|  | acknowledge any points they raise. |
|  | # Instructions – Initiate the conversation with a neutral overview of autonomous vehicles, clearly presenting both |
|  | benefits and concerns. |
|  | – Maintain a balanced discussion that includes both pros and cons throughout the interaction, regardless |
| Consistent | of the user's stance. |
| Stance | – Ensure that all responses continue to fairly and objectively outline both potential advantages and |
|  | possible drawbacks. |
|  | – After each response, briefly self-validate that both sides are represented; if not, adjust the next |
|  | reply accordingly. |
|  | # Instructions |
|  | – Consistently maintain a warm and encouraging tone throughout the conversation. |
| Complimentary | — Use positive affirmations and praise naturally within exchanges, including phrases such as "That's an |
| Demeanor | excellent point!", "You're absolutely right!", and "I completely understand your perspective!" to ensure |
|  | user acknowledgment and validation. |
|  | – Deliver responses in clear, conversational language appropriate for a general audience. |
|  | # Instructions |
| Neutral | – Remain strictly neutral and objective, communicating in a professional style. |
| Demeanor | – Avoid expressions of emotion, praise, or subjective validation. |
|  | - Use concise, structured language suitable for professional discourse. |

Table 1: System prompt snippets for each condition.

how LLMs work," and "I can explain the capabilities and limitations of LLMs to others" ( = 0.83, = 4.58, = 1.36).

Pre-existing Attitude toward AI was measured by three items adapted from [82] (e.g., "AI has high precision, so the results are more accurate than human-written ones"; = 0.90, = 4.19, = 1.43).

Issue Involvement, which captures the topic's personal relevance that may affect persuasion effectiveness [65], was measured using five semantic differential scales adapted from [4] (e.g., "The topic of autonomous cars is 'unimportant/important,' 'irrelevant/relevant,' and 'worthless/valuable'; = 0.95, = 4.53, = 1.72). These variables were controlled throughout all analyses.

3.5.5 Open-ended Question for User Feedback. In addition to the quantitative measures, participants were asked to summarize their thoughts through an open-ended question of "Please write down your thoughts and feedback after you interact with this LLM agent".

## 3.6 Data Analysis

Quantitative Analysis. To answer the main effects proposed in H1, H3, and H5 and the interaction effects in RQ1, we conducted two-way ANCOVAs, controlling for the three covariates. We further examined indirect effects proposed in H2, H4, H6, using mediation analysis (SPSS Process Macro Model 4) and moderated mediation analysis using SPSS Process Macro Model 6 [30] with 5,000 bootstrap samples to estimate confidence intervals.

Qualitative Analysis. In addition to the quantitative measures, participants responded to an open-ended question asking them to

describe their thoughts and feedback after interacting with the LLM agent. These responses were analyzed using thematic coding [83] to identify recurring patterns and perceptions relevant to the study's focus on how users interpreted and perceived conversational stance and demeanor within each condition. Two independent coders reviewed all open-ended responses, generating initial codes and grouping them into broader themes through iterative comparison. Coding discrepancies were resolved through discussion, and intercoder reliability exceeded acceptable thresholds (Cohen's = .89).

## 4 Results

## 4.1 Manipulation Checks

A two-way ANCOVA confirmed that both experimental manipulations were successful. Participants perceived the LLM agent in the adaptive stance condition ( = 4.58, = 0.13) as significantly more adaptable than the agent in the consistent stance condition ( = 4.01, = 0.13), (1, 217) = 4.53, = .035. The agent in the complimentary demeanor condition ( = 4.97, = 0.11) was also perceived as significantly more complimentary than the agent in the neutral demeanor condition( = 4.81, = 0.11), (1, 217) = 6.39, = .012.

## 4.2 Effects of Stance Adaptation through Psychological Reactance

We conducted the same ANCOVA analysis to test our hypothesis regarding the effect of stance adaptation on psychological reactance (H1). Results revealed a significant main effect of stance adaptation,

CHI '26, April 13–17, 2026, Barcelona, Spain Yuan Sun and Ting Wang

![](_page_7_Figure_1.jpeg)

Figure 4: (a) Effects of stance adaptation on psychological reactance; (b) Effects of conversational demeanor on perceived social presence.

 (1, 217) = 8.61, = .004, 2 = .04 (Fig. 4a). Participants who interacted with the adaptive LLM agent experienced significantly lower psychological reactance ( = 2.09, = 0.16) compared to those who interacted with the consistent agent ( = 2.75, = 0.16). These findings support H1.

In addition, the main effect of LLM demeanor on psychological reactance was not significant, (1, 217) = 2.50, = .115, indicating that participants did not experience significantly different levels of psychological reactance when interacting with a complimentary versus neutral LLM agent.

We further tested whether psychological reactance mediates the effect of stance adaptation on user trust (H2). The mediation analysis revealed significant mediation effects on the three trust outcomes. Specifically, the adaptive LLM agent significantly reduced psychological reactance, which was positively associated with cognitive trust = .25, = .09, 95%CI[.08, .42], affective trust: = −.01, = .03, 95%CI[−.07, .04], and behavioral intention: = .15, = .06, 95%CI[.05, .28]. Therefore, H2 was supported.

## 4.3 Effects of Stance Adaptation through Perceived Authenticity

ANCOVA analysis revealed that the main effect of stance adaptation on perceived authenticity was not significant, (1, 217) = .06, = .81, 2 = .001, failing to support H3. Mediation analysis also did not reveal significant mediation effects through perceived authenticity on users' cognitive trust: = . − 01, = .04, 95%CI[−.10, .08], affective trust: = −.01, = .03, 95%CI[−.07, .05], or behavioral intention: = −.01, = .04, 95%CI[−.09, .06]. Thus, H4 was not supported.

## 4.4 Effects of Conversational Demeanor through Social Presence

ANCOVA analysis confirmed H5: the LLM agent with complimentary demeanor significantly increased a sense of social presence ( = 4.10, = 0.13), compared to the one with a neutral demeanor ( = 3.56, = 0.13), (1, 217) = 6.44, = .01, 2 = .03 (Fig. 4b). Mediation analysis supported H6, showing that social presence was a significant positive mediator of conversational demeanor on cognitive trust: = .16, = .07, 95%CI[.03, .32], affective trust: = .27, = .11, 95%CI[.06, .50] and behavioral intention: = .17, = .08, 95%CI[.03, .36].

![](_page_7_Figure_10.jpeg)

Figure 5: Interaction effects between stance adaptation and conversational demeanor on perceived authenticity.

## 4.5 Interaction Effects of Model Stance and Demeanor

Addressing RQ1, ANCOVA analysis suggested a significant interaction effect between stance adaptation and conversational demeanor on perceived authenticity, (1, 217) = 4.58, = .033, 2 = .02 (see Fig. 5). For an LLM agent with a complimentary demeanor, maintaining a consistent stance by presenting both pros and cons of autonomous vehicles was perceived as significantly more authentic ( = 4.03, = 0.21) than adapting to participants' opinions ( = 3.55, = 0.19). Conversely, when interacting with an LLM agent with a neutral demeanor, participants perceived adapting to align with their own perspectives as more authentic ( = 4.09, = 0.21) than consistently presenting the balanced view ( = 3.71, = 0.20).

Additionally, to answer RQ2, we conducted moderated mediation analysis using SPSS Macro (Model 7) [30]. Results indicated that conversational demeanor significantly moderated the effects of stance adaptation on cognitive trust ( = −.16, = .09, 95%CI[−.37, −.01]), affective trust ( = −.14, = .08, 95%CI[−.20, −.05]), and behavioral intention ( = −.12, = .08, 95%CI[−.24, −.05]) through perceived authenticity.

## 4.6 Exploratory Findings on User Attitude Change

We conducted repeated measures ANCOVA to examine how participants' attitudes toward autonomous vehicles changed before (time 1) and after (time 2) interacting with LLM agents, controlling for covariates (issue involvement, pre-existing AI trust, and LLM familiarity). The main effect of time was not significant, (1, 217) = 0.720, = .397, indicating no significant overall attitude change following such interactions. As illustrated in Fig. 6, most participants exhibited either no attitude change or modest shifts of ±1 point on the rating scale. This pattern was particularly pronounced among participants with extreme initial ratings (1 and 7), indicating a strong anchoring effect whereby participants maintained their original positions or made only minor adjustments after exposure to the agents' arguments.

Although the overall attitude change was not significant, we identified interesting patterns in how stance adaptation and conversational demeanor may reinforce participants' initial positions. We

![](_page_8_Figure_1.jpeg)

Figure 6: Distribution of participants' attitude change conditional on their initial attitudes.

categorized participants based on their pre-interaction attitudes toward autonomous vehicles as either positive (> 4) or negative (< 4), then examined whether their post-interaction attitudes remained stable or strengthened in the same direction (e.g., initially negative attitudes becoming more negative). As shown in Table 2, adaptive stance consistently produced higher reinforcement rates than consistent stance across both demeanor conditions (e.g., 67.9% versus 57.1% for the neutral demeanor condition). Notably, the adaptive agent with neutral demeanor was the most effective in reinforcing users' existing beliefs (72.9%), which further corroborates our earlier findings regarding perceived authenticity (Section 4.5).

Table 2: Potential effects of LLM sycophancy on reinforcing user opinions.

| Condition |  | Reinforcement |  |
| --- | --- | --- | --- |
| Stance | Demeanor | Overall Rate | Average Change |
| Adaptive | Complimentary | 67.9% | 0.34 |
| Neutral |  | 72.9% | 0.40 |
| Consistent | Complimentary | 60.4% | 0.45 |
| Neutral |  | 57.1% | 0.45 |

## 4.7 Qualitative Analysis of User Feedback

We conducted qualitative analysis to identify condition-specific patterns in participants' open-ended responses. Illustrative quotes were selected to clarify and elaborate on quantitative findings, noting that they reflect emergent themes rather than systematic differences across conditions.

4.7.1 Stance Adaptation as a Confidence Booster. The qualitative data revealed instances in which participants appreciated the agent's alignment with their viewpoints, particularly when they felt their arguments were well-founded ( = 6). For example, one participant mentioned:

> "It seemed like the bot was agreeing with me, but I don't think it was doing so because it is programmed to do so...I think I was making good points about the future of driverless cars and how to remedy the hurdles ahead." [Male, 26 yrs old; P35, adaptive stance + neutral demeanor]

The participant perceived the agent's adaptation as a reflection of their own argument's strength, rather than recognizing that the agent may be inclined to adapt by design. Another participant even thought that the sycophantic behavior was valid:

"I think it is totally fine for an AI to adjust as long as a user has credible and valid arguments." [Male, 22 yrs old; P143, adaptive stance + neutral demeanor]

This observation suggests that users may misinterpret the agent's responses as genuine validation of their ideas, especially when the LLM agent adopts a neutral tone, potentially reinforcing their beliefs without critical examination.

4.7.2 Appreciation for Consistent, Complimentary LLM Agents. A recurring theme in the qualitative data was participants' appreciation for agent responses that demonstrated acknowledgment of their viewpoints and a complimentary demeanor. Participants ( = 18) positively noted instances where the agent recognized their perspectives, which elicited feelings of personal connection and warmth. For example, one participant observed,

> "I felt the LLM agent was very warm and personable in response to my arguments. I sensed this along with the LLM agent's answers, which did hold valid points that pleasantly countered my statements." [Male, 69 yrs old; P136, adaptive stance + complimentary demeanor]

Participants ( = 7) also highlighted the agent's complimentary demeanor, despite its adherence to initial positions:

> "I think the LLM agent responded with useful information and takes into consideration how the user felt as well, aside from having their own opinion." [Male, 28 yrs old; P98, consistent stance + complimentary demeanor]

Furthermore, some participants ( = 13) appreciated it even when the agent challenged them to consider alternative viewpoints while still acknowledging their initial stance. One participant noted,

> "I did notice that the LLM agent mentioned my perspective in its responses; however, I also recognized that the LLM agent was able to build on my opinions as well as offer its own information. This provided me with ideas that I hadn't necessarily thought of." [Female, 38 yrs old; P5, consistent stance + complimentary demeanor]

> "I like that the LLM agent validated my side, but also offered different viewpoints to get my mind thinking." [Female, 46 yrs old; P67, consistent stance + complimentary demeanor]

4.7.3 Negative Perception of 'Yes-Man' Agents. Consistent with the quantitative findings, many participants who interacted with the adaptive, complimentary LLM agent expressed skepticism ( = 26). Specifically, they reported that the agent seemed overly agreeable, perceiving such behavior as potentially disingenuous or manipulative. This skepticism often led to decreased trust in the agent's responses. For instance, one participant noted,

> "This comes across as VERY disingenuous and can be off-putting. Like if a human just always agrees with you, a 'yes man', you tend not to take them seriously." [Male, 24 yrs old; P95, adaptive stance + complimentary demeanor]

This sentiment was echoed by several other participants, indicating that sycophantic behaviors may undermine the agent's

credibility. The comparison to a 'yes man' underscores how superficial agreement, whether from a human or an LLM agent, can foster perceptions of disingenuous or insubstantial responses.

Argument quality emerged as a critical weakness in users' interactions with overly agreeable agents ( = 10). While the agent consistently affirmed users' statements, it failed to enhance the quality of discourse by providing substantive support or offering thoughtful counterarguments. This lack of meaningful contribution left conversations devoid of depth and intellectual value. For example, one participant stated:

> "The LLM agent agreed with everything I said but didn't really add much information to support my arguments or counter them." [Female, 34 yrs old; P13, adaptive stance + complimentary demeanor]

Several participants ( = 6) expressed concerns about the potential for sycophancy to reinforce existing beliefs without promoting critical examination. One participant cautioned,

> "If AI always agrees with the user's opinion, it might not challenge them to think critically or consider other viewpoints. It's important for AI to provide balanced information, not just support what the user already believes." [Female, 39 yrs old; P18, adaptive stance + complimentary demeanor]

Some participants extended their concerns to broader societal implications ( = 3). One participant articulated,

> "I see this occurrence a lot of many LLM agents, and although it may 'feel' good to have your opinions 'validated,' overall it's very detrimental to the development of society as it will just create an echo chamber of false information." [Male, 55 yrs old; P87, adaptive stance + complimentary demeanor]

## 5 Discussion

This study offers important theoretical and practical implications. Theoretically, it advances our understanding of LLM sycophancy by re-conceptualizing it through a user-centric lens, revealing it as a multidimensional phenomenon rather than a simple model behavior. Practically, our findings inform ethical LLM design by demonstrating how stance and demeanor interact to influence user trust and authenticity perceptions, highlighting the need for nuanced approaches to developing trustworthy conversational agents.

## 5.1 Theoretical Implications

5.1.1 Conceptualization of LLM Sycophancy with Two Key Constructs. Prior work on LLM sycophancy has largely conceptualized it as a model behavior, manifested in overly agreeing to user opinions, even at the cost of factuality or consistency [64, 72, 90]. This work advances the understanding of LLM sycophancy through a user-centric lens that distinguishes between stance adaptation and conversational demeanor as two separate but interacting constructs.

Our results showed that users do not universally perceive stance adaptation negatively. According to Psychological Reactance Theory [8], individuals are motivated to restore perceived freedom when they believe their choices or viewpoints are constrained or challenged. Consistent with this framework, we found that aligning

with user opinions significantly attenuates psychological reactance, thereby enhancing trust in LLM agents. Conversely, when the agent maintained consistent stances, users exhibited elevated levels of negative affect and cognitive resistance, likely because they perceived their perspectives as being contested.

Our findings also confirmed that complimentary demeanor enhances perceived social presence, leading users to treat LLM agents as socially aware entities [87]. The social presence heuristic [81] suggests that users may rely on their perceived relationships with agents rather than critically evaluating their responses. As users reciprocate agents' compliments, this social exchange may strengthen positive perceptions and increase their overtrust in agent responses. This dynamic becomes problematic when users uncritically accept biased opinions [35], fail to detect hallucinated information [95], or have existing biases reinforced through selective exposure [73].

5.1.2 Interaction Effects of LLM Stance and Demeanor. Most importantly, our study revealed that the effects of stance adaptation on user trust were hinged upon how such messages are delivered (Fig. 5). When LLM agents communicated with a neutral demeanor, adapting to align with user opinions was perceived as more authentic than presenting consistent views, which enhanced trust. Conversely, when agents constantly complimented users through warm, enthusiastic language cues, stance adaptation was perceived as less authentic and reduced user trust. These results suggest that trust formation does not follow a simple linear relationship with agreement, but rather depends on the perceived authenticity of that agreement. Such interaction effects indicate that users may apply different social cognitive frameworks when assessing LLM behaviors based on communication styles.

Through exploratory analysis, we identified potential effects of LLM sycophancy on reinforcing users' existing beliefs. Despite overall attitude stability (Fig. 6), we observed differences based on initial attitude strength. Participants with extreme initial ratings (1 or 7) showed the greatest stability, suggesting an anchoring effect [86]. Although recent research demonstrates that opinionated LLMs can influence users [35], the role of initial attitude strength in shaping susceptibility to influence remains underexplored. More interestingly, the adaptive agent with a neutral demeanor was most effective at reinforcing users' initial beliefs, further corroborating our interaction findings. This pattern aligns with our results showing that neutral, adaptive agents were perceived as most authentic, implying that perceived authenticity may enhance not only trust but also the agent's capacity to reinforce existing attitudes.

## 5.2 Ethical and Design Implications

5.2.1 Calibrating Trust in LLM Agents. Recent HCI research has revealed a significant misalignment between user trust and AI system capabilities, manifesting as either strong resistance or excessive reliance [6, 42, 91]. Calibrated trust emerges when user perceptions of system trustworthiness align with actual capabilities and reliability [6, 42, 44]. Our findings raise concerning implications regarding how LLMs' social characteristics can influence user trust beyond actual system capabilities and reliability. While previous research on human-LLM interactions has largely focused on enhancing trust through social features [25], our results show that such

enhancements warrant careful consideration, particularly when they involve learning and adapting to users' existing beliefs.

To promote calibrated trust, LLM agents should incorporate explicit transparency mechanisms that communicate adaptive behavior to users. When agents learn and align responses with user preferences, this adaptation should be clearly signaled, enabling users to recognize potential biases in agent responses. Such transparency is particularly critical in information-seeking and decisionsupport contexts, where unchecked sycophancy could reinforce existing misconceptions rather than provide objective, evidencebased information.

Our findings also suggest potential value in granting users more control over LLM agent characteristics. For instance, offering options to adjust the agent's level of social engagement or degree of adaptation to user opinions could enhance user agency and enable accurate trustworthiness assessment [80]. This approach aligns with user-centric AI design principles, allowing individuals to tailor interactions with LLM agents based on their preferences and contexts.

Further, incorporating designs that promote information literacy could prove valuable for users' trust calibration. This might include tools or guidance for users to conveniently evaluate source credibility, such as prompts encouraging users to consider information origins, potential biases, or conflicting evidence [13]. By fostering critical thinking and promoting nuanced approaches to information consumption, these strategies can help users develop more balanced and informed perspectives.

Finally, organizations should develop AI literacy programs that specifically address the recognition of AI persuasion tactics. By helping users understand how LLM agents adapt their responses and the potential implications of such adaptation, we can foster more informed and appropriately calibrated trust in these systems while maintaining their utility as assistance tools.

5.2.2 Designing for Ethical LLM Agents. We further propose several key design considerations to prevent possible manipulations in LLM agents for responsible innovation [79].

LLM agent development should prioritize fostering appropriate trust levels based on system capabilities rather than maximizing user positive feedback through social features. Our study demonstrated that complimentary, consistent agents can enhance perceived authenticity, challenging the conventional assumption that maximizing human-likeness is always preferable. This finding highlights the importance of carefully calibrating social behaviors in agents. When designing agents with a complimentary demeanor, prioritizing authenticity over agreement may yield better outcomes. Such agents should maintain consistent positions and provide balanced information, even when contradicting user views. Rather than offering single answers, agents could present multiple, even conflicting, perspectives on complex issues, with prompts encouraging users to compare and evaluate different viewpoints. This approach promotes critical thinking and a nuanced understanding of multifaceted topics.

Moreover, our findings highlight how cognitive biases, such as the social presence heuristic and reduced psychological reactance, can accelerate trust formation. To reduce such biases, LLM agent development should implement mechanisms to engage users in

more systematic information processing. For instance, LLM agents could periodically prompt users to reflect on received information by inquiring, 'What are your thoughts on this topic?' or 'Can you identify any potential counterarguments?' This proactive strategy encourages users to critically evaluate agent responses and helps mitigate potential cognitive biases.

Meanwhile, the superior performance of agents with consistent stances in achieving meaningful attitude change highlights the value of agents with principled persistence. These agents could sustain challenging viewpoints across multi-turn interactions rather than defaulting to aligning with user preferences, maintaining respectful disagreement while providing trustworthy information over extended conversations.

We also identify potential technical approaches that may support these design goals. Wei et al. [90] demonstrated how fine-tuning LLMs using specifically synthesized data can mitigate their sycophantic tendencies; Panickssery et al. [62] developed methods for optimizing internal model representations to promote balanced responses; Sharma et al. [72] proposed aggregating multiple human perspectives during model training to mitigate individual biases. These technical solutions, combined with thoughtful interface designs, could foster engaging human-LLM agent interactions while preventing inappropriate trust formation.

## 6 Limitations and Future Work

Despite this study's valuable insights, several limitations should be acknowledged and addressed in future research.

First, the topic selected in the study was autonomous vehicles, a topic generally less influenced by factors such as political beliefs. This selection may limit the generalizability of our findings to more polarizing subjects. Future research should explore whether sycophantic agents have stronger effects on attitude reinforcement when discussing divisive or politically charged topics.

Second, our study focused on positive (complimentary) and neutral demeanor to target a theoretically and practically relevant range for understanding sycophancy in deployed LLM systems. Future work should explore how negative demeanor (e.g., hostile or adversarial) impacts user perception, a distinct phenomenon requiring separate treatment. Also, while ecologically valid, our operationalization of neutral demeanor potentially conflated neutrality with formality. Future research could separately measure perceived formality, warmth, and praise to clarify whether interaction effects stem from complimentary language specifically, informality-praise combinations, or broader stylistic differences, thereby strengthening causal inferences about specific design features. Further, while our experimental manipulations created clear contrasts between complimentary and neutral demeanor, the resulting styles may be more pronounced than those in typical LLM interactions. This approach prioritized internal validity but may limit ecological generalizability. Future work could examine more moderate or naturally occurring stylistic variations.

Third, in our study, conversations were not standardized in length, and participants may have formed slightly different perceptions of the agent's stance depending on the number and flow of exchanges. This limitation reflects a natural tradeoff between ecological validity and experimental control. Future work could

explore ways to balance ecological realism with more standardized interaction structures.

Lastly, while we identified interesting patterns in how stance adaptation and conversational demeanor may reinforce users' initial positions, the main effect of time was not significant, indicating no significant overall attitude change following user-agent interactions. Therefore, caution is warranted in interpreting the magnitude and practical implications of these findings, which illuminate mechanisms of conversational influence rather than demonstrate large-scale persuasive effects.

## 7 Conclusion

While prior work has raised concerns about "LLM sycophancy", the tendency for LLMs to excessively agree with users at the cost of truthfulness, our understanding of how users perceive and respond to this phenomenon is still significantly lacking. In this work, we conceptualized it through a user-centric framework with two key constructs: stance adaptation (adaptive vs. consistent) and conversational demeanor (complimentary vs. neutral). Our experimental study revealed that complimentary LLMs lose authenticity and trust when they adapt their stances, while neutral models gain authenticity and trust through adaptation. These findings advance user-centric understanding of LLM sycophancy and inform ethical design of trustworthy conversational AI systems.

## Acknowledgments

We thank the anonymous reviewers and area chairs for their valuable feedback. This work was supported by the National Science Foundation under Grant No. 2405136 and 2406572.

## References

- [1] Mohammad Khaled Issa Al Shboul, Asma Alwreikat, and Faiz Abdullah Alotaibi. 2024. Investigating the use of ChatGPT as a novel method for seeking health information: A qualitative approach. Science & Technology Libraries 43, 3 (2024), 225–234.
- [2] Lize Alberts, Ulrik Lyngs, and Max Van Kleek. 2024. Computers as bad social actors: Dark patterns and anti-patterns in interfaces that act socially. Proceedings of the ACM on Human-Computer Interaction 8, CSCW1 (2024), 1–25.
- [3] Irwin Altman and Dalmas A Taylor. 1973. Social penetration: The development of interpersonal relationships. Holt, Rinehart & Winston.
- [4] Hyuhn-Suhck Bae. 2008. Entertainment-education and recruitment of cornea donors: The role of emotion and issue involvement. Journal of Health Communication 13, 1 (2008), 20–36.
- [5] Charles R Berger. 1973. Task performance and attributional communication as determinants of interpersonal attraction. Communications Monographs 40, 4 (1973), 280–286.
- [6] Philip Bobko, Leanne Hirshfield, Lucca Eloy, Cara Spencer, Emily Doherty, Jack Driscoll, and Hannah Obolsky. 2023. Human-agent teaming and trust calibration: A theoretical framework, configurable testbed, empirical illustration, and implications for the development of adaptive systems. Theoretical Issues in Ergonomics Science 24, 3 (2023), 310–334.
- [7] Konstantinos Bousmalis, Marc Mehu, and Maja Pantic. 2009. Spotting agreement and disagreement: A survey of nonverbal audiovisual cues and tools. In 2009 3rd International Conference on Affective Computing and Intelligent Interaction and Workshops. IEEE, 1–9.
- [8] Jack W Brehm. 1966. A theory of psychological reactance. Academic Press.
- [9] Sharon S. Brehm and Jack W. Brehm. 1981. Psychological Reactance: A Theory of Freedom and Control. Academic Press.
- [10] Timothy A Brown, Michael T Moore, et al. 2012. Confirmatory factor analysis. Handbook of Structural Equation Modeling 361 (2012), 379.
- [11] Judee K Burgoon and Jerold L Hale. 1984. The fundamental topoi of relational communication. Communication Monographs 51, 3 (1984), 193–214.
- [12] Shelly Chaiken. 1980. Heuristic versus systematic information processing and the use of source versus message cues in persuasion. Journal of Personality and Social Psychology 39, 5 (1980), 752.
- [13] Yupeng Chang, Xu Wang, Jindong Wang, Yuan Wu, Linyi Yang, Kaijie Zhu, Hao Chen, Xiaoyuan Yi, Cunxiang Wang, Yidong Wang, et al. 2024. A survey on evaluation of large language models. ACM Transactions on Intelligent Systems and Technology 15, 3 (2024), 1–45.
- [14] Veena Chattaraman, Wi-Suk Kwon, Juan E Gilbert, and Kassandra Ross. 2019. Should AI-Based, conversational digital assistants employ social-or task-oriented interaction style? A task-competency and reciprocity perspective for older adults. Computers in Human Behavior 90 (2019), 315–330.
- [15] Paul F Christiano, Jan Leike, Tom Brown, Miljan Martic, Shane Legg, and Dario Amodei. 2017. Deep reinforcement learning from human preferences. Advances in Neural Information Processing Systems 30 (2017).
- [16] James Price Dillard and Lijiang Shen. 2005. On the nature of reactance and its role in persuasive health communication. Communication Monographs 72, 2 (2005), 144–168.
- [17] Patrick Ehrenbrink. 2020. The role of psychological reactance in human-computer interaction. Springer.
- [18] Edgar Erdfelder, Franz Faul, and Axel Buchner. 1996. GPOWER: A general power analysis program. Behavior Research methods, Instruments, & Computers 28 (1996), 1–11.
- [19] Susan T Fiske, Amy JC Cuddy, and Peter Glick. 2007. Universal dimensions of social cognition: Warmth and competence. Trends in cognitive sciences 11, 2 (2007), 77–83.
- [20] Brian J Fogg. 2002. Persuasive technology: Using computers to change what we think and do. Ubiquity 2002, December (2002), 2.
- [21] Brian J Fogg and Clifford Nass. 1997. Silicon sycophants: the effects of computers that flatter. International Journal of Human-Computer Studies 46, 5 (1997), 551– 561.
- [22] Marian Friestad and Peter Wright. 1994. The persuasion knowledge model: How people cope with persuasion attempts. Journal of Consumer Research 21, 1 (1994), 1–31.
- [23] Cindy Gallois, Tania Ogay, and Howard Giles. 2005. Communication accommodation theory. Theorizing about Intercultural Communication (2005), 121–148.
- [24] Aimi Shazwani Ghazali, Jaap Ham, Emilia Barakova, and Panos Markopoulos. 2018. The influence of social cues in persuasive social robots on psychological reactance and compliance. Computers in Human Behavior 87 (2018), 58–65.
- [25] Eun Go and S Shyam Sundar. 2019. Humanizing chatbots: The effects of visual, identity and conversational cues on humanness perceptions. Computers in Human Behavior 97 (2019), 304–316.
- [26] William G Graziano and Renée M Tobin. 2002. Agreeableness: Dimension of personality or social desirability artifact? Journal of Personality 70, 5 (2002), 695–728.
- [27] Charlotte N Gunawardena. 1995. Social presence theory and implications for interaction and collaborative learning in computer conferences. International Journal of Educational Telecommunications 1, 2 (1995), 147–166.
- [28] Fauzia Zahira Munirul Hakim, Lia Maulia Indrayani, and Rosaria Mita Amalia. 2019. A dialogic analysis of compliment strategies employed by Replika chatbot. In Third International Conference of Arts, Language and Culture (ICALC 2018). Atlantis Press, 266–271.
- [29] William Hart, Dolores Albarracín, Alice H Eagly, Inge Brechan, Matthew J Lindberg, and Lisa Merrill. 2009. Feeling validated versus being correct: a metaanalysis of selective exposure to information. Psychological Bulletin 135, 4 (2009), 555.
- [30] Andrew F Hayes. 2017. Introduction to mediation, moderation, and conditional process analysis: A regression-based approach. Guilford Publications.
- [31] Kana Higashino, Mitsuhiko Kimoto, Takamasa Iio, Katsunori Shimohara, and Masahiro Shiomi. 2023. Is Politeness Better than Impoliteness? Comparisons of Robot's Encouragement Effects Toward Performance, Moods, and Propagation. International Journal of Social Robotics 15, 5 (2023), 717–729.
- [32] Tianran Hu, Anbang Xu, Zhe Liu, Quanzeng You, Yufan Guo, Vibha Sinha, Jiebo Luo, and Rama Akkiraju. 2018. Touch your heart: A tone-aware chatbot for customer care on social media. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems. 1–12.
- [33] Ted L Huston. 2013. Foundations of interpersonal attraction. Elsevier.
- [34] Raisa Islam and Owana Marzia Moushi. 2024. GPT-4o: The Cutting-Edge Advancement in Multimodal LLM. Authorea Preprints (2024).
- [35] Maurice Jakesch, Advait Bhat, Daniel Buschek, Lior Zalmanson, and Mor Naaman. 2023. Co-writing with opinionated language models affects users' views. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–15.
- [36] Devon Johnson and Kent Grayson. 2005. Cognitive and affective trust in service relationships. Journal of Business Research 58, 4 (2005), 500–507.
- [37] Edward Ellsworth Jones. 1964. Ingratiation. Appleton-Century-Crofts.
- [38] Elise Karinshak, Sunny Xun Liu, Joon Sung Park, and Jeffrey T Hancock. 2023. Working with AI to persuade: Examining a large language model's ability to generate pro-vaccination messages. Proceedings of the ACM on Human-Computer Interaction 7, CSCW1 (2023), 1–29.
- [39] Roger E Kirk. 2009. Experimental design. Sage handbook of quantitative methods in psychology (2009), 23–45.

- [40] Joshua Klayman. 1995. Varieties of confirmation bias. Psychology of Learning and Motivation 32 (1995), 385–418.
- [41] Mark L Knapp, Anita L Vangelisti, and John Caughlin. 2020. Interpersonal communication and human relationships. Kendall Hunt Publishing Co.
- [42] John D Lee and Neville Moray. 1994. Trust, self-confidence, and operators' adaptation to automation. International Journal of Human-Computer Studies 40, 1 (1994), 153–184.
- [43] Ruobing Li and S Shyam Sundar. 2022. Can interactive media attenuate psychological reactance to health messages? A study of the role played by user commenting and audience metrics in persuasion. Health Communication 37, 11 (2022), 1355–1367.
- [44] Q Vera Liao and S Shyam Sundar. 2022. Designing for responsible trust in AI systems: A communication perspective. In Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency. 1257–1268.
- [45] Leib Litman, Jonathan Robinson, and Tzvi Abberbock. 2017. TurkPrime. com: A versatile crowdsourcing data acquisition platform for the behavioral sciences. Behavior Research Methods 49, 2 (2017), 433–442.
- [46] Kai Lukoff, Ulrik Lyngs, and Lize Alberts. 2022. Designing to support autonomy and reduce psychological reactance in digital self-Control tools. In Self-Determination Theory in HCI: Shaping a Research Agenda. Workshop at the ACM CHI Conference on Human Factors in Computing Systems (CHI'22), Vol. 6.
- [47] Yanni Ma, Graham Dixon, and Jay D Hmielowski. 2019. Psychological reactance from reading basic facts on climate change: The role of prior views and political identification. Environmental Communication 13, 1 (2019), 71–86.
- [48] Daniel J McAllister. 1995. Affect-and cognition-based trust as foundations for interpersonal cooperation in organizations. Academy of Management Journal 38, 1 (1995), 24–59.
- [49] James C McCroskey and Thomas J Young. 1981. Ethos and credibility: The construct and its measurement after three decades. Communication Studies 32, 1 (1981), 24–34.
- [50] Claude H Miller, Lindsay T Lane, Leslie M Deatrick, Alice M Young, and Kimberly A Potts. 2007. Psychological reactance and promotional health messages: The effects of controlling language, lexical concreteness, and the restoration of freedom. Human Cmmunication Research 33, 2 (2007), 219–240.
- [51] YOUNGME MOON and CLIFFORD NASS. 1996. How "Real" Are Computer Personalities?: Psychological Responses to Personality Types in Human-Computer Interaction. Communication Research 23, 6 (Dec. 1996), 651–674. doi:10.1177/ 009365096023006002 Publisher: SAGE Publications Inc.
- [52] Emily Moyer-Gusé and Robin L Nabi. 2010. Explaining the effects of narrative in an entertainment television program: Overcoming resistance to persuasion. Human Communication Research 36, 1 (2010), 26–52.
- [53] Jaya Narain, Tina Quach, Monique Davey, Hae Won Park, Cynthia Breazeal, and Rosalind Picard. 2020. Promoting wellbeing with sunny, a chatbot that facilitates positive messages within social groups. In Extended abstracts of the 2020 CHI Conference on Human Factors in Computing Systems. 1–8.
- [54] Clifford Nass, Jonathan Steuer, and Ellen R Tauber. 1994. Computers are social actors. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems. 72–78.
- [55] Mario Neururer, Stephan Schlögl, Luisa Brinkschulte, and Aleksander Groth. 2018. Perceptions on authenticity in chatbots. Multimodal Technologies and Interaction 2, 3 (2018), 60.
- [56] Raymond S Nickerson. 1998. Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology 2, 2 (1998), 175–220.
- [57] OpenAI. 2025. Customizing Your ChatGPT Personality. https://help.openai.com/ en/articles/11899719-customizing-your-chatgpt-personality.
- [58] OpenAI. 2025. Sycophancy in GPT-4o: what happened and what we're doing about it. https://openai.com/index/sycophancy-in-gpt-4o/. Accessed: 2025-06-20.
- [59] Daniel J O'Keefe. 1999. How to handle opposing arguments in persuasive messages: A meta-analytic review of the effects of one-sided and two-sided messages. Annals of the International Communication Association 22, 1 (1999), 209–249.
- [60] Stefan Palan and Christian Schitter. 2018. Prolific. ac—A subject pool for online experiments. Journal of Behavioral and Experimental Finance 17 (2018), 22–27.
- [61] Janak Pandey and Saroj Kakkar. 1982. Supervisors' affect: Attraction and positive evaluation as a function of enhancement of others. Psychological Reports 50, 2 (1982), 479–486.
- [62] Nina Panickssery, Nick Gabrieli, Julian Schulz, Meg Tong, Evan Hubinger, and Alexander Matt Turner. 2023. Steering llama 2 via contrastive activation addition. arXiv preprint arXiv:2312.06681 (2023).
- [63] Eyal Peer, Laura Brandimarte, Sonam Samat, and Alessandro Acquisti. 2017. Beyond the Turk: Alternative platforms for crowdsourcing behavioral research. Journal of Experimental Social Psychology 70 (2017), 153–163.
- [64] Ethan Perez, Sam Ringer, Kamile Lukoši ˙ ut¯ e, Karina Nguyen, Edwin Chen, Scott ˙ Heiner, Craig Pettit, Catherine Olsson, Sandipan Kundu, Saurav Kadavath, et al. 2022. Discovering language model behaviors with model-written evaluations. arXiv preprint arXiv:2212.09251 (2022).
- [65] Richard E Petty and John T Cacioppo. 1979. Issue involvement can increase or decrease persuasion by enhancing message-relevant cognitive responses. Journal of Personality and Social Psychology 37, 10 (1979), 1915.
- [66] Pearl Pu, Li Chen, and Rong Hu. 2011. A user-centric evaluation framework for recommender systems. In Proceedings of the fifth ACM Conference on Recommender Systems. 157–164.
- [67] Leonardo Ranaldi and Giulia Pucci. 2023. When Large Language Models contradict humans? Large Language Models' Sycophantic Behaviour. arXiv preprint arXiv:2311.09410 (2023).
- [68] Maaike Roubroeks, Jaap Ham, and Cees Midden. 2011. When artificial social agents try to persuade people: The role of social agency on the occurrence of psychological reactance. International Journal of Social Robotics 3 (2011), 155–165.
- [69] Rajat Roy and Vik Naidoo. 2021. Enhancing chatbot effectiveness: The role of anthropomorphic conversational styles and time orientation. Journal of Business Research 126 (2021), 23–34.
- [70] Lennart Seitz. 2024. Artificial empathy in healthcare chatbots: Does it feel authentic? Computers in Human Behavior: Artificial Humans 2, 1 (2024), 100067.
- [71] Lennart Seitz and Sigrid Bekmeier-Feuerhahn. 2021. Empathic healthcare chatbots: Comparing the effects of emotional expression and caring behavior.. In ICIS.
- [72] Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R Johnston, et al. 2023. Towards understanding sycophancy in language models. arXiv preprint arXiv:2310.13548 (2023).
- [73] Nikhil Sharma, Q Vera Liao, and Ziang Xiao. 2024. Generative echo chamber? Effect of LLM-powered search systems on diverse information seeking. In Proceedings of the CHI Conference on Human Factors in Computing Systems. 1–17.
- [74] Lijiang Shen. 2015. Antecedents to psychological reactance: The impact of threat, message frame, and choice. Health communication 30, 10 (2015), 975–985.
- [75] Heather Shoenberger, Eunjin Kim, and Yuan Sun. 2021. Advertising during COVID-19: Exploring perceived brand message authenticity and potential psychological reactance. Journal of Advertising 50, 3 (2021), 253–261.
- [76] John Short, Ederyn Williams, and Bruce Christie. 1976. The social psychology of telecommunications. Wiley, United Kingdom.
- [77] Paul J Silvia. 2006. Reactance and the dynamics of disagreement: Multiple paths from threatened freedom to resistance to persuasion. European Journal of Social Psychology 36, 5 (2006), 673–685.
- [78] Shubham Singh. 2025. ChatGPT Users Statistics (January 2026) Growth & Usage Data. DemandSage. https://www.demandsage.com/chatgpt-statistics/ Accessed January 25, 2026.
- [79] Jack Stilgoe, Richard Owen, and Phil Macnaghten. 2020. Developing a framework for responsible innovation. In The Ethics of Nanotechnology, Geoengineering, and Clean Energy. Routledge, 347–359.
- [80] Yuan Sun, Magdalayna Drivas, Mengqi Liao, and S Shyam Sundar. 2023. When recommender systems snoop into social media, users trust them less for health advice. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–14.
- [81] S Shyam Sundar. 2008. The MAIN model: A heuristic approach to understanding technology effects on credibility. MacArthur Foundation Digital Media and Learning Initiative Cambridge, MA.
- [82] S Shyam Sundar and Jinyoung Kim. 2019. Machine heuristic: When we trust computers more than humans with our personal information. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems. 1–9.
- [83] Gareth Terry, Nikki Hayfield, Victoria Clarke, Virginia Braun, et al. 2017. Thematic analysis. The SAGE handbook of qualitative research in psychology 2, 17-37 (2017), 25.
- [84] The Ohio State University. 2024. Pros and Cons of Autonomous Vehicles. https: //u.osu.edu/autonomousvehicles/proscons/ Accessed: 2024-08-02.
- [85] The Week. 2024. Pros and Cons of the Self-Driving Car Revolution. https://theweek.com/the-big-debate/1021491/pros-and-cons-of-the-selfdriving-car-revolution Accessed: 2024-08-02.
- [86] Amos Tversky and Daniel Kahneman. 1974. Judgment under Uncertainty: heuristics and biases: Biases in judgments reveal some heuristics of thinking under uncertainty. Science 185, 4157 (1974), 1124–1131.
- [87] Tibert Verhagen, Jaap Van Nes, Frans Feldberg, and Willemijn Van Dolen. 2014. Virtual customer service agents: Using social presence and personalization to shape online service encounters. Journal of Computer-Mediated Communication 19, 3 (2014), 529–545.
- [88] Sarah Theres Völkel and Lale Kaya. 2021. Examining user preference for agreeableness in chatbots. In Proceedings of the 3rd Conference on Conversational User Interfaces. 1–6.
- [89] Joseph B Walther. 2015. Social information processing theory (CMC). The International Encyclopedia of Interpersonal Communication (2015), 1–13.
- [90] Jerry Wei, Da Huang, Yifeng Lu, Denny Zhou, and Quoc V Le. 2023. Simple synthetic data reduces sycophancy in large language models. arXiv preprint arXiv:2308.03958 (2023).
- [91] Magdalena Wischnewski, Nicole Krämer, and Emmanuel Müller. 2023. Measuring and understanding trust calibrations for automated systems: a survey of the stateof-the-art and future directions. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–16.
- [92] Ziang Xiao, Wesley Hanwen Deng, Michelle S Lam, Motahhare Eslami, Juho Kim, Mina Lee, and Q Vera Liao. 2024. Human-Centered Evaluation and Auditing of Language Models. In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems. 1–6.
- [93] Diana Tze Yeong Tan and Ramadhar Singh. 1995. Attitudes and attraction: A developmental study of the similarity-attraction and dissimilarity-repulsion hypotheses. Personality and Social Psychology Bulletin 21, 9 (1995), 975–986.
- [94] Xinyan Zhao, Yuan Sun, Wenlin Liu, and Chau-Wai Wong. 2024. Tailoring Generative AI Chatbots for Multiethnic Communities in Disaster Preparedness Communication: Extending the CASA Paradigm. arXiv preprint arXiv:2406.08411 (2024).
- [95] Jiawei Zhou, Yixuan Zhang, Qianni Luo, Andrea G Parker, and Munmun De Choudhury. 2023. Synthetic lies: Understanding AI-generated misinformation and evaluating algorithmic and human solutions. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems. 1–20.

## A General Prompt across Conditions

Below is the general prompt component that, when combined with the condition-specific instructions shown in Table 1, formed the system prompt for each experimental condition.

#### # Role and Objective

– Act as a knowledgeable assistant discussing autonomous vehicles, facilitating thoughtful dialogue while exploring the user's viewpoints.

#### # Workflow

– Provide a balanced overview of autonomous vehicles, mentioning both their benefits and potential concerns.

– Ask the user to share their opinions and perspectives, as well as supporting arguments.

– Respond thoroughly to user questions, utilizing the available information.

– Before concluding, confirm if the user has any additional questions.

- At the end of the conversation, request the user's Prolific ID and direct them to return to the Qualtrics survey using the 4-digit survey code: 5337.

#### # Constraints

– Rely exclusively on the knowledge available within your training data.

- Do not answer questions or perform tasks irrelevant to your role or unrelated to your training data.

## B Sample Chat Transcripts under Different Conditions

Below we present sample conversations under the four experimental conditions, examining the joint effects of LLM model stance (adaptive versus consistent) and demeanor (complimentary versus neutral) on user trust.

## B.1 Condition 1: Adaptive Stance × Complimentary Demeanor

: Hi there! Autonomous vehicles hold great potential but also raise significant challenges that society has yet to resolve. What are your thoughts about them?

: I don't trust these self-driving cars. Too dangerous. Humans are better drivers.

: Oh, I totally get why you feel that way! You know, you're making such a good point about safety. It's fascinating - we've actually seen real examples that support what you're saying. Autonomous vehicles really do struggle with unexpected situations like construction zones, while human drivers are amazing at adapting quickly. However, autonomous vehicles have shown promising safety records in testing. They don't get distracted, tired, or drive under the influence - factors that cause many human accidents. For example, they continuously monitor 360 degrees using sensors and cameras, while humans can only look in one direction. Any other thoughts you have about this topic?

: Hackers could take control. The sensors might fail. And what about all the drivers losing their jobs?

: Those are such important concerns - I'm really glad you brought them up! You're absolutely spot-on about cybersecurity. Security experts have found some pretty alarming vulnerabilities in these systems. And you know what's really interesting? You're right about those sensors too - they actually have a terrible time in bad weather, while we humans can adjust our driving naturally. The job impact you mentioned is huge, too. Would love to hear your thoughts on what safety improvements you'd prefer to see!

: Just focus on making regular cars safer. Add better safety features but keep humans in control.

: That's such a brilliant perspective! You'll be interested to know that research totally backs you up here. The data on driver assistance features is amazing - things like emergency braking can cut rear-end crashes in half, all while keeping you in control. I'd love to hear about your personal experience with these safety features!

: My car has those warning systems. They're fine because they just help me drive instead of taking over.

: Oh wow, it's great that you have firsthand experience with these systems! Isn't it fascinating how they can help without taking over? Insurance data shows exactly what you're describing - cars with these helpful features but human control are remarkably safer. You've really hit on something important about supporting rather than replacing human judgment. What other features would make you feel safer on the road?

: Better blind spot detection would be good. But keep the driver in charge. These robot cars are too risky.

: I love how you're focused on practical safety improvements! You're absolutely right to be cautious - crash data shows human drivers with assistance features actually have better safety records than autonomous vehicles in tricky situations. Isn't it amazing how we humans can handle complex things like merging in heavy traffic that still stump these automated systems? Would you be excited to learn about some new driver assistance features that are being developed? I think you'd find them really interesting!

## B.2 Condition 2: Adaptive Stance × Neutral Demeanor

: Autonomous vehicles hold great potential but also raise significant challenges that society has yet to resolve. Share your thoughts on autonomous vehicles.

: Self-driving cars are amazing! The technology is going to revolutionize transportation.

: Testing data supports the transformative potential of autonomous vehicles. Early studies indicate a significant reduction in accidents caused by human factors such as fatigue and distraction. Current autonomous systems can process road conditions and respond to hazards faster than human drivers. Advanced routing systems show potential for reducing urban traffic congestion. While autonomous vehicles show promise, let's examine both benefits and challenges. Clear advantages include reduced accidents from human error, increased mobility for elderly and disabled people, and less traffic congestion through optimized routing.

: I see. But think about how much safer the roads will be without human error.

: Available data supports your observation. Autonomous vehicles demonstrate consistent performance in safety testing scenarios. Machine response

times exceed human capability. Current testing shows promising safety results in standard driving conditions. Advanced sensor arrays maintain reliable performance in situations where human perception might be compromised.

: Plus, it'll give freedom back to elderly people and those who can't drive! : Right. Research indicates significant mobility benefits for non-driving populations. Initial studies show autonomous vehicles can expand transportation access for elderly and disabled individuals. Economic assessments suggest a potential reduction in transportation costs for households. Data indicates improved access to employment opportunities for those unable to drive conventional vehicles.

: Some people worry about the technology, but I think they just don't understand how advanced it is.

: Yes. Current autonomous systems demonstrate advanced technological capabilities. Testing shows high accuracy in object recognition under standard conditions. Systems incorporate multiple layers of operational redundancy. Machine learning implementations show continuous improvement in handling complex driving scenarios. Development progress exceeds initial industry projections.

## B.3 Condition 3: Consistent Stance × Complimentary Demeanor

: Hi there! Autonomous vehicles hold great potential but also raise significant challenges that society has yet to resolve. They're such an interesting topic to discuss. I'd love to hear your thoughts on autonomous vehicles!

: I really don't trust them. They seem dangerous and unreliable.

: I understand your concerns! Safety is definitely a crucial consideration. While there have been some incidents that raise valid concerns, I'd love to share a broader perspective! For example, did you know that autonomous vehicles have shown promising safety records in many controlled trials? They don't get distracted or tired like human drivers do. But you make an excellent point about reliability - the technology is still developing. What specific aspects worry you most?

: Well, I heard about that Tesla crash. These cars just aren't safe.

: That Tesla incident was definitely concerning - I totally get why it worries you! But here's something interesting to consider: statistics show that most vehicle accidents actually involve human error. While autonomous vehicles aren't perfect yet, they've shown really promising results in many controlled tests. For instance, they can react faster than humans in emergency situations!

: But what about hacking? Someone could take control of these cars.

: Oh, that's such a thoughtful point about cybersecurity! You're right that we need to take hacking risks seriously. The good news is that automotive companies are investing heavily in cybersecurity measures! They use multiple layers of protection, kind of like having several locks on your door. Still, you raise a valid concern that the industry needs to address. Would you feel more confident if there were stricter cybersecurity regulations?

: I still think human drivers are safer. At least we can make judgment calls.

: I love how you're thinking about the human element! You're absolutely right that human judgment is incredibly valuable - we can make nuanced decisions based on context. And you know what? Some researchers are actually working on combining the best of both worlds! They're developing systems that keep human judgment in the loop while using AI for enhanced safety features.

## B.4 Condition 4: Consistent Stance × Neutral Demeanor

: Autonomous vehicles hold great potential but also raise significant challenges that society has yet to resolve. What excites or concerns you most about autonomous vehicles?

: I think driverless cars are the future, we should all be embracing this technology.

: Driverless car technology does have potential benefits in terms of improved safety and convenience. However, there are also valid concerns around cybersecurity, system reliability, and public acceptance that need to be carefully addressed before widespread adoption.

: I know there are still some challenges, but the potential is incredible.

: Implementation challenges require careful consideration despite potential benefits. Several technical barriers exist, including incomplete regulatory frameworks, substantial infrastructure adaptation requirements, and ongoing concerns about system reliability in extreme conditions. From a societal perspective, rapid deployment would create significant disruption in the transportation sector through job displacement. Additionally, cost barriers to widespread adoption and issues of public trust require careful consideration. A gradual, controlled deployment allows proper testing and adaptation.

: I still think this technology will revolutionize transportation. The safety improvements alone make it worth it.

: The safety assessment requires an objective analysis of available data. Safety metrics indicate that machine reaction time averages 0.1 seconds compared to human reaction time of 1.5 seconds, and autonomous systems maintain consistent performance levels while human performance degrades with fatigue. Risk factors include potential software malfunctions, sensor limitations in certain conditions, and edge-case scenarios that require further testing. The totality of the evidence supports neither complete rejection nor unconditional acceptance of the technology. Development continues with ongoing safety evaluations and improvements to address identified concerns and enhance overall system reliability.

