// import type { App } from 'vue';
// 引入 login.ts

import  {constantRouter}  from "./router";
import { createRouter, createWebHashHistory,
	RouteRecordRaw,
    _RouteRecordBase } from 'vue-router';
import Login from "@/views/login/index.vue";

// export const publicRoutes: Array<RouteRecordRaw> = [
// 	// ...LoginRouter,
// 	// ...TestRouter,
// 	history:createWebHashHistory()
// 	constantRouter,
	
	
 
// ];

// import { RouteRecordRaw } from 'vue-router'
 
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/views/login/index.vue'),
//     meta: {
//       requiresAuth: true
//     }
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('@/views/404/index.vue')
//   }
// ]

const router = createRouter({
	history: createWebHashHistory(),
	 // 配置路由规则
	 routes:constantRouter,
	// routes:[
   
	// 	{
	// 		path: '/login',
	// 		name: 'login',//菜单权限需要进行匹配追加，可以通过命名空间去定位
	// 		component: () => import('@/views/login/index.vue')//路由的懒加载
	// 		// component: Login//路由的懒加载
	// 	},
	// 	{
	// 		path: '/404',
	// 		name: '404',//菜单权限需要进行匹配追加，可以通过命名空间去定位
	// 		component: () => import('@/views/404/index.vue')//路由的懒加载
	// 		// component: '@/views/404/index.vue'//路由的懒加载
	// 	},
	// 	{
	// 		path: '/',
	// 		name: 'layout',//菜单权限需要进行匹配追加，可以通过命名空间去定位
	// 		component: () => import('@/layout/index.vue')//路由的懒加载
	// 		// component: Login//路由的懒加载
	// 	},
	// 	{
	// 		path: '/:pathMatch(.*)*',
	// 		name: 'Any',//菜单权限需要进行匹配追加，可以通过命名空间去定位
	// 		component: () => import('@/views/404/index.vue')//路由的懒加载
	// 		// component: Login//路由的懒加载
	// 	},
	 
		
	// ],
	scrollBehavior(){ //滚动行为
		return {
			left:0,
			top:0
		}
	}
});

export default router;

// /* 初始化路由表 */
// export function resetRouter() {
// 	router.getRoutes().forEach((route) => {
// 		const { name } = route;
// 		if (name) {
// 			router.hasRoute(name) && router.removeRoute(name);
// 		}
// 	});
// }
// /* 导出 setupRouter */
// export const setupRouter = (app: App<Element>) => {
// 	app.use(router);
// };

