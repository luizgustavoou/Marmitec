<script setup lang="ts">
import { FormPedido } from "@/components";
import api from "@/services/api";
import { Form } from "@/types/Forms";

import { reactive, ref } from "vue";
import { onMounted } from "vue";

const emit = defineEmits<{
  (e: "changeShowMenu", change: boolean): void;
}>();

const form = reactive({
  fra_milanesa: 0,
  fra_assado: 0,
  figa_ace: 0,
  bis_sui_ace: 0,
  fra_molho: 0,
  feijao: 1,
  acompanhamentos: [],
  desc: "",
});

function submit() {
  api
    .post("/pedidos", form)
    .then((res) => {
      console.log(res.status);
    })
    .catch((error) => {
      console.log("Ops, ocorreu algum erro: " + error);
    });
}

onMounted(() => {
  emit("changeShowMenu", true);
});
</script>

<template>
  {{ form }}
  <div class="d-flex justify-content-center align-items-center container h-100">
    <div class="card" style="background-color: #e9e9eb; min-width: 75%">
      <div class="card-header">Fazer pedido</div>
      <div class="card-body">
        <FormPedido
          :set-form="(newForm: Form) => Object.assign(form, newForm)"
          :submit="submit"
        ></FormPedido>
      </div>
    </div>
  </div>
</template>

<style></style>
