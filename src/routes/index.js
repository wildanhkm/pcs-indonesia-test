import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/notifications', name: 'Notifications', component: Notifications },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router