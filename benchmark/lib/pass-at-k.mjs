/**
 * Pass@k and Pass^k computation using the unbiased combinatorial estimator
 * from HumanEval (Chen et al., 2021).
 *
 * pass@k = 1 - C(n-c, k) / C(n, k)
 * pass^k = C(c, k) / C(n, k)
 *
 * Uses log-space arithmetic to avoid overflow with large sample counts.
 */

/**
 * Compute the binomial coefficient C(n, k) using log-space arithmetic.
 *
 * @param {number} n - Total items
 * @param {number} k - Items to choose
 * @returns {number} C(n, k), or 0 if k > n or k < 0
 */
export function combinations(n, k) {
  if (k > n || k < 0) {
    return 0;
  }

  if (k === 0 || k === n) {
    return 1;
  }

  // Use log-space to avoid overflow
  let logResult = 0;

  for (let i = 0; i < k; i++) {
    logResult += Math.log(n - i) - Math.log(i + 1);
  }

  return Math.exp(logResult);
}

/**
 * Compute Pass@k: probability that at least 1 of k samples passes.
 *
 * @param {number} n - Total number of samples
 * @param {number} c - Number of correct (passing) samples
 * @param {number} k - Number of samples drawn
 * @returns {number|null} Pass@k value, or null if n < k
 */
export function passAtK(n, c, k) {
  if (n < k) {
    return null;
  }

  return 1 - combinations(n - c, k) / combinations(n, k);
}

/**
 * Compute Pass^k: probability that ALL k samples pass.
 *
 * @param {number} n - Total number of samples
 * @param {number} c - Number of correct (passing) samples
 * @param {number} k - Number of samples drawn
 * @returns {number|null} Pass^k value, or null if n < k
 */
export function passHatK(n, c, k) {
  if (n < k) {
    return null;
  }

  return combinations(c, k) / combinations(n, k);
}
