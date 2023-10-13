import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import Home from '../views/Home.vue';
import Episode from '../views/Episode.vue';
import Character from '../views/Character.vue';

const routes = [
  {
    path: '/', // 網址顯示的名稱
    name: 'home', // 識別用
    component: Home, // 切換的組件，預先載入寫法
    children: [
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/about/About.vue'),
      },
      {
        path: 'vision',
        name: 'vision',
        component: () => import('../views/about/Vision.vue'),
      },
    ],
  },
  {
    path: '/character',
    name: 'character',
    component: Character,
  },
  {
    path: '/characterDetail',
    name: 'Character Detail',
    component: () => import('../views/CharacterDetail.vue'),
  },
  {
    path: '/location',
    name: 'location',
    // component: Location,
    component: () => import('../views/Location.vue'), // 動態載入dynamic loading，router改變時才載入元件
  },
  {
    path: '/locationDetail',
    name: 'Location Detail',
    component: () => import('../views/LocationDetail.vue'),
  },
  {
    path: '/episode',
    name: 'Episode',
    component: Episode,
  },
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  routes,
  // mode: 'history',
  // history: createWebHistory(),  // deploy時須在主機上作配置 https://router.vuejs.org/zh/guide/essentials/history-mode.html
  history: createWebHashHistory(), // 前端友善
});
export default router;
