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
    args,
  }),
  setupFiles: ["./jest.setup.ts"]
}
export default config;
