import {getStencilJestConfig} from '@ovhcloud/ods-common-testing';

const start = 2;
const config = getStencilJestConfig({
  args: process.argv.slice(start),
});

export default config;
