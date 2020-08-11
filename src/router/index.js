import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/Landing.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product')
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductDetail')
  },
  {
    path: '/shoppingCartList',
    name: 'ShoppingCartList',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCartList')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
