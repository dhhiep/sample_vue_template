import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import { listRoutes } from '@/config/auth';
import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();
  const authStore = useAuthStore();

  if (appStore.isFirstRun) {
    appStore.setFirstRun(false);
    restoreLocalUser(to, from, next);
  } else {
    if (!listRoutes.includes(to.name as string) && !authStore.isSignedIn) {
      next({ name: 'Login' });
    } else if (listRoutes.includes(to.name as string) && authStore.isSignedIn) {
      next({ name: 'Home' });
    } else {
      next();
    }
  }
});

const restoreLocalUser = (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const authStore = useAuthStore();
  authStore
    .restoreLocalUser()
    .then(() => {
      authStore.verifyUserToken().then(() => {
        if (!listRoutes.includes(to.name as string) && !authStore.isSignedIn) {
          next({ name: 'Login' });
        }
      });
    })
    .catch(() => {
      setTimeout(() => {
        if (!listRoutes.includes(router.currentRoute.value.name as string)) {
          next({ name: 'Login' });
        }
      }, 100);
    });
};

export default router;
