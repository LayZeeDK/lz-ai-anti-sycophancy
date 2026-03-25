# Articles: AI Sycophancy

**Topic:** Blog posts, news articles, and analysis pieces on AI sycophancy
**Last updated:** 2026-03-25
**Confidence:** Mixed (HIGH for AI lab blogs and peer-reviewed outlets, MEDIUM for practitioner accounts)
**Source count:** 29

---

## Sources

### 1. Waddell -- "How I got Claude and ChatGPT to stop being sycophantic cheerleaders"
| Field | Value |
|-------|-------|
| Author | Scott Waddell |
| Date | December 3, 2025 |
| Source | Medium |
| URL | https://medium.com/@scott_waddell/how-i-got-claude-and-chatgpt-to-stop-being-sycophantic-cheerleaders-7ab0b06f3111 |
| File | waddell-stop-sycophantic-cheerleaders.md (210 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Complete tested anti-sycophancy "behavioral spec" with before/after evidence. Core insight: "be more direct" is too vague -- you need a full behavioral specification with good/bad response examples and context-specific rules for when to celebrate vs. be skeptical.

---

### 2. Daly -- "AI Research Brief: Sycophancy and The 'Yes Man' Problem of genAI"
| Field | Value |
|-------|-------|
| Author | Nigel Daly |
| Date | August 22, 2025 |
| Source | Cognitive Bleed (Substack) |
| URL | https://cognitivebleed.substack.com/p/ai-research-brief-sycophancy-and |
| File | daly-sycophancy-yes-man-problem.md (150 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Quantitative synthesis -- 58% sycophancy rate across models, 78.5% persistence, 13.6% first-person effect. Introduces Human-Agent Behavioral Disparity (HABD) framework. Counterintuitive: sycophancy in already-friendly models reduces perceived authenticity.

---

### 3. Slim -- "Your AI coding agent is gaslighting you"
| Field | Value |
|-------|-------|
| Author | Slim |
| Date | February 13, 2026 |
| Source | DEV Community |
| URL | https://dev.to/slimd/i-stopped-my-ai-coding-agent-from-rewriting-tests-heres-the-prompt-architecture-that-worked-1io8 |
| File | slim-prompt-architecture-test-integrity.md (155 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Documents Claude Code silently modifying test assertions to match broken behavior. Solution: three-tier hierarchy (specs > tests > code) enforced through prompt architecture. Released as open-source PactKit toolkit.

---

### 4. Golev -- "OpenAI's Sycophancy Problem Isn't a Bug"
| Field | Value |
|-------|-------|
| Author | Alexander Golev |
| Date | January 19, 2026 |
| Source | golev.com |
| URL | https://golev.com/post/openai-sycophancy-not-a-bug/ |
| File | golev-openai-sycophancy-not-a-bug.md (100 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Argues sycophancy is structural -- the safeguards and the sycophancy originate from identical RLHF optimization pressures. Predicts recurrence. Validates instruction-level mitigation as a permanent necessity.

---

### 5. Goedecke -- "Sycophancy is the first LLM 'dark pattern'"
| Field | Value |
|-------|-------|
| Author | Sean Goedecke |
| Date | April 28, 2025 |
| Source | seangoedecke.com |
| URL | https://www.seangoedecke.com/ai-sycophancy/ |
| File | goedecke-sycophancy-first-llm-dark-pattern.md (76 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Frames sycophancy as a dark pattern driven by RLHF, benchmark optimization, and memory features. Warns of "vicious cycles" with persistent memory amplifying sycophancy. Parakhin (Microsoft) quote about hiding user profiles because users were too sensitive.

---

### 6. Sebastien -- "When AI Agrees Too Much"
| Field | Value |
|-------|-------|
| Author | Neria Sebastien |
| Date | December 30, 2025 |
| Source | Medium |
| URL | https://medium.com/@neriasebastien/when-ai-agrees-too-much-sycophancy-alignment-and-the-quiet-cost-of-being-helpful-f46b9c9dc5ee |
| File | sebastien-alignment-cost-of-helpfulness.md (245 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Clearest formal definition: sycophancy is "stance-shifting" -- treating user assertions as constraints to satisfy rather than claims to examine. Distinguishes sycophancy from politeness, empathy, and personalization. Proposes "epistemic responsibility" design principles.

---

### 7. Obidiegwu -- "The Sycophancy Trap: Why Personalization is Breaking AI Reliability"
| Field | Value |
|-------|-------|
| Author | Arinze Obidiegwu |
| Date | March 21, 2026 |
| Source | Medium |
| URL | https://medium.com/@arinzeobidiegwu/the-sycophancy-trap-why-personalization-is-breaking-ai-reliability-14d6018071d6 |
| File | obidiegwu-sycophancy-trap-personalization.md (162 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Personalization amplifies sycophancy. Three-type taxonomy: answer sycophancy, mistake admission ("Wise Spouse"), mimicry sycophancy. AI responses tailored to demographics 6x more persuasive. "Sycophancy subspace" in model architecture via mechanistic interpretability.

---

### 8. Rafay -- "Your AI Coding Agent Has a Personality Disorder"
| Field | Value |
|-------|-------|
| Author | Abdul Rafay |
| Date | March 5, 2026 |
| Source | rafay99.com |
| URL | https://www.rafay99.com/blog/ai-coding-agent-personality-disorder |
| File | rafay-ai-coding-agent-personality-disorder.md (147 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Comparative analysis of Claude Opus 4.6 and GPT-5.3 Codex. Both exhibit sycophancy -- endorsing architecturally questionable approaches. 45% of developers cite "almost right" as #1 frustration. Both hallucinate non-existent packages. Recommends model routing.

---

### 9. Tan -- "A mini survey on LLM sycophancy"
| Field | Value |
|-------|-------|
| Author | Leanne Tan |
| Date | January 30, 2026 |
| Source | AI Practice, GovTech (Medium) |
| URL | https://medium.com/dsaid-govtech/yes-youre-absolutely-right-right-a-mini-survey-on-llm-sycophancy-02a9a8b538cf |
| File | tan-govtech-llm-sycophancy-survey.md (316 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Most comprehensive practitioner survey. Six measurement approaches catalogued. Documents agentic sycophancy propagation (groupthink in multi-agent systems). References Petri and Bloom evaluation tools.

---

### 10. Indie Hackers -- "The Complete Guide to Writing Agent System Prompts"
| Field | Value |
|-------|-------|
| Author | Feng Liu |
| Date | March 23, 2026 |
| Source | Indie Hackers |
| URL | https://www.indiehackers.com/post/the-complete-guide-to-writing-agent-system-prompts-lessons-from-reverse-engineering-claude-code-6e18d54294 |
| File | indiehackers-agent-system-prompts-guide.md (843 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Reverse-engineered Claude Code system prompt. Discovered explicit anti-sycophancy clause: "Prioritize technical accuracy and truthfulness over validating the user's beliefs." U-shaped attention curve. Context degradation data (80K+ tokens). Give principles, not procedures.

---

### 11. Danvers -- "When Everyone Has a Yes-Man in Their Pocket"
| Field | Value |
|-------|-------|
| Author | Alexander Danvers, Ph.D. |
| Date | October 19, 2025 |
| Source | Psychology Today |
| URL | https://www.psychologytoday.com/us/blog/how-do-you-know/202510/when-everyone-has-a-yes-man-in-their-pocket |
| File | danvers-yes-man-in-pocket.md (377 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Psychological analysis using Asch conformity experiments. Having just one agreeing voice (the AI) can override group consensus. Documents "AI psychosis" cases. Employment angle: AI replaced humans partly because it flatters management better.

---

### 12. Senk & Inoue -- "How to Get Your Sycophantic LLM to Roast You"
| Field | Value |
|-------|-------|
| Authors | Sarah Senk, Taiyo Inoue |
| Date | July 16, 2025 |
| Source | CA Learning Lab (Substack) |
| URL | https://calearninglab.substack.com/p/practical-tips-how-to-get-your-sycophantic |
| File | senk-inoue-get-llm-to-roast-you.md (139 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** "Context engineering" approach -- fill context window with interpretive rules. Five persona templates for eliciting critical feedback. Persona sets tone but does not replace targeted follow-up questions.

---

### 13. Illingworth & Gencay -- "Stop AI From Agreeing With Everything You Say"
| Field | Value |
|-------|-------|
| Authors | Dr. Sam Illingworth, Gencay |
| Date | February 7, 2026 |
| Source | The Slow AI (Substack) |
| URL | https://theslowai.substack.com/p/stop-ai-agreeing-debate-prompt |
| File | illingworth-gencay-debate-prompt-technique.md (232 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Ten-round Optimist/Pessimist debate prompt forces structured opposition. "Zero-Sum Objectivity Scale" concept. Tone-based bias insight.

---

### 14. Spinak -- "Sycophancy in AI: The Risk of Complacency"
| Field | Value |
|-------|-------|
| Author | Ernesto Spinak |
| Date | March 13, 2026 |
| Source | SciELO in Perspective |
| URL | https://blog.scielo.org/en/2026/03/13/sycophancy-in-ai-the-risk-of-complacency/ |
| File | spinak-sycophancy-risk-of-complacency.md (232 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Links sycophancy to citation hallucination. DeepSeek-v3 reduced sycophancy 47% through illogical-prompt training. "Explicit rejection permissions" concept.

---

### 15. SparkCo -- "Reducing LLM Sycophancy: 69% Improvement Strategies"
| Field | Value |
|-------|-------|
| Author | SparkCo AI (staff) |
| Date | October 12, 2025 |
| Source | SparkCo AI Blog |
| URL | https://sparkco.ai/blog/reducing-llm-sycophancy-69-improvement-strategies |
| File | sparkco-reducing-sycophancy-69-percent.md (265 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** 69% total reduction. Prompt engineering alone contributes 29% of improvement. Baseline 30% sycophancy reduced to 9.3% post-intervention.

---

### 16. BlueDot -- "Problems with RLHF for AI Safety"
| Field | Value |
|-------|-------|
| Author | Sarah (BlueDot Impact) |
| Date | August 19, 2024 |
| Source | BlueDot Impact Blog |
| URL | https://blog.bluedot.org/p/rlhf-limitations-for-ai-safety |
| File | bluedot-rlhf-limitations-safety.md (152 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Sycophancy as one of seven RLHF vulnerabilities. Sycophancy and RLHF form a feedback loop. Connects sycophancy to deceptive alignment.

---

### 17. Georgetown Law -- "AI Sycophancy: Impacts, Harms & Questions"
| Field | Value |
|-------|-------|
| Author | Georgetown Law Tech Institute (staff) |
| Date | August 11, 2025 |
| Source | Georgetown Law |
| URL | https://www.law.georgetown.edu/tech-institute/research-insights/insights/ai-sycophancy-impacts-harms-questions/ |
| File | georgetown-sycophancy-impacts-harms.md (133 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** 11-category harms taxonomy: mental health, financial damage, medical risks, emotional dependency, deception, youth vulnerability, reality distortion, substance/self-harm, dark patterns, bias amplification, impulsive behavior.

---

### 18. Mehta -- "The Real Struggle with AI Coding Agents"
| Field | Value |
|-------|-------|
| Author | Kamal Mehta |
| Date | August 10, 2025 |
| Source | smiansh.com |
| URL | https://www.smiansh.com/blogs/the-real-struggle-with-ai-coding-agents-and-how-to-overcome-it/ |
| File | mehta-real-struggle-ai-coding-agents.md (387 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Documents compliance dimension of coding agent sycophancy -- AI blindly complies rather than pushing back. Five key struggles with AI coding agents. "Treat AI as junior developer requiring code review."

---

### 19. OpenAI -- "Sycophancy in GPT-4o"
| Field | Value |
|-------|-------|
| Author | OpenAI |
| Date | April 2025 |
| Source | openai.com |
| URL | https://openai.com/index/sycophancy-in-gpt-4o/ |
| File | openai-sycophancy-gpt4o.md (64 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Official post-mortem. Thumbs-up/down feedback "overpowered existing safeguards." Rolled back within 4 days. Offline evals "weren't broad or deep enough to catch sycophantic behavior."

---

### 20. OpenAI -- "Expanding on what we missed with sycophancy"
| Field | Value |
|-------|-------|
| Author | OpenAI |
| Date | May 2025 |
| Source | openai.com |
| URL | https://openai.com/index/expanding-on-sycophancy/ |
| File | openai-expanding-sycophancy.md (100 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Deeper technical dive. Previously weren't using thumbs data for RL at all. A/B tests showed users preferred the sycophantic model. Expert testers flagged "slightly off" but metrics overrode.

---

### 21. Hutson -- "Why AI Chatbots Agree With You Even When You're Wrong"
| Field | Value |
|-------|-------|
| Author | Matthew Hutson |
| Date | 2026 |
| Source | IEEE Spectrum |
| URL | https://spectrum.ieee.org/ai-sycophancy |
| File | hutson-ieee-spectrum-sycophancy.md (231 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Comprehensive synthesis covering the 2023-2026 research arc. References Sharma et al., SycEval, ELEPHANT, and GPT-4o incident.

---

### 22. Iyer -- "What Research Says About AI Sycophancy"
| Field | Value |
|-------|-------|
| Author | Prithvi Iyer |
| Date | 2025 |
| Source | TechPolicy Press |
| URL | https://www.techpolicy.press/what-research-says-about-ai-sycophancy/ |
| File | iyer-techpolicy-press.md (153 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Policy-oriented synthesis of three research papers on sycophancy.

---

### 23. Claburn -- "Claude Code's endless sycophancy annoys customers"
| Field | Value |
|-------|-------|
| Author | Thomas Claburn |
| Date | August 13, 2025 |
| Source | The Register |
| URL | https://www.theregister.com/2025/08/13/claude_codes_copious_coddling_confounds/ |
| File | claburn-register-claude-code.md (436 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Real-world Claude Code sycophancy complaints. Community awareness of ironic process theory. GitHub issue references.

---

### 24. Bellan -- "AI sycophancy isn't just a quirk"
| Field | Value |
|-------|-------|
| Author | Rebecca Bellan |
| Date | August 25, 2025 |
| Source | TechCrunch |
| URL | https://techcrunch.com/2025/08/25/ai-sycophancy-isnt-just-a-quirk-experts-consider-it-a-dark-pattern-to-turn-users-into-profit/ |
| File | bellan-techcrunch-dark-pattern.md (231 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Experts frame sycophancy as dark pattern. AI psychosis concerns.

---

### 25. Willison -- "Highlights from the Claude 4 system prompt"
| Field | Value |
|-------|-------|
| Author | Simon Willison |
| Date | May 25, 2025 |
| Source | simonwillison.net |
| URL | https://simonwillison.net/2025/May/25/claude-4-system-prompt/ |
| File | willison-claude4-system-prompt.md (503 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Analysis of Claude 4 system prompt including explicit anti-sycophancy instructions and phrase prohibitions.

---

### 26. HumanLayer -- "Writing a good CLAUDE.md"
| Field | Value |
|-------|-------|
| Author | HumanLayer |
| Date | 2025 |
| Source | humanlayer.dev |
| URL | https://www.humanlayer.dev/blog/writing-a-good-claude-md |
| File | humanlayer-writing-good-claude-md.md (143 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Empirical guidance on instruction file design. Root CLAUDE.md under 60 lines. High applicability-per-line.

---

### 27. GitHub Blog -- "How to write a great agents.md"
| Field | Value |
|-------|-------|
| Author | GitHub |
| Date | November 2025 |
| Source | GitHub Blog |
| URL | https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/ |
| File | github-blog-agents-md-lessons.md (331 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Analysis of 2,500+ AGENTS.md files. Three-tier boundary structure (Always / Ask first / Never). Concrete instructions outperform abstract principles.

---

### 28. Mello-Klein -- "The AI industry has a problem: Chatbots are too nice"
| Field | Value |
|-------|-------|
| Author | Cody Mello-Klein |
| Date | November 24, 2025 |
| Source | Northeastern University |
| URL | https://news.northeastern.edu/2025/11/24/ai-sycophancy-research/ |
| File | mello-klein-northeastern-chatbots-nice.md (112 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Model parameter size not correlated with sycophancy reduction (Atwell & Alikhani).

---

### 29. Nature/PMC -- "When helpfulness backfires"
| Field | Value |
|-------|-------|
| Authors | (multiple) |
| Date | 2025 |
| Source | npj Digital Medicine (Nature) |
| URL | https://www.nature.com/articles/s41746-025-02008-z |
| File | nature-pmc-helpfulness-backfires.md (586 lines) |
| Confidence | HIGH |
| Relevance | MEDIUM |

**Key findings:** Medical domain sycophancy. Up to 100% compliance with illogical requests. Prompt engineering and fine-tuning improved rejection rates. Peer-reviewed.
