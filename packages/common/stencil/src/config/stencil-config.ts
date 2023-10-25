import type { Config as JestConfig } from '@jest/types';
import type { Config as StencilConfig } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { postcss } from '@stencil-community/postcss';
import * as autoprefixer from 'autoprefixer';
import * as nodeSassPackageImporter from 'node-sass-package-importer';
import { inlineSvg } from 'stencil-inline-svg';

function getStencilConfig({ args, componentCorePackage, devScript, excludeComponents = [], jestConfig = {}, namespace }: {
  args: string[],
  componentCorePackage: string,
  excludeComponents?: string[],
  devScript?: string,
  jestConfig: JestConfig.InitialOptions,
  namespace: string,
}): StencilConfig {
  const isCi = args.some((arg) => arg.match(/(--|:)ci/g));
  const isDev = args.includes('--dev');
  const isProd = args.includes('--prod');
  const isTest = args.includes('--e2e') || args.includes('--spec');

  function getTsConfig() {
    if (isProd) {
      return 'tsconfig.prod.json';
    }
    if (isTest) {
      return 'tsconfig.test.json';
    }

    return 'tsconfig.json';
  }

  const baseConfig: StencilConfig = {
    devServer: {
      startupTimeout: 30000,
    },
    namespace,
    outputTargets: [
      {
        dir: 'dist',
        esmLoaderPath: '../loader',
        type: 'dist',
      },
      {
        dir: 'custom-elements',
        copy: isProd ? [{
          dest: 'custom-elements',
          src: '../../../common/stencil/src/scripts/custom-elements', // TODO get rid of this indirect module reference
          warn: true,
        }] : [],
        generateTypeDeclarations: true,
        includeGlobalScripts: false,
        type: 'dist-custom-elements',
      },
      {
        dir: 'dist/docs',
        type: 'docs-readme',
      },
    ],
    plugins: [
      inlineSvg(),
      postcss({ plugins: [autoprefixer()] }),
      sass({ importer: nodeSassPackageImporter() }),
    ],
    sourceMap: isDev,
    tsconfig: getTsConfig(),
  };

  if (isDev) {
    return {
      ...baseConfig,
      devMode: true,
      globalScript: devScript || 'src/globals.ts',
      globalStyle: require.resolve('@ovhcloud/ods-theme-blue-jeans'),
      outputTargets: baseConfig.outputTargets?.concat([{
        serviceWorker: null,
        type: 'www',
      }]),
    };
  }

  if (isTest) {
    return {
      ...baseConfig,
      globalScript: 'src/globals.ts',
      globalStyle: require.resolve('@ovhcloud/ods-theme-blue-jeans'),
      testing: {
        ...jestConfig,

        // Jest config override to make TS happy
        bail: undefined,
        globalSetup: jestConfig.globalSetup || undefined,
        globalTeardown: jestConfig.globalTeardown || undefined,
        preset: undefined,
        prettierPath: jestConfig.prettierPath || undefined,
        resolver: jestConfig.resolver || undefined,
        restoreMocks: undefined,
        testRegex: jestConfig.testRegex as string,
        transform: jestConfig.transform as Record<string, string>,

        // Actual Stencil testing config
        browserHeadless: false,
        browserSlowMo: 2000, // milliseconds,
        ...(isCi ? {
          // Some CI doesn't allow sandbox, therefore this parameters must be passed to your Headless Chrome before it can run your tests
          browserArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
          browserHeadless: true,
          browserSlowMo: 0, // milliseconds,
        } : {}),
      },
    };
  }

  if (isProd) {
    return {
      ...baseConfig,
      outputTargets: baseConfig.outputTargets?.concat([
        reactOutputTarget({
          componentCorePackage,
          customElementsDir: 'custom-elements',
          excludeComponents,
          includeDefineCustomElements: false,
          includeImportCustomElements: true,
          includePolyfills: false,
          proxiesFile: './react/src/components/stencil-generated/index.ts',
        }),
        vueOutputTarget({
          componentCorePackage,
          customElementsDir: 'custom-elements',
          excludeComponents,
          includeDefineCustomElements: false,
          includeImportCustomElements: true,
          includePolyfills: false,
          proxiesFile: './vue/src/components/stencil-generated/index.ts',
        }),
      ]),
    };
  }

  return baseConfig;
}

export {
  getStencilConfig,
};
