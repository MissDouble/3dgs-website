import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import UploadView from '../views/UploadView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailView from '../views/BlogDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { path: '/upload', component: UploadView },
  { path: '/blog', component: BlogView },
  { path: '/blog/:id', component: BlogDetailView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router