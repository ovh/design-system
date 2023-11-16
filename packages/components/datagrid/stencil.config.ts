import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

import jestConfig from './jest.config';


export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-datagrid',
  excludeComponents: ['osds-icon', 'osds-text', 'osds-button', 'osds-checkbox', 'osds-checkbox-button', 'osds-popover'],
  jestConfig,
  namespace: 'osds-datagrid',
});
