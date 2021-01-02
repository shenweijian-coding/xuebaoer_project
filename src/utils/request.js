import { getToken } from '../utils/auth'
import store from '../store/index'
const axios = require('axios')

var instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 60000,
  withCredentials: true
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  if (store.state.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers['X-Token'] = getToken()
  }
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  const res = response.data
  if (res) {
    return Promise.resolve(res)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
