import * as jestConfig from './jest.config';

import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-progress-bar',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-component-progress-bar',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: []
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-component-progress-bar',
    excludeComponents: []
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
