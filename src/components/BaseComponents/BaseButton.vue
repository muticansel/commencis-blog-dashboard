<script setup lang="ts">
interface Props {
  text: string;
}
const props = defineProps<Props>();
const emit = defineEmits(["click"]);

const clickHandler = () => {
  emit("click", { name: "clicked", props: { ...props } });
};
</script>

<template>
  <button @click="clickHandler">{{ text }}</button>
</template>
