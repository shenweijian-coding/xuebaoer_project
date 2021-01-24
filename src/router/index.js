import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Matter from '../views/Matter'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Home
  },
  {
    path: '/video',
    component: Home
  },
  {
    path: '/matter',
    name: 'Matter',
    component: Matter
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
