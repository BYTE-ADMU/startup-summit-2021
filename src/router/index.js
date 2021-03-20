import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Startups from '../views/Startup.vue'
import Partners from '../views/PartnersPage.vue'
import FAQs from '../views/FAQ.vue'
import StartupTemplate from '../components/StartupTemplate.vue'
// import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/startups',
    name: 'Startups',
    component: Startups
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/faqs',
    name: 'FAQs',
    component: FAQs
  },
  {
    path: '/startups/:name',
    name: 'Startup',
    component: StartupTemplate
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes, 
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
