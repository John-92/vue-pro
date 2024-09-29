<template >

 <!-- 路由组件的出口位置 添加过渡动画-->
 <router-view v-slot="{ Component }">
    <!-- transition的name属性用于 name-enter...使用 -->
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <!-- 使用 v-if 控制main组件的卸载与挂载 -->
        <component :is="Component" v-if="flag" />
    </transition>
  </router-view>

</template>
<script setup lang="ts">

let flag = ref(true)
import { nextTick, ref, watch } from 'vue'
</script>
<style scoped lang="scss" >

    /* 设置路由组件切换的过渡动画 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0; //刚开始是透明
  transform: rotate(0deg); //rotate(0deg)旋转的初始角度 scale(0)
}
.fade-enter-active,
.fade-leave-active { //过渡动画 linear 线性过渡 
  transition: all 0.2s linear;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: rotate(360deg); ////rotate(360deg)旋转的最终角度360
}
</style>
