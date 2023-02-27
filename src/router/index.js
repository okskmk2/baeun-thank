import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import SendView from '../views/SendView.vue'
import HistoryView from '../views/HistoryView.vue'

import StartView from '../views/StartView.vue'
import MainLayout from "../layouts/MainLayout.vue";

const routes =  [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path:'',
    component: MainLayout,
    children:[
      {
        path:'home',
        component:HomeView
      },
      {
        path:'map',
        component:MapView
      },
      {
        path:'send',
        component:SendView
      },
      {
        path:'history',
        component:HistoryView
      },
    ]
  }
]

const router = createRouter({
  // mode:'hash',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
