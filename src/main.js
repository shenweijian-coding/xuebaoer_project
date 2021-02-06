import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './style/iconfont.css'
import request from './utils/request'
import store from './store'
import {
  Menu,
  MenuItem,
  Dialog,
  Header,
  Input,
  Button,
  Row,
  Col,
  Message,
  Icon,
  Carousel,
  CarouselItem
} from 'element-ui'
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)
Vue.use(Header)
Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 加入检测代码  防止别人查看数据
// setInterval(function () {
//   check()
// }, 4000)
// var check = function () {
//   function doCheck (a) {
//     if (('' + a / a).length !== 1 || a % 20 === 0) {
//       (function () { }
//         .constructor('debugger')())
//     } else {
//       (function () { }
//         .constructor('debugger')())
//     }
//     doCheck(++a)
//   }
//   try {
//     doCheck(0)
//   } catch (err) { }
// }
// check()
