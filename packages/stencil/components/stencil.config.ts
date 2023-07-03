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
      excludeComponents: ['osds-text', 'osds-textarea'],
    },
    vueOutput: {
      // exclude components that have been moved to the new repo
      excludeComponents: ['osds-text', 'osds-textarea'],
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
    { components: ['osds-button'] },
    {
      components: [
        'osds-cart',
        'osds-cart-footer',
        'osds-cart-footer-item',
        'osds-cart-header',
        'osds-cart-item',
        'osds-cart-item-option',
        'osds-cart-manager',
        'osds-cart-section',
        'osds-cart-total',
      ],
    },
    { components: ['osds-checkbox'] },
    { components: ['osds-checkbox-button'] },
    { components: ['osds-chip'] },
    { components: ['osds-content-addon'] },
    { components: ['osds-divider'] },
    { components: ['osds-flag'] },
    { components: ['osds-icon'] },
    { components: ['osds-input'] },
    { components: ['osds-link'] },
    { components: ['osds-location-tile'] },
    { components: ['osds-message'] },
    { components: ['osds-popover'] },
    { components: ['osds-quantity'] },
    { components: ['osds-radio', 'osds-radio-group'] },
    { components: ['osds-radio-button'] },
    { components: ['osds-range'] },
    { components: ['osds-select'] },
    { components: ['osds-skeleton'] },
    { components: ['osds-switch'] },
    { components: ['osds-switch-item'] },
    { components: ['osds-tile'] },
    { components: ['osds-toggle'] },
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
