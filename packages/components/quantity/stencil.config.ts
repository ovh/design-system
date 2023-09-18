import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = {
  ...getStencilConfig({
    namespace: 'osds-quantity',
    args,
    jestConfig: jestConfig.default,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-component-quantity',
      excludeComponents: ['osds-button', 'osds-icon', 'osds-input', 'osds-text']
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-component-quantity',
      excludeComponents: ['osds-button', 'osds-icon', 'osds-input', 'osds-text']
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
