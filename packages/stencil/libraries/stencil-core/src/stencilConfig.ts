/* eslint-disable no-console */
import { Config as StencilConfig } from '@stencil/core';
import {
  JestConfig as StencilJestConfig,
  OutputTargetDistCustomElements,
  OutputTargetDistCustomElementsBundle,
  OutputTargetWww,
  CopyTask
} from '@stencil/core/internal';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import * as nodeSassPackageImporter from 'node-sass-package-importer';
import type { Config as JestConfig } from '@jest/types';
import * as autoprefixer from 'autoprefixer';
import { OutputTargetReact, reactOutputTarget } from '@stencil/react-output-target';
import { OutputTargetVue, vueOutputTarget } from '@stencil/vue-output-target';
import { OdsStencilConfigEnvOptions } from './ods-stencil-config-env-options';

/**
 * get the stencil configuration.
 * the base theme `@ovhcloud/ods-theme-blue-jeans/index.scss` will be automatically added if you are in dev or testing mode,
 * in order to have a normal UI, just like in an application that have an imported theme.
 * the `tsconfig.prod.json` file will be used only if you are in `dev` or `prod` mode.
 *
 * - the `dev` mode is defined as you use the `serve` or `watch` option of stencil.
 * - the `prod` mode is defined when you want to compile for production purpose.
 * - the `test` mode is defined as you are testing the component (unit test, e2e, screenshot).
 *
 * @example
 * ```
 * import { Config } from '@stencil/core';
 * import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';
 * import * as jestConfig from './jest.config';
 *
 * const args = process.argv.slice(2);
 *
 * export const config: Config = getStencilConfig({
 *   namespace: 'osds-my-components-package',
 *   args,
 *   jestConfig: jestConfig.default
 * });
 * ```
 *
 * If you have not set a copy task list in `distCustomElements` or `distCustomElementsBundle`,
 * it adds one in order to copy a `package.json` file into the generated `custom-elements` and
 * `custom-elements-bundle` directories (allow use these directories as packages).
 * If you have set a copy task list, so you must set yourself the copy of `package.json` like
 * ```
 * export const config: Config = getStencilConfig({
 *   namespace: 'osds-my-components-package',
 *   args,
 *   jestConfig: jestConfig.default,
 *   distCustomElements: {
 *     copy: [
 *       {
 *         src: '../../../scripts/custom-elements',
 *         dest: 'custom-elements',
 *         warn: true,
 *       },
 *       myTask
 *     ]
 *   },
 *   // do the same for bundle:
 *   // distCustomElementsBundle: ...
 * });
 * ```
 *
 * WARNING: if your app have some issue with vueJs and Vite, you may need to use the custom-elements-bundle compiled files
 * and not the loader at disposal (see https://github.com/ionic-team/stencil/pull/2959).
 *
 * @param namespace - components package name
 * @param args - array of argument from stencil like `--spec`, `--ci` etc
 * @param jestConfig - jest config options
 * @param distCustomElements - recommended target for custom elements. see https://stenciljs.com/docs/custom-elements
 * @param distCustomElementsBundle - deprecated target for custom elements. see https://stenciljs.com/docs/custom-elements-bundle
 * @param reactOutput - config for react proxies
 * @param vueOutput - config for vue proxies
 * @param dev - dev specific options to set
 * @param prod - production specific options to set
 */
export function getStencilConfig({
                                   namespace,
                                   args,
                                   jestConfig,
                                   distCustomElements,
                                   distCustomElementsBundle,
                                   reactOutput,
                                   vueOutput,
                                   dev,
                                   prod
                                 }: {
  namespace: string,
  args: string[],
  /** testing config for jest */
  jestConfig?: JestConfig.InitialOptions,
  distCustomElements?: OutputTargetDistCustomElements,
  /** @deprecated prefer using `distCustomElements` (will be deleted in a next major version) */
  distCustomElementsBundle?: OutputTargetDistCustomElementsBundle,
  reactOutput?: Partial<OutputTargetReact>,
  vueOutput?: Partial<OutputTargetVue>,
  dev?: OdsStencilConfigEnvOptions,
  prod?: OdsStencilConfigEnvOptions,
}): StencilConfig {
  const isCi = args.some((arg) => arg.match(/(--|:)ci/g)),
    /**
     * stencil doc:
     * ```
     * option --dev:
     * Runs a development build.
     * ```
     * @see https://stenciljs.com/docs/cli
     */
    isDev = args.includes('--dev'),
    /**
     * stencil doc:
     * ```
     * option --prod:
     * Runs a production build which will optimize each file,
     * improve bundling, remove unused code, minify, etc. A production build is the default,
     * this flag is only used to override the --dev flag.
     * ```
     * @see https://stenciljs.com/docs/cli
     */
    isProd = args.includes('--prod'),
    isTest = args.includes('--e2e') || args.includes('--spec');
  console.info('ODS:', 'dev', isDev, 'prod', isProd, 'test', isTest);

  jestConfig = args.includes('test') ? jestConfig : undefined;

  let convertedJestConfig: StencilJestConfig = {};
  if (jestConfig) {

    convertedJestConfig = {
      // ...jestConfigFiltered,
      ...jestConfig,

      // preset: "../../../../node_modules/jest-puppeteer",
      // transform: { "^.+\\.(js|ts|tsx)$": "<rootDir>/../../../../node_modules/@stencil/core/testing/jest-preprocessor.js" },
      // testEnvironment:  "<rootDir>/../../../../node_modules/@stencil/core/testing/jest-environment.js"

      // incompatible props
      bail: undefined,
      restoreMocks: undefined,
      transform: jestConfig.transform as { [key: string]: string; },

      // adaptations
      testRegex: jestConfig.testRegex as string,
      globalSetup: jestConfig.globalSetup === null ? undefined : jestConfig.globalSetup,
      globalTeardown: jestConfig.globalTeardown === null ? undefined : jestConfig.globalTeardown,
      prettierPath: jestConfig.prettierPath === null ? undefined : jestConfig.prettierPath,
      resolver: jestConfig.resolver === null ? undefined : jestConfig.resolver,

      // force erase preset
      preset: undefined
    };
    // warning incompatible props
    (Object.keys(jestConfig) as Array<keyof JestConfig.InitialOptions>)
      .filter(k => ['bail', 'restoreMocks', 'transform'].some(p => p === k))
      .forEach((k) => {
        if (!jestConfig?.[ k ]) {
          throw new Error(`[getStencilConfig] incompatible property from jest config not integrated into jest stencil. property=${k}`);
        }
      })
    if (jestConfig.preset) {
      console.warn(`[ WARN ] [getStencilConfig] ignoring property from jest config not integrated into jest stencil. property=preset`);
    }
  }

  // manage copy task with custom-element package.json if needed (prod)
  let distCustomElementsCopy: CopyTask[] = [];
  if (distCustomElements && Array.isArray(distCustomElements.copy)) {
    distCustomElementsCopy = distCustomElements.copy;
  } else {
    if (isProd) {
      // add the default copy of custom-elements package.json into the generated `custom-elements` directory
      distCustomElementsCopy = [{
        src: '../../../scripts/custom-elements',
        dest: 'custom-elements',
        warn: true,
      }]
    }
  }

  // manage copy task with custom-element-bundle package.json if needed (prod)
  let distCustomElementsBundleCopy: CopyTask[] = [];
  if (distCustomElementsBundle && Array.isArray(distCustomElementsBundle.copy)) {
    distCustomElementsBundleCopy = distCustomElementsBundle.copy;
  } else {
    if (isProd) {
      // add the default copy of custom-elements-bundle package.json into the generated `custom-elements-bundle` directory
      distCustomElementsBundleCopy = [{
        src: '../../../scripts/custom-elements-bundle',
        dest: 'custom-elements-bundle',
        warn: true,
      }]
    }
  }


  // globalScript
  let globalScriptOption: Pick<StencilConfig, 'globalScript'> = {};
  if (isDev && dev?.globalScript) {
    globalScriptOption = { globalScript: dev.globalScript };
  } else if (isProd && prod?.globalScript) {
    globalScriptOption = { globalScript: prod.globalScript };
  }
  globalScriptOption?.globalScript && console.info(`ODS: integrates globalScript ${globalScriptOption.globalScript} into the Build`);

  // tsConfig
  let tsConfigOption: Pick<StencilConfig, 'tsconfig'> = {};
  if (isDev) {
    tsConfigOption = { tsconfig: dev?.tsConfig ? dev.tsConfig : 'tsconfig.dev.json' };
  } else if (isProd) {
    tsConfigOption = { tsconfig: prod?.tsConfig ? prod.tsConfig : 'tsconfig.prod.json' };
  }
  tsConfigOption?.tsconfig && console.info(`ODS: using ${tsConfigOption.tsconfig}`);

  return {
    namespace,
    // in dev mode (serving): keep sourcemap
    ...((isDev) ? {
      sourceMap: true
    } : {}),
    // in case of testing, injecting the blue-jeans theme in order to have nominal UI
    ...((isTest || isDev) ? {
      globalStyle: require.resolve('@ovhcloud/ods-theme-blue-jeans/index.scss'),
    } : {}),
    plugins: [sass({
      importer: nodeSassPackageImporter()
      // example of injecting sass directly inside each component:
      // injectGlobalPaths: [require.resolve('@ovhcloud/ods-xxx/file.scss')]
    }),
      postcss({
        plugins: [autoprefixer()]
      })
    ],
    ...tsConfigOption,
    outputTargets: [
      // generate react output only if we are not in dev mode (serving)
      ...(isDev ? [] : [
          reactOutputTarget({
            componentCorePackage: '@ovhcloud/ods-stencil/components',
            proxiesFile: './react/src/components/stencil-generated/index.ts',
            customElementsDir: 'custom-elements',
            includeImportCustomElements: true,
            includePolyfills: false,
            includeDefineCustomElements: false,
            ...reactOutput,
          }),
          vueOutputTarget({
            componentCorePackage: '@ovhcloud/ods-stencil/components',
            proxiesFile: './vue/src/components/stencil-generated/index.ts',
            customElementsDir: 'custom-elements',
            includeImportCustomElements: true,
            includePolyfills: false,
            includeDefineCustomElements: false,
            ...vueOutput,
          })
        ]
      ),
      {
        type: 'dist',
        esmLoaderPath: '../loader',
      },
      {
        type: 'dist-custom-elements',
        dir: 'custom-elements',
        includeGlobalScripts: false,
        ...(distCustomElements ? distCustomElements : {}),
        copy: distCustomElementsCopy
      },
      {
        type: 'dist-custom-elements-bundle',
        dir: 'custom-elements-bundle',
        includeGlobalScripts: false,
        ...(distCustomElementsBundle ? distCustomElementsBundle : {}),
        copy: distCustomElementsBundleCopy
      },
      {
        type: 'docs-readme',
        dir: 'dist/docs',
      },
      // generate www app only when we are in dev mode (serve): gain build time
      ...(isDev ? (() => {
        console.info('ODS: generate www');
        const output: OutputTargetWww = {
          type: 'www',
          serviceWorker: null, // disable service workers
        }
        return [output]
      })() : []),
    ],
    ...globalScriptOption,

    devServer: {
      startupTimeout: 30000
    },
    testing: {
      ...(jestConfig ? convertedJestConfig : {}),
      browserHeadless: false,
      browserSlowMo: 2000, //milliseconds,
      ...(isCi ? {
        browserHeadless: true,
        browserSlowMo: 0, //milliseconds,
        /**
         * some CI doesn't allow sandbox, therefore this parameters must be passed to your Headless Chrome
         * before it can run your tests
         */
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
      } : {})
    }
  };
}
