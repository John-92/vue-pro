<template>
    <div class="tabbar">
        <!-- <h1>我是TABBAR组件</h1> -->
        <div class="tabbar-left">
           

            <Breadcrumb></Breadcrumb>


        </div>
        <div class="tabbar-right">

            <Setting></Setting>

            <!-- <el-button size="small" icon="Refresh" circle @click="refreshCom"/>
            <el-button size="small" icon="FullScreen" circle @click="fullscreen"/>
            <el-button size="small" icon="Operation" circle />
           
            <el-dropdown style="margin-left:10px">
                <span class="el-dropdown-link">
                登录状态
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    
                    </el-dropdown-menu>
                </template>
        </el-dropdown> -->
        </div>
  
    </div>
</template>
<script setup lang="ts">

import Breadcrumb from "@/layout/tabbar/breadcrumb/index.vue";
import Setting from "@/layout/tabbar/setting/index.vue";

import  useLayoutSettingStore  from "@/store/settings";
let LayoutSettingStore=useLayoutSettingStore()

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