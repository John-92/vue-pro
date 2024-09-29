import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from "path";

import { viteMockServe } from "vite-plugin-mock";


// https://vitejs.dev/config/
export default defineConfig(({ command }) =>{ //command用于检测环境
  return{ 
  plugins: [vue(),

    // viteMockServe(),
    viteMockServe({
      mockPath: "src/mock",//注意不是根路径（./mock),而是src/mock
      // enable: command === "serve", //保证开发阶段可以使用mock接口
      enable: command === "serve", //保证开发阶段可以使用mock接口,只有两个值 serve与build
      logger: false,
    }),

  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets')
    },
  },
  // scss全局变量配置
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";',
      },
    },
  },
}

})