export default {
  preset: 'jest-puppeteer',
  testRegex: 'tests\\/.*\\.e2e\\.ts$',
  testPathIgnorePatterns: [
    'node_modules/',
    'dist/',
  ],
  testTimeout: 60000,
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
