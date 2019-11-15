import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
//导入axios拦截器
import interceptor from './http-interceptor'

Vue.config.productionTip = false


//引入axios
Vue.prototype.$http = axios;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
