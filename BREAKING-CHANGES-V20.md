# Breaking changes - v19.x to v20

Working inventory of everything in the v20 line that breaks a consumer, kept so the codemods can
be written from one source instead of from the diff.

- **Baseline**: `19.7.3` (last released version, `lerna.json`).
- **Status**: draft, enriched as the major lands. Nothing here is published yet.
- **Scope**: only what a consumer can observe - published exports, public props, published token
  names and values. Internal refactors are out of scope even when the diff is large.

Once the major is cut, this file is the raw material for
`packages/docs/src/content/guides/migration-19-to-20.mdx` (which today only covers the React 19
bump) - the guide is the prose version, this one is the exhaustive one.

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
| [BC-05](#bc-05--scss-variables-ods--removed) | `@ovhcloud/ods-themes` | SCSS `$ods-*` variables removed (140) | manual |
| [BC-06](#bc-06--defaulttokensjson-content-replaced) | `@ovhcloud/ods-themes` | `./default/tokens` JSON content replaced | manual |
| [BC-07](#bc-07--the-default-theme-is-brand-neutral) | `@ovhcloud/ods-themes` | the default theme is grey, not OVHcloud blue | manual |
| [BC-08](#bc-08--tier-3-component-token-values-re-bound) | `@ovhcloud/ods-react` | tier-3 component token values re-bound | none needed |
| [BC-09](#bc-09--card-color-defaults-to-neutral) | `@ovhcloud/ods-react` | `Card` `color` defaults to `neutral` | automatable |

---

## BC-01 - `--ods-theme-*` removed (72 tokens)

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The 72 role tokens named `--ods-theme-*` are deleted and replaced by `--ods-semantic-*`. No alias, no deprecation window. |
| **Impact** | Any `var(--ods-theme-…)` in consumer CSS resolves to nothing. Fails visually, never loudly: the declaration is dropped and the property falls back to its inherited or initial value. |
| **Detection** | `grep -rn -- '--ods-theme-' src/` |
| **Codemod** | **automatable** - 66 of the 72 are a 1:1 rename. The 6 remaining ones split three ways, see below. |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, const `THEME` and `THEME_SPLIT` |

### 1:1 renames

| before | after |
| --- | --- |
| `--ods-theme-anchor-text-color` | `--ods-semantic-color-content-base` |
| `--ods-theme-anchor-text-color-hover` | `--ods-semantic-color-interaction-base-hover` |
| `--ods-theme-anchor-text-color-visited` | `--ods-semantic-color-content-visited` |
| `--ods-theme-background-color` | `--ods-semantic-color-surface-page` |
| `--ods-theme-background-color-disabled` | `--ods-semantic-color-surface-disabled` |
| `--ods-theme-background-color-drag-over` | `--ods-semantic-color-surface-drag-over` |
| `--ods-theme-background-color-readonly` | `--ods-semantic-color-surface-readonly` |
| `--ods-theme-background-color-selected` | `--ods-semantic-color-surface-selected-solid` |
| `--ods-theme-border-color-disabled` | `--ods-semantic-color-border-disabled` |
| `--ods-theme-border-color-drag-over` | `--ods-semantic-color-border-drag-over` |
| `--ods-theme-border-color-readonly` | `--ods-semantic-color-border-readonly` |
| `--ods-theme-border-color-selected` | `--ods-semantic-color-border-selected` |
| `--ods-theme-brand-color` | `--ods-semantic-color-content-brand` |
| `--ods-theme-heading-text-color` | `--ods-semantic-color-content-heading` |
| `--ods-theme-progress-background-color` | `--ods-semantic-color-surface-base` |
| `--ods-theme-split-background-color` | `--ods-semantic-color-surface-neutral-minimal` |
| `--ods-theme-split-border-color` | `--ods-semantic-color-border-neutral-minimal` |
| `--ods-theme-text-color` | `--ods-semantic-color-content-text` |
| `--ods-theme-text-color-disabled` | `--ods-semantic-color-content-disabled` |
| `--ods-theme-text-color-selected` | `--ods-semantic-color-content-on-selected-solid` |
| `--ods-theme-track-background-color` | `--ods-semantic-color-surface-neutral-minimal` |
| `--ods-theme-track-background-color-disabled` | `--ods-semantic-color-surface-neutral` |
| `--ods-theme-outline-color` | `--ods-semantic-color-focus` |
| `--ods-theme-outline-offset` | `--ods-semantic-size-focus-offset` |
| `--ods-theme-outline-style` | `--ods-semantic-size-focus-style` |
| `--ods-theme-outline-width` | `--ods-semantic-size-focus-thickness` |
| `--ods-theme-backdrop-background-color` | `--ods-semantic-color-surface-backdrop` |
| `--ods-theme-backdrop-opacity` | `--ods-semantic-opacity-backdrop` |
| `--ods-theme-overlay-border-radius` | `--ods-semantic-size-radius-overlay` |
| `--ods-theme-overlay-box-shadow` | `--ods-semantic-shadow-overlay` |
| `--ods-theme-overlay-z-index` | `--ods-semantic-z-index-dropdown` |
| `--ods-theme-border-radius` | `--ods-semantic-size-radius-container` |
| `--ods-theme-border-width` | `--ods-semantic-size-border-thickness` |
| `--ods-theme-column-gap` | `--ods-semantic-size-space-gap-inline` |
| `--ods-theme-padding-horizontal` | `--ods-semantic-size-space-inset-inline` |
| `--ods-theme-padding-vertical` | `--ods-semantic-size-space-inset-block` |
| `--ods-theme-row-gap` | `--ods-semantic-size-space-gap-block` |
| `--ods-theme-transition-duration` | `--ods-semantic-motion-duration-slow` |
| `--ods-theme-font-family` | `--ods-semantic-font-family-body` |
| `--ods-theme-font-family-code` | `--ods-semantic-font-family-code` |
| `--ods-theme-input-background-color-checked` | `--ods-semantic-color-surface-base` |
| `--ods-theme-input-background-color-checked-hover` | `--ods-semantic-color-interaction-base-hover` |
| `--ods-theme-input-background-color-invalid` | `--ods-semantic-color-surface-critical` |
| `--ods-theme-input-border-color` | `--ods-semantic-color-border-control` |
| `--ods-theme-input-border-color-checked` | `--ods-semantic-color-border-selected` |
| `--ods-theme-input-border-color-checked-hover` | `--ods-semantic-color-interaction-base-hover` |
| `--ods-theme-input-border-color-hover` | `--ods-semantic-color-interaction-control-hover` |
| `--ods-theme-input-border-color-invalid` | `--ods-semantic-color-border-critical` |
| `--ods-theme-input-border-radius` | `--ods-semantic-size-radius-control` |
| `--ods-theme-input-border-width` | `--ods-semantic-size-border-thickness` |
| `--ods-theme-input-min-height` | `--ods-semantic-size-block-size-md` |
| `--ods-theme-input-option-background-color-hover` | `--ods-semantic-color-interaction-base-subtle-hover` |
| `--ods-theme-input-option-background-color-selected` | `--ods-semantic-color-surface-selected` |
| `--ods-theme-input-option-background-color-selected-hover` | `--ods-semantic-color-interaction-selected-highlight-hover` |
| `--ods-theme-input-padding-horizontal` | `--ods-semantic-size-space-inset-inline` |
| `--ods-theme-input-padding-vertical` | `--ods-semantic-size-space-inset-block-compact` |
| `--ods-theme-input-placeholder-text-color` | `--ods-semantic-color-content-placeholder` |
| `--ods-theme-input-text-color` | `--ods-semantic-color-content-text` |
| `--ods-theme-input-text-color-checked` | `--ods-semantic-color-content-on-solid` |
| `--ods-theme-input-text-color-invalid` | `--ods-semantic-color-content-critical` |
| `--ods-theme-chart-background-color` | `--ods-semantic-color-chart-background` |
| `--ods-theme-chart-axis-color` | `--ods-semantic-color-chart-axis` |
| `--ods-theme-chart-tick-color` | `--ods-semantic-color-chart-tick` |
| `--ods-theme-chart-legend-color` | `--ods-semantic-color-chart-legend` |
| `--ods-theme-chart-grid-color` | `--ods-semantic-color-chart-grid` |
| `--ods-theme-chart-reference-line-color` | `--ods-semantic-color-chart-reference-line` |

A codemod must match longest-first: `--ods-theme-text-color` is a strict prefix of
`--ods-theme-text-color-disabled`, and a naive pass corrupts the longer one.

### The 6 that split by declaring property

`--ods-theme-<role>-color` served as a fill, a border and a text colour at once. The destination
depends on the property it is declared in, so a rename table is not enough - the codemod has to
know which declaration it sits in.

| before | in a `background` / `fill` | in a `border-color` / `outline-color` | in a `color` |
| --- | --- | --- | --- |
| `--ods-theme-primary-color` | `--ods-semantic-color-surface-base` | `--ods-semantic-color-border-base` | `--ods-semantic-color-content-base` |
| `--ods-theme-information-color` | `--ods-semantic-color-surface-information` | `--ods-semantic-color-border-information` | `--ods-semantic-color-content-information` |
| `--ods-theme-critical-color` | `--ods-semantic-color-surface-critical` | `--ods-semantic-color-border-critical` | `--ods-semantic-color-content-critical` |
| `--ods-theme-success-color` | `--ods-semantic-color-surface-success` | `--ods-semantic-color-border-success` | `--ods-semantic-color-content-success` |
| `--ods-theme-warning-color` | `--ods-semantic-color-surface-warning` | `--ods-semantic-color-border-warning` | `--ods-semantic-color-content-warning` |
| `--ods-theme-neutral-color` | `--ods-semantic-color-surface-neutral` | `--ods-semantic-color-interaction-control-hover` | `--ods-semantic-color-content-neutral` |

Used anywhere else (a `box-shadow`, a `linear-gradient`, an inline `style`), there is no
mechanical answer: report the site and let the consumer choose.

Two caveats on that table. Only the `color` column was exercised by the internal migration - all
8 split sites in `repoint-report.csv` are `split:content` - so the other two columns are a
proposal that no rendered pixel has validated. And the `neutral` border cell departs from the
script: `repoint-tokens.js` would emit `--ods-semantic-color-border-neutral` there, which the
delivered set does not declare - a latent bug that never fired because no internal site hit that
branch. Since all six of these tokens resolved to their family's `500` rung, the cell takes what
the ramp table gives for neutral `500` in a border property instead. Fix the script before the
consumer codemod reuses it.

---

## BC-02 - `--ods-color-*` removed (102 tokens)

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The tier-1 ramp aliases are deleted: 78 `--ods-color-<family>-<rung>`, plus 24 named and long-deprecated flat tokens. |
| **Impact** | Same silent failure as BC-01, on the surface consumers reached for most often when tinting their own UI. |
| **Detection** | `grep -rn -- '--ods-color-' src/` |
| **Codemod** | **partial** - a ramp step carries no role, so the destination depends on what the declaring property does with it. Automatable for `background` / `border-color` / `color`; everything else must be reported. |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, functions `kindOf` and `rampRole`, const `NAMED` |

The five hue families are still published, as `--ods-palette-<hue>-<rung>` (61 tokens in
`packages/themes/src/default/_palette.scss`). A consumer who only wants "the same blue" can point
at the palette directly - but that opts them out of theming, which is the whole reason the
semantic layer exists. The tables below give the role instead, and that is what the codemod
should emit.

### Ramp mapping, by declaring property

Destinations are shown without their `--ods-semantic-color-` prefix.

#### surface properties (`background`, `fill`)
| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` |
| 025 | `surface-selected` | `surface-information-minimal` | `surface-critical-minimal` | `surface-success-minimal` | `surface-warning-minimal` | `surface-neutral-recessed` |
| 050 | `surface-selected` | `surface-information-minimal` | `surface-critical-minimal` | `surface-success-minimal` | `surface-warning-minimal` | `surface-neutral-recessed` |
| 075 | `surface-selected-strong` | `surface-information-minimal` | `surface-critical-minimal` | `surface-success-minimal` | `surface-warning-minimal` | `surface-neutral-recessed` |
| 100 | `surface-selected-strong` | `surface-information-minimal` | `surface-critical-minimal` | `surface-success-minimal` | `surface-warning-minimal` | `surface-neutral-minimal` |
| 200 | `surface-information-subtle` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-subtle` |
| 300 | `surface-information-subtle` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-subtle` |
| 400 | `surface-base` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 500 | `surface-base` | `surface-information` | `surface-critical` | `surface-success` | `interaction-warning-hover` | `surface-neutral` |
| 600 | `interaction-base-hover` | `interaction-information-hover` | `interaction-critical-hover` | `interaction-success-hover` | `interaction-warning-hover` | `surface-neutral` |
| 700 | `interaction-base-hover` | `interaction-information-hover` | `interaction-critical-hover` | `interaction-success-hover` | `interaction-warning-hover` | `interaction-neutral-hover` |
| 800 | `surface-selected-solid` | `interaction-information-hover` | `interaction-critical-hover` | `interaction-success-hover` | `interaction-warning-hover` | `interaction-neutral-hover` |
| 900 | `surface-selected-solid` | `interaction-information-hover` | `interaction-critical-hover` | `interaction-success-hover` | `interaction-warning-hover` | `surface-code` |

#### border properties (`border-color`, `outline-color`)
| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` | `surface-page` |
| 025 | `border-drag-over` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-readonly` |
| 050 | `border-drag-over` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-readonly` |
| 075 | `border-drag-over` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-readonly` |
| 100 | `border-drag-over` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-neutral-minimal` |
| 200 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-neutral-subtle` |
| 300 | `border-information-subtle` | `border-information-subtle` | `border-critical-subtle` | `border-success-subtle` | `border-warning-subtle` | `border-control` |
| 400 | `border-base` | `border-information` | `border-critical` | `border-success` | `border-warning` | `interaction-control-hover` |
| 500 | `border-base` | `border-information` | `border-critical` | `border-success` | `border-warning` | `interaction-control-hover` |
| 600 | `interaction-base-hover` | `border-information-strong` | `border-critical-strong` | `border-success-strong` | `border-warning` | `border-strong` |
| 700 | `interaction-base-hover` | `border-information-strong` | `border-critical-strong` | `border-success-strong` | `border-warning` | `border-neutral-strong` |
| 800 | `interaction-base-hover` | `border-information-strong` | `border-critical-strong` | `border-success-strong` | `border-warning` | `border-neutral-strong` |
| 900 | `interaction-base-hover` | `border-information-strong` | `border-critical-strong` | `border-success-strong` | `border-warning` | `border-neutral-strong` |

#### content properties (`color`)
| rung | primary | information | critical | success | warning | neutral |
| --- | --- | --- | --- | --- | --- | --- |
| 000 | `content-on-solid` | `content-on-solid` | `content-on-solid` | `content-on-solid` | `content-on-solid` | `content-on-solid` |
| 025 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 050 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 075 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 100 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 200 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 300 | _none_ | _none_ | _none_ | _none_ | _none_ | `content-on-solid` |
| 400 | `content-base` | `content-information` | `content-critical` | `content-success` | `content-warning` | `content-neutral` |
| 500 | `content-base` | `content-information` | `content-critical` | `content-success` | `content-warning` | `content-neutral` |
| 600 | `content-on-brand-subtle` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-warning` | `content-neutral` |
| 700 | `content-on-brand-subtle` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-warning` | `content-on-neutral` |
| 800 | `content-on-brand-subtle` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-on-warning` | `content-on-neutral` |
| 900 | `content-on-brand-subtle` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-on-warning-solid` | `content-on-neutral` |

`_none_` is a real hole, not an omission: light text colours have no role in the semantic layer.
Those sites must be reported for a human to decide.

Four context rules sit on top of the tables:

- **hover / active declarations** take the interaction role instead of the rest one. On `primary`
  075 / 100 that is `interaction-base-subtle-hover`, and on the four status families the `025`-`100`
  band becomes `interaction-<family>-subtle-hover`.
- **`warning` sits one rung lighter than its siblings** (fill `400`, hover `500`): it is the only
  role carrying dark text, and orange darkens out of contrast fast.
- A `color` on `600` in the `neutral` family is `content-placeholder` when the declaring property
  is a placeholder, `content-neutral` otherwise.
- Any property named after a decorative badge (`alpha`, `beta`, `new`, `promotion`) takes
  `content-on-decorative`.

### Named and flat tokens

| before | after |
| --- | --- |
| `--ods-color-alpha` | `--ods-semantic-color-surface-decorative-alpha` |
| `--ods-color-beta` | `--ods-semantic-color-surface-decorative-beta` |
| `--ods-color-new` | `--ods-semantic-color-surface-decorative-new` |
| `--ods-color-promotion` | `--ods-semantic-color-surface-decorative-promotion` |
| `--ods-color-text` | `--ods-semantic-color-content-text` |
| `--ods-color-heading` | `--ods-semantic-color-content-heading` |
| `--ods-color-text-secondary` | `--ods-semantic-color-content-placeholder` |
| `--ods-color-background-disabled-default` | `--ods-semantic-color-surface-disabled` |
| `--ods-color-background-readonly-default` | `--ods-semantic-color-surface-readonly` |
| `--ods-color-border-disabled-default` | `--ods-semantic-color-border-disabled` |
| `--ods-color-border-readonly-default` | `--ods-semantic-color-border-readonly` |
| `--ods-color-text-disabled-default` | `--ods-semantic-color-content-disabled` |
| `--ods-color-element-background-selected` | `--ods-semantic-color-surface-selected-solid` |
| `--ods-color-element-text-selected` | `--ods-semantic-color-content-on-selected-solid` |
| `--ods-color-form-element-background-default` | `--ods-semantic-color-surface-page` |
| `--ods-color-form-element-background-hover-default` | `--ods-semantic-color-surface-page` |
| `--ods-color-form-element-background-focus-default` | `--ods-semantic-color-surface-page` |
| `--ods-color-form-element-background-critical` | `--ods-semantic-color-surface-page` |
| `--ods-color-form-element-background-selected-critical` | `--ods-semantic-color-surface-critical` |
| `--ods-color-form-element-border-default` | `--ods-semantic-color-border-control` |
| `--ods-color-form-element-border-hover-default` | `--ods-semantic-color-interaction-control-hover` |
| `--ods-color-form-element-border-focus-default` | `--ods-semantic-color-interaction-control-hover` |
| `--ods-color-form-element-border-critical` | `--ods-semantic-color-border-critical` |
| `--ods-color-form-element-text-default` | `--ods-semantic-color-content-text` |
| `--ods-color-form-element-text-placeholder-default` | `--ods-semantic-color-content-placeholder` |

`--ods-color-text-secondary` was already dangling before v20 - it was read but never declared, so
those sites were rendering with an inherited colour. The destination above is the closest real
role, not a value-preserving rename.

---

## BC-03 - 13 remaining legacy tokens removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The last 13 published tokens outside the two families above are removed with the rest of the old surface. |
| **Impact** | Same silent failure. Low volume, but these are the dimension tokens an app most often reuses for its own layout. |
| **Detection** | `grep -rnE -- '--ods-(border-radius|border-width|font-family|form-element|outline)-' src/` |
| **Codemod** | **automatable**, but the map below is a proposal - it is not encoded anywhere yet, because nothing inside the monorepo referenced these tokens and `repoint-tokens.js` therefore never had to map them. **To confirm with design before shipping the codemod.** |
| **Source of truth** | this table, until it is encoded |

| before | value in 19.7.3 | proposed after | value in v20 |
| --- | --- | --- | --- |
| `--ods-border-radius-xs` | `2px` | - | no equivalent, the scale is now semantic |
| `--ods-border-radius-sm` | `4px` | `--ods-semantic-size-radius-control` | `4px` |
| `--ods-border-radius-md` | `8px` | `--ods-semantic-size-radius-container` | `8px` |
| `--ods-border-radius-lg` | `16px` | `--ods-semantic-size-radius-pill` | `16px` |
| `--ods-border-width-sm` | `1px` | `--ods-semantic-size-border-thickness` | `1px` |
| `--ods-border-width-md` | `2px` | `--ods-semantic-size-border-thickness-strong` | `2px` |
| `--ods-font-family-default` | Source Sans Pro stack | `--ods-semantic-font-family-body` | same stack |
| `--ods-font-family-code` | Source Code Pro stack | `--ods-semantic-font-family-code` | same stack |
| `--ods-form-element-input-height` | `32px` | `--ods-semantic-size-block-size-md` | `32px` |
| `--ods-outline-color-default` | `primary-700` | `--ods-semantic-color-focus` | role |
| `--ods-outline-offset` | `2px` | `--ods-semantic-size-focus-offset` | `2px` |
| `--ods-outline-style-default` | `solid` | `--ods-semantic-size-focus-style` | `solid` |
| `--ods-outline-width` | `2px` | `--ods-semantic-size-focus-thickness` | `2px` |

`--ods-border-radius-xs` is the one with no destination: the radius scale is now named by what it
wraps (`control`, `container`, `overlay`, `pill`, `full`) and there is no rung below `control`.

---

## BC-04 - palette rungs `000` / `025` / `075` retired

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The palette is rebuilt on ten rungs, `50` to `900`. The old `000`, `025` and `075` rungs do not exist: `000` was white in every family, and `025` / `075` were folded into `50` and `100`. `100`-`900` keep their values. |
| **Impact** | No numeric fallback. A consumer cannot mechanically map `--ods-color-primary-025` onto a palette rung, which is why BC-02 sends them to a role instead. |
| **Detection** | `grep -rnE -- '--ods-color-[a-z]+-(000\|025\|075)' src/` |
| **Codemod** | n/a - handled by BC-02 |
| **Source of truth** | `packages/themes/src/default/_variables.scss` |

---

## BC-05 - SCSS variables `$ods-*` removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | 155 of the 207 SCSS variables are gone: the whole `$ods-color-*` ramp, `$ods-color-brand-*`, the flat form-element variables, and the dimension variables listed in BC-03. 52 survive - the breakpoints and the hand-authored palette - and 15 are new, all of them palette rungs. |
| **Impact** | Only reachable through `@use` on the package's `sass` export condition, which is not a documented entry point - so the blast radius is probably limited to consumers who resolved the file path by hand. Fails loudly, at build time. |
| **Detection** | `grep -rn '\$ods-color-' src/` |
| **Codemod** | **manual** - a SCSS variable is compile-time, so the right answer is usually "stop using it, read the custom property instead". |
| **Source of truth** | `packages/themes/src/default/_variables.scss` |

---

## BC-06 - `./default/tokens` JSON content replaced

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | `@ovhcloud/ods-themes/default/tokens` still resolves, but not one key survives: the 187 old names are out, and 255 new ones are in (184 `--ods-semantic-*`, 10 brand-ramp rungs, 61 `--ods-palette-*`). The generator also moved from `cssjson` to `postcss`, which fixes a bug that was silently dropping any declaration written after a comment (41 of 248 tokens on the new theme, a handful on the old one). |
| **Impact** | Anything reading the JSON by key - a theme editor, a Figma sync, a docs table - reads `undefined`. |
| **Detection** | `grep -rn 'ods-themes/default/tokens' src/` |
| **Codemod** | **manual** - depends entirely on what the consumer does with the JSON. |
| **Source of truth** | `packages/themes/scripts/generate-token-lists.js` |

---

## BC-07 - the default theme is brand-neutral

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | `@ovhcloud/ods-themes/default/css` now ships an entirely greyscale theme. The brand ramp `--ods-palette-brand-*` aliases the grey family by default; OVHcloud blue is a brand file that re-aims it (`src/blue-jeans/`). |
| **Impact** | The largest visible change of the major: an app that imports only the default theme loses its blue. |
| **Detection** | visual |
| **Codemod** | **manual** - the fix is an import, but which import depends on how the brand ends up being delivered. |
| **Source of truth** | `packages/themes/src/default/index.scss` (`$brand-hue`), `packages/themes/src/blue-jeans/index.scss` |

**Open**: how a brand is delivered is not settled. Today `blue-jeans` and `manager` exist as
whole-theme overrides loaded after the default one, and the docs app treats them as a debug
switch. A Sass consumer can instead configure the core (`@use '…/default/index' with ($brand-hue:
'blue')`), which emits each token once. Both are exported from `package.json`
(`./blue-jeans/css`, `./manager/css`). This entry needs rewriting once that decision lands, and the
migration guide cannot be written before it.

---

## BC-08 - tier-3 component token values re-bound

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The `--ods-<component>-*` names are untouched - the set of custom properties `ods-react` declares is identical to 19.7.3, minus two stray `--ods-theme-*` locals that went with the old surface, plus nothing - but their default values now reference `--ods-semantic-*` instead of `--ods-theme-*` / `--ods-color-*`. Several bindings also changed role, mostly to give `active` states their own `interaction-*-subtle-active` rather than reusing the hover one. |
| **Impact** | A consumer overriding a component token by name keeps working. A consumer overriding it **with a value that reads a removed token** (`--ods-button-background-color-primary: var(--ods-color-primary-500)`) breaks - that is BC-01 / BC-02 seen from the component side. Colours shift slightly even where nothing breaks. |
| **Detection** | covered by the BC-01 / BC-02 greps |
| **Codemod** | none needed beyond BC-01 / BC-02 |
| **Source of truth** | `packages/ods-react/src/style/*.scss` |

The mixins and SCSS variables exported by `@ovhcloud/ods-react/style` are unchanged - only the
tokens they read.

---

## BC-09 - `Card` `color` defaults to `neutral`

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | `<Card>` without a `color` prop was `primary`, it is now `neutral`. |
| **Impact** | Every card that relied on the default changes colour. No type error, no runtime warning. |
| **Detection** | `grep -rn '<Card' src/` and look for the ones with no `color` |
| **Codemod** | **automatable** - add `color="primary"` to every `<Card>` that has no `color` prop, for a consumer who wants the old look. Worth offering as an opt-in step rather than applying by default: the new default is the intended one. |
| **Source of truth** | `packages/ods-react/src/components/card/src/components/card/Card.tsx` |

---

## Not inventoried yet

- `packages/docs` is still on the old token names (116 files) and `packages/examples` on 3. Their
  migration may surface tokens no one has mapped yet - in particular the `_none_` holes in BC-02.
- Typography is not adopted: `ods-text-*` still carries literal sizes, so the `--ods-semantic-font-*`
  tokens exist but nothing reads them. If that lands in this major it is another entry here.
- No visual-regression baseline has been taken against the new theme, so the list of value-only
  changes (BC-08) is qualitative.
- Deduced tokens are marked `REVIEW` in `packages/themes/src/default/index.scss`. Any of them that
  design rejects becomes a rename **after** this inventory was written, which is exactly the case
  the "append-only" rule above is for.
