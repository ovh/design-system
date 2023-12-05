import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

import jestConfig from './jest.config';

const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-phone-number',
  devScript: 'src/dev.ts',
  excludeComponents: [
    'osds-flag',
    'osds-icon',
    'osds-input',
    'osds-select',
    'osds-select-group',
    'osds-select-option',
    'osds-spinner',
    'osds-text',
  ],
  jestConfig,
  namespace: 'osds-phone-number',
});

config.outputTargets?.forEach((output) => {
  if (output.type === 'dist-custom-elements' || output.type === 'www') {
    output.copy = output.copy || [];
    output.copy.push(
      {
        src: '../../../../node_modules/flag-icons/flags/4x3/',
        dest: `${output.type === 'dist-custom-elements' ? 'dist/' : ''}flags/flags-4x3/`,
      },
    );
  }
  if (output.type === 'www') {
    output.copy = output.copy || [];
    output.copy.push({
      src: '../../../../node_modules/flag-icons/flags/4x3/',
      dest: 'flags-custom-path/',
    });
  }
});

export { config };
