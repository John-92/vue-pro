// 引入项目中的全部的全局组件
import { App, Component } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'
// import Category from '@/components/Category/index.vue'
// 引入element-plus提供全部的图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 创建一个全局组件的对象
const allGlobalComponent: { [name: string]: Component } = {
  SvgIcon,
  Pagination,
  // Category,
}
// 对外暴露一个插件对象
export default {
  // 插件对象必须有一个install方法，且接收一个app对象作为参数
  install(app: App) {
    // 注册项目的全部全局组件
    Object.keys(allGlobalComponent).forEach((item: string) => {
      app.component(item, allGlobalComponent[item])
    })
    // 将element-plus的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      // console.log("component",key,component)
      app.component(key, component)
    }
  },
}