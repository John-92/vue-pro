
import { defineStore } from "pinia";

let useLayoutSettingStore=defineStore('SettingStore',{
    state:()=> {
        return{
            fold:false,//用户控制的菜单是折叠还是收起
        }
    },
})

export default useLayoutSettingStore;