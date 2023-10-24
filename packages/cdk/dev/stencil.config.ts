import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

const args = process.argv.slice(2);

const config: Config = {
  ...getStencilConfig({
    namespace: 'ods-cdk-dev',
    args,
    reactOutput: {
      componentCorePackage: '@ovhcloud/ods-cdk-dev',
      excludeComponents: [],
    },
    vueOutput: {
      componentCorePackage: '@ovhcloud/ods-cdk-dev',
      excludeComponents: [],
    },
    distCustomElements: {
      type: 'dist-custom-elements',
      dir: 'custom-elements',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'custom-elements',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    distCustomElementsBundle: {
      type: 'dist-custom-elements-bundle',
      dir: 'custom-elements-bundle',
      copy: [
        {
          src: '../scripts/custom-elements-bundle',
          dest: 'custom-elements-bundle',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    dev: {
      tsConfig: 'tsconfig.dev.json',
      globalScript: 'src/www.ts',
    },
    prod: {
      tsConfig: 'tsconfig.prod.json',
    },
  }),
};

export { config };
