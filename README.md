# OVHcloud Design System

# A collection of assets and guidelines for building consistent user experiences across OVHcloud products.

![githubbanner](./assets/githubbanner.png)

### Getting Started

Please read `getting-started` guide into `packages/contributing/contributing-getting-started`
to start using `ODS.

# Requirements
* [Node.js](https://nodejs.org/en/) with version ">= 14.15 && < 16"
* [Yarn](https://yarnpkg.com/) with version ">= 2"

# Installation
Clone and install `ods` by using yarn.
```
git clone https://github.com/ovh/design-system.git
cd design-system
yarn
```

# Develop
After preparing this repository, you can launch the Storybook UI containing all built components with:
```
yarn build:prod && yarn doc && yarn start
```
Then choose the right component in the list if you want to edit it (if not, just choose whatever you want)
## Hot reload
Once you have `yarn start`-ed the project, you can edit the component with an automatic browser refresh as a result.

## Contribute
You've developed a new cool feature ? Fixed an annoying bug ? We'd be happy to hear from you !

Have a look in [CONTRIBUTING.md](https://github.com/ovh/design-system/blob/master/CONTRIBUTING.md) 😃

## Migration
Please read [MIGRATION.md](https://github.com/ovh/design-system/blob/master/MIGRATION.md) to help you to manage the migration guides between each version of ODS.

## Run the tests
Tests are individually created for each UI component, but every test can be launch globally.

### Scripts
We created multiple test suites to test the different aspects of each UI component :
* All testing : `yarn test`
* Unit testing : `yarn test:spec`
* E2E testing : `yarn test:e2e`
* Screenshot testing : `yarn test:e2e:screenshot`

All testing scripts are also available with a `ci` alternative (i.e, `yarn test:ci:screenshot`.

### Global testing
They are shortcuts that will test all components in the root directory. You can launch them with the previous described scripts.

### Single component testing
You can also test a single component.

For instance, for the Button Stencil component, you can browse to it and launch what command you want:
```
cd packages/stencil/components/button
yarn test:e2e:screenshot
```

# Related links
* Contribute: [https://github.com/ovh/design-system/blob/master/CONTRIBUTING.md](https://github.com/ovh/design-system/blob/master/CONTRIBUTING.md)
* Migrate from one version to another: [https://github.com/ovh/design-system/blob/master/MIGRATION.md](https://github.com/ovh/design-system/blob/master/MIGRATION.md)
* Troubleshoot dev issues: [https://github.com/ovh/design-system/blob/master/TROUBLESHOOTING.md](https://github.com/ovh/design-system/blob/master/TROUBLESHOOTING.md)
* Report bugs: [https://github.com/ovh/design-system/issues](https://github.com/ovh/design-system/issues)
* Get latest version: [https://github.com/ovh/ods](https://github.com/ovh/ods)

# License
Copyright 2022 OVH SAS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
