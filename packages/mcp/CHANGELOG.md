# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.



[Latest version](https://ovh.github.io/design-system/latest/?path=/docs/ovhcloud-design-system-what-s-new-changelog--docs)


# [20.0.0-alpha.0](https://ovh.github.io/design-system/v20.0.0-alpha.0/guides/changelog) (2026-11-05)
[compare](https://github.com/ovh/design-system/compare/v19.7.3...v20.0.0-alpha.0)

### Bug Fixes

* **mcp:** address review feedback ([4e04a60](https://github.com/ovh/design-system/commit/4e04a607e112b24d59fbee2e5bf9ff120d24a13a))
* **mcp:** bound the page reads of search_docs and stop caching the failed ones ([a2af279](https://github.com/ovh/design-system/commit/a2af279968fe864682baeaae6f6320a317d534c8))
* **mcp:** build the package before its CI tests ([587a4d7](https://github.com/ovh/design-system/commit/587a4d71f7e4da2e8ffcad9bd56ad96f48e6b7ef))
* **mcp:** derive the guide-count check from the docs index ([1ccda1e](https://github.com/ovh/design-system/commit/1ccda1eefffb9de9b4b9af6fbd0c86ff18be29f1))
* **mcp:** document the real source precedence and guard the build ([5fca527](https://github.com/ovh/design-system/commit/5fca527b31f086b79751c78873b8df1170699bb1))
* **mcp:** keep the page reads inside the documentation set ([885df6f](https://github.com/ovh/design-system/commit/885df6f27a1ce789792859e8c2ad64030e574858))
* **mcp:** rank a short slug found inside the query after closer suggestions ([066b05b](https://github.com/ovh/design-system/commit/066b05be62445bef11716544a58f5d459a4c2612))
* **mcp:** reach the camelCase helper names in get_guide ([93d5321](https://github.com/ovh/design-system/commit/93d5321017a92159974f45a70e43415b22d216ce))
* **mcp:** reach the helpers documentation pages, keep local paths out of answers ([cafed46](https://github.com/ovh/design-system/commit/cafed46d81d6603b4b748319a0581e75d667fb8a))
* **mcp:** read the docs of the nearest installed ods-react only ([39ebed1](https://github.com/ovh/design-system/commit/39ebed1bb928869e56b9ef7d70cefaa7e8633828))
* **mcp:** read the resolved values and the references of the v20 tokens ([dbe8e71](https://github.com/ovh/design-system/commit/dbe8e71e8d8532aa0e4fc369149a4ec4a7296fc3))
* **mcp:** rebuild the ods-react llms set the tests read when it is missing or stale ([aa7ad5f](https://github.com/ovh/design-system/commit/aa7ad5f52ef1596f720fbbe22c0ad9243a76993d))
* **mcp:** resolve loose component slugs and suggest fuzzily ([2227c25](https://github.com/ovh/design-system/commit/2227c250d2bae0001d84417196de01e4c27b9a12))
* **mcp:** say that a failed page read is retried on the next call ([4d2373e](https://github.com/ovh/design-system/commit/4d2373e8a225d18f3de0ceb9730ef443eae9b6d0))
* **mcp:** say why a pinned version cannot load its index ([47ff00c](https://github.com/ovh/design-system/commit/47ff00c5d8a2313cc8cb6f3edf6d2edb13eebfda))


### Features

* **mcp:** expose the ODS documentation to AI assistants over MCP ([171cc5d](https://github.com/ovh/design-system/commit/171cc5de0f93223a2c8125020dbb7c9559256788))
* **themes:** ship each theme mode as one standalone stylesheet ([2741442](https://github.com/ovh/design-system/commit/2741442eae0d6bff0fb926efc00e2a67959fedd7))


### BREAKING CHANGES

* **themes:** the @ovhcloud/ods-themes/default export (the theme with its
fonts inlined as base64) is removed: load default/css with default/fonts or
./fonts-base64. The built files and the Sass sources moved in the package.
The JavaScript entry point (ODS_THEME, ODS_THEMES) is removed. See BC-31,
BC-32 and BC-33.
