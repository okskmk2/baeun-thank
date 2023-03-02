import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import LoginView from "../views/LoginView.vue";

import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import SendView from '../views/SendView.vue'
import HistoryView from '../views/HistoryView.vue'

import MyProfileView from '../views/MyProfileView.vue'
import ProfileView from '../views/ProfileView.vue'

import StartView from '../views/StartView.vue'
import MainLayout from "../layouts/MainLayout.vue";

import TestView from "../views/TestView.vue";
import TestView2 from "../views/TestView2.vue";
import TestView3 from "../views/TestView3.vue";

function checkLogin() {
  return localStorage.getItem('username');
}

const routes = [
  {
    path: '',
    name: 'start',
    component: StartView,
    beforeEnter: (to, from, next) => {
      if (checkLogin()) {
        next('/home');
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/test2',
    name: 'test2',
    component: TestView2
  },
  {
    path: '/test3',
    name: 'test3',
    component: TestView3
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'home',
        name: '홈',
        component: HomeView
      },
      {
        path: 'map',
        name: '지도',
        component: MapView
      },
      {
        path: 'send',
        name: '보내기',
        component: SendView
      },
      {
        path: 'history',
        name: '히스토리',
        component: HistoryView
      },
      {
        path: 'myprofile',
        name: '나의 계정',
        component: MyProfileView
      },
      {
        path: 'profile',
        name: '프로필',
        component: ProfileView
      },
    ]
  }
]

const router = createRouter({
  // mode:'hash',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  next();
})

export default router
