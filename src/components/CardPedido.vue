<script setup lang="ts">
import { InfoUser } from "@/components";
import { IPedido } from "@/types/Pedidos";
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
          {{ props.pedido.nomeUsuario }}
        </div>

        <InfoUser
          :adress="(props.pedido.endUsuario as string)"
          :tel="(props.pedido.telUsuario as string)"
        ></InfoUser>
        <el-icon size="22" @click="show = !show" class="ms-3">
          <ArrowUpBold v-if="show"/>
          <ArrowDownBold v-else/>
        </el-icon>
      </div>
    </template>

    <div v-for="key of Object.keys(props.pedido)" v-if="show">
      <div
        v-if="
          key != 'nomeEntregador' &&
          key != 'statusPedido' &&
          key != 'endUsuario' &&
          key != 'telUsuario' &&
          key != 'nomeUsuario' &&
          key != 'descPedido' &&
          key != 'canceladoPedido' &&
          pedido[key] != 0
        "
        class="d-flex mb-3 justify-content-between"
      >
        <label>{{ key }} </label>
        <label>{{ props.pedido[key] }}</label>
      </div>
    </div>
  </el-card>

  <!-- <div class="card text-bg-light mb-3" style=" cursor: pointer">
    <div class="card-header d-flex">
      <div class="me-auto">
        <el-icon><Avatar /></el-icon>
        {{ pedido.nomeUsuario }}
      </div>

      <InfoUser
        :adress="(pedido.endUsuario as string)"
        :tel="(pedido.telUsuario as string)"
      ></InfoUser>
    </div>

    <div class="card-body">
      <div v-for="key of Object.keys(pedido)">
        <div
          v-if="
            key != 'nomeEntregador' &&
            key != 'statusPedido' &&
            key != 'endUsuario' &&
            key != 'telUsuario' &&
            key != 'nomeUsuario' &&
            key != 'descPedido' &&
            key != 'canceladoPedido' &&
           
            pedido[key] != 0
          "
          class="d-flex mb-3 justify-content-between"
        >
          <label>{{ key }} </label>
          <label>{{ pedido[key] }}</label>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style></style>
