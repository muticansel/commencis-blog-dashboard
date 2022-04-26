<script setup lang="ts">

interface Props {
  svgColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  svgColor: 'gray',
})

</script>
<template>
  <svg
    width="4"
    height="20"
    viewBox="0 0 4 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2.00008" cy="2.66666" r="1.83333" :fill="svgColor" />
    <circle cx="2.00008" cy="10" r="1.83333" :fill="svgColor" />
    <circle cx="2.00008" cy="17.3333" r="1.83333" :fill="svgColor" />
  </svg>
</template>
