<script setup lang="ts">
import { useCookies } from "vue3-cookies";

import { useUserStore } from "./stores/user";
import { TheMenu, Layout, Footer, Teste } from "@/components";

import { onMounted, ref } from "vue";

const user = useUserStore();

const showMenu = ref(false);

const { cookies } = useCookies();

onMounted(() => {});
</script>
<template>
  <Layout>
    <template #header>
      <TheMenu v-if="showMenu"></TheMenu>
    </template>
    <template #main>
      <!-- {{ user.profile }} -->
      <!-- <button @click="() => cookies.remove('access_token')">Remover</button> -->
      <!-- <Teste></Teste> -->
      <RouterView
        @change-show-menu="(change: boolean) => (showMenu = change)"
      ></RouterView>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </Layout>
</template>

<style>
html,
body {
  background-color: #e6e8eb;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

#app {
  height: 100%;
}

label {
  font-size: 1rem;
  font-weight: 500;
}
</style>
