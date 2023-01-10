<script setup lang="ts">
import { StatusPedido } from "@/components";
import Draggable from "vue3-draggable";
import type { IPedidos } from "@/types/Pedidos";
import api from "@/services/api";
import { Ref, onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const tableData: Ref<IPedidos | []> = ref([]);

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

    const data: IPedidos | [] = res.data;

    tableData.value = data;
  } catch (error) {
    console.log("Ocorreu um erro!");
  }
});

onMounted(() => {
  console.log("Teste");
});
</script>

<template>
  <!-- {{ items }} <br />
  {{ items2 }} -->
  <!-- <Draggable v-model="items" transition="300">
    <template #item="{ item }">
      <div>
        {{ item.title }}
      </div>
    </template>
  </Draggable> -->

  <StatusPedido></StatusPedido>
</template>

<style>
.draggable-item-list-move {
  transition: transform 0.5s;
}
</style>
