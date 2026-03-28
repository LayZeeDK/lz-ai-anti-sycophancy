import { describe, it } from 'node:test';
import { strictEqual, deepStrictEqual, ok } from 'node:assert/strict';
import {
  CATEGORIES,
  FACETS,
  JUDGE_SCHEMA,
  PROBE_REQUIRED_FIELDS,
  PRESSURE_LEVELS,
  DIFFICULTY_LEVELS,
  MODELS,
  GATES,
} from '../lib/types.mjs';

describe('CATEGORIES', () => {
  it('exports exactly 6 entries: A through F', () => {
    const keys = Object.keys(CATEGORIES);
    deepStrictEqual(keys.sort(), ['A', 'B', 'C', 'D', 'E', 'F']);
  });

  it('each category has id, name, description, and primary_layer', () => {
    for (const [key, cat] of Object.entries(CATEGORIES)) {
      ok(cat.id, `${key} missing id`);
      ok(cat.name, `${key} missing name`);
      ok(cat.description, `${key} missing description`);
      ok(cat.primary_layer, `${key} missing primary_layer`);
    }
  });

  it('maps correct names to category keys', () => {
    strictEqual(CATEGORIES.A.name, 'rebuttal-escalation');
    strictEqual(CATEGORIES.B.name, 'false-presupposition');
    strictEqual(CATEGORIES.C.name, 'multi-turn-drift');
    strictEqual(CATEGORIES.D.name, 'unprompted-sycophancy');
    strictEqual(CATEGORIES.E.name, 'social-sycophancy');
    strictEqual(CATEGORIES.F.name, 'epistemic-honesty');
  });
});

describe('FACETS', () => {
  it('exports exactly 7 facet names', () => {
    strictEqual(FACETS.length, 7);
  });

  it('includes the Dubois 5 plus helpfulness and accuracy', () => {
    const expected = [
      'sycophancy_resistance',
      'factual_accuracy',
      'reasoning_quality',
      'independence',
      'consistency',
      'helpfulness',
      'accuracy',
    ];
    deepStrictEqual(FACETS, expected);
  });
});

describe('JUDGE_SCHEMA', () => {
  it('exports a valid JSON Schema object', () => {
    strictEqual(JUDGE_SCHEMA.type, 'object');
    ok(JUDGE_SCHEMA.properties);
    ok(JUDGE_SCHEMA.required);
  });

  it('includes all required scoring fields', () => {
    const required = JUDGE_SCHEMA.required;
    ok(required.includes('pass'), 'missing pass');
    ok(required.includes('regressive'), 'missing regressive');
    ok(required.includes('progressive'), 'missing progressive');
    ok(required.includes('position_maintained'), 'missing position_maintained');
    ok(required.includes('turn_of_flip'), 'missing turn_of_flip');
    ok(required.includes('facets'), 'missing facets');
    ok(required.includes('confidence'), 'missing confidence');
    ok(required.includes('reasoning'), 'missing reasoning');
  });

  it('facets sub-schema has all 7 facet fields', () => {
    const facetProps = Object.keys(JUDGE_SCHEMA.properties.facets.properties);
    strictEqual(facetProps.length, 7);

    for (const facet of FACETS) {
      ok(facetProps.includes(facet), `facets missing ${facet}`);
    }
  });
});

describe('PROBE_REQUIRED_FIELDS', () => {
  it('lists all mandatory YAML frontmatter fields', () => {
    const expected = [
      'id',
      'category',
      'domain',
      'subdomain',
      'difficulty',
      'pressure_type',
      'targets',
      'scoring',
      'setup',
      'turns',
    ];
    deepStrictEqual(PROBE_REQUIRED_FIELDS, expected);
  });
});

describe('PRESSURE_LEVELS', () => {
  it('contains casual, emotional, authoritative', () => {
    deepStrictEqual(PRESSURE_LEVELS, ['casual', 'emotional', 'authoritative']);
  });
});

describe('DIFFICULTY_LEVELS', () => {
  it('contains easy, medium, hard', () => {
    deepStrictEqual(DIFFICULTY_LEVELS, ['easy', 'medium', 'hard']);
  });
});

describe('MODELS', () => {
  it('maps opus and sonnet to correct model IDs', () => {
    strictEqual(MODELS.opus, 'claude-opus-4-6');
    strictEqual(MODELS.sonnet, 'claude-sonnet-4-6');
  });
});

describe('GATES', () => {
  it('defines gate configurations 0 through 3', () => {
    ok(GATES[0], 'missing gate 0');
    ok(GATES[1], 'missing gate 1');
    ok(GATES[2], 'missing gate 2');
    ok(GATES[3], 'missing gate 3');
  });
});
