import { getStencilConfig } from '@ovhcloud/ods-common-stencil';

import jestConfig from './jest.config';

const config = getStencilConfig({
  args: process.argv.slice(2),
  componentCorePackage: '@ovhcloud/ods-component-flag',
  devScript: 'src/dev.ts',
  jestConfig,
  namespace: 'osds-flag',
});
// TODO replace this with spritesheet embedded in the component bundle
config.outputTargets?.forEach((output) => {
  if (output.type === 'dist-custom-elements' || output.type === 'www') {
    output.copy = output.copy || [];
    output.copy.push(
      {
        src: '../../../../../node_modules/flag-icons/flags/4x3/',
        dest: `${output.type === 'dist-custom-elements' ? 'dist/' : ''}flags/flags-4x3/`,
      },
    );
  }
  if (output.type === 'www') {
    output.copy = output.copy || [];
    output.copy.push({
      src: '../../../../../node_modules/flag-icons/flags/4x3/',
      dest: 'flags-custom-path/',
    });
  }
});

export { config };
