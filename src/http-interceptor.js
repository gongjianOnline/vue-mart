/**
 * 内容:axios拦截器(全局)
 * 作用:每次和后端后端交互不用每个接口都是带token
 * 解释:拦截axios所有的HTTP请求,预先放入token请求头
 * 注意:需要在main.js里面导入
 */
import axios from "axios"
import store from "./store/index"
import router from "./router";
/**请求的拦截器 */
axios.interceptors.request.use(config => {
    if (store.state.token) {
      // 若存在令牌，则放入请求头
      config.headers.token = store.state.token;
    }
    return config;
});

/**响应的拦截器 */
/**
 * 作用:预先处理相应数据
 */
axios.interceptors.response.use(
    (response) => {
        //如果code是101,说明用户已注销或token已过期
        //此时需要重新登录,并且清楚本地的缓存信息
        if(response.status == 200){
            let data= response.data;
            //data.code == -1 用来区分是否为退出状态
            if(data.code == -1){
                //清空缓存
                store.commit("setToken","");
                localStorage.removeItem('token');
                //跳转值登录页
                if(router.currentRoute.meta.auth){
                    router.push({
                        path:'/login',
                        //获取当前的路由地址
                        query:{
                            redirect:router.currentRoute.path
                        }
                    })
                }
                
            }
        };
        return response;
    },
    err=>{
        //如果未授权
        if(err.response.status === 401){
            //清空缓存
            store.commit("setToken","");
            localStorage.removeItem("token");
            if(router.currentRoute.meta.auth){
                router.push({
                    path:"/login",
                    query:{
                        redirect:router.currentRoute.path
                    }
                })
            }
        }
    }
);


