import type { Config } from '@jest/types';
import { OdsGetJestConfig } from '@ovhcloud/ods-common-testing';

const args = process.argv.slice(2);

/**
 * synchronous config for jest.
 *
 * example with async config :
 * ```typescript
 * export default async (): Promise<Config.InitialOptions> => {
 *   return {
 *     verbose: true,
 *   };
 * };
 * ```
 */
// @ts-ignore until dependencies are fixed to one unique version of @jest/types
const config: Config.InitialOptions = {
  ...OdsGetJestConfig({
    basePath: '<rootDir>/../../..',
    args
  }),
  /**
   * global function executed first and outside the environment test
   * @see https://jestjs.io/fr/docs/configuration#globalsetup-string
   */
  globalSetup: "./jest.global.ts",
  /**
   * setup jest files executed for each test and in the test environment
   * @see https://jestjs.io/fr/docs/configuration#setupfiles-array
   */
  setupFiles: ["./jest.setup.ts"]
};
export default config;
