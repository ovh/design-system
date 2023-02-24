import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@ovhcloud/ods-stencil/components/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
