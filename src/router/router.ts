

import { title } from 'process'
import { RouteRecordRaw } from 'vue-router'
//常量路由
// export  const constantRouter = [
   
// 	{
// 		path: '/login',
// 		name: 'login',//菜单权限需要进行匹配追加，可以通过命名空间去定位
// 		// component: () => import('@/views/login/index.vue')//路由的懒加载
// 		component: '@/views/login/index.vue'//路由的懒加载
// 	},
// 	{
// 		path: '/404',
// 		name: '404',//菜单权限需要进行匹配追加，可以通过命名空间去定位
// 		// component: () => import('@/views/404/index.vue')//路由的懒加载
// 		component: '@/views/404/index.vue'//路由的懒加载
// 	}
 
	
// ]

export const constantRouter: Array<RouteRecordRaw> = [
    
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layout/index.vue'),
        meta: {
          requiresAuth: true,
          title:'主目录',
          hidden:false,
          icon:"Collection"
        },
        children:[
            {
                path: '/home',
                name: '首页',
                component: () => import('@/views/home/index.vue'),
                meta: {
                  requiresAuth: true,
                  title:'首页',
                  hidden:false,
                  icon:'SuccessFilled'
                }
            },
            {
                path: '/home22',
                name: '首页222',
                component: () => import('@/views/home/index.vue'),
                meta: {
                  requiresAuth: true,
                  title:'首页22',
                  hidden:false,
                  icon:'ChatDotRound'
                }
            }

        ]
      },

      {
        		path: '/login',
        		name: 'login',//菜单权限需要进行匹配追加，可以通过命名空间去定位
        		// component: () => import('@/views/login/index.vue')//路由的懒加载
        		component: () => import('@/views/login/index.vue'),//路由的懒加载
                meta:{
                    title:'登录',
                    hidden:true,
                    icon:'Flag'
                }
        	},

           
        {
            path: '/screen',
            name: 'Screen',//菜单权限需要进行匹配追加，可以通过命名空间去定位
            component: () => import('@/views/screen/index.vue'),//路由的懒加载
            // component: Login//路由的懒加载
            meta:{
                title:'大屏',
                hidden:false,
                icon:"DataAnalysis"
                // icon:"Plus"
            }

        },
        {
            path: '/acl',
            name: 'Acl',
            component: () => import('@/layout/index.vue'),
            meta: {
                requiresAuth: true,
                title:'权限管理',
                hidden:false,
                icon:"Lock"
            },
            children:[
                {
                    path: '/acl/user',
                    name: 'User',
                    component: () => import('@/views/acl/user/index.vue'),
                    meta: {
                        requiresAuth: true,
                        title:'用户管理',
                        hidden:false,
                        icon:'UserFilled'
                    }
                },
                {
                    path: '/permission',
                    name: 'Permission',
                    component: () => import('@/views/acl/permission/index.vue'),
                    meta: {
                        requiresAuth: true,
                        title:'权限管理',
                        hidden:false,
                        icon:'Flag'
                    }
                },
                {
                    path: '/role',
                    name: 'Role',
                    component: () => import('@/views/acl/user/index.vue'),
                    meta: {
                        requiresAuth: true,
                        title:'角色管理',
                        hidden:false,
                        icon:'Avatar'
                    }
                }
    
            ]
        },
        {
        path: '/product',
        name: 'Product',
        component: () => import('@/layout/index.vue'),
        meta: {
            requiresAuth: true,
            title:'商品管理',
            hidden:false,
            icon:"Promotion"
        },
        children:[
            {
                path: '/sku',
                name: 'Sku',
                component: () => import('@/views/product/sku/index.vue'),
                meta: {
                    requiresAuth: true,
                    title:'sku管理',
                    hidden:false,
                    icon:'ChromeFilled'
                }
            },
            {
                path: '/spu',
                name: 'Spu',
                component: () => import('@/views/product/spu/index.vue'),
                meta: {
                    requiresAuth: true,
                    title:'spu管理',
                    hidden:false,
                    icon:'Shop'
                }
            },
            {
                path: '/attr',
                name: 'Attr',
                component: () => import('@/views/product/attr/index.vue'),
                meta: {
                    requiresAuth: true,
                    title:'属性管理',
                    hidden:false,
                    icon:'ElemeFilled'
                }
            },
            {
                path: '/trademark',
                name: 'Trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                meta: {
                    requiresAuth: true,
                    title:'品牌管理',
                    hidden:false,
                    icon:'ShoppingCartFull'
                }
            }
        ]
        },
                    // {
                    //     path: '/:pathMatch(.*)*',
                    //     name: '任意路由',//菜单权限需要进行匹配追加，可以通过命名空间去定位
                    //     component: () => import('@/views/404/index.vue'),//路由的懒加载
                    //     // component: Login//路由的懒加载
                    //     meta:{
                    //         title:'任意',
                    //         hidden:true,
                    //         icon:'BrushFilled'
                    //     }

                    // },
                            {
                                path: '/404',
                                name: '404',//菜单权限需要进行匹配追加，可以通过命名空间去定位
                                component: () => import('@/views/404/index.vue'),//路由的懒加载
                                // component: Login//路由的懒加载
                                meta:{
                                    title:'404',
                                    hidden:true,
                                    icon:"FolderDelete"
                                }
        
                            },
                
                        
                      
       
  ]

