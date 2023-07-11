import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-search-bar',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/search-bar',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: ['osds-icon', 'osds-button', 'osds-select', 'osds-input']
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/search-bar',
    excludeComponents: ['osds-icon', 'osds-button', 'osds-select', 'osds-input']
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
