export default {
  collectCoverage: false,
  testPathIgnorePatterns: [
    'components',
    'node_modules/',
    'dist/',
  ],
  testRegex: 'tests\\/.*\\.spec\\.(ts|tsx)$',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
