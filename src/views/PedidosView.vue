<script setup lang="ts">
import { StatusPedido, Teste } from "@/components";
import Draggable from "vue3-draggable";
import type { IPedido, IPedidos } from "@/types/Pedidos";
import api from "@/services/api";
import { Ref, computed, onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const tableData: Ref<IPedidos | []> = ref([]);

const requestedPedidos: Ref<IPedidos | []> = ref([]);

const processPedidos: Ref<IPedidos | []> = ref([]);

const finishPedidos: Ref<IPedidos | []> = ref([]);

const items = ref([
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
]);



const items2 = ref([{ title: "Item 5" }]);
onMounted(async () => {
  emit("changeShowMenu", true);

  try {
    const res = await api.get("/pedidos");

    const data: IPedidos | [] = res.data[0];

    requestedPedidos.value = data.filter((pedido) => pedido.statusPedido == 1);

    processPedidos.value = data.filter((pedido) => pedido.statusPedido == 2);

    finishPedidos.value = data.filter((pedido) => pedido.statusPedido == 3);

    tableData.value = data;
  } catch (error) {
    console.log("Ocorreu um erro!");
  }
});
</script>

<template>
  <!-- {{ items }} <br />
  {{ items2 }}
  <Draggable v-model="items" transition="300">
    <template #item="{ item }">
      <div>
        {{ item.title }}
      </div>
    </template>
  </Draggable>

  <hr>
  <Teste v-model="items2"></Teste> -->


  <div class="row gy-5 p-4" style="height: 750px; ">
    <StatusPedido title="Solicitado" :pedidos="requestedPedidos"></StatusPedido>
    <StatusPedido title="Andamento" :pedidos="processPedidos"></StatusPedido>
    <StatusPedido title="Finalizado" :pedidos="finishPedidos"></StatusPedido>
  </div>
</template>

<style>
.draggable-item-list-move {
  transition: transform 0.5s;
}
</style>
