import { describe, it } from 'node:test';
import { MODELS } from '../lib/types.mjs';

describe('executor', () => {
  it('builds correct CLI args for initial turn (no session_id)', { todo: true }, () => {});

  it('builds correct CLI args for resume turn (with session_id)', { todo: true }, () => {});

  it('creates empty temp dir for baseline condition', { todo: true }, () => {});

  it('creates temp dir with AGENTS.md and CLAUDE.md for treatment condition', { todo: true }, () => {});

  it('cleans up temp dir after execution completes', { todo: true }, () => {});

  it('cleans up temp dir even when execution throws', { todo: true }, () => {});

  it('extracts session_id from JSON output envelope', { todo: true }, () => {});

  it('classifies rate limit error as pause-and-notify', { todo: true }, () => {});

  it('classifies network timeout as transient-retry', { todo: true }, () => {});

  it('classifies malformed output as permanent-skip', { todo: true }, () => {});
});
