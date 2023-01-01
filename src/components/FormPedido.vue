<script setup lang="ts">
import { InputsForm1 } from "@/components";
import { reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";

const props = defineProps<{
  setDesc: any;
  setAmountProtein: any;
  submit: any;
}>();

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  desc: "",
  amountProtein: 1,
});

watch(
  () => ruleForm.desc,
  (desc) => {
    props.setDesc(desc);
  }
);

watch(
  () => ruleForm.amountProtein,
  (amount) => {
    props.setAmountProtein(amount);
  }
);

const rules = reactive<FormRules>({
  desc: [
    {
      required: true,
      message: "Por favor insira uma descrição do pedido.",
      trigger: "blur",
    },
  ],
  amountProtein: {
    required: true,
    message: "Por favor insira quantidade de proteínas",
    trigger: "blur",
  },
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      props.submit();
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <el-form
    size="large"
    :label-position="'top'"
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    :hide-required-asterisk="true"
    class="d-flex flex-column h-100"
  >
    <InputsForm1
      :model-value="ruleForm"
      @update:model-value="(newForm) => Object.assign(ruleForm, newForm)"
    ></InputsForm1>
    <el-form-item class="mt-auto">
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Enviar pedido</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Resetar pedido</el-button>
    </el-form-item>
  </el-form>
</template>

<style>
.demo-ruleForm {
}
</style>
