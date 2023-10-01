import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression2';
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' }),
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000/api',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    },
  }
})
