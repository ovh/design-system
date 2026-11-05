# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* **accordion:** address review feedback ([da20e08](https://github.com/ovh/design-system/commit/da20e087b5c53a38f82286fffd3d015d57dccd9d))
* **accordion:** fall back to medium for an unknown emphasis ([415d5ca](https://github.com/ovh/design-system/commit/415d5ca2c66e60a65ebd6aa2bccac9ceaca26e4d))
* **accordion:** repoint the emphasis styles on the semantic layer ([33ead4a](https://github.com/ovh/design-system/commit/33ead4ae7a9ef9d76174b06e475a378e012c4b9e))


### Features

* **accordion:** add the emphasis prop ([aa2020c](https://github.com/ovh/design-system/commit/aa2020cceac2db1848db28473c71048d379f93f0))
* **button:** replace the variant prop with emphasis ([aac761b](https://github.com/ovh/design-system/commit/aac761b7453609a944e77c52d8c09ffafa71ffaa))
* **themes, ods-react:** add the aluminium dark theme and rewire components for it ([4fae554](https://github.com/ovh/design-system/commit/4fae5541a17e876a16cf9984a52024792178ae23))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)


### BREAKING CHANGES

* **themes, ods-react:** the Badge status custom properties paint the medium
emphasis, the tint moving to the -high names; the Badge and Message high
emphases get a border; the Query Filter tags are accent; the Link hover
keeps its rest color and reads --ods-link-text-color-hover; the v19
--ods-theme-input-text-color-checked migrates to
--ods-semantic-color-content-on-control-solid.
* **button:** the Button variant prop is removed with BUTTON_VARIANT, BUTTON_VARIANTS and ButtonVariant: use emphasis (default -> high, outline -> medium, ghost -> low). A Button without emphasis now renders as medium (the v19 outline): set emphasis to high to keep the filled rendering.
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





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.3](https://ovh.github.io/design-system/v19.7.3/?path=/docs/design-system-changelog--page) (2026-06-16)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.3)

### Bug Fixes

* **chore:** ban barrel imports and lint dev.stories.tsx files ([4649530](https://github.com/ovh/design-system/commit/46495301e4dbd0320bd10d27f0e79e229af5d357))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.2](https://ovh.github.io/design-system/v19.7.2/?path=/docs/design-system-changelog--page) (2026-06-11)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.2)

### Bug Fixes

* **chore:** ban barrel imports and lint dev.stories.tsx files ([4649530](https://github.com/ovh/design-system/commit/46495301e4dbd0320bd10d27f0e79e229af5d357))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.1](https://ovh.github.io/design-system/v19.7.1/?path=/docs/design-system-changelog--page) (2026-05-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.1)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

### Features

* **components:** add compound file exports for reusable component patterns ([f2e9ac8](https://github.com/ovh/design-system/commit/f2e9ac840ebeb0550cced970f5cd6821d1951a2f))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

### Bug Fixes

* **accordion:** inherit only bottom border-radius on content ([23cf56a](https://github.com/ovh/design-system/commit/23cf56a66d9a9d7721636804e7e1381060bfdbbf))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

### Features

* **accordion:** add support for a configurable expand icon position ([e9c84e1](https://github.com/ovh/design-system/commit/e9c84e16aad6aca529d2bfe472ec7b0281328c3f))
* **accordion:** update styles to adjust border radius for open state ([51d446f](https://github.com/ovh/design-system/commit/51d446f37cde5df8c42c31f405cbdaa69d411983))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Features

* **doc:** add css variables on component tech page ([82228ea](https://github.com/ovh/design-system/commit/82228ea53c80426ba53d905d2b34a3079c2de830))
* **storybook:** add dark mode ([67f66b5](https://github.com/ovh/design-system/commit/67f66b59af7504513eb97a0f54d44635d21a0783))
* **style:** update style to use design tokens ([661df0e](https://github.com/ovh/design-system/commit/661df0e6561be4d08bd68e62d9468c2cb9cbf580))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Features

* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Features

* **ods-react:** add data-ods attribute on exposed components ([ecb5905](https://github.com/ovh/design-system/commit/ecb5905e9ffe0081c627c595f000bc5f813de86b))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

**Note:** Version bump only for package @ovhcloud/ods-react-accordion







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Features

* **accordion:** clean implementation ([5d4fe22](https://github.com/ovh/design-system/commit/5d4fe22d57efd887ffe7ac455fdedb86ace4b61d))
* **accordion:** enhance multiple behavior and remove unused doc example ([a2d825e](https://github.com/ovh/design-system/commit/a2d825e53f429ba7505c82f9cae32c9eeb91d65e))
* **accordion:** implement component ([54e54f1](https://github.com/ovh/design-system/commit/54e54f1ad31f43ff0c3061316945ef49d32de99d))
* **accordion:** props order ([3868064](https://github.com/ovh/design-system/commit/3868064e53940cfe83368e3d080df535e5e4da49))
* **components:** separate css layers given atomic level ([1d9a8c5](https://github.com/ovh/design-system/commit/1d9a8c5d11b9a4116a166fe3249142669db08a62))
* **doc:** add description on each exposed component property ([03c30bb](https://github.com/ovh/design-system/commit/03c30bb9e9a8ad28d56f2079419b76d066da7c92))
* **icon:** add updated icons with correct ratio ([9b417d4](https://github.com/ovh/design-system/commit/9b417d47a42da53db079692d73a30883a9ab5568))
