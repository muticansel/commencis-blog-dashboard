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
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00011 10.6517L2.88586 12.9547L3.80461 8.32999L0.342529 5.12866L5.02495 4.57332L7.00011 0.291656L8.97528 4.57332L13.6577 5.12866L10.1956 8.32999L11.1144 12.9547L7.00011 10.6517ZM7.00011 9.31466L9.47753 10.7012L8.92395 7.91699L11.0082 5.98907L8.18895 5.65482L7.00011 3.07707L5.81128 5.65541L2.99203 5.98907L5.07628 7.91699L4.5227 10.7012L7.00011 9.31466V9.31466Z"
      :fill="svgColor"
    />
  </svg>
</template>
