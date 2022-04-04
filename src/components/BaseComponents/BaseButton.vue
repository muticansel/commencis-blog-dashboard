<script setup lang="ts">
interface Props {
  text: string;
  buttonClass: string
}
const props = defineProps<Props>();
const emit = defineEmits(["click"]);

const clickHandler = () => {
  emit("click", { name: "clicked", props: { ...props } });
};
</script>

<template>
  <button :class="['bg-blue-500', 'text-white', 'px-5', 'py-2', buttonClass]" @click="clickHandler">{{ text }}</button>
</template>
