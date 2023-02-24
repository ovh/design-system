import type { Config } from '@jest/types';
// todo: split @ovhcloud/ods-testing into 2 libs @ovhcloud/ods-testing-core (specific to core) and @ovhcloud/ods-testing (generic stuff)
// in order to avoid circular deps
import { OdsGetJestConfig } from '../testing/src/jest/ods-get-jest-config';


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
const config: Config.InitialOptions = OdsGetJestConfig({ basePath: '<rootDir>/../../..', stencil: false, args });
export default config;
