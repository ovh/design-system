/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'design-system',
  plugins: [react()],
  server: {
    port: 8080,
  },
})
