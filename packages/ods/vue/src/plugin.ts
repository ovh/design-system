import { defineCustomElements } from '@ovhcloud/ods-components/loader';
import { Plugin } from 'vue';

export const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
