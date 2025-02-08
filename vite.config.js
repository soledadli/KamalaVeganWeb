import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

//vite.dev/config/
export default defineConfig({
  base: '/KamalaVeganWeb/',
  publicDir: 'public',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/pdfs/': {
        target: 'http://localhost:5173', // Adjust if needed
        changeOrigin: true,
      },
    },
  },
})
