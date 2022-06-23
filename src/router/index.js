import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component:  () => import(/* webpackChunkName: "about" */ '@/App.vue')
  // },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/App.vue')
  },
  {
    path: '/mainpage',
    name: 'mainpage',
    component: () => import(/* webpackChunkName: "about" */ '@/views/MainPage.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
