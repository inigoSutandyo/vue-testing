import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router