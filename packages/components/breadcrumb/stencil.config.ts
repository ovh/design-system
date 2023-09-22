import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import jestConfig from './jest.config';

console.log(getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-breadcrumb',
  excludeComponents: ['osds-icon', 'osds-link', 'osds-text'],
  jestConfig,
  namespace: 'osds-breadcrumb',
}))

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-breadcrumb',
  excludeComponents: ['osds-icon', 'osds-link', 'osds-text'],
  jestConfig,
  namespace: 'osds-breadcrumb',
});
