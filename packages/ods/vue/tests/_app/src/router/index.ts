import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import SpinnerView from '../views/Spinner.vue';
import TextView from '../views/Text.vue';

// TODO generate
const routes: Array<RouteRecordRaw> = [
  {
    path: '/ods-spinner',
    name: 'ods-spinner',
    component: SpinnerView,
  },
  {
    path: '/ods-text',
    name: 'ods-text',
    component: TextView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
