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
| [BC-07](#bc-07---the-default-theme-no-longer-looks-like-ovhcloud) | `@ovhcloud/ods-themes` | the default theme no longer looks like OVHcloud | partial |
| [BC-08](#bc-08--tier-3-component-token-values-re-bound) | `@ovhcloud/ods-react` | tier-3 component token values re-bound | none needed |
| [BC-09](#bc-09---card-defaults-to-neutral) | `@ovhcloud/ods-react` | `Card` defaults to `neutral` | automatable |
| [BC-10](#bc-10--button-radius-moves-to-the-control-family) | `@ovhcloud/ods-react` | `Button` radius is 4px at every size | manual |
| [BC-11](#bc-11--accordion-takes-the-whole-container-radius) | `@ovhcloud/ods-react` | `Accordion` outer corners go 4px -> 8px | manual |
| [BC-12](#bc-12---disabled-is-an-opacity-not-a-colour) | `@ovhcloud/ods-react` | disabled is dimmed with opacity, not repainted grey | manual |
| [BC-13](#bc-13---the-default-font-family-is-renamed-source-sans-3) | `@ovhcloud/ods-themes` | the default font family is renamed `'Source Sans 3'` | automatable |
| [BC-14](#bc-14---form-fields-paint-their-own-background) | `@ovhcloud/ods-react` | form fields paint their own background | manual |
| [BC-15](#bc-15---a-modal-always-stacks-above-a-drawer) | `@ovhcloud/ods-react` | a modal always stacks above a drawer | manual |
| [BC-16](#bc-16---deprecated-and-unused-scss-exports-of-ovhcloudods-reactstyle-removed) | `@ovhcloud/ods-react` | 5 deprecated and 2 unused SCSS exports of `./style` removed | manual |
| [BC-17](#bc-17---code-custom-properties-renamed) | `@ovhcloud/ods-react` | 3 `Code` custom properties renamed | automatable |

---

## BC-01 - `--ods-theme-*` removed (72 tokens)

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The 72 role tokens named `--ods-theme-*` are deleted and replaced by `--ods-semantic-*`. No alias, no deprecation window. |
| **Impact** | Any `var(--ods-theme-…)` in consumer CSS resolves to nothing. Fails visually, never loudly: the declaration is dropped and the property falls back to its inherited or initial value. |
| **Detection** | `grep -rn -- '--ods-theme-' src/` |
| **Codemod** | **automatable** - 63 of the 72 are a 1:1 rename and 6 split three ways, see below. The 3 disabled colours have no destination: disabled is now an opacity (BC-12), so those sites are reported. |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, const `THEME` and `THEME_SPLIT`. The tables below are its `--tables` output. |

`--ods-theme-brand-color` is the only rename that keeps its value: `--ods-semantic-color-brand`
points at `brand-700`, the rung that `primary-700` became.

### 1:1 renames

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
| `--ods-theme-split-background-color` | `--ods-semantic-color-surface-neutral-minimal` |
| `--ods-theme-split-border-color` | `--ods-semantic-color-border-neutral-minimal` |
| `--ods-theme-text-color` | `--ods-semantic-color-content-text` |
| `--ods-theme-text-color-disabled` | _none_ |
| `--ods-theme-text-color-selected` | `--ods-semantic-color-content-on-selected-solid` |
| `--ods-theme-track-background-color` | `--ods-semantic-color-surface-neutral-minimal` |
| `--ods-theme-track-background-color-disabled` | `--ods-semantic-color-surface-neutral` |
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
| `--ods-theme-input-background-color-checked` | `--ods-semantic-color-surface-selected-solid` |
| `--ods-theme-input-background-color-checked-hover` | `--ods-semantic-color-interaction-accent-hover` |
| `--ods-theme-input-background-color-invalid` | `--ods-semantic-color-surface-critical` |
| `--ods-theme-input-border-color` | `--ods-semantic-color-border-control` |
| `--ods-theme-input-border-color-checked` | `--ods-semantic-color-border-selected-solid` |
| `--ods-theme-input-border-color-checked-hover` | `--ods-semantic-color-interaction-accent-hover` |
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
| `--ods-theme-critical-color` | `--ods-semantic-color-surface-critical` | `--ods-semantic-color-border-critical` | `--ods-semantic-color-content-critical` |
| `--ods-theme-information-color` | `--ods-semantic-color-surface-information` | `--ods-semantic-color-border-information` | `--ods-semantic-color-content-information` |
| `--ods-theme-neutral-color` | `--ods-semantic-color-surface-neutral` | `--ods-semantic-color-border-neutral` | `--ods-semantic-color-content-neutral` |
| `--ods-theme-primary-color` | `--ods-semantic-color-surface-brand` | `--ods-semantic-color-border-brand` | `--ods-semantic-color-content-brand` |
| `--ods-theme-success-color` | `--ods-semantic-color-surface-success` | `--ods-semantic-color-border-success` | `--ods-semantic-color-content-success` |
| `--ods-theme-warning-color` | `--ods-semantic-color-surface-warning` | `--ods-semantic-color-border-warning` | `--ods-semantic-color-content-warning` |

Used anywhere else (a `box-shadow`, a `linear-gradient`, an inline `style`), there is no
mechanical answer: report the site and let the consumer choose.

One caveat on that table: only the `color` column was exercised by the internal migration - all
8 split sites in `repoint-report.csv` are `split:content` - so the other two columns are a
proposal that no rendered pixel has validated.

---

## BC-02 - `--ods-color-*` removed (102 tokens)

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | The tier-1 ramp aliases are deleted: 78 `--ods-color-<family>-<rung>`, plus 24 named and long-deprecated flat tokens. |
| **Impact** | Same silent failure as BC-01, on the surface consumers reached for most often when tinting their own UI. |
| **Detection** | `grep -rn -- '--ods-color-' src/` |
| **Codemod** | **partial** - a ramp step carries no role, so the destination depends on what the declaring property does with it. Automatable for `background` / `border-color` / `color`; everything else must be reported. |
| **Source of truth** | `packages/themes/scripts/repoint-tokens.js`, functions `kindOf` and `rampRole`, const `NAMED`. The tables below are its `--tables` output. |

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
| 025 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-minimal` |
| 050 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-minimal` |
| 075 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-minimal` |
| 100 | `surface-selected` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-minimal` |
| 200 | `surface-information-subtle` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-subtle` |
| 300 | `surface-information-subtle` | `surface-information-subtle` | `surface-critical-subtle` | `surface-success-subtle` | `surface-warning-subtle` | `surface-neutral-subtle` |
| 400 | `surface-brand` | `surface-information` | `surface-critical` | `surface-success` | `surface-warning` | `surface-neutral` |
| 500 | `surface-brand` | `surface-information` | `surface-critical` | `surface-success` | `interaction-warning-hover` | `surface-neutral` |
| 600 | `interaction-brand-hover` | `interaction-information-hover` | `interaction-critical-hover` | `interaction-success-hover` | `interaction-warning-hover` | `surface-neutral` |
| 700 | `interaction-brand-hover` | `interaction-information-hover` | `interaction-critical-hover` | `interaction-success-hover` | `interaction-warning-hover` | `interaction-neutral-hover` |
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
| 400 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `interaction-control-hover` |
| 500 | `border-brand` | `border-information` | `border-critical` | `border-success` | `border-warning` | `interaction-control-hover` |
| 600 | `interaction-brand-hover` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral` |
| 700 | `interaction-brand-hover` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral-strong` |
| 800 | `interaction-brand-hover` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral-strong` |
| 900 | `interaction-brand-hover` | `border-information` | `border-critical` | `border-success` | `border-warning` | `border-neutral-strong` |

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
| 400 | `content-brand` | `content-information` | `content-critical` | `content-success` | `content-warning` | `content-neutral` |
| 500 | `content-brand` | `content-information` | `content-critical` | `content-success` | `content-warning` | `content-neutral` |
| 600 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-warning` | `content-neutral` |
| 700 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-warning` | `content-on-neutral` |
| 800 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-on-warning` | `content-on-neutral` |
| 900 | `content-on-brand` | `content-on-information` | `content-on-critical` | `content-on-success` | `content-on-warning-solid` | `content-on-neutral` |

`_none_` is a real hole, not an omission: light text colours have no role in the semantic layer.
Those sites must be reported for a human to decide.

Five context rules sit on top of the tables:

- **hover / active declarations** take the interaction role instead of the rest one. On `primary`
  `025`-`100` that is `interaction-accent-subtle-hover`, and on the four status families the
  `025`-`100` band becomes `interaction-<family>-subtle-hover`.
- **A dark status border** (`600`-`900`) keeps the plain `border-<family>` at rest and takes
  `interaction-<family>-hover` on hover, except `warning`, which holds `border-warning`.
- **`warning` sits one rung lighter than its siblings** (fill `400`, hover `500`): it is the only
  role carrying dark text, and orange darkens out of contrast fast.
- A `color` on `600` in the `neutral` family is `content-placeholder` when the declaring property
  is a placeholder, `content-neutral` otherwise.
- Any property named after a decorative badge (`alpha`, `beta`, `new`, `promotion`) takes
  `content-on-vivid`.

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
| `--ods-color-background-disabled-default` | _none_ |
| `--ods-color-background-readonly-default` | `--ods-semantic-color-surface-readonly` |
| `--ods-color-border-disabled-default` | _none_ |
| `--ods-color-border-readonly-default` | `--ods-semantic-color-border-readonly` |
| `--ods-color-text-disabled-default` | _none_ |
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
| `--ods-font-family-code` | Source Code Pro stack | `--ods-semantic-font-family-code` | same stack |
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
| **Change** | `@ovhcloud/ods-themes/default/tokens` still resolves, but no key survives: the 187 old names are out, and 273 new ones are in (182 `--ods-semantic-*` and 91 `--ods-palette-*`, of which 20 are the brand and accent ramps). Values are the unconditional ones: the reduced-motion durations declared under `@media (prefers-reduced-motion: reduce)` are not in the JSON. The generator also moved from `cssjson` to `postcss`, which fixes a bug that was silently dropping any declaration written after a comment (41 of 248 tokens on the new theme, a handful on the old one). |
| **Impact** | Anything reading the JSON by key - a theme editor, a Figma sync, a docs table - reads `undefined`. |
| **Detection** | `grep -rn 'ods-themes/default/tokens' src/` |
| **Codemod** | **manual** - depends entirely on what the consumer does with the JSON. |
| **Source of truth** | `packages/themes/scripts/generate-token-lists.js` |

---

## BC-07 - the default theme no longer looks like OVHcloud

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-themes` |
| **Change** | `@ovhcloud/ods-themes/default/css` now ships the Aluminium look: a grey page, and the accent ramp `--ods-palette-accent-*` (selection, text, headings, form controls) aliased to the navy family. The brand ramp `--ods-palette-brand-*` still aliases blue. The OVHcloud look is `@ovhcloud/ods-themes/blue-jeans/css`, a `:root` overlay that re-aims the accent ramp onto blue and overrides the roles that differ. |
| **Impact** | The largest visible change of the major: an app that imports only the default theme changes colour almost everywhere. Loading `blue-jeans/css` *before* `default/css`, or a second copy of `default/css` injected later (a micro-frontend shipping its own), silently brings the default look back, because both declare their tokens on `:root` and the last one wins. |
| **Detection** | `grep -rn 'ods-themes/default/css' src/` - every app that imports it alone |
| **Codemod** | **partial** - add `import '@ovhcloud/ods-themes/blue-jeans/css'` right after the default import to keep the OVHcloud look. Where the theme is injected at runtime, the order has to be checked by hand. |
| **Source of truth** | `packages/themes/src/default/index.scss`, `packages/themes/src/blue-jeans/index.scss` |

**Open**: how a brand is delivered is not settled. Today `blue-jeans` is a `:root` overlay that
only works when loaded after the default theme, and the docs app treats it as a debug switch. The
alternative, making the default theme the brand and dropping the overlay export, would make this
entry disappear. It needs rewriting once that decision lands, and the migration guide cannot be
written before it.

---

## BC-08 - tier-3 component token values re-bound

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The `--ods-<component>-*` names are all but untouched - the set of custom properties `ods-react` declares is identical to 19.7.3, minus two stray `--ods-theme-*` locals that went with the old surface, minus three dead `Tile` tokens and nine dead `Modal` / `Message` / `Tabs` tokens (see below) and minus seven disabled-state tokens, plus one internal reset (both BC-12) - but their default values now reference `--ods-semantic-*` instead of `--ods-theme-*` / `--ods-color-*`. Several bindings also changed role, mostly to give `active` states their own `interaction-*-subtle-active` rather than reusing the hover one. |
| **Impact** | A consumer overriding a component token by name keeps working. A consumer overriding it **with a value that reads a removed token** (`--ods-button-background-color-primary: var(--ods-color-primary-500)`) breaks - that is BC-01 / BC-02 seen from the component side. Colours shift slightly even where nothing breaks. |
| **Detection** | covered by the BC-01 / BC-02 greps |
| **Codemod** | none needed beyond BC-01 / BC-02 |
| **Source of truth** | `packages/ods-react/src/style/*.scss` |

The mixins and SCSS variables exported by `@ovhcloud/ods-react/style` are unchanged - only the
tokens they read - except for the disabled state (BC-12) and the removals of BC-16.

`Tile` loses `--ods-tile-border-width`, `--ods-tile-border-color` and `--ods-tile-background-color`.
All three were declared but never read: `Tile` renders a `Card`, so its border, its background and
its elevation come from `--ods-card-*`. Overriding them never did anything, and overriding the
`--ods-card-*` equivalents still works.

`Modal` loses the six `--ods-modal-header-background-color-*`, only read by the `ods-modal-color()`
mixin that nothing has called since 19.5.0 (see BC-16). `Message` loses
`--ods-message-close-button-text-color-primary`, which the close button no longer reads. `Tabs`
loses `--ods-tab-border-color-selected` and `--ods-tab-text-color-selected`: the selected tab reads
the theme roles directly. Overriding any of them has no effect.

---

## BC-09 - `Card` defaults to `neutral`

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | `<Card>` without a `status` or `color` prop was `primary`, it is now `neutral`. |
| **Impact** | Every card that relied on the default changes colour. No type error, no runtime warning. |
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
| **Codemod** | **manual** - restore the old look by re-declaring the three component tokens: `--ods-button-border-radius-xs: 2px; --ods-button-border-radius-sm: 4px; --ods-button-border-radius-md: 8px;` |
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
| **Codemod** | **manual** - restore the old look by re-declaring `--ods-accordion-border-radius: 4px;` |
| **Source of truth** | `packages/ods-react/src/components/accordion/src/components/accordion/accordion.module.scss` |

The trigger and the content inherit the item's radius, so nothing else changes. A theme that widens
`radius-container` now widens the accordion with it, at full rate rather than at half.

---

## BC-12 - disabled is an opacity, not a colour

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | A disabled component keeps the colours of its enabled state - variant, checked, selected - and is dimmed with `opacity: var(--ods-semantic-opacity-disabled)` instead of being repainted grey. The `ods-is-disabled()` mixin of `@ovhcloud/ods-react/style` sets that opacity and no longer sets `border-color`, `background-color` or `color`, and its three SCSS variables `$ods-state-is-disabled-background-color`, `$ods-state-is-disabled-border-color` and `$ods-state-is-disabled-text-color` are removed. Seven component tokens that only painted a disabled state go with them: `--ods-button-group-item-background-color-checked-disabled`, `--ods-switch-item-background-color-checked-disabled`, `--ods-tab-background-color-selected-disabled-switch`, `--ods-tab-border-color-disabled`, `--ods-tab-border-color-selected-disabled`, `--ods-tab-border-color-selected-disabled-switch` and `--ods-tile-background-color-disabled`. |
| **Impact** | Visual on every disabled component. A stylesheet that reads one of the three SCSS variables fails to compile. One that includes `ods-is-disabled()` gets the opacity instead of the grey, and disabled colours a consumer painted on top of an ODS component are now dimmed as well. An override of one of the seven component tokens is silently ignored. |
| **Detection** | `grep -rnE 'ods-state-is-disabled-\|(checked\|selected)-disabled\|tab-border-color-disabled\|tile-background-color-disabled' src/` |
| **Codemod** | **manual** - nothing maps 1:1, the grey has no opacity equivalent. Remove the variable reads and the token overrides; a consumer who wants a grey disabled state styles `:disabled` / `[data-disabled]` on its side. |
| **Source of truth** | `packages/ods-react/src/style/_state.scss` |

A disabled component dims once. The mixin resets `--ods-state-is-disabled-opacity` on its children,
so a disabled part nested in it - the `Input` of a `Combobox`, the clear `Button` of an `Input` -
does not multiply a second opacity on top. `ButtonGroup`, `Switch` and `Range` carry the opacity on
their root when the whole group is disabled, rather than on each item.

The theme's three disabled colour roles are still declared but no component reads them any more.

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
| **Codemod** | **manual** - a consumer who wants the old transparency re-declares `--ods-semantic-color-surface-control: transparent` on the container. |
| **Source of truth** | `packages/ods-react/src/style/_input.scss` |

---

## BC-15 - a modal always stacks above a drawer

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The overlays read their own z-index rung instead of offsets on the dropdown one. `ModalContent` puts its backdrop at `--ods-semantic-z-index-modal` minus one and its positioner at `--ods-semantic-z-index-modal`; `DrawerContent` does the same with `--ods-semantic-z-index-drawer`, which `--ods-drawer-z-index` already read. In 19.7.3 a modal, a drawer with a backdrop and a drawer without one all sat on the same layer, so the one opened last was on top. |
| **Impact** | A drawer opened from a modal now opens underneath it. A consumer `positionerStyle` / `backdropStyle` that set a z-index relative to the old `--ods-theme-overlay-z-index` chain is now below the drawer and modal rungs. Visual only. |
| **Detection** | `grep -rnE 'positionerStyle\|backdropStyle\|--ods-drawer-z-index' src/` |
| **Codemod** | **manual** - restack against `--ods-semantic-z-index-drawer` / `-modal`, or pass a higher z-index through `positionerStyle` to the drawer that has to win. |
| **Source of truth** | `packages/ods-react/src/components/modal/src/components/modal-content/ModalContent.tsx`, `packages/ods-react/src/components/drawer/src/components/drawer-content/DrawerContent.tsx` |

---

## BC-16 - deprecated and unused SCSS exports of `@ovhcloud/ods-react/style` removed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | The five variables marked "[Deprecated] will be removed in next major version" are removed: `$ods-overlay-arrow-background-color`, `$ods-modal-border-radius`, `$ods-modal-margin`, `$ods-modal-z-index` and `$drawer-max-size`. Two unused exports go with them: the `ods-modal-color()` mixin, which nothing has called since 19.5.0, and `$ods-overlay-select-z-index`, which nothing reads. |
| **Impact** | A stylesheet that reads one of them fails to compile. |
| **Detection** | `grep -rnE '\$(ods-overlay-arrow-background-color\|ods-modal-border-radius\|ods-modal-margin\|ods-modal-z-index\|drawer-max-size\|ods-overlay-select-z-index)\b\|ods-modal-color\(' src/` |
| **Codemod** | **manual** - read what they held instead: `--ods-semantic-color-surface-page`, `--ods-modal-border-radius`, `--ods-modal-margin-horizontal` / `-vertical`, `--ods-semantic-z-index-modal`, `$drawer-max-width` / `$drawer-max-height`, and `$ods-overlay-base-z-index` for `$ods-overlay-select-z-index`. Drop the `ods-modal-color()` includes: the header background they painted belongs to a `color` the Modal no longer renders. |
| **Source of truth** | `packages/ods-react/src/style/_overlay.scss`, `_modal.scss`, `_drawer.scss` |

## BC-17 - `Code` custom properties renamed

| field | value |
| --- | --- |
| **Package** | `@ovhcloud/ods-react` |
| **Change** | Three `Code` custom properties are renamed after what they hold: `--ods-code-primary-color` (the text ink) becomes `--ods-code-text-color`, `--ods-code-secondary-color` (the block background) becomes `--ods-code-background-color`, and `--ods-code-trigger-background-color` (the copy button ink, not a background) becomes `--ods-code-trigger-color`. |
| **Impact** | An override of an old name is silently ignored: the block keeps the theme colours. Nothing fails to compile. |
| **Detection** | `grep -rnE -- '--ods-code-(primary-color\|secondary-color\|trigger-background-color)\b' src/` |
| **Codemod** | **automatable** - three 1:1 renames. `--ods-code-trigger-background-color-hover` and `-active` keep their names: they are backgrounds. |
| **Source of truth** | `packages/ods-react/src/components/code/src/components/code/code.module.scss` |

---

## Not inventoried yet

- A few `packages/docs` files still mention the old names: the historical entries of
  `whats-new.mdx` and `migration-19-to-20.mdx`.
- Font sizes are not adopted: `ods-text-*` still carries literal sizes and the theme has no
  font-size family. If one lands in this major it is another entry here.
- No visual-regression baseline has been taken against the new theme, so the list of value-only
  changes (BC-08) is qualitative.
- Tokens deduced rather than delivered by design (the opacity rungs, still marked `REVIEW` in
  `packages/themes/src/default/_variables.scss`, and the ten chart series colours) can still be
  rejected. Any of them that design rejects becomes a rename **after** this inventory was written,
  which is exactly the case the "append-only" rule above is for.
