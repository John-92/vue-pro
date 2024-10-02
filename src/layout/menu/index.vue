<template >
   <!-- <p>{{menuList}}</p> -->
    <!-- 没有子路由的场景，展示路由的标题 -->
   <template v-for="(item,index) in menuList" :key="item.path">
      <template v-if="!item.children" >
        <el-menu-item  :index="item.path" v-if="!item.meta.hidden" @click="goRouter">

                   <el-icon>
                     <component :is="item.meta.icon"></component>
                  </el-icon>
            <template #title>
                
                  <!-- <span> 没有----{{ item.meta.icon }}</span> -->
                  
                  
                  <!-- <Plus>ss</Plus> -->
                    <span>{{item.meta.title}}</span>
            </template>
            </el-menu-item>
      </template>

           

            <!-- 只有一个子路由的场景，只展示里面的子路由 -->
            <template v-if="item.children && item.children.length==1">
                <el-menu-item  :index="item.children[0].path" v-if="!item.meta.hidden" @click="goRouter" >
                
                    <el-icon>
                    <!-- <Plus></Plus> icon组件：放置具体的组件-->
                     <component :is="item.children[0].meta.icon"></component>
                  </el-icon>
                
                    <template #title>
                   
                        <span>{{item.children[0].meta.title}}</span>
                </template>
            </el-menu-item>
            </template>
           
                <!-- 有多个子路由的场景，通过递归方式 -->
                
                <el-sub-menu v-if="item.children && item.children.length>1" :index="item.path">
                    <template #title>
                        <el-icon>
                     <component :is="item.meta.icon"></component>
                     <!-- <component is="Plus"></component> -->
                  </el-icon>
                        <span>{{item.meta.title}}</span>
                </template>

                <!-- 如果子路由是多级路由，理由递归可以不断使用 -->
                <Menu :menuList="item.children"></Menu> 

                </el-sub-menu>

   </template>
</template>
<script setup lang="ts" >
// import { Plus } from '@element-plus/icons-vue';
import { useRouter } from "vue-router";

let $router=useRouter()
defineProps(["menuList"])

//路由跳转
const goRouter=(vc:any)=>{
    console.log(vc.index)
    $router.push(vc.index)
}

</script>

<script lang="ts" name="Menu">
// 因为setup默认情况下无法直接定义组件名，可以通过vue2方式进行声明
export default{
    name:'Menu'
}
</script>

<style scoped lang="scss" >



      
</style>
