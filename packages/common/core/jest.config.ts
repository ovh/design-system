import { getJestConfig } from '@ovhcloud/ods-common-testing';

const config = getJestConfig({
  args: process.argv.slice(2),
});

export default config;
