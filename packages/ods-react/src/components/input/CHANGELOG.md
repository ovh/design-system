# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* **form-field:** link the label to the id the field actually renders ([0cf79c9](https://github.com/ovh/design-system/commit/0cf79c9f6a24c69c2883e7bdad0dc1189a7322a8))
* **input:** even out the gap around in-field action buttons ([e2007f8](https://github.com/ovh/design-system/commit/e2007f8309fa5dd61c774fda55442d03dcf48c15))
* **input:** keep the in-field inset on the container ([e8f65d4](https://github.com/ovh/design-system/commit/e8f65d441ccafea54a85652d296eca1a5ee100f0))


### Features

* **button:** add the status prop and deprecate color ([bdac21d](https://github.com/ovh/design-system/commit/bdac21dd75798b86e5b33bac2d1edf251a1fb310))
* **button:** replace the variant prop with emphasis ([aac761b](https://github.com/ovh/design-system/commit/aac761b7453609a944e77c52d8c09ffafa71ffaa))
* clean useless comments ([a8e6c37](https://github.com/ovh/design-system/commit/a8e6c37836ad5a53766da3244ad85775a29ec4da))
* **form-fields:** give every form field the same default width ([5479021](https://github.com/ovh/design-system/commit/547902197c8b9b6cbca5331f17a6017a8668ca5d))
* **input:** add startContent and endContent adornments ([8fe37af](https://github.com/ovh/design-system/commit/8fe37af10f9890af32941c2b1ad9e67a5f27a2ad))
* **Input:** review returns ([5c29f6f](https://github.com/ovh/design-system/commit/5c29f6f9fdf3babd278310b82aacb106dfeaafec))
* **spinner:** add the --ods-spinner-color property and deprecate color ([9336e19](https://github.com/ovh/design-system/commit/9336e1951ca69dfde25e1d9eed7846d98f0e322b))
* **themes:** align the blue-jeans theme with the v19 look ([a28c3cc](https://github.com/ovh/design-system/commit/a28c3ccf1a7e3bb4eaae109dd05243a0fa6f5b88))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)


### BREAKING CHANGES

* **form-fields:** fields no longer stretch to their container nor shrink to their content by default; size a field through its root className or style. The Select and Combobox roots now always carry a CSS-module class and render as inline-block.
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

**Note:** Version bump only for package @ovhcloud/ods-react-input





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-react-input





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

**Note:** Version bump only for package @ovhcloud/ods-react-input





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package @ovhcloud/ods-react-input





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

**Note:** Version bump only for package @ovhcloud/ods-react-input





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

**Note:** Version bump only for package @ovhcloud/ods-react-input





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

**Note:** Version bump only for package @ovhcloud/ods-react-input







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

### Features

* **doc:** update recipe doc ([5c5916f](https://github.com/ovh/design-system/commit/5c5916fbc9a16d1dea59fcb7466c1c9fe5539a2b))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Features

* **doc:** add css variables on component tech page ([82228ea](https://github.com/ovh/design-system/commit/82228ea53c80426ba53d905d2b34a3079c2de830))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

### Features

* **input:** add hover & focus state styling for border color ([f4af1ca](https://github.com/ovh/design-system/commit/f4af1cad9cf5266f3163f8c3c0b4560ba6c0f9db))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Bug Fixes

* **input:** enforce clearable display on initial render when a value is set ([705c1d3](https://github.com/ovh/design-system/commit/705c1d3607fe895dc239b1be226b0b1fa8745bcd))
* **input:** update hasValue based on value prop change ([f26cb2d](https://github.com/ovh/design-system/commit/f26cb2da1bf0146017978fb39878e3cb26003807))


### Features

* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Bug Fixes

* **a11y:** apply axe-core violation fixes ([38bc9a6](https://github.com/ovh/design-system/commit/38bc9a6acc3f5eef08ab9be4d0a3c76b6a35fb28))
* **i18n:** move i18n to root components & normalize contexts ([5bf41ab](https://github.com/ovh/design-system/commit/5bf41abad9bb0ac9909a01f74561f17cada84950))
* **input:** enforce default id & remove unused attr & filter demo doc ([5b62169](https://github.com/ovh/design-system/commit/5b62169865a5c0499022867236a7e73334cf5cf0))


### Features

* **input:** add InputActions component with support for loading, clear, search, and mask actions ([c7380ec](https://github.com/ovh/design-system/commit/c7380eccb8d849443de33e13b36e7031e493e720))
* **ods-react:** add data-ods attribute on exposed components ([ecb5905](https://github.com/ovh/design-system/commit/ecb5905e9ffe0081c627c595f000bc5f813de86b))
* **password:** add a11y changes and documentation ([c899eb8](https://github.com/ovh/design-system/commit/c899eb8aecfc44f289fed05c2f1bf650bfa686b0))
* **quantity:** add a11y changes and documentation ([04e0511](https://github.com/ovh/design-system/commit/04e05112421cf4f9ab22db283790a7e4ef874d7a))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

**Note:** Version bump only for package @ovhcloud/ods-react-input







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Bug Fixes

* **input:** enforce loading width to match action button ([9be296f](https://github.com/ovh/design-system/commit/9be296fc4cb36b5c734c01708dcc57905f44b13a))
* **input:** focus input on clear ([2240723](https://github.com/ovh/design-system/commit/22407231513c9f3dfe9c04ce1aa071c99c2619a8))
* **input:** prevent displaying actions on controlled input when spamming value ([1878e1e](https://github.com/ovh/design-system/commit/1878e1e60e0d38c78d5c2d683917f8259124e489))
* **input:** use correct action color & update doc ([db2ed86](https://github.com/ovh/design-system/commit/db2ed860e48b418b9cef8d678c302b0c93f6f5ad))


### Features

* **components:** add specific css layer to isolate ods style ([0e84600](https://github.com/ovh/design-system/commit/0e84600f3b546a93b1c94678a4644db0671cdbed))
* **components:** separate css layers given atomic level ([1d9a8c5](https://github.com/ovh/design-system/commit/1d9a8c5d11b9a4116a166fe3249142669db08a62))
* **doc:** add description on each exposed component property ([03c30bb](https://github.com/ovh/design-system/commit/03c30bb9e9a8ad28d56f2079419b76d066da7c92))
* **doc:** improve component enums/interfaces/unions generation ([9ea4919](https://github.com/ovh/design-system/commit/9ea49199e9076fa11b79a39bb692c26ec2a49e8f))
* **input:** expose mask state enum ([5db98f4](https://github.com/ovh/design-system/commit/5db98f4ef2947a428a2bb47625d80aee51cabcbd))
* **input:** implement component ([5a8b47c](https://github.com/ovh/design-system/commit/5a8b47c25fcecae8fa8d692fa02f962924bc2c3f))
* **input|textarea:** add invalid prop to enforce error style ([cc32703](https://github.com/ovh/design-system/commit/cc32703f68e4a2b103af998059fd1abdbef8e55e))
* **password:** implement component ([ee13e1a](https://github.com/ovh/design-system/commit/ee13e1a4b67b544b8ede471825639da55053f9f0))
