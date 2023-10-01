import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression2';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), compression({ algorithm: 'gzip' })],
})
