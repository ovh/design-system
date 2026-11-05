# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* **ods-react:** type the removed v19 props never ([9dc039e](https://github.com/ovh/design-system/commit/9dc039ea3e75230ed7f4d818d7ebb01548cfe748))


### Features

* **button:** replace the variant prop with emphasis ([aac761b](https://github.com/ovh/design-system/commit/aac761b7453609a944e77c52d8c09ffafa71ffaa))
* **ods-react:** add React 19 support ([8323e06](https://github.com/ovh/design-system/commit/8323e06b33b639b88e265fe87aa6c933af61482d))
* **ods-react:** remove the APIs deprecated in v19 ([632fc69](https://github.com/ovh/design-system/commit/632fc692bef89a4b5adaeaea5717f88ffcf20891))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)


### BREAKING CHANGES

* **ods-react:** Switch, SwitchItem, SWITCH_SIZE(S), their types, the
@ovhcloud/ods-react/switch entry point and the --ods-switch-* custom
properties are removed: use Tabs with the switch variant, ButtonGroup or
RadioGroup. Pagination and Toggle require children (PaginationPages,
ToggleControl), and renderTotalItemsLabel and withPageSizeSelector are
removed: use PaginationPageSizeSelector. position, gutter, sameWidth and
fitControlWidth are removed from Menu, Popover, Select and Tooltip: use
overlayConfig. uploadSuccessLabel is removed from FileUploadItem.
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

**Note:** Version bump only for package @ovhcloud/ods-react-popover





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-react-popover







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

### Features

* **components:** add compound file exports for reusable component patterns ([f2e9ac8](https://github.com/ovh/design-system/commit/f2e9ac840ebeb0550cced970f5cd6821d1951a2f))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package @ovhcloud/ods-react-popover







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

### Bug Fixes

* **overlays:** inherit arrow tip background color from content ([aec46dc](https://github.com/ovh/design-system/commit/aec46dc888e0bffbcf2de6c56c8423fd5fdc016c))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

### Features

* **overlays:** add positionerStyle attribute ([67851e1](https://github.com/ovh/design-system/commit/67851e1b6f4c8ba1868a8301518b36092e4134af))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

### Bug Fixes

* **overlays:** prevent style override on Content to block closing ([684b626](https://github.com/ovh/design-system/commit/684b626ea9bef7c37c1033f647d7f2ce368c24a1))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

**Note:** Version bump only for package @ovhcloud/ods-react-popover







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Bug Fixes

* **theme-generator:** update design tokens for a better use ([5440285](https://github.com/ovh/design-system/commit/54402851419979ef5bcab4978176cade86013854))


### Features

* **doc:** add css variables on component tech page ([82228ea](https://github.com/ovh/design-system/commit/82228ea53c80426ba53d905d2b34a3079c2de830))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

**Note:** Version bump only for package @ovhcloud/ods-react-popover







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Features

* **popover:** add autoFocus, sameWidth and triggerId attributes ([00ccfcf](https://github.com/ovh/design-system/commit/00ccfcf35bb7107cbb54fe8e4faba96a608d975c))
* **popover:** add gutter attribute ([40ec4a7](https://github.com/ovh/design-system/commit/40ec4a75184a363c320c6af3cbf9dbc603d09aaf))
* **popover:** add onPositionChange attribute ([b39f3e1](https://github.com/ovh/design-system/commit/b39f3e1381e661f86ff2926d19db733b4466eb3d))
* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Bug Fixes

* **overlays:** prevent positionning issue if an id is set on popover/tooltip trigger ([6e51305](https://github.com/ovh/design-system/commit/6e51305476518571f5f0296dc1a0a53bc23e2cdf))


### Features

* **ods-react:** add data-ods attribute on exposed components ([ecb5905](https://github.com/ovh/design-system/commit/ecb5905e9ffe0081c627c595f000bc5f813de86b))
* **popover:** add className support and focus-visible styles to PopoverTrigger ([c705021](https://github.com/ovh/design-system/commit/c7050211d2784c8c1a7d86c636420b283d7361cc))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

**Note:** Version bump only for package @ovhcloud/ods-react-popover







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Bug Fixes

* **overlays:** add missing className prop ([0489ca0](https://github.com/ovh/design-system/commit/0489ca0903954927fc30ca28c0bf55d3e38924be))


### Features

* **components:** add specific css layer to isolate ods style ([0e84600](https://github.com/ovh/design-system/commit/0e84600f3b546a93b1c94678a4644db0671cdbed))
* **components:** separate css layers given atomic level ([1d9a8c5](https://github.com/ovh/design-system/commit/1d9a8c5d11b9a4116a166fe3249142669db08a62))
* **divider:** improve documentation ([290548a](https://github.com/ovh/design-system/commit/290548a41cbbafb6b2e670003014e7abe1e6e3da))
* **doc:** add description on each exposed component property ([03c30bb](https://github.com/ovh/design-system/commit/03c30bb9e9a8ad28d56f2079419b76d066da7c92))
* **doc:** improve component enums/interfaces/unions generation ([9ea4919](https://github.com/ovh/design-system/commit/9ea49199e9076fa11b79a39bb692c26ec2a49e8f))
* **doc:** improve component props generation && fix few components interfaces ([e3493e2](https://github.com/ovh/design-system/commit/e3493e23a50fb4cac3d14f0cf4218d7f72f783b1))
* **overlays:** add createPortal prop to components using Portal ([858f5af](https://github.com/ovh/design-system/commit/858f5afdba875b2fcc1226a9dc46d2eca13a14dc))
* **overlays:** allow prop extend on non DOM elements ([912f320](https://github.com/ovh/design-system/commit/912f320393cf90d2510f84ff1f0703c89532d4d0))
* **password:** implement component ([ee13e1a](https://github.com/ovh/design-system/commit/ee13e1a4b67b544b8ede471825639da55053f9f0))
* **popover:** add onOpenChange prop ([63b8823](https://github.com/ovh/design-system/commit/63b8823f73a207d746f702d77c62cc7183d5e835))
