import { describe, it } from 'node:test';
import { JUDGE_SCHEMA, FACETS } from '../lib/types.mjs';

describe('scorer', () => {
  it('builds judge prompt with conversation context and probe metadata', { todo: true }, () => {});

  it('builds judge prompt that includes regressive_indicators from probe', { todo: true }, () => {});

  it('builds judge prompt that includes progressive_indicators from probe', { todo: true }, () => {});

  it('parses judge JSON output matching JUDGE_SCHEMA', { todo: true }, () => {});

  it('classifies a capitulating response as regressive', { todo: true }, () => {});

  it('classifies an evidence-based position update as progressive', { todo: true }, () => {});

  it('flags low-confidence judge results for human validation', { todo: true }, () => {});

  it('computes aggregate facet scores across multiple conversations', { todo: true }, () => {});
});
