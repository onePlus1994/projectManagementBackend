import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint';
// npm install @types/node --save-dev安装ts声明
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      //  failOnError: false
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx', 'src/**/*.ts'],
      //  exclue: ['./node_modules/**'],
      cache: false
    })
  ],
  // 路径别名配置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
