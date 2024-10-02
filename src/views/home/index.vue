<template >
    <div>
        <h1>我是一级路由展示 home</h1>
    </div>
</template>
<script setup lang="ts">

import { onMounted } from "vue";
import useUserStore from "@/store/modules/user";

let userStore=useUserStore()
//首页挂载后获取用户信息
onMounted(()=>{
    userStore.userInfo()
})
</script>
<style >
    
</style> 