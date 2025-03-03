import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// import treeShakeable from 'rollup-plugin-tree-shakeable';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      // output: {
      //   preserveModules: true,
      // },
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    // treeShakeable(),
    dts({ include: ['src'] }),
  ],
});
