<template>
  <!-- svg:图标外层容器节点，内部需要与use标签结合使用 -->
  <svg :style="{ width, height }">
    <!-- 设置图标的大小 -->
    <!-- xlink:href="#icon-svg文件名" 指定用哪个图标 -->
    <!-- use标签的fill属性可以设置图标的颜色 -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
// 接收父组件传递过来的参数
defineProps({
  // xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用的图标的名字
  name: String,
  // 接收父组件传递的颜色
  color: {
    type: String,
    default: '',
  },
  // 接收父组件传递的尺寸
  width: {
    type: String,
    default: '18px',
  },
  height: {
    type: String,
    default: '18px',
  },
})
</script>

<style scoped></style>
