<script setup lang="ts">
import { TheMenu } from "@/components";

import api from "@/services/api";
import { onMounted, ref } from "vue";

const showMenu = ref(false);

onMounted(() => {});
</script>
<template>
  <TheMenu v-if="showMenu"></TheMenu>
  <RouterView
    @change-show-menu="(change: boolean) => (showMenu = change)"
  ></RouterView>
</template>

<style>
#app {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #e6e8eb; /*#e6e8eb; */
}

label {
  font-size: 1rem;
  font-weight: 500;
}
</style>
