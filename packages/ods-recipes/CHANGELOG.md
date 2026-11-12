# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0](https://ovh.github.io/design-system/v20.0.0/guides/changelog) (2026-11-12)
[compare](https://github.com/ovh/design-system/compare/v20.0.0-alpha.0...v20.0.0)

### Bug Fixes

* **recipes:** name the fields and icon buttons of six recipes ([984a790](https://github.com/ovh/design-system/commit/984a79020943ff824d9ba00f82e35cafd4c980d2))
* **recipes:** pass the range input labels through a constant ([89330bc](https://github.com/ovh/design-system/commit/89330bcd314cc8ae621adedc94db877897e3d545))
* **themes:** type the stylesheet exports for TypeScript 6 ([f64ab0a](https://github.com/ovh/design-system/commit/f64ab0aa46d5341ae1f9c12283a74f7a346c9963))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* correct html list semantics on safari ([f916a62](https://github.com/ovh/design-system/commit/f916a62078d810dafa9b32732e0b72303b706fad))
* **recipes:** give the feature list tooltip icons an accessible name ([c91504a](https://github.com/ovh/design-system/commit/c91504a8386db577a7c5d399c9af919272c5e414))
* **recipes:** keep the button role of the feature list tooltip triggers ([db6c190](https://github.com/ovh/design-system/commit/db6c190d1d1c6771eae154cef561ee0627c4a09c))
* **recipes:** prevent build fail if empty directories remains in src/components ([af85ef7](https://github.com/ovh/design-system/commit/af85ef747cd7ff04596a0d99bd0b81986dbb0e3e))


### Features

* **badge:** add the status prop and deprecate color ([d6675ac](https://github.com/ovh/design-system/commit/d6675ace857d247ac55a9970cf8d299c5c057709))
* **button:** add the status prop and deprecate color ([bdac21d](https://github.com/ovh/design-system/commit/bdac21dd75798b86e5b33bac2d1edf251a1fb310))
* **button:** replace the variant prop with emphasis ([aac761b](https://github.com/ovh/design-system/commit/aac761b7453609a944e77c52d8c09ffafa71ffaa))
* **card:** add the status prop and deprecate color ([8e3ec26](https://github.com/ovh/design-system/commit/8e3ec26b00e0a998a6b099645d13b46acb7d5089))
* **core:** bump minor dependencies ([c1018d6](https://github.com/ovh/design-system/commit/c1018d62d72f06faa1e30aaed5d940bd938ec4d8))
* **form-fields:** give every form field the same default width ([5479021](https://github.com/ovh/design-system/commit/547902197c8b9b6cbca5331f17a6017a8668ca5d))
* **message:** add the status prop and deprecate color ([5144b3c](https://github.com/ovh/design-system/commit/5144b3cf38c37ba1c7024789b9825deea94af72a))
* **modal:** deprecate the color prop of ModalContent until v21 ([e125c38](https://github.com/ovh/design-system/commit/e125c3874600247aaa2fa1914e4c5e865bc179ef))
* **ods-react:** remove the APIs deprecated in v19 ([632fc69](https://github.com/ovh/design-system/commit/632fc692bef89a4b5adaeaea5717f88ffcf20891))
* **recipes:** show the Database feature list in Feature List and Feature List Product Card ([cd7c04d](https://github.com/ovh/design-system/commit/cd7c04d62b5c8ce92328a43a705af1d0b08a8f7a))
* **storybook:** move recipes from technical-information to examples page across all components, update generator templates, and fix chat recipe scrolling the whole page ([9580e6f](https://github.com/ovh/design-system/commit/9580e6f5d0e7cc89e882611a9d0e68770521ea22))
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

* declare phantom @ovhcloud/ods-react deps and pin @types/react (phase 6) ([69f19f1](https://github.com/ovh/design-system/commit/69f19f1ac277b1e256a158547454451bc3cce5ee))


### Features

* **chore:** delete npmrc and fix docs ([97e8f47](https://github.com/ovh/design-system/commit/97e8f47cdc2097f045e6dd963c3247a015360571))
* **chore:** fix storybook builds ([1f4c9f6](https://github.com/ovh/design-system/commit/1f4c9f636791d8c5b3b4ebcd2246164166af9f91))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.2](https://ovh.github.io/design-system/v19.7.2/?path=/docs/design-system-changelog--page) (2026-06-11)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.2)

### Bug Fixes

* declare phantom @ovhcloud/ods-react deps and pin @types/react (phase 6) ([69f19f1](https://github.com/ovh/design-system/commit/69f19f1ac277b1e256a158547454451bc3cce5ee))


### Features

* **chore:** delete npmrc and fix docs ([97e8f47](https://github.com/ovh/design-system/commit/97e8f47cdc2097f045e6dd963c3247a015360571))
* **chore:** fix storybook builds ([1f4c9f6](https://github.com/ovh/design-system/commit/1f4c9f636791d8c5b3b4ebcd2246164166af9f91))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.1](https://ovh.github.io/design-system/v19.7.1/?path=/docs/design-system-changelog--page) (2026-05-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.0...v19.7.1)

**Note:** Version bump only for package @ovhcloud/ods-recipes





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0](https://ovh.github.io/design-system/v19.7.0/?path=/docs/design-system-changelog--page) (2026-04-28)
[compare](https://github.com/ovh/design-system/compare/v19.7.0-alpha.0...v19.7.0)

**Note:** Version bump only for package @ovhcloud/ods-recipes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.7.0-alpha.0](https://ovh.github.io/design-system/v19.7.0-alpha.0/?path=/docs/design-system-changelog--page) (2026-03-30)
[compare](https://github.com/ovh/design-system/compare/v19.6.1...v19.7.0-alpha.0)

### Features

* **dataTable:** implement component ([9711cc4](https://github.com/ovh/design-system/commit/9711cc4cf965dab1663a6e2775b17891e4974178))
* **doc:** add DataTable functional documentation ([4a1e880](https://github.com/ovh/design-system/commit/4a1e880e47d58fd27045edd4238f29d299f4ecb8))
* **docs:** update theme, version selector and recipes from using popover to menu ([5f8b30b](https://github.com/ovh/design-system/commit/5f8b30b2d59d2f9e1f48622859b144d7fa2a9855))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.1](https://ovh.github.io/design-system/v19.6.1/?path=/docs/design-system-changelog--page) (2026-03-04)
[compare](https://github.com/ovh/design-system/compare/v19.6.0...v19.6.1)

**Note:** Version bump only for package @ovhcloud/ods-recipes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.6.0](https://ovh.github.io/design-system/v19.6.0/?path=/docs/design-system-changelog--page) (2026-02-27)
[compare](https://github.com/ovh/design-system/compare/v19.5.0...v19.6.0)

### Bug Fixes

* **recipe:** align dashboard-card actions ([2449ec2](https://github.com/ovh/design-system/commit/2449ec250e4758bf57a8770db33466035b64f375))


### Features

* **recipes:** add tailwind implementation on DashboardCard ([2e78675](https://github.com/ovh/design-system/commit/2e78675ef02b9cfa11cc2b71c701d5f7636d3d51))
* **recipes:** implement DashboardCard ([9a9d133](https://github.com/ovh/design-system/commit/9a9d13356585db79aca8238a2dc8fd410e55d375))





[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.5.0](https://ovh.github.io/design-system/v19.5.0/?path=/docs/design-system-changelog--page) (2026-01-30)
[compare](https://github.com/ovh/design-system/compare/v19.4.1...v19.5.0)

### Bug Fixes

* **config-tile:** move from media query to container query ([59f4380](https://github.com/ovh/design-system/commit/59f4380dcf13921dd9ce4d54cc376aee4f29de0c))
* **recipes:** update feature-list, order-button and product-card ([38a67d1](https://github.com/ovh/design-system/commit/38a67d1f3a8bf56a50c4e5effb44815a23030344))


### Features

* **config-tile:** add selected state ([fd92c53](https://github.com/ovh/design-system/commit/fd92c53157a12043089a372f620f4d1e076c8e6d))
* **email-field:** add sublabel support to form field label ([035113e](https://github.com/ovh/design-system/commit/035113ec2b70ef65aa005ab7e9310dc96a2fdada))
* **modal:** add ModalHeader component to documentation ([c7cb6d4](https://github.com/ovh/design-system/commit/c7cb6d4eb5e696889edf83bee7b713744c12c30b))
* **modal:** expose modal header & deprecate color variants ([50e942e](https://github.com/ovh/design-system/commit/50e942e0036a4c80232993038a7ef1dce9e8da78))
* **recipes:** implement ConfigTile ([a8a6e80](https://github.com/ovh/design-system/commit/a8a6e802f93a0208c1b53d9d833e627965398a08))
* **recipes:** implement FeatureListProductCard ([c294329](https://github.com/ovh/design-system/commit/c294329531b404227fdbdb169916f793f1aee54d))



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.1](https://ovh.github.io/design-system/v19.4.1/?path=/docs/design-system-changelog--page) (2026-01-14)
[compare](https://github.com/ovh/design-system/compare/v19.4.0...v19.4.1)

**Note:** Version bump only for package @ovhcloud/ods-recipes







[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/design-system-changelog--page)


# [19.4.0](https://ovh.github.io/design-system/v19.4.0/?path=/docs/design-system-changelog--page) (2025-12-31)
[compare](https://github.com/ovh/design-system/compare/v19.3.0...v19.4.0)

### Bug Fixes

* **media-product-card:** set card to neutral ([d1eeae2](https://github.com/ovh/design-system/commit/d1eeae2b8833b7833a2ce50f9410f90e3846d53e))


### Features

* **doc:** update recipe doc ([5c5916f](https://github.com/ovh/design-system/commit/5c5916fbc9a16d1dea59fcb7466c1c9fe5539a2b))
* **ods-recipes:** add tags & types ([2221942](https://github.com/ovh/design-system/commit/222194229a16f227693a4621b94e419ae6a96ef6))
* **ods-recipes:** implement project ([dd7596a](https://github.com/ovh/design-system/commit/dd7596af99c354a25c0d5f15e9309bbf6ee8b6db))
* **order-button:** add transition ([ad0d21a](https://github.com/ovh/design-system/commit/ad0d21a33f1a38577f1246e044d5374c6f4baf98))
* **recipes:** add odsComponents list to json data ([922383e](https://github.com/ovh/design-system/commit/922383edd42dad94f2cbd5eeaa3bb2e96e744e92))
* **recipes:** add readme to each recipe ([ac5bd4d](https://github.com/ovh/design-system/commit/ac5bd4d3d3f0dd73257e2760c173d405da29e9cd))
* **recipes:** add some tailwind implementations & update structure ([2278755](https://github.com/ovh/design-system/commit/2278755578d0e7bbd656b0b5e73f77f158afc21c))
* **recipes:** implement EmailField ([5c7e857](https://github.com/ovh/design-system/commit/5c7e857a6f425c2c1216aea17520b5c3a8ea44e4))
* **recipes:** implement FeatureList ([fa96d5d](https://github.com/ovh/design-system/commit/fa96d5d723145a412230e6432af5cd99113d7623))
* **recipes:** implement MediaProductCard ([98d3e31](https://github.com/ovh/design-system/commit/98d3e3146833e5d8df2dfa94877be9bcf385b62a))
* **recipes:** implement OrderButton ([eb31922](https://github.com/ovh/design-system/commit/eb319221e1c0f90f38bf403e4bba0329e89aa184))
* **recipes:** implement Price ([9eac03f](https://github.com/ovh/design-system/commit/9eac03fe1430eacd5c5b205d3f121ef202a834f1))
* **recipes:** implement RangeInput ([afeb195](https://github.com/ovh/design-system/commit/afeb195100cf2dba529186d86182279f67426e12))
* **recipes:** implement StatusMessage ([e20645d](https://github.com/ovh/design-system/commit/e20645def7029b3014638c8cee2d7b8d6e862b45))
* **recipes:** implement StatusModal ([801d3ef](https://github.com/ovh/design-system/commit/801d3efa8095879996a7978538e74dbcd9be7e8c))
* **recipes:** update README with contibution information ([65bbe18](https://github.com/ovh/design-system/commit/65bbe1834c2331dd84244d8342eab5c93957e35e))
* **scripts:** add recipe generator CLI & add tailwind integration to ods-recipes ([0272cf1](https://github.com/ovh/design-system/commit/0272cf12bc374ecdcba8f7dfcf267b8c53fefa9c))
