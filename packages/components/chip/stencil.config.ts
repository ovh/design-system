import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import jestConfig from './jest.config';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-chip',
  excludeComponents: ['osds-icon'],
  jestConfig,
  namespace: 'osds-chip',
});
