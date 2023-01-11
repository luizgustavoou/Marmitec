<template>
  {{ items2 }}
  <Draggable v-model="items2" transition="300">
    <template #item="{ item }">
      <div>
        {{ item.title }}
      </div>
    </template>
  </Draggable>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import Draggable from "vue3-draggable";

const props = defineProps<{
  modelValue: any;
}>();

const emit = defineEmits(["update:modelValue"]);

const items2 = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    console.log(value);
  
    emit("update:modelValue", value);
  },
});
// const items2 = ref([{ title: "Item 5" }]);
</script>
