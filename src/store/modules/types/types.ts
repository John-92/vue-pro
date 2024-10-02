import type { RouteRecordRaw } from "vue-router";

// 定义小仓库的数据类型
export interface UserState{
    //没有登录时为null,登录时为token的string类型
    token:string|null; 
    menuRouters:RouteRecordRaw[];
    username:string,
    avatar:string,
}