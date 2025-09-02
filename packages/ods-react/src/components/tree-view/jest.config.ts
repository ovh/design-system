const baseOption = {
  collectCoverage: false,
  testPathIgnorePatterns: [
    'node_modules/',
    'dist/',
  ],
  testRegex: 'tests\\/.*\\.spec\\.ts$',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};

export default !!process.env.E2E ?
  {
    ...baseOption,
    preset: 'jest-puppeteer',
    testRegex: 'tests\\/.*\\.e2e\\.ts$',
    testTimeout: 60000,
  } : {
    ...baseOption,
    testEnvironment: 'jsdom',
    transform: {
      ...baseOption.transform,
      '\\.scss$': 'jest-transform-stub',
    }
  };
