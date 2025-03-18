import { getStencilConfig } from '../../config/stencil';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-select',
  jestOption: {
    setupFiles: ['<rootDir>/tests/setup.ts'],
  },
  namespace: 'ods-select'
});
