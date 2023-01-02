<script setup lang="ts">
import type { Form } from "@/types/Forms";
import { computed, ref } from "vue";

const props = defineProps<{
  modelValue: Form;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", newForm: Form): void;
}>();

const desc = computed({
  get() {
    return props.modelValue.desc;
  },
  set(value) {
    const newForm: Form = { ...props.modelValue };

    newForm.desc = value;

    emit("update:modelValue", newForm);
  },
});

const amountProtein = computed({
  get() {
    return props.modelValue.amountProtein;
  },
  set(value) {
    const newForm: Form = { ...props.modelValue };

    newForm.amountProtein = value;

    emit("update:modelValue", newForm);
  },
});
</script>
<template>
  <el-form-item label="Descrição" prop="desc">
    <el-input v-model="desc" type="textarea" autocomplete="off" />
  </el-form-item>
  <el-form-item label="Qtde proteínas" prop="amountProtein">
    <el-input-number v-model="amountProtein" :min="1" :max="3" />
  </el-form-item>
</template>
<style lang=""></style>
