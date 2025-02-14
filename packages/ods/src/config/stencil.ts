import type { Config as JestConfig } from '@jest/types';
import type { Config as StencilConfig } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { postcss } from '@stencil-community/postcss';
import autoprefixer from 'autoprefixer';
import { getJestOption } from './jest';

function getStencilConfig({ args, componentCorePackage, devScript, jestOption = {}, namespace, tsconfig }: {
  args: string[],
  componentCorePackage: string,
  devScript?: string,
  jestOption?: JestConfig.InitialOptions,
  namespace: string,
  tsconfig?: string,
}): StencilConfig {
  const isCi = args.some((arg) => arg.match(/(--|:)ci/g));
  const isDev = args.includes('--dev');
  const isProd = args.includes('--prod');
  const isTest = args.includes('--e2e') || args.includes('--spec');

  const baseConfig: StencilConfig = {
    devServer: {
      startupTimeout: 30000,
    },
    namespace,
    outputTargets: [
      {
        type: 'dist',
      },
      {
        customElementsExportBehavior: 'auto-define-custom-elements',
        generateTypeDeclarations: true,
        includeGlobalScripts: false,
        type: 'dist-custom-elements',
      },
    ],
    plugins: [
      sass(),
      postcss({ plugins: [autoprefixer()] }),
    ],
    sourceMap: isDev,
    tsconfig: tsconfig || 'tsconfig.json',
  };

  if (isDev) {
    return {
      ...baseConfig,
      devMode: true,
      globalScript: devScript || 'src/globals.ts',
      globalStyle: require.resolve('@ovhcloud/ods-themes/default'),
      outputTargets: baseConfig.outputTargets?.concat([{
        serviceWorker: null,
        type: 'www',
      }]),
    };
  }

  if (isTest) {
    const { testEnvironment, ...testOption } = getJestOption({ args, option: jestOption });

    /* eslint-disable sort-keys */
    return {
      ...baseConfig,
      globalScript: 'src/globals.ts',
      globalStyle: require.resolve('@ovhcloud/ods-themes/default'),
      testing: {
        ...testOption,

        // Jest config override to make TS happy
        bail: undefined,
        globalSetup: jestOption.globalSetup || undefined,
        globalTeardown: jestOption.globalTeardown || undefined,
        preset: undefined,
        prettierPath: jestOption.prettierPath || undefined,
        resolver: jestOption.resolver || undefined,
        restoreMocks: undefined,
        testRegex: testOption.testRegex as string,

        // Actual Stencil testing config
        browserHeadless: false,
        browserSlowMo: 300,
        transform: {
          '\\.svg$': 'jest-transform-stub',
        },
        ...(isCi ? {
          browserArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
          browserHeadless: true,
          browserSlowMo: 0,
        } : {}),
      },
    };
    /* eslint-enable sort-keys */
  }

  if (isProd) {
    return {
      ...baseConfig,
      enableCache: false,
      outputTargets: baseConfig.outputTargets?.concat([
        reactOutputTarget({
          componentCorePackage,
          customElementsDir: 'dist/components',
          includeDefineCustomElements: false,
          includeImportCustomElements: true,
          includePolyfills: false,
          proxiesFile: './react/src/components/stencil-generated/index.ts',
        }),
        vueOutputTarget({
          componentCorePackage,
          customElementsDir: 'dist/components',
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
