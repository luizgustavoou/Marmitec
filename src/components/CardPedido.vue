<script setup lang="ts">
import { InfoUser } from "@/components";

const props = defineProps<{
  pedido: any;
}>();
</script>

<template>
  <el-card shadow="hover" style="width: 100%">
    <template #header>
      <div class="d-flex justify-content-center align-items-center">
        <div class="d-flex me-auto">
          <el-icon class="me-1" size="23"><Avatar /></el-icon>
          {{ props.pedido.nomeUsuario }}
        </div>

        <InfoUser
          :adress="(props.pedido.endUsuario as string)"
          :tel="(props.pedido.telUsuario as string)"
        ></InfoUser>
      </div>
    </template>

    <div v-for="key of Object.keys(props.pedido)">
      <div
        v-if="
          key != 'nomeEntregador' &&
          key != 'statusPedido' &&
          key != 'endUsuario' &&
          key != 'telUsuario' &&
          key != 'nomeUsuario' &&
          key != 'descPedido'
        "
        class="d-flex mb-3 justify-content-between"
      >
        <label>{{ key }} </label>
        <label>{{ props.pedido[key] }}</label>
      </div>
    </div>
  </el-card>
</template>

<style></style>
