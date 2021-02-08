import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Matter from '../views/Matter'
import My from '@/views/My'
import Help from '@/views/Help'
import About from '@/views/About'
import Invite from '@/views/Invite'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
