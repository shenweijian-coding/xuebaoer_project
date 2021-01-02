import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/login'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: 'yuanxiaoshen'
  },
  mutations: {

  },
  actions: {
    // 登录
    login () {
      console.log('login调用了')
      return new Promise((resolve, reject) => {
        login().then(res => {
          console.log(res)
          resolve(res)
        })
      })
    }
  }
})
export default store
