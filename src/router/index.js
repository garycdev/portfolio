import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/null_Home.vue'),
  },
  {
    path: '/es',
    name: 'es',
    component: () => import('@/pages/es_Home.vue'),
    meta: {
      locale: 'es'
    }
  },
  {
    path: '/en',
    name: 'en',
    component: () => import('@/pages/en_Home.vue'),
    meta: {
      locale: 'en'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
