import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

export const config: Config = getStencilConfig({
  namespace: 'osds-breadcrumb',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/breadcrumb',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: ['osds-link', 'osds-icon', 'osds-button', 'osds-text'],
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-stencil/components/breadcrumb',
    excludeComponents: ['osds-link', 'osds-icon', 'osds-button', 'osds-text'],
  },
  dev: {
    globalScript: 'src/global.dev.ts',
  },
  prod: {
    globalScript: 'src/global.prod.ts',
  },
  test: {
    globalScript: 'src/global.test.ts',
  }
});
