import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import jestConfig from './jest.config';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-select',
  devScript: 'src/dev.ts',
  excludeComponents: ['osds-icon'],
  jestConfig,
  namespace: 'osds-select',
});
