<script setup lang="ts">
import { ShowChosen } from "@/components";
import type { Form } from "@/types/Forms";
import { computed, onMounted, reactive, ref, watch } from "vue";
import acompanhamentos from "@/utils/acompanhamentos";

// TODO: depois pensar em passar esse acompanhamentoLimit como uma props de um componente pai. Dessa forma, terá opções de marmita, como marmita de 27 reais que tem direito a X proteinas, Y acompanhamentos e etc.
const acompanhamentoLimit = 6;

const props = defineProps<{
  modelValue: Form;
}>();

const acompanhamentosForm = reactive({
  arrozRefo: 0,
  arrozLeite: 0,
  macarrao: 0,
  legSalte: 0,
  salaCrua: 0,
  macaCozida: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", newForm: Form): void;
}>();

const acompanhamentosFormated = computed(() => {
  return Object.entries(acompanhamentos);
});

watch(acompanhamentosForm, (obj) => {
  let newForm: Form = props.modelValue;

  newForm.acompanhamentos = { ...obj };

  emit("update:modelValue", newForm);
});

const desc = computed({
  get() {
    return props.modelValue.description;
  },
  set(newDesc) {
    let newForm = { ...props.modelValue };
    newForm.description = newDesc;
    emit("update:modelValue", newForm);
  },
});

const acompanhamentosChosen = computed(() => {
  return Object.values(acompanhamentosForm).reduce(
    (previous, currentValue) => previous + currentValue,
    0
  );
});

watch(props.modelValue, (newProps) => {
  desc.value = props.modelValue.description;
  Object.assign(acompanhamentosForm, newProps.acompanhamentos);
});

onMounted(() => {
  Object.assign(acompanhamentosForm, props.modelValue.acompanhamentos);
});
</script>
<template>
  <div>
    <ShowChosen
      :all="acompanhamentoLimit"
      :chosen="acompanhamentosChosen"
    ></ShowChosen>
    <el-form-item prop="acompanhamentos">
      <div
        class="d-flex justify-content-between w-100 mb-3"
        v-for="[key, label] in acompanhamentosFormated"
      >
        <label>{{ label }}</label>
        <el-input-number
          v-model="acompanhamentosForm[key]"
          :min="0"
          :max="
            acompanhamentosChosen >= acompanhamentoLimit
              ? acompanhamentosForm[key]
              : undefined
          "
        />
      </div>
    </el-form-item>

    <el-form-item prop="desc">
      <label for="">Descrição</label>
      <el-input v-model="desc" type="textarea" />
    </el-form-item>
  </div>
</template>
<style></style>
