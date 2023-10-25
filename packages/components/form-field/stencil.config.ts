import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

import jestConfig from './jest.config';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-form-field',
  excludeComponents: ['osds-text'],
  jestConfig,
  namespace: 'osds-form-field',
});
