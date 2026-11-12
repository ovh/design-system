# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0](https://ovh.github.io/design-system/v20.0.0/guides/changelog) (2026-11-12)
[compare](https://github.com/ovh/design-system/compare/v20.0.0-alpha.0...v20.0.0)

### Bug Fixes

* **ods-migrate:** anchor the --ods- names built at runtime on the start of the name ([5cee21e](https://github.com/ovh/design-system/commit/5cee21e46e822fc4c435cb1434bcaad86ea88054))
* **ods-migrate:** find the markers of a script in linear time ([8e99845](https://github.com/ovh/design-system/commit/8e998450a2e89f1f3bddd8c2ce55e8d85138818e))
* **ods-migrate:** keep files that are not UTF-8, never write a --read folder ([ac479fc](https://github.com/ovh/design-system/commit/ac479fcd46dc43ff3d59620e14a40f0f3f82c700))
* **ods-migrate:** keep the caller's value on a wrapper, and a byte order mark ([0f4a66b](https://github.com/ovh/design-system/commit/0f4a66bf96ce38bafa3a117ef05ff95fac7c6437))
* **ods-migrate:** keep the v19 theme for the ods 18 components ([192d3cc](https://github.com/ovh/design-system/commit/192d3cc183178427ecdd1d69e45c5d0664b1086b))
* **ods-migrate:** mark every removed theme path, read token roles in the right scope ([b274c63](https://github.com/ovh/design-system/commit/b274c634bca4ceeb9c0d6bca326b57609e275511))
* **ods-migrate:** never put code into the comment before a removed attribute ([80a67b8](https://github.com/ovh/design-system/commit/80a67b88f58cb6ff39adabf6bf830ff4f4395d8f))
* **ods-migrate:** paint the outline of a focused element with the focus role ([c617149](https://github.com/ovh/design-system/commit/c6171491dfb8b3a7967846b7d1c188368d290681))
* **ods-migrate:** read a ring box-shadow as a border ([d79c801](https://github.com/ovh/design-system/commit/d79c80136e852cd53824900edcf393626a405f12))
* **ods-migrate:** rename only the whole font name, leave pnpm overrides to pnpm-workspace.yaml ([b677d40](https://github.com/ovh/design-system/commit/b677d405a284729f48f6a5a97e885b1137d60422))
* **ods-migrate:** warn that a renamed class may override a different look ([d1c7796](https://github.com/ovh/design-system/commit/d1c779697892afccf741ee7cc91fd6970a903061))
* **ods-migrate:** write out the parts of a childless element rendered through a wrapper ([c561e8b](https://github.com/ovh/design-system/commit/c561e8b72551bcf1c07882fb8e3523c863e911a9))
* **ods-migrate:** write package.json edits that install, and finish a run that cannot write ([38d41db](https://github.com/ovh/design-system/commit/38d41db7fa4dcb61229fc5b6afaf9a2695ffbdd0))


### Features

* **ods-migrate:** add the v19 to v20 codemod, lint rules, configurator and coverage harness ([9368079](https://github.com/ovh/design-system/commit/9368079acaec2c0c91d2cd0b795d8b8dc5195fb5))
* **ods-migrate:** follow the values given through a typed component's props type ([b80bfd3](https://github.com/ovh/design-system/commit/b80bfd3902867a056e5d1f507ddd67a95c25c4ef))
* **ods-migrate:** leave alone the files a .odsmigrateignore or --ignore names ([32a6ba4](https://github.com/ovh/design-system/commit/32a6ba4898348cf4ddb517c2788989472555c1af))
* **ods-migrate:** point an app's own palette at the v20 palette ([4c363ff](https://github.com/ovh/design-system/commit/4c363ffde6948dd32892229ffc0add428f1e015a))
* **ods-migrate:** read a component library of another repository without changing it ([6561b36](https://github.com/ovh/design-system/commit/6561b364b2b66804741db39bc431e1c4e5962e8b))
* **ods-migrate:** record a decided place, never join a split declaration in a string ([8d9ef6e](https://github.com/ovh/design-system/commit/8d9ef6ec5529ffcec9f43e6b3353dd135507b67e))
* **ods-migrate:** rewrite the removed Switch to Tabs variant="switch" ([1fbe062](https://github.com/ovh/design-system/commit/1fbe06273dcada8ba62de2c27eccbc495466d119))
* **ods-migrate:** write the values of the removed string enums where the app reads them ([39f3383](https://github.com/ovh/design-system/commit/39f338393371b24b84088f56eb01ed99bf2b2163))
