<script setup lang="ts">
const props = defineProps<{
  all: number;
  chosen: number;
}>();
</script>

<template>
  <div>
    <h2 class="text-center">{{ props.chosen }} / {{ props.all }}</h2>
  </div>
</template>

<style></style>
