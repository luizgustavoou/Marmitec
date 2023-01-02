<script setup lang="ts">
import { FormPedido } from "@/components";
import api from "@/services/api";

import { reactive, ref } from "vue";
import { onMounted } from "vue";

const emits = defineEmits(["changeShowMenu"]);

const form = reactive({
  desc: "",
  amountProtein: 1,
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
  emits("changeShowMenu", true);
});
</script>

<template>
  {{ form }}
  <div class="d-flex justify-content-center align-items-center container h-100">
    <div class="card" style="background-color: #e9e9eb; min-width: 75%">
      <div class="card-header">Fazer pedido</div>
      <div class="card-body">
        <FormPedido
          :set-desc="(value: string) => form.desc = value"
          :set-amount-protein="(value: number) => form.amountProtein = value"
          :submit="submit"
        ></FormPedido>
      </div>
    </div>
  </div>
</template>

<style></style>
