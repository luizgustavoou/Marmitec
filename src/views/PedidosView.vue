<script setup lang="ts">
import { StatusPedido, Teste } from "@/components";
import { ElMessage } from "element-plus";
import type { IPedido, objChange } from "@/types/Pedidos";
import { Ref, onMounted, ref } from "vue";
import { io } from "socket.io-client";

import { usePedidos } from "@/composables/pedidos/usePedidos";

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const tableData: Ref<IPedido[] | []> = ref([]);

const requestedPedidos: Ref<IPedido[] | []> = ref([]);

const processPedidos: Ref<IPedido[] | []> = ref([]);

const finishPedidos: Ref<IPedido[] | []> = ref([]);

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

  // const socket = io("ws://localhost:3333");

  // socket.on("orders", (orders: IPedido[]) => {
  //   console.log("recebido: " + orders[0]);
  // });

  // const ws = new WebSocket(`ws://${domain}/pedidos`);

  // ws.onopen = (e) => {
  //   console.log("Conexão estabelecida com o socket.");
  // };

  // ws.onerror = (event) => {
  //   console.log("Ocorreu um erro no webSocket!");
  // };
  // ws.onmessage = (event) => {
  //   const data = event.data;
  //   const value: IPedido[] | [] = JSON.parse(data)[0];

  //   requestedPedidos.value = value.filter((pedido) => pedido.status == 1);

  //   processPedidos.value = value.filter((pedido) => pedido.status == 2);

  //   finishPedidos.value = value.filter((pedido) => pedido.status == 3);
  // };

  try {
    const { getPedidos } = usePedidos();

    const res = await getPedidos();

    const orders = res.data;

    requestedPedidos.value = orders.filter((pedido) => pedido.status == 1);

    processPedidos.value = orders.filter((pedido) => pedido.status == 2);

    finishPedidos.value = orders.filter((pedido) => pedido.status == 3);

    // tableData.value = orders;
  } catch (error) {
    console.log(error);
  }
});

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
    changeStatus(e.added.element.id, 1);
};

const changeProcess = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatus(e.added.element.id, 2);
};

const changeFinish = (e: objChange, id: number) => {
  if (Object.prototype.hasOwnProperty.call(e, "added"))
    changeStatus(e.added.element.id, 3);
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
