import react from '@vitejs/plugin-react';
import { globSync } from 'glob';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

const componentEntries = Object.fromEntries(
  globSync('src/components/*/src/index.ts').map((file) => {
    const [, , name] = file.split('/');
    return [`components/${name}/index`, resolve(__dirname, file)];
  }),
);

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: {
        index: resolve(__dirname, 'src/index.ts'),
        ...componentEntries,
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: 'tsconfig.json',
    }),
  ],
});
