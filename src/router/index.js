import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
