<script setup lang="ts">
import { ProteinInput } from "@/components";
import { computed, reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import type { Form } from "@/types/Forms";

const props = defineProps<{
  setDesc: any;
  setAmountProtein: any;
  submit: any;
}>();

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  proteinas: [],
  feijao: [],
  acompanhamentos: [],
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
      //props.submit();
      next();
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

const active = ref(0);

const next = () => {
  if (active.value++ > 2) active.value = 0;
};

const forms = [ProteinInput];

const currentForm = computed(() => {
  return forms[active.value];
});
// const flag = ref(false);
</script>

<template>
  <!-- {{ currentForm }} -->
  <!-- <button @click="() => (flag = !flag)">teste</button>
  {{ flag }} -->
  <el-steps :active="active" finish-status="success">
    <el-step title="Proteínas" />
    <el-step title="Feijão" />
    <el-step title="Mais" />
  </el-steps>
  {{ active }}

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
    <!-- <InputsForm1
      :model-value="ruleForm"
      @update:model-value="(newForm) => Object.assign(ruleForm, newForm)"
    ></InputsForm1> -->

    <component
      :is="currentForm"
      :model-value="ruleForm"
      @update:model-value="(newForm: Form) =>  Object.assign(ruleForm, newForm)"
    ></component>

    <el-form-item class="mt-auto ms-auto">
      <el-button @click="resetForm(ruleFormRef)">Resetar pedido</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Enviar pedido</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style></style>
