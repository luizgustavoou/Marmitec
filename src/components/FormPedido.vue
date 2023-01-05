<script setup lang="ts">
import {
  FeijaoInputs,
  AcompanhamentoInputs,
  ProgressForm,
  ProteinaInputs,
} from "@/components";
import { computed, onMounted, reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import type { Acompanhamentos, Form, Proteinas } from "@/types/Forms";

//TODO: Passar isso por meio de props e pegar esse valor e passar como props aos componentes de ProteinaInputs e AcompanhamentoInputs
const proteinLimit = 3;
const acompanhamentoLimit = 6;

const props = defineProps<{
  setForm: (f: Form) => void;
  submit: any;
}>();

const objectComponent = (component: any, label: string) => {
  return {
    component,
    label,
  };
};

const inputsForm = [
  objectComponent(ProteinaInputs, "Proteínas"),
  objectComponent(FeijaoInputs, "Feijão"),
  objectComponent(AcompanhamentoInputs, "Acompanhamentos"),
];

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
  acompanhamentos: {
    arroz_refogado: 0,
    arroz_leite: 0,
    macarrao: 0,
    leg_salteados: 0,
    sala_crua: 0,
    maca_cozida: 0,
  },
  desc: "",
});

const validatorAmountProtein = (rule: any, value: Proteinas, callback: any) => {
  const sum = Object.values(value).reduce(
    (previous, current) => previous + current,
    0
  );

  if (sum < proteinLimit) {
    callback(new Error("Insere o mínimo de proteína."));
  } else {
    callback();
  }
};

const validatorAmountAcompanhamento = (
  rule: any,
  value: Acompanhamentos,
  callback: any
) => {
  const sum = Object.values(value).reduce(
    (previous, current) => previous + current,
    0
  );

  if (sum < acompanhamentoLimit) {
    callback(new Error("Insere o mínimo de acompanhamento."));
  } else {
    callback();
  }
};
const rules = reactive<FormRules>({
  proteinas: [
    {
      validator: validatorAmountProtein,
      trigger: "blur",
    },
  ],
  acompanhamentos: [
    {
      validator: validatorAmountAcompanhamento,
      trigger: "blur",
    },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  formEl.validate((valid) => {
    if (valid && active.value < inputsForm.length - 1) {
      next();
    } else if (valid) {
      console.log("Submit!");
    } else {
      console.log("error!");
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
  active.value++;
  if (active.value > 3) active.value = 0;
};

const prev = () => {
  active.value--;

  if (active.value < 0) active.value = 0;
};

const currentForm = computed(() => {
  return inputsForm[active.value].component;
});

onMounted(() => {
  // console.log(currentForm.value);
});
</script>

<template>
  <ProgressForm :components="inputsForm" :active="active"></ProgressForm>

  <el-form
    size="large"
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    :hide-required-asterisk="true"
    class="d-flex flex-column h-100"
  >
    <transition name="translate" mode="out-in">
      <component
        :is="currentForm"
        :model-value="ruleForm"
        @update:model-value="(newForm: Form) =>  props.setForm(Object.assign(ruleForm, newForm))"
      ></component>
    </transition>

    <el-form-item class="mt-auto ms-auto">
      <el-button v-if="active > 0" @click="prev">Voltar</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">{{
        active >= inputsForm.length - 1 ? "Fazer pedido" : "Próximo"
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
