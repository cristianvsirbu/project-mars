import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression2';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), compression({ algorithm: 'gzip' })],
  assetsInclude: ['**/*.html'],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
});
