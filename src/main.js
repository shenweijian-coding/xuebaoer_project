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
  Icon
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

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
