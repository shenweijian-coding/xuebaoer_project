import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/login'
import { getToken, removeToken } from '../utils/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // eslint-disable-next-line node/no-deprecated-api
    name: getToken('userName') || '',
    openId: getToken('userId') || '',
    isLoading: false
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    RESET: (state) => {
      state.userName = ''
      state.name = ''
    },
    SET_LOADING: (state, data) => {
      state.isLoading = data
    },
    SET_TIME: (state, disabledTime) => {
      state.disabledTime = disabledTime
    },
    SET_USERID: (state, data) => {
      state.userId = data
    }
  },
  getters: {
    name: state => state.name,
    isLoading: state => state.isLoading
  },
  actions: {
    // 登录
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        login(data).then(res => {
          resolve(res)
        })
      })
    },
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        const name = getToken('userName')
        const userId = getToken('userId')
        commit('SET_NAME', name)
        commit('SET_USERID', userId)
        resolve({})
      })
    },
    getInfo ({ commit }) {
      return new Promise((resolve, reject) => {

      })
    },
    takeOut ({ commit }) {
      commit('RESET')
      removeToken('userName')
      removeToken('userId')
    },
    changeLoadingState ({ commit }, data) {
      commit('SET_LOADING', data)
    }
  }
})
export default store
