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
      d="M6.3 6.3V2.6796L5.0204 3.9599L4.0299 2.9701L7 0L9.9701 2.9701L8.9796 3.9599L7.7 2.6796V6.3H11.3204L10.0401 5.0204L11.0299 4.0299L14 7L11.0299 9.9701L10.0401 8.9796L11.3204 7.7H7.7V11.3204L8.9796 10.0401L9.9701 11.0299L7 14L4.0299 11.0299L5.0204 10.0401L6.3 11.3204V7.7H2.6796L3.9599 8.9796L2.9701 9.9701L0 7L2.9701 4.0299L3.9599 5.0204L2.6796 6.3H6.3Z"
      :fill="svgColor"
    />
  </svg>
</template>
