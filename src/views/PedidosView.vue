<script setup lang="ts">
import { StatusPedido, Teste } from "@/components";
import { ElMessage } from "element-plus";
// import Draggable from "vue3-draggable";
import draggable from "vuedraggable";
import type { IPedidos, objChange, teste } from "@/types/Pedidos";
import api from "@/services/api";
import { Ref, computed, onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const tableData: Ref<IPedidos | []> = ref([]);

const requestedPedidos: Ref<IPedidos | []> = ref([]);

const processPedidos: Ref<IPedidos | []> = ref([]);

const finishPedidos: Ref<IPedidos | []> = ref([]);

const openMsg = (
  msg: string,
  type: "success" | "warning" | "info" | "error"
) => {
  ElMessage({
    message: msg,
    type: type,
    showClose: true,
    duration: 3500,
  });
};

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

async function changeStatusPedido(id: number, newStatus: 1 | 2 | 3) {
  // console.log(`id ${id} change to ${newStatus}!`);

  try {
    const req = await api.put(`/pedidos/status/${id}`, { newStatus });
  } catch (error) {
    openMsg("Ocorreu algum error ao atualizar o status do pedido.", "error");
  }
}

const changeRequest = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatusPedido(e.added.element.idPedido, 1);
};

const changeProcess = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatusPedido(e.added.element.idPedido, 2);
};

const changeFinish = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatusPedido(e.added.element.idPedido, 3);
};
</script>

<template>
  <div>
    <!-- style="overflow-y: scroll;" -->

    <div class="d-flex gap-3 p-4" style="height: 750px; overflow-y: scroll">
      <StatusPedido
        title="Solicitado"
        :change="changeRequest"
        :pedidos="requestedPedidos"
      ></StatusPedido>
      <StatusPedido
        :change="changeProcess"
        title="Andamento"
        :pedidos="processPedidos"
      ></StatusPedido>
      <StatusPedido
        :change="changeFinish"
        title="Finalizado"
        :pedidos="finishPedidos"
      ></StatusPedido>
    </div>
  </div>
</template>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
</style>
