import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta:{
      /**表示该页面是否需要验证 */
      auth:true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**路由守卫 */
router.beforeEach((to,from,next)=>{
  console.log(to,from,next);
  if(to.meta.auth){
    //需要认证,则检查令牌
    if(store.state.tokem){ //已登录
      next()
    }else{
      //未登陆
      next({
        path:"/login",
        query:{redirect:to.path}
      })
    }
  }else{
    next()
  }

})


export default router
