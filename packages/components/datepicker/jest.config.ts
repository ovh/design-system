import { getStencilJestConfig } from '@ovhcloud/ods-common-testing';

const config = getStencilJestConfig({
  args: process.argv.slice(2),
});

config.moduleNameMapper = {
  'vanillajs-datepicker': '<rootDir>/src/jestStub.js',
}

export default config;
