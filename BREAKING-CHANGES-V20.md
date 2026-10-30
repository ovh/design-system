# Breaking changes - v19.x to v20

Working inventory of everything in the v20 line that breaks a consumer, kept so the codemods can
be written from one source instead of from the diff.

- **Baseline**: `19.7.3` (last released version, `lerna.json`).
- **Status**: draft, enriched as the major lands. Nothing here is published yet.
- **Scope**: only what a consumer can observe - published exports, public props, published token
  names and values. Internal refactors are out of scope even when the diff is large.

`packages/docs/src/content/guides/migration-19-to-20.mdx` is the prose version: every entry here
has a before / after there, this file is the exhaustive one.

## How to add an entry

One `### BC-xx` section per breaking change, in this shape:

| field | meaning |
| --- | --- |
| **Package** | the published package the consumer sees |
| **Change** | one sentence, in the consumer's terms |
| **Impact** | what silently breaks, and whether it fails loudly or only visually |
| **Detection** | a grep or a check a consumer can run on their own codebase |
| **Codemod** | `automatable` / `partial` / `manual`, and why |
| **Source of truth** | the file in this repo that holds the authoritative mapping |

Keep entries append-only: a later commit that changes an already-listed name edits that entry
rather than adding a second one. The inventory describes the gap between `19.7.3` and the release,
not the history of the branch.

## Summary

| id | package | change | codemod |
| --- | --- | --- | --- |
| [BC-01](#bc-01---ods-theme--removed-72-tokens) | `@ovhcloud/ods-themes` | `--ods-theme-*` removed (72) | automatable |
| [BC-02](#bc-02---ods-color--removed-102-tokens) | `@ovhcloud/ods-themes` | `--ods-color-*` removed (102) | partial |
| [BC-03](#bc-03--13-remaining-legacy-tokens-removed) | `@ovhcloud/ods-themes` | 13 remaining legacy tokens removed | automatable, map to confirm |
| [BC-04](#bc-04--palette-rungs-000--025--075-retired) | `@ovhcloud/ods-themes` | palette rungs `000` / `025` / `075` retired | n/a (covered by BC-02) |
| [BC-05](#bc-05--scss-variables-ods--removed) | `@ovhcloud/ods-themes` | SCSS `$ods-*` variables removed (161) | manual |
| [BC-06](#bc-06--defaulttokensjson-content-replaced) | `@ovhcloud/ods-themes` | `./default/tokens` JSON content replaced | manual |
| [BC-07](#bc-07---the-default-theme-no-longer-looks-like-ovhcloud) | `@ovhcloud/ods-themes` | the default theme no longer looks like OVHcloud | partial |
| [BC-08](#bc-08--tier-3-component-token-values-re-bound) | `@ovhcloud/ods-react` | tier-3 component token values re-bound | none needed |
| [BC-09](#bc-09---card-defaults-to-neutral) | `@ovhcloud/ods-react` | `Card` defaults to `neutral` | automatable |
| [BC-10](#bc-10--button-radius-moves-to-the-control-family) | `@ovhcloud/ods-react` | `Button` radius is 4px at every size | manual |
| [BC-11](#bc-11--accordion-takes-the-whole-container-radius) | `@ovhcloud/ods-react` | `Accordion` outer corners go 4px -> 8px | manual |
| [BC-12](#bc-12---disabled-is-an-opacity-not-a-color) | `@ovhcloud/ods-react` | disabled is dimmed with opacity, not repainted grey | manual |
| [BC-13](#bc-13---the-default-font-family-is-renamed-source-sans-3) | `@ovhcloud/ods-themes` | the default font family is renamed `'Source Sans 3'` | automatable |
| [BC-14](#bc-14---form-fields-paint-their-own-background) | `@ovhcloud/ods-react` | form fields paint their own background | manual |
| [BC-15](#bc-15---a-modal-always-stacks-above-a-drawer) | `@ovhcloud/ods-react` | a modal always stacks above a drawer | manual |
| [BC-16](#bc-16---deprecated-and-unused-scss-exports-of-ovhcloudods-reactstyle-removed) | `@ovhcloud/ods-react` | 5 deprecated and 2 unused SCSS exports of `./style` removed | manual |
| [BC-17](#bc-17---code-custom-properties-renamed) | `@ovhcloud/ods-react` | 3 `Code` custom properties renamed | automatable |
| [BC-18](#bc-18---button-border-width-token-renamed) | `@ovhcloud/ods-react` | `Button` border width token renamed | automatable |
| [BC-19](#bc-19---default-rendering-changes) | `@ovhcloud/ods-react` | `Card`, `Tile`, `Accordion`, `Badge`, `Tabs`, `Link`, the `Combobox` and `Query Filter` tags and the transitions render differently by default | manual |
| [BC-20](#bc-20---a-19x-custom-theme-no-longer-applies) | `@ovhcloud/ods-themes` | a 19.x custom theme no longer applies | manual |
| [BC-21](#bc-21---form-fields-share-one-default-width) | `@ovhcloud/ods-react` | form fields share one default width instead of filling their container | manual |
| [BC-22](#bc-22---a-drawer-without-backdrop-gives-the-focus-back-on-close) | `@ovhcloud/ods-react` | a drawer without backdrop gives the focus back on close | none needed |
| [BC-23](#bc-23---badge-card-message-and-tag-status-custom-properties-renamed) | `@ovhcloud/ods-react` | `Badge`, `Card`, `Message` and `Tag` status custom properties and Sass values renamed (`primary` becomes `accent`) | automatable |
| [BC-24](#bc-24---button-custom-properties-and-sass-mixins-named-after-the-status-and-the-emphasis) | `@ovhcloud/ods-react` | `Button` custom properties and Sass mixins named after the status and the emphasis | automatable |
| [BC-25](#bc-25---108-button-and-tag-custom-properties-removed) | `@ovhcloud/ods-react` | 108 `Button` and `Tag` custom properties removed | partial |

## The v20 token contract

`--ods-semantic-*` is the public surface of the theme: a consumer reads these roles, and a theme
re-declares them. Their names and their meaning hold for the whole v20 line; their values belong
to the theme. The `--ods-palette-*` ramps are public as well, as the input of a theme. The
reference list is the set of keys of `@ovhcloud/ods-themes/default/tokens`: 282 in 20.0, 191
semantic and 91 palette, as counted by

```sh
node -e "const k = Object.keys(require('@ovhcloud/ods-themes/default/tokens').root); console.log(k.length, k.filter((n) => n.startsWith('--ods-semantic-')).length, k.filter((n) => n.startsWith('--ods-palette-')).length)"
```

---

## BC-01 - `--ods-theme-*` removed (72 tokens)

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The 72 role tokens named `--ods-theme-*` are deleted and replaced by `--ods-semantic-*`. No alias, no deprecation window. |
| **Impact** | Any `var(--ods-theme-…)` in consumer CSS resolves to nothing. Fails visually, never loudly: the declaration is dropped and the property falls back to its inherited or initial value. |
| **Detection** | `grep -rn -- '--ods-theme-' src/` |
| **Codemod** | **automatable** - 62 of the 72 are a 1:1 rename and 6 split three ways, see below. The 4 disabled colors have no destination: disabled is now an opacity (BC-12), so those sites are reported. A few renames depend on what the site paints: the note under each table lists them with the roles ODS picked. |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, const `THEME` and `THEME_SPLIT`. The tables below are its output: `--tables --update` rewrites them. |

A rename names a role, not a value: many roles keep the 19.7.3 value in the default theme, and many
do not (BC-07). `--ods-semantic-color-brand` keeps the one of `--ods-theme-brand-color`: it points
at `brand-700`, the rung that `primary-700` became.

### 1:1 renames

<!-- repoint-tokens:bc01-renames -->
| before | after |
| --- | --- |
| `--ods-theme-anchor-text-color` | `--ods-semantic-color-content-brand` |
| `--ods-theme-anchor-text-color-hover` | `--ods-semantic-color-interaction-brand-hover` |
| `--ods-theme-anchor-text-color-visited` | `--ods-semantic-color-interaction-brand-visited` |
| `--ods-theme-background-color` | `--ods-semantic-color-surface-page` |
| `--ods-theme-background-color-disabled` | _none_ |
| `--ods-theme-background-color-drag-over` | `--ods-semantic-color-surface-drag-over` |
| `--ods-theme-background-color-readonly` | `--ods-semantic-color-surface-readonly` |
| `--ods-theme-background-color-selected` | `--ods-semantic-color-surface-selected-solid` |
| `--ods-theme-border-color-disabled` | _none_ |
| `--ods-theme-border-color-drag-over` | `--ods-semantic-color-border-drag-over` |
| `--ods-theme-border-color-readonly` | `--ods-semantic-color-border-readonly` |
| `--ods-theme-border-color-selected` | `--ods-semantic-color-border-selected-solid` |
| `--ods-theme-brand-color` | `--ods-semantic-color-brand` |
| `--ods-theme-heading-text-color` | `--ods-semantic-color-content-heading` |
| `--ods-theme-progress-background-color` | `--ods-semantic-color-surface-control-solid` |
| `--ods-theme-split-background-color` | `--ods-semantic-color-border-separator` |
| `--ods-theme-split-border-color` | `--ods-semantic-color-border-separator` |
| `--ods-theme-text-color` | `--ods-semantic-color-content-text` |
| `--ods-theme-text-color-disabled` | _none_ |
| `--ods-theme-text-color-selected` | `--ods-semantic-color-content-on-selected-solid` |
| `--ods-theme-track-background-color` | `--ods-semantic-color-surface-track` |
| `--ods-theme-track-background-color-disabled` | _none_ |
| `--ods-theme-outline-color` | `--ods-semantic-color-focus` |
| `--ods-theme-outline-offset` | `--ods-semantic-border-focus-offset` |
| `--ods-theme-outline-style` | `--ods-semantic-border-focus-style` |
| `--ods-theme-outline-width` | `--ods-semantic-border-focus-thickness` |
| `--ods-theme-backdrop-background-color` | `--ods-semantic-color-surface-backdrop` |
| `--ods-theme-backdrop-opacity` | `--ods-semantic-opacity-backdrop` |
| `--ods-theme-overlay-border-radius` | `--ods-semantic-size-radius-overlay` |
| `--ods-theme-overlay-box-shadow` | `--ods-semantic-shadow-overlay` |
| `--ods-theme-overlay-z-index` | `--ods-semantic-z-index-dropdown` |
| `--ods-theme-border-radius` | `--ods-semantic-size-radius-container` |
| `--ods-theme-border-width` | `--ods-semantic-border-thickness` |
| `--ods-theme-column-gap` | `--ods-semantic-size-space-gap-inline` |
| `--ods-theme-padding-horizontal` | `--ods-semantic-size-space-inset-inline` |
| `--ods-theme-padding-vertical` | `--ods-semantic-size-space-inset-block` |
| `--ods-theme-row-gap` | `--ods-semantic-size-space-gap-block` |
| `--ods-theme-transition-duration` | `--ods-semantic-motion-duration-slow` |
| `--ods-theme-font-family` | `--ods-semantic-font-family-body` |
| `--ods-theme-font-family-code` | `--ods-semantic-font-family-code` |
| `--ods-theme-input-background-color-checked` | `--ods-semantic-color-surface-control-solid` |
| `--ods-theme-input-background-color-checked-hover` | `--ods-semantic-color-interaction-control-solid-hover` |
| `--ods-theme-input-background-color-invalid` | `--ods-semantic-color-surface-critical` |
| `--ods-theme-input-border-color` | `--ods-semantic-color-border-control` |
| `--ods-theme-input-border-color-checked` | `--ods-semantic-color-border-control-solid` |
| `--ods-theme-input-border-color-checked-hover` | `--ods-semantic-color-interaction-control-solid-hover` |
| `--ods-theme-input-border-color-hover` | `--ods-semantic-color-interaction-control-hover` |
| `--ods-theme-input-border-color-invalid` | `--ods-semantic-color-border-critical` |
| `--ods-theme-input-border-radius` | `--ods-semantic-size-radius-control` |
| `--ods-theme-input-border-width` | `--ods-semantic-border-thickness` |
| `--ods-theme-input-min-height` | `--ods-semantic-size-block-size-md` |
| `--ods-theme-input-option-background-color-hover` | `--ods-semantic-color-interaction-highlight` |
| `--ods-theme-input-option-background-color-selected` | `--ods-semantic-color-surface-selected` |
| `--ods-theme-input-option-background-color-selected-hover` | `--ods-semantic-color-interaction-selected-highlight` |
| `--ods-theme-input-padding-horizontal` | `--ods-semantic-size-space-inset-inline` |
| `--ods-theme-input-padding-vertical` | `--ods-semantic-size-space-inset-block-compact` |
| `--ods-theme-input-placeholder-text-color` | `--ods-semantic-color-content-placeholder` |
| `--ods-theme-input-text-color` | `--ods-semantic-color-content-text` |
| `--ods-theme-input-text-color-checked` | `--ods-semantic-color-content-on-control-solid` |
| `--ods-theme-input-text-color-invalid` | `--ods-semantic-color-content-critical` |
| `--ods-theme-chart-background-color` | `--ods-semantic-color-chart-background` |
| `--ods-theme-chart-axis-color` | `--ods-semantic-color-chart-axis` |
| `--ods-theme-chart-tick-color` | `--ods-semantic-color-chart-tick` |
| `--ods-theme-chart-legend-color` | `--ods-semantic-color-chart-legend` |
| `--ods-theme-chart-grid-color` | `--ods-semantic-color-chart-grid` |
| `--ods-theme-chart-reference-line-color` | `--ods-semantic-color-chart-reference-line` |

Depends on the site:

- `--ods-theme-anchor-text-color-hover`: to restyle the Link hover, set `--ods-link-text-color-hover` on `[data-ods="link"]`: the Link no longer reads `interaction-brand-hover`, which now drives the brand Button hover, and its hover keeps the rest color (BC-19).
- `--ods-theme-background-color`: per site: `surface-page` for the page, `surface-raised` for a card or a panel, `surface-overlay` for a popover, a modal or a drawer, `surface-control` for a field. ODS reads all four.
- `--ods-theme-heading-text-color`: a group label in a list (Select, Combobox, Menu, Query Filter) reads `content-group-label`.
- `--ods-theme-overlay-z-index`: an offset meant to clear a drawer or a modal now lands under them: restack it with BC-15.
<!-- /repoint-tokens:bc01-renames -->

A codemod must match longest-first: `--ods-theme-text-color` is a strict prefix of
`--ods-theme-text-color-disabled`, and a naive pass corrupts the longer one.

### The 6 that split by declaring property

`--ods-theme-<role>-color` served as a fill, a border and a text color at once. The destination
depends on the property it is declared in, so a rename table is not enough - the codemod has to
know which declaration it sits in.

<!-- repoint-tokens:bc01-split -->
| before | in a `background` / `fill` | in a `border-color` / `outline-color` | in a `color` |
| --- | --- | --- | --- |
| `--ods-theme-critical-color` | `--ods-semantic-color-surface-critical` | `--ods-semantic-color-border-critical` | `--ods-semantic-color-content-critical` |
| `--ods-theme-information-color` | `--ods-semantic-color-surface-information` | `--ods-semantic-color-border-information` | `--ods-semantic-color-content-information` |
| `--ods-theme-neutral-color` | `--ods-semantic-color-surface-neutral` | `--ods-semantic-color-border-neutral` | `--ods-semantic-color-content-neutral` |
| `--ods-theme-primary-color` | `--ods-semantic-color-surface-brand` | `--ods-semantic-color-border-brand` | `--ods-semantic-color-content-brand` |
| `--ods-theme-success-color` | `--ods-semantic-color-surface-success` | `--ods-semantic-color-border-success` | `--ods-semantic-color-content-success` |
| `--ods-theme-warning-color` | `--ods-semantic-color-surface-warning` | `--ods-semantic-color-border-warning` | `--ods-semantic-color-content-warning` |

Depends on the site:

- `--ods-theme-primary-color`: in a `color`, an icon or a caret reads `content-icon`.
<!-- /repoint-tokens:bc01-split -->

Used anywhere else (a `box-shadow`, a `linear-gradient`), there is no mechanical answer: report the
site and let the consumer choose. An inline `style` is rewritten like a stylesheet, from the name
of its property.

One caveat on that table: run on the ODS sources before the migration, it sends 28 sites through
it, 23 in a `color`, 4 in a `background` or a `fill` and 1 in a `border`, and on 3 of the 5
outside `color` ODS picked another role than the table: the normal Meter fill reads
`surface-success`, the Spinner fill `content-accent`, and the blockquote border of `_text.scss`
`border-separator`. A site outside `color` is worth a look before taking the table's answer.

---

## BC-02 - `--ods-color-*` removed (102 tokens)

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The tier-1 ramp aliases are deleted: 78 `--ods-color-<family>-<rung>`, plus 24 named and long-deprecated flat tokens. |
| **Impact** | Same silent failure as BC-01, on the surface consumers reached for most often when tinting their own UI. |
| **Detection** | `grep -rn -- '--ods-color-' src/` |
| **Codemod** | **partial** - a ramp step carries no role, so the destination depends on what the declaring property does with it. Automatable for `background` / `border-color` / `color`; everything else must be reported. |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, functions `kindOf` and `rampRole`, const `NAMED`. The tables below are its output: `--tables --update` rewrites them. |

The hue families are published as `--ods-palette-<hue>-<rung>`, but the same rung number does not
give the same color (BC-04), and pointing at the palette opts a site out of theming. The tables
below give the role instead, and that is what the codemod should emit.

### Ramp mapping, by declaring property

Destinations are shown without their `--ods-semantic-color-` prefix.

#### surface properties (`background`, `fill`)

<!-- repoint-tokens:bc02-surface -->
| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` |
| 025 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-muted` |
| 050 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-muted` |
| 075 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-muted` |
| 100 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-muted` |
| 200 | `surface-information-subtle` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-subtle` |
| 300 | `surface-information-subtle` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-subtle` |
| 400 | `surface-brand` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 500 | `surface-brand` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 600 | `surface-brand` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 700 | `surface-brand` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 800 | `surface-selected-solid` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 900 | `surface-selected-solid` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-code` |

On a `-hover` / `-active` declaration:

| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` |
| 025 | `interaction-accent-subtle-hover` / `-active` | `interaction-information-subtle-hover` / `-active` | `interaction-critical-subtle-hover` / `-active` | `interaction-success-subtle-hover` / `-active` | `interaction-warning-subtle-hover` / `-active` | `interaction-neutral-subtle-hover` / `-active` |
| 050 | `interaction-accent-subtle-hover` / `-active` | `interaction-information-subtle-hover` / `-active` | `interaction-critical-subtle-hover` / `-active` | `interaction-success-subtle-hover` / `-active` | `interaction-warning-subtle-hover` / `-active` | `interaction-neutral-subtle-hover` / `-active` |
| 075 | `interaction-accent-subtle-hover` / `-active` | `interaction-information-subtle-hover` / `-active` | `interaction-critical-subtle-hover` / `-active` | `interaction-success-subtle-hover` / `-active` | `interaction-warning-subtle-hover` / `-active` | `interaction-neutral-subtle-hover` / `-active` |
| 100 | `interaction-accent-subtle-hover` / `-active` | `interaction-information-subtle-hover` / `-active` | `interaction-critical-subtle-hover` / `-active` | `interaction-success-subtle-hover` / `-active` | `interaction-warning-subtle-hover` / `-active` | `interaction-neutral-subtle-hover` / `-active` |
| 200 | `interaction-accent-subtle-hover` / `-active` | `interaction-information-subtle-hover` / `-active` | `interaction-critical-subtle-hover` / `-active` | `interaction-success-subtle-hover` / `-active` | `interaction-warning-subtle-hover` / `-active` | `interaction-neutral-subtle-hover` / `-active` |
| 300 | `interaction-accent-subtle-hover` / `-active` | `interaction-information-subtle-hover` / `-active` | `interaction-critical-subtle-hover` / `-active` | `interaction-success-subtle-hover` / `-active` | `interaction-warning-subtle-hover` / `-active` | `interaction-neutral-subtle-hover` / `-active` |
| 400 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 500 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 600 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 700 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 800 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 900 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |

Depends on the site:

- every family, 000: white: per site, as `--ods-theme-background-color` in BC-01.
- primary, 025-300 on a `-hover` / `-active`: ODS picked per component: `interaction-brand-subtle-*` on the primary ghost and outline Button, `interaction-accent-subtle-*` on the Tag, `interaction-highlight` on list-like items (Switch, File Upload).
- neutral, 025-100 on a `-hover` / `-active`: the Tab hover reads `interaction-highlight`, as the list-like items do.
- primary, 200-300: `primary` was also the brand: a brand or accent tint reads `surface-accent-subtle` rather than the information family.
- neutral, 700-900: `surface-code` is the role of the Code block. No role holds another dark neutral fill: `surface-neutral` is the solid neutral one.
<!-- /repoint-tokens:bc02-surface -->

#### border properties (`border-color`, `outline-color`)

<!-- repoint-tokens:bc02-border -->
| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` |
| 025 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 050 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 075 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 100 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 200 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-neutral-subtle` |
| 300 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-control` |
| 400 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |
| 500 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |
| 600 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |
| 700 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |
| 800 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |
| 900 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |

On a `-hover` / `-active` declaration:

| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` |
| 025 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 050 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 075 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 100 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-separator` |
| 200 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-neutral-subtle` |
| 300 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-control` |
| 400 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-control-hover` |
| 500 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-control-hover` |
| 600 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 700 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 800 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |
| 900 | `interaction-brand-hover` / `-active` | `interaction-information-hover` / `-active` | `interaction-critical-hover` / `-active` | `interaction-success-hover` / `-active` | `interaction-warning-hover` / `-active` | `interaction-neutral-hover` / `-active` |

Depends on the site:

- every family, 000: white: per site, as `--ods-theme-background-color` in BC-01.
- primary, 025-300: `primary` was also the brand: a brand or accent line reads `border-accent-subtle` rather than the information family.
- neutral, 400-500 on a `-hover` / `-active`: `interaction-control-hover` is the hover of the fields, read by the Accordion and the Tile. It has no pressed rung, so an `-active` declaration gets it too.
<!-- /repoint-tokens:bc02-border -->

#### content properties (`color`)

<!-- repoint-tokens:bc02-content -->
| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `content-on-solid` | `content-on-solid` | `content-on-solid` | `content-on-solid` | `content-on-solid` | `content-on-solid` |
| 025 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 050 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 075 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 100 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 200 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 300 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 400 | `content-brand` | `content-information` | `content-critical` | `content-success` | `content-warning` | `content-neutral` |
| 500 | `content-brand` | `content-information` | `content-critical` | `content-success` | `content-warning` | `content-neutral` |
| 600 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-warning` | `content-neutral` |
| 700 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-warning` | `content-on-neutral` |
| 800 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-on-warning` | `content-on-neutral` |
| 900 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-on-warning` | `content-on-neutral` |

Depends on the site:

- warning, 800-900: text on a solid warning fill reads `content-on-warning-solid`.
<!-- /repoint-tokens:bc02-content -->

`_none_` is a real hole, not an omission: light text colors have no role in the semantic layer.
Those sites must be reported for a human to decide.

Three context rules sit on top of the tables:

- **The state comes from the name of the declaring property.** A `-hover` or `-active`
  declaration takes the interaction role of its rung (second table of each kind), any other
  declaration the static role. A `:hover` selector is not read: in
  `.x:hover { background-color: var(--ods-color-critical-100) }` the codemod writes the static
  `surface-critical-subtle`, and the site has to be moved to `interaction-critical-subtle-hover` by
  hand.
- A `color` on `600` in the `neutral` family is `content-placeholder` when the declaring property
  is a placeholder, `content-neutral` otherwise.
- Any property named after a decorative badge (`alpha`, `beta`, `new`, `promotion`) takes
  `content-on-vivid`.

### Named and flat tokens

<!-- repoint-tokens:bc02-named -->
| before | after |
| --- | --- |
| `--ods-color-alpha` | `--ods-semantic-color-surface-decorative-alpha` |
| `--ods-color-beta` | `--ods-semantic-color-surface-decorative-beta` |
| `--ods-color-new` | `--ods-semantic-color-surface-decorative-new` |
| `--ods-color-promotion` | `--ods-semantic-color-surface-decorative-promotion` |
| `--ods-color-text` | `--ods-semantic-color-content-text` |
| `--ods-color-heading` | `--ods-semantic-color-content-heading` |
| `--ods-color-text-secondary` | `--ods-semantic-color-content-placeholder` |
| `--ods-color-background-disabled-default` | _none_ |
| `--ods-color-background-readonly-default` | `--ods-semantic-color-surface-readonly` |
| `--ods-color-border-disabled-default` | _none_ |
| `--ods-color-border-readonly-default` | `--ods-semantic-color-border-readonly` |
| `--ods-color-text-disabled-default` | _none_ |
| `--ods-color-element-background-selected` | `--ods-semantic-color-surface-selected-solid` |
| `--ods-color-element-text-selected` | `--ods-semantic-color-content-on-selected-solid` |
| `--ods-color-form-element-background-default` | `--ods-semantic-color-surface-control` |
| `--ods-color-form-element-background-hover-default` | `--ods-semantic-color-interaction-control-highlight` |
| `--ods-color-form-element-background-focus-default` | `--ods-semantic-color-surface-control` |
| `--ods-color-form-element-background-critical` | `--ods-semantic-color-surface-control` |
| `--ods-color-form-element-background-selected-critical` | `--ods-semantic-color-surface-critical` |
| `--ods-color-form-element-border-default` | `--ods-semantic-color-border-control` |
| `--ods-color-form-element-border-hover-default` | `--ods-semantic-color-interaction-control-hover` |
| `--ods-color-form-element-border-focus-default` | `--ods-semantic-color-interaction-control-hover` |
| `--ods-color-form-element-border-critical` | `--ods-semantic-color-border-critical` |
| `--ods-color-form-element-text-default` | `--ods-semantic-color-content-text` |
| `--ods-color-form-element-text-placeholder-default` | `--ods-semantic-color-content-placeholder` |
<!-- /repoint-tokens:bc02-named -->

`--ods-color-text-secondary` was already dangling before v20 - it was read but never declared, so
those sites were rendering with an inherited color. The destination above is the closest real
role, not a value-preserving rename. The three `*-disabled-default` tokens have no destination, for
the same reason as in BC-01.

---

## BC-03 - 13 remaining legacy tokens removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The last 13 published tokens outside the two families above are removed with the rest of the old surface. |
| **Impact** | Same silent failure. Low volume, but these are the dimension tokens an app most often reuses for its own layout. |
| **Detection** | `grep -rnE -- '--ods-(border-radius|border-width|font-family|form-element|outline)-' src/` |
| **Codemod** | **automatable**, but the map below is a proposal. **To confirm with design before shipping the codemod.** |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, const `LEGACY` |

| before | value in 19.7.3 | proposed after | value in v20 |
| --- | --- | --- | --- |
| `--ods-border-radius-xs` | `2px` | - | no equivalent, the scale is now semantic |
| `--ods-border-radius-sm` | `4px` | `--ods-semantic-size-radius-control` | `4px` |
| `--ods-border-radius-md` | `8px` | `--ods-semantic-size-radius-container` | `8px` |
| `--ods-border-radius-lg` | `16px` | `--ods-semantic-size-radius-pill` | `16px` |
| `--ods-border-width-sm` | `1px` | `--ods-semantic-border-thickness` | `1px` |
| `--ods-border-width-md` | `2px` | `--ods-semantic-border-thickness-strong` | `2px` |
| `--ods-font-family-default` | Source Sans Pro stack | `--ods-semantic-font-family-body` | same stack, renamed Source Sans 3 (BC-13) |
| `--ods-font-family-code` | `'Source Code Pro', arial` | `--ods-semantic-font-family-code` | `'Source Code Pro', monospace` |
| `--ods-form-element-input-height` | `32px` | `--ods-semantic-size-block-size-md` | `32px` |
| `--ods-outline-color-default` | `primary-700` | `--ods-semantic-color-focus` | role |
| `--ods-outline-offset` | `2px` | `--ods-semantic-border-focus-offset` | `2px` |
| `--ods-outline-style-default` | `solid` | `--ods-semantic-border-focus-style` | `solid` |
| `--ods-outline-width` | `2px` | `--ods-semantic-border-focus-thickness` | `2px` |

`--ods-border-radius-xs` is the one with no destination: the radius scale is now named by what it
wraps (`control`, `container`, `overlay`, `pill`, `full`) and there is no rung below `control`.

---

## BC-04 - palette rungs `000` / `025` / `075` retired

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The palette is rebuilt on ten rungs, `50` to `900`. The old `000`, `025` and `075` rungs do not exist: `000` was white in every family, and `025` / `075` were folded into `50` and `100`. Only blue `500`-`900` and gray `600`-`900` keep their 19.7.3 values: blue and gray `100`-`400` each hold a lighter color than the same number did, gray `500` is darker, and green, orange and red are new ramps. |
| **Impact** | No numeric fallback. A consumer cannot mechanically map `--ods-color-primary-025` onto a palette rung, which is why BC-02 sends them to a role instead. A site moved to the palette by number, or a Sass read of `$ods-palette-gray-200`, silently gets another color. |
| **Detection** | `grep -rnE -- '--ods-color-[a-z]+-(000\|025\|075)' src/` |
| **Codemod** | n/a - handled by BC-02 |
| **Source of truth** | `packages/themes/src/default/_variables.scss` |

---

## BC-05 - SCSS variables `$ods-*` removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | 161 of the 207 SCSS variables of `src/default/_variables.scss` are gone: the whole `$ods-color-*` ramp, `$ods-color-brand-*`, the flat form-element variables, the breakpoints, the named palette colors and the dimension variables listed in BC-03. 46 palette variables keep their name, but only 10 keep their value (blue `500`-`900`, gray `600`-`900`, white, see BC-04). 25 are new: the `50` rungs, the navy ramp, black, the four decorative colors and the opacity rungs. |
| **Impact** | No export condition forwards the file, in 19.7.3 as in v20: only a consumer who resolved `src/default/_variables.scss` by path reaches it. A removed variable fails at build time; a kept one that changed value does not fail at all. |
| **Detection** | `grep -rnE "ods-themes/src/default/_?variables" src/`: the path is the only way to these variables, so the import finds every file that reads them |
| **Codemod** | **manual** - a SCSS variable is compile-time, so the right answer is usually "stop using it, read the custom property instead". The breakpoints are still exported by `@ovhcloud/ods-react/style`, under the same names. |
| **Source of truth** | `packages/themes/src/default/_variables.scss` |

---

## BC-06 - `./default/tokens` JSON content replaced

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | `@ovhcloud/ods-themes/default/tokens` still resolves and keeps its shape, but no key survives: the 187 old names are out, and 282 new ones are in (191 `--ods-semantic-*` and 91 `--ods-palette-*`, of which 20 are the brand and accent ramps). `root` maps each name to what it resolves to, always a literal: in 19.7.3 it gave the declared value, and 24 of its 187 values were `var()` references (`--ods-theme-primary-color` was `var(--ods-color-primary-500)`). A new `refs` object gives the declared value of the 160 tokens that point at another one (`var(...)`). Values are the unconditional ones: the reduced-motion durations declared under `@media (prefers-reduced-motion: reduce)` are not in the JSON. |
| **Impact** | Anything reading the JSON by key - a theme editor, a Figma sync, a docs table - reads `undefined`. |
| **Detection** | `grep -rn 'ods-themes/default/tokens' src/` |
| **Codemod** | **manual** - depends entirely on what the consumer does with the JSON. |
| **Source of truth** | `packages/themes/scripts/generate-token-lists.js` |

---

## BC-07 - the default theme no longer looks like OVHcloud

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | `@ovhcloud/ods-themes/default/css` now ships the Aluminium look: a grey page, and the accent ramp `--ods-palette-accent-*` (selection, text, headings, form controls) aliased to the navy family. The brand ramp `--ods-palette-brand-*` still aliases blue. The OVHcloud look is `@ovhcloud/ods-themes/blue-jeans/css`, a `:root` overlay that re-aims the accent ramp onto blue, redeclares the green, orange and red families with their v19 values and overrides the roles that differ. |
| **Impact** | The largest visible change of the major: an app that imports only the default theme changes color almost everywhere. Loading `blue-jeans/css` *before* `default/css`, or a second copy of `default/css` injected later (a micro-frontend shipping its own), silently brings the default look back, because both declare their tokens on `:root` and the last one wins. |
| **Detection** | `grep -rn 'ods-themes/default/css' src/` - every app that imports it alone |
| **Codemod** | **partial** - add `import '@ovhcloud/ods-themes/blue-jeans/css'` right after the default import to keep the OVHcloud look. Where the theme is injected at runtime, the order has to be checked by hand. |
| **Source of truth** | `packages/themes/src/default/index.scss`, `packages/themes/src/blue-jeans/index.scss` |

This is the intended delivery: the default theme ships the Aluminium look, and the OVHcloud look
stays the `blue-jeans` overlay, loaded after it.

---

## BC-08 - tier-3 component token values re-bound

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | Most `--ods-<component>-*` names are kept, and their default values now reference `--ods-semantic-*` instead of `--ods-theme-*` / `--ods-color-*`. Removed: two stray `--ods-theme-*` locals, the dead tokens listed below, the seven disabled-state tokens of BC-12, the renames of BC-17, BC-18, BC-23 and BC-24 and the removals of BC-25. Added: `--ods-card-background-color` and `--ods-accordion-background-color`, the ten `--ods-badge-border-color-<status>` and the Badge emphasis names, `--ods-badge-*-color-<status>-high` and `--ods-badge-text-color-<status>-low` (BC-19), the three `--ods-link-text-color*` (BC-19), the twelve `--ods-message-border-color-*-high` and `-medium`, `--ods-tab-border-color-selected-switch`, an internal reset (BC-12) and the new names of BC-17, BC-18, BC-23 and BC-24. Several bindings also changed role, mostly to give `active` states their own `interaction-*-active`: the pressed rung is kept on purpose, even where the default theme gives it the hover value, so that a theme can tell them apart. |
| **Impact** | A consumer overriding a component token by name keeps working, except for a removed or renamed name, whose override is silently ignored. A consumer overriding it **with a value that reads a removed token** (`--ods-button-background-color-critical: var(--ods-color-critical-500)`) breaks - that is BC-01 / BC-02 seen from the component side. Colors shift slightly even where nothing breaks. |
| **Detection** | the BC-01 / BC-02 greps for a value that reads a removed token, and the two commands below for the removed names and the `./style` arithmetic |
| **Codemod** | none needed beyond BC-01 / BC-02 for the values; the removed names are listed below with their replacement |
| **Source of truth** | `packages/ods-react/src/style/*.scss` |

The 25 removed component properties (this entry, BC-12, BC-17 and BC-18) and the 11 removed
`./style` exports (BC-12, BC-16 and BC-18) are found by:

```sh
grep -rnE -- 'ods-button-border-radius-width|ods-code-(primary-color|secondary-color|trigger-background-color)([^-a-z]|$)|(checked|selected)-disabled|tab-border-color-disabled|ods-tile-(background-color|border-color|border-width)(-disabled)?([^-a-z]|$)|ods-modal-header-background-color|close-button-text-color-primary|ods-tab-(border|text)-color-selected([^-a-z]|$)|toggle-control-(background-color-hover|border-color)([^-a-z]|$)|\$ods-state-is-disabled-|\$ods-modal-(z-index|border-radius|margin)([^-a-z]|$)|ods-overlay-(arrow-background-color|select-z-index)|drawer-max-size|ods-modal-color\(' src/
```

The mixins and SCSS variables exported by `@ovhcloud/ods-react/style` keep their names, except for
the disabled state (BC-12), the removals of BC-16, the rename of BC-18 and the status mixins
(BC-23 to BC-25), which are renamed on `Button` and `Message` and now stop on a value they do
not know. Six variables that held a number in 19.7.3 now hold a `var()` string: `$ods-button-size-xs` (`24px`), `$ods-button-size-sm`
(`32px`), `$ods-button-size-md` (`40px`), `$ods-badge-height-md` (`24px`), `$animation-duration`
(`0.3s`) and `$ods-link-font-weight` (`600`). A plain use compiles and renders as before, Sass
arithmetic does not: `ods.$animation-duration * 2` fails with "Undefined operation", and
`ods.$ods-badge-height-md + 4px` compiles without an error to an invalid value. The fix is to move
the operation into `calc()`: `calc(#{ods.$animation-duration} * 2)`. To find them, with a namespace
or without one (`@use ... as *`), knowing that it also lists an `$animation-duration` of your own:

```sh
grep -rnE '\$(ods-badge-height-md|ods-button-size-(xs|sm|md)|animation-duration|ods-link-font-weight)([^-a-z0-9]|$)' src/
```

`$ods-input-actions-padding-right` goes from `4px` to `2px`: the action buttons of a field sit as
close to its border as its block inset. `./style` also gains the `ods-highlight-indicator()` mixin.

`Tile` loses `--ods-tile-border-width`, `--ods-tile-border-color` and `--ods-tile-background-color`.
All three were declared but never read: `Tile` renders a `Card`, so its border, its background and
its elevation come from `--ods-card-*`. Overriding them never did anything, and overriding the
`--ods-card-*` equivalents still works.

`Modal` loses the six `--ods-modal-header-background-color-*`, only read by the `ods-modal-color()`
mixin that nothing has called since 19.5.0 (see BC-16). Overriding them never did anything.

Three removed tokens did paint something in 19.7.3, and an override of them is now ignored:

- `--ods-tab-border-color-selected` and `--ods-tab-text-color-selected` painted the selected tab.
  The selected tab now reads `--ods-semantic-color-border-selected-solid` and
  `--ods-semantic-color-content-on-selected`: override those on `[data-ods="tab"]`.
- `--ods-message-close-button-text-color-primary` painted the close button of a primary Message.
  The close button is now a neutral low `Button`: override `--ods-button-text-color-neutral-low`
  on `[data-ods="message"] [data-ods="button"]`.

`Toggle` loses `--ods-toggle-control-background-color-hover`, as an unchecked toggle no longer
changes its background on hover, and `--ods-toggle-control-border-color`, as the border reads
`--ods-semantic-color-border-control`: override that one on `[data-ods="toggle"]`.

---

## BC-09 - `Card` defaults to `neutral`

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | `<Card>` without a `status` or `color` prop was `primary`, it is now `neutral`. |
| **Impact** | Every card that relied on the default changes color. No type error, no runtime warning. |
| **Detection** | `grep -rn '<Card' src/` and look for the ones with neither `status` nor `color` |
| **Codemod** | **automatable** - add `status="accent"` to every `<Card>` that has neither `status` nor `color`, for a consumer who wants the old look. Worth offering as an opt-in step rather than applying by default: the new default is the intended one. |
| **Source of truth** | `packages/ods-react/src/components/card/src/components/card/Card.tsx` |

---

## BC-10 - `Button` radius moves to the control family

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The three sizes derived their radius from the container rung (`xs` 2px, `sm` 4px, `md` 8px). They now all read `--ods-semantic-size-radius-control`, so a button is 4px whatever its size - the same radius as the input it sits next to. |
| **Impact** | `xs` goes 2px -> 4px and `md` goes 8px -> 4px. Visual only, on every button in the app. The `--ods-button-border-radius-xs` / `-sm` / `-md` names are kept, so a consumer who wants the old scale re-declares them. |
| **Detection** | none to run - it applies to every `<Button>` |
| **Codemod** | **manual** - restore the old look by re-declaring the three component tokens on the buttons, outside any `@layer`: `[data-ods="button"] { --ods-button-border-radius-xs: 2px; --ods-button-border-radius-sm: 4px; --ods-button-border-radius-md: 8px; }`. On `:root` they have no effect: the button declares them on itself. |
| **Source of truth** | `packages/ods-react/src/style/_button.scss` |

A theme that widens `radius-container` no longer widens buttons with it. `Tabs` still derives its
radius from the container rung, so the two no longer move together.

---

## BC-11 - `Accordion` takes the whole container radius

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | `--ods-accordion-border-radius` was `calc(--ods-semantic-size-radius-container / 2)`, it is now `--ods-semantic-size-radius-container`. An accordion is an in-flow container, so it reads the container rung whole, like `Card`, `Tile`, `Meter`, `Progress Bar` and `Skeleton`. |
| **Impact** | The outer corners of the first and last item go 4px -> 8px. Visual only. The token name is unchanged, so an override by name keeps working. |
| **Detection** | none to run - it applies to every `<Accordion>` |
| **Codemod** | **manual** - restore the old look on the accordions, outside any `@layer`: `[data-ods="accordion"] { --ods-accordion-border-radius: 4px; }`. On `:root` it has no effect: the accordion declares the token on itself. |
| **Source of truth** | `packages/ods-react/src/components/accordion/src/components/accordion/accordion.module.scss` |

The trigger and the content inherit the item's radius, so nothing else changes. A theme that widens
`radius-container` now widens the accordion with it, at full rate rather than at half.

---

## BC-12 - disabled is an opacity, not a color

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | A disabled component keeps the colors of its enabled state - variant, checked, selected - and is dimmed with `opacity: var(--ods-semantic-opacity-disabled)` instead of being repainted grey. The `ods-is-disabled()` mixin of `@ovhcloud/ods-react/style` sets that opacity and no longer sets `border-color`, `background-color` or `color`, and its three SCSS variables `$ods-state-is-disabled-background-color`, `$ods-state-is-disabled-border-color` and `$ods-state-is-disabled-text-color` are removed. Seven component tokens that only painted a disabled state go with them: `--ods-button-group-item-background-color-checked-disabled`, `--ods-switch-item-background-color-checked-disabled`, `--ods-tab-background-color-selected-disabled-switch`, `--ods-tab-border-color-disabled`, `--ods-tab-border-color-selected-disabled`, `--ods-tab-border-color-selected-disabled-switch` and `--ods-tile-background-color-disabled`. |
| **Impact** | Visual on every disabled component. A stylesheet that reads one of the three SCSS variables fails to compile. One that includes `ods-is-disabled()` gets the opacity instead of the grey, and disabled colors a consumer painted on top of an ODS component are now dimmed as well. An override of one of the seven component tokens is silently ignored. |
| **Detection** | `grep -rnE 'ods-state-is-disabled-\|(checked\|selected)-disabled\|tab-border-color-disabled\|tile-background-color-disabled' src/` |
| **Codemod** | **manual** - nothing maps 1:1, the grey has no opacity equivalent. Remove the variable reads and the token overrides; a consumer who wants a grey disabled state styles `:disabled` / `[data-disabled]` on its side. |
| **Source of truth** | `packages/ods-react/src/style/_state.scss` |

A disabled component dims once. The mixin resets `--ods-state-is-disabled-opacity` on its children,
so a disabled part nested in it - the `Input` of a `Combobox`, the clear `Button` of an `Input` -
does not multiply a second opacity on top. `ButtonGroup`, `Switch` and `Range` carry the opacity on
their root when the whole group is disabled, rather than on each item.

The theme declares no disabled color role: `--ods-semantic-opacity-disabled` carries the whole
state.

---

## BC-13 - the default font family is renamed `'Source Sans 3'`

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The default font is declared as `'Source Sans 3'` instead of `'Source Sans Pro'`, in `--ods-semantic-font-family-body`, `--ods-semantic-font-family-heading` and the `@font-face` rules of `./default` and `./default/fonts`, with no alias. The `assets/fonts/source-sans-pro/` folder becomes `assets/fonts/source-sans-3/`, and the `source-sans-pro-font-face` / `source-sans-pro-italic-font-face` mixins become `source-sans-3-font-face` / `source-sans-3-italic-font-face`. The font files themselves are unchanged. |
| **Impact** | Visual only for CSS that writes `'Source Sans Pro'`: it no longer matches a font loaded by ODS and falls back to the next font of its stack. A Sass import of the old mixins or of the old folder fails to compile, a CDN URL or a preload of the old folder returns a 404. |
| **Detection** | `grep -rnE "Source Sans Pro\|source-sans-pro" src/` |
| **Codemod** | **automatable** - replace `'Source Sans Pro'` with `'Source Sans 3'` (or the whole stack with `var(--ods-semantic-font-family-body)`), and `source-sans-pro` with `source-sans-3` in the paths and mixin names. |
| **Source of truth** | `packages/themes/src/helpers/_fonts.scss` |

---

## BC-14 - form fields paint their own background

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The `ods-input()` mixin of `@ovhcloud/ods-react/style`, and every field built on it (`Input`, `Quantity`, `Textarea`, and the components that render an `Input`: `Combobox`, `Datepicker`, `Password`, `Phone Number`, `Timepicker`, ...), declares `background-color: var(--ods-semantic-color-surface-control)`. In 19.7.3 it declared no background, so a field showed whatever the browser or the ground behind it gave. |
| **Impact** | Visual only. A field sitting on a tinted ground (a card, a message, a table header) now shows a white box instead of the tint. |
| **Detection** | none to run - it applies to every field |
| **Codemod** | **manual** - a consumer who wants the old transparency re-declares `--ods-semantic-color-surface-control: transparent` on the container of the fields, never on `:root`: the open lists of `Select`, `Combobox` and `Query Filter` paint the same role and would turn transparent too. In that container, it also clears the `Checkbox`, the `Select` control, the outline `Button` (a Cancel or Back button next to the fields), and a list rendered with `createPortal={ false }`, which sits inside the container. |
| **Source of truth** | `packages/ods-react/src/style/_input.scss` |

---

## BC-15 - a modal always stacks above a drawer

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The overlays read their own z-index rung instead of offsets on the dropdown one. `ModalContent` puts its backdrop at `--ods-semantic-z-index-modal` minus one and its positioner at `--ods-semantic-z-index-modal`; `DrawerContent` does the same with `--ods-semantic-z-index-drawer`, which `--ods-drawer-z-index` already read. In 19.7.3 a modal, a drawer with a backdrop and a drawer without one all sat on the same layer, so the one opened last was on top. |
| **Impact** | A drawer opened from a modal now opens underneath it. A consumer `positionerStyle` / `backdropStyle` that set a z-index relative to the old `--ods-theme-overlay-z-index` chain is now below the drawer and modal rungs. Visual only. |
| **Detection** | `grep -rnE 'positionerStyle\|backdropStyle\|--ods-drawer-z-index\|--ods-theme-overlay-z-index\|\$ods-overlay-[a-z]+-z-index' src/`, plus any literal `z-index` between `102` and `399` meant to clear the ODS overlays |
| **Codemod** | **manual** - restack against the rungs below, or pass a higher z-index through `positionerStyle` to the drawer that has to win. |
| **Source of truth** | `packages/ods-react/src/components/modal/src/components/modal-content/ModalContent.tsx`, `packages/ods-react/src/components/drawer/src/components/drawer-content/DrawerContent.tsx` |

| layer | 19.7.3 | v20 token | v20 |
| --- | --- | --- | --- |
| lists, popovers, tooltips, toaster | `99` (`--ods-theme-overlay-z-index`) | `--ods-semantic-z-index-dropdown` | `200` |
| drawer | `101` (`--ods-drawer-z-index`) | `--ods-semantic-z-index-drawer` | `300`, backdrop `299` |
| modal | `101`, backdrop `100` | `--ods-semantic-z-index-modal` | `400`, backdrop `399` |
| `$ods-overlay-modal-z-index` | `100` | `--ods-semantic-z-index-modal` | `400` |
| `$ods-overlay-drawer-z-index` | `101` | `--ods-semantic-z-index-drawer` | `300` |

The two SCSS variables swap order: a layer that sat between them now sits elsewhere. A consumer
layer with a literal z-index from `102` to `399`, which cleared every ODS overlay in 19.7.3, now
goes under the v20 modal.

---

## BC-16 - deprecated and unused SCSS exports of `@ovhcloud/ods-react/style` removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The five variables marked "[Deprecated] will be removed in next major version" are removed: `$ods-overlay-arrow-background-color`, `$ods-modal-border-radius`, `$ods-modal-margin`, `$ods-modal-z-index` and `$drawer-max-size`. Two unused exports go with them: the `ods-modal-color()` mixin, which nothing has called since 19.5.0, and `$ods-overlay-select-z-index`, which nothing reads. |
| **Impact** | A stylesheet that reads one of them fails to compile. |
| **Detection** | `grep -rnE '\$(ods-overlay-arrow-background-color\|ods-modal-border-radius\|ods-modal-margin\|ods-modal-z-index\|drawer-max-size\|ods-overlay-select-z-index)([^-a-z0-9]\|$)\|ods-modal-color\(' src/` |
| **Codemod** | **manual** - read what they held instead: `--ods-semantic-color-surface-overlay` (the color the overlays and their arrows paint), `--ods-semantic-size-radius-overlay`, `$ods-modal-margin-horizontal` / `-vertical`, `--ods-semantic-z-index-modal`, `$drawer-max-width` / `$drawer-max-height`, and `$ods-overlay-base-z-index` for `$ods-overlay-select-z-index`. The `--ods-modal-*` custom properties would not do: they are only declared inside a `ModalContent`. Drop the `ods-modal-color()` includes: the header background they painted belongs to a `color` the Modal no longer renders. |
| **Source of truth** | `packages/ods-react/src/style/_overlay.scss`, `_modal.scss`, `_drawer.scss` |

## BC-17 - `Code` custom properties renamed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | Three `Code` custom properties are renamed after what they hold: `--ods-code-primary-color` (the text ink) becomes `--ods-code-text-color`, `--ods-code-secondary-color` (the block background) becomes `--ods-code-background-color`, and `--ods-code-trigger-background-color` (the copy button ink, not a background) becomes `--ods-code-trigger-color`. |
| **Impact** | An override of an old name is silently ignored: the block keeps the theme colors. Nothing fails to compile. |
| **Detection** | `grep -rnE -- '--ods-code-(primary-color\|secondary-color\|trigger-background-color)([^-a-z0-9]\|$)' src/` |
| **Codemod** | **automatable** - three 1:1 renames. `--ods-code-trigger-background-color-hover` and `-active` keep their names: they are backgrounds. |
| **Source of truth** | `packages/ods-react/src/components/code/src/components/code/code.module.scss` |

---

## BC-18 - `Button` border width token renamed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | `--ods-button-border-radius-width` becomes `--ods-button-border-width`, and the SCSS variable `$ods-button-border-radius-width` of `@ovhcloud/ods-react/style` becomes `$ods-button-border-width`. The token holds the border thickness of the button, not a radius. |
| **Impact** | An override of the old custom property is silently ignored. A read of the old SCSS variable fails to compile with "Undefined variable". |
| **Detection** | `grep -rn 'ods-button-border-radius-width' src/` (both forms) |
| **Codemod** | **automatable** - a 1:1 rename of both forms. |
| **Source of truth** | `packages/ods-react/src/style/_button.scss` |

---

## BC-19 - default rendering changes

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | Several components render differently with no change on the consumer side: `Card`, `Tile` and `Accordion` paint a background, `Badge` becomes a pill with a border and, without `emphasis`, loses its tinted background, the selected `Tab` fills, the `Link` hover keeps the rest color, the tags of a multiple `Combobox` and of a `Query Filter` turn `accent`, and the transitions read the motion tokens. Each case is listed below with the rule that brings 19.7.3 back. |
| **Impact** | Visual only. On a tinted ground, a card or an accordion now shows a white box. `status="accent"`, which brings back the 19.7.3 color of a `Card` without status (BC-09), does not bring back its transparency. |
| **Detection** | none to run - it applies to every `<Card>`, `<Tile>`, `<Accordion>`, `<Badge>`, `<Tabs>`, `<Link>`, multiple `<Combobox>` and `<QueryFilter>` |
| **Codemod** | **manual** - add the rules below to the consumer stylesheet, outside any `@layer`. |
| **Source of truth** | `packages/ods-react/src/components/card/src/components/card/card.module.scss`, `packages/ods-react/src/components/accordion/src/components/accordion/accordion.module.scss`, `packages/ods-react/src/style/_badge.scss`, `packages/ods-react/src/components/tabs/src/components/tab/tab.module.scss`, `packages/ods-react/src/style/_link.scss`, `packages/ods-react/src/components/combobox/src/components/combobox-control/ComboboxControl.tsx`, `packages/ods-react/src/components/query-filter/src/components/query-filter-tags/QueryFilterTags.tsx`, `packages/themes/src/default/index.scss` (motion) |

- **Card, Tile and Accordion** paint `--ods-semantic-color-surface-raised` where 19.7.3 painted no
  background, through the new `--ods-card-background-color` and `--ods-accordion-background-color`.
  Keep 19.7.3: `[data-ods="card"], [data-ods="tile"] { --ods-card-background-color: transparent; }`
  and `[data-ods="accordion"] { --ods-accordion-background-color: transparent; }`.
- **Badge** becomes a pill with a border, read from the new `--ods-badge-border-color-<color>`. Its
  default `medium` emphasis sits on `surface-raised` with the `content-<status>` text, where
  19.7.3 had a tinted background (filled for `primary`): `emphasis="high"` brings the tinted
  background back, lined with a light border (without border in the blue-jeans theme).
  Every size keeps its 19.7.3 height, the border taken off the vertical padding, but the pill takes
  8px on each side (12px in `lg`) where 19.7.3 took 4px (6px), through
  `--ods-badge-padding-horizontal-<size>`. The blue-jeans theme keeps the 19.7.3 widths. Closest to
  19.7.3 (the colors stay those of v20):
  `[data-ods="badge"] { --ods-badge-border-radius: 4px; --ods-badge-padding-horizontal-sm: 3px; --ods-badge-padding-horizontal-md: 3px; --ods-badge-padding-horizontal-lg: 5px; }`,
  with `emphasis="high"` for the tinted background.
- **Tabs**: the selected tab fills with `--ods-semantic-color-surface-selected` where 19.7.3 left it
  transparent, and the selected segment of a switch gets an outline,
  `--ods-tab-border-color-selected-switch`. Keep 19.7.3:
  `[data-ods="tab"] { --ods-semantic-color-surface-selected: transparent; --ods-tab-border-color-selected-switch: transparent; }`.
  Hovering a switch segment now paints `--ods-tab-background-color-hover`, the token the default
  tabs already painted on hover, so no rule removes it without changing those too.
- **Combobox**: the tags of a multiple Combobox are `accent`, where 19.7.3 rendered the `Tag`
  default, `information`, and the focused tag reads `--ods-tag-border-color-accent-hover` and
  `--ods-tag-background-color-accent-hover` instead of the information ones. An override of the
  information `Tag` tokens aimed at these tags no longer reaches them: override the
  `--ods-tag-*-accent*` tokens instead.
- **Query Filter**: the tags are `accent`, where 19.7.3 rendered the default `information` Tag. An
  override of the information `Tag` tokens no longer reaches them: override the
  `--ods-tag-*-accent*` tokens instead.
- **Link**: the hover color is the rest color, `--ods-semantic-color-content-brand`, where 19.7.3
  darkened it: the underline is the hover signal. The colors are read from `--ods-link-text-color`,
  `--ods-link-text-color-hover` and `--ods-link-text-color-visited`, also declared by the
  `ods-link()` mixin. Keep the 19.7.3 hover:
  `[data-ods="link"] { --ods-link-text-color-hover: var(--ods-semantic-color-interaction-brand-hover); }`.
- **Motion**: the transitions read the motion tokens, and a few of them change. The Toggle thumb
  goes from `0.4s ease` to `--ods-semantic-motion-duration-slow` (300ms) `ease-in-out`, its checked
  background and border from `0.2s ease` to `-medium` (200ms) `ease-in-out`, the Radio dot from
  120ms to `-fast` (150ms), and the TreeView and TabList transitions from `ease` to `ease-in-out`.
  Under `prefers-reduced-motion: reduce`, the default theme also brings `-fast`, `-medium` and
  `-slow` down to `0.01s` for every component that reads them. Keep the full durations for those
  users with your own block, loaded after the theme:
  `@media (prefers-reduced-motion: reduce) { :root { --ods-semantic-motion-duration-fast: 150ms; --ods-semantic-motion-duration-medium: 200ms; --ods-semantic-motion-duration-slow: 300ms; } }`.

---

## BC-20 - a 19.x custom theme no longer applies

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | A 19.x custom theme, Theme Generator exports included, declares `--ods-theme-*` and `--ods-color-*`, which v20 neither declares nor reads. A v20 theme re-declares the brand and accent ramps, `--ods-palette-brand-*` and `--ods-palette-accent-*` (`50` to `900`), on `:root`, in a stylesheet loaded after `@ovhcloud/ods-themes/default/css`. |
| **Impact** | Silent: the custom theme has no effect, and nothing warns. The ramps do not reach every role: the focus ring (`--ods-semantic-color-focus`), the status families and the chart series keep their default values, by design. Over `default/css` alone, the brand ghost and outline Buttons take their text from the accent ramp (`--ods-semantic-color-content-brand-minor` and `--ods-semantic-color-content-on-brand`, on accent `800`) and their border from gray (`--ods-semantic-color-border-brand-minor`): a brand theme re-declares these three roles to repaint them. `blue-jeans/css` points the three at the brand ramp instead (`500`, `700` and `500`), so a theme loaded after it repaints them through that ramp. The ramps also only take effect on `:root`, where the roles are computed: a theme scoped to a container, such as the root of a micro-frontend, re-declares the `--ods-semantic-*` roles themselves. |
| **Detection** | `grep -rnE -- "--ods-(theme\|color)-[a-z0-9-]+[\"']?[[:space:]]*:" src/`: it finds a theme written as CSS, as the JSON the 19.x Theme Generator exports, or as that object kept in a JS or TS file |
| **Codemod** | **manual** - move the brand colors onto the two ramps, then re-declare the roles the ramps do not reach. |
| **Source of truth** | `packages/themes/src/default/index.scss` (the roles and the ramps they read), `packages/themes/src/blue-jeans/index.scss` (a theme written this way) |

---

## BC-21 - form fields share one default width

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | `Input` (password type included), `Password`, `Textarea`, `Clipboard`, `Select`, `Combobox`, `Datepicker` (input and calendar trigger together), `Phone Number`, `Timepicker` (input and timezone select together) and the `Editable` input render at `var(--ods-semantic-size-inline-size-field)`, `280px` in the default theme, border box and addons included, capped at `max-width: 100%`. In 19.7.3, `Select` and `Combobox` filled their container, and any field inside a `FormField` stretched to its width. The `Select` and `Combobox` roots now always carry a CSS-module class and render as `inline-block`. |
| **Impact** | Visual only, nothing fails. A field that filled a form column, a `FormField` or a table cell now stops at `280px`. |
| **Detection** | none to run - it applies to every listed field; review the forms whose layout relied on full-width `Select` or `Combobox` |
| **Codemod** | **manual** - set `width: 100%` on the root of the field to fill the container again (a `className` on `Input` and `Password`, on both `Datepicker` and `DatepickerControl`), never on `SelectControl`, `ComboboxControl` or `PhoneNumberControl`; or change every field at once by re-declaring `--ods-semantic-size-inline-size-field`. |
| **Source of truth** | `packages/ods-react/src/style/_input.scss` (`ods-input-width()`), `packages/themes/src/default/index.scss` (the token) |

---

## BC-22 - a drawer without backdrop gives the focus back on close

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | Without backdrop, closing a `Drawer` while the focus is inside it, or after its focused element was removed, moves the focus to the `DrawerTrigger` it was opened from, or to the element focused before it opened, and scrolls it into view. In 19.7.3 the focus stayed on an element of the closed drawer. A custom `id` on `DrawerContent` is now given to the dialog machine: Escape, `closeOnInteractOutside` and the focus on open work with it, where 19.7.3 silently ignored them. |
| **Impact** | Behavior only, nothing fails. The page may scroll back to the trigger on close. With a custom content `id`, Escape now closes the drawer and `onOpenChange` receives `{ open: false }`. A focus the user or the application moved elsewhere is left where it is. |
| **Detection** | every `<Drawer>` without `backdrop`; `grep -rnE '<DrawerContent[^>]*[[:space:]]id=' src/` for the custom content ids |
| **Codemod** | **none needed** - code that focuses the trigger again after closing becomes redundant and can be removed. A drawer unmounted while open gives nothing back, as in 19.7.3: keep it mounted and drive `open` to get the focus return. |
| **Source of truth** | `packages/ods-react/src/components/drawer/src/components/drawer/Drawer.tsx`, `packages/ods-react/src/components/drawer/src/components/drawer-content/DrawerContent.tsx` |

---

## BC-23 - `Badge`, `Card`, `Message` and `Tag` status custom properties renamed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The status custom properties and Sass mixin values of `Badge`, `Card`, `Message` and `Tag` are named after the status they paint: `primary` becomes `accent` (`--ods-card-border-color-primary` becomes `--ods-card-border-color-accent`, `ods-tag-color('primary')` becomes `ods-tag-color('accent')`). The `Badge` ones of the six statuses that have emphases take the emphasis: `--ods-badge-<property>-color-<status>` painted the tinted Badge in 19.7.3, the `high` one in v20, and becomes `-<status>-high` (`--ods-badge-background-color-primary` becomes `--ods-badge-background-color-accent-high`); the default `medium` Badge reads the new `-<status>-medium` names, and no unsuffixed name is left for these statuses (the decorative `alpha`, `beta`, `new` and `promotion` keep theirs). The `Message` ones also take the emphasis: `--ods-message-<property>-color-<status>` becomes `-<status>-high` and `-<status>-light` becomes `-<status>-medium` (`--ods-message-background-color-primary` becomes `--ods-message-background-color-accent-high`), and `ods-message-variant-default` and `-light` become `ods-message-emphasis-high` and `-medium`. From 19.7.3, that is 44 custom properties: 24 `Message`, 12 `Badge`, 7 `Tag` and 1 `Card`. `Combobox` reads the `Tag` ones. |
| **Impact** | An override or a `var()` of an old custom property is silently ignored. A status mixin called with `'primary'` fails to compile and names the new value; `ods-badge-color`, `ods-tag-color` and `ods-message-emphasis-*` stop on any value they do not know, where 19.7.3 emitted no color. An `ods-message-variant-*` call fails with "Undefined mixin". |
| **Detection** | `grep -rnE -- '--ods-(badge\|card\|tag)-[a-z-]*primary\|--ods-badge-(background\|text)-color-(critical\|information\|neutral\|success\|warning)([^-a-z]\|$)\|--ods-message-(background\|text)-color-[a-z]+(-light)?([^-a-z]\|$)\|ods-(badge-color\|tag-color)[a-z-]*\(.{0,3}primary\|ods-message-variant-' src/` |
| **Codemod** | **automatable** - 1:1 renames: `primary` becomes `accent` in `--ods-card-*`, `--ods-tag-*`, `ods-badge-color` and `ods-tag-color`, and the `Message` names take `-high` or `-medium` as above. For `Badge`, the 19.7.3 `--ods-badge-background-color-<status>` / `--ods-badge-text-color-<status>` (the tinted Badge) map to the `-high` names, together with `emphasis="high"` on the Badge; the default `medium` Badge reads the `-medium` names. A name built by interpolation (`--ods-tag-background-color-#{$status}`) or a status passed through a variable or a list needs a review: the build reports the mixin values one at a time, nothing reports a custom property. |
| **Source of truth** | `packages/ods-react/src/style/_badge.scss`, `_message.scss`, `_tag.scss`, `packages/ods-react/src/components/card/src/components/card/card.module.scss` |

---

## BC-24 - `Button` custom properties and Sass mixins named after the status and the emphasis

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The `Button` status custom properties and Sass mixins are named after the status and the emphasis they paint, as the props are. `ods-button-variant-default`, `-outline` and `-ghost` become `ods-button-emphasis-high`, `-medium` and `-low`. `--ods-button-<property>-color-<status>`, with its `-hover` and `-active` states, becomes `-<status>-high`; `-<status>-outline` becomes `-<status>-medium` and `-<status>-ghost` becomes `-<status>-low`, with their states. `primary` becomes `brand` (`--ods-button-background-color-primary-hover` becomes `--ods-button-background-color-brand-high-hover`, `ods-button-variant-default('primary')` becomes `ods-button-emphasis-high('brand')`). From 19.7.3, that is 66 custom properties, 22 for each of `brand`, `critical` and `neutral`, and 3 mixins; the other `Button` status names are removed (BC-25). `Datepicker` reads the new names. |
| **Impact** | An override or a `var()` of an old custom property is silently ignored. No old name is reused with another meaning: the names without emphasis, which painted the filled `Button`, are gone, so an old override never paints another emphasis. An old mixin fails with "Undefined mixin", `'primary'` fails to compile and names `'brand'`, and any value the mixins do not know stops the build. |
| **Detection** | `grep -rnE -- '--ods-button-(background\|border\|text)-color-[a-z]+(-ghost\|-outline)?(-hover\|-active)?([^-a-z]\|$)\|ods-button-variant-' src/` (every 19.7.3 name, no v20 one) |
| **Codemod** | **automatable** - 1:1 renames, in this order: `primary` becomes `brand`, `-ghost` becomes `-low`, `-outline` becomes `-medium`, a name without emphasis takes `-high`, then the mixins. The names that BC-25 removes come out of it as names that do not exist (`--ods-button-text-color-brand-high-hover`, `--ods-button-border-color-brand-low`): remove them. |
| **Source of truth** | `packages/ods-react/src/style/_button.scss` |

---

## BC-25 - 108 `Button` and `Tag` custom properties removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | 108 custom properties are removed. The 81 `--ods-button-*-information*`, `--ods-button-*-success*` and `--ods-button-*-warning*` ones (27 per status) styled the `Button` `color` values removed without `status` equivalent. The 27 others held the rest value and no style read them: `--ods-button-text-color-<status>-hover` and `-active` (a high `Button` keeps its text color) and `--ods-button-border-color-<status>-ghost` with its states (a low `Button` draws no border), for `brand`, `critical` and `neutral` (15), and `--ods-tag-text-color-<status>-hover` and `-active` for the 6 `Tag` statuses (12). The `Button` mixins accept `brand`, `critical` and `neutral` only. |
| **Impact** | An override of one of the 27 unread names never did anything; an override of one of the 81 others does nothing now. A `var()` of a removed name resolves to nothing: the element loses that color. A `Button` mixin called with `'information'`, `'success'` or `'warning'` fails to compile and says the status is removed. |
| **Detection** | `grep -rnE -- '--ods-button-[a-z-]*(information\|success\|warning)\|--ods-button-text-color-[a-z]+-(hover\|active)([^-a-z]\|$)\|--ods-button-border-color-[a-z]+-ghost\|--ods-tag-text-color-[a-z]+-(hover\|active)([^-a-z]\|$)\|ods-button-variant-[a-z]+\(.{0,3}(information\|success\|warning)' src/` |
| **Codemod** | **partial** - a `var()` of a removed `information`, `success` or `warning` name maps 1:1 to the semantic role it held (table below); an override of a removed name paints nothing and is deleted, which takes a look at what the consumer meant. |
| **Source of truth** | `packages/ods-react/src/style/_button.scss`, `packages/ods-react/src/style/_tag.scss` |

| removed, `<status>` being `information`, `success` or `warning` | value it held |
| --- | --- |
| `--ods-button-background-color-<status>` | `var(--ods-semantic-color-surface-<status>)` |
| `--ods-button-background-color-<status>-hover` | `var(--ods-semantic-color-interaction-<status>-hover)` |
| `--ods-button-background-color-<status>-active` | `var(--ods-semantic-color-interaction-<status>-active)` |
| `--ods-button-border-color-<status>` | `var(--ods-semantic-color-border-<status>)` |
| `--ods-button-border-color-<status>-hover` | `var(--ods-semantic-color-interaction-<status>-hover)` |
| `--ods-button-border-color-<status>-active` | `var(--ods-semantic-color-interaction-<status>-active)` |
| `--ods-button-text-color-<status>` | `var(--ods-semantic-color-content-on-<status>-solid)` |
| `--ods-button-text-color-<status>-hover` | `var(--ods-semantic-color-content-on-<status>-solid)` |
| `--ods-button-text-color-<status>-active` | `var(--ods-semantic-color-content-on-<status>-solid)` |
| `--ods-button-background-color-<status>-ghost` | `inherit` |
| `--ods-button-background-color-<status>-ghost-hover` | `var(--ods-semantic-color-interaction-<status>-subtle-hover)` |
| `--ods-button-background-color-<status>-ghost-active` | `var(--ods-semantic-color-interaction-<status>-subtle-active)` |
| `--ods-button-border-color-<status>-ghost` | `unset` |
| `--ods-button-border-color-<status>-ghost-hover` | `unset` |
| `--ods-button-border-color-<status>-ghost-active` | `unset` |
| `--ods-button-text-color-<status>-ghost` | `var(--ods-semantic-color-content-<status>)` |
| `--ods-button-text-color-<status>-ghost-hover` | `var(--ods-semantic-color-content-on-<status>)` |
| `--ods-button-text-color-<status>-ghost-active` | `var(--ods-semantic-color-content-on-<status>)` |
| `--ods-button-background-color-<status>-outline` | `var(--ods-semantic-color-surface-control)` |
| `--ods-button-background-color-<status>-outline-hover` | `var(--ods-semantic-color-interaction-<status>-subtle-hover)` |
| `--ods-button-background-color-<status>-outline-active` | `var(--ods-semantic-color-interaction-<status>-subtle-active)` |
| `--ods-button-border-color-<status>-outline` | `var(--ods-semantic-color-border-<status>)` |
| `--ods-button-border-color-<status>-outline-hover` | `var(--ods-semantic-color-interaction-<status>-hover)` |
| `--ods-button-border-color-<status>-outline-active` | `var(--ods-semantic-color-interaction-<status>-active)` |
| `--ods-button-text-color-<status>-outline` | `var(--ods-semantic-color-content-<status>)` |
| `--ods-button-text-color-<status>-outline-hover` | `var(--ods-semantic-color-content-on-<status>)` |
| `--ods-button-text-color-<status>-outline-active` | `var(--ods-semantic-color-content-on-<status>)` |

---

## Not inventoried yet

- A few `packages/docs` files still mention the old names: the historical entries of
  `whats-new.mdx` and `migration-19-to-20.mdx`.
- Font sizes are not adopted: `ods-text-*` still carries literal sizes and the theme has no
  font-size family. If one lands in this major it is another entry here.
- No visual-regression baseline has been taken against the new theme, so the list of value-only
  changes (BC-08) is qualitative.
- The opacity rungs and the ten chart series colors were deduced rather than delivered by design.
  The token contract holds their names for the whole v20 line: design can still change their
  values, not their names.
