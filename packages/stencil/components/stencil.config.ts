import { Config } from '@stencil/core';
import { getStencilConfig } from '@ovhcloud/ods-stencil/libraries/stencil-core';

const args = process.argv.slice(2);

const config: Config = {
  ...getStencilConfig({
    namespace: 'ods-stencil',
    args,
    distCustomElements: {
      type: 'dist-custom-elements',
      dir: 'custom-elements',
      copy: [
        {
          src: '../../scripts/custom-elements',
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
          src: '../../scripts/custom-elements-bundle',
          dest: 'custom-elements-bundle',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    reactOutput: {
      // exclude components that have been moved to the new repo
      excludeComponents: [
        'osds-breadcrumb',
        'osds-button',
        'osds-cart',
        'osds-checkbox',
        'osds-checkbox-button',
        'osds-chip',
        'osds-clipboard',
        'osds-collapsible',
        'osds-content-addon',
        'osds-divider',
        'osds-flag',
        'osds-form-field',
        'osds-icon',
        'osds-input',
        'osds-link',
        'osds-message',
        'osds-pagination',
        'osds-password',
        'osds-popover',
        'osds-progress-bar',
        'osds-radio',
        'osds-radio-group',
        'osds-quantity',
        'osds-radio-button',
        'osds-search-bar',
        'osds-select',
        'osds-skeleton',
        'osds-spinner',
        'osds-text',
        'osds-textarea',
        'osds-tile',
        'osds-toggle',
        'osds-tooltip',
      ],
    },
    vueOutput: {
      // exclude components that have been moved to the new repo
      excludeComponents: [
        'osds-breadcrumb',
        'osds-button',
        'osds-cart',
        'osds-checkbox',
        'osds-checkbox-button',
        'osds-chip',
        'osds-clipboard',
        'osds-collapsible',
        'osds-content-addon',
        'osds-divider',
        'osds-flag',
        'osds-form-field',
        'osds-icon',
        'osds-input',
        'osds-link',
        'osds-message',
        'osds-pagination',
        'osds-password',
        'osds-popover',
        'osds-progress-bar',
        'osds-radio',
        'osds-radio-group',
        'osds-quantity',
        'osds-radio-button',
        'osds-search-bar',
        'osds-select',
        'osds-skeleton',
        'osds-spinner',
        'osds-text',
        'osds-textarea',
        'osds-tile',
        'osds-toggle',
        'osds-tooltip',
      ],
    },
    dev: {
      tsConfig: 'tsconfig.components.dev.json',
      globalScript: 'src/www.components.ts'
    },
    prod: {
      tsConfig: 'tsconfig.components.prod.json'
    },
    test: {
      tsConfig: 'tsconfig.components.test.json'
    }
  }),
  bundles: [
    { components: ['osds-accordion', 'osds-accordion-group'] },
    { components: ['osds-location-tile'] },
    { components: ['osds-range'] },
    { components: ['osds-switch'] },
    { components: ['osds-switch-item'] },
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true,
  },
  enableCache: true,
};

// copy @ovhcloud/ods-core built lib into the component www directory (yarn start)
// in order to test accessing ods initializer
config.outputTargets && config.outputTargets
  .filter((o) => o.type === 'www')
  .forEach(o => {
    (o as any).copy = [
      {
        src: '../../../libraries/cdk/dist',
        dest: 'cdk'
      }
    ]
  });

export { config };
