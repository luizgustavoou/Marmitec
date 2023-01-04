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
  proteinas: {
    fra_milanesa: 0,
    fra_assado: 0,
    figa_ace: 0,
    bis_sui_ace: 0,
    fra_molho: 0,
  },
  feijao: 1,
  acompanhamentos: {
    arroz_refogado: 0,
    arroz_leite: 0,
    macarrao: 0,
    leg_salteados: 0,
    sala_crua: 0,
    maca_cozida: 0,
  },
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
      <div class="card-header text-center"><h2>Pedido</h2></div>
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
