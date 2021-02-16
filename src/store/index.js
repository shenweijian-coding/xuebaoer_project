import Vue from 'vue'
import Vuex from 'vuex'
import { login } from '../api/login'
import { getToken, removeToken } from '../utils/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    avatar: getToken('avatar') || '',
    // eslint-disable-next-line node/no-deprecated-api
    name: getToken('name') || '',
    openId: getToken('openID') || '',
    isLoading: false,
    isShowNotice: true
  },
  mutations: {
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_NOTICE: (state, isShow) => {
      state.isShowNotice = isShow
    },
    RESET: (state) => {
      state.avatar = ''
      // eslint-disable-next-line node/no-deprecated-api
      state.name = ''
    },
    SET_LOADING: (state, data) => {
      state.isLoading = data
    },
    SET_TIME: (state, disabledTime) => {
      state.disabledTime = disabledTime
    },
    SET_OPENID: (state, data) => {
      state.openId = data
    }
  },
  getters: {
    avatar: state => state.avatar,
    name: state => state.name,
    isLoading: state => state.isLoading
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
      return new Promise((resolve, reject) => {
        const avatar = getToken('avatar')
        let name = getToken('name')
        const openId = getToken('openID')
        // eslint-disable-next-line node/no-deprecated-api
        name = new Buffer(name, 'base64').toString()
        commit('SET_AVATAR', avatar)
        commit('SET_NAME', name)
        commit('SET_OPENID', openId)
        resolve({})
      })
    },
    getInfo ({ commit }) {
      return new Promise((resolve, reject) => {

      })
    },
    takeOut ({ commit }) {
      debugger
      commit('RESET')
      removeToken('name')
      removeToken('avatar')
      removeToken('openID')
      removeToken('eventKey')
    },
    changeLoadingState ({ commit }, data) {
      commit('SET_LOADING', data)
    }
  }
})
export default store
