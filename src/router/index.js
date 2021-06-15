import Vue from 'vue'
import VueRouter from 'vue-router'
import container from '../components/container.vue'
import navbar from '../components/navbar.vue'
import carrito from '../components/carrito.vue'
import login from '../components/login.vue'
import admin from '../components/admin.vue'
import dardealta from '../components/dardealta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/container',
    name: 'container',
    component: container
  },

  {
    path: '/navbar',
    name: 'navbar',
    component: navbar
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/carrito',
    name: 'carrito',
    component: carrito
  },

  {
    path: '/admin',
    name: 'admin',
    component: admin
  },

  {
    path: '/dardealta',
    name: 'dardealta',
    component: dardealta
  },
]

const router = new VueRouter({
  routes
})

export default router
