/**
 * Probe loader -- reads and validates YAML probe files for the benchmark suite.
 *
 * Exports:
 *   loadProbe(filePath) -- parse a single YAML probe file, validate, return structured object
 *   validateProbe(probe) -- pure validation returning { valid, errors }
 *   loadAllProbes(probesDir) -- load all probes from category subdirectories
 */

import { readFile, readdir } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { parse } from 'yaml';
import {
  PROBE_REQUIRED_FIELDS,
  CATEGORIES,
  PRESSURE_LEVELS,
  DIFFICULTY_LEVELS,
} from './types.mjs';

const VALID_CATEGORY_PREFIXES = Object.values(CATEGORIES).map(
  (c) => `${c.id}-${c.name}`
);

const SCORING_REQUIRED_FIELDS = [
  'pass_criteria',
  'regressive_indicators',
  'progressive_indicators',
  'key_position',
];

/**
 * Validate a probe object without throwing.
 *
 * @param {object} probe - Parsed probe object
 * @returns {{ valid: boolean, errors?: string[] }}
 */
export function validateProbe(probe) {
  const errors = [];

  if (!probe || typeof probe !== 'object') {
    return { valid: false, errors: ['probe is not an object'] };
  }

  // Check required top-level fields
  for (const field of PROBE_REQUIRED_FIELDS) {
    if (probe[field] === undefined || probe[field] === null) {
      errors.push(`missing required field: ${field}`);
    }
  }

  // Validate category
  if (probe.category !== undefined && probe.category !== null) {
    const isValidCategory = VALID_CATEGORY_PREFIXES.includes(probe.category);

    if (!isValidCategory) {
      errors.push(
        `invalid category "${probe.category}"; must be one of: ${VALID_CATEGORY_PREFIXES.join(', ')}`
      );
    }
  }

  // Validate difficulty
  if (probe.difficulty !== undefined && probe.difficulty !== null) {
    if (!DIFFICULTY_LEVELS.includes(probe.difficulty)) {
      errors.push(
        `invalid difficulty "${probe.difficulty}"; must be one of: ${DIFFICULTY_LEVELS.join(', ')}`
      );
    }
  }

  // Validate turns
  if (Array.isArray(probe.turns)) {
    if (probe.turns.length !== 3) {
      errors.push(
        `turns array must have exactly 3 entries, got ${probe.turns.length}`
      );
    }

    const pressureLevels = probe.turns.map((t) => t.pressure);
    const expectedPressure = PRESSURE_LEVELS.slice(0, probe.turns.length);

    if (probe.turns.length === 3) {
      for (let i = 0; i < 3; i++) {
        const turn = probe.turns[i];

        if (!turn.role) {
          errors.push(`turn ${i}: missing role`);
        }

        if (!turn.content) {
          errors.push(`turn ${i}: missing content`);
        }

        if (!turn.pressure) {
          errors.push(`turn ${i}: missing pressure`);
        } else if (turn.pressure !== PRESSURE_LEVELS[i]) {
          errors.push(
            `turn ${i}: pressure must be "${PRESSURE_LEVELS[i]}", got "${turn.pressure}"`
          );
        }
      }
    }
  }

  // Validate scoring sub-fields
  if (probe.scoring && typeof probe.scoring === 'object') {
    for (const field of SCORING_REQUIRED_FIELDS) {
      if (
        probe.scoring[field] === undefined ||
        probe.scoring[field] === null
      ) {
        errors.push(`scoring missing required field: ${field}`);
      }
    }
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return { valid: true };
}

/**
 * Load and validate a single YAML probe file.
 *
 * @param {string} filePath - Absolute or relative path to a .yaml probe file
 * @returns {Promise<object>} Parsed and validated probe object
 * @throws {Error} If file cannot be read, parsed, or validation fails
 */
export async function loadProbe(filePath) {
  const filename = basename(filePath);

  let content;

  try {
    content = await readFile(filePath, 'utf8');
  } catch (err) {
    throw new Error(`Failed to read probe file "${filename}": ${err.message}`);
  }

  let probe;

  try {
    probe = parse(content);
  } catch (err) {
    throw new Error(
      `Failed to parse YAML in "${filename}": ${err.message}`
    );
  }

  if (!probe || typeof probe !== 'object') {
    throw new Error(`Probe file "${filename}" did not parse to an object`);
  }

  const result = validateProbe(probe);

  if (!result.valid) {
    throw new Error(
      `Invalid probe "${filename}": ${result.errors.join('; ')}`
    );
  }

  return probe;
}

/**
 * Load all probes from category subdirectories under the given probes directory.
 *
 * Logs warnings for invalid probe files but does not throw. After loading,
 * verifies all 6 categories have at least one probe.
 *
 * @param {string} probesDir - Path to the probes/ directory
 * @returns {Promise<object[]>} Array of validated probe objects
 */
export async function loadAllProbes(probesDir) {
  const probes = [];
  const warnings = [];

  let entries;

  try {
    entries = await readdir(probesDir, { withFileTypes: true });
  } catch (err) {
    throw new Error(`Failed to read probes directory "${probesDir}": ${err.message}`);
  }

  const subdirs = entries.filter((e) => e.isDirectory());

  for (const subdir of subdirs) {
    const subdirPath = join(probesDir, subdir.name);
    let files;

    try {
      files = await readdir(subdirPath);
    } catch (err) {
      warnings.push(`Failed to read subdirectory "${subdir.name}": ${err.message}`);
      continue;
    }

    const yamlFiles = files.filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));

    for (const file of yamlFiles) {
      const filePath = join(subdirPath, file);

      try {
        const probe = await loadProbe(filePath);
        probes.push(probe);
      } catch (err) {
        warnings.push(err.message);
      }
    }
  }

  // Log warnings (non-throwing)
  for (const warning of warnings) {
    console.warn(`[probe-loader] WARNING: ${warning}`);
  }

  // Verify category coverage
  const categoryCounts = {};

  for (const probe of probes) {
    const catKey = probe.category.charAt(0);

    if (!categoryCounts[catKey]) {
      categoryCounts[catKey] = 0;
    }

    categoryCounts[catKey]++;
  }

  const expectedCategories = Object.keys(CATEGORIES);
  const missingCategories = expectedCategories.filter(
    (cat) => !categoryCounts[cat] || categoryCounts[cat] < 1
  );

  if (missingCategories.length > 0) {
    console.warn(
      `[probe-loader] WARNING: Missing probes for categories: ${missingCategories.join(', ')}`
    );
  }

  return probes;
}
