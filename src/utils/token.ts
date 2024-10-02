// 定义token的操作方法

export const SET_TOKEN = (token: string) => {
    localStorage.setItem("TOKEN", token)
}

export const GET_TOKEN = () => {
    //必须加return,否则调用方只是获取到void
    //  localStorage.getItem("TOKEN")
    return localStorage.getItem("TOKEN")
}

export const REMOVE_TOKEN=()=>{
    //将本地仓库的TOKEN数据清除
    localStorage.removeItem('TOKEN')
}