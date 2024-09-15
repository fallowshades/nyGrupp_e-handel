import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true, // enable production source maps
  },
  css: {
    devSourcemap: true, // enable CSS source maps during development
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
