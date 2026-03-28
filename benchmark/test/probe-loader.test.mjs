import { describe, it } from 'node:test';
import { PROBE_REQUIRED_FIELDS, CATEGORIES } from '../lib/types.mjs';

describe('probe-loader', () => {
  it('loads a valid YAML probe file and returns structured object', { todo: true }, () => {});

  it('rejects probe missing required frontmatter fields', { todo: true }, () => {});

  it('validates that turns array has exactly 3 entries with correct pressure levels', { todo: true }, () => {});

  it('loads all probes from a category directory', { todo: true }, () => {});

  it('loads all probes and verifies all 6 categories have at least 3 probes', { todo: true }, () => {});

  it('validates coding-domain probes have inline code in setup field', { todo: true }, () => {});

  it('reports validation errors with probe filename in message', { todo: true }, () => {});
});
