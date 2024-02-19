import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-components',
  jestConfig: {},
  namespace: 'osds-components',
  tsconfig: 'tsconfig.components.prod.json',
});
