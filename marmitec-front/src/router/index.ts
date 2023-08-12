import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
  
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import CadastroView from "../views/CadastroView.vue";
import LoginView from "../views/LoginView.vue";
import PedidosView from "../views/PedidosView.vue";

import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

function hasCookie(name: string) {
  return cookies.isKey(name);
}

const verifyAcessToken = () => {
  return hasCookie("access_token") && hasCookie("refresh_token");
};

const userIsLoged = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  // if (verifyAcessToken()) next();
  // else next({ name: "auth" });

  next();
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "auth",
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView,
    beforeEnter: [userIsLoged],
  },

  {
    path: "/home",
    name: "home",
    component: HomeView,
    beforeEnter: [userIsLoged],
  },
  {
    path: "/addpedidos",
    name: "addpedidos",
    component: CadastroView,
    beforeEnter: [userIsLoged],
  },
  {
    path: "/auth",
    name: "auth",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (verifyAcessToken()) next({ name: "home" });
      else next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
