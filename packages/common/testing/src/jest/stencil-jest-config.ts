import type { Config } from '@jest/types';
import { getJestConfig } from './ods-get-jest-config';

/**
 * Get the base jest config available for all stencil components
 * @param args - is the command line arguments passed to jest
 * @param options - jest config option to override
 */
function getStencilJestConfig({ args, options = {} }: { args: string[], options?: Config.InitialOptions }): Config.InitialOptions {
  const { testEnvironment, ...config } = getJestConfig({ args, options });

  return {
    ...config,
    preset: '@stencil/core/testing',
    transform: {
      '\\.svg$': 'jest-transform-stub',
    },
  };
}

export {
  getStencilJestConfig,
};
