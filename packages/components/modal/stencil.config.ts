import * as jestConfig from './jest.config';

import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-modal',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-component-modal',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: [
      'osds-icon',
      'osds-text',
      'osds-button',
    ]
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-component-modal',
    excludeComponents: [
      'osds-icon',
      'osds-text',
      'osds-button',
    ]
  },
  dev: {
    globalScript: 'src/global.dev.ts',
  },
  prod: {
    globalScript: 'src/global.prod.ts'
  },
  test: {
    globalScript: 'src/global.test.ts'
  }
});
