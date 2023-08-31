<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { authService } from "@/services/auth";

const route = useRoute();

const router = useRouter();

const active = ref();
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
  router.push({ name: key });

  // console.log(route.path);
};

const handleLogout = (el: any) => {
  authService.logout();
};

onMounted(() => {
  // console.log(route.name);
  active.value = route.name;
});
</script>

<!-- TODO:
  Fazer um objeto constante mapeando as rotas. Dessa forma, poderá colocar um v-for no el-menu

-->
<template>
  <el-menu
    :default-active="active"
    class="d-flex el-menu-demo"
    mode="horizontal"
    background-color="#337ecc"
    text-color="#CDD0D6"
    active-text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item index="home">
      <!-- <router-link to="/home" style="text-decoration: none">Home</router-link> -->
      Home
    </el-menu-item>
    <el-menu-item index="addpedidos">
      <!-- <router-link to="/addpedidos" style="text-decoration: none"
        >Fazer pedido</router-link
      > -->
      Fazer pedido
    </el-menu-item>
    <el-menu-item index="pedidos">
      <!-- <router-link to="/pedidos" style="text-decoration: none"
        >Pedidos</router-link
      > -->
      Pedidos
    </el-menu-item>
    <el-menu-item class="ms-auto" @click="handleLogout">
      <!-- <router-link to="/pedidos" style="text-decoration: none"
        >Pedidos</router-link
      > -->
      Sair
    </el-menu-item>
  </el-menu>
</template>

<style></style>
