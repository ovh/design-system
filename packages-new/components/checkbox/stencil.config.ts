import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import * as jestConfig from './jest.config';

const args = process.argv.slice(2);

const config = getStencilConfig({
  namespace: 'osds-checkbox',
  args,
  jestConfig: jestConfig.default,
  reactOutput: {
    componentCorePackage: '@ovhcloud/ods-component-checkbox',
    // exclude peer dependencies that corresponds to www usage
    excludeComponents: []
  },
  vueOutput: {
    componentCorePackage: '@ovhcloud/ods-component-checkbox',
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
});

export { config };
