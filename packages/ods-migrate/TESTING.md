# Testing ods-migrate

The procedure the ODS team runs before merging a change to ods-migrate (code, mappings, configurator) and before each release of it. Each step has a command, the time it takes on a laptop, and a gate. A failed gate blocks the change, or the change records a new baseline on purpose and explains why (§ 8).

All commands run from `packages/ods-migrate/` unless noted. Nothing in the procedure installs a package or writes into a corpus: corpora are always copied.

## 0. Checklist

| # | Step | Command | Time | Gate |
| --- | --- | --- | --- | --- |
| 1 | Unit tests | `node --test tests/*.test.mjs` | ~1 min | 0 fail. Only the `ODS_MIGRATE_BUILD` test is skipped |
| 2 | Mapping regeneration | `ODS_MIGRATE_BUILD=1 node --test tests/wp5-token-mapping.test.mjs`, `node configurator/build.mjs --check` | ~1 min | 0 fail, `index.html is up to date` |
| 3 | Acceptance, Aluminium | `scripts/acceptance/acceptance.sh --repo <ovh/manager clone> --ref d8e3d1a1 --label manager` (no option: `@ovh-ux/muk` is found in the tree) | ~40 s | `gates PASS` (exit 0) |
| 4 | Acceptance, every choice on v19 | the same with `--all-v19 --label manager-all-v19` | ~40 s | `gates PASS` (exit 0) |
| 5 | Coverage, gated corpora | `node scripts/coverage.mjs <corpus> … --label <label> --json <label>.json` per corpus (§ 5.3) | ~2 min `manager` | ods-migrate exit 0 on each |
| 6 | Coverage against the baseline | `node scripts/coverage-check.mjs <label>.json…` | instant | exit 0: no drop of auto% / assisted%, no rise of missed / regressions / DIFFER |
| 7 | Manual review | § 7 | 15–30 min | a reviewer signs off |
| 8 | Record the baseline | `node scripts/coverage-check.mjs --record …`, edit `acceptance` | – | only when a number moved on purpose |

### Prerequisites

- **The design-system repo** with the two refs: the tag `v19.7.3` and `origin/master` (v20: every change merged). `scripts/coverage.mjs`, `scripts/build-token-mapping.mjs` and `configurator/build.mjs` read them with `git show` / `git archive` only, never a checkout. A worktree of the repo works (its refs are shared).
- **Installed dependencies**: `pnpm install` at the root of the checkout (or of the worktree) the tests run in. ods-migrate is a package of the workspace: its devDependencies bring `typescript`, `@types/react`, `sass`, `eslint` and `stylelint`, and `packages/ods-react/node_modules` the v20 dependencies of the coverage harness (a worktree without an install falls back to those of the main checkout). Nothing else is installed by the procedure.
- Node 22 (measured with v22.14.0).
- The corpora of § 5.3, fetched read-only into a scratch folder.

## 1. Unit tests

```sh
node --test tests/*.test.mjs        # = pnpm test
```

The CI runs them from the root with the other packages (`pnpm test:spec:ci`); alone: `pnpm --filter @ovhcloud/ods-migrate run test:spec:ci`.

Last run (2026-11-10): **894 tests, 893 pass, 0 fail, 1 skipped**. The skipped one is `wp5-token-mapping › is what the build writes`, which reruns the mapping build: step 2 runs it with `ODS_MIGRATE_BUILD=1`. `coverage-smoke` skips itself when the refs or `typescript` are missing: its 3 tests then show as skipped too, which means the environment is wrong; fix it before going on.

The `coverage-a-*`, `coverage-b-*` and `coverage-c-truth` tests need a typescript, found by `tests/coverage-helpers.mjs`: `$COVERAGE_TYPESCRIPT=<dir>`, the devDependency of the package the harness defaults to, or the one `@typescript-eslint/parser` resolves. Without one their suites show as skipped: same rule, fix the environment. Run the coverage tests alone with `node --test tests/coverage-*.test.mjs` (110 tests, ~10 s once the surfaces are extracted).

| File | Tests | What it covers |
| --- | --- | --- |
| `migrate.test.mjs` | 10 | The top-level fixtures (`tests/fixtures/*.input.*`): codemod output, idempotence, ESLint `--fix` parity on the marked ones, the guide. |
| `shared.test.mjs` | 8 | `src/shared.mjs`, shared by every engine: mapping resolution (`extends`, `pending` entries, memoization), member forms, `isV19Look`, untyped files, attribute writing, markers (write, detect, strip). |
| `wp1-mapping.test.mjs` | 11 | `mappings/v19-to-v20.json`: shape (only the keys the engine reads), consistency, and every entry checked against the public exports of ods-react at v19.7.3 and on the v20 stack (`fixtures/wp1/api-v19.json`, `api-v20.json`). |
| `wp1-components.test.mjs` | 14 | `fixtures/wp1/`: Button / Message / Table variant, Divider / Spinner, wrappers, the v18 `BUTTON_VARIANT.flat` left alone; `v19-look*` fixtures run with every configurator choice on `v19`. ESLint parity, the guide. |
| `wp2-engine.test.mjs` | 38 | The engine keys of the mapping with small inline mappings: apply and imports, values without a v20 equivalent, untyped code, typed literals, `propsType`, wrapper props, `moveTo`, `always` / `note` / `coerce` / `todoUnless` / stacking. |
| `wp2-fixtures.test.mjs` | 6 | `fixtures/wp2/`: reproductions of the bugs of the review swarm (CRLF, `as const`, mock imports, import comments…), with the real mapping. |
| `wp3-rules.test.mjs` | 11 | The ESLint plugin: rule registration, `ods/v20-migration` reports without a fix, `ods/v20-default-changed`. |
| `wp3-parity.test.mjs` | 6 | `fixtures/wp3/`: on each input, ESLint `--fix` gives the codemod output without its markers, the codemod gives nothing more on a second run, and on the output the rule has nothing left to fix. |
| `tokens.test.mjs` | 52 | `fixtures/tokens/`: the token engine (CSS, SCSS, Tailwind config and classes, style objects, helpers, a palette of the app's own read from the v19 steps), roles from the context, idempotence. |
| `token-rules.test.mjs` | 19 | `ods/v20-tokens` (ESLint) and `ods/no-removed-token` (stylelint) against the same token fixtures: `--fix` equals the codemod. |
| `wp4-tokens.test.mjs` | 37 | Token engine keys: `alsoDeclare`, `rerank` (z-index never rewritten when computed), `todo` / `keep`, `byContext` (white kept, page background), mixins, `scssNumberToVar`, themes SCSS variables, `cssModifiers`. |
| `wp4-fixtures.test.mjs` | 8 | `fixtures/wp4/` (`@apply`, control width, runtime names, fonts, JS declarations, nested props, quoted names, selectors, style keys, Tailwind variants, theme collisions): output, idempotence, stylelint parity; the v19.7.3 default theme migrated as an app override. |
| `wp4-stylelint.test.mjs` | 7 | The stylelint plugin, `ods/no-control-width`. |
| `wp5-token-mapping.test.mjs` | 24 | `mappings/tokens-v19-to-v20.json`: the data (first suite), then against the ODS repo at the commit it was built from (skipped when that commit is not reachable), and with `ODS_MIGRATE_BUILD=1` a full rebuild compared with the committed file. |
| `wp6-cli.test.mjs` | 40 | The CLI: usage and exit codes, the files it scans (symlinks, `.gitignore`, build output), the text and JSON report, `--check`, `.snap` files, `--config` and `--from`, `package.json` and lockfiles, a 1.3 MB file under 10 s. Uses `fixtures/wp6/`. |
| `wp6-manifest.test.mjs` | 19 | `package.json` migration: dependencies, versions, the llms URLs, the `@types/react` overrides (and a `pnpm-workspace.yaml` that keeps its own), the v19 theme kept for the ODS 18 components. |
| `wp7-config.test.mjs` | 34 | `configurator/choices.json`, `defaultConfig`, `validateConfig`, `normalizeConfig`, `loadConfig` / `findConfig`, the opt-out CSS, and that no engine reads the config module. |
| `wp7-configurator.test.mjs` | 13 | `configurator/index.html`: the page, its config builder, the build helpers. |
| `project.test.mjs` | 46 | The project index (`src/project.mjs`, `src/resolve.mjs`): the folders of `fixtures/project/` (an `@/` alias with `extends` and `baseUrl`, relative paths and `.js` specifiers with a mock, an index of indexes with a module's own names, `package.json` `imports`, a workspace UI kit built to `dist/`, wrappers followed and not followed, an import that only looks like ODS, `detection-paths`: a jsconfig `baseUrl`, an import exported again, a workspace package with `exports` and a default-exported wrapper; `typed-props`: components whose props use ODS types and their callers; `package-scope`: packages on ODS 17, 18, 19, `workspace:*`, `catalog:` and a file under no `package.json`) migrated with no option, a second run changes nothing, ESLint `--fix` with `ods-migrate.modules.json` equals the codemod; the report text and JSON, `--built-on-ods` and its deprecated names `--treat-as-ods` and `--also`, the resolver, the entries of a module. |
| `project-scope.test.mjs` | 22 | What is found with no option beyond the re-exports: the typed props of components (every declaration form, objects of ODS props, through an index and a default export, wrappers kept apart), their report and lint (one report per marker); the packages on ODS 17 / 18 (the report sentence, `--from 19`, the version ranges, ESLint and stylelint leave them alone); the advice for each kind of look-alike import; the coverage gate on a corpus that drops to 0 sites (`allowNoSites`, kept by `--record`); the modules file. |
| `plain-report.test.mjs` | 15 | What an integrator with no internal context reads: the help (`--built-on-ods`, no internal word), no ticket, pull request, BC code or branch in any text of the mappings and of the configurator, the key marker (the constant as the code now reads it and as v19 wrote it, what to do in each case), the stacking marker (the v19 and v20 values; no marker below 99 or above 1600), the mock and namespace-import notes; the report: points to check by kind, the `--ods-*` names ODS v19 never declared counted apart and left alone, the elements that look different, the changes not final in v20, the JSON v3 keys and their stable ids, the work per package, the same words before and after a component's code is migrated, the v19-look stylesheet up to date, the modules file, a `pnpm-workspace.yaml` with `overrides`. |
| `switch-tabs.test.mjs` | 17 | The removed Switch rewritten to Tabs `variant="switch"`: the plain case, controlled value and `onValueChange`, `size` as a literal and as `SWITCH_SIZE`, no selection (the point to check), mapped / conditional / fragment items, `disabled` moved to each Tab, a spread, the shapes kept marked (no items, a Switch in a Switch, a name clash, `/switch`, a wrapper of the app), the types, a local barrel; idempotence and ESLint parity for each. |
| `review-fixes.test.mjs` | 24 | Regressions: the defaults chosen for v20, silent failures, findings on real code, configurator UX. |
| `coverage-unit.test.mjs` | 10 | The coverage harness, pure logic: line alignment, token sites (runtime names, word boundaries), AUTO / MARKED / MISSED and regressions, truth normalization. |
| `coverage-smoke.test.mjs` | 3 | The harness end to end on `fixtures/coverage/`: surfaces probed, one site of each outcome plus the regression, the truth comparison and the rendering list, and the fixture files unchanged afterwards. ~30 s. |
| `coverage-a-project.test.mjs` | 9 | The harness project model (`scripts/coverage/project.mjs`) on `fixtures/coverage-a/`: version ranges and package scope, tsconfig `include`, `extends` and solution-style `references`, per-file resolution (aliases, package.json `imports`, workspace packages), premature rewrites. |
| `coverage-a-ts.test.mjs` | 10 | The TypeScript sites (`scripts/coverage/ts-sites.mjs`): what uses ODS by the v19 checker (barrel, alias, `#imports`, workspace package, wrapper), scope, one site per API usage (anchors, grouping, classify on all codes), regressions net of the v19 and v20 errors. |
| `coverage-b-tokens.test.mjs` | 20 | The token scanner (`scripts/coverage/token-sites.mjs`): code vs mentions in scripts, stylesheets, HTML and Markdown, Tailwind bare keys, CSS-module classes, snippets, collected sites and mentions. |
| `coverage-b-classify.test.mjs` | 15 | Marker attribution by construct (`scripts/coverage/classify.mjs`) in scripts, stylesheets and Markdown. |
| `coverage-c-truth.test.mjs` | 30 | The truth comparison (`scripts/coverage/truth.mjs`): value normalization, parsing (imports, JSX attributes, CSS declarations, snippets in strings, component defaults), element alignment, each DIFFER class (style-only, decision per look id and config, unrelated-change, tool-wrong, counterparts, regressions, import specifiers, CSS, z-index), exclusions, the folder step with its sidecar. Needs a typescript (see below). |
| `coverage-c-corpora.test.mjs` | 14 | The corpus preparation scripts (`scripts/coverage/corpora/`): the ODS import rewrite, the merge that keeps the corpus where the truth is unknown, the storybook → docs mapping, digests and copies, `git archive` sources, a prepare script end to end on a temp repo, the usage of each script. |

## 2. Fixture conventions

- A fixture is a pair `<name>.input.<ext>` / `<name>.output.<ext>` in the folder of its suite (`tests/fixtures/` top level, `wp1/`, `wp2/`, `wp3/`, `wp4/`, `tokens/`). The suites read the folder with `readdirSync`: a new pair is picked up with no test code. The extension decides the parser (`.ts` no JSX, `.tsx`, `.jsx`, `.css`, `.scss`, `.mjs`).
- `<name>.output.*` is the exact expected codemod output **with its markers** (`TODO(ods-v20)` comments, in the formats of `src/shared.mjs`). It is written and reviewed by hand. Never regenerate an output from the tool and commit it without reading the diff: that turns a bug into the expectation.
- Variants of the config: `v19-look*.input.*` run with every configurator choice on `v19` (`wp1`), `drop-default-v19.output.tsx` / `v19-look-aluminium.output.tsx` are a second output of the same input under another config (`wp3`). An inline mapping lives next to its fixtures (`wp3/mapping.json`).
- **Idempotence**: every fixture suite asserts that the codemod run on `<name>.output.*` returns it unchanged (`is idempotent on …`). A fixture that fails it is a bug of the tool, not of the fixture.
- **Parity**: on the inputs, ESLint `--fix` (and stylelint `--fix` on stylesheets) must give the output without its markers (`stripScriptMarkers` / `stripStyleMarkers`), and the lint rule must report exactly what is marked.
- A bug found on a real corpus becomes a minimal fixture before it is fixed (name it after the bug or the case, not after the corpus); copy at most the few lines that reproduce it, with names made generic.
- `fixtures/coverage/` is the harness fixture: `corpus/` (v19) and `truth/` (hand-migrated). It is built to produce one AUTO, one MARKED and one MISSED site plus one regression; change it only together with `coverage-smoke.test.mjs` and the `fixture` baseline entry.
- `fixtures/project/<case>/` is a small project for the project index: `input/` is copied to a temp dir and migrated with `--write`, `expected/` holds only the files that change (every other file must stay byte-identical). A new folder is picked up with no test code.
- `fixtures/wp6/` holds folders for the CLI (`drift`, `manifest`, `markers-only`): the tests copy them to a temp dir before running the CLI with `--write`.

## 3. Mapping regeneration

The two mappings and the configurator page are generated from the ODS sources at the two refs. After a change to a generator, to `configurator/choices.json`, or when the v20 ref moves:

```sh
ODS_MIGRATE_BUILD=1 node --test tests/wp5-token-mapping.test.mjs   # rebuilds the token mapping in memory, compares with the committed JSON (~50 s)
node scripts/build-token-mapping.mjs --ref origin/master --out /tmp/tokens.json && cmp mappings/tokens-v19-to-v20.json /tmp/tokens.json
node configurator/build.mjs --check                                 # "configurator/index.html is up to date", exit 0 (~4 s)
```

Gates: 0 fail; `cmp` silent (2026-10-23: byte-identical, 6 s); `--check` exit 0. `build-token-mapping.mjs` defaults to `--ref origin/master`, the ref the committed mapping is built with (rebuild it on the release ref). It also runs two guard rails: one fails on a removed name the tables do not cover, the other on a target, value or hint that names a token the ref does not declare. `configurator/build.mjs` fails when a snippet and the mapping's `v19Look` disagree; without `--check` it rewrites `index.html` (commit it with the change). The component mapping `mappings/v19-to-v20.json` is hand-written: `wp1-mapping.test.mjs` checks it against both APIs.

## 4. Acceptance on a real corpus: idempotence and lint parity

`scripts/acceptance/acceptance.sh` (helper `acceptance.mjs`) runs the CLI twice on a copy of a real corpus and measures everything on the files, never from the CLI report.

```sh
scripts/acceptance/acceptance.sh (--corpus <dir> | --repo <git dir> [--ref <ref>] [--path <dir in the repo>])
  [--pkg <ods-migrate dir>] [--built-on-ods <module>]... [--config <file> | --all-v19] [--work <dir>] [--label <name>] [--keep]
```

- The corpus is copied twice into `<work>/acceptance-<label>.XXXXXX/` (`base/` untouched, `migrated/`); `--repo` exports `git archive <ref> <path>` (default `HEAD`, `packages`). Default `<work>`: `$TMPDIR/ods-migrate-acceptance`. `--pkg` defaults to the package the script lives in.
- The CLI runs in `migrated/` with `. --write --json run1.json` plus `--built-on-ods` / `--config`. The modules of the corpus that stand for ODS are found by the CLI; the summary says how many. `--all-v19` generates a config with every choice of `configurator/choices.json` on `v19`. The config is copied into the work dir first, so the opt-out CSS it asks for is written there.
- The CLI report is read under its version 3 names (`markers`, `toCheck`, `typeCheck`) or its version 2 ones (`todos`, `notes`, `typed`); the summary keeps the version 2 names (`todos` = marker items, `notes` = points to check, `typed` = values for the type check) so that the recorded runs stay comparable. Since version 3, the `--ods-*` names ODS v19 never declared are no longer points to check (`notOds`).
- `acceptance.mjs` measures: files changed per kind, markers added, new parse errors (ast-grep `ERROR` nodes, postcss, JSON), ESLint `--fix` on `base/` vs the codemod output without markers (with the same `--built-on-ods` paths, config `look` / `pending`, and the `ods-migrate.modules.json` the CLI wrote, copied into `base/`; each file is linted under its real path so the rule resolves its imports and knows its package; an unchanged file is linted when it names ODS or imports a module that stands for ODS), lint reports on `migrated/` vs markers, the same for stylelint (also under the file's real path: the rules, like the CLI, leave the packages pinned to ODS 17 / 18 alone). Then the CLI runs again and the changed files are counted (not `ods-migrate.modules.json`, regenerated by each run).
- It prints a summary, writes `summary.json` (copied to `<work>/acceptance-<label>.last.json`), deletes the run folder unless `--keep`, and **exits 1 when a gate fails** (2 on a usage error).

Gates (all must be 0, the script checks them):

| Gate | Why |
| --- | --- |
| CLI exit ≠ 0 (both runs), internal/parse errors in the report | crash or unparsable input |
| new parse errors in the output | the codemod broke a file |
| files changed by the second run | not idempotent |
| ESLint `--fix` ≠ codemod; stylelint `--fix` ≠ codemod | the lint rules and the codemod disagree |
| new fatal ESLint errors; fixable reports left after the codemod | the codemod left work the linter would do |
| reports without a marker; markers without a report | a marker the linter cannot see, or a problem the codemod did not mark |

Under a v19-look config, the codemod adds `emphasis="high"` / `status="accent"` to Buttons, Messages and Cards **without** the prop (`whenAbsent`); ESLint never adds attributes (`ods/v20-default-changed` only reports). Those divergences are counted apart (`fixDivergencesWhenAbsent`, a divergence made only of those attributes) and are not a gate.

**The reference corpus** is `packages/` of [ovh/manager](https://github.com/ovh/manager). The tables below were measured on a local snapshot of it (`7e02c54`, 10,585 files) that is not a commit of the public repository and is lost: they are kept as history, and cannot be replayed. the coverage runs of § 5.4 now use ovh/manager at the public commit `d8e3d1a1` (2026-10-30). To get it: `git clone --filter=blob:none --no-checkout https://github.com/ovh/manager.git manager` (git fetches the blobs of `packages/` when the script archives them), then pass `--manager-repo manager` to `corpora/all.mjs` (`corpora/manager.mjs` pins the commit and the digest of its `packages/`: 45,068 files).

Last run (`coverage-baseline.json` → `acceptance` holds it):

| Run | Files changed (scripts / styles) | Markers | CLI changes / marker items / points to check / type check values | Parse errors | 2nd run | ESLint files, `--fix` ≠ | ESLint reports = markers | stylelint files, `--fix` ≠, reports = markers | Gates |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Aluminium | 632 (594 / 38) | 178 | 1,886 / 182 / 140 / 75 | 0 | 0 files | 1,371, 0 | 176 = 176, 0 fixable | 51, 0, 2 = 2 | PASS, ~40 s |
| `--all-v19` | 651 (615 / 36) | 178 | 2,274 / 182 / 140 / 75 | 0 | 0 files | 1,371, 0 (+ 200 `whenAbsent`) | 176 = 176, 0 fixable | 51, 0, 2 = 2 | PASS, ~40 s |

Measured on 2026-10-27, after the plain-words changes (report version 3), no option, on the same copy of the `7e02c54` tree. Against the run below: 3 markers fewer (a `zIndex` below 99 or above 1600 in `positionerStyle` keeps its place against every ODS overlay, in v19 and in every z-index system v20 may ship: no marker, in the command and in the ESLint rule alike); 220 notes became 140 points to check plus 78 `--ods-*` names ODS v19 never declared (`notOds`, reported apart: not migration work) and 2 notes dropped (test mocks reading a prop that does not change). Files and changes are unchanged. The coverage runs of § 5.4 are unchanged on every corpus (`coverage-check` passes all 16 against the baseline: the marker texts changed, not what is marked).

Before that, measured on 2026-10-27, no option, on a copy of the `7e02c54` tree (`--corpus <dir>/manager/corpus/packages` of § 5.3), with 181 markers, 1,886 / 185 / 220 / 75 and 179 = 179 ESLint reports. Against the 2026-10-26 run: the 3 packages pinned to ODS 17 / 18 (`apps/ips`, `pci-rancher`, `catalog`) are left unchanged (their 17 files changed before, 8 of them stylesheets; the CLI says so in one line each); the props of the app's components typed with ODS types are followed (`pci-block-storage` `Button` / `ButtonLink` callers and defaults, `pci-instances` `ActionsMenu actionButton={{ variant }}` → `emphasis`…); 16 more ESLint files are linted (the callers of those components).

Measured on 2026-10-26 with no `--treat-as-ods` (11 modules of the corpus found as standing for ODS, `@ovh-ux/muk` among them), on a copy of the same `7e02c54` tree (`--corpus`: the snapshot repo above had lost its `HEAD`). Against the 2026-10-23 run with `--also @ovh-ux/muk`: +2 files and +10 changes inside `@ovh-ux/muk`, whose own code reaches its `Button` / `Badge` wrappers through `@/components/…` (now migrated: `variant` → `emphasis`, the default `color` dropped); −8 notes; under `--all-v19`, 2,301 changes instead of 2,334 and 201 files that differ only by `whenAbsent` attributes instead of 228 (a wrapper gets no v19-look addition, its inner ODS element does).

Any other corpus works the same way (`--corpus <dir>`); the gates are absolute, so a corpus that does not pass them is a bug report.

## 5. Coverage: how much of the migration ods-migrate does

`scripts/coverage.mjs` grades ods-migrate with detectors that never read its mappings (the README, § Measuring the coverage independently, explains how).

```sh
node scripts/coverage.mjs <corpus dir> [--truth <hand-migrated dir>] [--config <file>] [--json out.json]
  [--treat-as-ods <module>...] [--work <dir>] [--label <name>] [--cache <dir>] [--repo <git dir>]
  [--v19 v19.7.3] [--v20 origin/master] [--deps19 <nm>] [--deps20 <nm>] [--typescript <dir>]
  [--react-types <dir>] [--react-dom-types <dir>] [--strict] [--check-js] [--sites] [--quiet]
```

- The corpus is copied to `<work>/<label>/base` and `<work>/<label>/migrated` (default `--work` `$TMPDIR/ods-migrate-coverage`, default `--label` the folder name). ods-migrate runs from an empty `<work>/<label>/run`, so it never picks up a stray `ods-migrate.config.json`.
- The type surfaces of both refs are extracted with `git archive` into `<work>/.surfaces/<sha12>`, cached by commit (the first run of a session takes ~10 s more).
- Defaults, when the package lives in a checkout or a worktree of the design-system repo: `--repo` the main worktree (for the refs); `--deps19` `node_modules` and `--deps20` `packages/ods-react/node_modules` of the worktree the harness runs in, or of the main worktree when it has no install; `--typescript`, `--react-types` and `--react-dom-types` the devDependencies of this package (typescript 6.0.3, `@types/react` 19.2.18 for every file, so the v19 and v20 runs differ only by ODS), else `<repo>/node_modules/…`. A copy of the harness outside the repo must pass all of them.
- Each surface must compile a probe and reject an unknown prop, or the run stops.

### 5.1 Metrics

- **Scope**: only the packages on ODS 19 count. Each `package.json` gets a status from its `@ovhcloud/ods-*` ranges: `ods19`, `ods19-via` (a workspace dependency on 19), `unknown` (`workspace:*`, `catalog:`, `*`), `other-ods` (17/18 only) or `none`; files under no `package.json` are `unscoped`. `ods19`, `ods19-via`, `unknown` and `unscoped` are in scope. Sites out of scope are still classified, never counted.
- **Site** (one API usage or one removed name in code):
  - *ts*: the v20 errors of one API usage of ODS (one import or re-export specifier, one JSX attribute, one JSX element with an error on its tag, or else one position; `codes`, `errors`). What uses ODS is decided by the v19 type checker: an import or re-export whose symbol, followed through every alias (barrels, `export *`, relative paths, tsconfig aliases, package.json `imports`, workspace packages), lands on the ODS surface; a property declared by ODS (a JSX attribute of a wrapper, a key of a typed object, `props.x`). Errors that also exist against v19 on the same file, line and code are removed as noise. Re-export lines are sites. The errors the checker does not report are added with the harness's own codes: `unresolved-use` (each use of a binding whose import is broken: the binding is `any`, so `[BADGE_COLOR.success]` or `type T = BadgeColor` report nothing), `unresolved-alias` (a name imported or re-exported from a module whose own re-export of a removed export is broken, when it names that export itself: `BADGE_COLOR` from a barrel, not a corpus alias `COLORS`), `masked-attribute` (an attribute of an element that already has an error, absent from the props or not assignable: the checker reports one error per element) and `removed-prop` (a prop v20 removes by typing it `never`, passed a value typed `undefined`, or read as a type `Props["color"]`).
  - *token*: a use, in code, of a CSS custom property, SCSS variable or SCSS mixin/function that the v19 sources declare and the v20 sources do not (read from `packages/themes/src` and `packages/ods-react/src` at each ref), in css, scss, sass, less, html, vue, svelte and js/ts files.
  - *dynamic*: a name built at runtime (`--ods-color-${x}`) counts only when every name it can become is removed.
  - *bare-key*: a removed custom property written without `--` (Tailwind keys `'ods-color-primary-500'`, `bg-ods-color-primary-500`, a token lookup `getToken('ods-color-primary-500')`).
  - *module*: a removed BEM class of a component CSS module, as `_button--ghost[_hash_line]` or in a `[class*="…"]` selector, also as a bare modifier `button[class*="--ghost"]` (removed when the component the type selector names no longer declares it; with no type selector, when no component does).
  - *font*: a font family the v19 themes load (`@font-face`) and v20 does not ('Source Sans Pro'), unless the same line also names one v20 loads (counted as *token*).
  - *doc*: any of the names above in the code of a Markdown / MDX file (fences, inline code, the text of `<code>` / `<pre>` elements, MDX ESM / JSX / expressions), and a removed ods-react export (`BUTTON_COLOR`, read from the two surfaces) there or in a string of a script (a story's `docs.source.code`); on a snippet line the snippet site stands for it.
  - *snippet*: a v20 type error, on ODS code, in a Markdown code block or a string that imports ODS (type-checked as a file, v19-subtracted, mapped back to its host file and line).
- **Mentions** (never sites): comments, JSDoc, JSX text, HTML text, prose strings (3+ plain words with a common English or French word, and no code shape), Markdown prose, CHANGELOG / what's-new pages. The text of `<code>`, `<pre>` and of components whose name contains `code` / `source` is code, as Markdown inline code is.
- **Snapshots**: sites in `.snap` files are a separate bucket, never in the totals (ods-migrate counts them and leaves them to be regenerated, so they are MISSED by design).
- **AUTO**: after migration, the error (any code of the site) or the name, in code, is gone from the lines the site became (line diff; an edit that keeps the line count is matched line by line), and no new v20 error sits where the usage went (its span followed through a character diff: `BUTTON_COLOR.information` rewritten to the non-existent `BUTTON_STATUS.information` is MARKED or MISSED as that error, `brokenBy`). Two errors of one code on one line (two removed names in one import) are told apart by their message.
- **MARKED**: still there, with a `TODO(ods-v20)` marker attached to the construct that holds it (see the header of `scripts/coverage/classify.mjs`): the innermost construct, a JSX opening tag or attribute, a property, an array element, a call argument or an import specifier (any marker in or leading it); a larger enclosing construct (declaration, statement, JSX element, CSS rule) only through a marker that names the site or names nothing; a marker on an import counts for the usages of the names it names; a marker that names tokens counts only for the tokens it names. Markdown prose, HTML text and snapshots: same line or the comment lines right above. **MISSED**: still there, no marker.
- **Regression**: a v20 error in the migrated code that the unmigrated code had neither against v20 nor against v19, per hunk and error code; `underMarker` when a marker is attached to its construct.
- **Premature rewrite**: a file (and its changed hunks) ods-migrate changed in a package that is not on ODS 19 (`scope.premature`, `summary.prematureFiles` / `prematureHunks`).
- **auto%** = auto / sites. **assisted%** = (auto + marked) / sites. `summary.withoutDocs` gives the same counters without `doc` and `snippet` sites, comparable with the runs made before Markdown and snippets were scanned.
- **AGREE / DIFFER** (with `--truth`), per item: a JSX attribute (`jsx-attribute`; elements aligned across the three versions on their signature, label, aligned lines, and the ods-migrate output as a bridge; attribute order ignored; values normalized: quotes, whitespace, markers, `{"x"}`), a whole element one side added or removed (`jsx-element`, a block of new elements counts once), a CSS declaration (`css-declaration`, keyed by selector path and property, order ignored, a renamed custom property paired by position in its rule), an import or re-export specifier (`import-specifier`), and the code left (`line`, normalized lines as before). An item is compared when ods-migrate changed it, or the truth changed it and it touches ODS; the others are counted as `ignored`. Each DIFFER has one class:
  - **tool-wrong**: ods-migrate left code the v20 API breaks (a site on the item, a removed token, export, constant member or prop, a value v20 does not accept, or the counterpart of one), or wrote something else than the truth, or its output has a new v20 error there (a regression). `marked` when under a `TODO(ods-v20)` marker.
  - **decision**: the truth applies what the run's config does not ask for: a v19-look addition (`button-default-emphasis`, `message-default-emphasis`, `card-default-status`, `badge-accent-filled`, `divider-neutral-grey`, `spinner-neutral-grey`, `page-background`: the look ids of `configurator/choices.json`, a decision only while the config keeps that choice on Aluminium, else tool-wrong), a new v20 prop set to keep the v19 rendering (`v19-look-addition`), an explicit default value (`drop-default`, the defaults read from the v20 component code), a white surface turned into the page grey (`white-kept`), a computed z-index rewritten (`z-index`), the Tabs `variant="switch"` ods-migrate writes for a removed Switch where the truth wrote something else (`switch-to-tabs`).
  - **unrelated-change**: the truth changed code the v20 API does not require to change (no site, no removed name, prop or value), or added or removed content.
  - **style-only**: the same code spelled differently (`X_STATUS.accent` / `"accent"`, a box shorthand with its repeated values, a local variable renamed, `import type`, an import left unused).
  Items on lines the truth does not cover (`excluded`: lines a prepared truth lists in its `.ods-truth.json`, or code the truth left broken in v20) are not compared. Each DIFFER is printed with the original, ods-migrate and truth texts, its class and reason; each site gets a `truth` verdict and, when it differs, a `truthClass`. The former line-region numbers stay in the JSON (`truth.legacy`) for reference. **The gate is on tool-wrong.**
- **Not detectable**: the ODS components the corpus renders whose stylesheets changed between the refs. Listed, never counted.

### 5.2 Known limitations of the harness (read the numbers with them)

- Each file resolves through its nearest `tsconfig.json` / `jsconfig.json` (`extends` relative or to a workspace package, solution-style `references` picked by `include`, `paths`, `baseUrl` as a `*` fallback), then the workspace packages of the corpus (their sources when the declared entry is build output absent from the copy), then package.json `imports`. An `extends` that is not found is listed in the report (`project` line). A workspace package is used even when the range does not match its version. `strict` is off by default.
- `.js` / `.jsx` are type-checked only with `--check-js`; rewrites in JS that does not type-check show only with `--truth`.
- Line-based matching: when a hunk changes the line count the whole hunk is used; "gone" is judged by the error codes; a new error elsewhere in the hunk is a regression (`replacedBy`) but does not change the outcome, only one within the usage's own span does.
- Prose detection is a heuristic. Markdown code blocks without an ODS import are not type-checked (a fragment `<Button color="x" />` alone is invisible; a removed export named in it is a *doc* site). A removed prop passed through an untyped object (story `args`, a spread) is invisible. JSON files are not scanned.
- A corpus entirely on ODS 17/18 has 0 sites: what the tool rewrites there is reported as premature, not as AUTO.
- The truth comparison pairs elements by order and similarity: siblings the truth reorders with nothing in common (a neutral `<Divider>` moved after a plain one) can pair the wrong way. A DIFFER whose code the truth restructured (a helper rewritten, a loop split in two) is tool-wrong when the original had to change, unrelated-change otherwise. The classes read the v20 API from the surfaces, never from the ods-migrate mappings; the decisions know the look ids of `configurator/choices.json` and the defaults of ods-migrate (a new look id needs a rule in `truth.mjs`, the report flags an unknown one).
- Defaults that change with no prop (Card, Button, Message) and every visual change only show in the rendering list.
- A run takes 10–30 s on a small corpus (two probes ~6 s, three tsc passes; the first run of a session also extracts the surfaces), ~2 min on `manager` (6,258 TS files). Pass `node --max-old-space-size=12000` to the big ones (16 GB machine: run them one at a time).

### 5.3 Corpora

Each corpus is prepared by a script of `scripts/coverage/corpora/` into a scratch folder (`<dir>`): a `git archive` of a pinned ref, or a copy of an untracked folder checked against a pinned digest, never the original. Each script writes `<dir>/<label>/corpus` (and `truth`), and a manifest `<dir>/<name>.corpus.json` with the source refs and SHAs, the digest of each prepared folder (the harness reports the same digest in `digests`, and `coverage-check.mjs` refuses to compare runs on different inputs) and the coverage runs to make. `all.mjs` prepares them all. Use the labels below: the baseline is keyed by them.

| Label | Corpus | Prepare | Truth | Options | Gated |
| --- | --- | --- | --- | --- | --- |
| `fixture` | `tests/fixtures/coverage/corpus` | in the package | `tests/fixtures/coverage/truth` | – | yes |
| `examples`, `examples-<app>` | design-system `packages/examples` at v19.7.3: the 5 apps in one run, and each app alone | `corpora/examples.mjs --out <dir>` | the same path at `origin/master` | – | yes |
| `recipes` | `packages/ods-recipes` at v19.7.3 | `corpora/recipes.mjs --out <dir>` | the same path at `origin/master` | – | yes |
| `storybook` | `packages/storybook` at v19.7.3, ODS imports rewritten to `@ovhcloud/ods-react` (147 imports in 59 files, line count kept) | `corpora/storybook.mjs --out <dir>` | the hand migration of `packages/docs` (`9336e1951^` → `origin/master`) merged into each storybook file it maps to; the lines the docs never had, and conflicts, are excluded (`truth/.ods-truth.json`) | – | yes |
| `manager` | ovh/manager `packages/` at the public commit `d8e3d1a1` (§ 4) | `corpora/manager.mjs --out <dir> --repo <ovh/manager clone>` or `--from <dir holding packages/>`, checked against the pinned digest (45,068 files) | none | `--max-old-space-size=12000` (no option: `@ovh-ux/muk` is found in the tree; the harness's own `--treat-as-ods @ovh-ux/muk` would count 2 more sites, both MISSED story args) | yes |

The **hand-migrated truths** are `fixture`, `examples*`, `recipes` and `storybook` (through the docs): the ODS team migrated them by hand in the v20 branch, so `--truth` compares the tool with what we shipped. Gate on **tool-wrong**; read the decision and unrelated-change lists, they say where the truth and the defaults of ods-migrate part ways and what the truth changed beyond the migration.

`storybook`: the truth covers the files that have a docs counterpart (160 of 326 text files: same path, or the most similar file of the same name, renames followed); the 166 others (Storybook addons, the storybook-only doc components, `technical-information.mdx`…) have no truth, and their sites count with no truth verdict. In a covered file, the lines the docs base never had (storybook-only content) and the conflicts are excluded, never compared.

### 5.4 Running and checking

```sh
# prepare (read-only on the sources), once per session; MANAGER = the snapshot repo of § 4
W=<scratch>/cov
node scripts/coverage/corpora/all.mjs --out $W/src --manager-repo $MANAGER      # or --manager-from <dir holding packages/>

# run, from packages/ods-migrate
cov() { label=$1; shift; node --max-old-space-size=12000 scripts/coverage.mjs "$@" --label $label --work $W/work --json $W/$label.json --quiet > $W/$label.txt; echo "$label exit $?"; }
cov fixture tests/fixtures/coverage/corpus --truth tests/fixtures/coverage/truth
cov examples $W/src/examples/corpus --truth $W/src/examples/truth
for app in accessibility-test nextjs-app react-router-app vite-app webpack-app; do
  cov examples-$app $W/src/examples/corpus/$app --truth $W/src/examples/truth/$app; done
cov recipes $W/src/recipes/corpus --truth $W/src/recipes/truth
cov storybook $W/src/storybook/corpus --truth $W/src/storybook/truth
cov manager $W/src/manager/corpus/packages

node scripts/coverage-check.mjs $W/*.json
```

Each `$W/<label>.txt` is the text report (summary, sites not fixed, regressions, DIFFER snippets, rendering list) that § 7 reads.

`scripts/coverage-check.mjs` matches each report to `coverage-baseline.json` by its label and fails (exit 1) when, for a gated corpus:

- ods-migrate did not exit 0;
- the ODS refs differ from the baseline's (not comparable: re-record on purpose);
- **auto%** or **assisted%** dropped;
- **missed** rose, **regressions** rose, or regressions outside a marker rose;
- **premature rewrites** (files changed in packages not on ODS 19) rose;
- the corpus had sites in the baseline and has **0** now (auto% and assisted% are then undefined, so the checks above cannot see it: an empty or wrong corpus, a broken harness), unless its baseline entry says `"allowNoSites": true` (kept by `--record`). An entry recorded at 0 sites, such as a package on ODS 18, needs nothing;
- with a truth, **tool-wrong** DIFFER items rose (a baseline recorded with the former line regions is not comparable: record a new one);
- the corpus or truth digest is not the baseline's (another input: not comparable).

A non-gated corpus prints `warn` instead. A label without a baseline entry prints `?`.

Absolute targets, which the baseline does not meet yet (the gate is "no worse than the baseline", the target is the direction):

- 0 regressions. Known at the baseline (2026-11-09): `fixture` 1 (built in); `storybook` 1 (a duplicate key in `.storybook/ods.theme.ts`, under a marker). The `BUTTON_STATUS.*` regressions of the 2026-10-27 baseline (a removed `information` / `success` / `warning` value) are fixed: a `color` with no v20 equivalent is now removed, with a marker that says which `status` to pick.
- 0 MISSED on the hand-migrated truths (code: met on `examples` and `recipes`; `storybook` 4 without docs).

Re-measured on 2026-10-27 after the plain-words changes (option `--built-on-ods`, report version 3, marker texts, no stacking marker below 99 or above 1600, `--ods-color-text-secondary` no longer renamed since ODS v19 never declared it): every number of the table below is unchanged, and `coverage-check` passes all 16 runs.

Checked again independently on 2026-10-27 (fresh runs of all 16 corpora with no option, the frozen harness files matching their checksums): every number of the table below is unchanged, `coverage-check` passes all 16 runs against this baseline and against the one recorded before the typed props and the package rule, and the acceptance runs of § 4 give the same numbers. Only the `seconds` of the coverage entries were re-recorded.

Last recorded numbers (2026-11-09; `storybook` 2026-11-10, refs `0ce249290` → `8b834837e` = `origin/master` at `v20.0.0-alpha.0`, whose `ods-react` and `themes` code is as at `2741442ea`; ods-migrate with the removed string enums inlined, the Switch rewritten to Tabs and a palette of the app's own (`--color-primary-500: var(--ods-color-primary-500)`) pointed at the v20 palette). Every corpus runs with no option but `manager` (`--treat-as-ods @ovh-ux/muk`, as its corpus manifest says: the kit is a package of the corpus). The "without docs" column leaves out the `doc` and `snippet` sites (Markdown / MDX code, story source strings): ods-migrate does not rewrite Markdown, step 10 of MIGRATION.md covers it.

Against the 2026-11-06 baseline: `examples` 112 → 138 auto and 26 → 0 marked (the Switch section of `accessibility-test` now becomes Tabs, the removed enums become their values), tool-wrong 3 → 1 (the Tabs written for a Switch are a decision, `switch-to-tabs`: the truth deletes that section); `storybook` 403 → 538 auto; `manager` without docs 13 missed → 12 and 96.3 → 96.6 % auto (zimbra's Tailwind palette; the v19 guide keys `ods-color-*` of `manager-ui-kit` keep their name under a marker, their value reads the palette).

| Label | TS files | Sites | Auto | Marked | Missed | auto% | assisted% | Without docs: sites / missed / auto% / assisted% | Regressions (under a marker) | Premature files | Agree / differ (tool-wrong) | Time |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `fixture` | 1 | 6 | 5 | 1 | 0 | 83.3% | 100% | = | 1 (0) | 0 | 7 / 3 (3) | 20 s |
| `examples` | 29 | 138 | 138 | 0 | 0 | 100% | 100% | = | 0 (0) | 0 | 139 / 92 (1) | 29 s |
| `examples-accessibility-test` | 6 | 128 | 128 | 0 | 0 | 100% | 100% | = | 0 (0) | 0 | 129 / 72 (1) | 20 s |
| `examples-nextjs-app` | 3 | 1 | 1 | 0 | 0 | 100% | 100% | = | 0 (0) | 0 | 1 / 2 (0) | 14 s |
| `examples-react-router-app` | 5 | 1 | 1 | 0 | 0 | 100% | 100% | = | 0 (0) | 0 | 1 / 0 (0) | 15 s |
| `examples-vite-app` | 9 | 4 | 4 | 0 | 0 | 100% | 100% | = | 0 (0) | 0 | 4 / 9 (0) | 15 s |
| `examples-webpack-app` | 6 | 4 | 4 | 0 | 0 | 100% | 100% | = | 0 (0) | 0 | 4 / 9 (0) | 14 s |
| `recipes` | 104 | 201 | 189 | 8 | 4 | 94% | 98% | 197 / 0 / 95.9% / 100% | 0 (0) | 0 | 221 / 81 (27) | 18 s |
| `storybook` | 133 | 792 | 540 | 41 | 211 | 68.2% | 73.4% | 571 / 4 / 94.6% / 99.3% | 1 (1) | 0 | 195 / 962 (60) | 33 s |
| `manager` (`d8e3d1a1`) | 11,290 | 2,085 | 1,995 | 59 | 31 | 95.7% | 98.5% | 2,064 / 12 / 96.6% / 99.4% | 0 (0) | 4 | – | 299 s |

## 6. The harness itself

A change under `scripts/coverage/` must keep `coverage-unit` and `coverage-smoke` green, then rerun `fixture` and at least `examples` and `recipes` and compare with the baseline: a harness change that moves a number is recorded with the reason in the commit (the tool did not change, the measure did).

## 7. Manual review

Numbers do not catch a wrong rewrite that compiles. Before merging, a reviewer:

1. Reads the fixture diffs of the change (`git diff tests/fixtures`): every changed `.output.*` line must be the intended behaviour.
2. Runs the acceptance with `--keep` and reads a sample of the migrated corpus: `diff -ru <work>/acceptance-manager.*/base <work>/acceptance-manager.*/migrated | less`. Look at the files the change touches (grep the component or token), and at 10 random files.
3. Reads every new `TODO(ods-v20)` marker text, point to check and report line the change adds (`grep -rn 'TODO(ods-v20)' migrated/`, the `run1.txt` of the acceptance): it must say what to do, in the words of MIGRATION.md, for a reader with no internal context: no ticket, pull request, BC code or branch (`plain-report.test.mjs` fails on them in the mappings and the configurator), no internal word (barrel, re-export, mapping, sites, scope, pending, truth), one example when a notion needs one.
4. Reads the new entries of the `sites not fixed`, `regressions` and `differ from the truth` lists of the coverage runs (the text reports), not only the counts. A new DIFFER on a hand-migrated truth is a disagreement with what the ODS team shipped: either the tool or the truth is wrong; say which in the PR.
5. When `choices.json`, a `v19Look` or the configurator changed: opens `configurator/index.html` from `file://`, checks the v19 / Aluminium / kept renderings side by side, downloads a config and runs the CLI with it.
6. `node src/guide.mjs <Component>` for each changed component: the "after" snippet must read like documentation.

## 8. Recording a new baseline

When a number moves on purpose (a fix, a new rule, a new ref, a harness change):

```sh
node scripts/coverage-check.mjs --record $W/<label>.json…   # keeps corpus/fetch/command/gated/note of each entry
```

and update `acceptance` in `coverage-baseline.json` from `<work>/acceptance-<label>.last.json` by hand. Record in the same change as the code that moved the numbers, and say why in its description. A drop is recorded only with a written reason (a v20 API change the tool cannot follow, a harness fix that removes false AUTO).
