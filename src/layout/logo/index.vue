<template >
    <div class="logo">
        <!-- <Plus></Plus> -->

        <!-- <img src="/1.png" alt="" class="pic"> -->
        <img :src="setting.logo" alt="" class="pic">
        <p>{{ setting.title }}</p>
    </div>
</template>
<script setup lang="ts">

// 动态设置变量，方便使用者调用
import setting from "@/settings";


</script>
<style scoped lang="scss" >
.logo{
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
