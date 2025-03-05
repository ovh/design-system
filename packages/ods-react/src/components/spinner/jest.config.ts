export default {
  preset: 'jest-puppeteer',
  testEnvironment: '../../../config/ods-test-env.ts',
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
};
