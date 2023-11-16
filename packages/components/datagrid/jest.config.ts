import { getStencilJestConfig } from '@ovhcloud/ods-common-testing';

const config = getStencilJestConfig({
  args: process.argv.slice(2),
  options: {
    moduleNameMapper: {
      'tabulator-tables': '<rootDir>/src/jestStub.js',
    }
  }
});

export default config;
