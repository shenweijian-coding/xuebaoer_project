import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/login'
import { getToken } from '../utils/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    avatar: '',
    name: ''
  },
  mutations: {
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  getters: {
    avatar: state => state.avatar,
    name: state => state.name
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
    },
    getUserInfo ({ commit }) {
      console.log('开始设置state')
      return new Promise((resolve, reject) => {
        const avatar = getToken('avatar')
        console.log(avatar)
        const name = getToken('name')
        commit('SET_AVATAR', avatar)
        commit('SET_NAME', name)
        resolve({})
      })
    }
  }
})
export default store
