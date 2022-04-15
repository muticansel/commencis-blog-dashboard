<script setup lang="ts">
interface Props {
  rounded?: 'full' | 'middle'
}
const props = defineProps<Props>()
</script>

<template>
  <button class="button" :class="{'rounded-[99px]': rounded === 'full'}" v-bind="$attrs">
    <slot />
  </button>
</template>

<style lang="scss" scoped>

.button {
    @apply border-[1px] border-solid border-gray-200
     rounded-[8px] hover:bg-light-100;
    padding: 12px 20px;
}

</style>
