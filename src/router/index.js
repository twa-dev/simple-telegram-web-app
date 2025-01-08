import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import ImageAdjust from '../components/ImageAdjust.vue'

const routes = [
  {
    path: '/',
    // redirect: '/sexsex/'
  },
  {
    path: '/sexsex/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'image-adjust/:imageUrl/:description',
        name: 'ImageAdjust',
        component: ImageAdjust,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/sexsex/'),
  routes
})

export default router

