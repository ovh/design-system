import * as jestConfig from './jest.config';
import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';

const args = process.argv.slice(2);

export const config: Config = {
  ...getStencilConfig({
    namespace: 'osds-accordion',
    args,
    jestConfig: jestConfig.default,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/accordion',
      // exclude peer dependencies that corresponds to www usage
      excludeComponents: ['osds-icon', 'osds-text']
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-stencil/components/accordion',
      excludeComponents: ['osds-icon', 'osds-text']
    },
    dev: {
      globalScript: 'src/global.dev.ts',
    },
    prod: {
      globalScript: 'src/global.prod.ts'
    }
  })
};
