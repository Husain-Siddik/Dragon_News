import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsDetails from '../components/NewsDetails.vue'
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
      path:'/career',
      name : 'career',
      component:()=> import ('../views/CareerView.vue')  
    },
    {
       path :'/NewsDetails/:_id',
       name :'NewsDetails',
       component:NewsDetails
    },
    {
      path : '/login',
      name :'login',
    component:()=>import('../components/Login.vue')
    },
    {
      path:'/registration',
      name :'registration',
      component:()=>import('../components/registration.vue')
    }
  ]
})

export default router
