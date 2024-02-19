<p align="center">
  <a href="https://ovh.github.io/design-system/latest/">
    <img src="./assets/githubbanner.png">
  </a>
</p>
<div align="center">

### A collection of assets and guidelines for building consistent user experiences across OVHcloud products.

[![NPM version][npm-image]][npm-url] [![CI status][github-action-image]][github-action-url] [![NPM downloads][download-image]][download-url] [![Licence][licence-image]][licence-url] 

[![StencilJS][stenciljs-image]][stenciljs-url] [![TypeScript][typescript-image]][typescript-url] [![Sass][sass-image]][sass-url] [![Storybook][storybook-image]][storybook-url] [![Jest][jest-image]][jest-url] [![Puppeteer][puppeteer-image]][puppeteer-url]

[npm-image]: https://img.shields.io/npm/v/@ovhcloud/ods-core
[npm-url]: https://www.npmjs.com/package/@ovhcloud/ods-core        
[github-action-image]: https://github.com/ovh/design-system/actions/workflows/ci.yml/badge.svg
[github-action-url]: https://github.com/ovh/design-system/actions/workflows/ci.yml
[download-image]: https://img.shields.io/npm/dm/@ovhcloud/ods-core.svg?style=flat
[download-url]: https://www.npmjs.com/package/@ovhcloud/ods-core
[licence-image]: https://img.shields.io/github/license/ovh/design-system
[licence-url]: LICENSE.md
[stenciljs-image]: https://img.shields.io/badge/-StencilJS-000?logo=webcomponents.org&logoColor=white
[stenciljs-url]: https://stenciljs.com/
[typescript-image]: https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white
[typescript-url]: https://stenciljs.com/
[sass-image]: https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white
[sass-url]: https://sass-lang.com/
[storybook-image]: https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg
[storybook-url]: https://storybook.js.org/
[jest-image]: https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white
[jest-url]: https://jestjs.io/fr/
[puppeteer-image]: https://img.shields.io/badge/-Puppeteer-40B5A4?logo=puppeteer&logoColor=white
[puppeteer-url]: https://pptr.dev/

</div>

## Quick links
* [**Storybook (current version)**](https://ovh.github.io/design-system/latest/)
* [**All ODS versions**](https://ovh.github.io/design-system/)
* [**What's new**](https://ovh.github.io/design-system/latest/?path=/story/ovhcloud-design-system-what-s-new-what-s-new--page)
* [**Changelog**](https://ovh.github.io/design-system/latest/?path=/story/ovhcloud-design-system-what-s-new-changelog--page)
* [**Global Documentation 🔗**](https://zeroheight.com/6fc8a63f7/p/533db0-ovhcloud-design-system)

### Requirements (only for contributing)
* [**Node.js**](https://nodejs.org/en/) with version ">= 18.17"
* [**Yarn**](https://yarnpkg.com/) with version ">= 2.4"

## Installation
All the OVHcloud Design System packages are available on [**NPM**](https://www.npmjs.com/).

```sh
yarn add @ovhcloud/ods-components @ovhcloud/ods-theme-blue-jeans
```
or
```sh
npm install --save @ovhcloud/ods-components @ovhcloud/ods-theme-blue-jeans
```

## Usage
To start using ODS, you'll need to import the components.

Add a dependency to either:
* `@ovhcloud/ods-components` to import all components
* `@ovhcloud/ods-components-<component>` to import a specific component

Components can be imported using one of:
```typescript
import { Osds<Component> } from '@ovhcloud/ods-component-<component>'
import { Osds<Component> } from '@ovhcloud/ods-component-<component>/react'
import { Osds<Component> } from '@ovhcloud/ods-component-<component>/vue'
```

You can import enums directly from the component:
```typescript
import { ODS_%COMPONENT%_SIZE, ODS_%COMPONENT%_SIZES } from '@ovhcloud/ods-component-<component>'
```

Same goes for interfaces:
```typescript
import type { Ods<Component>Attribute } from '@ovhcloud/ods-component-<component>'
```

Then, in your view, you can start using ODS components. For instance:
```html
<osds-button>
  My Button
</osds-button>
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
