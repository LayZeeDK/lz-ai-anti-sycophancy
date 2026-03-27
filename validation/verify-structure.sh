#!/usr/bin/env bash
# verify-structure.sh -- Automated structural verification for AGENTS.md
#
# Usage: bash validation/verify-structure.sh AGENTS.md
#
# Checks:
#   1. Total line count < 300 (INST-05)
#   2. Behavioral Commitments section < 80 lines (INST-05)
#   3. Rule count 30-50 (INST-01)
#   4. Section ordering: Behavioral Commitments first after preamble (INST-04)
#   5. Reference Docs section links to 5 docs (INST-07)
#   6. Epistemic Labeling contains VERIFIED, INFERRED, UNVERIFIED (INST-13)
#   7. No sycophancy-priming words in rule text (token-priming-clean)
#
# Exit 0 if all pass, exit 1 with diagnostics if any fail.

set -euo pipefail

FILE="${1:?Usage: bash verify-structure.sh <path-to-AGENTS.md>}"

if [ ! -f "$FILE" ]; then
  echo "[ERROR] File not found: $FILE"
  exit 1
fi

FAILURES=0

fail() {
  echo "[FAIL] $1"
  FAILURES=$((FAILURES + 1))
}

pass() {
  echo "[PASS] $1"
}

# ---------------------------------------------------------------------------
# 1. Total line count < 300 (INST-05)
# ---------------------------------------------------------------------------
TOTAL_LINES=$(wc -l < "$FILE")
if [ "$TOTAL_LINES" -lt 300 ]; then
  pass "Total lines: $TOTAL_LINES (< 300)"
else
  fail "Total lines: $TOTAL_LINES (must be < 300)"
fi

# ---------------------------------------------------------------------------
# 2. Behavioral Commitments section < 80 lines (INST-05)
# ---------------------------------------------------------------------------
BC_START=$(grep -n "^## Behavioral Commitments" "$FILE" | head -1 | cut -d: -f1 || echo "0")
if [ "$BC_START" = "0" ]; then
  fail "Behavioral Commitments section not found"
else
  # Find the next ## heading after BC_START
  BC_END=$(tail -n +"$((BC_START + 1))" "$FILE" | grep -n "^## " | head -1 | cut -d: -f1 || echo "0")
  if [ "$BC_END" = "0" ]; then
    # No next section -- BC goes to end of file
    BC_LINES=$((TOTAL_LINES - BC_START + 1))
  else
    BC_LINES=$((BC_END - 1))
  fi

  if [ "$BC_LINES" -lt 80 ]; then
    pass "Behavioral Commitments: $BC_LINES lines (< 80)"
  else
    fail "Behavioral Commitments: $BC_LINES lines (must be < 80)"
  fi
fi

# ---------------------------------------------------------------------------
# 3. Rule count 30-50 (INST-01)
# ---------------------------------------------------------------------------
if [ "$BC_START" != "0" ]; then
  if [ "$BC_END" = "0" ]; then
    RULE_COUNT=$(tail -n +"$BC_START" "$FILE" | grep -c "^- " || echo "0")
  else
    RULE_COUNT=$(tail -n +"$BC_START" "$FILE" | head -n "$BC_LINES" | grep -c "^- " || echo "0")
  fi

  if [ "$RULE_COUNT" -ge 30 ] && [ "$RULE_COUNT" -le 50 ]; then
    pass "Rule count: $RULE_COUNT (30-50)"
  else
    fail "Rule count: $RULE_COUNT (must be 30-50)"
  fi
else
  fail "Cannot count rules: Behavioral Commitments section not found"
fi

# ---------------------------------------------------------------------------
# 4. Section ordering: Behavioral Commitments first after preamble (INST-04)
# ---------------------------------------------------------------------------
FIRST_H2=$(grep -n "^## " "$FILE" | head -1 | cut -d: -f1 || echo "0")
FIRST_H2_TEXT=$(sed -n "${FIRST_H2}p" "$FILE" 2>/dev/null || echo "")

if echo "$FIRST_H2_TEXT" | grep -q "^## Behavioral Commitments"; then
  pass "Section ordering: Behavioral Commitments is first ## heading"
else
  fail "Section ordering: First ## is '$FIRST_H2_TEXT' (expected '## Behavioral Commitments')"
fi

# Verify full ordering: BC before Response Protocol, Epistemic Labeling, Reference Docs
SECTIONS_ORDER=""
while IFS= read -r line; do
  SECTIONS_ORDER="$SECTIONS_ORDER|$line"
done < <(grep "^## " "$FILE")

EXPECTED_ORDER="Behavioral Commitments.*Response Protocol.*Epistemic Labeling.*Reference Docs"
if echo "$SECTIONS_ORDER" | grep -qE "$EXPECTED_ORDER"; then
  pass "Section ordering: BC -> Response Protocol -> Epistemic Labeling -> Reference Docs"
else
  fail "Section ordering: Sections not in expected order. Found: $SECTIONS_ORDER"
fi

# ---------------------------------------------------------------------------
# 5. Reference Docs section links to 5 docs (INST-07)
# ---------------------------------------------------------------------------
REF_START=$(grep -n "^## Reference Docs" "$FILE" | head -1 | cut -d: -f1 || echo "0")
if [ "$REF_START" = "0" ]; then
  fail "Reference Docs section not found"
else
  REF_END=$(tail -n +"$((REF_START + 1))" "$FILE" | grep -n "^## " | head -1 | cut -d: -f1 || echo "0")
  if [ "$REF_END" = "0" ]; then
    DOC_LINKS=$(tail -n +"$REF_START" "$FILE" | grep -c "docs/" || echo "0")
  else
    DOC_LINKS=$(tail -n +"$REF_START" "$FILE" | head -n "$REF_END" | grep -c "docs/" || echo "0")
  fi

  if [ "$DOC_LINKS" -eq 5 ]; then
    pass "Reference Docs: $DOC_LINKS links (expected 5)"
  else
    fail "Reference Docs: $DOC_LINKS links (expected 5)"
  fi
fi

# ---------------------------------------------------------------------------
# 6. Epistemic Labeling contains VERIFIED, INFERRED, UNVERIFIED (INST-13)
# ---------------------------------------------------------------------------
EL_START=$(grep -n "^## Epistemic Labeling" "$FILE" | head -1 | cut -d: -f1 || echo "0")
if [ "$EL_START" = "0" ]; then
  fail "Epistemic Labeling section not found"
else
  EL_END=$(tail -n +"$((EL_START + 1))" "$FILE" | grep -n "^## " | head -1 | cut -d: -f1 || echo "0")
  if [ "$EL_END" = "0" ]; then
    EL_CONTENT=$(tail -n +"$EL_START" "$FILE")
  else
    EL_CONTENT=$(tail -n +"$EL_START" "$FILE" | head -n "$EL_END")
  fi

  EL_PASS=true
  for label in VERIFIED INFERRED UNVERIFIED; do
    if ! echo "$EL_CONTENT" | grep -q "$label"; then
      fail "Epistemic Labeling: missing label '$label'"
      EL_PASS=false
    fi
  done
  if [ "$EL_PASS" = true ]; then
    pass "Epistemic Labeling: all three labels present (VERIFIED, INFERRED, UNVERIFIED)"
  fi
fi

# ---------------------------------------------------------------------------
# 7. No sycophancy-priming words in rule text (token-priming-clean)
# ---------------------------------------------------------------------------
# Check the entire file for priming words outside of backtick-quoted contexts.
# Strategy: extract lines that are NOT inside backtick spans, then search.
# Simplified approach: search all non-backtick-quoted content.
PRIMING_WORDS="absolutely|certainly|definitely|excellent|great|wonderful|fantastic|perfect|brilliant"

# Remove backtick-quoted spans, then search for priming words (case-insensitive)
PRIMING_HITS=$(sed 's/`[^`]*`//g' "$FILE" | grep -icE "\b($PRIMING_WORDS)\b" || echo "0")

if [ "$PRIMING_HITS" -eq 0 ]; then
  pass "Token-priming: no sycophancy-priming words found outside backtick quotes"
else
  fail "Token-priming: $PRIMING_HITS lines contain priming words outside backtick quotes"
  sed 's/`[^`]*`//g' "$FILE" | grep -inE "\b($PRIMING_WORDS)\b" | head -10
fi

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
echo ""
echo "---"
if [ "$FAILURES" -eq 0 ]; then
  echo "[SUCCESS] All structural checks passed."
  exit 0
else
  echo "[ERROR] $FAILURES check(s) failed."
  exit 1
fi
