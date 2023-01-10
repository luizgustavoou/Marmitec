<script setup lang="ts">
import type { IPedidos } from "@/types/Pedidos";
import { More } from "@element-plus/icons-vue";

const props = defineProps<{
  pedidos: IPedidos | [];
}>();
</script>

<template>
  <div class="col" style="height: 100%">
    <div
      class="box d-flex p-3 flex-column align-items-center border"
      style="overflow: scroll; height: 100%"
    >
      <div
        v-for="pedido in props.pedidos"
        class="card text-bg-light mb-3"
        style="width: 100%"
      >
        <div class="card-header d-flex">
          <div class="me-auto">
            <el-icon><Avatar /></el-icon>
            {{ pedido.nomeUsuario }}
          </div>
          <el-button type="info" :icon="More" circle />
        </div>
        <div class="card-body">
          <h5 class="card-title">Light card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  border-radius: 10px;
  background-color: rgba(181, 181, 255, 0.575);
}
</style>
