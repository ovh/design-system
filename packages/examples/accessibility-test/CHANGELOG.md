# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0](https://ovh.github.io/design-system/v20.0.0/guides/changelog) (2026-11-12)
[compare](/compare/v20.0.0-alpha.0...v20.0.0)

**Note:** Version bump only for package accessibility-test







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Features

* **button:** add the status prop and deprecate color ([bdac21d](https://github.com/ovh/design-system/commit/bdac21dd75798b86e5b33bac2d1edf251a1fb310))
* **button:** replace the variant prop with emphasis ([aac761b](https://github.com/ovh/design-system/commit/aac761b7453609a944e77c52d8c09ffafa71ffaa))
* **card:** add the status prop and deprecate color ([8e3ec26](https://github.com/ovh/design-system/commit/8e3ec26b00e0a998a6b099645d13b46acb7d5089))
* command component ([9154337](https://github.com/ovh/design-system/commit/9154337edae139773a32d225c8ce293551e24668))
* **divider:** deprecate the color prop until v21 ([395068a](https://github.com/ovh/design-system/commit/395068a18185e63d6b98cdd2196ed34637df341e))
* **message:** add the status prop and deprecate color ([5144b3c](https://github.com/ovh/design-system/commit/5144b3cf38c37ba1c7024789b9825deea94af72a))
* **ods-react:** remove the APIs deprecated in v19 ([632fc69](https://github.com/ovh/design-system/commit/632fc692bef89a4b5adaeaea5717f88ffcf20891))
* **tag:** add the status prop and deprecate color ([e668916](https://github.com/ovh/design-system/commit/e66891603cfa2e2d23ef990a2dfe79df5f715030))
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

**Note:** Version bump only for package accessibility-test





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.2](https://ovh.github.io/design-system/v19.7.2/?path=/docs/design-system-changelog--page) (2026-06-11)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.2)

**Note:** Version bump only for package accessibility-test





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.1](https://ovh.github.io/design-system/v19.7.1/?path=/docs/design-system-changelog--page) (2026-05-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.1)

**Note:** Version bump only for package accessibility-test





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package accessibility-test







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

### Features

* **avatar:** initiate component ([0035798](https://github.com/ovh/design-system/commit/00357988a5f3c06a8ec2fc28c6999f230424f05c))
* **dataTable:** implement component ([9711cc4](https://github.com/ovh/design-system/commit/9711cc4cf965dab1663a6e2775b17891e4974178))
* **fileThumbnail:** implement component ([0f7a5fa](https://github.com/ovh/design-system/commit/0f7a5fa27f73615162fee6d9cbbee331fe7d1673))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package accessibility-test







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

### Features

* **cart:** implement component ([5d92c38](https://github.com/ovh/design-system/commit/5d92c38ef99bf49fb04d59f1c7f77071a2efb55f))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

### Features

* **editable:** implement component ([4eedfec](https://github.com/ovh/design-system/commit/4eedfec708bb5087e4460a0b547a9200a742f993))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

**Note:** Version bump only for package accessibility-test







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

### Features

* **buttonGroup:** implement component ([8104e06](https://github.com/ovh/design-system/commit/8104e065c5ae020dd79317ad23940a65f969e12d))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Features

* **toaster:** implement component ([5eabfb4](https://github.com/ovh/design-system/commit/5eabfb4eaacb7581a7b2901ce5b443e89c163d7a))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

**Note:** Version bump only for package accessibility-test







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Features

* **meter:** implement component ([54fa446](https://github.com/ovh/design-system/commit/54fa446d7565fce078d6b788a1366c35d9365494))
* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Bug Fixes

* **a11y:** apply axe-core violation fixes ([38bc9a6](https://github.com/ovh/design-system/commit/38bc9a6acc3f5eef08ab9be4d0a3c76b6a35fb28))
* **checkbox:** move hidden input under control to avoid parent aria-hidden ([2b4e955](https://github.com/ovh/design-system/commit/2b4e955448815ecee31a279ba58eb24738ef74a9))
* **radioGroup:** add aria-invalid on invalid radio ([2bd841c](https://github.com/ovh/design-system/commit/2bd841c9a21bb04427c2efc50578a6127d59f3f2))


### Features

* **a11y:** prevent ark auto-generated aria elements to be set by default when not used ([3e1a896](https://github.com/ovh/design-system/commit/3e1a896be656194f51cc87b2433bab3b3e385ab4))
* **examples:** add accessibility-test app ([7a388cc](https://github.com/ovh/design-system/commit/7a388cc43ea63cbadcd27279c590864304fc47d7))
* **examples:** add lighthouse run on accessibility-test app ([eca9810](https://github.com/ovh/design-system/commit/eca9810d1d9907a92749af03ade945a48f5d7b28))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

**Note:** Version bump only for package vite-app







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Bug Fixes

* **build:** update config to fix tree-shaking for webpack ([5015486](https://github.com/ovh/design-system/commit/5015486e7b25e62be9d0e0ef9ca2b6d99443e5e3))
* **lib:** update build to work with React v19 & add vite example app ([0e29ef7](https://github.com/ovh/design-system/commit/0e29ef7c0e23ebabc9e4967f6509dc123330844e))
