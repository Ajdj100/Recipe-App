import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/loginPage.vue')
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/mainPage.vue'),
      children: [
        {
          path: 'home',
          component: () => import('../views/homePage.vue')
        }, 
        {
          path: 'following',
          component: () => import('../views/followingPage.vue')
        },
      ]
    }
  ]
})

export default router
