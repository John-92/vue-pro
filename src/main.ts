import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from "element-plus"; //完整引入elementplus
import  "element-plus/dist/index.css"; //样式需要另外引入
//@ts-ignore //忽略ts语法检测
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import  router  from "@/router/index";
import pinia from "./store";
import  "@/styles/index.scss";
import globalComponent from '@/components/index';

// import en from 'element-plus/es/locale/lang/en'
const app=createApp(App)
app.use(ElementPlus,{
    // locale: en,
    locale: zhCn,
  });
app.use(globalComponent);

  app.use(router);
  // import axios from "axios";
  // axios({
  //   url: "/api/user/login",
  //   method: "post",
  //   data: {
  //     username: "admin",
  //     password: "111111",
  //   },
  // });
console.log(import.meta.env)
app.use(pinia)

app.mount('#app')



