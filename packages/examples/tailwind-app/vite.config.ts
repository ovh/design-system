import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // ods-react is linked from the workspace with its own react devDependency: keep a single React.
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 8080,
  },
});
