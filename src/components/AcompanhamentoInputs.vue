<script setup lang="ts">
import type { Form } from "@/types/Forms";
import { computed, onMounted, reactive, ref, watch } from "vue";
import acompanhamentos from "@/utils/acompanhamentos";

// TODO: depois pensar em passar esse acompanhamentoLimit como uma props de um componente pai. Dessa forma, terá opções de marmita, como marmita de 27 reais que tem direito a X proteinas, Y acompanhamentos e etc.
const acompanhamentoLimit = 6;

const props = defineProps<{
  modelValue: Form;
}>();

const acompanhamentosForm = reactive({
  arroz_refogado: 0,
  arroz_leite: 0,
  macarrao: 0,
  leg_salteados: 0,
  sala_crua: 0,
  maca_cozida: 0,
});

const desc = ref("");

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

watch(desc, (newDesc) => {
  let newForm: Form = props.modelValue;

  newForm.desc = newDesc;

  emit("update:modelValue", newForm);
});

const acompanhamentosChosen = computed(() => {
  return Object.values(acompanhamentosForm).reduce(
    (previous, currentValue) => previous + currentValue,
    0
  );
});

onMounted(() => {
  Object.assign(acompanhamentosForm, props.modelValue.acompanhamentos);
});
</script>
<template>
  <div>
    {{ acompanhamentosChosen }}
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

    <el-form-item>
      <label for="">Descrição</label>
      <el-input v-model="desc" type="textarea" />
    </el-form-item>
  </div>
</template>
<style></style>
