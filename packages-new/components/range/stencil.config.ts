import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = {
  ...getStencilConfig({
    namespace: 'osds-range',
    args,
    jestConfig: jestConfig.default,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-component-range',
      // exclude peer dependencies that corresponds to www usage
      excludeComponents: []
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-component-range',
      excludeComponents: []
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
