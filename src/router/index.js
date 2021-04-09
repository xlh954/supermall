import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const category = () => import('views/category/category')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/profile',
    component: profile
  }
]

const router = new VueRouter({
  routes,
  mode: history
})

export default router