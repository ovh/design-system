import { Config } from '@stencil/core';
// import { getJestOption } from '../../config/jest';
import { getStencilConfig } from '../../config/stencil';

// const jestConfig = getJestOption({ args: [], option: {} });
const configStencil = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-input',
  namespace: 'ods-input',
});

export const config: Config = {
  ...configStencil,
  testing: {
    testEnvironment: '@happy-dom/jest-environment',
    ...configStencil.testing,
  }
};
