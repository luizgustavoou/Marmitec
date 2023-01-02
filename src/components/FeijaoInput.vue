<script setup lang="ts">
import type { Form } from "@/types/Forms";
import { computed, ref } from "vue";

const props = defineProps<{
  modelValue: Form;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", newForm: Form): void;
}>();

const feijao = computed({
  get() {
    return props.modelValue.feijao;
  },
  set(value: number) {
    const newForm: Form = { ...props.modelValue };

    newForm.feijao = value;
    emit("update:modelValue", newForm);
  },
});
</script>
<template>
  <div>
    <el-form-item label="Tipo de Feijão" prop="desc">
      <el-radio-group v-model="feijao" class="ml-4">
        <el-radio :label="1" border>Feijão Branco</el-radio>
        <el-radio :label="2" border>Feijão Marrom</el-radio>
        <el-radio :label="3" border>Feijão Preto</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<style lang=""></style>
