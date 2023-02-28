import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = {
  ...getStencilConfig({
    namespace: 'osds-menu',
    args,
    jestConfig: jestConfig.default,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/menu',
      // exclude peer dependencies that corresponds to www usage
      excludeComponents: ['osds-icon']
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/menu',
      excludeComponents: ['osds-icon']
    },
    dev: {
      globalScript: 'src/global.dev.ts',
    },
    prod: {
      globalScript: 'src/global.prod.ts'
    }
  })
};
