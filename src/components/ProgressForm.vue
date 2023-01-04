<script setup lang="ts">
const props = defineProps<{
  active: number;
  components: Array<{ component: any; label: string }>;
}>();
</script>

<template>
  <el-steps
    class="mb-4"
    :active="props.active"
    finish-status="success"
    align-center
  >
    <el-step v-for="obj in props.components" :title="obj.label" />
  </el-steps>
</template>

<style></style>
