<template >
    <div class="breadcrumb">
        <!-- icon组件一定要套在el-icon中 -->
        <el-icon style="margin-right: 10px;" @click="changeIcon"> 
            <!-- <Expand></Expand> -->
            <component :is="LayoutSettingStore.fold?'Expand':'Fold'"/>
        </el-icon>
        <el-breadcrumb separator-icon="ArrowRight">

            <el-breadcrumb-item v-for="(item,index) in $route.matched" 
               :key="index" 
               :to="item.path" v-show="item.meta.title" >
     <!-- 通过v-show可以对v-for遍历的元素进行判断，只有item.meta.title有值的情况下会展示这个面包屑 -->

                <!-- 动态添加组件 -->
                <el-icon vertical-alin="middle">
                     <component :is="item.meta.icon"></component>
                     <!-- <component is="Plus"></component> -->
                  </el-icon>
                        <span>{{item.meta.title}}</span>


            </el-breadcrumb-item>

            <!-- <el-breadcrumb-item :to="{ path: '/product/sku' }">sku</el-breadcrumb-item>
            <el-breadcrumb-item>
            <a href="/product/spu">spu管理</a> 
            </el-breadcrumb-item> -->
        </el-breadcrumb>
    </div>
</template>
<script setup lang="ts">

// 动态设置变量，方便使用者调用
import setting from "@/settings";
import { ref } from "vue";
import useLayoutSettingStore from "@/store/settings";
import { useRoute } from "vue-router";
let LayoutSettingStore=useLayoutSettingStore()

let $route=useRoute()//可以获取当前路由的属性
console.log($route.matched)

// let iconTag=ref(useLayoutSettingStore)
const changeIcon=()=>{
    // iconTag.value = !(iconTag.value)
    LayoutSettingStore.fold=!LayoutSettingStore.fold
    // return 
}


</script>
<style scoped lang="scss" >
.breadcrumb{
    width: 100%;
    // width: 10vh;
    height: $base-tabbar-height;
    // height: 2px;
    display: flex;
    align-items: center;
    padding: 10px;
    img{
        width: 150px;
        height: 150px;
    }
    p{
        font-size: $base-logo-title-font-size;
        margin-left: 5px;
    }
}

    
</style>
