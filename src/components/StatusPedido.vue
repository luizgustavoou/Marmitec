<script setup lang="ts">
import draggable from "vuedraggable";
import { CardPedido, Teste } from "@/components";
import type { IPedidos } from "@/types/Pedidos";
import { More } from "@element-plus/icons-vue";

const props = defineProps<{
  pedidos: IPedidos | [];
  change: (e: any, id: number) => void;
  title: string;
}>();
</script>

<template>
  <div class="flex-fill text-center" style="height: 100%">
    <label class="fs-4">{{ props.title }}</label>
    <div
      class="box d-flex p-3 flex-column align-items-center border"
      style="overflow-y: scroll; height: 100%"
    >
      <draggable
        class="w-100 h-100"
        :list="props.pedidos"
        group="pedidos"
        @change="props.change"
        item-key="Pedidos"
      >
        <template #item="{ element }">
          <div>
            <CardPedido :pedido="element"></CardPedido>
          </div>
        </template>
      </draggable>
      <hr />
    </div>
  </div>
</template>

<style>
.box {
  border-radius: 10px;
  background-color: rgba(181, 181, 255, 0.575);
}

/* .flip-list-move {
  transition: transform 0.5s;
} */
</style>
