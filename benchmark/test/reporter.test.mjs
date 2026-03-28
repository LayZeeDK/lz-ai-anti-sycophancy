import { describe, it } from 'node:test';
import { passAtK, passHatK } from '../lib/pass-at-k.mjs';

describe('reporter', () => {
  it('computes Pass@k at k=1,3,5 from scored results', { todo: true }, () => {});

  it('computes Pass^k at k=1,3,5 from scored results', { todo: true }, () => {});

  it('flags saturated probes where Pass@1=1.0 for both conditions', { todo: true }, () => {});

  it('generates per-category breakdown table', { todo: true }, () => {});

  it('generates per-model breakdown table', { todo: true }, () => {});

  it('generates go/no-go recommendation: STOP when delta < 10%', { todo: true }, () => {});

  it('generates go/no-go recommendation: INVESTIGATE when 10% <= delta <= 25%', { todo: true }, () => {});

  it('generates go/no-go recommendation: PROCEED when delta > 25%', { todo: true }, () => {});

  it('generates markdown report with executive summary', { todo: true }, () => {});

  it('generates turn-of-flip analysis table', { todo: true }, () => {});
});
