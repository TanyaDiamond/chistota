import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // GitHub Pages обычно публикует сайт не из корня домена, а из подпапки репозитория.
  // base: './' делает пути к ассетам относительными, поэтому проект корректно
  // работает и локально, и на https://<user>.github.io/<repo>/
  base: './',
  plugins: [vue()],
  server: {
    port: 5173
  },
  build: {
    sourcemap: false, // отключает генерацию source maps
    minify: 'terser'  // включает минификацию для защиты исходного кода
  }
})
