# Migrating an app from ODS v19 to v20 with ods-migrate

This is the full procedure for a team that builds an app with ODS. Follow the steps in order. The outputs quoted below come from real runs on a copy of `packages/examples/accessibility-test` at `v19.7.3` (Node 22.14.0).

> **Status (October 2026): ODS v20 is not released yet, and neither is ods-migrate.**
> - You can do steps 1, 2 and 3 now, on a branch: they need only your code.
> - Steps 4, 5, 7, 8 and 10 need the v20 packages installed: wait for the release (a preview version will be announced on the ODS channels). Until then, ods-migrate migrates to the current v20 preview, which may still change.
> - If its report has a "Not migrated by this version" block (step 2), the changes it lists are not applied by this ods-migrate: migrate them by hand with the v20 migration guide.

---

## How to run ods-migrate

Once it is published, run it with npx, from the root of your project:

```sh
npx @ovhcloud/ods-migrate . 
```

**Until it is published**, run it from a checkout of the design-system repository, whose dependencies are installed (`pnpm install` at the root of that checkout):

```sh
node <checkout>/packages/ods-migrate/src/cli.mjs .
alias ods-migrate='node <checkout>/packages/ods-migrate/src/cli.mjs'    # then the commands below work as written
```

The commands of this guide are written `ods-migrate …`: with the published package, read `npx @ovhcloud/ods-migrate …`. The same goes for the other files of the package: the ESLint plugin is `<checkout>/packages/ods-migrate/src/eslint-plugin.mjs` until it can be imported as `@ovhcloud/ods-migrate/eslint-plugin`, and the guide of a component (`node <checkout>/packages/ods-migrate/src/guide.mjs Button`) prints its before / after code.

`ods-migrate --help` lists the options. Most projects need none.

---

## What ods-migrate does

- **It changes what has a safe v20 equivalent**: props, constants, types and design tokens that were renamed, values that changed name (`color="primary"` → `status="accent"`), a few `package.json` entries.
- **It marks what needs a decision** with a `TODO(ods-v20)` comment in your code (a "marker"). Each marker says what to do. Example: a Button that showed a success status has no v20 equivalent, so ods-migrate cannot pick one for you.
- **It lists what to look at** in its report: the "points to check" (`?`), the values computed at runtime that your type check verifies, the elements that look different with no code change.
- **It never guesses.** When it does not know, it marks or lists, and leaves the code as it was.

You resolve the markers by hand (step 6) and check the screens by eye (step 9).

### What to expect

The ODS team measures ods-migrate on real code with a separate test tool. That tool counts the **places that break** in v20: each place where the v20 type check fails, and each use of a design token that v20 removed. Then it checks what ods-migrate did with each place:

| Code base | Places that break | Fixed by ods-migrate | Marked with a TODO | Missed (your type check finds them) | Fixed | Fixed or marked |
| --- | --- | --- | --- | --- | --- | --- |
| `packages/examples` (5 apps) | 109 | 91 | 18 | 0 | 83.5 % | 100 % |
| `ods-recipes` | 196 | 188 | 8 | 0 | 95.9 % | 100 % |
| ODS Storybook | 423 | 380 | 36 | 7 | 89.8 % | 98.3 % |
| ovh/manager (`@ovh-ux/muk` found in the repository) | 2,005 | 1,849 | 102 | 54 | 92.2 % | 97.3 % |

These numbers count code only: ods-migrate does not read Markdown, so the code samples of your `.md` / `.mdx` files are left to you (step 10). Every corpus ran with no option.

**The report of ods-migrate counts other things**, so its numbers differ from this table:
- a **change** is one edit: one place that breaks can take several (an import, an attribute, a value);
- a **marker** is one `TODO(ods-v20)` comment: one marker can cover several places, and some markers are about code that still compiles but needs a decision (a z-index, an object key);
- a **point to check** is about code that does not break.


---

## Prerequisites

1. **A clean git tree.** ods-migrate writes in place. Commit or stash first, so that `git diff` shows only the migration and `git checkout .` undoes it.
   ```sh
   git status --short   # must print nothing
   ```
2. **Stay on your ODS 19.x.** Do not bump to 19.7.3 first. ods-migrate migrates any 19.x. Its tables were built from 19.7.3, so on an older 19.x your type check (step 5) can also show what changed between your 19.x and 19.7.3: fix those like the others.
3. **Do not bump `@ovhcloud/ods-react` to 20 yet.** ods-migrate reads the ODS version of each package from its `package.json`. If you already bumped it, pass `--from 19`.
4. **Node 22 or later.**
5. **React 18 or 19.** ODS v20 still accepts `react >= 18.2.0`. On React 19, one single version of `@types/react` must be installed (step 4 explains why and does it for you).
6. **Run it from the root of your repository, on the whole repository.** That is how it finds your own modules built on ODS (below) and the UI kits of your repository.
   - A package whose `package.json` declares ODS 17 or 18 only (`@ovhcloud/ods-components`, `@ovhcloud/ods-react` 17 / 18) is left unchanged. The report says so in one sentence per package, for example `apps/ips uses ODS 18: left unchanged. Migrate it to ODS 19 first (https://ovh.github.io/design-system/latest/guides/migration-to-v19), then run ods-migrate on it.` There is no tool for that step: follow the ODS guide "Migration to v19".
   - A package on ODS 19 that **also** installs ODS 17 / 18 packages (`@ovhcloud/ods-components`, `@ovhcloud/ods-theme-blue-jeans` 17) is migrated: ods-migrate changes only the code that uses `@ovhcloud/ods-react` and the ODS 19 design tokens. The ODS 17 / 18 packages are separate packages with their own theme: they keep working as long as they are installed and loaded. Bumping `@ovhcloud/ods-react` to 20 does not change them.
7. **Your own modules built on ODS need nothing.** If your app reaches ODS through code of its own, ods-migrate finds it and migrates the files that use it too. For example:
   - `src/components/ods/index.ts` that does `export * from '@ovhcloud/ods-react'`, imported as `@/components/ods`;
   - a `GuardedButton` that takes the props of the ODS `Button` and passes them on;
   - a UI kit of your repository, such as `@ovh-ux/muk`;
   - a `Button` of your app whose `color` prop is typed `ButtonColor`.

   One exception: `import * as Ods from '@/components/ods'` followed by `Ods.Button` is not followed. The report says so on that line: switch to named imports (`import { Button } from '@/components/ods'`) and run ods-migrate again.

### A monorepo with a shared UI kit

When several teams share a UI kit built on ODS (like `@ovh-ux/muk` in ovh/manager), the order depends on how ODS is installed:

- **One ODS version for the whole repository** (one lockfile at the root, the usual case): every package moves to v20 together, with one install. Run ods-migrate once, at the root. Then split the diff into one pull request per team: the "By package" block of the report gives, for each package, its files changed, markers, points to check and values for the type check. Merge them together, with the bump of step 4.
- **Each package pins its own ODS version**: migrate the kit first, in its own pull request: `ods-migrate packages/kit --write`. Then migrate each app with the kit: `ods-migrate apps/zimbra packages/kit --write`. Scanning the kit with the app is how ods-migrate learns what the kit's components do; the kit, already migrated, has nothing left to change, so the pull request only touches the app.

Do not use `--built-on-ods` for a kit whose source is in your repository: scanning its folder gives better results, because ods-migrate then reads which of its components pass the ODS props on and which have props of their own. When a marker is about a prop of the kit (for example `<Modal type={ MODAL_COLOR.critical }>`, where `Modal` is the kit's component), change the kit's component once, then the places that use it.

---

## 1. Choose the look

v20 ships the **Aluminium** look. Some defaults change: a Button without `variant` is now outlined, a Card border is grey, the page background is grey… ods-migrate produces the Aluminium look and adds nothing to keep the v19 one. **We recommend Aluminium: skip this step and run without a config.**

If the product team wants to keep part of the v19 look, open `configurator/index.html` of the ods-migrate package in a browser (it works offline). Each of the 12 visual changes is shown in v19 and v20. Pick "v19" only where you must, then click Download and put `ods-migrate.config.json` at the root of your project, where you run ods-migrate.

```json
{ "version": 1, "look": { "button-radius": "v19", "button-default-emphasis": "v19" }, "optOutCss": "src/styles/ods-v19-look.css" }
```

Each choice is applied in one of three ways:

| Choice | How the v19 look is kept | What it does |
| --- | --- | --- |
| `button-default-emphasis`, `message-default-emphasis` | Changes your JSX | adds `emphasis="high"` where no `variant` is set |
| `card-default-status` | Changes your JSX | adds `status="accent"` where no `color` is set |
| `badge-accent-filled` | Changes your JSX | `color="primary"` becomes `status="accent" emphasis="high"` |
| `divider-neutral-grey`, `spinner-neutral-grey` | Changes your JSX | adds an inline `style` with the v19 grey |
| `page-background` | Changes your stylesheets | `--ods-theme-background-color` stays white on `html`, `body`, `:root` |
| `button-radius`, `accordion-radius`, `badge-radius`, `form-field-width`, `font-family` | Adds a v19-look stylesheet | written into the file of `optOutCss` |

**The v19-look stylesheet** (for the last row) is written by `--write`:
- Its path is the `optOutCss` of the config, relative to the config file. Without it, the file is `ods-v19-look.css`, next to the config. Its folder must exist.
- Import it once, after the ODS theme, for example in your entry point:
  ```ts
  import '@ovhcloud/ods-themes/default/css';
  import './styles/ods-v19-look.css';
  ```
- **Keep it outside any CSS `@layer`**, even if your project puts every other style in a layer: the ODS theme is not in a layer, and a rule inside a layer always loses to a rule outside one. If a lint rule of your project forbids styles outside a layer, add an exception for this one generated file.

A typo in a choice id is a config error, exit 2:

```
ods-migrate: bad.json: unknown choice "buton-radius" in look (known: button-default-emphasis, …)
```

The colours: Aluminium's accent is navy, and keeping the v19 look restores a shape or an emphasis, not the v19 blue. To get the blue back, load the blue-jeans theme of ODS v20 **instead of** the default one: `import '@ovhcloud/ods-themes/blue-jeans/css'` in place of `default/css` (and `blue-jeans/tokens` in place of `default/tokens`). Load a single theme: every theme declares all its tokens, and the last one loaded wins. ods-migrate never changes the theme.

---

## 2. Dry run and read the report

```sh
ods-migrate .                                      # writes nothing
ods-migrate . --diff | less                        # the changes, as a patch
ods-migrate . --json ods-migrate-report.json       # the full report, as JSON
```

### Per file

Each file that changes is listed with its number of changes (the patch, `--diff`, shows them). Under it, one line per thing that needs a person:

| Prefix | Meaning | What you do |
| --- | --- | --- |
| `⚠ TODO(ods-v20)` | a marker it adds in your code | step 6 |
| `?` | a point to check: nothing breaks, but someone must look | see "Points to check, by kind" below |
| `type` | a value computed at runtime in TypeScript: your type check verifies it once on v20 | nothing, if the type check passes (step 5) |
| `untyped` (with `--check`) | the same in JavaScript or `// @ts-nocheck` code: nothing checks it | check its values by hand |

### The blocks at the end

Then come blocks that summarise what it found. Each one says what to do:

```
Your modules that give access to ODS (found on their own, nothing to configure):
  src/components/ods/index.ts passes ODS components on: the 4,260 files that import it are handled like files that import @ovhcloud/ods-react.
```
Information only.

```
Your components whose props take ODS values (found on their own: the values passed to them change in v20):
  src/components/button/Button.tsx: Button (variant, color): the values given to it in 12 files are handled too.
```
Information only: `<Button color="primary">` becomes `<Button color="brand">` at those places.

```
Your components built on an ODS component but with props of their own (their own code is migrated, the files that use them are not):
  src/components/ServiceStateBadge.tsx: ServiceStateBadge is built on the ODS Badge but has its own color prop. Nothing to do unless the 1 file that uses it passes color to it; if it does, choose: keep color on ServiceStateBadge, or rename it status like the ODS Badge.
```
Most of the time, nothing to do: the line says when you must act, and what to choose.

```
Imports that look like ODS but that ods-migrate could not read (left as they are; if they are ODS, your type check points at them):
  @acme/legacy-kit: BUTTON_VARIANT in 12 files. @acme/legacy-kit is an installed package, not code of the scanned folders: …
```
Do what the line says. The usual answer is to run ods-migrate from the root of your repository. For an installed package that gives access to ODS components unchanged and whose source you do not have, pass `--built-on-ods <package>` in steps 2 and 3.

```
Not migrated by this version of ods-migrate (their v20 change was not settled when it was built): migrate these by hand, as the v20 migration guide says:
  --ods-button-* tokens: 1 file concerned
```
Migrate the files it counts by hand, with the section of the v20 migration guide that the name points to. Most runs do not show this block.

```
Elements that look different in v20 with no change in your code (check them on screen, step 9 of MIGRATION.md; to keep their v19 look, use the configurator):
  18 elements in 2 files: <Button> without variant or emphasis: a Button without `variant` was filled in v19 and renders `medium` in v20: …
```
The list of what to look at in step 9, with counts. The `--json` report gives each element with its file and line (`looks`).

```
--ods-* names that ODS v19 never declared (1,735 uses of 95 names): they give their fallback value, or nothing, in v19 as in v20. Not part of the migration: nothing to do …
  --ods-color-text-muted: 327 uses in 123 files
```
Nothing to do for the migration: these names were never ODS tokens (often a name the app invented, or an ODS 17 / 18 name). `var(--ods-color-text-muted, #6b7280)` gives `#6b7280` in v19 and in v20. ods-migrate never renames them.

```
Points to check (?), by kind (each one is listed above with its file and line):
  300  colours and styles that may look different: compare the screen with v19 (step 9 of MIGRATION.md). Listed only by the run that makes the change: keep this report
  195  test mocks of ODS components: make the mock read the v20 prop, and update its assertions
   75  objects passed with {...} to an ODS component: rename the keys the line names
   15  your own components given an ODS value: check what the component does with it
```
One action per kind. The first kind is about a change the run makes (a colour token renamed to its closest v20 colour): **only the run that makes the change lists it**, so keep the report of the run that writes (step 3). The other kinds are about code that stays as it is: they are listed again on every run until you change that code.

```
By package: files changed, TODO(ods-v20) markers added, points to check, values for your type check:
  apps/web          12     3     4     1
```
Only in a repository with several packages.

### The last line

On `accessibility-test`:

```
9 files scanned (1 html, 1 manifests, 5 scripts, 2 styles), 3 to change: 99 changes, 18 TODO(ods-v20) markers added, 3 points to check, 0 values for your type check, 0 errors.
```

Read it for these warning signs before writing:
- `errors` above 0: a stylesheet could not be read (`✗ file: …` on stderr). The other files are still migrated.
- A block "Imports that look like ODS": do what its line says.
- A package listed as `left unchanged` that is in fact on ODS 19: fix its `package.json`, or pass `--from 19`.

### The JSON report

`--json <file>` writes everything, with the same words as the text: per file `changes`, `markers`, `toCheck` (each with its `kind`), `typeCheck`, `untyped`, `notOds`, `looks`; and the blocks above (`byPackage`, `notFinal`, `notOds`, `looks`, `odsModules`…). Every marker and point to check has an `id` made from its file and its text: it stays the same from one run to the next, so you can track it in a spreadsheet or a ticket.

---

## 3. Write

```sh
ods-migrate . --write --json ods-migrate-report.json
```

```
3 files written. Next: bump @ovhcloud/ods-react, @ovhcloud/ods-themes (and @ovhcloud/ods-recipes) to ^20.0.0 and install (step 4 of MIGRATION.md), then run your type check (tsc, tsgo or your build) and search for TODO(ods-v20).
```

**Keep `ods-migrate-report.json`** of this run: the points to check about colours and styles are not listed again (see step 2).

Run it a second time: it must change nothing (`0 to change … 18 already in the code`). Then commit this state alone, so that the hand fixes of the next steps stay readable in review.

When it found modules of your own built on ODS, the run also writes `ods-migrate.modules.json` where it runs, and says so. Only the ODS ESLint rules of step 7 read it. Commit it if you use those rules; delete it otherwise.

`--check` is the form for CI. It exits 1 while a file would still change or a marker is left, and 0 when the migration is done:

```
Check: 0 files to migrate, 18 TODO(ods-v20) markers in the code.   # exit 1
Check: nothing left to migrate.                                     # exit 0
```

---

## 4. Bump the packages (once v20 is released)

What ods-migrate already did in the `package.json` files it scanned (with `--write`):

| Found | Edit |
| --- | --- |
| `@shikijs/*` below 4 | `^4.3.0` |
| `@ovhcloud/ods-recipes` and a `tailwind.config.*` next to it, no `tailwindcss` | `"tailwindcss": "^3.4.18"` in `devDependencies` |
| `@ovhcloud/ods-storybook` | renamed `@ovhcloud/ods-docs` `^20.0.0`, and a `?` on each script that reads it: its build is a Vite app now |
| React 19 and a lockfile | `@types/react`, `@types/react-dom` `^19` in `pnpm.overrides`, `overrides` (npm) or `resolutions` (yarn) |
| React 19, pnpm, and a `pnpm-workspace.yaml` that declares `overrides` | a `?` instead: add them to the `overrides` of `pnpm-workspace.yaml` |
| `@types/react` below 19 on React 19 | a `?`: bump it yourself |
| `browserslist` | a `?`: ods-react 20 targets Chrome / Edge 111, Firefox 114, Safari 16.4 |

**Why the `@types/react` override**, even when your `devDependencies` already say `^19`: other packages of the install can bring their own, older `@types/react`. With two versions installed, the JSX types of the ODS components break. The override makes every package use the same one. pnpm reads overrides from `pnpm.overrides` of the root `package.json` and from the `overrides` of `pnpm-workspace.yaml`: ods-migrate writes the first, unless the second already has some.

What you do by hand:

1. Bump `@ovhcloud/ods-react`, `@ovhcloud/ods-themes` and, if used, `@ovhcloud/ods-recipes` to `^20.0.0`. ods-migrate never bumps them, and reminds you with a `?` on each `package.json` still on 19: it reads the ODS version of your code from there, so if you bump before a second run, pass `--from 19`. If the app uses Tailwind, `@ovhcloud/ods-tailwind` (Tailwind v4) replaces the ODS keys of the v19 configuration: add it, then remove those keys (a `?` says so).
2. Settle each `?` of the `package.json` files: `@types/react`, scripts that copy files out of `@ovhcloud/ods-storybook`, and the transpilation of `@ovhcloud/ods-react` if you support older browsers than the list above (Next `transpilePackages`, a `babel-loader` include on webpack, `build.target` on Vite).
3. Install, and check that one `@types/react` version is installed (`pnpm why @types/react`).

The theme imports through the package exports keep working: `@ovhcloud/ods-themes/default/css` and `/default/fonts` still exist, and `default` is now Aluminium. What changes, and what ods-migrate did (in scripts, stylesheets, Less, HTML and JSON configs, of the packages on ODS 19):

| v19 | v20 | ods-migrate |
| --- | --- | --- |
| `@ovhcloud/ods-themes/default` (the theme with its fonts as base64, removed: BC-31) | `default/css` + `default/fonts` (or `fonts-base64` where the font files cannot be served) | rewritten as the two imports (only the missing ones); marked where it cannot be split: `import()`, a bundler alias, a Sass `@use … as v` whose members are read |
| `dist/default/index.css`, `fonts.css`, `default.css`, `tokens.json` (BC-32) | `dist/aluminium/light.css`, `dist/fonts.css`, `dist/aluminium/light.css` + `dist/fonts-base64.css`, `dist/aluminium/light.tokens.json` | rewritten (two `@import` / `<link>` for `default.css`); a bare specifier gets the export path (`@ovhcloud/ods-themes/default/css`); marked where two files cannot be written (a string of a config); a folder (`dist/default/*`) is marked |
| `src/default/index`, `fonts`, `default` (Sass, BC-32) | `src/aluminium/light`, `src/fonts`, `src/aluminium/light` + `src/fonts-base64` | rewritten (the export path for a `pkg:` URL) |
| `src/default/variables` (Sass, BC-05, BC-32) | the breakpoints in `@ovhcloud/ods-react/style`, the kept palette in `src/aluminium/variables` | once the token pass rewrote the removed variables: pointed at `@ovhcloud/ods-react/style` (same namespace) when only breakpoints are read, at `src/aluminium/variables` for the kept palette, both when both are read, removed when nothing is read; marked while a removed variable is still read, and for an `@import` that the stylesheets after it may read |
| A CDN URL pinned to 19 (`ods-themes@19.7.3/dist/default/…`, and the font folder `source-sans-pro` → `source-sans-3`) | the v20 path exists only in 20 | the path and the version move together (`@20.0.0`), with a `?` |
| `import { ODS_THEME, ODS_THEMES } from '@ovhcloud/ods-themes'` (BC-33) | the theme names: `'default'`, `'aluminium-dark'`, `'blue-jeans'`, `'blue-jeans-dark'` | removed when the file does not use them, marked otherwise |
| `@ovhcloud/ods-themes/default/tokens` (BC-06) | same path, but every key is renamed, `root` gives resolved values, `refs` the `var()` | the import is marked, and so is a v19 prefix used to filter the keys (`k.startsWith('--ods-color-')`) |

---

## 5. Type check (once v20 is installed)

```sh
npx tsc --noEmit -p .     # or the type check of your project: tsgo, vue-tsc, tsc -b && vite build…
```

Sort every error into one of three groups:

1. **Under a `TODO(ods-v20)` marker** (on the line or just above): expected, step 6 resolves it. One case is known: a Button `color` with no v20 equivalent keeps `color=`, and its constant was renamed to `BUTTON_STATUS.information` / `.success` / `.warning`, which do not exist. The type check reports `TS2339 Property 'success' does not exist on type 'typeof BUTTON_STATUS'` under each of those markers (18 on `accessibility-test`). The marker says what to do: delete the attribute.
2. **A `type` line of the report**: a value computed at runtime. Nothing to do if the type check passes there; otherwise fix the value with the guide of the component (`node <checkout>/packages/ods-migrate/src/guide.mjs Button` prints its before / after).
3. **No marker anywhere near**: a place ods-migrate missed. Find its cause in [Known gaps](#known-gaps).

On `accessibility-test`, the v20 type check went from 65 errors on ODS code before the run to 36 after, all on the 18 marked lines, and to 0 after step 6.

---

## 6. Resolve each TODO(ods-v20)

```sh
grep -rn 'TODO(ods-v20)' --exclude-dir=node_modules .
```

Fix the code, then delete the marker. Every marker says what to do; the table gives the common ones.

| Marker says | What to do | Before (after ods-migrate) | After (your fix) |
| --- | --- | --- | --- |
| `BUTTON_COLOR.success has no v20 equivalent: a Button shows no status in v20 …` | ods-migrate deleted the `color=` (the Button is `brand`, its default). Pick `status="critical"` or `"neutral"` if brand does not fit, show the status with a Badge or a Message, then delete the marker. Where the value is computed (`c ? BUTTON_COLOR.success : …`), the v19 constant is kept for you to replace. | `/* TODO… */ <Button>Save</Button>` | `<Button>Save</Button>` and a `<Badge status="success">` |
| `MODAL_COLOR, …: removed in v20, delete it from this import once the places marked below no longer use it` | Resolve the other markers of the file, then delete these names from the import (your build fails on them until you do). | `/* TODO… */ import { MODAL_COLOR, Modal }` | `import { Modal }` |
| `color: holds BADGE_STATUS.information (BADGE_COLOR.information in v19), the status of an ODS Badge. Passed to an ODS Badge with {...obj}? …` | Find where the object goes. Passed with `{...obj}` to an ODS `Badge`: rename the key to `status`, because TypeScript does not report an old key there and the status would be lost. Read as `obj.color` (`<Badge status={ obj.color }>`): keep the key and delete the marker. | `{ label, /* TODO… */ color: BADGE_STATUS.information }` | `{ label, status: BADGE_STATUS.information }`, or the same object with the marker deleted |
| `MODAL_COLOR has no v20 equivalent: use your own constant, or a boolean such as isCritical; if it feeds a prop of a shared component of yours …` | Use your own constant or a boolean. When the prop belongs to a shared component (a `type` of your kit's `Modal`), change that component once, then each place that uses it. The `color` of the ODS `ModalContent` itself was already turned into `role`. | `type={ /* TODO… */ MODAL_COLOR.critical }` | `isCritical` |
| `<Table variant={…}> is removed …` / `TableVariant has no v20 equivalent` | Use the boolean `striped`. | `<Table /* TODO… */ variant={ tv } />` | `<Table striped={ tv === 'striped' } />` |
| `<ModalContent color={…}> is removed …` | Pass `role="alertdialog"` for a critical dialog. | `color={ c }` | `role={ isCritical ? 'alertdialog' : undefined }` |
| `<Spinner color={…}>` / `<Divider color={…}>` is removed | Delete the prop. To keep the v19 grey, set it through a `className`. | `<Spinner /* TODO… */ color={ c } />` | `<Spinner />` |
| `<Tooltip positionerStyle={{ zIndex }}>: check this stacking: …` | The ODS overlays get new z-index values: v19 dropdowns 99, modal 100, drawer 101; v20 sticky 100, dropdowns 200, drawer 300, modal 400. A drawer now sits under a modal. Check what your element must sit above, keep or change the number. A value below 99 or above 400 keeps its place against every ODS overlay and gets no marker. | `zIndex: 250` | `zIndex: 450` (it must cover the modal), marker deleted |
| `--ods-color-neutral-200: v20 names colours by what they paint: pick the one for this place. Most likely here (a border): …` | v19 colour steps had no meaning; v20 colours are named by what they paint. Take the "most likely" value unless the colour paints something else (see the colour names below). The last option keeps the exact v19 colour whatever the theme. | `box-shadow: 0 0 0 1px var(--ods-color-neutral-200)` | `box-shadow: 0 0 0 1px var(--ods-semantic-color-border-neutral-subtle)` |
| `--ods-theme-*-disabled: disabled is an opacity in v20` | Remove the colour. To dim like ODS, use the opacity token on `:disabled` / `[data-disabled]`. | `color: var(--ods-theme-text-color-disabled)` | `opacity: var(--ods-semantic-opacity-disabled)` |
| `--ods-color-success-300 has no v20 equivalent as a text: pick another v20 colour …` | Pick another v20 colour (below), or write your own value. | `color: var(--ods-color-success-300)` | `color: var(--ods-semantic-color-content-success)` |
| `A and B both become C in v20: keep one value` | Two v19 names now have one v20 name (a theme object, a rule): keep one declaration. | duplicate key `'--ods-semantic-color-content-text'` (TS1117) | one key |
| `--ods-border-radius-xs: removed, v20 has no radius below … (4px)` | Write `2px`, or use the closest radius token. | `var(--ods-border-radius-xs)` | `2px` |
| `token name built at runtime: map each value by hand` | The name is built with `${x}` / `#{…}`: replace it with a lookup of full v20 names. | `` `var(--ods-color-${s}-500)` `` | `TOKENS[s]` with full v20 names |
| `button--default: it also matched every Button without variant` | Internal classes are not an API: select `[data-ods="button"]` and the component props. | `[class*="button--default"]` | `[data-ods="button"]` plus a prop |
| `<Wrapper> declares its own color, typed never on Card in v20` | Rename your prop, or leave ODS's out with `Omit<…, 'color'>`. | `interface P extends CardProp { color: … }` | `Omit<CardProp, 'color'> & { tone: … }` |
| `<Switch> has no v20 equivalent: ods-migrate rewrites a <Switch> written with its items to <Tabs variant="switch"> …, not this one` | The Switch is removed. ods-migrate rewrote every Switch whose items it could see; this one it could not (no item written out, an item with its own `disabled`, a Switch inside a Switch, a wrapper of your app, the `/switch` entry point). Write it as the others: `<Tabs variant="switch">`, a `<TabList>` around the items, each `<SwitchItem>` a `<Tab>`, `disabled` on each `<Tab>`. Or pick a single-select ButtonGroup (a mode with no view) or a RadioGroup (a form value). | `{/* TODO… */}` `<Switch value={ v }>{ items }</Switch>` | `<Tabs value={ v } variant="switch"><TabList>{ items }</TabList></Tabs>`, with `<Tab>` items |
| `<SelectControl className>`: the field width now lives on the root | Move the width class or style to the root (`<Select>`, `<Combobox>`…). | `<SelectControl className="w-64" />` | `<Select className="w-64">` |

### The v20 colour names

v19 had colour steps (`--ods-color-primary-300`); v20 names a colour by what it paints and what it means: `--ods-semantic-color-<what>-<meaning>[-<strength>]`.

- **What it paints**: `surface` (a background), `border`, `content` (a text or an icon). `content-on-solid` is a text on a filled background (light on dark). `surface-page` is the page background, `surface-raised` a panel on it (white).
- **Meaning**: `brand` (the main action), `accent` (highlights, "New" badges), `information`, `success`, `warning`, `critical`, `neutral`.
- **Strength**: none, `subtle`, `minimal`, `strong`.

v19 "primary" meant two things that v20 separates: the main action (`brand`) and highlights (`accent`). Where v20 has no exact equivalent of a v19 step, ods-migrate takes the closest v20 colour and adds a point to check. For example, a light primary border (`--ods-color-primary-300`) becomes `border-information-subtle`: v20 has no light brand border, and the light information border is the closest blue. Compare it on screen; keep it, or write the colour you want. The full list is in the "Design tokens" guide of the ODS documentation.

When no marker is left, `ods-migrate . --check` exits 0 (`Check: nothing left to migrate.`) and the type check of step 5 is clean on ODS code.

---

## 7. Keep the checks in CI (once v20 is installed)

**Every project**: keep `ods-migrate . --check` in CI until the next major. It fails while a file would still change or a marker is left, and it stops the v19 API from coming back.

**If you lint with ESLint and stylelint**, the ODS rules also flag what ods-migrate missed, in the editor. Pass the same `look` as the config, so that `--fix` matches ods-migrate:

```js
// eslint.config.js
import ods from '@ovhcloud/ods-migrate/eslint-plugin';
import config from './ods-migrate.config.json' with { type: 'json' };   // without a config (Aluminium), drop this line and the `look` options

export default [{
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: { ods },
  rules: {
    'ods/v20-migration': ['error', { look: config.look }],   // your own modules built on ODS: read from ods-migrate.modules.json (step 3)
    'ods/v20-tokens': ['error', { look: config.look }],
    'ods/v20-default-changed': 'warn',   // optional: lists the elements whose default look changed (step 9)
  },
}];
```

```js
// stylelint.config.mjs (add customSyntax: 'postcss-scss' for SCSS)
export default {
  plugins: ['@ovhcloud/ods-migrate/stylelint-plugin'],
  rules: { 'ods/no-removed-token': true, 'ods/no-control-width': true },
};
```

```sh
npx eslint .
npx stylelint '**/*.{css,scss}'
ods-migrate . --check
```

**If you lint with Biome, or another tool**: there are no ODS rules for it. `ods-migrate . --check` in CI covers the same ground; delete `ods-migrate.modules.json`, which only the ESLint rules read.

On `accessibility-test` after step 3, ESLint reported 36 errors for the 18 Button markers (2 per marker) and 41 `v20-default-changed` warnings; after step 6, 0 errors and 29 warnings. stylelint reported nothing (all tokens were migrated).

---

## 8. Regenerate the snapshots (once v20 is installed)

`.snap` files are counted, never rewritten. The report says how many v19 tokens and internal classes they hold:

```
1 v19 tokens and 1 internal classes in 1 test snapshots (*.snap): they follow the code, regenerate them (jest -u, vitest -u) once it is migrated.
```

Once the code type-checks and the tests run:

```sh
npx vitest run -u      # or: npx jest -u
git diff -- '*.snap'   # review: the class and token names must be v20 ones
```

Do not regenerate before step 6: the snapshots would freeze a half-migrated rendering. `--ods-*` names that ODS v19 never declared do not go away by regenerating: they come from your code.

---

## 9. Visual check

Code checks cannot see these. Open each screen in v19 (your main branch) and v20 (this branch), side by side. The report's block "Elements that look different in v20 with no change in your code" counts the elements of the first rows, per component, and the `--json` report lists them by file and line (`looks`).

| What changes in Aluminium | Where to look |
| --- | --- |
| A Button without `variant` was filled, it is now outlined (`medium`) | every main action: make it `emphasis="high"` if it must stand out |
| A Message without `variant` was tinted, it now renders `medium` | banners, inline alerts |
| A Card without `color` had a primary border, it is now neutral grey | cards, tiles |
| `Badge color="primary"` was filled, `status="accent"` is subtle (light background, border) | status badges, "New" badges |
| Badge is a pill with a 1px border (was a 4px rounded rectangle) | tables, lists |
| Button radius is 4px for every size (was 2 / 4 / 8px) | small buttons, icon buttons |
| Accordion outer corners are 8px (were 4px) | accordions |
| Form fields are 280px wide by default, capped at 100 % (were full width) | forms, filters, Select and Combobox in layouts that relied on stretching |
| Divider and Spinner have no `color`: one light Divider, one accent Spinner | separators, loaders that were grey |
| The page background (`html`, `body`, `:root`) is grey (`surface-page`), panels stay white | the page shell, full-width sections |
| Font family is declared as 'Source Sans 3' (same files) | any own `font-family: 'Source Sans Pro'` |
| Disabled is an opacity, not a grey colour | disabled buttons, inputs, custom disabled styles |
| Overlays get new z-index values: a drawer now sits under a modal | drawers that open a modal, custom z-index on popovers, sticky headers |
| Buttons that showed an information, success or warning status are gone or neutral | step 6 choices |
| Edge no longer shows its own reveal button on password fields | login, settings |
| The Switch is gone: ods-migrate made each one a Tabs `variant="switch"` (the default replacement). A Switch with no `value` nor `defaultValue` is a point to check: Tabs warns in the console without a selection, set `defaultValue` to the first item if the page started on it. A team that wants a single-select ButtonGroup (pick a mode with no view) or a RadioGroup (pick a form value) changes the Tabs after the run | every former Switch: `grep -rn 'variant="switch"'` |
| The colours of the points to check "colours and styles that may look different" | the files of those lines |

Beyond these, the component stylesheets changed widely between v19.7.3 and v20: on `accessibility-test`, 76 of the 124 ODS elements it renders use a component whose styles changed (Message, Tab, Datepicker, Badge, Button, Input…). Check each screen, not only the list above.

---

## 10. Done when

- [ ] `ods-migrate . --check` exits 0: `Check: nothing left to migrate.`
- [ ] `grep -rn 'TODO(ods-v20)' --exclude-dir=node_modules .` prints nothing.
- [ ] The type check passes, with no error left on ODS code.
- [ ] ESLint and stylelint pass with the rules of step 7 as errors, if you use them.
- [ ] Every `?` and `untyped` line of the write-run report was read and settled.
- [ ] `@ovhcloud/ods-*` are on `^20`, a single `@types/react` is installed, the app builds.
- [ ] Snapshots are regenerated and their diff reviewed.
- [ ] The visual check is done on every screen, with the product team's sign-off for each look change.
- [ ] Your own docs no longer show v19 code. ods-migrate does not read Markdown: find what to update with
  ```sh
  grep -rnE '[A-Z]+_(COLOR|VARIANT)S?\b|--ods-(color|theme)-' --include='*.md' --include='*.mdx' --exclude-dir=node_modules .
  ```
  Edit your own pages. Copies of ODS documentation kept in your repository (an `llms-full.txt`, pages copied from the ODS site) are not yours to edit: replace them with their v20 version, or delete them.

On `accessibility-test`, the full procedure took one write run and deleting the 18 marked Buttons, and gave: `--check` exit 0, 0 v20 type errors on ODS code (the 2 that remain were there in v19), 0 ESLint errors, 0 stylelint problems.

### Planning the work

ods-migrate does not estimate time: the ODS team has measured it on one small app only (`accessibility-test`, above), which is not enough to give a cost per item. To size the work of each team, use the "By package" block (or `byPackage` in the `--json` report) and these rules of thumb on what each item asks for:

- **A marker**: read it, make a small edit in the same file. The longest are the object keys (`color: holds BADGE_STATUS…`), where you follow the object to see where it goes.
- **A component with props of its own** (step 2): usually nothing; otherwise one decision on its v20 API, then the places that pass it the changed prop.
- **A point to check about colours, and the elements that look different**: a review of the screens with the product team, not code work.
- **A test mock**: a small edit of the mock and its assertions.
- **A `type` line**: nothing, unless the type check fails there.

---

## Known gaps

Measured on the coverage runs (`packages/examples`, `ods-recipes`, the ODS Storybook, ovh/manager). "Not done yet" = ods-migrate could do it and does not yet; "needs a person" = a person must decide. Most of them show up as a type error with no marker nearby (step 5).

### Wrong changes (the code changes, but is wrong)

| What happens | Seen | What you do |
| --- | --- | --- |
| A Button `color` with no v20 equivalent keeps `color=` under its marker, but the constant becomes `BUTTON_STATUS.information` / `.success` / `.warning`, which do not exist (TS2339 under each marker). | 18 examples, 9 Storybook, 2 manager | Resolve the marker as in step 6: delete the attribute. Do not read the TS2339 as a new problem. |
| An installed package that gives access to ODS components, whose source ods-migrate cannot read (only its build is installed): its importers are not migrated. | 0 on the measured code | The report lists it under "Imports that look like ODS": pass it with `--built-on-ods`. |
| An ODS type is renamed (`BadgeColor` → `BadgeStatus`), but a string reaches it through a variable or a function that is not typed where the string is written (`const tone = 'primary'; <Badge color={ tone }>`, a helper that returns `'default'`). The strings typed where they are written are migrated: `let color: BadgeColor = 'primary'`, the props of your components typed with an ODS type and their defaults. No marker. | 0 on the measured code | Map the strings by hand: `primary` → `accent` (Badge, Card, Message, Tag) or `brand` (Button), `default` → `high`, `outline` → `medium`, `ghost` → `low`. |
| A component of yours builds a class name or a key from a prop typed with an ODS type (`` `button-link--${variant}` ``): its values are migrated (`default` → `high`), so the class name changes. | 2 components (manager) | A point to check says so: rename the classes of your stylesheet (`.button-link--default` → `.button-link--high`), or map the value back where you build the name. |
| `Pick<TableProp, 'size' \| 'variant'>` becomes `Pick<TableProp, 'size'>`, but a `variant` taken out of the props next to it stays (TS2339). | 1 (manager) | Remove `variant` there and use `striped`. |
| An object key `'--ods-color-primary-500'` is renamed, but the lookups `tokens['--ods-color-primary-500']` are only marked: at runtime they read a key that no longer exists. | 1 (Storybook) | Rename the lookups to the same v20 name as the key. |
| A custom property of your app named `--ods-…` (such as `--ods-recipe-*`) is read as an override of the ODS theme: its colour goes to the raw palette with a note, not to a v20 colour name. The colour is the same, but it no longer follows the theme. | 2 (recipes) | Use the v20 colour name, or rename your property out of the `--ods-` prefix. |

### Missed places (nothing changed, no marker)

| Cause | Kind | Seen | What you do |
| --- | --- | --- | --- |
| Your components built on an ODS component with props of their own (they declare, leave out or default a prop that changes, such as `Omit<BadgeProp, 'color'>` or `variant = 'ghost'`). ods-migrate migrates their own code, not the places that use them, and lists them in the report. Those that pass all their props on to the ODS component are migrated with the places that use them. | needs a person | 11 (manager) | Decide the v20 API of the component, then rename its props where it is used. |
| `import * as ODS from '@ovhcloud/ods-react'`, then `ODS.BUTTON_COLOR.x`, `<ODS.Button variant>`. | not done yet | 4 (Storybook) | Switch to named imports, run ods-migrate again. |
| Indexed types `Parameters<typeof Badge>[0]['color']`: the key `'color'` is not renamed. | not done yet | 32 (manager) | Write `BadgeProp['status']`, or `ComponentProps<typeof Badge>['status']`. |
| Conditional objects passed with `{...}`: `{...(cond && { color: x })}`. | not done yet | 4 (manager) | Rename the key (`status`), or drop it for a removed prop (ModalContent: use `role`). |
| `variant={ a.variant ?? 'ghost' }`: the string is mapped (`'low'`) but `a.variant` still holds v19 values. No marker. | not done yet | 2 (manager) | Map the source of `a.variant` too. |
| A removed export stays in the import line with no marker (`MODAL_COLOR`, `TABLE_VARIANT`, `SPINNER_COLOR`); its uses are marked. | not done yet | 36 (manager) | Remove it from the import once you resolve the uses. |
| Removed `*_COLORS` / `TABLE_VARIANTS` arrays kept in the import because their use is marked (Storybook `options:`). | not done yet | 3 (Storybook) | Same: resolve the use, remove it from the import. |
| Storybook `globals.imports` and code samples written as strings still name `BUTTON_COLOR`, `MODAL_COLOR`… | not done yet | 20 (Storybook) | Edit the strings by hand. |
| `.md` / `.mdx` docs (`MESSAGE_COLOR.information`, `--ods-color-success-500` in code samples and text). | not done yet | 4 (recipes), 45 `.mdx` files (Storybook) | Step 10. |
| `@ovhcloud/ods-themes/default/tokens` JSON read through a variable key: the import is marked, the reads are not. | not done yet | not measured | Rename each key read (`--ods-semantic-*`, `--ods-palette-*`). |
| Bare theme variables (`$ods-color-*`) in a Sass partial that reaches the theme through the `@import` of another file or the bundler's `additionalData`: left as they are. The import of the theme is marked. | not done yet | 0 on the measured code | Rewrite them as in the file that imports the theme, or read the CSS custom properties. |
| `arg.variant` read from an object typed with ODS props (`Partial<MessageProp>`): the attribute becomes `emphasis={ arg.variant }`, the read stays. | needs a person | 1 (Storybook) | Rename the key in the type and its values (`default` → `high`, `light` → `medium`). |
| A local `Table` component that takes `TableProp`: its use is marked, the `TABLE_VARIANT` import stays. | needs a person | 3 (Storybook) | Decide its new API (`striped`), then remove the import. |
| A component typed `React.ButtonHTMLAttributes` passed with `{...}` to a `*Trigger`: v20 triggers take `value?: string` only. | needs a person | 4 (manager) | `Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> & { value?: string }`. |
| A local variable named like an ODS export it hides is renamed too. | not done yet | not measured | Review the diff of files that declare a variable with an ODS name. |
| A file tracked by git inside a folder your `.gitignore` ignores is skipped. | by design | not measured | Pass that folder explicitly. |
| A syntax error in a script is not reported (scripts are read in a tolerant way). | by design | 0 on 6,498 manager files | Rely on your type check or your build. |

### Markers placed away from the error

Not a defect of your code: the marker exists, but the type check reports the error elsewhere. Look for the marker on the enclosing declaration or the function called.

- Multi-line CSS values (`linear-gradient` over 4–6 lines): one marker above the declaration.
- Multi-line Tailwind `className` template: one marker before `className=`, up to 18 lines above the token.
- Helper functions returning `{ color: BADGE_COLOR.x }`, passed with `{...getProps()}` to `<Badge>`: the marker is in the helper, the error on the JSX.
- Comments and text that name v19 tokens are left alone on purpose; rename them if you want the search of step 10 to be clean.

Markers are written inline, where the problem is (inside a JSX attribute or an object), so that each one sits on the code it is about, and so that the type check error and the marker share a line. A formatter (Prettier, Biome) may move them to lines of their own: that is fine, ods-migrate still recognises them on the next run and adds no second one.
