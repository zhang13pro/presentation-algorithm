<script setup>
import { ref } from "vue";

const props = defineProps({
  count: {
    type: Number,
    default: 1,
  },
});
const step = ref(0);

function nextStep() {
  step.value += 100 / props.count;
}
</script>

<template>
  <span class="uppercase">pre</span>
  <progress @click="nextStep" :value="step" max="100"></progress>
  <span class="uppercase">post</span>
</template>
