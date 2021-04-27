import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需载入 Element Plus
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './' // 设置打包路径

  // server: {
  //   port: 4000, // 设置服务启动端口号
  //   open: true, // 设置服务启动时是否自动打开浏览器
  //   cors: true // 允许跨域

  //   // 设置代理，根据我们项目实际情况配置
  //   // proxy: {
  //   //   '/api': {
  //   //     target: 'http://xxx.xxx.xxx.xxx:8000',
  //   //     changeOrigin: true,
  //   //     secure: false,
  //   //     rewrite: (path) => path.replace('/api/', '/')
  //   //   }
  //   // }
  // }
})
