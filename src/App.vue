<script setup lang="ts">
import { TheMenu } from "@/components";

import api from "@/services/api";
import { onMounted, ref } from "vue";

const showMenu = ref(false);

onMounted(() => {});
</script>
<template>
  <div class="vh-100" style="height: 400px; background-color: #E6E8EB;">
    <TheMenu v-if="showMenu"></TheMenu>
    <RouterView
      @change-show-menu="(change: boolean) => (showMenu = change)"
    ></RouterView>
  </div>
</template>

<style></style>
