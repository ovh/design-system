import type { Config } from '@jest/types';
import { OdsGetJestConfig } from '@ovhcloud/ods-testing';

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
const config: Config.InitialOptions = OdsGetJestConfig({
  basePath: '<rootDir>/../../../..',
  args
});
export default config;
