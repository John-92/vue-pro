//统一管理用户相关的接口
import request from '@/utils/requests'


//引入接口类型
import type {
    LoginParamsType,
    LoginResponseModel,
    UserInfoResponseModel,
  } from './types'

//统一管理用户相关的接口
//通过枚举类型来表示常量
enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
  }

  
  
//登录接口方法
export const requestLogin = (data: LoginParamsType) =>
    request.post<string, LoginResponseModel>(API.LOGIN_URL, data)
   
  //获取用户信息接口方法
  export const requestUserInfo = () =>
    request.get<any, UserInfoResponseModel>(API.USERINFO_URL)
 