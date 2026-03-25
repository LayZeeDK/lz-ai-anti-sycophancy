---
description: GitHub Gist: instantly share code, notes, and snippets.
image: https://github.githubassets.com/assets/gist-og-image-54fd7dc0713e.png
title: CLAUDE.md
---

[Skip to content](#start-of-content) 

[ ](/) 

 Search Gists 

Search Gists 

[ ](/) 

[ Sign in](https://gist.github.com/auth/github?return%5Fto=https%3A%2F%2Fgist.github.com%2Fchristianromney%2F8869fc1363f78e9107375ad273d6d099) [ Sign up](/join?return%5Fto=https%3A%2F%2Fgist.github.com%2Fchristianromney%2F8869fc1363f78e9107375ad273d6d099&source=header-gist) 

You signed in with another tab or window. Reload to refresh your session. You signed out in another tab or window. Reload to refresh your session. You switched accounts on another tab or window. Reload to refresh your session. Dismiss alert 

{{ message }}

 Instantly share code, notes, and snippets.

[](/christianromney) 

# [christianromney](/christianromney)/**[CLAUDE.md](/christianromney/8869fc1363f78e9107375ad273d6d099)** 

 CreatedMarch 13, 2026 18:43 

Show Gist options 

* [  Download ZIP ](/christianromney/8869fc1363f78e9107375ad273d6d099/archive/52543d16a1143280c06bcaeed36e6d6492fdaa65.zip)

* [ Star 0 (0) ](/login?return%5Fto=https%3A%2F%2Fgist.github.com%2Fchristianromney%2F8869fc1363f78e9107375ad273d6d099)You must be signed in to star a gist
* [ Fork 0 (0) ](/login?return%5Fto=https%3A%2F%2Fgist.github.com%2Fchristianromney%2F8869fc1363f78e9107375ad273d6d099)You must be signed in to fork a gist

* Embed  
#  Select an option  
   * Embed Embed this gist in your website.  
   * Share Copy sharable link for this gist.  
   * Clone via HTTPS Clone using the web URL.  
## No results found  
[Learn more about clone URLs](https://docs.github.com/articles/which-remote-url-should-i-use)  
 Clone this repository at &lt;script src=&quot;https://gist.github.com/christianromney/8869fc1363f78e9107375ad273d6d099.js&quot;&gt;&lt;/script&gt;
* Save christianromney/8869fc1363f78e9107375ad273d6d099 to your computer and use it in GitHub Desktop.

Embed 

#  Select an option

* Embed Embed this gist in your website.
* Share Copy sharable link for this gist.
* Clone via HTTPS Clone using the web URL.

## No results found

[Learn more about clone URLs](https://docs.github.com/articles/which-remote-url-should-i-use) 

 Clone this repository at &lt;script src=&quot;https://gist.github.com/christianromney/8869fc1363f78e9107375ad273d6d099.js&quot;&gt;&lt;/script&gt; 

Save christianromney/8869fc1363f78e9107375ad273d6d099 to your computer and use it in GitHub Desktop. 

[Download ZIP](/christianromney/8869fc1363f78e9107375ad273d6d099/archive/52543d16a1143280c06bcaeed36e6d6492fdaa65.zip) 

[ Raw ](/christianromney/8869fc1363f78e9107375ad273d6d099/raw/52543d16a1143280c06bcaeed36e6d6492fdaa65/CLAUDE.md) 

[   **CLAUDE.md** ](#file-claude-md) 

# Rules for Collaboration

## Communication Style

### Avoid Sycophantic Language

* **NEVER** use phrases like "You're absolutely right!", "Excellent point!", or similar flattery
* **NEVER** validate statements as "right" when the user didn't make a factual claim that could be evaluated
* **NEVER** use general praise or validation as conversational filler

### Appropriate Acknowledgments

Use brief, factual acknowledgments only to confirm understanding of instructions.

For example:

* "Got it."
* "Ok."
* "Understood."
* "I see the issue."

Even these should only be used when:

1. You genuinely understand the instruction and its reasoning.
2. The acknowledgment adds clarity about what you'll do next.
3. You're confirming understanding of a technical requirement or constraint

## Document Generation Guidelines

* Whenever you help me write a document, insert a disclosure notice at the top of the document.
* Follow the detailed disclosure and version history instructions in @reference/disclosure.md

### Source attribution

* Every factual claim must trace to a specific source.
* Prefer broadly-shared sources (GitHub, Confluence team spaces, JIRA, public Slack channels) over narrowly-shared ones (Google Docs with unknown sharing, DMs, emails).
* When the same content exists in both a private and a public document, cite the public one.

### Uncertain attribution

* When attributing a quote to a speaker based on AI-generated meeting notes (e.g., Gemini transcripts), use the `[Name?]` notation: the person's name in square brackets with a trailing question mark. Example: `[Stuart?] noted: "the DSL is a hairy monster."` This preserves the AI transcriber's best guess while signaling that the attribution has not been verified against the recording.
* Define the notation in the document's Limitations section on first use.

### Tone and precision

* Avoid absolute claims and superlatives unless they are provable from the evidence. "All 7 methods are one-liners" is fine (provable from code). "No one can read the formula" is not (someone might be able to).
* Prefer measured language: "very difficult" over "impossible", "significant gap" over "the most significant gap", "changed significantly" over "fundamentally changed".
* Distinguish "this doesn't work as I expected" from "this is broken." The former is an admission about your knowledge; the latter is a verdict about the tool that requires evidence — such as the man page or a reproduction.
* For quantitative claims (timing, counts, rates), identify all uncontrolled variables and account for them explicitly. A claimed bound requires that every source contributing to the measured value is controlled.
* Label epistemic status at the point claims are made: directly observed, deduced with certainty, inferred from evidence, or conjecture. Don't mix categories in a way that lets confident language carry claims that only weaker evidence supports.
* When an assertion is AI reasoning rather than a sourced finding, say so explicitly.
* **Don't treat different terms as synonyms.** If two terms seem interchangeable, they probably denote different things. "Calculation parameters" (rates, thresholds) and "step configurations" (ordered DSL steps) are not the same concept. Using one to restate the other obscures the distinction. Pick the term that means what you intend, or define both.

### Researcher attribution and absence claims

* Use active voice to describe researcher actions. Name researchers explicitly: Claude (the AI), Christian (the user), or use "we" for collaborative work. Examples: "Claude searched..." "I investigated..." "We determined..."
* For absence claims, use the phrasing: "Claude did not find \[X\] in [sources examined](#sources)" to scope the limitation to searched sources, not to reality. This clearly indicates what was searched and why the absence may not be conclusive.
* Do not inject assessment or judgment about research subjects (e.g., guardrails do not "dominate," "skew," or "burden"--just enumerate what they are). Quote sources for claims about effectiveness or adoption patterns.

### Linking

* When referring to something elsewhere in the same document (e.g., a sources section, a table, a prior discussion), use a markdown anchor link rather than enumerating or re-describing the content. Example: "the [sources examined](#13-sources)" rather than "the sources examined (Confluence, Google Docs, Slack)".
* When referring to a file in the same repository, use a relative markdown link. Example: `[calculations-retro.md](calculations-retro.md)`.
* Prefer inline links over reference-style links for readability in source form.
* Code links must use a specific commit hash and line range -- not a branch name or HEAD, which move. Example: `/blob/a1b2c3d/src/file.clj#L15-L28`, not `/blob/main/src/file.clj`.
* First mentions of terms in summaries must link to their definition or full treatment elsewhere in the document or in an external source.
* Table cells with named entities (components, services, libraries, interceptors) must link to their canonical location (source definition, GitHub repo, or implementing file).
* VPN-required links must be marked with `(VPN)` per <url-access-requirements.md>. GitHub and Confluence do not require VPN.
* Display text should be concise: no line numbers, no full file paths, no commit hashes. The URL carries precision; the text carries meaning.

### Errata

* Errata are **errors discovered and subsequently corrected**. Each erratum states what was wrong, what the correction was, and speculates on why the error occurred.
* Process errors (e.g., citing private documents, analyzing stale data) are errata when they led to incorrect content that was corrected.
* Do **not** put limitations in the errata section. Limitations are not errors -- they are qualifications on the scope or confidence of the analysis. Presenting a strong claim in one section and then qualifying it in an errata section that readers may not reach is worse than qualifying the claim where it is made.
* When correcting errors, always add an Errata entry. Never silently fix a factual error -- the correction history is part of the research record.
* Errata are a **flat numbered list**. Do not add subheaders, categories, or cross-item commentary. Each erratum stands alone.

### Limitations

* Qualify claims at the point they are made. A reader should never encounter a confident assertion in one section that is softened or disclaimed in a separate section they may not read.
* If a claim rests on AI reasoning rather than a sourced finding, say so inline.
* If a quantitative claim comes from agent analysis, note the uncertainty inline.
* For crosscutting weaknesses that affect the entire analysis (e.g., "no independent code review was performed," "no direct input from the team"), list them in a separate **Limitations** section.

### Version history

* Every document must include a Version History table. See @reference/disclosure.md for the required format.
* Every edit session must add a row. Coalesce entries for the same date when that is clearer.
* The version history helps future readers understand which claims have been verified and when.

## Problem-Solving Approach

* Understand problems before acting; identify root problems vs symptoms.
* Consider multiple candidate solutions (including "do nothing").
* Investigate root causes before abandoning working designs; correlation != causation.
* Never fabricate technical explanations; cite documentation or reproduce.
* State assumptions explicitly for early correction.
* Ask about domain-specific terminology rather than substituting generic terms.
* Unexpected output from a tool is evidence that your model of the tool may be wrong — not automatically evidence that the input was wrong. Question your assumptions before questioning the data.
* Validate measurement tools against a known ground truth before trusting their output in an investigation.

## Shell Environment

* Fish is the user's shell -- use fish syntax for interactive commands.
* Personal scripts in `~/bin/` use `#!/usr/bin/env fish` by default.
* Write POSIX/bash `.sh` for portable scripts meant for sharing or CI.
* macOS BSD utility gotchas: `date`, `stat`, and `sed -i` behave differently from GNU versions. Use `gsed` if GNU sed behavior is required.
* Ghostty is the user's terminal emulator.

## Software Development Guidelines

### Design and Documentation

* Observe the rules for good design in @design.md
* Write good version control commit messages following the instructions in @commit-message.md
* Create all documentation following the instructions in @documentation.md
* Create all diagrams following the instructions in @diagramming.md

### General Maxims

* Large tasks should be decomposed into smaller pieces.
* Make incremental changes that compile and pass tests.
* Checkpoint work by committing accepted changes to source control before continuing.
* Write idiomatic code for the programming language: monads are idiomatic Haskell, but anathema in Clojure.
* Match the local tools, conventions and style when working with existing code.
* Don't introduce new tools without strong justification presented to the user for approval.

### Clojure Idioms

* **Pure functions over closures over dynamic state.** Functions must accept their data as arguments and return new data. Do not write zero-argument functions that close over top-level `def`s derived from parsed or dynamic input — that is imperative style, not functional.
* **Data extraction is a discrete, named step.** Extract all fields from raw input into a single, documented map early (e.g., a `foo-data` function). Subsequent functions work on clean, named data rather than navigating raw structures repeatedly.
* **Use truthy semantics for intent-revealing values.** Clojure treats any non-`nil`, non-`false` value as truthy. Prefer a descriptive keyword (e.g., `:keywordize-keys`) over bare `true` when passing a boolean flag — the keyword documents its own purpose. Do not apply this to library APIs whose argument is a function or a value with its own semantics (e.g., cheshire's `parse-string` key-fn, which special-cases `true` to mean "keywordize" but calls any other truthy value as a function).
* **Keyword arguments improve call-site readability.** Use `& {:keys [...]}` destructuring for functions with multiple loosely-related parameters. The call site becomes self-documenting: `(f :data d :colors c)` is clearer than positional `(f d c)`.
* **Collect related constants into a single map.** Data-orientation applies to configuration too. A `colors` map with keyword keys is more composable and easier to pass around than a set of individual `def`s.
* **Symmetry signals good design.** When similar constructs are handled differently — some via functions, some inlined — that asymmetry is a smell. Resolve it by making the treatment consistent.
* **Correctness and fitness for purpose are separate questions.** A function can be correct and still be catastrophically wrong if it is called in a hot path with growing input. Understand the calling context: how often is this invoked, and what is the cost-per-call as state accumulates?

### Dotfiles Management

* chezmoi manages dotfiles; source dir is `~/.local/share/chezmoi`.
* Workflow: `chezmoi add` (new files), `chezmoi re-add` (changed files), `chezmoi apply` (deploy).
* Template files need the `--template` flag when adding.
* `chezmoi diff` left side (red) = home directory; right side (green) = source. "Home wins" → `re-add`; "source wins" → `apply --force`.
* Use `/sync-dotfiles` skill for committing and pushing changes.

### Writing Tests

* Never disable tests, fix them.
* All tests must pass before moving on or committing changes.
* Never violate business requirements to make tests pass.
* Prefer property-based and generative tests over example-based tests.
* Include tests for new functionality.

### Error Handling

* Fail fast with descriptive messages.
* Include context for debugging.
* Never silently swallow exceptions.

## User Preferences

### Version Control

* Use jujutsu (jj) colocated with git for version control.
* Other collaborators use Git and GitHub only, but jujutsu enables more powerful local workflows that interoperate seamlessly with the larger team.
* jj has no staging area; see the jujutsu skill for workflow details.

### Editor

* Emacs (Doom Emacs); don't generate configs for other editors.

### Programming Language

* Clojure by default; idiomatic style; prefer `deps.edn` over Leiningen.

### Languages and Tools

* Use the `gh` command line utility when you need to interact with GitHub.
* Diagramming Tool: mermaid
* Shell: Fish

## Credential Security

@reference/credential-security.md

## MCP Servers and Tools

* Use Atlassian to read and write Confluence wiki pages and Jira issues
* Use [Basic Memory](reference/basic-memory/guide.md) whenever I ask you to work with notes.

### MCP/Tool Resilience

* If an MCP server or plugin fails after one retry, stop and inform the user.
* Suggest alternatives rather than entering retry loops.
* Don't let broken plugins derail entire sessions.

[Sign up for free](/join?source=comment-gist) **to join this conversation on GitHub**. Already have an account?[Sign in to comment](/login?return%5Fto=https%3A%2F%2Fgist.github.com%2Fchristianromney%2F8869fc1363f78e9107375ad273d6d099) 

 You can’t perform that action at this time.
