import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * https://vitejs.dev/config/
 * ---
 *
 * if you are using web component from ODS in vue, we may have a warning about unknown native element:
 * ```
 * [Vue warn]: Failed to resolve component: osds-button
 * If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
 * ```
 *
 * to resolve this, you have to add a compiler options with the ODS prefix `osds-` :
 * ```json
 * isCustomElement: (tag) => {
 *   return tag.startsWith('osds-')
 * }
 * ```
 */
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith('osds-'); // return true when tag is a custom element
          },
        },
      },
    }),
  ],
});
