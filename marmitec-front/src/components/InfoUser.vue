<script setup lang="ts">
import { More, InfoFilled } from "@element-plus/icons-vue";

const props = defineProps<{
  adress: string | null;
  tel: string | null;
}>();
</script>

<template>
  <el-popover placement="right" width="auto" trigger="hover" >
    <template #reference>
      <el-icon size="22"><More /></el-icon>
      <!-- <el-button type="info" :icon="More" circle /> -->
    </template>
    <div class="d-flex flex-column">
      <div>
        <el-icon class="me-1" size="20"><Location /></el-icon>
        <label class="fs-6">{{ props.adress }}</label>
      </div>
      <div>
        <el-icon class="me-1" size="20"><Phone /></el-icon>
        <label class="fs-6">{{ props.tel }}</label>
      </div>
    </div>
  </el-popover>
</template>

<style></style>
