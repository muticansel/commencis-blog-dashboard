<script setup lang="ts">
interface Props {
  isSidebarOpen: boolean;
  items: any;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="flex-col justify-center align-middle">
    <MenuItem
      v-for="item in items"
      :item="item"
      :key="item.id"
      :isSidebarOpen="isSidebarOpen"
    />
  </div>
</template>

<style scoped></style>
