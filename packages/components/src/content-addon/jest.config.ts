import { getStencilJestConfig } from '@ovhcloud/ods-common-testing';

const config = getStencilJestConfig({
  args: process.argv.slice(2),
});

export default config;
