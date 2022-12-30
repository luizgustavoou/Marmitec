import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PedidoView from "../views/PedidoView.vue";
import LoginView from "../views/LoginView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "addpedidos",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/addpedidos",
    name: "addpedidos",
    component: PedidoView,
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

export default router;
