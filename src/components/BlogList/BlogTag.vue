<script setup lang="ts">
interface Props {
  text: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="blog-tag base-body-12">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.blog-tag {
  @apply px-[12px] py-[2px] inline-block  rounded-[12px] bg-yellow-400 ml-[2px];
}
</style>
