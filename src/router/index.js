import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import InteractiveCV from '../views/InteractiveCV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv/interactive',
    name: 'cv-interactive',
    component: InteractiveCV
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
