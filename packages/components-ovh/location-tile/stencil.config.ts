import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

import jestConfig from './jest.config';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-ovh-component-location-tile',
  excludeComponents: [],
  jestConfig,
  namespace: 'osds-ovh-location-tile',
});
