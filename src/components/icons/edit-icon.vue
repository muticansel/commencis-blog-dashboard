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
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.55808 12.4419H2.65965L9.91565 5.18592L8.81408 4.08435L1.55808 11.3404V12.4419ZM14.0228 14H0V10.6945L10.4664 0.228093C10.6125 0.0820452 10.8106 0 11.0172 0C11.2238 0 11.4219 0.0820452 11.568 0.228093L13.7719 2.432C13.918 2.5781 14 2.77621 14 2.98279C14 3.18936 13.918 3.38748 13.7719 3.53357L4.86356 12.4419H14.0228V14ZM9.91565 2.98279L11.0172 4.08435L12.1188 2.98279L11.0172 1.88122L9.91565 2.98279V2.98279Z"
      :fill="svgColor"
    />
  </svg>
</template>
