/* eslint-disable no-console */
import type { Config } from '@jest/types';

/**
 * get the base jest config available for all stencil components
 * @param basePath - relative or absolute path made of `<rootDir>...` for instance.
 * @param args - is the command line arguments passed to jest
 * @param stencil - is the jest config used with stencil
 * @see https://jestjs.io/docs/configuration#rootdir-string
 */
export function OdsGetJestConfig({
                                   basePath,
                                   args,
                                   stencil = true
                                 }: {
  basePath: string,
  args: string[],
  stencil?: boolean
}): Config.InitialOptions {
  const e2e = args.includes('--e2e'),
    screenshot = args.includes('--screenshot');
  console.log(`[OdsGetJestConfig] args=${args}`);
  console.log(`[OdsGetJestConfig] e2e=${e2e} screenshot=${screenshot}`);
  console.log('stencil', stencil);
  return {
    ...(stencil ? {
      preset: "@stencil/core/testing"
    } : {}),
    verbose: true,
    // keep a string here because of conversion into getStencilConfig
    // TODO @francois: CDS executes e2e:screenshot, so here it will execute only the *.screenshot files
    // TODO: we may need to have a "e2e-all" flag to set the file regexp with AND without "*.screenshot"
    ...(e2e ?
      screenshot ? {
      testRegex: "(/__e2e-tests__/.*|\\.(e2e))\\.screenshot\\.(tsx?|jsx?)$",
      testTimeout: 60000
    } : {
      testRegex: "(/__e2e-tests__/.*|\\.(e2e))\\.(tsx?|jsx?)$",
      testTimeout: 60000
    } : {
      testRegex: "(/__tests__/.*|\\.?(spec))\\.(tsx?|ts?|jsx?|js?)$"
    }),
    moduleNameMapper: {
      ...(!e2e ? {
        '^@ovhcloud/ods-core$': `${basePath}/packages/libraries/core/src/index`,
        '^@ovhcloud/ods-testing$': `${basePath}/packages/libraries/testing/src/index`,
        '^@ovhcloud/ods-theming$': `${basePath}/packages/libraries/theming/src/index`,
        '^@ovhcloud/ods-stencil/libraries/stencil-core$': `${basePath}/packages/stencil/libraries/stencil-core/src/index`,
        '^@ovhcloud/ods-stencil/libraries/stencil-testing': `${basePath}/packages/stencil/libraries/stencil-testing/src/index`,
        '^@ovhcloud/ods-stencil/(.*)$': `${basePath}/packages/stencil/$1`,
      }: {})
    },
    ...(stencil ? {
      transform: {
        "\\.svg$": "jest-transform-stub",
      },
    } : {
      // when using jest without stencil, we need to transform typescript files
      // and ignore dist directories that contains specs
      transform: {
        "\\.(ts|tsx)$": "ts-jest",
      },
      testPathIgnorePatterns: [
        "/node_modules/",
        "dist/"
      ],
      // must set env to jsdom in order to have window and other stuff (default to node)
      testEnvironment: "jsdom"
    }),
    // todo: make e2e testing working with webstorm
    // preset: "../../../../node_modules/jest-puppeteer",
    // "transform": {
    //   "^.+\\.(js|ts|tsx)$":
    //     "<rootDir>/../../../../node_modules/@stencil/core/testing/jest-preprocessor.js"
    // },
    // "moduleFileExtensions": ["ts", "tsx", "js", "json", "jsx"],
    // testEnvironment:  "<rootDir>/../../../../node_modules/@stencil/core/testing/jest-environment.js"

  };
}
