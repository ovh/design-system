import type { Config } from '@jest/types';

function getJestOption({ args, option = {} }: { args: string[], option?: Config.InitialOptions }): Config.InitialOptions {
  const e2e = args.includes('--e2e');
  const screenshot = args.includes('--screenshot');
  const baseOption = {
    moduleNameMapper: {},
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
      '/node_modules/',
      'dist/',
    ],
    testRegex: '(/__tests__/.*|\\.?(spec))\\.(tsx?|ts?|jsx?|js?)$',
    transform: {
      '\\.(ts|tsx)$': 'ts-jest',
    },
    verbose: true,
    ...option,
  };

  if (e2e) {
    if (screenshot) {
      return {
        ...baseOption,
        testRegex: '(/__e2e-tests__/.*|\\.(e2e))\\.screenshot\\.(tsx?|jsx?)$',
        testTimeout: 60000,
      };
    }

    return {
      ...baseOption,
      testRegex: '(/__e2e-tests__/.*|\\.(e2e))\\.(tsx?|jsx?)$',
      testTimeout: 60000,
    };
  }

  return baseOption;
}

export {
  getJestOption,
};
