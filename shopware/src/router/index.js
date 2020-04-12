import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Products from '../views/products/Products'
import Product from '../views/products/Product'
import Register from '../views/Register'
import Login from '../views/Login'
import Manage from '../views/Manage'
import Order from '../views/Order'
import SavedOrders from '../views/SavedOrders'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/computers',
    name: 'Computers',
    component: Products
  },
  {
    path: '/smartphones',
    name: 'Smartphones',
    component: Products
  },
  {
    path: '/others',
    name: 'Others',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',
    name: 'SavedOrders',
    component: SavedOrders,
    meta: { authorize: [] }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    props: true,
    meta: { authorize: [] }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  const { authorize } = to.meta
  const currentUserToken = sessionStorage.getItem('currentUserToken')

  if(authorize) {
    if(!currentUserToken) {
      return next({ path: '/login', query: { returnUrl: to.path } })
    }
  }

  next()
})

export default router
