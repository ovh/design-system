<p align="center">
  <a href="https://ovh.github.io/design-system/latest/">
    <img src="./assets/githubbanner.png">
  </a>
</p>
<div align="center">

### A collection of assets and guidelines for building consistent user experiences across OVHCloud products.

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![Licence][licence-image]][licence-url] 

[![StencilJS][stenciljs-image]][stenciljs-url] [![TypeScript][typescript-image]][typescript-url] [![Sass][sass-image]][sass-url] [![Storybook][storybook-image]][storybook-url] [![Jest][jest-image]][jest-url] [![Puppeteer][puppeteer-image]][puppeteer-url]

[npm-image]: https://www.npmjs.com/package/@ovhcloud/ods-components
[npm-url]: https://www.npmjs.com/package/@ovhcloud/ods-components
[download-image]: https://img.shields.io/npm/dm/@ovhcloud/ods-core.svg?style=flat
[download-url]: https://www.npmjs.com/package/@ovhcloud/ods-core
[licence-image]: https://img.shields.io/github/license/ovh/design-system
[licence-url]: LICENSE.md
[stenciljs-image]: https://img.shields.io/badge/-StencilJS-000?logo=webcomponents.org&logoColor=white
[stenciljs-url]: https://stenciljs.com/
[typescript-image]: https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[sass-image]: https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
[storybook-image]: https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg
[storybook-url]: https://storybook.js.org/
[jest-image]: https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[puppeteer-image]: https://img.shields.io/badge/-Puppeteer-40B5A4?logo=puppeteer&logoColor=white
[puppeteer-url]: https://pptr.dev/

</div>

## Quick links

* [**Storybook**](https://ovh.github.io/design-system/latest/)
* [**What's new**](https://ovh.github.io/design-system/latest/?path=/story/ovhcloud-design-system-what-s-new-what-s-new--page)
* [**Changelog**](https://ovh.github.io/design-system/latest/?path=/story/ovhcloud-design-system-what-s-new-changelog--page)

### Requirements (only for contributing)

* [**Node.js**](https://nodejs.org/en/) with version ">= 18.17"
* [**Yarn**](https://yarnpkg.com/) with version ">= 2.4"

## Installation

All the OVHCloud Design System packages are available on [**NPM**](https://www.npmjs.com/).

```sh
yarn add @ovhcloud/ods-components @ovhcloud/ods-themes
```
or
```sh
npm install --save @ovhcloud/ods-components @ovhcloud/ods-themes
```

## Usage

Components can be imported using one of:
```typescript
import { Ods<Component> } from '@ovhcloud/ods-components>'
import { Ods<Component> } from '@ovhcloud/ods-components/react'
import { Ods<Component> } from '@ovhcloud/ods-components/vue'
```

Then, in your view, you can start using ODS components. For instance:
```html
<ods-button label="My Button">
</ods-button>
```

For more detail, see our global [Get Started](https://ovh.github.io/design-system/latest/?path=/story/ovhcloud-design-system-get-started--page) guide

## Contribute
You've developed a new cool feature? Fixed an annoying bug? We'd be happy to hear from you!

Please read [Get Started](https://ovh.github.io/design-system/latest/?path=/story/contributing-get-started--page) guide for contributing and [CONTRIBUTING.md](https://github.com/ovh/design-system/blob/master/CONTRIBUTING.md) 😃

## Migration
Please read [Migration pages](https://ovh.github.io/design-system/latest/?path=/story/ovhcloud-design-system-what-s-new-migration-guide-12-x-to-13-x--page) to help you to manage the migration guides between each version of ODS.

# Related links
* Contribute: [https://github.com/ovh/design-system/blob/master/CONTRIBUTING.md](https://github.com/ovh/design-system/blob/master/CONTRIBUTING.md)
* Migrate from one version to another: [https://github.com/ovh/design-system/blob/master/MIGRATION.md](https://github.com/ovh/design-system/blob/master/MIGRATION.md)
* Troubleshoot dev issues: [https://github.com/ovh/design-system/blob/master/TROUBLESHOOTING.md](https://github.com/ovh/design-system/blob/master/TROUBLESHOOTING.md)
* Report bugs: [https://github.com/ovh/design-system/issues](https://github.com/ovh/design-system/issues)
* Get latest version: [https://github.com/ovh/ods](https://github.com/ovh/ods)

# License
Copyright 2023 OVH SAS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
