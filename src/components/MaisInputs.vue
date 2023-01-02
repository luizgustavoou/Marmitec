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
</script>
<template>
  <div>
    <el-form-item label="Descrição" prop="desc">
      <el-input v-model="desc" type="textarea" autocomplete="off" />
    </el-form-item>
  </div>
</template>
<style lang=""></style>
