<script setup lang="ts">
import { InfoUser, CardPedido } from "@/components";
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
      <CardPedido
        v-for="pedido in pedidosFormated"
        :pedido="pedido"
      ></CardPedido>
    </div>
  </div>
</template>

<style>
.box {
  border-radius: 10px;
  background-color: rgba(181, 181, 255, 0.575);
}
</style>
