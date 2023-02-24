<script setup lang="ts">
import { onMounted } from "vue";

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

onMounted(() => {
  emit("changeShowMenu", true);
});
</script>

<template>
  <div>
    <h1>Home!</h1>
  </div>
</template>
