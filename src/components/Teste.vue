<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
import { ref } from "vue";

const el = ref<HTMLElement | null>(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(el);
</script>

<template>
  <div ref="el" class="bg-danger" style="overflow: scroll; height: 400px;">
    <div class="fixed-top">{{ x }} -- {{ y }}</div>
    <div style="height: 10000px"></div>
  </div>
</template>
