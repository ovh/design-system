import type { Config } from '@jest/types';

/**
 * Get the base jest config
 * @param args - command line arguments passed to jest
 * @param options - jest config option to override
 */
function getJestConfig({ args, options = {} }: { args: string[], options?: Config.InitialOptions }): Config.InitialOptions {
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
    ...options,
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
  getJestConfig,
};
