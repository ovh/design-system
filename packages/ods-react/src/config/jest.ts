import { type Config } from '@jest/types';
//TODO conf unit test & e2e
function getDefaultConfig(): Config.InitialOptions {
  return {
    preset: 'jest-puppeteer',
    testEnvironment: './ods-test-env.ts', //?
    testRegex: 'tests\\/.*\\.e2e\\.tsx$',
    testPathIgnorePatterns: [
      'node_modules/',
      'dist/',
    ],
    testTimeout: 60000,
    transform: {
    '\\.(ts|tsx)$': 'ts-jest',
      '\\.scss$': 'jest-css-modules-transform',
    },
    verbose: true,
  }
}

export {
  getDefaultConfig,
};
