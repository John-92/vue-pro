<template>
 
        
        <div class="tabbar-right">

            <el-button size="small" icon="Refresh" circle @click="refreshCom"/>
            <el-button size="small" icon="FullScreen" circle @click="fullscreen"/>
            <el-button size="small" icon="Operation" circle />
            <img :src="UserStore.avatar" style="width: 20px; height: 20px; margin:10px,10px">
           
            <el-dropdown style="margin-left:10px">

                <span class="el-dropdown-link">
                {{ UserStore.username }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                    
                    </el-dropdown-menu>
                </template>
        </el-dropdown>
        </div>
  
  
</template>
<script setup lang="ts" name="setting">



import  useLayoutSettingStore  from "@/store/settings";
import  useUserStore  from "@/store/modules/user";
import { useRouter } from "vue-router";
let LayoutSettingStore=useLayoutSettingStore()


let UserStore=useUserStore();
let $router=useRouter()



// 属性组件的功能
const refreshCom=()=>{
    // console.log(LayoutSettingStore.refresh)
    LayoutSettingStore.refresh=!LayoutSettingStore.refresh
    console.log(LayoutSettingStore.refresh)
}


//全屏模式的切换
const fullscreen=()=>{
    //获取谷歌的全屏标记
    let screenflag=document.fullscreenElement
    console.log("screenflag",screenflag)

    if (!screenflag){ //如果关闭，则打开
        // screenflag
        document.documentElement.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
}

const logout=()=>{
    //1.清空数据
    UserStore.userLogout()
    //2.重定向到登陆页面
    $router.push({path:'/login'})

}

</script>
<style  lang="scss">
.tabbar{
    width: 100%;
    height: 100%;
    // 内部组件平行放置
    display: flex; 
    // 从左到右均匀放置
    justify-content: space-between;
    background: pink;
    background-image: linear-gradient(to right,yellow,red); //渐变的颜色

    .tabbar-left{
        display: flex;
        align-items:center;//垂直居中
        margin-left: 20px;
    }

    .tabbar-right{
        display: flex;
        align-items:center;//垂直居中
        margin-left: 20px;
    }
}

    
</style>