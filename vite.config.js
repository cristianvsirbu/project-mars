import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression2';
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compression({algorithm: 'gzip'})],
  server: {
    proxy: {
      '/daily-weather': 'http://localhost:3000', 
    },
  },
})
