<script setup lang="ts">
import { LoadingReq, ProgressForm } from "@/components";
import { computed, onMounted, reactive, ref, watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import type { Acompanhamentos, Form, Proteinas } from "@/types/Forms";
import { AxiosResponse } from "axios";

//TODO: Passar isso por meio de props e pegar esse valor e passar como props aos componentes de ProteinaInputs e AcompanhamentoInputs
const proteinLimit = 3;
const acompanhamentoLimit = 6;
//FIM TODO

const props = defineProps<{
  loading: boolean;
  active: number;
  inputsForms: Array<{ component: any; label: string }>;
  setForm: (f: Form) => void;
  submit: (cb: () => void) => void;
}>();

const emit = defineEmits<{
  (e: "update:active", num: number): void;
}>();


const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  proteinas: {
    fra_milanesa: 0,
    fra_assado: 0,
    figa_ace: 0,
    bis_sui_ace: 0,
    fra_molho: 0,
  },
  acompanhamentos: {
    arroz_refogado: 0,
    arroz_leite: 0,
    macarrao: 0,
    leg_salteados: 0,
    sala_crua: 0,
    maca_cozida: 0,
  },
  feijao: 1,
  desc: "",
});

function updateActiveProps(num: number) {
  emit("update:active", num);
}

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
    if (valid && props.active < props.inputsForms.length - 1) {
      next();
    } else if (valid) {
      props.submit(resetForm);
    } else {
      return false;
    }
  });
};

// const resetForm = (formEl: FormInstance | undefined) => {
//   if (!formEl) return;

//   console.log(formEl);

//   formEl.resetFields();
//   props.setForm(ruleForm);
// };

const resetForm = () => {
  ruleForm.desc = "";
  ruleForm.feijao = 1;

  Object.keys(ruleForm).forEach((key_) => {
    if (key_ != "desc" && key_ != "feijao") {
      Object.keys(ruleForm[key_]).forEach((key) => {
        ruleForm[key_][key] = 0;
      });
    }
  });
};

const next = () => {
  updateActiveProps(props.active + 1);
  if (props.active > 3) updateActiveProps(0);
};

const prev = () => {
  updateActiveProps(props.active - 1);
  if (props.active < 0) updateActiveProps(0);
};

const currentForm = computed(() => {
  return props.inputsForms[props.active].component;
});

onMounted(() => {
  // console.log(currentForm.value);
});
</script>

<template>
  <ProgressForm
    v-if="!props.loading"
    :components="props.inputsForms"
    :active="props.active"
  ></ProgressForm>

  <el-form
    size="large"
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    :hide-required-asterisk="true"
    class="d-flex flex-column h-100"
  >
    <transition name="translate" mode="out-in" v-if="!props.loading">
      <component
        :is="currentForm"
        :model-value="ruleForm"
        @update:model-value="(newForm: Form) =>  props.setForm(Object.assign(ruleForm, newForm))"
      ></component>
    </transition>
    <LoadingReq v-else></LoadingReq>

    <el-form-item class="mt-auto ms-auto" v-if="!props.loading">
      <!-- <el-button @click="resetForm">Reset</el-button> -->
      <el-button v-if="props.active > 0" @click="prev">Anterior</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">{{
        props.active >= props.inputsForms.length - 1
          ? "Fazer pedido"
          : "Próximo"
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
