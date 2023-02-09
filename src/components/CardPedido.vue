<script setup lang="ts">
import { InfoUser } from "@/components";
import { IPedido } from "@/types/Pedidos";
import { Show } from "@/utils/ShowInCard";
import { ref } from "vue";

const props = defineProps<{
  pedido: IPedido;
}>();

const show = ref(true);
</script>

<template>
  <el-card class="mb-3" shadow="hover" style="cursor: pointer">
    <template #header>
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-flex me-auto">
          <el-icon class="me-1" size="23"><Avatar /></el-icon>
          {{ props.pedido.User?.firstName }}
        </div>

        <InfoUser
          :adress="(props.pedido.User?.adress as string)"
          :tel="(props.pedido.User?.phone as string)"
        ></InfoUser>
        <el-icon size="22" @click="show = !show" class="ms-3">
          <ArrowUpBold v-if="show" />
          <ArrowDownBold v-else />
        </el-icon>
      </div>
    </template>

    <div v-for="key of Object.keys(props.pedido)" v-if="show">
      <div
        v-if="Object.prototype.hasOwnProperty.call(Show, key)"
        class="d-flex mb-3 justify-content-between"
      >
        <label>{{ Show[key].label}} </label>
        <label>{{ props.pedido[key] }}</label>
      </div>
    </div>
  </el-card>
</template>

<style></style>
