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
    testRegex: 'tests\\/.*\\.spec\\.ts$',
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
        testRegex: 'tests\\/.*\\.e2e\\.screenshot\\.ts$',
        testTimeout: 60000,
      };
    }

    return {
      ...baseOption,
      testRegex: 'tests\\/.*\\.e2e\\.ts$',
      testTimeout: 60000,
    };
  }

  return baseOption;
}

export {
  getJestOption,
};
