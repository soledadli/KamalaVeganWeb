import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import KontaktView from '@/views/KontaktView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: KontaktView,
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }, // Catch-all (but still allows static files)
  ],
})

export default router
