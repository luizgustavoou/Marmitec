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
    <div class="d-flex">
      <el-form-item label="Frango frito">
        <el-input-number :min="1" :max="10" />
      </el-form-item>
    </div>
  </div>
</template>
<style lang=""></style>
