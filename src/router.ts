import { createRouter, createWebHistory } from 'vue-router';
import { routeInfos } from './routes';

const TITLE_SUFFIX = 'MCDownload';

const viewMap: Record<string, () => Promise<unknown>> = {
  '/': () => import('./views/Home.vue'),
  '/mcbe': () => import('./views/MCBE.vue'),
  '/fcl': () => import('./views/FCL.vue'),
  '/pcl': () => import('./views/PCL.vue'),
  '/netease': () => import('./views/NetEase.vue'),
};

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos.map((r) => ({
    path: r.path,
    meta: { title: r.title },
    component: viewMap[r.path],
  })),
  strict: true,
});

router.afterEach((to) => {
  const meta = to.meta?.title as string | undefined;
  document.title = meta ? `${meta} - ${TITLE_SUFFIX}` : TITLE_SUFFIX;
});

export default router;
