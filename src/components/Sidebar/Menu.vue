<script setup lang="ts">
interface Props {
  isSidebarOpen: boolean
  items: any
}
const props = defineProps<Props>()
</script>

<template>
  <div class="flex-col justify-center align-middle">
    <MenuItem v-for="item in items" :key="item.id" :item="item" :is-sidebar-open="isSidebarOpen" />
  </div>
</template>

<style scoped>
</style>
