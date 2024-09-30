<template>
    <div class="tabbar">
        <!-- <h1>我是TABBAR组件</h1> -->
        <div class="tabbar-left">
           

            <Breadcrumb></Breadcrumb>


        </div>
        <div class="tabbar-right">

            <el-button size="small" icon="Refresh" circle />
            <el-button size="small" icon="FullScreen" circle />
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
        </el-dropdown>
        </div>
  
    </div>
</template>
<script setup lang="ts">

import Breadcrumb from "@/layout/breadcrumb/index.vue";

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