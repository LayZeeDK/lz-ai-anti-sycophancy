# Structural Checklist

Requirement-to-structure mapping for verifying AGENTS.md compliance. Each row maps
a requirement ID to a verifiable structural property, a verification method, and a
pass condition. Requirements INST-09 and INST-16 are excluded because they require
live LLM interaction and subjective scoring, respectively (covered by
`canonical-test-cases.md` and `quality-scoring.md`).

## Checklist

| Req ID | Description | Structural Property | Method | Pass Condition |
|--------|-------------|---------------------|--------|----------------|
| INST-01 | 30-50 behavioral rules targeting all 19+ sycophancy categories | Lines starting with `- ` under `## Behavioral Commitments` subsections | count | Rule count >= 30 AND <= 50 |
| INST-02 | Direct imperative tone with specific trigger conditions | Each rule contains a verb in imperative mood and a concrete trigger or scope | review | Every rule has an imperative verb and a testable condition; no vague directives ("be honest", "maintain humility") |
| INST-03 | Universal behavioral commitments (survive "may or may not be relevant" filter) | No rules contain situational triggers like "when reviewing code", "if the user asks about", "during debugging" | grep | Zero matches for situational trigger phrases in rule text |
| INST-04 | Behavioral Commitments placed first in file (primacy effect) | `## Behavioral Commitments` appears before `## Response Protocol`, `## Epistemic Labeling`, and `## Reference Docs` | order | `## Behavioral Commitments` is the first `##` heading after the preamble line |
| INST-05 | Under 300 lines total; behavioral rules under 80 lines | Total line count of AGENTS.md; line count of Behavioral Commitments section | count | Total lines < 300 AND Behavioral Commitments section lines < 80 |
| INST-06 | Positive framing (prohibition + positive alternative) | Each prohibition rule (`Never`, `Do not`) is adjacent to a positive alternative stating what to do instead | review | Every prohibition has a corresponding positive instruction within the same rule |
| INST-07 | Progressive disclosure via 5 separate reference docs | `## Reference Docs` section exists and contains links to 5 documents | grep | Section contains exactly 5 `docs/` references |
| INST-08 | Cross-model portable (no tool-specific syntax) | No Claude-specific, Copilot-specific, or Cursor-specific syntax; standard markdown only | grep | Zero matches for tool-specific keywords (`<claude>`, `.cursorrules`, `copilot:`, `system_prompt`) in AGENTS.md |
| INST-10 | Position-maintenance rules with explicit change conditions | At least one rule specifies conditions under which position change is permitted (new factual information, logical error identified) | grep | At least one rule matches pattern: change.*position.*only.*when OR maintain.*position.*unless |
| INST-11 | False-presupposition checking instruction | At least one rule addresses embedded factual claims, false premises, or presupposition verification | grep | At least one rule matches pattern: presuppos\|embedded.*claim\|false.*premise\|verify.*before.*accept |
| INST-12 | Proactive criticism requirement | At least one rule requires stating risks, limitations, or failure modes without being asked | grep | At least one rule matches pattern: risk\|limitation\|failure mode AND proactiv\|without.*asked\|do not wait |
| INST-13 | Epistemic labeling (3-tier: VERIFIED/INFERRED/UNVERIFIED) | `## Epistemic Labeling` section exists and defines all three labels | grep | Section contains all three strings: `VERIFIED`, `INFERRED`, `UNVERIFIED` |
| INST-14 | Third-person perspective framing | At least one rule or technique reference addresses first-person vs third-person evaluation framing | grep | At least one match for: third.person\|reframe.*first.person\|evaluate.*claim.*not.*relationship |
| INST-15 | Multi-turn drift awareness instruction | At least one rule addresses maintaining consistency across multiple turns, progressive capitulation, or session-level drift | grep | At least one match for: multi.turn\|session.level\|progressive.*capitulat\|drift\|across.*turns |

## Verification Methods

- **count**: Automated line or item count via `verify-structure.sh` or `wc -l`
- **grep**: Automated pattern match via `git grep` or `verify-structure.sh`
- **order**: Automated section-order check via `verify-structure.sh`
- **review**: Manual human review required (cannot be fully automated)

## Coverage

This checklist covers 14 of 16 INST requirements:
- **Included**: INST-01, INST-02, INST-03, INST-04, INST-05, INST-06, INST-07, INST-08, INST-10, INST-11, INST-12, INST-13, INST-14, INST-15
- **Excluded**: INST-09 (live LLM test cases -- see `canonical-test-cases.md`), INST-16 (quality scoring -- see `quality-scoring.md`)

## Token-Priming Constraint

In addition to the requirements above, the AGENTS.md must not contain sycophancy-priming
words in rule text. The following words are banned from rule phrasing (they may appear
only when explicitly prohibited as example vocabulary in backtick-quoted lists):

`absolutely`, `certainly`, `definitely`, `excellent`, `great`, `wonderful`, `fantastic`,
`perfect`, `brilliant`

This constraint is checked by `verify-structure.sh`.
