<script setup lang="ts">

interface Props {
  svgColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  svgColor: 'gray',
})

</script>

<template>
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9902 18H13.0002V11C13.0002 10.447 12.5522 10 12.0002 10H6.00018C5.44718 10 5.00018 10.447 5.00018 11V18H2.00018L2.00618 9.583L8.99818 2.432L16.0002 9.624L15.9902 18ZM7.00018 18H11.0002V12H7.00018V18ZM17.4242 8.185L9.71518 0.301003C9.33818 -0.0839972 8.66218 -0.0839972 8.28518 0.301003L0.575183 8.186C0.210183 8.561 0.000183105 9.085 0.000183105 9.624V18C0.000183105 19.103 0.847183 20 1.88818 20H6.00018H12.0002H16.1112C17.1522 20 18.0002 19.103 18.0002 18V9.624C18.0002 9.085 17.7902 8.561 17.4242 8.185Z" :fill="svgColor" />
  </svg>
</template>
