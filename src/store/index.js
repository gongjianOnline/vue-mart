import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('token') || '',
  },
  mutations: {
    setToken(state,token){
      state.token = token
    }
  },
  actions: {
  },
  getters: {
    isLogin:(state)=>{
      //如果是空的就转换为booler值 false
      return !!state.token
    }
  }
})
