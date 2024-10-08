import { createRouter, createWebHistory } from 'vue-router'
import {UseAuthStore} from '@/stores/Auth'
import HomeView from '../views/HomeView.vue'
import NewsDetails from '../components/NewsDetails.vue'
import Profile from '../components/Profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/career',
      name: 'career',
      component: () => import('../views/CareerView.vue')
    },
    {
      path: '/NewsDetails/:_id',
      name: 'NewsDetails',
      component: NewsDetails
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue'),


    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../components/registration.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component:Profile ,
      meta: { requiresAuth: true },
      beforeEnter: (to, from, next) => {
        // store called inside route
        const store = UseAuthStore()
        const isAuthenticated = store.Loginuser;
        // wihout login profile route e inter kora jabe na
        if (to.meta.requiresAuth && !isAuthenticated) {
          next('/login'); // Redirect to login if not authenticated
        }
        else {
          next(); // Proceed to route

        }

      }

    },
  ]
})

export default router
