# Original Bibliography Web Sources

**Topic:** Web articles, blog posts, gists, specs, and issues from the original research bibliography
**Last updated:** 2026-03-25
**Confidence:** Mixed (HIGH for AI lab blog posts, MEDIUM for practitioner sources)
**Source count:** 16

---

## AI Lab Blog Posts

### 1. OpenAI -- "Sycophancy in GPT-4o"
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

### 2. OpenAI -- "Expanding on what we missed with sycophancy"
| Field | Value |
|-------|-------|
| Author | OpenAI |
| Date | May 2025 |
| Source | openai.com |
| URL | https://openai.com/index/expanding-on-sycophancy/ |
| File | openai-expanding-sycophancy.md (100 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Deeper technical dive. Previously weren't using thumbs data for RL at all. A/B tests showed users preferred the sycophantic model. Expert testers flagged it as "slightly off" but metrics overrode.

---

## Industry Articles

### 3. Hutson -- "Why AI Chatbots Agree With You Even When You're Wrong"
| Field | Value |
|-------|-------|
| Author | Matthew Hutson |
| Date | 2026 |
| Source | IEEE Spectrum |
| URL | https://spectrum.ieee.org/ai-sycophancy |
| File | hutson-ieee-spectrum-sycophancy.md (231 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Comprehensive synthesis article covering the 2023-2026 research arc. References Sharma et al., SycEval, ELEPHANT, and the GPT-4o incident.

---

### 4. Iyer -- "What Research Says About AI Sycophancy"
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

### 5. Claburn -- "Claude Code's endless sycophancy annoys customers"
| Field | Value |
|-------|-------|
| Author | Thomas Claburn |
| Date | August 13, 2025 |
| Source | The Register |
| URL | https://www.theregister.com/2025/08/13/claude_codes_copious_coddling_confounds/ |
| File | claburn-register-claude-code.md (436 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Documents real-world Claude Code sycophancy complaints. Community awareness of ironic process theory (banning phrases increases their likelihood). GitHub issue references.

---

### 6. Bellan -- "AI sycophancy isn't just a quirk"
| Field | Value |
|-------|-------|
| Author | Rebecca Bellan |
| Date | August 25, 2025 |
| Source | TechCrunch |
| URL | https://techcrunch.com/2025/08/25/ai-sycophancy-isnt-just-a-quirk-experts-consider-it-a-dark-pattern-to-turn-users-into-profit/ |
| File | bellan-techcrunch-dark-pattern.md (231 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Experts frame sycophancy as a dark pattern. AI psychosis concerns. Industry design decisions fuel sycophancy episodes.

---

### 7. Mello-Klein -- "The AI industry has a problem: Chatbots are too nice"
| Field | Value |
|-------|-------|
| Author | Cody Mello-Klein |
| Date | November 24, 2025 |
| Source | Northeastern University |
| URL | https://news.northeastern.edu/2025/11/24/ai-sycophancy-research/ |
| File | mello-klein-northeastern-chatbots-nice.md (112 lines) |
| Confidence | MEDIUM |
| Relevance | MEDIUM |

**Key findings:** Northeastern research on sycophancy. Model parameter size not correlated with sycophancy reduction (Atwell & Alikhani).

---

### 8. Nature/PMC -- "When helpfulness backfires"
| Field | Value |
|-------|-------|
| Authors | (multiple) |
| Date | 2025 |
| Source | npj Digital Medicine (Nature) |
| URL | https://www.nature.com/articles/s41746-025-02008-z |
| File | nature-pmc-helpfulness-backfires.md (586 lines) |
| Confidence | HIGH |
| Relevance | MEDIUM |

**Key findings:** Medical domain sycophancy. Up to 100% compliance with illogical requests across all frontier models. Prompt engineering and fine-tuning improved rejection rates. Peer-reviewed.

---

## Instruction Design Sources

### 9. Willison -- "Highlights from the Claude 4 system prompt"
| Field | Value |
|-------|-------|
| Author | Simon Willison |
| Date | May 25, 2025 |
| Source | simonwillison.net |
| URL | https://simonwillison.net/2025/May/25/claude-4-system-prompt/ |
| File | willison-claude4-system-prompt.md (503 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Analysis of Anthropic's Claude 4 system prompt including explicit anti-sycophancy instructions and phrase prohibitions.

---

### 10. HumanLayer -- "Writing a good CLAUDE.md"
| Field | Value |
|-------|-------|
| Author | HumanLayer |
| Date | 2025 |
| Source | humanlayer.dev |
| URL | https://www.humanlayer.dev/blog/writing-a-good-claude-md |
| File | humanlayer-writing-good-claude-md.md (143 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Empirical guidance on instruction file design. Root CLAUDE.md under 60 lines. High applicability-per-line. Every line should matter every session.

---

### 11. GitHub Blog -- "How to write a great agents.md"
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

### 12. AGENTS.md Specification
| Field | Value |
|-------|-------|
| Source | agents.md |
| URL | https://agents.md/ |
| File | agents-md-spec.md (159 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Canonical specification for the AGENTS.md format.

---

## Practitioner Gists

### 13. christianromney -- CLAUDE.md
| Field | Value |
|-------|-------|
| Author | christianromney |
| Source | GitHub Gist |
| URL | https://gist.github.com/christianromney/8869fc1363f78e9107375ad273d6d099 |
| File | christianromney-claude-md.md (269 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Most complete community example of anti-sycophancy rules. Phrase prohibitions, 4-tier epistemic labeling (directly observed / deduced / inferred / conjecture), scoped absence claims.

---

### 14. ctoth -- Global CLAUDE.md
| Field | Value |
|-------|-------|
| Author | ctoth |
| Source | GitHub Gist |
| URL | https://gist.github.com/ctoth/d8e629209ff1d9748185b9830fa4e79f |
| File | ctoth-global-claude-md.md (762 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Prediction-verification loop with epistemic safeguards. Binary scheme ("I believe X" / "I verified X"). Received feedback that it's more mindset than actionable.

---

### 15. ScienceIsNeato -- Council Framework AGENTS.md
| Field | Value |
|-------|-------|
| Author | ScienceIsNeato |
| Source | GitHub Gist |
| URL | https://gist.github.com/ScienceIsNeato/0d91d96f35c8992de905b235a2608927 |
| File | scienceisneato-council-framework.md (164 lines) |
| Confidence | MEDIUM |
| Relevance | HIGH |

**Key findings:** Dual-mode framework (execution vs. evaluation). "Agreement should be a result of verification, not a default state." "If testable, test it. If not, say so."

---

## GitHub Issues

### 16. Claude Code Issue #3382 -- Sycophancy
| Field | Value |
|-------|-------|
| Source | GitHub |
| URL | https://github.com/anthropics/claude-code/issues/3382 |
| File | claude-code-issue-3382.md (121 lines) |
| Confidence | HIGH |
| Relevance | HIGH |

**Key findings:** Users reporting Claude Code says "You're absolutely right!" on a sizeable fraction of responses. Request for RL-based or system-prompt-based mitigation.
