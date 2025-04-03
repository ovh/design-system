import { Config } from 'jest';

const jestConfig: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  testRegex: "./*test.tsx$",
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(@ovhcloud|@stencil)/)',
  ],
  rootDir: '../',
};

export default jestConfig;
