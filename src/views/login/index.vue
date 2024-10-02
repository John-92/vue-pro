<template>

    <div class="login_container">
        <!-- 栅格系统，默认是划分为12等分 el-row是一行 el-col是一列-->
        <el-row justify="center">
            <!-- :xs="0"表示浏览器的宽度小于768时，占位为0 -->
            <el-col :span="10" :xs="0"></el-col>
            <el-col :span="10" :xs="0"></el-col>
            <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
                <h1>Hello</h1>
                <h2>欢迎来到硅谷</h2>
                <!-- el的form表单 el-form的每个单元是el-form-item -->
                <!-- prop定义需要校验的字段 -->
                <el-form-item prop="username">
                    <!-- 在input组件中引入图标属性，因为是动态引入组件，需要将属性转换为动态获取 -->
                    <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password"
                        :show-password="true"></el-input> <!-- show-password是否显示切换密码图标 -->
                </el-form-item>
                <el-form-item>
                    <!-- el-button有个属性loading，为true时会转圈 -->
                    <el-button :loading="loading" class="login_btn" type="primary" size="default"
                        @click="login">登录</el-button>
                </el-form-item>


            </el-form>
        </el-row>
        lkk
    </div>

</template>
<script setup lang="ts">

// 引入图标
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from "@/store/modules/user";

import { ElNotification } from "element-plus"; //el的消息提示框

import { useRouter,useRoute } from "vue-router";
import { getTime } from "@/utils/time";

let userStore = useUserStore()

//加载的标记
let loading = ref(false)

let $router = useRouter()

let $route=useRoute()

let loginForms = ref()




// 收集表单数据
const loginForm = reactive({
    username: 'admin',
    password: '111111',
})

//为什么不是通过函数来定义触发事件，而是变量const
const login = async () => {

    // let result = loginForms.value.validate()

    await loginForms.value.validate() //await只接受Promise成功的结果
    // console.log("result------------>",result)

    //ref响应数据一定要通过vaLue获取
    loading.value = true
    console.log(111)
    // 通知仓库发送请求----为什么是仓库
    // 请求成功则返回首页，失败则弹出提示

    try {
        // 保证登录成功
        await userStore.userLogin(loginForm)
        //获取请求中携带的redirect参数，如果则会调整到该页面
        let redirect:any=$route.query.redirect
        // 编程式导航调整到首页
        $router.push({path:redirect||'/'});
        ElNotification({ //成功提示信息
            type: "success",
            message: "登录成功",
            title: `HI,${getTime()}好`
        })
        loading.value = false

    } catch (error) {
        loading.value = false
        console.log("error------->")
        ElNotification({ //提示信息
            type: "error",
            // message:error.message //因为error没有定义数据类型，会报错

            message: (error as Error).message //断言---直接定义变量的类型？
        })

    }

    // console.log("login")

}


const validatorUserName=(rule:any,value:any,callback:any)=>{
//  rule为校验对象
// value是表单元素文本内容
// callback是回调数据，如果符合规则则放行，否则是注入错误的信息callback(new Error('用户名长度为7-16位且不能全为数字'))

// 函数接收三个参数 rule:校验规则对象 value:表单元素的文本内容
  // callback:校验成功使用callback函数放行,校验失败使用callback函数注入错误信息
  /* if (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value,
    ) ||
    /^[\w-]{4,16}$/.test(value)
  ) {
    // 验证通过
    callback()
  } else {
    // 验证不通过 传递错误信息
    callback(new Error('请输入正确的邮箱或至少四位用户名'))
  } */
  // 用户名|昵称,用户名长度为7-16位且不能全为数字
  if (value.length >= 7 && value.length <= 16) callback()
  else if (value == 'admin') callback()
  else callback(new Error('用户名长度为7-16位且不能全为数字'))
}


const validatorPassword = (_rule: any, value: any, callback: any) => {
  /* if (/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[a-zA-Z])\S*$/.test(value)) {
    callback()
  } else {
    callback(new Error('密码长度不能小于6位且包含字母和数字'))
  } */
  if (value.length >= 6 && value.length <= 20) callback()
  else callback(new Error('密码长度为6-20位'))
}

// 定义表单校验需要的配置对象(设置验证规则)
/* required:是否为必填,message:错误提示信息,trigger触发校验表单的方式 blur(失去焦点)/change(文本变化)
  min:文本长度至少多少位,max:文本长度至多多少位*/
const rules = {
    username: [
        // {required: true,message: '用户名不能为空哦！',trigger: 'blur',},
        // { required: true, min: 5, max: 10, message: '用户名长度为5-10位', trigger: 'change', },
        // 自定义校验规则
        { trigger: 'change', validator: validatorUserName },
    ],
    password: [
        // { required: true, message: '密码不能为空哦！', trigger: 'blur' },
        // { min: 6, message: '密码长度至少6位', trigger: 'change' },
        { trigger: 'change', validator: validatorPassword },
    ],
}

</script>
<style lang="scss">
.login_container {
    /* width: 100%; */
    //100%跟浏览器一样宽，但实际上没有
    width: 70pc;
    height: 100vh; //视口高度
    background-image: url('@/assets/images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.login_form {
    width: 30%;
    top: 20ch;
    position: relative; //相对位置
    // background: red;
    background-image: url('@/assets/images/login_form.png');
    background-size: cover;
    padding: 40px;

    h1 {
        color: white;
        font-size: 40px;
        margin: 20px 20px;
    }

    h2 {
        color: white;
        font-size: 20px;
        margin: 20px 0px; //到上一行和下一行的间距是20px,到左右边缘是0px
    }

    .login_btn {
        width: 100%;

    }


}
</style>