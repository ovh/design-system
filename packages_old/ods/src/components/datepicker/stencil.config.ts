import { getStencilConfig } from '../../config/stencil';

export const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-datepicker',
  jestOption: {
    moduleNameMapper: {
      'vanillajs-datepicker': '<rootDir>/jestStub.js',
    },
  },
  namespace: 'ods-datepicker',
});
