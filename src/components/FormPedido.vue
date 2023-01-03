<script setup lang="ts">
import { FeijaoInputs, MaisInputs, ProteinaInputs } from "@/components";
import { computed, reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import type { Form } from "@/types/Forms";

const props = defineProps<{
  setForm: (f: Form) => void;
  submit: any;
}>();

const inputsForm = [ProteinaInputs, MaisInputs, FeijaoInputs];

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  proteinas: {
    fra_milanesa: 0,
    fra_assado: 0,
    figa_ace: 0,
    bis_sui_ace: 0,
    fra_molho: 0,
  },
  feijao: 1,
  acompanhamentos: [],
  desc: "",
});

const rules = reactive<FormRules>({
  desc: [
    {
      required: true,
      message: "Por favor insira uma descrição do pedido.",
      trigger: "blur",
    },
  ],
});

const submitForm = (formEl: FormInstance | undefined, num: number = 1) => {
  if (!formEl) return;

  if (num <= -1) {
    prev();
  } else {
    formEl.validate((valid) => {
      if (valid) {
        next();
      } else {
        console.log("error submit!");
        return false;
      }
    });
  }
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const active = ref(0);

const next = () => {
  active.value++;
  if (active.value > 3) active.value = 0;
};

const prev = () => {
  active.value--;

  if (active.value < 0) active.value = 0;
};

const currentForm = computed(() => {
  return inputsForm[active.value];
});
</script>

<template>
  <el-steps class="mb-4" :active="active" finish-status="success">
    <el-step title="Proteínas" />
    <el-step title="Feijão" />
    <el-step title="Mais" />
  </el-steps>

  <el-form
    size="large"
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    :hide-required-asterisk="true"
    class="d-flex flex-column h-100"
  >
    <!--     :label-position="'top'" -->
    <transition name="translate" mode="out-in">
      <component
        :is="currentForm"
        :model-value="ruleForm"
        @update:model-value="(newForm: Form) =>  props.setForm(Object.assign(ruleForm, newForm))"
      ></component>
    </transition>

    <el-form-item class="mt-auto ms-auto">
      <el-button v-if="active > 0" @click="submitForm(ruleFormRef, -1)"
        >Voltar</el-button
      >
      <el-button type="primary" @click="submitForm(ruleFormRef)">{{
        active > inputsForm.length ? "Fazer pedido" : "Próximo"
      }}</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
.translate-enter-active,
.translate-leave-active {
  transition: all 0.2s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
