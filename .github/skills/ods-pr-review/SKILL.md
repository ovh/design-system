---
name: ods-pr-review
description: Review a pull request on the OVHcloud Design System (ODS) monorepo. Use for any code review of changes under packages/ (ods-react components, themes, tokens, SCSS styles, docs, recipes). Checks correctness, public API breaking changes and semver, deprecations, code comments, repo conventions and test coverage.
---

# ODS pull request review

You are reviewing a PR on the ODS monorepo. Work through the angles below in order, but
only the ones the diff actually triggers (see "Which angles apply"). Do not run a generic
review on top: these angles replace it.

## Rules for every comment

- **Proven or silent.** Every finding cites `path:line` and either a concrete failure
  scenario (input → wrong output) or a named precedent in the repo. If you cannot prove
  it, do not post it.
- **Severity prefix** on every comment:
  - `[P0]` blocks the merge (bug, undeclared breaking change, removed public API in a minor)
  - `[P1]` must be fixed before release (missing deprecation, missing test, wrong comment)
  - `[P2]` docs / changelog / migration-guide follow-up
- At most **10 comments** per review. Group repeats of the same issue into one comment
  listing all locations.
- No style nitpicks that eslint / stylelint already enforce.
- Propose the fix (code suggestion or exact wording) whenever it is short.

## Which angles apply

| Diff touches | Angles |
| --- | --- |
| 1–3 files, targeted fix | 1, 6 |
| A component in `packages/ods-react/src/components/**` | 1, 2, 3, 4, 5, 6 |
| Shared styles (`packages/ods-react/src/style/**`), themes, tokens, build config | 1, 2, 3, 5, 6 |
| The public surface of a published package (`@ovhcloud/ods-react`, `ods-recipes`, `ods-themes`): exports of its `src/index.ts`, exported types or constants, `package.json` exports | 1, 2, 3, 5, 6 |
| New package or tool | 1, 4, 5, 6 |
| Anything matching no other row (docs, examples, scripts…) | 1, 6 |

When several rows match, apply the union of their angles.

## 1. Correctness

- Logic bugs, unhandled states (empty, disabled, controlled vs uncontrolled, SSR).
- Accessibility regressions: roles, `aria-*`, keyboard handling, focus management.
- React: hooks rules, stale closures, missing `forwardRef` / ref forwarding, props spread
  order (consumer props must be able to override defaults unless intentionally not).

## 2. Breaking changes and semver (mandatory for anything published)

Compare the public surface before / after:

- `packages/ods-react/etc/public-api.api.txt` — every removed or changed line is a
  candidate break. It only covers the `@ovhcloud/ods-react` declarations
  (`scripts/api-snapshot.sh` reads `packages/ods-react/dist/src`): a change to those
  exports **without** an update of this file is a P0, fixed by regenerating it with
  `pnpm test:api:update`. For the other packages (themes, recipes), compare their
  `src/index.ts` exports directly.
- Component exports in `src/components/<name>/src/index.ts` (components, constants such as
  `FOO_SIZE` / `FOO_SIZES`, types).
- Prop types and **runtime defaults** (a changed default is a break even if types match).
- `data-ods` / `data-part` attributes and CSS class names consumers may target.
- Emitted events / callback signatures.
- CSS custom properties (`--ods-*`) and design tokens.
- `package.json` exports, `peerDependencies`.

For each difference: who breaks, with a concrete consumer code snippet. End the angle with
**one semver verdict** (patch / minor / major). When in doubt, it is major. A breaking
change that is not described in the PR body is a P0.

## 3. Deprecations

- **Inventory** every `@deprecated` (TSDoc), `[Deprecated]` (SCSS) or "will be removed in
  next major" marker touched or introduced by the diff.
- **Which release is targeted?** The PR is part of a major when the newest
  `packages/docs/src/content/guides/migration-<N>-to-<N+1>.mdx` targets a version not yet
  published (`version` in `packages/ods-react/package.json` is still below it), or when its
  commits carry a `BREAKING CHANGE:` footer. Otherwise it is a minor or a patch.
- **In a major**: breaking changes are applied directly, with no deprecation step and no
  alias. Everything already marked deprecated must be removed: a survivor is a P1. A new
  `@deprecated` or compatibility alias introduced by the PR is a P1.
- **Easy migration is the price of a break.** Every breaking change must come with an
  entry in the migration guide of that major (`migration-<N>-to-<N+1>.mdx`) showing a
  **before / after** snippet an integrator can apply mechanically: renamed prop, value
  mapping (old value → new value), replaced token. A break with no entry, or with an entry
  that does not let the integrator migrate without reading the source, is a P0.
- **In a minor or a patch**: any removal of public API is a P0 — it must be deprecated
  instead. A new deprecation must name its removal version and keep resolving to a value
  consistent with the new system (never an alias frozen on the old value).
- **Should be deprecated or deleted**: code made dead by the PR (tokens, SCSS variables,
  enums, exports declared but no longer read), dependencies no longer used.
- **Traceability**: every deprecation or removal appears in the CHANGELOG. Missing = P2.

## 4. Repo conventions

Each deviation must point to an existing precedent (`path:line`). Typical checks:

- Component layout: `src/components/<name>/src/{components,constants}/`, constants exposed
  as `FOO` object + `FOOS` array + `Foo` type, re-exported from the component `index.ts`.
- Styles: component SCSS lives in a CSS module wrapped in the right cascade layer
  (`@layer ods-quarks | ods-atoms | ods-molecules | ods-organisms`); reusable mixins live in
  `packages/ods-react/src/style/_<name>.scss`. Use design tokens (`--ods-*`) rather than
  hard-coded values.
- Root element carries `data-ods="<component>"`.
- Conventional commits / PR title with a **lowercase** scope: `feat(badge)`, not
  `feat(Badge)`.
- PRs are rebase-merged, so every commit lands in the CHANGELOG: a breaking commit carries a
  `BREAKING CHANGE:` footer, never a `!` in its header (the changelog parser drops it).

## 5. Tests and documentation coverage

The reviewer cannot run the suites, so check statically:

- New prop / variant ⇒ new or updated rendering story in `tests/rendering/*.stories.tsx`
  **and** an assertion in `tests/rendering/*.e2e.ts`.
- New behaviour ⇒ a spec test (`tests/**/*.spec.ts`); a typing change ⇒ a type-level test
  with `@ts-expect-error`.
- Public change ⇒ docs updated (`packages/docs/src/content/components/<name>/` and the
  stories under `packages/docs/stories/`).

## 6. Code comments (always)

Audit the comments added by the diff in both directions:

- **Legitimate?** A comment is only justified for a non-obvious constraint the code cannot
  show (why an exception, a magic number, a workaround, a trap). Flag: paraphrase of the
  code, remarks addressed to the reviewer ("fix for review", "as requested"), comments
  that will become false at the first refactor.
- **True?** Check the claim against the actual code. A wrong comment is worse than none.
- **Missing?** A non-trivial guard, exception, hard-coded value or ordering with no
  explanation is a finding.
- Style matches the neighbouring files (language, tone, density).
- **Exception: TSDoc on public props and exported types** is API documentation, not a code
  comment: typedoc turns it into the prop tables of the docs
  (`packages/docs/src/doc/tech/typedoc.ts`). Never flag it as a paraphrase; check instead
  that it is true, and present on every new public prop (`@type=` and `@default-value=`
  tags included when relevant).

## Summary comment

Finish with a single summary comment:

1. Verdict on the first line (approve / changes requested) and the **semver verdict**.
2. The P0s, then P1s, then P2s, one line each with a link to the inline comment.
3. The remaining decision for the humans, if any.
