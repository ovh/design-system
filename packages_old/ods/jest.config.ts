import { getJestOption } from './src/config/jest';

export default getJestOption({
  args: [],
  option: {
    collectCoverageFrom: [
      '<rootDir>/src/!(components)/**/*.{ts,tsx}',
    ],
    coverageDirectory: '<rootDir>/tests/coverage',
    testPathIgnorePatterns: [
      '/node_modules/',
      'dist/',
      'scripts/',
      'src/components/',
    ],
  },
});
