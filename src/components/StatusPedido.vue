<script setup lang="ts">
import { InfoUser } from "@/components";
import type { IPedidos, IPedido } from "@/types/Pedidos";
import { More } from "@element-plus/icons-vue";

import { computed } from "vue";

const props = defineProps<{
  pedidos: IPedidos | [];
}>();

const pedidosFormated = computed(() => {
  return props.pedidos.map((pedido) => {
    let obj: Partial<IPedido> = {};

    Object.keys(pedido).forEach((key) => {
      if (pedido[key as keyof IPedido] != 0)
        (obj[key as keyof IPedido] as IPedido[keyof IPedido]) =
          pedido[key as keyof IPedido];
    });

    return obj;
  });
});
</script>

<template>
  <div class="col" style="height: 100%">
    <div
      class="box d-flex p-3 flex-column align-items-center border"
      style="overflow: scroll; height: 100%"
    >
      <div
        v-for="pedido in pedidosFormated"
        class="card text-bg-light mb-3"
        style="width: 100%"
      >
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
                key != 'descPedido'
              "
              class="d-flex mb-3 justify-content-between"
            >
              <label>{{ key }} </label>
              <label>{{ pedido[key] }}</label>
            </div>
          </div>

          <!-- {{ pedido }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  border-radius: 10px;
  background-color: rgba(181, 181, 255, 0.575);
}
</style>
