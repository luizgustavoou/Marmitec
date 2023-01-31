<script setup lang="ts">
import { domain } from "@/network/api";
import { StatusPedido, Teste } from "@/components";
import { ElMessage } from "element-plus";
import type { IPedidos, objChange } from "@/types/Pedidos";
import { Ref, computed, onMounted, onUnmounted, ref } from "vue";

import { usePedidos } from "@/composables/pedidos/usePedidos";

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
  const ws = new WebSocket(`ws://${domain}/pedidos`);

  ws.onopen = (e) => {
    console.log("Conexão estabelecida com o socket.");
  };

  ws.onerror = (event) => {
    console.log("Ocorreu um erro no webSocket!");
  };
  ws.onmessage = (event) => {
    const data = event.data;
    const value: IPedidos | [] = JSON.parse(data)[0];

    requestedPedidos.value = value.filter((pedido) => pedido.statusPedido == 1);

    processPedidos.value = value.filter((pedido) => pedido.statusPedido == 2);

    finishPedidos.value = value.filter((pedido) => pedido.statusPedido == 3);
  };

  try {
    const { getPedidos } = usePedidos();

    console.log(typeof (await getPedidos()));

    const data: IPedidos | [] = await getPedidos();

    requestedPedidos.value = data.filter((pedido) => pedido.statusPedido == 1);

    processPedidos.value = data.filter((pedido) => pedido.statusPedido == 2);

    finishPedidos.value = data.filter((pedido) => pedido.statusPedido == 3);

    tableData.value = data;
  } catch (error) {
    console.log("Ocorreu um erro!");
  }
});

onUnmounted(() => {});

async function changeStatus(id: number, newStatus: 1 | 2 | 3) {
  // console.log(`id ${id} change to ${newStatus}!`);

  const { changeStatusPedido } = usePedidos();
  try {
    const req = await changeStatusPedido(id, newStatus);
  } catch (error) {
    openMsg("Ocorreu algum error ao atualizar o status do pedido.", "error");
  }
}

const changeRequest = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatus(e.added.element.idPedido, 1);
};

const changeProcess = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatus(e.added.element.idPedido, 2);
};

const changeFinish = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatus(e.added.element.idPedido, 3);
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
