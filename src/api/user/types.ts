//登录接口需要携带参数ts类型
export interface LoginParamsType {
    username: string
    password: string
  }
  
  interface dataType {//数据类型既可以是包含token,又可以包含message
    token?: string
    message?: string
  }

//登录接口返回数据ts类型
export interface LoginResponseModel {
  code: number
  data: dataType
}
 
interface userInfoType {
    userId: number
    avatar: string
    username: string
    desc: string
    roles: string[]
    buttons: string[]
    routes: string[]
    token: string
  }

  
interface user {
    checkUser: userInfoType
  }
   
  export interface UserInfoResponseModel {
    code: number
    data: user
  }  
