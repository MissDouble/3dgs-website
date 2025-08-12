import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/3dgs-website/', // 設定 GitHub Pages 的路徑
})