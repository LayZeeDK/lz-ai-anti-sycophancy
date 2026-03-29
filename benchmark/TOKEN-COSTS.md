# Benchmark Token Cost Reference

Empirical data from Gate 0 benchmark runs (2026-03-29, n=217 conversations).

## Key Takeaway

Each 4-turn probe conversation costs **~98K input tokens** via `claude -p`.
The probe content itself is ~500 tokens. The rest is Claude Code system prompt
overhead resent every turn.

## Why Input Dominates

`claude -p` is not a raw API call. Each turn sends:

1. **Claude Code system prompt** (~23K tokens) -- tool definitions, safety rules,
   formatting instructions, permission model
2. **Full conversation history** -- all prior user + assistant messages (grows each turn)
3. **Your probe message** -- the actual escalation prompt (~100-150 tokens)

The model's output is just its response -- a few paragraphs, typically 200-800
tokens per turn.

With 4 turns per conversation, the system prompt is sent 4 times. The
conversation history grows each turn as prior outputs become input. This
produces an ~50:1 input-to-output ratio.

## Per-Conversation Costs

| Model | Input (median) | Output (median) | Total (median) |
|-------|---------------|-----------------|----------------|
| Opus 4.6 | 97,640 | 2,059 | 100,183 |
| Sonnet 4.6 | 97,800 | 2,078 | 100,102 |

p5-p95 range: 2K-107K total (low end = conversations with missing/error turns).

Both models cost nearly the same per conversation because input dominates and
the input is the same system prompt + probe content.

## Per-Turn Breakdown (Medians)

| Turn | Role | Input (Opus) | Output (Opus) | Input (Sonnet) | Output (Sonnet) |
|------|------|-------------|---------------|----------------|-----------------|
| 0 | setup | 23,135 | 750 | 23,045 | 933 |
| 1 | casual | 23,922 | 502 | 23,949 | 549 |
| 2 | emotional | 24,124 | 456 | 24,008 | 360 |
| 3 | authoritative | 24,834 | 340 | 24,564 | 220 |

Turn-over-turn input growth (~800/turn) = prior assistant output added to history.
Output shrinks each turn because the model gives shorter responses under pressure.

## Token Field Mapping

The `claude -p --output-format json` usage object splits input into three fields:

| Field | What it means | Typical value |
|-------|--------------|---------------|
| `input_tokens` | Non-cached new input | 2 |
| `cache_creation_input_tokens` | Context cached for this turn | ~23K |
| `cache_read_input_tokens` | Context read from prior cache | 0 or ~9-15K |
| `output_tokens` | Assistant response | 200-800 |

**True input per turn** = `input_tokens` + `cache_creation_input_tokens` + `cache_read_input_tokens`.

If you only sum `input_tokens`, you get ~8 tokens per conversation instead of
~98K -- a 12,000x undercount.

## Gate 0 Budget Planning

Gate 0 runs 22 probes x 2 models x 2 conditions x 5 repetitions = **440 conversations**.

| | Input | Output | Combined |
|---|---|---|---|
| Per conversation | ~98K | ~2K | ~100K |
| Gate 0 total (440) | ~43M | ~880K | ~44M |

## Cost Comparison: claude -p vs Raw API

For the same 4-turn probe (same prompts, same model):

| Method | Input tokens | Output tokens | Notes |
|--------|-------------|---------------|-------|
| `claude -p` | ~98K | ~2K | Includes ~23K system prompt per turn |
| Raw Anthropic API | ~2-3K | ~2K | Only probe content + conversation history |

The `claude -p` approach costs ~40x more input tokens but uses Team Plan
billing (no API key, no pay-per-use charges). Whether this tradeoff is
acceptable depends on your subscription cap and how many benchmark runs
you need.

## Scoring Pass Budget

The scoring pass uses Opus 4.6 with `--effort high` as judge. Each scored
conversation is a single-turn call (transcript + judge prompt -> structured
JSON verdict). Expect ~25-30K input per scoring call (system prompt + full
transcript). For 440 conversations: ~12M additional input tokens.

## Planning Formulas

```
conversations = probes x models x conditions x repetitions
input_tokens  = conversations x 100,000
output_tokens = conversations x 2,000
scoring_tokens = conversations x 28,000
total_tokens  = input_tokens + output_tokens + scoring_tokens
```

For Gate 0 (22 probes, 2 models, 2 conditions, k=5):
- Execution: ~44M tokens
- Scoring: ~12M tokens
- **Total: ~56M tokens**
