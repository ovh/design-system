# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0](https://ovh.github.io/design-system/v20.0.0/guides/changelog) (2026-11-12)
[compare](/compare/v20.0.0-alpha.0...v20.0.0)

**Note:** Version bump only for package @ovhcloud/ods-react-editable







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Features

* **button:** add the status prop and deprecate color ([bdac21d](https://github.com/ovh/design-system/commit/bdac21dd75798b86e5b33bac2d1edf251a1fb310))
* **button:** replace the variant prop with emphasis ([aac761b](https://github.com/ovh/design-system/commit/aac761b7453609a944e77c52d8c09ffafa71ffaa))
* **ods-react:** remove the deprecated color props ([3e48600](https://github.com/ovh/design-system/commit/3e48600d51ef8dae03376fca08a40cffb4fc6859))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)


### BREAKING CHANGES

* **ods-react:** color is removed from Badge, Button, Card, Divider,
Message, ModalContent, Spinner and Tag, with the XXX_COLOR(S) and
XxxColor exports and toast.primary(): use status (primary becomes accent,
brand on Button), role="alertdialog" or --ods-spinner-color.
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

**Note:** Version bump only for package @ovhcloud/ods-react-editable





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-react-editable







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

### Features

* **components:** implement new compound component exports ([67fdc79](https://github.com/ovh/design-system/commit/67fdc796fd0a4ed4940a9fb12df04cc420e1bba7))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package @ovhcloud/ods-react-editable





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

**Note:** Version bump only for package @ovhcloud/ods-react-editable







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

### Bug Fixes

* **doc:** cancel correctly the editable value on uncontrolled ([b74b7b5](https://github.com/ovh/design-system/commit/b74b7b5ec39fdc00c8d49fb2d9efb9fdec9c2909))


### Features

* **editable:** implement component ([4eedfec](https://github.com/ovh/design-system/commit/4eedfec708bb5087e4460a0b547a9200a742f993))
* **editable:** update default a11y translations ([719ed35](https://github.com/ovh/design-system/commit/719ed353de401b9a0ec4b5082cd3838e6404a063))
