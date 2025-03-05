import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['./tests/**/*.e2e.tsx'],
    setupFiles: './tests/setup.js',
    watch: false,
  },
});
