<script setup lang="ts">
import { onMounted } from "vue";

const emits = defineEmits(["changeShowMenu"]);

onMounted(() => {
  emits("changeShowMenu", false);
});
</script>
<template>
  <div>
    <h1>Login!</h1>
  </div>
</template>
