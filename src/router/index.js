import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/home-view.vue'
import OnDemand from '@/views/ondemand-view.vue'
import InStock from '@/views/stock-view.vue'
import SongView from '@/views/song-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/on-demand', name: 'pedidos', component: OnDemand },
    { path: '/in-stock', name: 'stock', component: InStock },
    { path: '/song/:id', name: 'song', component: SongView, props: true },
  ],
})

export default router
