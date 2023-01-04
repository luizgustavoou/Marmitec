<script setup lang="ts">
import type { Form } from "@/types/Forms";
import { computed, onMounted, reactive, ref, watch } from "vue";
import acompanhamentos from "@/utils/acompanhamentos";

const props = defineProps<{
  modelValue: Form;
}>();

const acompanhamentosForm = reactive({
  arroz_refogado: 0,
  arroz_leite: 0,
  macarrao: 0,
  leg_salteados: 0,
  sala_crua: 0,
  maca_cozida: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", newForm: Form): void;
}>();

const acompanhamentosFormated = computed(() => {
  return Object.entries(acompanhamentos);
});

watch(acompanhamentosForm, (obj) => {
  let newForm: Form = props.modelValue;

  newForm.acompanhamentos = { ...obj };

  emit("update:modelValue", newForm);
});

onMounted(() => {
  Object.assign(acompanhamentosForm, props.modelValue.acompanhamentos);
});
</script>
<template>
  <el-form-item prop="acompanhamentos">
    <div
      class="d-flex justify-content-between w-100 mb-3"
      v-for="[key, label] in acompanhamentosFormated"
    >
      <label>{{ label }}</label>
      <el-input-number v-model="acompanhamentosForm[key]" :min="0" :max="10" />
    </div>
  </el-form-item>
</template>
<style></style>
