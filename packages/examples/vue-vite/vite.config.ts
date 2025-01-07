import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('ods-'),
        },
      },
    }),
    tsconfigPaths({ root: '.' }),
  ],
  server: {
    port: 3000,
  },
});
