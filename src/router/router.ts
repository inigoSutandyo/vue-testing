import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import LoginView from '../views/login/LoginView.vue'
import RegisterView from '../views/register/RegisterView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: AboutView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router