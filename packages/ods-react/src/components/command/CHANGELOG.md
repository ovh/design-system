# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0](https://ovh.github.io/design-system/v20.0.0/guides/changelog) (2026-11-12)
[compare](/compare/v20.0.0-alpha.0...v20.0.0)

**Note:** Version bump only for package @ovhcloud/ods-react-command







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* amend ci tests ([d261919](https://github.com/ovh/design-system/commit/d261919cb5e8f12ca41926ac1e7db232c9e9c5d1))
* **combobox, command, query-filter:** skip the option scroll on pointer highlights ([39a14f3](https://github.com/ovh/design-system/commit/39a14f335fd9e03bfcfe9a311a48a58f0d99bfc8))
* **command:** align trigger typing with the modal trigger for TypeScript 6 ([5183610](https://github.com/ovh/design-system/commit/5183610c074695c263d290496165def42e74cb6a))
* **command:** APGfixes ([35dc20c](https://github.com/ovh/design-system/commit/35dc20ca188a8ff95e0094b7bf777faa6046109b))
* **command:** e2e ([c941b57](https://github.com/ovh/design-system/commit/c941b57fd35a6ac0032582e718375c45df741cd8))
* **command:** handle reviews ([7e7fcc1](https://github.com/ovh/design-system/commit/7e7fcc120bfe3169bc095aa2664d4918d59f3486))
* **command:** order the icon import and stop asserting the highlight mid-render ([7d4eeb3](https://github.com/ovh/design-system/commit/7d4eeb35cb0a88140c2fc447721c0cd8f32d1b77))
* **command:** review returns ([a77a664](https://github.com/ovh/design-system/commit/a77a66406962da044831c23da8ab4a50985da2f6))
* **core:** adapt command component and dev stories to the upgraded toolchain ([5b6ac4c](https://github.com/ovh/design-system/commit/5b6ac4cb7c9dcf61a987db80644e9a242ba383c5))


### Features

* command component ([9154337](https://github.com/ovh/design-system/commit/9154337edae139773a32d225c8ce293551e24668))
* **command:** pnpm adaptations ([38ae58d](https://github.com/ovh/design-system/commit/38ae58d487c7a718b83cd3c54f378b3640fc1a2c))
* **docs:** neutral-format React 19 migration guide, versions list as a build prereq ([058d815](https://github.com/ovh/design-system/commit/058d815eaea5edc1f5eb2730440af8f689c5ce7e))
* **input:** add startContent and endContent adornments ([8fe37af](https://github.com/ovh/design-system/commit/8fe37af10f9890af32941c2b1ad9e67a5f27a2ad))
* **Input:** review returns ([5c29f6f](https://github.com/ovh/design-system/commit/5c29f6f9fdf3babd278310b82aacb106dfeaafec))
* **modal:** deprecate the color prop of ModalContent until v21 ([e125c38](https://github.com/ovh/design-system/commit/e125c3874600247aaa2fa1914e4c5e865bc179ef))
* **ods-react:** remove the deprecated color props ([3e48600](https://github.com/ovh/design-system/commit/3e48600d51ef8dae03376fca08a40cffb4fc6859))
* **themes, ods-react:** add the aluminium dark theme and rewire components for it ([4fae554](https://github.com/ovh/design-system/commit/4fae5541a17e876a16cf9984a52024792178ae23))
* **themes:** replace the token surface with a semantic layer ([e81f8b8](https://github.com/ovh/design-system/commit/e81f8b827710c857c54205b659c514edacdbcd97)), closes [#1146](https://github.com/ovh/design-system/issues/1146)


### BREAKING CHANGES

* **themes, ods-react:** the Badge status custom properties paint the medium
emphasis, the tint moving to the -high names; the Badge and Message high
emphases get a border; the Query Filter tags are accent; the Link hover
keeps its rest color and reads --ods-link-text-color-hover; the v19
--ods-theme-input-text-color-checked migrates to
--ods-semantic-color-content-on-control-solid.
* **ods-react:** color is removed from Badge, Button, Card, Divider,
Message, ModalContent, Spinner and Tag, with the XXX_COLOR(S) and
XxxColor exports and toast.primary(): use status (primary becomes accent,
brand on Button), role="alertdialog" or --ods-spinner-color.
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
