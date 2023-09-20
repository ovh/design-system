import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';
import jestConfig from './jest.config';

export const config: Config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-pagination',
  excludeComponents: ['osds-icon', 'osds-button', 'osds-select', 'osds-text', 'osds-tootip'],
  jestConfig,
  namespace: 'osds-pagination',
});
