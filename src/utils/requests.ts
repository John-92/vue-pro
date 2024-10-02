import axios from 'axios';
import { errorCodeType } from '@/utils/error-code-type';
import { ElMessage, ElLoading } from 'element-plus';
import  useUserStore  from "@/store/modules/user";

// 创建axios实例
const service = axios.create({
    // 服务接口请求
    baseURL: import.meta.env.VITE_APP_BASE_API,
    // 超时设置
    timeout: 15000,
    headers:{'Content-Type':'application/json;charset=utf-8'}
})

let loading:any;
//正在请求的数量
let requestCount:number = 0
//显示loading
const showLoading = () => {
    if (requestCount === 0 && !loading) {
        //加载中显示样式可以自行修改
        loading = ElLoading.service({
            text: "拼命加载中，请稍后...",
            background: 'rgba(0, 0, 0, 0.7)',
            spinner: 'el-icon-loading',
        })
    }
    requestCount++;
}
//隐藏loading
const hideLoading = () => {
    requestCount--
    if (requestCount == 0) {
        loading.close()
    }
}

// 请求拦截
service.interceptors.request.use(config => {//config是请求对象
    showLoading()
    // 是否需要设置 token放在请求头
    // config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    let UserStore=useUserStore()
    // console.log("usertoken------->",UserStore.token,"config.headers.token--",config.headers.token)

    //在拦截器捕获token,保存到header中
    if(UserStore.token){
        
        config.headers.token=UserStore.token
    
    }
    
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        let url = config.url + '?';
        for (const propName of Object.keys(config.params)) {
            const value = config.params[propName];
            var part = encodeURIComponent(propName) + "=";
            if (value !== null && typeof(value) !== "undefined") {
                 // 对象处理
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        let params = propName + '[' + key + ']';
                        var subPart = encodeURIComponent(params) + "=";
                        url += subPart + encodeURIComponent(value[key]) + "&";
                    }
                } else {
                    url += part + encodeURIComponent(value) + "&";
                }
            }
        }
        url = url.slice(0, -1);
        config.params = {};
        config.url = url;
    }
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
    //正常响应
    (res:any) => {
        hideLoading()
        // 未设置状态码则默认成功状态
        const code = res.data['code'] || 200;
        // 获取错误信息
        const msg = errorCodeType(code) || res.data['msg'] || errorCodeType('default')
        console.log("response interceptors----")
        if(code === 200){
            return Promise.resolve(res.data)
        }else{
            console.log("code非200")
            // ElMessage.error("222",msg)
            // return Promise.reject(res.data)
            //在公共组件不直接进行操作，而是在后面的调用组件进行具体的操作
            return res.data // 简化返回的数据
        }
    },
    //异常响应
    error => {
        console.log('err----------------' + error)
        hideLoading()
        let { message } = error;

        // 方式一
    //    status=error.response.status()
    //     saitch(status){

    //     case 401:
    //        message ="xxx"
    //     }
        
        if (message == "Network Error") {
            message = "后端接口连接异常";
        }
        else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        }
        else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        ElMessage.error({
            message: message,
            duration: 5 * 1000
        })
        return Promise.reject(error)//通过reject去终结Promise对象
    }
)

export default service;

