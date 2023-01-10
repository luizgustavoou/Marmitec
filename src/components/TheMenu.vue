<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref("home");
const activeIndex2 = ref("pedidos");
const handleSelect = (key: string, keyPath: string[]) => {
  //console.log(key, keyPath);
};
</script>

<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#337ecc"
    text-color="#CDD0D6"
    active-text-color="#fff"
    @select="handleSelect"
  >
    <el-menu-item index="home">
      <router-link to="/home" style="text-decoration: none">Home</router-link>
    </el-menu-item>
    <el-menu-item index="addpedidos">
      <router-link to="/addpedidos" style="text-decoration: none"
        >Fazer pedido</router-link
      >
    </el-menu-item>
    <el-menu-item index="pedidos">
      <router-link to="/pedidos" style="text-decoration: none"
        >Pedidos</router-link
      >
    </el-menu-item>
  </el-menu>
</template>

<style></style>
