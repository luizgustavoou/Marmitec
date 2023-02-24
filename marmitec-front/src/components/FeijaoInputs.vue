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
    <el-form-item prop="feijao">
      <div class="d-flex flex-column">
        <label>Tipo de feijão</label>

        <el-radio-group text-color="#F56C6C" v-model="feijao" class="ml-4">
          <el-radio :label="1" border>Feijão Branco</el-radio>
          <el-radio :label="2" border>Feijão Marrom</el-radio>
          <el-radio :label="3" border>Feijão Preto</el-radio>
        </el-radio-group>
      </div>
    </el-form-item>
  </div>
</template>
<style lang=""></style>
