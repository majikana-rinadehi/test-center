import { createRouter, createWebHistory } from 'vue-router'
import TestCenter from '../components/TestCenter.vue'
import TestCenterSingle from '../components/TestCenterSingle.vue'

const routes = [
  {
    path: '/testCenter',
    name: 'TestCenter',
    component: TestCenter,
    meta: { requiresAuth: true} 
  },
  {
    path: '/testCenterSingle',
    name: 'TestCenterSingle',
    component: TestCenterSingle,
    meta: { requiresAuth: false} 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
