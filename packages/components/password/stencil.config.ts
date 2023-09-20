import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import jestConfig from './jest.config';

export const config: Config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-password',
  excludeComponents: ['osds-icon', 'osds-input', 'osds-spinner', 'osds-text'],
  jestConfig,
  namespace: 'osds-password',
});
