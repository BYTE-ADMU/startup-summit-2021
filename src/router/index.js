// import { createRouter, createWebHistory } from 'vue-router'
// import About from '../views/About.vue'


// const routes = [
// //   {
// //     path: '/',
// //     name: 'Home',
// //     component: Home
// //   },
//   {
//     path: '/about',
//     name: 'About',
//     component: About
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes, 
//   scrollBehavior() {
//     // always scroll to top
//     return { top: 0 }
//   },
// })

// export default router

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./views/About.vue")
    },
    {
      path: "/about",
      component: () => import("./views/About.vue")
    },
    // {
    //   path: "*",
    //   component: () => import("./pages/NotFound.vue")
    // }
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 60 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


export default router;