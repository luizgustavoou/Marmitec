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
    .post("/", form)
    .then((res) => {
      console.log(res.data);
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
  <div class="d-flex justify-content-center align-items-center container h-100">
    <div class="card w-75 h-50" style="background-color: #e9e9eb">
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
