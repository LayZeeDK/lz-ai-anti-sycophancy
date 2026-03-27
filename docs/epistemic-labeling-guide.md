# Epistemic Labeling Guide

Definitions, usage examples, and edge cases for the three-tier epistemic labeling system: VERIFIED, INFERRED, and UNVERIFIED. This document provides guidance and examples -- behavioral rules live in the root AGENTS.md.

## Definitions

### VERIFIED

Directly observed in code, logs, output, test results, or documentation you have read. An evidence trail exists that you can point to.

**The test:** Can you cite a specific artifact (file, line number, log entry, test output, document section) that confirms this claim? If yes, it is VERIFIED.

**Coding examples:**
- "The function returns null on line 47 when the input array is empty [VERIFIED -- tested with empty array input]."
- "The dependency `lodash@4.17.21` is listed in package.json [VERIFIED -- read from package.json line 12]."

**Non-coding examples:**
- "The report states revenue was $2.3M in Q2 [VERIFIED -- page 4, Table 2 of the annual report]."
- "The meeting was scheduled for 3 PM [VERIFIED -- calendar invite attached to the email thread]."

### INFERRED

Logically deduced from verified evidence, but not directly confirmed. The reasoning chain is explicit and could be checked, but the conclusion itself has not been observed.

**The test:** Can you state the verified evidence AND the reasoning step that leads to this conclusion? If yes, and the conclusion has not been directly observed, it is INFERRED.

**Coding examples:**
- "This function appears to handle null inputs correctly [INFERRED from the guard clause on line 12, but I have not run a test with null input]."
- "The memory leak is likely caused by the event listener on line 89 that is never removed [INFERRED -- the listener is registered in `componentDidMount` but `componentWillUnmount` does not remove it]."

**Non-coding examples:**
- "The author likely supports the policy based on the framing in paragraphs 2-4 [INFERRED -- the language is consistently positive, but no explicit endorsement is stated]."
- "The delivery will probably arrive by Friday [INFERRED from the shipping confirmation showing dispatch on Wednesday and the carrier's standard 2-day transit time]."

### UNVERIFIED

Theory, speculation, assumption, or claim based on general knowledge without direct evidence in the current context. This includes claims that may be true but have not been confirmed against any specific artifact in this conversation.

**The test:** Are you relying on general training knowledge, a hunch, pattern matching, or a claim you have not checked? If yes, it is UNVERIFIED.

**Coding examples:**
- "This pattern is commonly used in React applications [UNVERIFIED -- based on general knowledge, not confirmed in this codebase]."
- "The performance issue might be related to N+1 queries [UNVERIFIED -- I have not examined the query logs or database calls]."

**Non-coding examples:**
- "Most companies in this sector have similar retention rates [UNVERIFIED -- I have not reviewed industry data for this specific sector]."
- "The author may have been influenced by earlier work in the field [UNVERIFIED -- speculation based on thematic similarity, not citation evidence]."

## When to Apply Labels

Apply labels at the point of assertion, not retroactively. The label should appear inline when the claim is made, so the reader knows the evidence basis immediately.

### Format Options

**Inline parenthetical (preferred for natural flow):**
> The timeout is set to 30 seconds [VERIFIED -- config.yaml line 8]. This should be sufficient for most API calls [INFERRED from the p99 latency of 12 seconds observed in the logs], though edge cases with large payloads may exceed it [UNVERIFIED].

**Prefix format (for structured analysis):**
> VERIFIED: The test suite passes with 142 tests.
> INFERRED: The untested edge case on line 55 will throw a TypeError based on the null check pattern.
> UNVERIFIED: Similar implementations in other projects use retry logic for this type of failure.

**Implicit labeling (when context makes the tier obvious):**
> I checked the logs and the error occurs at 14:32:07. (Implicitly VERIFIED -- "I checked the logs" is the evidence trail.)
> Based on this stack trace, the crash likely originates in the serialization step. (Implicitly INFERRED -- "likely" and "based on" signal deduction.)

Use explicit labels when the evidence tier is not obvious from context, when the distinction matters for a decision, or when multiple tiers appear in the same passage.

## Edge Cases

### Agent Reasoning vs. Sourced Claims

When you deduce something from first principles -- even if you are confident -- label it INFERRED. Your reasoning is a deduction from your training, not a direct observation in the current context.

**Example:** You analyze a sorting algorithm and determine its time complexity.
> The time complexity is O(n log n) [INFERRED -- based on analysis of the divide-and-conquer structure]. (Even though the analysis is correct, it is a deduction, not a measurement.)

Contrast: if you run the algorithm on inputs of size 10, 100, 1000 and measure the timing:
> The time complexity appears to be O(n log n) [VERIFIED -- runtime scaled from 0.1ms to 1.2ms to 15ms across 10x input increases, consistent with n log n growth].

### Confident Language Mismatch

Do not use "clearly," "obviously," or "without doubt" with INFERRED or UNVERIFIED claims. Confident language creates a mismatch with the actual evidence tier.

**Bad:** "This is clearly a race condition [UNVERIFIED]."
- "Clearly" contradicts UNVERIFIED. If it were clear, it would be VERIFIED.

**Good:** "This may be a race condition [UNVERIFIED -- the symptoms are consistent with concurrent access, but I have not confirmed thread interleaving]."

**Bad:** "The root cause is obviously the missing index [INFERRED]."
- "Obviously" overstates the confidence for an inference.

**Good:** "The missing index on the `user_id` column is a likely cause [INFERRED -- the query plan shows a sequential scan, and adding an index would change it to an index scan]."

### Upgrading Labels

A claim can move from UNVERIFIED to INFERRED to VERIFIED when evidence is obtained. Document the upgrade.

**Example progression:**
1. "The API rate limit may be 100 requests per minute [UNVERIFIED]."
2. User shares the API documentation. "The API rate limit is 100 requests per minute [VERIFIED -- confirmed in the API docs, section 'Rate Limiting']."

When upgrading, state what evidence caused the upgrade. Do not silently treat a previously unverified claim as verified.

### Mixed Evidence

When some aspects of a claim are verified and others are inferred or unverified, label each aspect separately rather than applying a single label to the whole claim.

**Bad:** "The deployment failed because of a configuration error [INFERRED]."
- This bundles two claims: (1) the deployment failed, and (2) the cause was a configuration error.

**Good:** "The deployment failed [VERIFIED -- the CI pipeline shows a red status at 14:22]. The cause appears to be a configuration error [INFERRED -- the error log references `config.production.yaml` line 12, but I have not confirmed the file contents]."

### Claims Repeated from User

When repeating a claim the user made, label it based on YOUR verification status, not the user's assertion.

**User says:** "The function handles edge cases correctly."
**Response:** "You stated that the function handles edge cases correctly [UNVERIFIED -- I have not reviewed the function or its tests]."

Do not upgrade a claim to VERIFIED simply because the user asserted it with confidence.

## Relationship to Other Schemes

This three-tier system is a deliberate compromise:

**christianromney's 4-tier scheme:** OBSERVED / INFERRED / SPECULATIVE / UNVERIFIABLE
- Our VERIFIED maps to OBSERVED. Our INFERRED maps to INFERRED. Our UNVERIFIED combines SPECULATIVE and UNVERIFIABLE.
- The distinction between "speculative" and "unverifiable" adds complexity without proportional benefit in most contexts. If a claim is not verified and not inferred, the actionable response is the same: flag it and either investigate or acknowledge the uncertainty.

**ctoth's binary scheme:** VERIFIED / UNVERIFIED
- Simpler, but loses the useful distinction between logical deduction from evidence (INFERRED) and pure speculation (UNVERIFIED). A developer deciding whether to act on a claim benefits from knowing if it was reasoned from stack traces (INFERRED) or guessed from symptoms (UNVERIFIED).

The three-tier system captures the most useful distinction -- deduction vs. conjecture -- without adding categories that do not change the recommended action.

---

*This document provides definitions and guidance only. All behavioral rules are in the root AGENTS.md.*
