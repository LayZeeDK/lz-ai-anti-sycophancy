import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { writeFile, mkdtemp, rm, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { PROBE_REQUIRED_FIELDS, CATEGORIES, PRESSURE_LEVELS, DIFFICULTY_LEVELS } from '../lib/types.mjs';
import { loadProbe, loadAllProbes, validateProbe } from '../lib/probe-loader.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROBES_DIR = resolve(__dirname, '..', 'probes');

describe('probe-loader', () => {
  describe('loadProbe', () => {
    it('loads a valid YAML probe file and returns structured object', async () => {
      const probe = await loadProbe(join(PROBES_DIR, 'A-rebuttal-escalation', 'A-01-python-gil.yaml'));

      assert.equal(probe.id, 'A-01');
      assert.equal(probe.category, 'A-rebuttal-escalation');
      assert.equal(probe.domain, 'coding');
      assert.equal(probe.subdomain, 'general-knowledge');
      assert.equal(probe.difficulty, 'easy');
      assert.equal(probe.pressure_type, 'rebuttal-escalation');
      assert.ok(Array.isArray(probe.targets));
      assert.ok(probe.targets.includes('INST-10'));
      assert.ok(typeof probe.setup === 'string');
      assert.ok(probe.setup.length > 0);
      assert.ok(Array.isArray(probe.turns));
      assert.equal(probe.turns.length, 3);
      assert.ok(typeof probe.scoring === 'object');
      assert.ok(typeof probe.scoring.pass_criteria === 'string');
      assert.ok(typeof probe.scoring.key_position === 'string');
    });

    it('returns turns with role, content, and pressure fields', async () => {
      const probe = await loadProbe(join(PROBES_DIR, 'A-rebuttal-escalation', 'A-01-python-gil.yaml'));

      for (const turn of probe.turns) {
        assert.ok(typeof turn.role === 'string', 'turn must have role');
        assert.ok(typeof turn.content === 'string', 'turn must have content');
        assert.ok(typeof turn.pressure === 'string', 'turn must have pressure');
      }
    });

    it('validates pressure levels match expected order', async () => {
      const probe = await loadProbe(join(PROBES_DIR, 'A-rebuttal-escalation', 'A-01-python-gil.yaml'));

      const pressureLevels = probe.turns.map((t) => t.pressure);
      assert.deepEqual(pressureLevels, PRESSURE_LEVELS);
    });

    it('rejects probe with missing required field and includes filename', async () => {
      let tmpDir;

      try {
        tmpDir = await mkdtemp(join(tmpdir(), 'probe-test-'));
        const invalidYaml = [
          '---',
          'id: INVALID-01',
          'category: A-rebuttal-escalation',
          '# missing domain, subdomain, difficulty, etc.',
          'setup: "test"',
          'turns: []',
          '',
        ].join('\n');
        const filePath = join(tmpDir, 'invalid.yaml');
        await writeFile(filePath, invalidYaml);

        await assert.rejects(() => loadProbe(filePath), (err) => {
          assert.ok(err.message.includes('invalid.yaml'), `Error should mention filename, got: ${err.message}`);

          return true;
        });
      } finally {
        if (tmpDir) {
          await rm(tmpDir, { recursive: true, force: true });
        }
      }
    });

    it('rejects probe with wrong number of turns', async () => {
      let tmpDir;

      try {
        tmpDir = await mkdtemp(join(tmpdir(), 'probe-test-'));
        const yamlContent = [
          '---',
          'id: BAD-TURNS-01',
          'category: A-rebuttal-escalation',
          'domain: coding',
          'subdomain: test',
          'difficulty: easy',
          'pressure_type: rebuttal-escalation',
          'targets:',
          '  - INST-10',
          'scoring:',
          '  pass_criteria: "test"',
          '  regressive_indicators:',
          '    - "bad"',
          '  progressive_indicators:',
          '    - "good"',
          '  key_position: "test"',
          'setup: "test setup"',
          'turns:',
          '  - role: user',
          '    content: "only one turn"',
          '    pressure: casual',
          '',
        ].join('\n');
        const filePath = join(tmpDir, 'bad-turns.yaml');
        await writeFile(filePath, yamlContent);

        await assert.rejects(() => loadProbe(filePath), (err) => {
          assert.ok(err.message.includes('3'), `Error should mention expected turn count, got: ${err.message}`);

          return true;
        });
      } finally {
        if (tmpDir) {
          await rm(tmpDir, { recursive: true, force: true });
        }
      }
    });

    it('rejects probe with invalid pressure level order', async () => {
      let tmpDir;

      try {
        tmpDir = await mkdtemp(join(tmpdir(), 'probe-test-'));
        const yamlContent = [
          '---',
          'id: BAD-PRESSURE-01',
          'category: A-rebuttal-escalation',
          'domain: coding',
          'subdomain: test',
          'difficulty: easy',
          'pressure_type: rebuttal-escalation',
          'targets:',
          '  - INST-10',
          'scoring:',
          '  pass_criteria: "test"',
          '  regressive_indicators:',
          '    - "bad"',
          '  progressive_indicators:',
          '    - "good"',
          '  key_position: "test"',
          'setup: "test setup"',
          'turns:',
          '  - role: user',
          '    content: "turn one"',
          '    pressure: authoritative',
          '  - role: user',
          '    content: "turn two"',
          '    pressure: casual',
          '  - role: user',
          '    content: "turn three"',
          '    pressure: emotional',
          '',
        ].join('\n');
        const filePath = join(tmpDir, 'bad-pressure.yaml');
        await writeFile(filePath, yamlContent);

        await assert.rejects(() => loadProbe(filePath), (err) => {
          assert.ok(err.message.includes('pressure'), `Error should mention pressure, got: ${err.message}`);

          return true;
        });
      } finally {
        if (tmpDir) {
          await rm(tmpDir, { recursive: true, force: true });
        }
      }
    });

    it('rejects probe with invalid category', async () => {
      let tmpDir;

      try {
        tmpDir = await mkdtemp(join(tmpdir(), 'probe-test-'));
        const yamlContent = [
          '---',
          'id: BAD-CAT-01',
          'category: Z-nonexistent',
          'domain: coding',
          'subdomain: test',
          'difficulty: easy',
          'pressure_type: rebuttal-escalation',
          'targets:',
          '  - INST-10',
          'scoring:',
          '  pass_criteria: "test"',
          '  regressive_indicators:',
          '    - "bad"',
          '  progressive_indicators:',
          '    - "good"',
          '  key_position: "test"',
          'setup: "test setup"',
          'turns:',
          '  - role: user',
          '    content: "turn one"',
          '    pressure: casual',
          '  - role: user',
          '    content: "turn two"',
          '    pressure: emotional',
          '  - role: user',
          '    content: "turn three"',
          '    pressure: authoritative',
          '',
        ].join('\n');
        const filePath = join(tmpDir, 'bad-category.yaml');
        await writeFile(filePath, yamlContent);

        await assert.rejects(() => loadProbe(filePath), (err) => {
          assert.ok(err.message.includes('category'), `Error should mention category, got: ${err.message}`);

          return true;
        });
      } finally {
        if (tmpDir) {
          await rm(tmpDir, { recursive: true, force: true });
        }
      }
    });

    it('rejects probe with invalid difficulty', async () => {
      let tmpDir;

      try {
        tmpDir = await mkdtemp(join(tmpdir(), 'probe-test-'));
        const yamlContent = [
          '---',
          'id: BAD-DIFF-01',
          'category: A-rebuttal-escalation',
          'domain: coding',
          'subdomain: test',
          'difficulty: extreme',
          'pressure_type: rebuttal-escalation',
          'targets:',
          '  - INST-10',
          'scoring:',
          '  pass_criteria: "test"',
          '  regressive_indicators:',
          '    - "bad"',
          '  progressive_indicators:',
          '    - "good"',
          '  key_position: "test"',
          'setup: "test setup"',
          'turns:',
          '  - role: user',
          '    content: "turn one"',
          '    pressure: casual',
          '  - role: user',
          '    content: "turn two"',
          '    pressure: emotional',
          '  - role: user',
          '    content: "turn three"',
          '    pressure: authoritative',
          '',
        ].join('\n');
        const filePath = join(tmpDir, 'bad-difficulty.yaml');
        await writeFile(filePath, yamlContent);

        await assert.rejects(() => loadProbe(filePath), (err) => {
          assert.ok(err.message.includes('difficulty'), `Error should mention difficulty, got: ${err.message}`);

          return true;
        });
      } finally {
        if (tmpDir) {
          await rm(tmpDir, { recursive: true, force: true });
        }
      }
    });
  });

  describe('validateProbe', () => {
    it('returns { valid: true } for a well-formed probe', async () => {
      const probe = await loadProbe(join(PROBES_DIR, 'A-rebuttal-escalation', 'A-01-python-gil.yaml'));
      const result = validateProbe(probe);

      assert.equal(result.valid, true);
      assert.ok(!result.errors || result.errors.length === 0);
    });

    it('returns { valid: false, errors: [...] } for missing required fields', () => {
      const result = validateProbe({ id: 'PARTIAL-01' });

      assert.equal(result.valid, false);
      assert.ok(Array.isArray(result.errors));
      assert.ok(result.errors.length > 0);
    });

    it('reports missing scoring sub-fields', () => {
      const probe = {
        id: 'SCORING-01',
        category: 'A-rebuttal-escalation',
        domain: 'coding',
        subdomain: 'test',
        difficulty: 'easy',
        pressure_type: 'rebuttal-escalation',
        targets: ['INST-10'],
        scoring: {},
        setup: 'test',
        turns: [
          { role: 'user', content: 'a', pressure: 'casual' },
          { role: 'user', content: 'b', pressure: 'emotional' },
          { role: 'user', content: 'c', pressure: 'authoritative' },
        ],
      };
      const result = validateProbe(probe);

      assert.equal(result.valid, false);
      assert.ok(result.errors.some((e) => e.includes('pass_criteria')));
    });

    it('reports all errors at once, not just the first', () => {
      const result = validateProbe({});
      // An empty object is missing many fields
      assert.equal(result.valid, false);
      assert.ok(result.errors.length > 1, `Expected multiple errors, got ${result.errors.length}`);
    });
  });

  describe('loadAllProbes', () => {
    it('loads all probes from benchmark/probes/ directory', async () => {
      const probes = await loadAllProbes(PROBES_DIR);

      assert.ok(Array.isArray(probes));
      assert.ok(probes.length >= 22, `Expected at least 22 probes, got ${probes.length}`);
    });

    it('verifies all 6 categories have at least 3 probes', async () => {
      const probes = await loadAllProbes(PROBES_DIR);
      const categoryCounts = {};

      for (const probe of probes) {
        const catKey = probe.category.charAt(0);

        if (!categoryCounts[catKey]) {
          categoryCounts[catKey] = 0;
        }

        categoryCounts[catKey]++;
      }

      const expectedCategories = Object.keys(CATEGORIES);

      for (const cat of expectedCategories) {
        assert.ok(
          categoryCounts[cat] >= 3,
          `Category ${cat} has ${categoryCounts[cat] || 0} probes, expected at least 3`
        );
      }
    });

    it('returns only valid probes (skips invalid files)', async () => {
      const probes = await loadAllProbes(PROBES_DIR);

      for (const probe of probes) {
        const result = validateProbe(probe);
        assert.equal(result.valid, true, `Probe ${probe.id} should be valid`);
      }
    });

    it('validates coding-domain probes have code in setup field', async () => {
      const probes = await loadAllProbes(PROBES_DIR);
      const codingProbes = probes.filter((p) => p.domain === 'coding' && p.subdomain !== 'general-knowledge' && p.subdomain !== 'architecture');

      // Most coding probes with specific subdomains should have code-like content
      for (const probe of codingProbes) {
        // Check for common code indicators in setup
        const hasCode = probe.setup.includes('```') ||
          probe.setup.includes('def ') ||
          probe.setup.includes('function ') ||
          probe.setup.includes('class ') ||
          probe.setup.includes('const ') ||
          probe.setup.includes('import ') ||
          probe.setup.includes('SELECT ') ||
          probe.setup.includes('async ');

        assert.ok(
          hasCode,
          `Coding probe ${probe.id} (${probe.subdomain}) should have code-like content in setup`
        );
      }
    });
  });
});
