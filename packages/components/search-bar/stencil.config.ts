import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import jestConfig from './jest.config';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-search-bar',
  excludeComponents: ['osds-button', 'osds-icon', 'osds-input', 'osds-select', 'osds-spinner', 'osds-text'],
  jestConfig,
  namespace: 'osds-search-bar',
});
