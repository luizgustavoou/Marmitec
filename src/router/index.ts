import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CadastroView from "../views/CadastroView.vue";
import LoginView from "../views/LoginView.vue";
import PedidosView from "../views/PedidosView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "addpedidos",
  },
  {
    path: "/pedidos",
    name: "pedidos",
    component: PedidosView
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

export default router;
