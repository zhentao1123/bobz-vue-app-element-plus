import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/views/layout/Layout.vue';

export const constantRouterMap = [
  {
    path: '/demo',
    component: () => import('@/views/demo/SlotDemo.vue'),
    hidden: true,
  },
  {
    path: '/el-config',
    component: () => import('@/views/demo/ELConfig.vue'),
    hidden: true,
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: 'home' },
      },
    ],
  },

  {
    path: '/role',
    name: 'role',
    component: Layout,
    redirect: '/role/roleList',
    meta: { title: '角色', icon: 'role' },
    children: [
      {
        path: 'roleList',
        name: 'roleList',
        component: () => import('@/views/role/index.vue'),
        meta: { title: '角色列表', icon: 'roleList' },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes: constantRouterMap,
});

export default router;
