<template >
    <div class="layout_container">
        <h1>我是一级路由展示 layout</h1>
       
        <div class="layout_slidder" :class="{fold:LayoutSettingStore.fold?true:false}">
            <Logo></Logo>
        
            <!-- 滚动组件 -->

            <el-scrollbar class="scrollbar" > 
                <!-- 菜单组件 -->
                <!-- :collapse=true ，也可以通过collapse表示折叠，默认是非折叠 -->
                 
            <el-menu :default-active="$route.path" background-color="red"  :collapse="LayoutSettingStore.fold">
                    <!-- 将动态路由传给Menu组件 ，以父组件的形式传给子组件-->
                    menu<Menu :menuList="userStore.menuRouters"></Menu>
                </el-menu>
            </el-scrollbar>
            
        </div> 
        <!-- 让标签有动态的class属性，如果LayoutSettingStore.fold是true，标签会有这个class,否则没有 -->
        <div class="layout_tabbar" >
         <Tabbar></Tabbar>

        </div>
        <div class="layout_main" >一级路由展示的内容

            <Main></Main>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import Logo from "@/layout/logo/index.vue";
import Menu from "@/layout/menu/index.vue";
import Main from "@/layout/main/index.vue";
import Tabbar from "@/layout/tabbar/index.vue";
import { watch } from "vue";


// 获取小仓库的用户数据
import useUserStore from "@/store/modules/user";

let userStore=useUserStore()
// console.log("userStore---------->",userStore)

let $route=useRoute()
console.log($route.path)

import useLayoutSettingStore from "@/store/settings";
let LayoutSettingStore=useLayoutSettingStore()

//监视仓库内部数据的变化，如果发生变化，则说明已经刷新按钮
watch(()=>LayoutSettingStore.refresh,()=>{

    LayoutSettingStore

})

</script>
<style scoped lang="scss" >
// div{
//     width: 100% ;
// }
.layout_container{
    // position: relative;
    top: 0px;
    //  width: 100% ;
     width: 250vh ;
     height: 100vh;
     background: purple;

     .layout_slidder{
    width: $base_menu_width;
    // width: 100% ;
    // width: 100px;
    height: 100vh;
    background: $base-menu-background;
    
   
    
    

   .scrollbar{
    top:$base-tabbar-height;

    .el-menu{
        border-right:none //默认会带有右侧的边框，通过none可以消除
    }
   }
   &.fold {
        width: 50px;
    }


}
   .layout_tabbar{
    position: fixed;
    width: calc(100% - $base_menu_width);
    width: 80%;
    height: $base-tabbar-height;
    // background: cyan;
    left: $base_menu_width;//和最左边的距离
    top: 0px;
    color:blue;

   }

.layout_main{
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    // top: 20px;
    padding: 20px;
    // background: green;
}

}

    
</style>
