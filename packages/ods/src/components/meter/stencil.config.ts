import { getStencilConfig } from '../../config/stencil';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-meter',
  namespace: 'ods-meter',
});
