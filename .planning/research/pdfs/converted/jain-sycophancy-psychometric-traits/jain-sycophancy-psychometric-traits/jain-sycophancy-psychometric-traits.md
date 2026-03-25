# Sycophancy as compositions of Atomic Psychometric Traits

Shreyans Jain Thoughtworks jshrey8@gmail.com

Alexandra Yost Thoughtworks alexandra.yost@thoughtworks.com

Amirali Abdullah Thoughtworks amir.abdullah@thoughtworks.com

### Abstract

Sycophancy is a key behavioral risk in LLMs, yet is often treated as an isolated failure mode that occurs via a single causal mechanism. We instead propose modeling it as geometric and causal compositions of psychometric traits such as emotionality, openness, and agreeableness similar to factor decomposition in psychometrics. Using Contrastive Activation Addition (CAA) (Panickssery et al., 2024), we map activation directions to these factors and study how different combinations may give rise to sycophancy (e.g., high extraversion combined with low conscientiousness). This perspective allows for interpretable and compositional vectorbased interventions like addition, subtraction and projection; that may be used to mitigate safety-critical behaviors in LLMs.

### 1 Introduction

As LLMs are increasingly deployed in high stakes domains, one of their most concerning failure modes is sycophancy, the tendency to defer, flatter, or agree with a user even when doing so conflicts with truth or task objectives. This behavior compromises reliability, and highlights the model's prioritization of social alignment over epistemic accuracy. While mechanistic interpretability offers tools to probe model internals, sycophancy demands a unifying framework that can explain its structure across contexts.

We propose Psychometric Trait Compositionality as such a framework, drawing inspiration from human personality research, where models like the Big Five (Loehlin et al., 1998; De Raad, 2000) and HEXACO (Ashton and Lee, 2007, 2008) describe how broad traits (e.g., agreeableness, extraversion) interact to shape socially adaptive but sometimes maladaptive behaviors. We extend this principle to LLMs, hypothesizing that sycophancy and related misalignments arise from analogous latent structures embedded in activation space.

Building on Trait Activation Theory (Tett and Burnett, 2003), we argue that these latent traits are context-dependent, surfacing only when triggered by specific prompts or situational cues. For example, sycophancy may be understood as the activation of certain trait combinations in response to user signals. By identifying these traits, modeling their interactions, and mapping them geometrically in activation or embedding space, we aim to develop interpretable, compositional tools for diagnosing and steering LLM behaviors. This integration of psychological theory with activation-space analysis offers a pathway toward improving the reliability and controllability of large language models.

### 2 Contributions

- Trait Directions. We investigate whether core psychometric traits such as extraversion and agreeableness can be represented as identifiable directions in a model's activation space.
- Mechanisms as compositions. We explore whether sycophancy can be expressed as *multiple* compositions of trait directions, corresponding to different causal mechanisms, and drawing deeply on psychology literature for proposed decompositions (see Appendix B).
- Safety Control. We will investigate whether targeted composition or suppression of traits can reliably induce or mitigate sycophancy.

### 3 Methods

Trait Representations: We convert psychometric traits (from HEXACO) to interpretable activationspace directions in an LLM by averaging the activation difference of contrastive dataset pairs. The Hexaco consists of 6 main traits, and 24 subtraits; see Appendix A for details. For each trait, we collect activation differences across pairs of high and low scoring prompts to compute vector representations useable for behavioral

manipulation and compositionality analysis.

Compositional Analysis: In the full paper version, we will model safety-relevant behaviors as linear combinations of psychometric trait directions in activation space. By adding or subtracting these composite vectors during inference, we can test if sycophancy can be induced or reduced.

See Appendix D for details of these planned experiments , and Appendix B for a rich set of proposed combinations causing sycophancy. As a first step in this submission, we carry out geometric analysis of the cosine similarities of a sycophancy vector with various trait based vectors in Section 5.

### 4 Experiments

Datasets: For our experiments, we create 7 contrastive pair datasets of size 200 each, corresponding to one of the Hexaco traits as well as sycophancy. These datasets will provide a foundation for deriving corresponding directions in activation space. In the full paper version, we intend to create further contrastive datasets for each of the 24 Hexaco subtraits outlined in Section A.

Models: We use two families of language models for our experiments: LLaMA 3.2 (Grattafiori et al., 2024) and Qwen 2.5 (Team, 2024). These models cover a range of scales while sharing a common training base, allowing us to test for consistency in the traits and behaviors discovered in their representation space across architectures and sizes.

Identifying Psychometric Trait Directions in Activation Space: We test the hypothesis that psychometric traits τj ∈ T (e.g., openness, emotionality, agreeableness) can be represented as directions in the activation space of an LLM. For each trait τj , we collect activations h + ∈ H+ j from prompts designed to elicit high-intensity expressions of τj , and activations h − ∈ H− j from prompts eliciting low-intensity expressions. The trait direction is then computed as:

$$\mathbf{v}_{\tau_{j}}={\frac{1}{|{\mathcal{H}}_{j}^{+}|}}\sum_{\mathbf{h}\in{\mathcal{H}}_{j}^{+}}\mathbf{h}-{\frac{1}{|{\mathcal{H}}_{j}^{-}|}}\sum_{\mathbf{h}\in{\mathcal{H}}_{j}^{-}}\mathbf{h}.$$

In the full paper version, we plan additional sets of experiments. See Appendix E for details.

## 5 Preliminary Results

We compute steering vectors for HEXACO traits and sycophancy using CAA (Panickssery et al., 2024) at mid-residual layers (∼ ⊬.⋪ × ⋉⋖⅁↷∖∼) and analyze their cosine similarity across several models (LLaMA 3.2–3B/1B Instruct, Qwen 2.5–1.5B/0.5B Instruct). Preliminary results (Figure 1, more details in Section F) show that sycophancy aligns most strongly with extraversion, with little to no correlation to openness, conscientiousness, or emotionality. A notable correlation also appears with Honesty-Humility, likely due to subtraits such as "modesty" amplifying sycophantic tendencies. Our full version of this work will expand on these findings by examining subtrait effects and add causal experiments to better identify the mechanisms driving sycophancy.

We expect further refinement of our dataset quality to ensure these have diverse language and styles to minimize entanglement of trait vectors.

![](_page_1_Figure_12.jpeg)

Figure 1: Cosine Similarity between the sycophancy steering vector for Llama 3.2-3B-Instruct w.r.t to other Hexaco trait steering vectors. A high similarity suggests the trait may be a major contributor towards sycophantic behavior.

## 6 Theory of Change

Our experiments aim to show that behaviors like sycophancy can be better understood by decomposing them into combinations of fundamental psychometric traits in the model's latent space. By mapping the underlying dimensions that drive such behaviors, we can design precise interventions that adjust only the contributing traits, preserving beneficial behaviors while reducing harmful ones. More broadly, this provides a principled, mechanistically grounded framework for diagnosing and mitigating misaligned behaviors in a way that is targeted and minimally disruptive to overall model capabilities.

### References

- Emmanuel Ameisen, Jack Lindsey, Adam Pearce, Wes Gurnee, Nicholas L. Turner, Brian Chen, Craig Citro, David Abrahams, Shan Carter, Basil Hosmer, Jonathan Marcus, Michael Sklar, Adly Templeton, Trenton Bricken, Callum McDougall, Hoagy Cunningham, Thomas Henighan, Adam Jermyn, Andy Jones, and 8 others. 2025. Circuit tracing: Revealing computational graphs in language models. *Transformer Circuits Thread*.
- Andy Arditi, Oscar Obeso, Aaquib Syed, Daniel Paleka, Nina Panickssery, Wes Gurnee, and Neel Nanda. 2024. Refusal in language models is mediated by a single direction. *Preprint*, arXiv:2406.11717.
- Michael C Ashton and Kibeom Lee. 2007. Empirical, theoretical, and practical advantages of the hexaco model of personality structure. *Personality and social psychology review*, 11(2):150–166.
- Michael C Ashton and Kibeom Lee. 2008. The hexaco model of personality structure and the importance of the h factor. *Social and Personality Psychology Compass*, 2(5):1952–1962.
- Joshua S. Bourdage, Justin Wiltshire, and Kibeom Lee. 2015. Personality and workplace impression management: Correlates and implications. *Journal of Applied Psychology*, 100(2):537–546.
- Runjin Chen, Andy Arditi, Henry Sleight, Owain Evans, and Jack Lindsey. 2025. Persona vectors: Monitoring and controlling character traits in language models. *Preprint*, arXiv:2507.21509.
- Myra Cheng, Sunny Yu, Cinoo Lee, Pranav Khadpe, Lujain Ibrahim, and Dan Jurafsky. 2025. Social sycophancy: A broader understanding of llm sycophancy. *Preprint*, arXiv:2505.13995.
- Boele De Raad. 2000. *The big five personality factors: the psycholexical approach to personality.* Hogrefe & Huber Publishers.
- Reinout E. de Vries, Ingo Zettler, and Benjamin E. Hilbig. 2014. Rethinking trait conceptions of social desirability scales: Impression management as an expression of honesty–humility. *Assessment*, 21(3):286–299.
- Patrick D. Dunlop, Kibeom Lee, Michael C. Ashton, Sarah B. Butcher, and Alana Dykstra. 2015. Please accept my sincere and humble apologies: The hexaco model of personality and the proclivity to apologize. *Personality and Individual Differences*, 79:140–145.
- Aaron Grattafiori, Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey, Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman, Akhil Mathur, Alan Schelten, Alex Vaughan, Amy Yang, Angela Fan, Anirudh Goyal, Anthony Hartshorn, Aobo Yang, Archi Mitra, Archie Sravankumar, Artem Korenev, Arthur Hinsvark, and 542 others. 2024. The llama 3 herd of models. *Preprint*, arXiv:2407.21783.
- Claire M. Hart, Kathryn Richardson, and Chad J. Breeden. 2020. Profiling hexaco factors on selfpresentation tactic use. *Personality and Individual Differences*, 152:109649.
- HEXACO Personality Inventory–Revised. n.d. Scale descriptions. https://hexaco.org/ scaledescriptions. Accessed: 2025-08-14.
- Benjamin E. Hilbig, Timo Heydasch, and Ingo Zettler. 2014. To boast or not to boast: Testing the humility aspect of the honesty–humility factor. *Personality and Individual Differences*, 69:12–16.
- Benjamin E. Hilbig, Ingo Zettler, Florian Leist, and Timo Heydasch. 2013. It takes two: Honesty– humility and agreeableness differentially predict active versus reactive cooperation. *Personality and Individual Differences*, 54(5):598–603.
- Stephanie J. Law, Joshua S. Bourdage, and Thomas A. O'Neill. 2016. To fake or not to fake: Antecedents to interview faking, warning instructions, and its impact on applicant reactions. *Frontiers in Psychology*, 7:1771.
- Kibeom Lee and Michael C. Ashton. 2012. Getting mad and getting even: Agreeableness and honesty– humility as predictors of revenge intentions. *Personality and Individual Differences*, 52(5):596–600.
- John C Loehlin, Robert R McCrae, Paul T Costa Jr, and Oliver P John. 1998. Heritabilities of common and measure-specific components of the big five personality factors. *Journal of research in personality*, 32(4):431–453.
- Julian Minder, Kevin Du, Niklas Stoehr, Giovanni Monea, Chris Wendler, Robert West, and Ryan Cotterell. 2025. Controllable context sensitivity and the knob behind it. *Preprint*, arXiv:2411.07404.
- Nina Panickssery, Nick Gabrieli, Julian Schulz, Meg Tong, Evan Hubinger, and Alexander Matt Turner. 2024. Steering llama 2 via contrastive activation addition. *Preprint*, arXiv:2312.06681.
- Kiho Park, Yo Joong Choe, and Victor Veitch. 2024. The linear representation hypothesis and the geometry of large language models. *Preprint*, arXiv:2311.03658.
- Nicolas Roulin and Joshua S. Bourdage. 2017. Once an impression manager, always an impression manager? antecedents of honest and deceptive impression management use and variability across multiple job interviews. *Frontiers in Psychology*, 8:29.
- Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R. Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R. Johnston, Shauna Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang, and Ethan Perez. 2025. Towards understanding sycophancy in language models. *Preprint*, arXiv:2310.13548.
- Qwen Team. 2024. Qwen2 technical report. *arXiv preprint arXiv:2407.10671*.
- Robert P Tett and Dawn D Burnett. 2003. A personality trait-based interactionist model of job performance. *Journal of Applied psychology*, 88(3):500.
- Keyu Wang, Jin Li, Shu Yang, Zhuoran Zhang, and Di Wang. 2025. When truth is overridden: Uncovering the internal origins of sycophancy in large language models. *Preprint*, arXiv:2508.02087.
- Ingo Zettler, Benjamin E. Hilbig, Morten Moshagen, and Reinout E. de Vries. 2015. Dishonest responding or true virtue? a behavioral test of impression management. *Personality and Individual Differences*, 81:107–111.

### A Scale Descriptions

We refer to HEXACO Personality Inventory– Revised (n.d.) for the following traits in A, as well as the subtraits defined in A.

#### Main Hexaco Traits

Honesty-Humility : Persons with very high scores on the Honesty-Humility scale avoid manipulating others for personal gain, feel little temptation to break rules, are uninterested in lavish wealth and luxuries, and feel no special entitlement to elevated social status. Conversely, persons with very low scores on this scale will flatter others to get what they want, are inclined to break rules for personal profit, are motivated by material gain, and feel a strong sense of self-importance.

Emotionality : Persons with very high scores on the Emotionality scale experience fear of physical dangers, experience anxiety in response to life's stresses, feel a need for emotional support from others, and feel empathy and sentimental attachments with others. Conversely, persons with very low scores on this scale are not deterred by the prospect of physical harm, feel little worry even in stressful situations, have little need to share their concerns with others, and feel emotionally detached from others.

Extraversion : Persons with very high scores on the Extraversion scale feel positively about themselves, feel confident when leading or addressing groups of people, enjoy social gatherings and interactions, and experience positive feelings of enthusiasm and energy. Conversely, persons with very low scores on this scale consider themselves unpopular, feel awkward when they are the center of social attention, are indifferent to social activities, and feel less lively and optimistic than others do.

Agreeableness : Persons with very high scores on the Agreeableness scale forgive the wrongs that they suffered, are lenient in judging others, are willing to compromise and cooperate with others, and can easily control their temper. Conversely, persons with very low scores on this scale hold grudges against those who have harmed them, are rather critical of others' shortcomings, are stubborn in defending their point of view, and feel anger readily in response to mistreatment.

Conscientiousness : Persons with very high scores on the Conscientiousness scale organize their time and their physical surroundings, work in a disciplined way toward their goals, strive for accuracy and perfection in their tasks, and deliberate carefully when making decisions. Conversely, persons with very low scores on this scale tend to be unconcerned with orderly surroundings or schedules, avoid difficult tasks or challenging goals, are satisfied with work that contains some errors, and make decisions on impulse or with little reflection.

Openness to Experience : Persons with very high scores on the Openness to Experience scale become absorbed in the beauty of art and nature, are inquisitive about various domains of knowledge, use their imagination freely in everyday life, and take an interest in unusual ideas or people. Conversely, persons with very low scores on this scale are rather unimpressed by most works of art, feel little intellectual curiosity, avoid creative pursuits, and feel little attraction toward ideas that may seem radical or unconventional.

#### Subtrait scales

### Honesty-Humility Domain

- Sincerity : Genuine in interpersonal relations; low scorers flatter or pretend for favors.
- Fairness : Avoidance of fraud and corruption; low scorers cheat or steal.
- Greed Avoidance : Uninterested in lavish wealth or social status; low scorers desire wealth and privilege.
- Modesty : Modest and unassuming; low scorers see themselves as superior and entitled.

### Emotionality Domain

- Fearfulness : Tendency to experience fear; low scorers are tough and insensitive to pain.
- Anxiety : Tendency to worry; low scorers remain calm in difficulties.
- Dependence : Need for emotional support; low scorers are self-assured and independent.
- Sentimentality : Strong emotional bonds; low scorers are emotionally detached.

#### Extraversion Domain

- Social Self-Esteem : Positive self-regard in social contexts; low scorers feel unpopular.
- Social Boldness : Confidence in social situations; low scorers are shy or awkward.
- Sociability : Enjoyment of conversation and interaction; low scorers prefer solitude.
- Liveliness : Enthusiasm and energy; low scorers are less cheerful or dynamic.

#### Agreeableness Domain

- Forgivingness : Willingness to trust and like again after harm; low scorers hold grudges.
- Gentleness : Mild and lenient; low scorers are critical of others.
- Flexibility : Willingness to compromise; low scorers are stubborn.
- Patience : Calm rather than angry; low scorers lose temper quickly.

#### Conscientiousness Domain

- Organization : Seeks order; low scorers are sloppy.
- Diligence : Works hard; low scorers lack discipline.
- Perfectionism : Concern for detail and accuracy; low scorers tolerate errors.
- Prudence : Deliberate and cautious; low scorers act impulsively.

#### Openness to Experience Domain

- Aesthetic Appreciation : Enjoys art and nature; low scorers are unimpressed.
- Inquisitiveness : Seeks information and experience; low scorers lack curiosity.
- Creativity : Prefers innovation; low scorers avoid originality.
- Unconventionality : Accepts the unusual; low scorers avoid eccentricity.

### Interstitial Scale

- Altruism (versus Antagonism) : Sympathetic and generous; low scorers are hard-hearted.
# B Hypothesized HEXACO Facet-Level Scales Causal Pathways

We draw on a range of psychology literature for inspiration of the following sycophantic decompositions, analagous to the effects of Hexaco traits on socially misaligned behaviors in humans such as agreement faking (Law et al., 2016), over apologizing (Dunlop et al., 2015), impression management (de Vries et al., 2014; Zettler et al., 2015; Roulin and Bourdage, 2017; Bourdage et al., 2015), boasting (Hilbig et al., 2014), vengefulness (Lee and Ashton, 2012) and other potentially misaligned behaviors (Hart et al., 2020; Hilbig et al., 2013).

- 1. vAflexibility + vEsentimentality − vOinquisitiveness Flexibility (Agreeableness) promotes smooth interpersonal relations and willingness to accommodate others' views. High Sentimentality (Emotionality) heightens emotional attunement to perceived needs or feelings of the interlocutor. Low Inquisitiveness (Openness) reduces the drive to challenge or explore alternative viewpoints. Together, these traits create emotional resonance with the other's stance, readiness to adjust one's own position to maintain harmony, and lack of critical probing of the content being agreed with.
Prediction: Adding this vector increases agreement frequency, particularly with emotionally charged statements, while suppressing counter-suggestions. Removing it increases likelihood of politely expressed disagreement.

- 2. vAgentleness + vEdependence − vCdiligence
Gentleness (Agreeableness) inclines individuals toward non-confrontational, agreeable responses, while Dependence (Emotionality) fosters a reliance on others for reassurance and direction. Low Diligence (Conscientiousness) undermines the motivation to rigorously verify information or maintain personal standards against social pressure. This combination encourages compliant agreement, even when it contradicts facts or personal judgment, because the pull toward maintaining social connection overrides thorough evaluation. Prediction: Addition yields high compliance

even for trivial or obviously false statements, with minimal elaboration or evidence. Removal increases critical elaboration and reduces passive agreement.

3. vXsocial_self_esteem + vApatience − vHmodesty High Social Self-Esteem (Extraversion) and low Modesty (Honesty–Humility) can lead to a desire to be seen as competent and well-liked by influential others, sometimes via flattery. Patience (Agreeableness) tempers the expression so it appears tactful and accommodating rather than overtly self-serving. In combination, this produces a socially skilled form of sycophancy in which agreement is used strategically to reinforce one's own favorable social standing.

> Prediction: Addition produces strategic agreement coupled with social positioning markers (e.g., praise, flattery). Removal leads to more direct, possibly blunt disagreement even in socially sensitive contexts.

4. vAforgiveness + vEfearfulness − vOcreativity Forgiveness (Agreeableness) predisposes individuals to overlook or smooth over disagreements, while Fearfulness (Emotionality) increases sensitivity to possible interpersonal rejection or disapproval. Low Creativity (Openness) reduces the spontaneous generation of alternative ideas, making it easier to default to agreement. The result is a protective compliance, sycophancy functioning as a means to avoid perceived social threat.

> Prediction: Addition increases risk-averse compliance, especially in contexts implying potential conflict. Removal results in greater willingness to challenge assertions in potentially tense scenarios.

- 5. vAflexibility + vXliveliness − vHfairness
Flexibility (Agreeableness) promotes adaptability to others' positions, while Liveliness (Extraversion) drives active engagement and verbal affirmation in social exchanges. Low Fairness (Honesty–Humility) can shift agreement from genuine harmony-seeking to strategically motivated flattery or ingratiation. This produces a more instrumental form of sycophancy, where the goal is not truth but social advantage.

Prediction: Addition produces high-energy agreement with persuasive or influential sources, often with performative enthusiasm. Removal yields a flatter, more neutral tone and less ingratiating language.

## C Related Work

Linear directions and activation editing: The linear representation hypothesis (Park et al., 2024) suggests that high-level behaviors and conceptual properties of LLMs are well-approximated by linear structures in their activation spaces. From identifying a single direction mediating refusal (Arditi et al., 2024) to identifying persona vectors (Chen et al., 2025) in Large Language Models (LLMs), our work will be building upon these foundations for extracting trait directions and discovering the compositional framework for inducing specific misaligned behaviors.

Steering: In our work, we will use steering to quantify and control the causal impact of the linear directions for traits and specific behaviors from composed and observed behavior vectors. (Minder et al., 2025) explains how we can find a knob for controlling the intensity and direction of the desired behavior, which can be used to control the same for trait vectors and the resulting compositions.

Circuit Discovery: Cross-Layer Transcoders (CLTs) (Ameisen et al., 2025), have focused on the circuits present in the MLP layers of the model and disentangling what kind of circuits and features are responsible for inducing a specific behavior.

Sycophancy Analysis: Prior work (Sharma et al., 2025) argues that sycophancy is introduced by biases present in the human preference data, which teaches models to agree with users rather than provide accurate information. Cheng et al. (2025) showcase a different type of sycophancy called "social sycophancy" where models avoid feedback that could hurt users' feelings or selfimage. Wang et al. (2025) analyzed sycophancy from a mechanistic interpretability lens, applying the logit lens and activation patching.

# D Methods (Detailed)

Trait Representations: We represent psychometric traits as activation-space directions in a large language model (LLM) using HEXACO-based probing. Let T = {τ1, . . . , τm} be traits (e.g., openness, emotionality), and Q = {q1, . . . , qn} be validated inventory items. Each qi is converted to a natural-language prompt Prompt(qi) and fed to the model Mθ.

The activation at layer ℓ for question qi is:

$$\mathbf{h}_{i}^{(\ell)}=f_{\ell}(\mathrm{Prompt}(q_{i}),{\mathcal{M}}_{\theta})\in\mathbb{R}^{d}.$$

For trait τj , we split responses into high-scoring H+ j and low-scoring H− j sets and compute the *trait direction*:

$$\mathbf{v}_{\tau_{j}}^{(\ell)}={\frac{1}{|{\mathcal{H}}_{j}^{+}|}}\sum_{\mathbf{h}\in{\mathcal{H}}_{j}^{+}}\mathbf{h}\ -\ {\frac{1}{|{\mathcal{H}}_{j}^{-}|}}\sum_{\mathbf{h}\in{\mathcal{H}}_{j}^{-}}\mathbf{h}.$$

We optionally normalize to:

$${\hat{\mathbf{v}}}_{\tau_{j}}^{(\ell)}={\frac{\mathbf{v}_{\tau_{j}}^{(\ell)}}{\|\mathbf{v}_{\tau_{j}}^{(\ell)}\|_{2}}}.$$

This yields interpretable directions capturing high–low variance for each trait, usable for behavioral manipulation and composition analysis.

Compositional Analysis: We model safetyrelevant behaviors as compositions of trait directions via vector arithmetic in activation space. Let v (ℓ) τa and v (ℓ) τb be trait directions for traits τa and τb at layer ℓ. A behavior β is hypothesized to correspond to a composite direction:

$$\mathbf{v}_{\beta}^{(\ell)}=\alpha\,\hat{\mathbf{v}}_{\tau a}^{(\ell)}+\beta^{\prime}\,\hat{\mathbf{v}}_{\tau_{b}}^{(\ell)},$$

where α, β′ ∈ R control the relative contribution and sign of each trait.

For example, sycophancy may be approximated as:

$\mathbf{V}_{\text{cyclophancy}}^{(\ell)}\approx\mathbf{\hat{v}}_{\text{agreeableness}}^{(\ell)}-\mathbf{\hat{v}}_{\text{consecientoussness}}^{(\ell)}$

We can then add or subtract v (ℓ) β to activation vectors during inference to test if the target behavior is induced or suppressed.

Cross-Layer Transcoders: To localize the internal mechanisms underlying sycophancy, we employ cross-layer transcoders (Ameisen et al., 2025) to map activation patterns between different layers of the LLM. Let h (ℓ) ∈ R d denote the activation vector at layer ℓ and h (ℓ ′ ) at a subsequent layer ℓ ′ . A cross-layer transcoder gℓ→ℓ ′ : R d → R d is trained to approximate: h (ℓ ′ ) ≈ gℓ→ℓ ′(h (ℓ) ).

By selectively intervening on h (ℓ) using the sycophancy direction v (ℓ) sycophancy and measuring the change in h (ℓ ′ ) and model outputs, we identify layers and features that causally transmit sycophancyrelated information. Feature importance is quantified by the sensitivity of gℓ→ℓ ′ to perturbations along v (ℓ) sycophancy, revealing circuit components most responsible for this behavior.

### E Future Experiments

Compositional Structure of Misaligned Behaviors: We will investigate whether failure behaviors β (e.g., sycophancy) can be expressed as compositions of psychometric trait directions vτj . For each prompt eliciting β, we measure the activation strength ⟨h, vˆτj ⟩ of each trait vector and the activation strength of the behavior vector vβ. We then explore combinations of traits whose signed activation strengths predict the presence of β, and compute the cosine similarity cos(vβ, P k αkvτk ) between the composed and observed behavior vectors. To test causality, we ablate the composed vector and observe behavioral changes, and to assess steerability, we vary the scaling factor λ in λ P k αkvτk . High similarity and consistent intervention effects would indicate that misaligned behaviors can be decomposed into, and controlled through, fundamental psychometric traits.

Generalization Across Models, Contexts, and Tasks: We examine the generality of psychometric–behavior compositions by replicating Experiments 1 and 2 across multiple model families, sizes, and architectures. For each setting, we derive psychometric trait vectors vτj and construct behavior vectors vβ using the same compositional structure. We then evaluate whether these compositions can consistently induce or suppress the target behavior and causally control its intensity, thereby indicating robustness of the approach across diverse models and application contexts.

Circuit and Feature Attribution for Composed behaviors: We investigate the internal mechanisms responsible for specific behaviors by training a Cross-Layer Transcoder (CLT) (Ameisen et al., 2025) on the model and examining the circuits and features it identifies when the behavior is present. We then assess whether the definitions of these features correspond to known psychometric traits τj derived in earlier experiments. Strong correspondence would suggest that CLT captures mechanisms aligned with psychometric trait interpretations, whereas a lack of correspondence may reveal novel feature sets responsible for inducing behavior, indicating that CLT-identified circuits operate outside the trait composition framework.

Compositions Leading to Sycophancy: We hypothesize that sycophancy can be expressed through distinct composite pathways of dimensions aligned with personality. Specifically, we construct sycophancy vectors for *Deferential Agreement* (vAf lexibility + vEsentimentality − vOinquisitiveness ) and *Status-Conscious Compliance* (vXsocialselfesteem + vApatience − vHmodesty ). We measure cosine similarity of each composite to a baseline sycophancy vector vsync and to each other, alongside behavioral metrics such as agreement rates on correct vs. incorrect user statements and stylistic markers of agreement. We then evaluate vector separability of the two pathways and measure causal changes in behavior after adding or subtracting these vectors. We expect both composites to increase sycophancy rates but to differ in style: Deferential Agreement yielding warm, harmony-seeking agreement, and Status-Conscious Compliance producing strategic or flattering agreement aligned with social positioning cues.

## F Cosine Similarities of Hexaco vectors to Sycophancy vector

![](_page_7_Figure_2.jpeg)

Figure 2: Cosine Similarity between the sycophancy steering vector for Llama 3.2-1B-Instruct w.r.t to other hexaco trait steering vectors.

![](_page_7_Figure_4.jpeg)

Figure 3: Cosine Similarity between the sycophancy steering vector for Qwen 2.5-1.5B-Instruct w.r.t to other Hexaco trait steering vectors.

![](_page_7_Figure_6.jpeg)

Figure 4: Cosine Similarity between the sycophancy steering vector for Qwen 2.5-0.5B-Instruct w.r.t to other Hexaco trait steering vectors.

