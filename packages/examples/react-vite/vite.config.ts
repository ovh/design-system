import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: '../../../node_modules/@ovhcloud/ods-stencil/components/flag/dist/flags',
          dest: 'my-flags',
        },
      ],
    }),
    react(),
  ],
});
