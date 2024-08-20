import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
    ? '/vue-vite-tarot-2/'  // Nome del repository GitHub Pages
    : '/'
})