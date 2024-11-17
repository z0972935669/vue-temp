import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/aboutcomposition',
    name: 'about',
    component: () => import('../views/AboutComposition.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
