<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { profile } = storeToRefs(userStore);

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

onMounted(() => {
  emit("changeShowMenu", true);
});
</script>

<template>
  <div>
    <h1>Bem vindo, {{ profile.firstName }}!</h1>
  </div>
</template>
