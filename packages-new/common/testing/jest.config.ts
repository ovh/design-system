import type { Config } from '@jest/types';

// Do not use here the ods-get-jest-config helper
// as it is part of the code that we'll have to test
const config: Config.InitialOptions = {
  testPathIgnorePatterns: [
    "/node_modules/",
    "dist/"
  ],
  testRegex: "(/__tests__/.*|\\.?(spec))\\.(tsx?|ts?|jsx?|js?)$",
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
};

export default config;
