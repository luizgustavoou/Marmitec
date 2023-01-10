<script setup lang="ts">
import { More, InfoFilled } from "@element-plus/icons-vue";

const props = defineProps<{
  adress: string;
  tel: string;
}>();
</script>

<template>
  <el-popover placement="bottom" width="auto" trigger="hover" >
    <template #reference>
      <el-button type="info" :icon="More" circle />
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
