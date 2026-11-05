# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* **combobox, command, query-filter:** skip the option scroll on pointer highlights ([39a14f3](https://github.com/ovh/design-system/commit/39a14f335fd9e03bfcfe9a311a48a58f0d99bfc8))


### Features

* **form-fields:** give every form field the same default width ([5479021](https://github.com/ovh/design-system/commit/547902197c8b9b6cbca5331f17a6017a8668ca5d))
* **ods-react:** add React 19 support ([8323e06](https://github.com/ovh/design-system/commit/8323e06b33b639b88e265fe87aa6c933af61482d))
* **ods-react:** name the accent and brand custom properties after their status ([da6e082](https://github.com/ovh/design-system/commit/da6e082ad68430bdd2c73a460560e465ff040bd7))
* **themes, ods-react:** add the aluminium dark theme and rewire components for it ([4fae554](https://github.com/ovh/design-system/commit/4fae5541a17e876a16cf9984a52024792178ae23))
* **themes:** align the blue-jeans theme with the v19 look ([a28c3cc](https://github.com/ovh/design-system/commit/a28c3ccf1a7e3bb4eaae109dd05243a0fa6f5b88))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)


### BREAKING CHANGES

* **themes, ods-react:** the Badge status custom properties paint the medium
emphasis, the tint moving to the -high names; the Badge and Message high
emphases get a border; the Query Filter tags are accent; the Link hover
keeps its rest color and reads --ods-link-text-color-hover; the v19
--ods-theme-input-text-color-checked migrates to
--ods-semantic-color-content-on-control-solid.
* **ods-react:** the --ods-badge-*-primary*, --ods-card-*-primary,
--ods-message-*-primary-*, --ods-tag-*-primary* custom properties and
the 'primary' value of their Sass mixins are renamed accent; the
--ods-button-*-primary* ones and the 'primary' value of the
ods-button-variant-* mixins are renamed brand.
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





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.3](https://ovh.github.io/design-system/v19.7.3/?path=/docs/design-system-changelog--page) (2026-06-16)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.3)

### Bug Fixes

* **chore:** ban barrel imports and lint dev.stories.tsx files ([4649530](https://github.com/ovh/design-system/commit/46495301e4dbd0320bd10d27f0e79e229af5d357))
* **combobox:** allow controlled combobox to be cleared programmatically ([7fe0c17](https://github.com/ovh/design-system/commit/7fe0c17a2f29fe807663991d501b061f4555354e))
* **combobox:** allow selection clearing - e2e ([9ec797b](https://github.com/ovh/design-system/commit/9ec797beb96f1e8a1287f3c7646fb5cfc4dbd9e7))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.2](https://ovh.github.io/design-system/v19.7.2/?path=/docs/design-system-changelog--page) (2026-06-11)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.2)

### Bug Fixes

* **chore:** ban barrel imports and lint dev.stories.tsx files ([4649530](https://github.com/ovh/design-system/commit/46495301e4dbd0320bd10d27f0e79e229af5d357))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.1](https://ovh.github.io/design-system/v19.7.1/?path=/docs/design-system-changelog--page) (2026-05-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.1)

**Note:** Version bump only for package @ovhcloud/ods-react-combobox





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-react-combobox







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

### Features

* **components:** add compound file exports for reusable component patterns ([f2e9ac8](https://github.com/ovh/design-system/commit/f2e9ac840ebeb0550cced970f5cd6821d1951a2f))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

### Bug Fixes

* **combobox:** hide caret button from screen reader ([c9ac606](https://github.com/ovh/design-system/commit/c9ac60624f7229ccbc0baaaec1af110ec02afbcf))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

### Bug Fixes

* **combobox:** remove disable prop from items ([a44b0f3](https://github.com/ovh/design-system/commit/a44b0f395f1aa9aae612025480b8c98507243f9a))


### Features

* **combobox:** add caret on control ([98f43f2](https://github.com/ovh/design-system/commit/98f43f265b38f46efb9252f5bd24e99f5a20cc84))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

**Note:** Version bump only for package @ovhcloud/ods-react-combobox





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

**Note:** Version bump only for package @ovhcloud/ods-react-combobox







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

### Bug Fixes

* **combobox:** prevent content close on scrollbar click ([7eea350](https://github.com/ovh/design-system/commit/7eea35006b1c4e8f30cd5fa5aef3d978ddecb87d))
* **combobox:** scroll option into view on highlight ([5213bcd](https://github.com/ovh/design-system/commit/5213bcda70d49039797d6521508fe5bb8fbcdb63))
* **components:** resolve lint:a11y issues ([1c66ea7](https://github.com/ovh/design-system/commit/1c66ea7bea91572d9e1afe11336f46347cfa0207))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.3.0](https://ovh.github.io/design-system/v19.3.0/?path=/docs/design-system-changelog--page) (2025-11-26)
[compare](https://github.com/ovh/design-system/compare/v19.2.1...v19.3.0)

### Bug Fixes

* **combobox:** ensure blur when moving to a different combobox ([a55b63d](https://github.com/ovh/design-system/commit/a55b63d3d63e6e9be91a416bef7786753ae724c8))
* **combobox:** reflect external value changes ([828199e](https://github.com/ovh/design-system/commit/828199e1ed6b43bf31e2047252fb484c2b548889))
* **datepicker:** manage null value when controlled ([fb42146](https://github.com/ovh/design-system/commit/fb42146a8805aa990020882713e606397afcb661))
* **theme-generator:** update design tokens for a better use ([5440285](https://github.com/ovh/design-system/commit/54402851419979ef5bcab4978176cade86013854))


### Features

* **doc:** add css variables on component tech page ([82228ea](https://github.com/ovh/design-system/commit/82228ea53c80426ba53d905d2b34a3079c2de830))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.1](https://ovh.github.io/design-system/v19.2.1/?path=/docs/design-system-changelog--page) (2025-10-15)
[compare](https://github.com/ovh/design-system/compare/v19.2.0...v19.2.1)

### Features

* **combobox:** add custom filter attribute ([ccd2d84](https://github.com/ovh/design-system/commit/ccd2d84273eae39417c21167dd1fef1a908180bb))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.2.0](https://ovh.github.io/design-system/v19.2.0/?path=/docs/design-system-changelog--page) (2025-10-09)
[compare](https://github.com/ovh/design-system/compare/v19.1.0...v19.2.0)

### Bug Fixes

* **combobox:** add missing a11y params && update documentation ([466fa9b](https://github.com/ovh/design-system/commit/466fa9b8cc9c969c3fc79c344a65e75dfd103707))
* **combobox:** init correctly group items with default value(s) ([6139b69](https://github.com/ovh/design-system/commit/6139b69129cfcec07481432649d65cecb05069ff))
* **combobox:** prevent clearable to reset input value ([1bd460f](https://github.com/ovh/design-system/commit/1bd460fc183c6de4a30662001cbf65f37055e49c))
* **combobox:** reset control to empty on blur if no selection ([1badc76](https://github.com/ovh/design-system/commit/1badc76abb43555f01124f3cc608b60eb960429b))
* **input:** enforce clearable display on initial render when a value is set ([705c1d3](https://github.com/ovh/design-system/commit/705c1d3607fe895dc239b1be226b0b1fa8745bcd))
* **input:** update hasValue based on value prop change ([f26cb2d](https://github.com/ovh/design-system/commit/f26cb2da1bf0146017978fb39878e3cb26003807))


### Features

* **combobox:** reset input value to selection on blur ([9f6c748](https://github.com/ovh/design-system/commit/9f6c748798bb9021764cc8900e8ee56e48400c81))
* **theme:** expose variable font file & normalizer ([10c56cf](https://github.com/ovh/design-system/commit/10c56cfa2da49e473dd78b967513ba7fbe7b7d26))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.1.0](https://ovh.github.io/design-system/v19.1.0/?path=/docs/design-system-changelog--page) (2025-08-08)
[compare](https://github.com/ovh/design-system/compare/v19.0.1...v19.1.0)

### Bug Fixes

* **combobox:** focus input on form field click ([cd83dab](https://github.com/ovh/design-system/commit/cd83dab2905cfc2d72d2b09e942408ecaf70c08d))
* **i18n:** move i18n to root components & normalize contexts ([5bf41ab](https://github.com/ovh/design-system/commit/5bf41abad9bb0ac9909a01f74561f17cada84950))


### Features

* **combobox:** add customRendererData generic prop to items ([6cac4b5](https://github.com/ovh/design-system/commit/6cac4b554d4c02eeaf63a88d01e6fa8ffa5501f2))
* **inputs:** add i18n prop to override Input accessibility translations ([9d71c4a](https://github.com/ovh/design-system/commit/9d71c4af451ef8dca805b6392f65517013b57228))
* **ods-react:** add data-ods attribute on exposed components ([ecb5905](https://github.com/ovh/design-system/commit/ecb5905e9ffe0081c627c595f000bc5f813de86b))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.1](https://ovh.github.io/design-system/v19.0.1/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v19.0.0...v19.0.1)

**Note:** Version bump only for package @ovhcloud/ods-react-combobox







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.0.0](https://ovh.github.io/design-system/v19.0.0/?path=/docs/design-system-changelog--page) (2025-06-30)
[compare](https://github.com/ovh/design-system/compare/v18.6.3...v19.0.0)

### Bug Fixes

* **combobox:** enforce input height ([92e38bd](https://github.com/ovh/design-system/commit/92e38bdb8887b8801d04bc23637c1a45c327b28c))
* **combobox:** force combobox clear on input clear ([a80a0a1](https://github.com/ovh/design-system/commit/a80a0a1fe1ad8351bbbe07882ccc186138b91eea))
* **combobox:** prevent current value to be filterer when deleted on input ([15d50eb](https://github.com/ovh/design-system/commit/15d50eb2d2c2366e22b3a9b8099519de41cda0fe))


### Features

* **combobox:** add styles for disabled and read-only states ([a8d6859](https://github.com/ovh/design-system/commit/a8d6859f1fb4a89963cf3d3bbabd773337cc4a2b))
* **combobox:** add support for invalid state and improve control styling ([d865629](https://github.com/ovh/design-system/commit/d8656292b11e6738f127fa9f484e6d16eaf04e0d))
* **combobox:** implement component ([d6c94cf](https://github.com/ovh/design-system/commit/d6c94cfb8456e158f8f37d5df0d9abde57ec2d06))
* **combobox:** implement multiple ([bcb72b3](https://github.com/ovh/design-system/commit/bcb72b360532b7cefa7253aab4d80cac266e4240))
