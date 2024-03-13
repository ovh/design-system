import { getStencilConfig } from '../../config/stencil';

const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-text',
  namespace: 'ods-text',
});

export {
  config,
};
