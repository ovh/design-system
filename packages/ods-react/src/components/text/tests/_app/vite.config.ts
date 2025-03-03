import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  // build: {
  //   commonjsOptions: { transformMixedEsModules: true }, // Change
  // },
  plugins: [react()],
  server: {
    port: 3000,
  },
});
