<script setup lang="ts">
import { useUserStore } from "./stores/user";
import { TheMenu, Layout, Footer } from "@/components";

import { onMounted, ref } from "vue";

const user = useUserStore();

const showMenu = ref(false);

onMounted(() => {});
</script>
<template>
  <Layout>
    <template #header>
      <TheMenu v-if="showMenu"></TheMenu>
    </template>
    <template #main>
      {{ user.profile }}
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
}

#app {
  height: 100%;
}

label {
  font-size: 1rem;
  font-weight: 500;
}
</style>
