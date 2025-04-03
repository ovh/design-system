import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { componentNames } from '../components';

const routes: Array<RouteRecordRaw> = componentNames.map((componentName) => ({
  component: () => import(`../components/ods-${componentName}.vue`),
  path: `/ods-${componentName}`,
  name: `ods-${componentName}`,
}))

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
