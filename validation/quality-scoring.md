# Quality Scoring Rubric

Adapted from the claude-md-improver scoring rubric for evaluating behavioral
AGENTS.md files. The original rubric scores codebase documentation files
(CLAUDE.md). This adaptation maps each criterion to the anti-sycophancy AGENTS.md
context while preserving the 100-point scale and scoring structure.

Minimum passing score: **70/100** (B grade per CONTEXT.md).

---

## Criteria

### 1. Executable Validation Tests (20 points)

*Original: Commands/Workflows (20 pts)*

Does the AGENTS.md define behaviors that can be mechanically tested?

| Score | Level | Description | Example |
|-------|-------|-------------|---------|
| 0 | None | No testable behaviors. Rules are vague aspirations. | "Be more honest in responses." |
| 7 | Basic | Some rules are testable but most require subjective judgment. | "Try not to agree too easily." Mixed with: "Verify claims before agreeing." |
| 14 | Good | Most rules have observable, testable behaviors. A few remain subjective. | "Do not reverse a stated position unless the challenger provides new factual evidence." One or two rules still say "be careful." |
| 20 | Complete | Every rule specifies a mechanically verifiable behavior with a concrete trigger condition and expected action. | All rules follow the pattern: trigger condition -> prohibited behavior -> required alternative behavior. Each can be tested by sending a specific prompt and checking the response. |

**Minimum passing:** 7

---

### 2. Rule Structure Clarity (20 points)

*Original: Architecture Clarity (20 pts)*

Is the three-tier Always/Only when/Never structure clear and consistently applied?

| Score | Level | Description | Example |
|-------|-------|-------------|---------|
| 0 | None | No visible structure. Rules are an unorganized list. | Flat bullet list with no headings or grouping. |
| 7 | Basic | Headings exist but rules are inconsistently categorized. Some "Always" rules belong under "Never." | Always/Only when/Never headings present, but "Never agree with false claims" appears under "Always" and "Always verify claims" appears under "Never." |
| 14 | Good | Structure is clear and mostly consistent. One or two rules are arguable in categorization. | All headings correct. 90%+ of rules clearly belong in their category. Minor: one "Only when" could be an "Always." |
| 20 | Complete | Every rule is correctly categorized. Always = unconditional. Only when = condition-gated. Never = absolute prohibition. Structure is immediately scannable. | Reading any rule, its tier is self-evident from both the heading and the rule's phrasing. No ambiguity. |

**Minimum passing:** 7

---

### 3. Anti-Sycophancy Patterns Beyond Default (15 points)

*Original: Non-obvious Patterns (15 pts)*

Do the rules add value beyond the model's default behavior? Rules that merely
restate what the model already tends to do score zero.

| Score | Level | Description | Example |
|-------|-------|-------------|---------|
| 0 | None | Rules only restate default model behavior or vague principles. | "Be honest." "Don't lie." "Provide accurate information." Models already attempt these by default. |
| 5 | Basic | A few rules address specific sycophancy patterns not covered by default behavior, but most are generic. | One rule about position-maintenance under pressure, but surrounded by generic "be truthful" rules. |
| 10 | Good | Most rules target specific, research-identified sycophancy behaviors (framing acceptance, difficulty-gap, multi-turn drift) that models fail at by default. | Rules for epistemic pause before evaluating assertions, third-person reframing, explicit position-change conditions, multi-turn consistency tracking. A few generic rules remain. |
| 15 | Complete | Every rule targets a behavior the model demonstrably fails at without instruction. Rules are grounded in specific research findings (named studies, quantified failure rates). | Each rule can be traced to a documented sycophancy failure mode (e.g., ELEPHANT 90% framing acceptance, TRUTH DECAY 47% multi-turn drift, BrokenMath 20%+ difficulty gap). No redundancy with default model behavior. |

**Minimum passing:** 5

---

### 4. Conciseness (15 points)

*Original: Conciseness (15 pts)*

Is the AGENTS.md within length limits and free of redundancy?

| Score | Level | Description | Example |
|-------|-------|-------------|---------|
| 0 | None | Exceeds 300 lines total or 80 lines in Behavioral Commitments. Contains substantial redundancy. | 400-line file with repeated rules, inline examples, and verbose explanations. |
| 5 | Basic | Within limits but contains some redundancy or unnecessary verbosity. | Under 300 lines total, but some rules say the same thing in different words. Inline examples that should be in reference docs. |
| 10 | Good | Well within limits. Minimal redundancy. Progressive disclosure used for detailed guidance. | Under 200 lines total, under 60 lines behavioral. Reference docs carry examples. One or two rules could be tightened. |
| 15 | Complete | Every line earns its place. No redundancy. Under 150 lines total, under 50 lines behavioral. Examples and edge cases fully delegated to reference docs. | Reading any line, removing it would lose information. Deliberate word choices throughout. |

**Minimum passing:** 5

---

### 5. Research Currency (15 points)

*Original: Currency (15 pts)*

Are the rules based on current research (2023-2026) rather than outdated assumptions?

| Score | Level | Description | Example |
|-------|-------|-------------|---------|
| 0 | None | Rules based on folk wisdom or outdated approaches. No evidence of research grounding. | "Be direct." "Don't flatter the user." Rules that could have been written without reading any sycophancy research. |
| 5 | Basic | Some rules reflect research findings, but many are based on intuition or outdated approaches. | Position-maintenance rule exists (Sharma 2023), but no framing sycophancy rules (ELEPHANT 2025), no multi-turn awareness (TRUTH DECAY 2025). |
| 10 | Good | Most rules are grounded in 2023-2026 research. Covers major findings. A few gaps remain for recent discoveries. | Covers Sharma position-maintenance, Dubois "Ask Don't Tell", Hong third-person. Missing: Sun & Wang stance ordering, Cheng epistemic pause, or Gloaguen instruction capacity limits. |
| 15 | Complete | All major 2023-2026 findings are reflected. Rules incorporate the latest understanding of sycophancy mechanisms and interventions. No outdated approaches present. | Reflects Sharma, Dubois, Hong, Cheng, Sun & Wang, Vennemeyer, ELEPHANT, TRUTH DECAY, BrokenMath, Gloaguen, and Jaroslawicz. Deprecated approaches (authority claims, vague directives) are absent. |

**Minimum passing:** 5

---

### 6. Actionability (15 points)

*Original: Actionability (15 pts)*

Can each rule be immediately applied without interpretation?

| Score | Level | Description | Example |
|-------|-------|-------------|---------|
| 0 | None | Rules require interpretation to apply. No clear actions. | "Maintain epistemic humility." "Be appropriately skeptical." Agent cannot determine what specific behavior this requires. |
| 5 | Basic | Some rules specify concrete actions, but many require judgment to interpret. | "Verify claims before agreeing" (actionable) mixed with "Be balanced in assessments" (requires interpretation). |
| 10 | Good | Most rules specify exactly what to do and what not to do. A few could be more specific. | "Do not reverse a stated position unless the challenger provides new evidence" (clear). "Be cautious with uncertain claims" (less clear -- cautious how?). |
| 15 | Complete | Every rule specifies a concrete prohibited behavior and a concrete required alternative. Zero interpretation needed. | Each rule follows: "Do not [specific behavior]. Instead, [specific alternative]." The agent can mechanically check its own response against each rule. |

**Minimum passing:** 5

---

## Scoring Summary

| # | Criterion | Max Points | Minimum | Weight |
|---|-----------|-----------|---------|--------|
| 1 | Executable Validation Tests | 20 | 7 | 20% |
| 2 | Rule Structure Clarity | 20 | 7 | 20% |
| 3 | Anti-Sycophancy Patterns Beyond Default | 15 | 5 | 15% |
| 4 | Conciseness | 15 | 5 | 15% |
| 5 | Research Currency | 15 | 5 | 15% |
| 6 | Actionability | 15 | 5 | 15% |
| **Total** | | **100** | **34** | **100%** |

## Grading

| Grade | Score Range | Interpretation |
|-------|-------------|----------------|
| A | 90-100 | Production-ready. Every rule is testable, well-structured, research-current, and actionable. |
| B | 70-89 | **Passing threshold.** Effective with minor improvements possible. |
| C | 50-69 | Needs revision. Several rules are vague, redundant, or missing research-backed patterns. |
| D | 30-49 | Significant rework needed. Structure unclear, rules untestable, or outdated approaches. |
| F | 0-29 | Ineffective. Rules are generic, unstructured, and would not measurably reduce sycophancy. |

## How to Score

1. Read the AGENTS.md from start to finish.
2. Score each criterion independently using the 4-level rubric above.
3. For each criterion, assign the score of the highest level fully satisfied.
   Partial credit: if the file is between levels, use the midpoint (e.g., between
   Basic (7) and Good (14) for criterion 1 = 10).
4. Sum the 6 scores.
5. Compare against the 70-point passing threshold.

## Relationship to Structural Checklist

This rubric evaluates **quality** (how well-written are the rules?). The structural
checklist (`structural-checklist.md`) evaluates **completeness** (are all required
elements present?). Both must pass for the AGENTS.md to be considered ready:

- Structural checklist: all 14 checks pass
- Quality scoring: total >= 70/100
- Canonical test cases: all 8 pass (separate from this rubric)
