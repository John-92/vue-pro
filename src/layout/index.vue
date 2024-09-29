<template >
    <div class="layout_container">
        <h1>我是一级路由展示 layout</h1>
       
        <div class="layout_slidder">
            <Logo></Logo>
        
            <!-- 滚动组件 -->

            <el-scrollbar class="scrollbar">
                 <!-- 菜单组件 -->
                <el-menu background-color="red" :collapse=true>
                    <!-- 将动态路由传给Menu组件 ，以父组件的形式传给子组件-->
                    menu<Menu :menuList="userStore.menuRouters"></Menu>
                </el-menu>
                

            </el-scrollbar>
            
        </div>
        <div class="layout_tabbar">456</div>
        <div class="layout_main">一级路由展示的内容

            <Main></Main>
        </div>
    </div>
</template>
<script setup lang="ts">

import Logo from "@/layout/logo/index.vue";
import Menu from "@/layout/menu/index.vue";
import Main from "@/layout/main/index.vue";

// 获取小仓库的用户数据
import useUserStore from "@/store/modules/user";

let userStore=useUserStore()
// console.log("userStore---------->",userStore)

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
}
   .layout_tabbar{
    position: fixed;
    width: calc(100% - $base_menu_width);
    width: 80%;
    height: $base-tabbar-height;
    background: cyan;
    left: $base_menu_width;//和最左边的距离
    top: 0px;
   }

.layout_main{
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    background: green;
}

}

    
</style>
