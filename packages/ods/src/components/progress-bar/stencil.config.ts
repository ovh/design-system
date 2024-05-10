import { getStencilConfig } from '../../config/stencil';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-progress-bar',
  namespace: 'ods-progress-bar',
});
