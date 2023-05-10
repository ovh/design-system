import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = {
  ...getStencilConfig({
    namespace: 'osds-quantity',
    args,
    jestConfig: jestConfig.default,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/quantity',
      // exclude peer dependencies that corresponds to www usage
      excludeComponents: ['osds-input', 'osds-button']
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/quantity',
      excludeComponents: ['osds-input', 'osds-button']
    },
    dev: {
      globalScript: 'src/global.dev.ts',
    },
    prod: {
      globalScript: 'src/global.prod.ts'
    },
    test: {
      globalScript: 'src/global.test.ts',
    }
  })
};
