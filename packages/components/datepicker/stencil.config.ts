import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

import jestConfig from './jest.config';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-datepicker',
  excludeComponents: [
    'osds-icon',
    'osds-input',
    'osds-link',
    'osds-spinner',
    'osds-text',
    'osds-textarea',
    'osds-tooltip',
  ],
  jestConfig,
  namespace: 'osds-datepicker',
});
