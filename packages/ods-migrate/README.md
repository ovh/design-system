# @ovhcloud/ods-migrate

Moves the code of an app from ODS v19 to ODS v20.

> **Not published yet** (version 0.0.0), and ODS v20 is not released yet. Until then, run it from a checkout of the design-system repository whose dependencies are installed: `node <checkout>/packages/ods-migrate/src/cli.mjs`. Once published: `npx @ovhcloud/ods-migrate`.

**To migrate an app, follow [MIGRATION.md](MIGRATION.md)**: the full procedure, step by step, with what each line of the report means and what to do about it. This README is the reference of the package.

| What | File | What it does |
| --- | --- | --- |
| The command | `src/cli.mjs` | Changes your code, stylesheets and `package.json` files. Writes nothing without `--write`. |
| ESLint rules | `src/eslint-plugin.mjs` | `ods/v20-migration` (components), `ods/v20-tokens` (design tokens in scripts), `ods/v20-default-changed` (optional): flag what the command missed and stop the v19 API from coming back; `--fix` gives the same result as the command. |
| stylelint rules | `src/stylelint-plugin.mjs` | `ods/no-removed-token` (the same for CSS and SCSS, fixable) and `ods/no-control-width`. |
| Configurator | `configurator/index.html` | A page that shows the v19 and v20 look of each visual change and downloads `ods-migrate.config.json`, for a team that keeps part of the v19 look. |
| Guide | `src/guide.mjs` | Prints the before / after code of each component (`node src/guide.mjs Button`). The "after" is the output of the command, so the guide and the tool cannot disagree. |

By default, **ods-migrate produces the v20 look (Aluminium) and adds nothing to keep the v19 look**. What has no v20 equivalent is never guessed: ods-migrate writes a `TODO(ods-v20)` comment that says what to do, the lint rules report it, and the guide shows the v20 way.

## Usage

```
Usage: ods-migrate <path...> [--write] [--diff] [--check] [--json <file>] [--config <file>]
                    [--from <major>] [--built-on-ods <package>...]
```

Run it from the root of your project or repository: `ods-migrate .` (dry run), then `ods-migrate . --write`.

| Option | What it does |
| --- | --- |
| *(none)* | Dry run: prints, per file, the number of changes and what needs a person (the `TODO(ods-v20)` markers it would add, the points to check, the values for your type check), then the summary blocks and one summary line. Writes nothing. |
| `--write` | Writes the changes (and the v19-look stylesheet of the config, see below). |
| `--diff` | Also prints the changes as a patch, file by file. |
| `--check` | For CI. A dry run that also lists the markers already in the code and the values of untyped files (`untyped`). Exits 1 while a file would still change or a `TODO(ods-v20)` marker is left. Cannot be combined with `--write`. |
| `--json <file>` | Also saves the full report as JSON (below). The target is checked (its folder exists and is writable) before anything is written. |
| `--config <file>` | The file the configurator downloads. Default: `ods-migrate.config.json` of the folder ods-migrate runs from, when it exists (the report says it used it); without it, Aluminium. A config next to the scanned folders, or above them, is not read: the report says so. |
| `--from <major>` | The ODS version your code is written for: `19` or `20`. Only needed when `@ovhcloud/ods-react` was bumped to 20 before running ods-migrate: then pass `--from 19`. It also migrates the packages that declare ODS 17 or 18, which are skipped otherwise. Default: read, per file, from the nearest `package.json` that declares `@ovhcloud/ods-react` (or a UI kit built on it); unknown → 19. Code read as ODS 20 gets none of the v19-look additions of the config, with a warning per `package.json`. |
| `--built-on-ods <package>` | An installed package that gives access to ODS components unchanged (same names, same props), whose source is not in the scanned folders: its importers are migrated like importers of `@ovhcloud/ods-react`. **Only when the report asks for it**: your own modules and the UI kits of your repository are found on their own. Repeat it for several. Its former names, `--treat-as-ods` and `--also`, still work (hidden from the help) and print one line saying to use the new one. |
| `-h`, `--help` | The usage. |

Exit codes: **0** done; **1** `--check` found work left; **2** an error: a usage error (unknown option, missing value, a `--from` other than 19 or 20), a config error, a path that does not exist or cannot be read, or a file that failed (listed as `✗ file: …` on stderr and in the report with `errorCode` `PARSE`, `INTERNAL` or `READ`). The other files are still migrated. An error prints one line; `DEBUG=ods-migrate` adds the stack.

`PARSE` covers the stylesheets only. Scripts are read in a tolerant way (ast-grep, tree-sitter): a syntax error in a script is not detected, and the code around it is migrated as it reads. This is on purpose: tree-sitter also recovers on valid TypeScript it does not fully know (31 files of ovh/manager), which must still be migrated. Run your type check or your build on the result.

### Your own modules built on ODS: found on their own

Many projects do not import `@ovhcloud/ods-react` directly but through code of their own. ods-migrate finds that code before migrating, and migrates the files that use it like files that import `@ovhcloud/ods-react`. There is nothing to configure.

- **What it finds**:
  - a module that passes ODS on: `export * from '@ovhcloud/ods-react'`, `export { Badge } from '@ovhcloud/ods-react'`, or an import exported again; also a module that passes on another such module;
  - a component that takes the props of an ODS component and passes them on to it: `GuardedButton`, whose props extend `ButtonProp` (also `FC<MessageProp>`, `ComponentProps<typeof Button>`, `Omit<…>`, `&`);
  - a props type built on an ODS one (`type KitBadgeProps = BadgeProp & {…}`).

  Only the names that come from ODS count: a module's own `Button` is never taken for the ODS one.
- **However it is imported**: relative paths (`./ods`, `../../components/ods`, `./ods.js`), the `paths` and `baseUrl` of tsconfig.json / jsconfig.json (the nearest one, with its `extends` and the projects it lists in `references`), the `imports` of package.json (`#ods`), and the packages of the repository (a `package.json` `name` in the scanned folders, or a `node_modules` link to source outside `node_modules`; an entry in `dist/` leads to its `src/` source).
- **A component with props of its own** is not followed: one whose props declare or leave out a prop that changes (`color`, `variant`…), give it their own default, or do not pass it on to the ODS element. Its own code is migrated, the places that use it are not, and the report lists it with what to do. It gets no v19-look addition of the config: its inner ODS element does.
- **A component whose props take ODS values**: a component that declares a prop with an ODS type whose values change (`color?: ButtonColor`, `variant?: ButtonVariant`), or a prop that takes ODS props (`actionButton?: Pick<ButtonProp, 'variant'>`, `Partial<BadgeProp>`). The type is renamed (`ButtonColor` → `ButtonStatus`), the component keeps its prop names, and the values follow: what the places that use it pass (`<Button color="primary">` → `color="brand"`, `actionButton={{ variant: 'ghost' }}` → `{{ emphasis: 'low' }}`) and its own defaults (`variant = 'default'` → `'high'`), wherever they import it from. A value with no v20 equivalent is marked. Where the component builds something from the value (`` `button-link--${variant}` ``, a class name), the report adds a point to check: that class now ends in `high`. Props are read through `interface … extends`, `&`, `|`, `Omit`, `Pick`, `Partial`, `PropsWithChildren`, a local alias, a helper that keeps the keys (`DeepReadonly<…>`), and the component through `function`, `FC<P>`, `forwardRef<R, P>`, `memo`.
- **Packages on an older ODS are left unchanged**: a file whose nearest `package.json` declares only ODS 17 or 18 (every `@ovhcloud/ods-*` dependency) is not migrated: its theme has none of the v20 names. The report says it in one sentence per package (`apps/ips uses ODS 18: left unchanged. Migrate it to ODS 19 first (…), then run ods-migrate on it.`). A package on 19 or 20, a range that names no version (`workspace:*`, `catalog:`, `*`), a `package.json` without ODS and a file under no `package.json` are migrated. `--from 19` migrates them anyway. The ESLint and stylelint rules leave the same packages alone.
- **`ods-migrate.modules.json`**: the ESLint rules lint one file at a time and cannot look at the whole project, so `--write` writes what ods-migrate found into this file, in the folder it runs from, and says so: the modules that give access to ODS (paths relative to the file, with the components of each one whose props take ODS values), those components per file (for their defaults), the packages of the repository and the `--built-on-ods` packages. The rule `ods/v20-migration` reads it from the folder ESLint runs from (option `modules` for another path, `false` for none), so that `--fix` gives the command's result with no option. Each `--write` writes it again; a file of that name that ods-migrate did not write is never overwritten (the report says so). Commit it if you use the ESLint rules; otherwise delete it. One list, built once by the command and read by every rule: the rules never guess.

### What it scans

- `.js .jsx .ts .tsx .mjs .cjs .mts .cts`: the components, then the design tokens of what that pass wrote. Line numbers always refer to the file on disk.
- `.css .scss`: the design tokens, then the theme paths (below). The v19-look stylesheet that ods-migrate writes (the `optOutCss` path of the config, or any stylesheet that starts with its header) is never migrated: it holds the v19 look on purpose.
- `.less`: as `.scss` when the file reads as CSS (no mixin call, no guard); otherwise a `// TODO(ods-v20)` marker on each line that reads a v19 token, with its v20 name when the name alone says it. Indented `.sass`: markers only, the same way. The theme paths are rewritten in both.
- `.html`: `<style>` blocks, `style="…"` and `class="…"`, the theme paths of `<link>`; what cannot be changed is a point to check (an HTML file gets no marker).
- `.json` other than `package.json` and the lockfiles, only when it names a theme path or a v19 token: the theme paths of a copy or alias config, and the JSON a 19.x Theme Generator exports (`{ "--ods-…": value }`), whose keys are renamed as a theme object of a script (a point to check for the rest: JSON takes no comment).
- `package.json`: the dependencies (below).
- `.snap` (Jest, Vitest): counted, never changed: they follow the code, regenerate them (`jest -u`, `vitest -u`) once it is migrated. Only names that ODS v19 declared and the internal classes are counted; other `--ods-*` names are counted apart, since regenerating does not remove them.

It follows the `.gitignore` files of the scanned folders and of the folders above them up to the root of the git repository (patterns, `!`, `dir/`, anchored `/x`, `**`, read by hand: no git call). It never enters `.git`, `node_modules`, `dist`, `build`, `coverage`, `storybook-static`, `.next`, `out`, `.turbo`, `.vite`, `.cache`, `.nx`, `.output`, `.docusaurus`, and skips `*.min.js` and `*.d.ts`. Symbolic links met on the way are not followed; a path given on the command line is always read. A file tracked by git inside an ignored folder is skipped (ods-migrate does not ask git what is tracked): pass that folder explicitly.

### The report

The text report has three parts:

1. **Per file**: the file, its number of changes and markers, then one line per thing that needs a person: `⚠ TODO(ods-v20)` a marker added, `?` a point to check, `type` a value computed at runtime that the type check verifies, and with `--check`, `untyped` (the same in untyped code) and the markers already in the code. The changes themselves are in the patch (`--diff`) and in `--json`.
2. **Blocks**: your modules that give access to ODS; your components whose props take ODS values; your components built on an ODS component with props of their own; imports that look like ODS but could not be read; packages on ODS 17 / 18; changes this version leaves out (none for the component API); elements that look different with no code change; `--ods-*` names that ODS v19 never declared (not counted as points to check); the points to check by kind, each with one action; the work per package (when there are several). Each block that shows part of a list says what the `--json` report holds beyond it.
3. **The summary line**: files scanned (per kind), files changed, changes, markers added, markers already in the code, points to check, values for your type check, values in untyped files, errors. A file that only gets markers counts as changed.

`--json` (version 3) uses the same words:

```json
{ "version": 3, "mapping": "19 → 20", "config": { "file": null, "look": { "button-default-emphasis": "aluminium", "…": "aluminium" } }, "from": null, "scanned": 5966, "markersBefore": 0,
  "summary": { "filesChanged": 632, "changes": 1886, "markersAdded": 178, "markerItems": 182, "toCheck": 140, "typeCheck": 75, "untyped": 0, "looks": 296, "notOds": 78, "errors": 0,
               "toCheckByKind": { "look": 32, "mock": 17, "spread": 46, "component": 44, "other": 1 } },
  "files": [{ "file": "apps/web/src/App.tsx", "package": "apps/web", "changed": true, "markersAdded": 1, "from": 19,
              "changes": [{ "line": 3, "message": "…" }],
              "markers": [{ "id": "3f2a9c1b04", "line": 8, "message": "…" }],
              "toCheck": [{ "id": "a81c0e77d2", "kind": "look", "line": 12, "message": "…" }],
              "typeCheck": [], "untyped": [], "looks": [{ "line": 20, "message": "…" }], "notOds": [], "existingMarkers": [] }],
  "byPackage": [{ "package": "apps/web", "filesChanged": 12, "markersAdded": 3, "toCheck": 4, "typeCheck": 1 }],
  "snapshots": { "files": 26, "tokens": 194, "classes": 629, "unknown": 166 },
  "manifest": [{ "file": "package.json", "changes": [], "toCheck": [] }],
  "optOutCss": null,
  "builtOnOds": [],
  "olderOds": [{ "package": "apps/ips", "major": 18, "files": 389 }],
  "notFinal": [{ "name": "Switch", "files": 5 }],
  "looks": [{ "component": "Button", "elements": 1562, "files": 971, "message": "<Button> without variant or emphasis: …" }],
  "notOds": [{ "name": "--ods-color-text-muted", "uses": 327, "files": 123 }],
  "odsModules": [{ "file": "src/components/ods/index.ts", "importers": 4260, "modules": 3, "names": 522, "reexports": true, "star": false, "wrappers": [] }],
  "typedComponents": [{ "file": "src/components/button/Button.tsx", "name": "Button", "props": ["variant", "color"], "users": 12 }],
  "odsModulesNotFollowed": [{ "file": "src/StatusBadge.tsx", "name": "StatusBadge", "component": "Badge", "kind": "own", "props": ["color"], "reason": "its props declare or omit color", "importers": 3 }],
  "odsLookalikes": [{ "specifier": "@acme/legacy-kit", "file": null, "files": 12, "installed": true, "package": "@acme/legacy-kit", "names": ["BUTTON_VARIANT"] }],
  "modulesFile": "ods-migrate.modules.json" }
```

- `markers`, `toCheck`, `typeCheck`, `untyped`: one entry per item, sorted by line. Two marker items on the same line share one comment, so `summary.markerItems` can be higher than `summary.markersAdded`.
- `id`: made from the file and the text of the item, so it stays the same from one run to the next (a second identical item of the file gets `-2`).
- `toCheck[].kind`: `look` (colours and styles that may look different, listed only by the run that makes the change), `mock` (test mocks), `spread` (objects passed with `{...}`), `component` (your components given an ODS value), `package` (package.json and tooling), `other`.
- `looks`: the elements without the prop whose default look changes in v20 (Button, Message, Card), unless the config keeps their v19 look.
- `notOds`: the uses of `--ods-*` names that ODS v19 never declared: not migration work.
- `notFinal`: the files that the changes this version leaves out (`pending` entries) would concern.
- A failed file has `error` (the message) and `errorCode`. In `odsModules`, `importers` counts the scanned files that import the module, without the modules that pass it on (`modules`) and without the files left unchanged. `olderOds` lists the packages left unchanged (`files`: their scanned files). In `typedComponents`, `users` counts the files that import the component's file, or a module that passes it on and name it. `from` is the `--from` value, or `null` when it is read per file.

Version 2 (before this release) called `markers` `todos`, `toCheck` `notes` and `typeCheck` `typed`, and had no `notOds` (those notes were points to check).

### package.json

`src/manifest.mjs` edits the dependency values and keys in place (formatting, indentation and CRLF kept). Each rule was checked against the `package.json` files of v19.7.3 and of the v20 preview.

| Rule | Edit | Otherwise |
| --- | --- | --- |
| `@shikijs/*` below 4 (ods-react 20 highlights code with Shiki 4.3; languages and themes come from the same major) | `^4.3.0` | |
| `@ovhcloud/ods-recipes` without `tailwindcss` (ods-recipes 19 installed `tailwindcss` 3.4.18, 20 no longer does) | `"tailwindcss": "^3.4.18"` in `devDependencies` when a `tailwind.config.*` sits next to the `package.json` | a point to check |
| `@ovhcloud/ods-storybook` | renamed `@ovhcloud/ods-docs` `^20.0.0`, with a note: its build is a Vite app, not a Storybook build | a note on each `scripts` entry that reads it |
| React 19 (declared, or declared in the repository for a root `package.json`) | `@types/react` and `@types/react-dom` `^19` under the key of the lockfile next to it: `overrides` (npm), `resolutions` (yarn), `pnpm.overrides` (pnpm), so that every package of the install uses the same React types | a note without lockfile, or when a `pnpm-workspace.yaml` next to it declares `overrides` (add them there); a note for a `@types/react*` below 19 |
| `browserslist` or `.browserslistrc` | | a note: ods-react 20 is built with Vite 8 (Chrome / Edge 111, Firefox 114, Safari 16.4) |
| `react-components-gallery.txt`, `react-components-icon--gallery.txt` in any scanned file | | a note: removed from the llms documentation |
| `@ovhcloud/ods-react`, `ods-themes`, `ods-recipes` on 19 | | one note per `package.json`: bump them to `^20.0.0` after reviewing the diff (ods-migrate reads the ODS version of the code from there: if you bump first, run it with `--from 19`) |
| `tailwindcss` 4 next to ODS 19, without `@ovhcloud/ods-tailwind` | | a note: v20 ships `@ovhcloud/ods-tailwind` (Tailwind v4): add it and remove the ODS keys of the v19 `@theme` (BC-30). On Tailwind 3, a run that renames the ODS keys of a `tailwind.config` says it once |

React itself, ODS and the other packages are not bumped: ods-migrate migrates the code, the team bumps the versions.

## The configurator and `ods-migrate.config.json`

Open `configurator/index.html` in a browser (it is self-contained and works offline: double-click it, or serve the folder). Each visual change of v20 is shown with its v19 and v20 look; keep the recommended Aluminium, or pick the v19 look. The page downloads `ods-migrate.config.json`: put it at the root of your project, where you run ods-migrate (it reads it there only), or pass it with `--config`. "Load an existing config…" keeps its `pending` key, and lists what it ignores.

```json
{
  "version": 1,
  "look": { "button-default-emphasis": "v19", "badge-accent-filled": "v19", "button-radius": "v19" },
  "optOutCss": "src/styles/ods-v19-look.css",
  "pending": []
}
```

- `{}` or no file = Aluminium. `look` maps a choice id to `"aluminium"` or `"v19"`; a missing id is Aluminium.
- `optOutCss`: where ods-migrate writes the **v19-look stylesheet**, the CSS of the choices that add one and are set to v19 (relative to the config file; default `ods-v19-look.css` next to it). It is written with `--write` only, starts with `/* Generated by ods-migrate from <config> */`, and a file at that path without this header is never overwritten (exit 2). Import it once, after the ODS theme, outside any CSS `@layer` (the ODS theme is not in a layer: a rule inside one always loses to it). When no choice needs it any more, `--write` empties it (header and a comment, so its import still builds) and the report says to delete it and its import.
- `pending`: for the ODS team only. An entry of the mappings flagged `pending` (a v20 change not settled when this ods-migrate was built) is left out, and the report counts the files it concerns ("Not migrated by this version"). This key turns such entries on, to test them. Its accepted values are the ids of the pull requests and tickets that carry them. The shipped mappings have no pending entry: the ids of the changes that have since landed (`#1121`, `#1122`, `ODS-2326`, `ODS-2335`, `ODS-2336`) are still accepted, and do nothing.
- An unknown key, choice id, look value or `pending` id, a wrong type or another `version` is a config error (exit 2).

| Choice | How the v19 look is kept | v19 look |
| --- | --- | --- |
| `button-default-emphasis`, `message-default-emphasis` | Changes your JSX | `emphasis="high"` added where no `variant` / `emphasis` is set; a computed `variant` keeps `'high'` as its fallback; `emphasis="medium"` is no longer dropped |
| `card-default-status` | Changes your JSX | `status="accent"` added where no `color` / `status` is set |
| `badge-accent-filled` | Changes your JSX | `color="primary"` becomes `status="accent" emphasis="high"` |
| `divider-neutral-grey`, `spinner-neutral-grey` | Changes your JSX | the v19 grey is set with `style` when `color="neutral"` is removed |
| `page-background` | Changes your stylesheets | white (`surface-raised`) everywhere, also for the background of `html`, `body`, `:root` (Aluminium: `surface-page` there) |
| `button-radius`, `accordion-radius`, `badge-radius`, `form-field-width`, `font-family` | Adds a v19-look stylesheet | written into the `optOutCss` file; `font-family` also keeps `'Source Sans Pro'` in the app's own code (the ODS font paths still move) |
| `button-default-emphasis`, `message-default-emphasis` | also changes your stylesheets | `[class*="button--default"]`, `[class*="button--outline"]`, `[class*="message--default"]` are renamed (Aluminium: marked, see below) |

```sh
node configurator/build.mjs [--repo <path>] [--from v19.7.3] [--ref origin/master] [--check]
```

`build.mjs` regenerates the page: it compiles the v19.7.3 and v20 SCSS with `sass` (from `git archive`, no install), and fails when a sample and the `v19Look` of the mapping disagree. `--check` fails when `index.html` is out of date (CI). The data ods-migrate reads is `configurator/choices.json`.

The lint rules take the same choices as options, so that `--fix` matches the command: `ods/v20-migration` takes `{ look?, pending?, builtOnOds?, modules? }`, `ods/v20-tokens` `{ look?, pending? }`, `ods/v20-default-changed` `{ builtOnOds?, modules? }` (optional, suggestions only), `ods/no-removed-token` `[true, { look?, pending? }]`. `treatAsOds` and `packages`, the former names of `builtOnOds`, still work. The ESLint plugin also exports `createPlugin({ mapping, tokenMapping })` (other mappings, for tests); the stylelint plugin's default export is the array of its two rules, also exported by name (`noRemovedToken`, `noControlWidth`).

```js
// eslint.config.js
import ods from '@ovhcloud/ods-migrate/eslint-plugin';
import config from './ods-migrate.config.json' with { type: 'json' };

export default [{
  plugins: { ods },
  rules: {
    // Your modules built on ODS come from ods-migrate.modules.json (written by `ods-migrate --write`
    // in the folder ESLint runs from); `modules: '<path>'` reads another one.
    'ods/v20-migration': ['error', { look: config.look, pending: config.pending }],
    'ods/v20-tokens': ['error', { look: config.look }],
    'ods/v20-default-changed': 'warn',   // optional: elements whose default look changed in v20
  },
}];
```

```js
// stylelint.config.mjs
import config from './ods-migrate.config.json' with { type: 'json' };

export default {
  plugins: ['@ovhcloud/ods-migrate/stylelint-plugin'],
  rules: { 'ods/no-removed-token': [true, { look: config.look }], 'ods/no-control-width': true },
};
```

The rules read the same plan as the command: `--fix` gives the command's result without its markers, and on a migrated project they report exactly the marked places. The exceptions: the v19-look additions on elements without the prop are never an ESLint fix (`ods/v20-default-changed` suggests them), and a Tailwind utility whose theme key lives in another file (a `tailwind.config`, a preset) is reported without a fix, since a lint rule sees one file (the command renames both, see "Design tokens").

## What the command changes

The component part is driven by `mappings/v19-to-v20.json`, written by hand; the design token part by `mappings/tokens-v19-to-v20.json`, generated from the ODS sources (below). The last column names the keys of the mapping, for the maintainers.

| Component | v19 | v20 | Mapping keys |
| --- | --- | --- | --- |
| Badge, Card, Message, Tag | `color`, `XXX_COLOR(S)`, `XxxColor` | `status`, `XXX_STATUS(ES)`, `XxxStatus`; `primary` → `accent`; the v20 default (Card `neutral`, the others `information`) dropped | `renameTo`, `dropDefault` |
| Button | same | same; `primary` → `brand` (the default: dropped), `information` / `success` / `warning` → none (marked) | `renameTo`, `null` values, `dropDefault` |
| Button, Message | `variant`, `XXX_VARIANT(S)`, `XxxVariant` | `emphasis`, `XXX_EMPHASIS` / `XXX_EMPHASES`, `XxxEmphasis`; `default` → `high`, `outline` / `light` → `medium` (the default: dropped), `ghost` → `low` | `renameTo`, `dropDefault`, `note` on `MESSAGE_VARIANTS` |
| CartAction, Editable…Trigger, ModalCloseTrigger, PromptInput…Button, QueryFilterClear | Button `color` and `variant` | as Button, their own default kept | `extends: "Button"` |
| Table | `variant`, `TABLE_VARIANT(S)`, `TableVariant` | `striped` boolean; `default` → nothing | `remove` with a boolean attribute, `removed` |
| Toaster | `toast.primary()`, `toast(…, { color })`, `TOAST_COLOR(S)`, `ToastColor`, objects typed `ToastController` | `toast.accent()`, the helper (`toast.success(…)`), `TOAST_STATUS(ES)`, `ToastStatus`, key `accent` | `members`, `renameTo`, `callOptions`, `memberKeys` |
| Divider, Spinner | `color`, `XXX_COLOR(S)`, `XxxColor` | removed, `neutral` included (a hint per member; the v19 grey only through the config) | `remove`, `removed`, `v19Look` |
| ModalContent | `color`, `MODAL_COLOR(S)`, `ModalColor` | removed; `critical` → `role="alertdialog"`, the others → nothing | `remove` with attributes |
| Popover, Tooltip, Menu, Select | `position`, `gutter`, `sameWidth`, `fitControlWidth` (deprecated in v19) | `overlayConfig={{ … }}`; `fitControlWidth` (`true`, the default) is dropped. Valid in v19.7.3 too | `moveTo` |
| Popover, Tooltip, Menu, Select, Modal, Drawer, Datepicker, Clipboard, Code | a number between 99 and 1600 in `zIndex` of `positionerStyle` / `backdropStyle` | marked: "check this stacking", with the v19 and v20 values (a number below or above every ODS overlay keeps its place: no marker) | `stacking` |
| ClipboardTrigger, DrawerTrigger, MenuTrigger, ModalTrigger, PopoverTrigger, TooltipTrigger | `value={ 42 }` | `value="42"` (a string in v20); an array is marked | `coerce` |
| Input | `type="password"` without `maskOption` | a point to check (valid v20 code): Edge no longer shows its own reveal button; nothing on a project already on v20 | `todoUnless` |
| Switch | `<Switch>` with its `<SwitchItem>` / `<Switch.Item>` children (direct, mapped, conditional or in a fragment), `SWITCH_SIZE(S)`, `SwitchProp`, `SwitchItemProp`, `SwitchValueChangeDetail`, `SwitchSize` | `<Tabs variant="switch">`, a `<TabList>` around the items, each item a `<Tab>`; the other props kept (same `value`, `defaultValue`, `onValueChange({ value })`, `size`), `disabled` set on each `<Tab>` (Tabs has none), `SWITCH_SIZE.sm` → `'sm'`; `TabsProp`, `TabProp`, `TabsValueChangeEvent`, `TabsSize`. A Switch without `value` nor `defaultValue` gets a point to check (Tabs warns without a selection: set `defaultValue` to the first item if that is what the page did). Kept and marked: a Switch with no item written out (`<Switch />`, `{ children }`), an item with its own `disabled`, a Switch inside a Switch, one rendered through a wrapper of the app, one imported from `@ovhcloud/ods-react/switch`, or a file where `Tabs`, `TabList` or `Tab` already names something else. A team that wants a single-select ButtonGroup or a RadioGroup instead changes the Tabs after the run | `replacedBy`, `renameTo`, `removed`, `inline` |
| Pagination, Toggle | no children; `withPageSizeSelector`, `renderTotalItemsLabel` | the parts written out as children, and imported (from `@ovhcloud/ods-react` when the module imported from does not export them) | `childless`, `always` |
| FileUploadItem | `uploadSuccessLabel` | removed | `always` |
| SelectControl, ComboboxControl, TimepickerControl, PhoneNumberControl | `className`, `style` | a point to check: the field width lives on the root, the control only fills it | `note` |
| DatepickerControl | `className`, `style` | a point to check: set the width on both `Datepicker` and `DatepickerControl` | `note` |

- Named imports, aliases (`Badge as OdsBadge`), a new name already imported (no duplicate), `export { BADGE_COLOR } from '@ovhcloud/ods-react'`, the component entry points (`@ovhcloud/ods-react/button`, a name kept on its entry point; the removed `/switch` is marked), and a module of yours imported by its default export (`import Banner from './Banner'`). Imports are edited name by name: comments, layout and CRLF are kept. A v19 name that nothing reads any more is removed, not renamed; a removed one still read stays, with a marker on the import that names it. The imports of other packages (`@ovhcloud/ods-components`) are never touched.
- `require('@ovhcloud/ods-react')` and `import('@ovhcloud/ods-react')` are not followed: one that reads a changed name gets a marker that names them.
- Props on the JSX of the imported component only (not a component of the same name from another library, not a native element), and on its compound statics (`<Cart.Action>`, `<Modal.Content>`, `<FileUpload.Item>`, `<Select.Control>`…).
- Objects typed with ODS props (`const o: Partial<BadgeProp> = { color: 'primary' }`, `satisfies`, `as`, through `Partial` / `Pick` / `Omit`): keys and values follow the props, the overlay keys move into `overlayConfig`. A wrapper typed with ODS props that gives a prop a default (`({ variant = 'default', ...p }: ButtonProp)`) gets `{ emphasis: variant = 'high' }`, and the files that use it are migrated.
- Values: strings (and template strings without `${}`), ternaries, `||` / `??` / `&&`, constants (`BADGE_COLOR.primary`, `BADGE_COLOR['primary']`), strings where a renamed type is expected (`Record<…, BadgeColor>`, `as`, `satisfies`, `as const`), indexed types (`BadgeProp['color']`, `ComponentProps<typeof Badge>['color']`), `Omit` / `Pick`.
- A props type of your own that declares its own `status` or `emphasis` gets them added to its `Omit`; its own `color` is marked. An `Omit<BadgeProp, 'color'>` keeps `'color'` (typed never in v20) and gets `'status'` next to it.
- Test mocks (`vi.mock` / `jest.mock`, also `vi.mock(import(…))`, quoted keys, `Object.assign`): the exports are renamed; a mock that reads a renamed or removed prop gets a point to check that says which prop to read.
- An explicit default written after `{...rest}` (`<Button {...rest} variant="outline">`) is kept, renamed: it won over `rest`. A prop moved into an `overlayConfig` object that holds `{...}` goes before it, which still wins (with a note on an explicit `undefined`).

What it does not change, and reports instead:

- A value with no v20 equivalent: a `TODO(ods-v20)` marker, in TypeScript too.
- A value computed at runtime: in TypeScript it is left to the type check (a `type` line); in untyped code (JavaScript, or TypeScript with `// @ts-nocheck`) the prop is renamed and the place is listed by `--check` (`untyped`), with no marker. A removed prop keeps its marker whatever its value.
- A z-index computed by the app, or a number between the ODS overlays (`calc()` on the overlay token, a `zIndex` of 99 to 1600 in `positionerStyle`): a "check this stacking" marker with the v19 and v20 values. The v20 values are not final, so such values are never changed. A `zIndex` string that reads the overlay token is left to the design token part (marked in a `calc()`, renamed when read as is).
- The v19 look of a value (`v19Look`) on an element that already has the attribute it would add: a plain value (`emphasis="low"`) wins; an expression (`style={ … }`) keeps the old attribute and gets a marker asking to merge it by hand.
- An object passed with `{...props}` to an ODS component: a point to check in TypeScript, a marker in untyped code, that lists the keys to change.
- An object key named after a renamed prop that holds one of its constants (`{ variant: BUTTON_VARIANT.ghost }`, later passed with `{...}` to a Button, or to a component of yours): the constant is renamed and the key marked, never renamed (a component of yours may keep the name). The marker names the constant as the code now reads it and as v19 wrote it, and says what to do in each case (passed with `{...obj}` to the ODS component: rename the key; read as `obj.variant`: keep it). The lint rule reports it while the marker is there. The object passed to a prop typed with ODS props (`actionButton={{ variant: BUTTON_VARIANT.ghost }}` for `actionButton?: Pick<ButtonProp, 'variant'>`) is known: its key is renamed, with no marker. A `Pick<ButtonProp, 'variant'>` rewritten to `'emphasis'` gets a `type` line (the objects typed with it keep their key), and a v19 prop holding an ODS constant on a component of yours (`<Button variant={ BUTTON_VARIANT.ghost }>` with your own `Button`) gets a point to check.

Keys of the component mapping, all optional:

| Key | Level | Effect |
| --- | --- | --- |
| `dropDefault` | prop | deletes the renamed attribute when its value is the v20 default |
| `defaultWas`, `v19Look`, `whenAbsent` | prop, component | the v19 look of a configurator choice; `whenAbsent` also counts the elements that look different in Aluminium |
| `moveTo` | prop | moves the attribute into an object prop (`overlayConfig`) |
| `always`, `coerce`, `todoUnless`, `note`, `stacking` | prop | removed whatever the value; number → string; point to check unless another attribute is set; point to check; z-index marker |
| `extends`, `propsType`, `conflicts`, `childless` | component | inherits the props of another component; indexed / `Omit` / `Pick` types; own-prop conflicts; parts written out for a root without children |
| `replacedBy` | component | a removed component rewritten to another one (`<Switch>` → `<Tabs variant="switch">`): the element, the wrapper around its items (`wrap`), the attributes it adds (`add`), its parts and compound statics, the props moved to each part (`moveToParts`), the point to check when none of `whenAbsent.unless` is set; planned once in `src/replaced.mjs` for the codemod and the lint rule |
| `members.x.hint`, `note`, `callOptions`, `memberKeys` | export | per-member hint; note on a renamed export; `toast(…, { color })`; keys of an object typed with the export |
| `pending` | anywhere | the entry was not settled when this version was built: it applies only when the config's `pending` lists it (the shipped mappings use none) |

## Design tokens

`--ods-theme-*`, `--ods-color-*` and the older tokens are removed in v20. A rename is applied as is. A v19 colour step had no meaning, so its v20 name is chosen from what it paints, read in the file itself:

| Where the token is | What says what it paints | Example |
| --- | --- | --- |
| CSS / SCSS declaration | the property, and `:hover` / `::placeholder` on every selector of the rule (outside `:not()`) | `background: var(--ods-color-primary-500)` → `surface-brand` |
| Tailwind arbitrary value, `@apply` | the utility and its variants (`[&:hover]`, `group-hover/x`, `!`) | `hover:border-b-[--ods-color-primary-700]` → `interaction-brand-hover` |
| Style object, Tailwind config | the key, also through a ternary or `&&` | `{ color: 'var(--ods-color-primary-500)' }` → `content-brand` |
| CSS in a template string | the property on the same line | `` `color: var(--ods-theme-text-color);` `` |
| An app that sets an ODS token (`:root { --ods-…: … }`), in CSS or JS | it is a theme: the value takes the palette step of the same colour | `var(--ods-color-neutral-300)` (#b3b3b3) → `var(--ods-palette-gray-400)` |
| A palette of your own (`--color-primary-500: var(--ods-color-primary-500)`, a Tailwind key `'ods-primary-500'` or `500`), in CSS or JS | its name ends with a step and its value is that one v19 step: it is an alias of the palette, so it reads the v20 palette step of the same colour (a name that says what it paints, such as `--text-500`, keeps that role) | `--mds-neutral-200: var(--ods-color-neutral-200)` → `var(--ods-palette-gray-300)` |

What it paints is never taken from another line. When nothing says it (a shadow, a gradient, an SVG `stroke`, a string returned by a function, a test expectation), the place is marked with the candidates, the most likely one first when the property suggests it (a `box-shadow` is most likely a border, a gradient on `background` a background), and the palette step that keeps the exact v19 colour. A name built at runtime (`` `--ods-color-${x}` ``) is marked, never cut. A name that ODS v19 never declared is left alone, whatever it is, and reported apart: it gives its fallback value (or nothing) in v19 as in v20. Two v19 names that become the same v20 name in one rule are marked rather than merged. Where ODS's own styles use another v20 token than the rename for the same v19 token, the point to check says for which kind of element (form fields, popups and overlays, named components) and which token.

- White (`--ods-theme-background-color`, `--ods-color-*-000`) stays white: `surface-raised`, and `surface-page` for the `background` / `background-color` of `html`, `body`, `:root` only (the `page-background` choice makes it white there too). A colour, a border, a shadow or a custom property of the app declared there stays `surface-raised` (the custom property gets a note).
- `--ods-theme-overlay-z-index` read as is by a z-index (`z-index`, `zIndex`, `z-[…]`) becomes `--ods-semantic-z-index-dropdown`. Computed (`calc()`, `max()`, in a Tailwind arbitrary value too), kept in a variable (a custom property, a Sass variable, a JS constant) or set by the app, it is marked "check this stacking", with the v19 and v20 values. `$ods-modal-z-index` and `$ods-overlay-select-z-index` are renamed (`$ods-overlay-modal-z-index`, `$ods-overlay-base-z-index`); the overlay variables and `--ods-drawer-z-index`, which keep their name with a new layer, get a point to check with both values. A literal z-index between 99 and 400 on an ODS overlay part (`[data-ods="…-content"]`, `[data-scope][data-part="positioner"]`) is marked.
- The status custom properties and mixins follow the props (BC-23, BC-24): Message `variant` → `emphasis` (`-light` → `-medium`, which also declares the medium border colour), Badge `-<status>` → `-<status>-high`, Button `-ghost` / `-outline` / no emphasis → `-low` / `-medium` / `-high`, and `primary` → `brand` (Button) or `accent` (Badge, Card, Message, Tag), in the names and in the status argument of `ods-button-emphasis-*`, `ods-message-emphasis-*`, `ods-badge-color`, `ods-tag-color`. A status the mixin no longer takes (`'success'` on a Button) or a status in a variable is marked. The removed Button and Tag names (BC-25): a read takes the value the name held, an override is marked (it paints nothing). The Code and Button border width names are renamed; the Tab, Toggle, Modal header and Switch ones are marked with what to override instead.
- The `::after` of a link (`[data-ods="link"]`, `[data-ods="breadcrumb-link"]`, after `ods-link()`) and a `text-decoration: none` on a link are marked: the underline is that `::after`, shown at rest, set through `--ods-link-underline-thickness`. A `--ods-tag-*-information` set on the Combobox or Query Filter becomes `-accent` (their tags).
- Internal CSS-module classes (`[class*="button--ghost"]`, the hashed `_button--ghost_x1y2` in test strings) are renamed with a note (`button--primary` → `button--brand`; a status with no v20 class is marked); a plain `.button--ghost` selector is never touched. `button--default`, `button--outline` and `message--default` are marked in Aluminium: they also matched (or now match) the elements without the prop, which render medium in v20; with the v19 look of `button-default-emphasis` / `message-default-emphasis` they are renamed.
- The Tailwind keys of the v19 guide that the v20 guide documents (`ods-border-radius-md` → `ods-container`, `ods-border-radius-sm` → `ods-control`, `ods-font-family-default` → `ods-body`) are renamed where a theme defines them (a script under a `theme` key: `tailwind.config`, a preset; a v4 `@theme { --radius-… }`), with their `theme('…')` paths, and their utilities are renamed only when the same run renames that definition (ods-migrate collects them over every scanned file, a stylesheet also reads its own `@theme`). A utility whose definition the run does not see is marked: rename both together. The v19 keys with no v20 name (the colour ones, `ods-border-radius-xs` / `-lg`) keep their key, their value migrates, their utilities are marked; a `safelist` pattern that names a renamed key gets a point to check. The v4 shorthand `bg-(--ods-…)`, `bg-(color:--ods-…)` reads the role from the utility, as `bg-[…]` does.
- The font family is renamed (Source Sans 3) unless the `font-family` choice keeps the v19 one, its font paths too (only the ODS ones: `@fontsource/source-sans-pro` is left alone), and the heading family is declared next to the body one.
- The SCSS `./style` variables and mixins: renamed, marked or wrapped in `calc()` when ODS turned a Sass number into a `var()` (a unary minus included: `-$x` → `calc(-1 * #{$x})`).

The names ods-react removes are found by comparing the last v19 release with the v20 ref (`scripts/build-token-mapping.mjs`), with two guard rails: one fails on any removed name the tables do not cover, the other on any target, value or hint that names a token the ref does not declare. The texts of the token markers (`hints`) live in that script.

```sh
node scripts/build-token-mapping.mjs [--repo <git dir>] [--ref <git ref>] [--from <v19 tag>] [--out <file>]   # regenerates the mapping
# the committed mapping is built with --ref origin/master (the default); rebuild it on the release ref
```

### Theme paths

`src/paths.mjs` runs after the token pass, on every kind of file: `@ovhcloud/ods-themes/default` (removed, BC-31) becomes `default/css` + `default/fonts`; the files of `dist/default` and `src/default` follow the BC-32 table (the export path for a bare specifier, both files for `default.css` / `default.scss`), with the version of a CDN URL pinned to 19 moved to 20; an `@use` of `src/default/variables` goes to `@ovhcloud/ods-react/style` (breakpoints) and `src/aluminium/variables` (kept palette) once the token pass rewrote the rest; `ODS_THEME` / `ODS_THEMES` are marked (removed when unused); the tokens JSON import is marked (BC-06). What cannot be written is marked. The table of MIGRATION.md step 4 lists each case.

## Trial run on real code

ovh/manager at `7e02c54` (`packages/`, 27 packages on ods-react 19, 3 on ODS 17 / 18; `--write` and no option: `@ovh-ux/muk` and 10 other modules built on ODS are found in the repository; no config: Aluminium), measured by `scripts/acceptance/acceptance.sh` on 2026-10-27 (TESTING.md § 4):

| Files scanned | Files changed | Changes | Markers (items) | Points to check | Values for the type check | Parse errors | Second run | Time |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5,966 (5,853 scripts, 68 stylesheets, 21 HTML, 24 `package.json`) | 632 (594 scripts, 38 stylesheets) | 1,886 | 178 (182) | 140 | 75 | 0 | 0 files changed | 6 s (of which ~4 s to find your modules built on ODS) |

The 3 packages on ODS 17 / 18 (`apps/ips`, `pci-rancher`, `catalog`) are left unchanged. 78 uses of `--ods-*` names that ODS v19 never declared are reported apart, as not migration work. Snapshots: 194 v19 tokens and 629 internal classes in 26 `.snap` files, plus 166 `--ods-*` names that v19 never declared. ESLint `--fix` on the original code (reading the `ods-migrate.modules.json` of the run) equals the command's result without its markers on every linted file; after the command, ESLint reports 176 problems for the 176 markers of scripts, one each, and stylelint 2 for 2, none of them fixable, none outside a marker. No `package.json` of that code needed an edit (no Shiki, ods-recipes or ods-storybook dependency, no lockfile in `packages/`).

Not checked: the type check on the migrated projects (their dependencies could not be installed here).

## Measuring the coverage independently

`scripts/coverage.mjs` grades ods-migrate with detectors that never read its mappings nor import its code, so the tool does not grade itself. `--tool <dir>` measures another ods-migrate (a frozen copy, a branch checkout) with this harness; the default is this package:

```sh
node scripts/coverage.mjs <corpus dir> [--truth <hand-migrated dir>] [--config <file>] [--json <out.json>] [--treat-as-ods <module>...] [--work <dir>] [--tool <ods-migrate dir>]
```

(The harness keeps its own option name, `--treat-as-ods`, and passes it on to the tool, which still accepts it.)

1. **Type surfaces, no install.** The ods-react and themes sources of `v19.7.3` and of `origin/master` (`--v19`, `--v20`) are extracted with `git archive` into a cache keyed by commit, and resolved by the type checker through `paths` (`@ovhcloud/ods-react` → `src/index.ts`). Their dependencies come from the installed `node_modules` of the repo (`--deps19`, `--deps20`); React and its types are pinned to one `@types/react` for every file (`--react-types`), so the two runs differ by ODS only. A probe must compile against each surface (and must reject an unknown prop) or the run stops.
2. **Places that break ("sites"), in a copy of the corpus, in the packages on ODS 19.** The harness reads the corpus on its own: each `package.json` (only packages whose `@ovhcloud/ods-*` ranges allow 19, directly or through a dependency of the repository, count) and the tsconfig of each file (`paths`, `baseUrl`, `extends`, `references`), with the packages of the repository and package.json `imports`. *Type sites*: one per use of the ODS API (an import or export specifier, a JSX attribute, a JSX element, or a position) that has v20 errors the same line and code do not have against v19, including the errors the checker hides (the uses of a broken import, a name imported from a module whose own export broke, an attribute hidden by another error of its element, a prop typed `never` passed `undefined`); what uses ODS is decided by the v19 type checker, through every alias. *Token sites*: every use in code (CSS, SCSS, Less, HTML, scripts, Markdown code) of a custom property, SCSS variable or mixin that the v19 sources declare and the v20 sources do not, bare Tailwind keys, removed CSS-module classes, font families v20 no longer loads, and removed ods-react exports named in Markdown code or script strings. *Snippets*: Markdown code blocks and strings that import ODS, type-checked as files. Comments, prose and changelogs are mentions, not sites; `.snap` files are counted apart.
3. **ods-migrate** runs (`--write`, Aluminium unless `--config`) on a second copy, then the same detectors run again. Per site: **AUTO** the error (any code of the site) or the name is gone, in code, from the lines it became, with no new v20 error where the usage went; **MARKED** still there with a `TODO(ods-v20)` marker attached to the construct that holds it; **MISSED** otherwise. **Regressions**: v20 errors of the migrated code that the original code had neither against v20 nor against v19 (flagged when under a marker). **Premature changes**: files and hunks ods-migrate changed in packages not on ODS 19.
4. **`--truth`**: what ods-migrate or the hand migration changed is compared item by item: each attribute of each JSX element, each CSS declaration, each import specifier, and the remaining code line by line. **AGREE** / **DIFFER**, and each DIFFER gets one class: **tool-wrong** (ods-migrate left or wrote something else), **decision** (the truth keeps a look that the decisions of the ODS team reject for the run's config: a v19-look addition, an explicit default, a z-index rewrite), **unrelated-change** (the truth changed code the v20 API does not require to change), **style-only** (the same code spelled differently). The v20 API the classification asks about is read from the two surfaces by the type checker. It catches the changes that compile but are wrong; gate on **tool-wrong**.
5. The rendering changes are listed apart, never counted: the ODS components the corpus renders whose stylesheets changed between the refs.

`auto% = auto / sites`, `assisted% = (auto + marked) / sites`. The report starts with one summary: sites, auto, marked, missed, auto%, assisted%, premature changes, regressions and, with a truth, agree and the DIFFER classes. The corpus is never written: it is copied to `<work>/<label>/base` and `<work>/<label>/migrated`.

The corpora the team measures, how to fetch them, and the last recorded numbers (`coverage-baseline.json`, checked with `node scripts/coverage-check.mjs <run.json>...`) are in TESTING.md § 5.

## Not covered yet

- `.mdx` / Markdown docs.
- The tokens JSON of `@ovhcloud/ods-themes/default/tokens`: its import is marked, a literal key is renamed or marked, but a key read through a variable is not followed.
- Bare theme variables (`$ods-color-*`) in a Sass partial that does not import the theme itself (it reaches it through the `@import` of another file, or the bundler's `additionalData`): left as they are; the import itself is marked.
- The v19 grey of `divider-neutral-grey` is approximate: no v20 colour name carries #4d4d4d, so the Divider gets `--ods-semantic-color-interaction-neutral-hover` (#666).
- Renames are by name: a local variable with the name of an ODS export would be renamed too.
- A file tracked by git inside a folder that `.gitignore` ignores is skipped unless that folder is passed explicitly.
- `import * as X from …` of ODS, or of a module that gives access to it: the names read as `X.Button` are not followed (a point to check says so).

## Tests

```sh
pnpm test        # node --test tests/*.test.mjs; the full procedure before a change or a release: TESTING.md
pnpm guide       # the before / after code of each component (or: pnpm guide Button)
```
