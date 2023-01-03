<script setup lang="ts">
import type { Form } from "@/types/Forms";
import { computed, onMounted, reactive, ref, watch } from "vue";
import proteinas from "@/utils/proteinas";

const props = defineProps<{
  modelValue: Form;
}>();

const proteinForm = reactive({
  fra_milanesa: 0,
  fra_assado: 0,
  figa_ace: 0,
  bis_sui_ace: 0,
  fra_molho: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", newForm: Form): void;
}>();

const proteinasFormated = computed(() => {
  return Object.entries(proteinas);
});

watch(proteinForm, (obj) => {
  let newForm: Form = props.modelValue;

  newForm.proteinas = { ...obj };

  emit("update:modelValue", newForm);
});

onMounted(() => {
  Object.assign(proteinForm, props.modelValue.proteinas);
});
</script>
<template>
  <el-form-item prop="proteinas">
    <div
      class="d-flex justify-content-between w-100 mb-3"
      v-for="[key, label] in proteinasFormated"
    >
      <label>{{ label }}</label>
      <el-input-number v-model="proteinForm[key]" :min="0" :max="10" />
    </div>
  </el-form-item>
</template>
<style></style>
