/* eslint-disable no-undef */
import App from './App.vue'
import router from './router'
import './style/iconfont.css'
import request from './utils/request'
import store from './store'
import './style/resert.css'
Vue.config.productionTip = false
Vue.prototype.$request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 加入检测代码  防止别人查看数据
setInterval(function () {
  check()
}, 4000)
var check = function () {
  function doCheck (a) {
    if (('' + a / a).length !== 1 || a % 20 === 0) {
      (function () { }
        .constructor('debugger')())
    } else {
      (function () { }
        .constructor('debugger')())
    }
    doCheck(++a)
  }
  try {
    doCheck(0)
  } catch (err) { }
}
check()
