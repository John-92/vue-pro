
//创建用户相关的小仓库
import { defineStore } from "pinia";


import { LoginParamsType,LoginResponseModel } from "@/api/user/types";
import { requestLogin } from "@/api/user";

import { SET_TOKEN,GET_TOKEN } from "@/utils/token";
import { constantRouter } from "@/router/router";

import { UserState } from "./types/types";//指定小仓库的数据类型
let useUserStore=defineStore('User',{

    // 数据响应
    state:():UserState=>{
        // return localStorage.getItem("TOKEN");
        
      
        return {
            // token:'',//token是用户的唯一标识，
            // token:localStorage.getItem("TOKEN")
            token:GET_TOKEN(), //注意GET_TOKEN定义必须是return,
            menuRouters:constantRouter
            
        };  
    },
//  异步逻辑的地方
    actions:{
        //处理用户登录的方法 
        async userLogin(data:LoginParamsType){
            //如果不用await响应的只是Promise对象，调用的话自动会将响应请求进行解读？
            
            let result:LoginResponseModel=await requestLogin(data)
            console.log(123,data,result)
            if(result.code == 200){
                //如果响应code是200，则将token存储
                // this.token=result.data.token //上面这种情况不能Type 'string | undefined' is not assignable to type 'string | null'
                this.token=(result.data.token as string) //保证在字符串的情况下才会赋值给token
                console.log(this.token)
//                必须持久化 1.在刷新等状态下都会用到token
// 2.pinia、vuex存储都是借助js对象，而后者并不是持久化的
                // localStorage.setItem("TOKEN",(result.data.token as string))
                SET_TOKEN((result.data.token as string))
                //能保证当前async函数响应一个成功的promise
               return 'ok'

            }else{
                return Promise.reject(new Error(result.data.message))
            }
        }

    },
    getters:{

    }
})

export default useUserStore;