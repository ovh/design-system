import { getStencilConfig } from './src/config/stencil';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-components',
  namespace: 'ods-components',
  tsconfig: 'tsconfig.prod.json',
});
