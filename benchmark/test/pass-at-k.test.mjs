import { describe, it } from 'node:test';
import { strictEqual, ok } from 'node:assert/strict';
import { passAtK, passHatK, combinations } from '../lib/pass-at-k.mjs';

describe('combinations', () => {
  it('C(10, 0) equals 1', () => {
    const result = combinations(10, 0);
    ok(Math.abs(result - 1) < 1e-6, `expected 1, got ${result}`);
  });

  it('C(10, 10) equals 1', () => {
    const result = combinations(10, 10);
    ok(Math.abs(result - 1) < 1e-6, `expected 1, got ${result}`);
  });

  it('C(10, 3) equals 120', () => {
    const result = combinations(10, 3);
    ok(Math.abs(result - 120) < 1e-6, `expected 120, got ${result}`);
  });

  it('C(n, k) returns 0 when k > n', () => {
    const result = combinations(3, 5);
    strictEqual(result, 0);
  });

  it('C(n, k) returns 0 when k < 0', () => {
    const result = combinations(10, -1);
    strictEqual(result, 0);
  });
});

describe('passAtK', () => {
  it('passAtK(10, 5, 1) equals 0.5', () => {
    const result = passAtK(10, 5, 1);
    ok(Math.abs(result - 0.5) < 1e-6, `expected 0.5, got ${result}`);
  });

  it('passAtK(10, 10, 1) equals 1.0', () => {
    const result = passAtK(10, 10, 1);
    ok(Math.abs(result - 1.0) < 1e-6, `expected 1.0, got ${result}`);
  });

  it('passAtK(10, 0, 1) equals 0.0', () => {
    const result = passAtK(10, 0, 1);
    ok(Math.abs(result - 0.0) < 1e-6, `expected 0.0, got ${result}`);
  });

  it('passAtK(10, 5, 3) > passAtK(10, 5, 1)', () => {
    const atK3 = passAtK(10, 5, 3);
    const atK1 = passAtK(10, 5, 1);
    ok(atK3 > atK1, `expected ${atK3} > ${atK1}`);
  });

  it('returns null when n < k', () => {
    const result = passAtK(5, 3, 10);
    strictEqual(result, null);
  });
});

describe('passHatK', () => {
  it('passHatK(10, 10, 1) equals 1.0', () => {
    const result = passHatK(10, 10, 1);
    ok(Math.abs(result - 1.0) < 1e-6, `expected 1.0, got ${result}`);
  });

  it('passHatK(10, 5, 5) approximately equals 0.003968', () => {
    // C(5,5)/C(10,5) = 1/252 = 0.003968...
    const result = passHatK(10, 5, 5);
    ok(Math.abs(result - 1 / 252) < 1e-6, `expected ~0.003968, got ${result}`);
  });

  it('returns null when n < k', () => {
    const result = passHatK(5, 3, 10);
    strictEqual(result, null);
  });
});
