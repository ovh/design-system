# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* **badge:** keep the 19.7.3 heights and give the pill room on its sides ([f7d050e](https://github.com/ovh/design-system/commit/f7d050e4cce6c76a8b0b349ebbda66a8fef00ef6))
* **badge:** name the medium status custom properties after their emphasis ([2b7a511](https://github.com/ovh/design-system/commit/2b7a511663d918d6ed29f4ebb0f5cb375b0a4df5))
* **themes:** draw the edge of the overlays in aluminium dark ([689a989](https://github.com/ovh/design-system/commit/689a9893ec45ebbcb676d861e844f4f9657740b6))
* **themes:** exclude every What's new page from the retired-token check ([20cba95](https://github.com/ovh/design-system/commit/20cba95677b926362dc4bddb8dab0d0b4f78d337))
* **themes:** follow the aluminium dark review in blue-jeans dark ([31c268d](https://github.com/ovh/design-system/commit/31c268d0c93d3e606e4f924f77630bfe1d7bf8ff))
* **themes:** give shadow-control a shadow, not none, so that it composes ([2c761f4](https://github.com/ovh/design-system/commit/2c761f47afd2b16b90df60128d9e220e6213f146)), closes [#0000](https://github.com/ovh/design-system/issues/0000)
* **themes:** give the blue-jeans Skeleton its shimmer back ([40f41c8](https://github.com/ovh/design-system/commit/40f41c8cf1bd7cec7b388bd048f7a3179b216581))
* **themes:** give the green and orange ramps real dark tints ([e820ec6](https://github.com/ovh/design-system/commit/e820ec601d0725d7d2916df2ceaecbb2b0633d87))
* **themes:** give the hovered FileUpload error row 4.5:1 in both dark themes ([9c51593](https://github.com/ovh/design-system/commit/9c515931819ec94d04a25f2afd5c635d6c876255))
* **themes:** give the invalid border 3:1 in blue-jeans dark ([6487f97](https://github.com/ovh/design-system/commit/6487f979da6cf4c7dd5e50c99cd7d09e3f155e92))
* **themes:** give the Meter fill 3:1 in blue-jeans dark ([4fc4331](https://github.com/ovh/design-system/commit/4fc4331e5c7b76195b5f3e4bdeb6c5c2f2d91bad))
* **themes:** make the first chart series a fixed color ([dd82697](https://github.com/ovh/design-system/commit/dd826974a2d4e5d09221592d06983c29333dc6d2)), closes [#0050d7](https://github.com/ovh/design-system/issues/0050d7)
* **themes:** migrate the v19 checked fill to surface-control-solid ([209f042](https://github.com/ovh/design-system/commit/209f0427e9de40e010c4d31dda7275184f316fdb))
* **themes:** stop mapping two v19 tokens to roles their readers left ([f043c21](https://github.com/ovh/design-system/commit/f043c215fd3405fb0b6c9ff16ab0190621f56bfe))
* **themes:** whiten the logo, invert the control fill and darken code in aluminium dark ([40da465](https://github.com/ovh/design-system/commit/40da46563073d0264f2cedd366af63dc434def7c)), closes [#000e9](https://github.com/ovh/design-system/issues/000e9)


### Features

* **core:** bump minor dependencies ([c1018d6](https://github.com/ovh/design-system/commit/c1018d62d72f06faa1e30aaed5d940bd938ec4d8))
* **form-fields:** give every form field the same default width ([5479021](https://github.com/ovh/design-system/commit/547902197c8b9b6cbca5331f17a6017a8668ca5d))
* **ods-react:** remove the APIs deprecated in v19 ([632fc69](https://github.com/ovh/design-system/commit/632fc692bef89a4b5adaeaea5717f88ffcf20891))
* **themes, ods-react:** add the aluminium dark theme and rewire components for it ([4fae554](https://github.com/ovh/design-system/commit/4fae5541a17e876a16cf9984a52024792178ae23))
* **themes:** add the blue-jeans dark theme on the aluminium dark model ([b063739](https://github.com/ovh/design-system/commit/b0637398e295ccd257ccaa1aa34338fd78abcdc0))
* **themes:** align the blue-jeans theme with the v19 look ([a28c3cc](https://github.com/ovh/design-system/commit/a28c3ccf1a7e3bb4eaae109dd05243a0fa6f5b88))
* **themes:** export the aluminium dark theme ([43c40ad](https://github.com/ovh/design-system/commit/43c40ad87ae4e1baacf5c3da634db4b6d39d5dc6))
* **themes:** export the blue-jeans dark theme ([db6e33c](https://github.com/ovh/design-system/commit/db6e33cfb04e68682354a8355194210917409268))
* **themes:** rename the default font family to Source Sans 3 ([40aa864](https://github.com/ovh/design-system/commit/40aa864e948fa340ba8afc82dc4bef2cb3faccec))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)
* **themes:** ship each theme mode as one standalone stylesheet ([2741442](https://github.com/ovh/design-system/commit/2741442eae0d6bff0fb926efc00e2a67959fedd7))


### BREAKING CHANGES

* **themes:** the @ovhcloud/ods-themes/default export (the theme with its
fonts inlined as base64) is removed: load default/css with default/fonts or
./fonts-base64. The built files and the Sass sources moved in the package.
The JavaScript entry point (ODS_THEME, ODS_THEMES) is removed. See BC-31,
BC-32 and BC-33.
* **ods-react:** Switch, SwitchItem, SWITCH_SIZE(S), their types, the
@ovhcloud/ods-react/switch entry point and the --ods-switch-* custom
properties are removed: use Tabs with the switch variant, ButtonGroup or
RadioGroup. Pagination and Toggle require children (PaginationPages,
ToggleControl), and renderTotalItemsLabel and withPageSizeSelector are
removed: use PaginationPageSizeSelector. position, gutter, sameWidth and
fitControlWidth are removed from Menu, Popover, Select and Tooltip: use
overlayConfig. uploadSuccessLabel is removed from FileUploadItem.
* **badge:** --ods-badge-background-color-<status> and
--ods-badge-text-color-<status> (accent, critical, information, neutral,
success, warning) are removed. A 19.7.3 override maps to the -high name,
together with emphasis="high" on the Badge.
* **badge:** the Badge is wider in the default theme: its horizontal
padding goes from 4px to 8px (6px to 12px in lg).
* **themes:** the green and orange palette rungs 600 to 900 change
value, and --ods-semantic-color-content-on-success and
--ods-semantic-color-content-on-warning move from the 800 rung to 700.
* **themes, ods-react:** the Badge status custom properties paint the medium
emphasis, the tint moving to the -high names; the Badge and Message high
emphases get a border; the Query Filter tags are accent; the Link hover
keeps its rest color and reads --ods-link-text-color-hover; the v19
--ods-theme-input-text-color-checked migrates to
--ods-semantic-color-content-on-control-solid.
* **form-fields:** fields no longer stretch to their container nor shrink to their content by default; size a field through its root className or style. The Select and Combobox roots now always carry a CSS-module class and render as inline-block.
* **themes:** the --ods-theme-*, --ods-color-* and 13 remaining legacy
tokens are removed without alias, read the --ods-semantic-* role that
replaces each one (BC-01 to BC-03). The palette is rebuilt on the rungs 50 to
900 (BC-04), 161 SCSS variables of src/default/_variables.scss are removed,
the breakpoints included, which @ovhcloud/ods-react/style still exports
(BC-05), and ./default/tokens holds only the new names (BC-06).
* **themes:** @ovhcloud/ods-themes/default/css ships the Aluminium look,
import @ovhcloud/ods-themes/blue-jeans/css right after it to keep the
OVHcloud look (BC-07). A 19.x custom theme no longer applies: a v20 theme
re-declares the --ods-palette-brand-* and --ods-palette-accent-* ramps
(BC-20).
* **themes:** component tokens now read the semantic layer, and 25 of them
are removed or renamed, so an override of one is silently ignored (BC-08):
among them --ods-button-border-radius-width becomes --ods-button-border-width
(BC-18), and --ods-code-primary-color, --ods-code-secondary-color and
--ods-code-trigger-background-color become --ods-code-text-color,
--ods-code-background-color and --ods-code-trigger-color (BC-17). Six
variables of @ovhcloud/ods-react/style now hold a var() string and fail in
Sass arithmetic, and 11 of its exports are removed (BC-12, BC-16, BC-18).
* **themes:** the default rendering changes: Card defaults to neutral
(BC-09), Button has a 4px radius at every size (BC-10), Accordion takes the
whole container radius (BC-11), a disabled component is dimmed with an opacity
instead of being repainted grey (BC-12), form fields paint their own
background (BC-14), a modal always stacks above a drawer (BC-15), and Card,
Tile, Accordion, Badge, Tabs, the multiple Combobox tags and the transitions
render differently (BC-19).
* **themes:** the default font family is renamed from 'Source Sans Pro' to
'Source Sans 3' in --ods-theme-font-family, --ods-font-family-default and the
@font-face rules, without alias. CSS or custom themes that write
'Source Sans Pro' explicitly must use var(--ods-theme-font-family) or
'Source Sans 3' instead.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.3](https://ovh.github.io/design-system/v19.7.3/?path=/docs/design-system-changelog--page) (2026-06-16)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.3)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.2](https://ovh.github.io/design-system/v19.7.2/?path=/docs/design-system-changelog--page) (2026-06-11)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.2)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.7.1](https://ovh.github.io/design-system/v19.7.1/?path=/docs/design-system-changelog--page) (2026-05-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.1)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

### Features

* **doc:** add charts usage documentation ([6f4e745](https://github.com/ovh/design-system/commit/6f4e74548312b2cf79558f9ad5275dbfce5d6110))
* **themes:** add new icons & update existing ones to ods-icon font ([50888a4](https://github.com/ovh/design-system/commit/50888a493e959de0d2923e4b74bd475a8d3ee771))
* **toaster:** add slide-in and slide/fade-out animations ([a520034](https://github.com/ovh/design-system/commit/a520034af1388b6ba76667ada9fcfca49e4175be))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

### Features

* **icons:** add new set of icons ([d30e961](https://github.com/ovh/design-system/commit/d30e96132d31f366dc4892472d95bc2727effb2d))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Bug Fixes

* **theme-generator:** update design tokens for a better use ([5440285](https://github.com/ovh/design-system/commit/54402851419979ef5bcab4978176cade86013854))


### Features

* **doc:** add theme generator tool ([8190bab](https://github.com/ovh/design-system/commit/8190bab2b083b411a779fa9e3c64143d228a989a))
* **doc:** update design tokens page ([1f1290e](https://github.com/ovh/design-system/commit/1f1290e07d62a0296b0fc692765d0d1efe2c3fc1))
* **storybook:** add dark mode ([67f66b5](https://github.com/ovh/design-system/commit/67f66b59af7504513eb97a0f54d44635d21a0783))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Features

* **fonts:** new default way to load fonts (2 extra exports + fonts) ([f9ed13f](https://github.com/ovh/design-system/commit/f9ed13f597a78c4ef3cfd4dd8e2994901afe6a43))
* **icon:** add new icons & aliases, fix bbox warning ([552ebe1](https://github.com/ovh/design-system/commit/552ebe15b0f8b395ffb305f9b88b96f62f056972))
* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))
* **themes:** export design tokens as JSON ([18a2f7d](https://github.com/ovh/design-system/commit/18a2f7d7166b32aa58a79df415c556f166e17179))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Features

* **tokens:** add new design tokens and update message bg-color for better contrast ([ae6360d](https://github.com/ovh/design-system/commit/ae6360d38c2c5b0dbc64cc9ba7586814370913e7))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Features

* **icon:** add updated icons with correct ratio ([9b417d4](https://github.com/ovh/design-system/commit/9b417d47a42da53db079692d73a30883a9ab5568))
* **styles:** add background color for invalid states across form elements ([dd973e5](https://github.com/ovh/design-system/commit/dd973e53cb7df2b73cdd34a8893baae815334c82))
* **themes:** add new selected design tokens ([5636b14](https://github.com/ovh/design-system/commit/5636b14361f1a0802e6b06c436b00e64d116ed5a))
* **themes:** enforce ods layers order ([0337d3e](https://github.com/ovh/design-system/commit/0337d3e519aebb014eaee220c22b59b66d9a886e))
* **themes:** replace source-code-pro with variable fonts ([9e23e05](https://github.com/ovh/design-system/commit/9e23e0596e0f4630795c2352fc8a61169885f311))
* **themes:** replace source-sans-pro with variable fonts ([c44fdfc](https://github.com/ovh/design-system/commit/c44fdfc04197ba6ee661c44e1d52d516c0a692cb))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.3](https://ovh.github.io/design-system/v18.6.3/?path=/docs/design-system-changelog--page) (2025-06-06)
[compare](https://github.com/ovh/design-system/compare/v18.6.2...v18.6.3)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.2](https://ovh.github.io/design-system/v18.6.2/?path=/docs/design-system-changelog--page) (2025-04-10)
[compare](https://github.com/ovh/design-system/compare/v18.6.1...v18.6.2)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.1](https://ovh.github.io/design-system/v18.6.1/?path=/docs/design-system-changelog--page) (2025-03-28)
[compare](https://github.com/ovh/design-system/compare/v18.6.0...v18.6.1)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.0](https://ovh.github.io/design-system/v18.6.0/?path=/docs/design-system-changelog--page) (2025-03-25)
[compare](https://github.com/ovh/design-system/compare/v18.6.0-alpha.2...v18.6.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.0-alpha.2](https://ovh.github.io/design-system/v18.6.0-alpha.2/?path=/docs/design-system-changelog--page) (2025-03-17)
[compare](https://github.com/ovh/design-system/compare/v18.6.0-alpha.1...v18.6.0-alpha.2)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.0-alpha.1](https://ovh.github.io/design-system/v18.6.0-alpha.1/?path=/docs/design-system-changelog--page) (2025-03-11)
[compare](https://github.com/ovh/design-system/compare/v18.6.0-alpha.0...v18.6.0-alpha.1)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.6.0-alpha.0](https://ovh.github.io/design-system/v18.6.0-alpha.0/?path=/docs/design-system-changelog--page) (2025-02-27)
[compare](https://github.com/ovh/design-system/compare/v18.5.3...v18.6.0-alpha.0)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.5.3](https://ovh.github.io/design-system/v18.5.3/?path=/docs/design-system-changelog--page) (2025-02-18)
[compare](https://github.com/ovh/design-system/compare/v18.5.2...v18.5.3)

### Features

* **select:** add positionning strategy attribute ([0f6b38d](https://github.com/ovh/design-system/commit/0f6b38dfb6d07216c61560b3e39c3223ed6ea885))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.5.2](https://ovh.github.io/design-system/v18.5.2/?path=/docs/design-system-changelog--page) (2025-02-18)
[compare](https://github.com/ovh/design-system/compare/v18.5.1...v18.5.2)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.5.1](https://ovh.github.io/design-system/v18.5.1/?path=/docs/design-system-changelog--page) (2025-02-04)
[compare](https://github.com/ovh/design-system/compare/v18.5.0...v18.5.1)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.5.0](https://ovh.github.io/design-system/v18.5.0/?path=/docs/design-system-changelog--page) (2025-01-20)
[compare](https://github.com/ovh/design-system/compare/v18.4.1...v18.5.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.4.1](https://ovh.github.io/design-system/v18.4.1/?path=/docs/design-system-changelog--page) (2024-12-10)
[compare](https://github.com/ovh/design-system/compare/v18.4.0...v18.4.1)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.4.0](https://ovh.github.io/design-system/v18.4.0/?path=/docs/design-system-changelog--page) (2024-12-05)
[compare](https://github.com/ovh/design-system/compare/v18.4.0-alpha.1...v18.4.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.4.0-alpha.1](https://ovh.github.io/design-system/v18.4.0-alpha.1/?path=/docs/design-system-changelog--page) (2024-12-03)
[compare](https://github.com/ovh/design-system/compare/v18.4.0-alpha.0...v18.4.0-alpha.1)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.4.0-alpha.0](https://ovh.github.io/design-system/v18.4.0-alpha.0/?path=/docs/design-system-changelog--page) (2024-11-29)
[compare](https://github.com/ovh/design-system/compare/v18.3.1...v18.4.0-alpha.0)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.3.1](https://ovh.github.io/design-system/v18.3.1/?path=/docs/design-system-changelog--page) (2024-11-21)
[compare](https://github.com/ovh/design-system/compare/v18.3.0...v18.3.1)

### Bug Fixes

* **select:** apply style to hovered selected option & expose missing tokens ([5bb0165](https://github.com/ovh/design-system/commit/5bb016541c6eb14e547c3c473c2ba7224c54f231))


### Features

* **icon:** add new icon 'columns' ([4da03d6](https://github.com/ovh/design-system/commit/4da03d6fc01d0517523b20b83fbd269c448d0a19))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.3.0](https://ovh.github.io/design-system/v18.3.0/?path=/docs/design-system-changelog--page) (2024-11-05)
[compare](https://github.com/ovh/design-system/compare/v18.2.0...v18.3.0)

### Features

* **global:** add read-only tokens & apply style to components ([df51f02](https://github.com/ovh/design-system/commit/df51f025c0bac0c7ef718f42a76488150bbce82e))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.2.0](https://ovh.github.io/design-system/v18.2.0/?path=/docs/design-system-changelog--page) (2024-10-23)
[compare](https://github.com/ovh/design-system/compare/v18.1.0...v18.2.0)

### Features

* **button:** review fix ([cd5bdea](https://github.com/ovh/design-system/commit/cd5bdea58dd82e92bb8258439af8af977c72e24a))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.1.0](https://ovh.github.io/design-system/v18.1.0/?path=/docs/design-system-changelog--page) (2024-10-10)
[compare](https://github.com/ovh/design-system/compare/v18.0.0...v18.1.0)

### Features

* **icon:** add bill + box icons & update globe icon ([d8bf97c](https://github.com/ovh/design-system/commit/d8bf97c4a2cbce1cf63b699ef26597ba60ba763c))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.0.0](https://ovh.github.io/design-system/v18.0.0/?path=/docs/design-system-changelog--page) (2024-08-29)
[compare](https://github.com/ovh/design-system/compare/v18.0.0-alpha.1...v18.0.0)

**Note:** Version bump only for package @ovhcloud/ods-themes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.0.0-alpha.1](https://ovh.github.io/design-system/v18.0.0-alpha.1/?path=/docs/design-system-changelog--page) (2024-08-06)
[compare](https://github.com/ovh/design-system/compare/v18.0.0-alpha.0...v18.0.0-alpha.1)

**Note:** Version bump only for package @ovhcloud/ods-themes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


## [18.0.0-alpha.0](https://ovh.github.io/design-system/v18.0.0-alpha.0/?path=/docs/design-system-changelog--page) (2024-07-30)
[compare](https://github.com/ovh/design-system/compare/v17.2.2...v18.0.0-alpha.0)

### Bug Fixes

* **badge:** set official colors ([defebb4](https://github.com/ovh/design-system/commit/defebb4fa58fd237a3aace220e59dc168ff00f52))
* **input:** style actions ([4a1bc1d](https://github.com/ovh/design-system/commit/4a1bc1d51d945e343ddcd6ab025017017f25c784))
* **link:** docs & cursor ([71fb8ac](https://github.com/ovh/design-system/commit/71fb8ac2a037e08dd8bad355a9659ffdf75bc421))
* **project:** set correct latest version ([c3c87db](https://github.com/ovh/design-system/commit/c3c87db50891e8da601bb89f22ed44ff56f71181))
* **theme:** use latest generated token list ([1c662f1](https://github.com/ovh/design-system/commit/1c662f1e0b8b785679e44d43154ae013a5ad4228))
* **themes:** replace some corrupted code fonts ([ff0cecd](https://github.com/ovh/design-system/commit/ff0cecd22d013bb98ef56672ecaa771fd6ae3c10))


### Features

* **badge:** implement component ([bd96c3f](https://github.com/ovh/design-system/commit/bd96c3faac4914f7334afc8556a382b38049265f))
* **breadcrumb:** implement component ([6bda3ed](https://github.com/ovh/design-system/commit/6bda3ed281c4cb251ddc95c0eb7b7a3ce50624f8))
* **button:** implement component ([22b4931](https://github.com/ovh/design-system/commit/22b4931c3bb2348ba5ddb6187a7088c590c6c502))
* **file-upload:** implement component ([8d4edf6](https://github.com/ovh/design-system/commit/8d4edf6755ad89959a4513df7d7b7e0670867c1c))
* **icon:** add optimized & renamed icons ([fc0c416](https://github.com/ovh/design-system/commit/fc0c41642014d1616048b350abb238db66bafaf3))
* **icon:** update migration guide & rm todo ([6ad6c7a](https://github.com/ovh/design-system/commit/6ad6c7a19db095a1f700642bb0009f9ebb18e2fb))
* **message:** component implementation ([9148991](https://github.com/ovh/design-system/commit/91489913fa2133a52626e886754e1020f63215d7))
* **select:** implement component ([5194e3a](https://github.com/ovh/design-system/commit/5194e3a5b60177b6d86f60fc642244518706367c))
* **spinner:** update design with latest info ([93b2848](https://github.com/ovh/design-system/commit/93b28483798011ffadbf2cb06527855740dfd49b))
* **storybook:** upgrade to storybook v8 ([1239967](https://github.com/ovh/design-system/commit/123996723ccd63eb74d354f62f594c7c33fcf7da))
* **tag:** implement component ([6e50d3b](https://github.com/ovh/design-system/commit/6e50d3b21d92813cfb0ab18912a25d2f5cc28e98))
* **themes:** add fonts ([ea972a5](https://github.com/ovh/design-system/commit/ea972a57330eeeed43f0c1499d4ec5e12c04fc76))
* **themes:** update generated tokens ([543eefe](https://github.com/ovh/design-system/commit/543eefe1acfdf017c29aaad3d108627479f73bdb))
* **tooltip:** implement component ([25a43d3](https://github.com/ovh/design-system/commit/25a43d304a27f365a13227513e4565e327e8245d))
