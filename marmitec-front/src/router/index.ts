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

import { cookiesService } from "@/services/cookies";
import { jwtService } from "@/services/jwt";
import { useUserStore } from "@/stores/user";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "auth",
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView,
  },

  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addpedidos",
    name: "addpedidos",
    component: CadastroView,
  },
  {
    path: "/auth",
    name: "auth",
    component: LoginView,

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  const userStore = useUserStore();

  const token = cookiesService.getCookies("access_token");

  if (!token && to.name != "auth") return "auth"

  const decode = jwtService.decode(token);

  const { user } = decode;
  const { adress, email, firstName, id, phone, lastName } = user;

  userStore.setProfile({ adress, email, firstName, id, phone, lastName })

  if (to.name == "auth") return "home";
  return true;
})

export default router;
