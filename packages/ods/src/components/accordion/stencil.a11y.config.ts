import { Config } from '@stencil/core';

export const config: Config = {
  testing: {
    testEnvironment: 'jsdom',
    testRegex: 'tests\\/.*\\.a11y\\.ts$',
  }
};
