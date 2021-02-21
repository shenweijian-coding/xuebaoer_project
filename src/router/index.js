import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Matter = () => import('../views/Matter')
const My = () => import('@/views/My')
const Help = () => import('@/views/Help')
const About = () => import('@/views/About')
const Invite = () => import('@/views/Invite')
const Pay = () => import('@/views/Pay')
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
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/my',
    name: 'my',
    component: My
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/invite',
    name: 'invite',
    component: Invite
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
