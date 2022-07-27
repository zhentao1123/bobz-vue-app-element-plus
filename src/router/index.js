import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/views/layout/Layout.vue';

export const constantRouterMap = [
  {
    path: '/demo',
    component: () => import('@/views/demo/SlotDemo.vue'),
    hidden: true,
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    hidden: true,
  },
  
];

export const dynamicMenuList = [
  {
    path: '',
    name: 'dashboard',
    component: Layout,
    redirect: '/workbench',
    meta: { title: '仪表盘', icon: 'Odometer'},
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/dashboard/workbench/workbench.vue'),
        meta: { title: '工作台'},
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: Layout,
    redirect: '/admin/roleList',
    meta: { title: '权限', icon: 'User' },
    children: [
      {
        path: 'roleList',
        name: 'roleList',
        component: () => import('@/views/admin/role/roleList.vue'),
        meta: { title: '角色列表'},
      },
    ],
  },
];

const routesMap = [...constantRouterMap, ...dynamicMenuList]

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes: routesMap,
});

export default router;
