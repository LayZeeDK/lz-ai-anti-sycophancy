import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { MODELS } from '../lib/types.mjs';
import {
  buildCliArgs,
  createWorkDir,
  cleanupWorkDir,
  classifyError,
  runTurn,
  runProbe,
} from '../lib/executor.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const AGENTS_MD_PATH = resolve(__dirname, '..', '..', 'AGENTS.md');

describe('buildCliArgs', () => {
  it('builds correct CLI args for initial turn (no session_id)', () => {
    const args = buildCliArgs({
      prompt: 'Hello world',
      model: 'claude-opus-4-6',
      effort: 'medium',
    });

    assert.deepEqual(args, [
      '-p', 'Hello world',
      '--model', 'claude-opus-4-6',
      '--output-format', 'json',
      '--max-turns', '1',
      '--effort', 'medium',
    ]);
  });

  it('builds correct CLI args for resume turn (with session_id)', () => {
    const sessionId = '550e8400-e29b-41d4-a716-446655440000';
    const args = buildCliArgs({
      prompt: 'Follow-up question',
      model: 'claude-sonnet-4-6',
      effort: 'high',
      sessionId,
    });

    assert.deepEqual(args, [
      '-p', 'Follow-up question',
      '--model', 'claude-sonnet-4-6',
      '--output-format', 'json',
      '--max-turns', '1',
      '--effort', 'high',
      '--resume', sessionId,
    ]);
  });

  it('omits --resume when sessionId is undefined', () => {
    const args = buildCliArgs({
      prompt: 'test',
      model: 'claude-opus-4-6',
      effort: 'medium',
      sessionId: undefined,
    });

    assert.ok(!args.includes('--resume'));
  });

  it('omits --resume when sessionId is null', () => {
    const args = buildCliArgs({
      prompt: 'test',
      model: 'claude-opus-4-6',
      effort: 'medium',
      sessionId: null,
    });

    assert.ok(!args.includes('--resume'));
  });
});

describe('createWorkDir', () => {
  it('creates empty temp dir for baseline condition', async () => {
    const dir = await createWorkDir('baseline');

    try {
      const entries = await readdir(dir);
      assert.equal(entries.length, 0, 'Baseline dir should be empty');

      const s = await stat(dir);
      assert.ok(s.isDirectory());
    } finally {
      await cleanupWorkDir(dir);
    }
  });

  it('creates temp dir with AGENTS.md and CLAUDE.md for treatment condition', async () => {
    const dir = await createWorkDir('treatment', AGENTS_MD_PATH);

    try {
      const entries = await readdir(dir);
      assert.ok(entries.includes('AGENTS.md'), 'Should contain AGENTS.md');
      assert.ok(entries.includes('CLAUDE.md'), 'Should contain CLAUDE.md');

      const agentsContent = await readFile(join(dir, 'AGENTS.md'), 'utf8');
      const sourceContent = await readFile(AGENTS_MD_PATH, 'utf8');
      assert.equal(agentsContent, sourceContent, 'AGENTS.md should match source');

      const claudeContent = await readFile(join(dir, 'CLAUDE.md'), 'utf8');
      assert.equal(claudeContent, '@AGENTS.md\n', 'CLAUDE.md should be "@AGENTS.md\\n"');
    } finally {
      await cleanupWorkDir(dir);
    }
  });

  it('works with primary condition (non-baseline)', async () => {
    const dir = await createWorkDir('primary', AGENTS_MD_PATH);

    try {
      const entries = await readdir(dir);
      assert.ok(entries.includes('AGENTS.md'), 'Should contain AGENTS.md');
      assert.ok(entries.includes('CLAUDE.md'), 'Should contain CLAUDE.md');
    } finally {
      await cleanupWorkDir(dir);
    }
  });
});

describe('cleanupWorkDir', () => {
  it('removes temp directory recursively', async () => {
    const dir = await createWorkDir('baseline');

    await cleanupWorkDir(dir);

    await assert.rejects(
      () => stat(dir),
      { code: 'ENOENT' },
      'Dir should be removed'
    );
  });

  it('does not throw if dir already deleted', async () => {
    const dir = await createWorkDir('baseline');

    await cleanupWorkDir(dir);
    // Call again -- should not throw
    await cleanupWorkDir(dir);
  });

  it('does not throw for nonexistent path', async () => {
    await cleanupWorkDir('/tmp/nonexistent-dir-that-does-not-exist-12345');
  });
});

describe('classifyError', () => {
  it('classifies ETIMEDOUT as transient', () => {
    const err = new Error('Connection timed out');
    err.code = 'ETIMEDOUT';

    assert.equal(classifyError(err), 'transient');
  });

  it('classifies ECONNRESET as transient', () => {
    const err = new Error('Connection reset');
    err.code = 'ECONNRESET';

    assert.equal(classifyError(err), 'transient');
  });

  it('classifies non-zero exit code as transient', () => {
    const err = new Error('Process exited with code 1');
    err.code = 1;

    assert.equal(classifyError(err), 'transient');
  });

  it('classifies rate_limit in stderr as budget', () => {
    const err = new Error('Rate limited');
    err.stderr = 'Error: rate_limit exceeded for this account';

    assert.equal(classifyError(err), 'budget');
  });

  it('classifies billing error in stderr as budget', () => {
    const err = new Error('Billing error');
    err.stderr = 'billing limit reached';

    assert.equal(classifyError(err), 'budget');
  });

  it('classifies JSON parse errors as permanent', () => {
    const err = new SyntaxError('Unexpected token < in JSON at position 0');

    assert.equal(classifyError(err), 'permanent');
  });

  it('classifies unknown errors as permanent', () => {
    const err = new Error('Something completely unknown');

    assert.equal(classifyError(err), 'permanent');
  });
});

describe('runTurn', () => {
  it('spawns process and returns parsed JSON', async () => {
    const mockOutput = {
      session_id: 'test-session-123',
      result: 'Hello there!',
      model: 'claude-opus-4-6',
      usage: { input_tokens: 100, output_tokens: 50 },
      cost_usd: 0.01,
    };

    const mockExecFn = async (_cmd, _args, _opts) => {
      return { stdout: JSON.stringify(mockOutput), stderr: '' };
    };

    const result = await runTurn({
      prompt: 'Hello',
      model: 'claude-opus-4-6',
      effort: 'medium',
      cwd: '/tmp',
      execFn: mockExecFn,
    });

    assert.equal(result.session_id, 'test-session-123');
    assert.equal(result.result, 'Hello there!');
    assert.equal(result.model, 'claude-opus-4-6');
    assert.equal(result.usage.input_tokens, 100);
  });

  it('passes correct args to execFn', async () => {
    let capturedArgs;
    let capturedOpts;

    const mockExecFn = async (cmd, args, opts) => {
      capturedArgs = args;
      capturedOpts = opts;

      return {
        stdout: JSON.stringify({ session_id: 'x', result: 'y', model: 'z', usage: {} }),
        stderr: '',
      };
    };

    await runTurn({
      prompt: 'Test prompt',
      model: 'claude-sonnet-4-6',
      effort: 'high',
      sessionId: 'resume-id-123',
      cwd: '/some/path',
      execFn: mockExecFn,
    });

    assert.deepEqual(capturedArgs, [
      '-p', 'Test prompt',
      '--model', 'claude-sonnet-4-6',
      '--output-format', 'json',
      '--max-turns', '1',
      '--effort', 'high',
      '--resume', 'resume-id-123',
    ]);
    assert.equal(capturedOpts.cwd, '/some/path');
  });

  it('returns error object with classification on failure', async () => {
    const mockExecFn = async () => {
      const err = new Error('timed out');
      err.code = 'ETIMEDOUT';
      throw err;
    };

    const result = await runTurn({
      prompt: 'Hello',
      model: 'claude-opus-4-6',
      effort: 'medium',
      cwd: '/tmp',
      execFn: mockExecFn,
    });

    assert.ok(result.error, 'Should contain error');
    assert.equal(result.classification, 'transient');
  });

  it('classifies JSON parse failure as permanent', async () => {
    const mockExecFn = async () => {
      return { stdout: 'not valid json at all', stderr: '' };
    };

    const result = await runTurn({
      prompt: 'Hello',
      model: 'claude-opus-4-6',
      effort: 'medium',
      cwd: '/tmp',
      execFn: mockExecFn,
    });

    assert.ok(result.error, 'Should contain error');
    assert.equal(result.classification, 'permanent');
  });
});

describe('runProbe', () => {
  it('chains setup + 3 escalation turns via --resume', async () => {
    const callLog = [];
    let callCount = 0;

    const mockExecFn = async (_cmd, args, _opts) => {
      callCount++;
      callLog.push({ args: [...args] });

      return {
        stdout: JSON.stringify({
          session_id: `session-${callCount}`,
          result: `Response ${callCount}`,
          model: 'claude-opus-4-6',
          usage: { input_tokens: 100 * callCount, output_tokens: 50 * callCount },
          cost_usd: 0.01 * callCount,
        }),
        stderr: '',
      };
    };

    const probe = {
      id: 'A-01',
      setup: 'Initial setup prompt',
      turns: [
        { role: 'user', content: 'Turn 1 casual', pressure: 'casual' },
        { role: 'user', content: 'Turn 2 emotional', pressure: 'emotional' },
        { role: 'user', content: 'Turn 3 authoritative', pressure: 'authoritative' },
      ],
    };

    const result = await runProbe(probe, {
      model: 'claude-opus-4-6',
      condition: 'baseline',
      effort: 'medium',
      repetition: 1,
      execFn: mockExecFn,
    });

    // Should have 4 calls: 1 setup + 3 turns
    assert.equal(callCount, 4, 'Should make 4 calls total');
    assert.equal(result.probe_id, 'A-01');
    assert.equal(result.model, 'claude-opus-4-6');
    assert.equal(result.condition, 'baseline');
    assert.equal(result.repetition, 1);
    assert.equal(result.turns.length, 4, 'Should have 4 turn results');

    // First call should NOT have --resume
    assert.ok(!callLog[0].args.includes('--resume'), 'Setup should not have --resume');

    // Subsequent calls should have --resume with previous session_id
    assert.ok(callLog[1].args.includes('--resume'), 'Turn 1 should have --resume');
    assert.ok(callLog[1].args.includes('session-1'), 'Turn 1 should resume session-1');
    assert.ok(callLog[2].args.includes('session-2'), 'Turn 2 should resume session-2');
    assert.ok(callLog[3].args.includes('session-3'), 'Turn 3 should resume session-3');
  });

  it('creates and cleans up work directory', async () => {
    let capturedCwd;

    const mockExecFn = async (_cmd, _args, opts) => {
      capturedCwd = opts.cwd;

      return {
        stdout: JSON.stringify({
          session_id: 'sess-1',
          result: 'ok',
          model: 'claude-opus-4-6',
          usage: { input_tokens: 10, output_tokens: 5 },
        }),
        stderr: '',
      };
    };

    const probe = {
      id: 'T-01',
      setup: 'Setup',
      turns: [
        { role: 'user', content: 'T1', pressure: 'casual' },
        { role: 'user', content: 'T2', pressure: 'emotional' },
        { role: 'user', content: 'T3', pressure: 'authoritative' },
      ],
    };

    await runProbe(probe, {
      model: 'claude-opus-4-6',
      condition: 'baseline',
      effort: 'medium',
      repetition: 1,
      execFn: mockExecFn,
    });

    // Work dir should have been cleaned up
    assert.ok(capturedCwd, 'Should have set cwd');
    await assert.rejects(
      () => stat(capturedCwd),
      { code: 'ENOENT' },
      'Work dir should be cleaned up after execution'
    );
  });

  it('cleans up work dir even when execution throws', async () => {
    let capturedCwd;
    let callCount = 0;

    const mockExecFn = async (_cmd, _args, opts) => {
      capturedCwd = opts.cwd;
      callCount++;

      if (callCount === 2) {
        const err = new Error('Process crashed');
        err.code = 'ETIMEDOUT';
        throw err;
      }

      return {
        stdout: JSON.stringify({
          session_id: 'sess-1',
          result: 'ok',
          model: 'claude-opus-4-6',
          usage: { input_tokens: 10, output_tokens: 5 },
        }),
        stderr: '',
      };
    };

    const probe = {
      id: 'T-02',
      setup: 'Setup',
      turns: [
        { role: 'user', content: 'T1', pressure: 'casual' },
        { role: 'user', content: 'T2', pressure: 'emotional' },
        { role: 'user', content: 'T3', pressure: 'authoritative' },
      ],
    };

    // runProbe should return partial results with error, not throw
    const result = await runProbe(probe, {
      model: 'claude-opus-4-6',
      condition: 'baseline',
      effort: 'medium',
      repetition: 1,
      execFn: mockExecFn,
    });

    assert.ok(capturedCwd, 'Should have set cwd');
    await assert.rejects(
      () => stat(capturedCwd),
      { code: 'ENOENT' },
      'Work dir should be cleaned up even after error'
    );
  });

  it('returns result envelope with correct fields', async () => {
    const mockExecFn = async () => {
      return {
        stdout: JSON.stringify({
          session_id: 'sess-1',
          result: 'Response text',
          model: 'claude-opus-4-6',
          usage: { input_tokens: 100, output_tokens: 50 },
          cost_usd: 0.01,
        }),
        stderr: '',
      };
    };

    const probe = {
      id: 'A-01',
      setup: 'Setup',
      turns: [
        { role: 'user', content: 'T1', pressure: 'casual' },
        { role: 'user', content: 'T2', pressure: 'emotional' },
        { role: 'user', content: 'T3', pressure: 'authoritative' },
      ],
    };

    const result = await runProbe(probe, {
      model: 'claude-opus-4-6',
      condition: 'primary',
      variant: AGENTS_MD_PATH,
      effort: 'medium',
      repetition: 3,
      execFn: mockExecFn,
    });

    assert.equal(result.probe_id, 'A-01');
    assert.equal(result.model, 'claude-opus-4-6');
    assert.equal(result.condition, 'primary');
    assert.equal(result.variant, AGENTS_MD_PATH);
    assert.equal(result.effort, 'medium');
    assert.equal(result.repetition, 3);
    assert.ok(result.timestamp, 'Should have timestamp');
    assert.ok(Array.isArray(result.turns), 'Should have turns array');
    assert.ok(typeof result.total_tokens === 'object', 'Should have total_tokens');
    assert.ok(typeof result.duration_ms === 'number', 'Should have duration_ms');
  });
});
