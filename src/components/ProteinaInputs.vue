<script setup lang="ts">
import type { Form } from "@/types/Forms";
import { ShowChosen } from "@/components";
import { computed, onMounted, reactive, ref, watch } from "vue";
import proteinas from "@/utils/proteinas";

// TODO: depois pensar em passar esse proteinLimit como uma props de um componente pai. Dessa forma, terá opções de marmita, como marmita de 27 reais que tem direito a X proteinas, Y acompanhamentos e etc.
const proteinLimit = 3;

const props = defineProps<{
  modelValue: Form;
}>();

const proteinForm = reactive({
  fraMilanesa: 0,
  fraAssado: 0,
  figaAce: 0,
  bisSuiAce: 0,
  fraMolho: 0,
});

const emit = defineEmits<{
  (e: "update:modelValue", newForm: Form): void;
}>();

const proteinasFormated = computed(() => {
  return Object.entries(proteinas);
});

watch(proteinForm, (obj) => {
  let newForm: Form = props.modelValue;

  newForm.proteinas = { ...obj };

  emit("update:modelValue", newForm);
});

const proteinsChosen = computed(() => {
  return Object.values(proteinForm).reduce(
    (previous, currentValue) => previous + currentValue,
    0
  );
});

watch(props.modelValue, (newProps) => {
  Object.assign(proteinForm, newProps.proteinas);
});

onMounted(() => {
  Object.assign(proteinForm, props.modelValue.proteinas);
});
</script>
<template>
  <div>
    <ShowChosen :all="proteinLimit" :chosen="proteinsChosen"></ShowChosen>
    <el-form-item prop="proteinas">
      <div
        class="d-flex justify-content-between w-100 mb-3"
        v-for="[key, label] in proteinasFormated"
      >
        <label>{{ label }}</label>
        <el-input-number
          v-model="proteinForm[key]"
          :min="0"
          :max="proteinsChosen >= proteinLimit ? proteinForm[key] : undefined"
        />
      </div>
    </el-form-item>
  </div>
</template>
<style></style>
