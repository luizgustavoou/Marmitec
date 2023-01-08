<script setup lang="ts">
import { TheMenu } from "@/components";

import api from "@/services/api";
import { onMounted, ref } from "vue";

const showMenu = ref(false);

onMounted(() => {});
</script>
<template>
  <div class="d-flex flex-column h-100">
    <header>
      <TheMenu v-if="showMenu"></TheMenu>
    </header>
    <main class="flex-grow-1">
      <RouterView
        @change-show-menu="(change: boolean) => (showMenu = change)"
      ></RouterView>
    </main>
    <footer
      class="d-flex flex-column justify-content-center align-items-center text-white p-3"
    >
      <label> Feito por Luiz Gustavo </label>
      <div>
        <i class="bi bi-instagram me-2"></i>
        <a href="https://www.instagram.com/luizgustavoou/" style="text-decoration: none; color: white;" target="_blank">luizgustavoou</a>
      </div>
    </footer>
  </div>
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

footer {
  background-color: #36454fa2;

}

label {
  font-size: 1rem;
  font-weight: 500;
}
</style>
