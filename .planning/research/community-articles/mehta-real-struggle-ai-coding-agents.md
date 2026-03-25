# The Real Struggle with AI Coding Agents -- And How to Overcome It

- **Author:** Kamal Mehta
- **Date:** August 10, 2025
- **Source:** smiansh.com (personal blog)
- **URL:** https://www.smiansh.com/blogs/the-real-struggle-with-ai-coding-agents-and-how-to-overcome-it/
- **Tags:** AI Coding, Compliance, Sycophancy, Best Practices, Developer Experience

## Summary

A developer experience account of working with AI coding agents, focusing on the compliance problem: unlike experienced human developers who push back on bad ideas, AI agents blindly comply, creating massive codebases nobody asked for. Documents five key struggles and practical solutions.

## The Compliance/Sycophancy Problem

"Unlike an experienced human developer who might ask clarifying questions or push back, AI will usually just do what you say, even if it doesn't make sense in the bigger picture. That's how you end up with giant codebases you didn't ask for."

"AI models often overcompensate when they think a problem might be complex -- instead of giving a minimal, simple fix, they'll build an elaborate solution with extra abstractions, unnecessary classes, and dependencies you didn't need."

## Five Key Struggles

1. **Overwhelming codebases from the start:** AI generates massive, complex projects immediately
2. **Small changes breaking everything:** Minor requests trigger cascading failures ("butterfly effect")
3. **Debugging nightmares:** AI-written code lacks human logic patterns
4. **Temporary fixes that don't persist:** Solutions work in-session but fail in fresh environments
5. **Hidden credit/token consumption:** Repeatedly addressing same bugs drains resources

## Root Causes

- Lack of context persistence
- Over-optimization for speed over maintainability
- Unclear requirements leading to incorrect assumptions
- Overengineering tendency

## Actionable Solutions

- Start small (isolated tasks before full projects)
- Document everything ("what it changed -- the files, the lines, the logic")
- Regular refactoring of AI-generated code
- Break down requests into smaller, modular components
- Use version control aggressively
- Create persistent knowledge bases outside AI memory
- Treat AI as a junior developer requiring code review

## Relevance to Our Project

MEDIUM -- Documents the compliance dimension of sycophancy in coding agents (doing whatever you say without pushback). Less about flattery, more about the failure to challenge. The "treat AI as junior developer" framing and the overengineering observation inform what anti-sycophancy instructions should address beyond just language patterns.
