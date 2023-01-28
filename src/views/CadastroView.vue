<script setup lang="ts">
import {
  AcompanhamentoInputs,
  FeijaoInputs,
  ProteinaInputs,
  Teste,
} from "@/components";
import { ElMessage } from "element-plus";
import axios, { AxiosError } from "axios";
import { FormPedido } from "@/components";
import { usePedidos } from "@/composables/pedidos/usePedidos";
import { Form } from "@/types/Forms";

import { reactive, ref } from "vue";
import { onMounted } from "vue";

const active = ref(0);

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const objectComponent = (component: any, label: string) => {
  return {
    component,
    label,
  };
};

const inputsForm = [
  objectComponent(ProteinaInputs, "Proteínas"),
  objectComponent(FeijaoInputs, "Feijão"),
  objectComponent(AcompanhamentoInputs, "Acompanhamentos"),
];

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
const loading = ref(false);

const form = reactive({
  proteinas: {
    fra_milanesa: 0,
    fra_assado: 0,
    figa_ace: 0,
    bis_sui_ace: 0,
    fra_molho: 0,
  },
  acompanhamentos: {
    arroz_refogado: 0,
    arroz_leite: 0,
    macarrao: 0,
    leg_salteados: 0,
    sala_crua: 0,
    maca_cozida: 0,
  },
  feijao: 1,
  desc: "",
});


async function submit(resetForm: () => void) {
  // console.log(form);

  try {
    const { addPedido } = usePedidos();

    loading.value = true;
    const req = await addPedido(form);

    if (req.status == 200) {
      openMsg("Pedido cadastrado com sucesso.", "success");
      resetForm();
    }
    console.log(req);

    active.value = 0;
  } catch (error) {
    openMsg("Ocorreu algum error ao cadastrar o pedido.", "error");
    // if (error.response) {
    //   // Request made but the server responded with an error
    //   //console.log(error.response.data);
    //   // console.log(error.response.status);
    //   // console.log(error.response.headers);
    // } else if (error.request) {
    //   // Request made but no response is received from the server.

    //   console.log(error.request as XMLHttpRequest);
    // } else {
    //   // Error occured while setting up the request
    //   console.log("Error", error.message);
    // }
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  emit("changeShowMenu", true);
});

//error.response.status
</script>

<template>
  <!-- <Teste></Teste> -->
  <!-- {{ form }} -->

  <div class="d-flex justify-content-center align-items-center container h-100">
    <div class="card w-100" style="background-color: #e9e9eb">
      <div class="card-header text-center"><h2>Pedido</h2></div>
      <div class="card-body">
        <FormPedido
          :loading="loading"
          v-model:active="active"
          :inputsForms="inputsForm"
          :set-form="(newForm: Form) => Object.assign(form, newForm)"
          :submit="submit"
        ></FormPedido>
      </div>
    </div>
  </div>
</template>

<style></style>
