<script setup lang="ts">
interface Props {
  isSidebarOpen: boolean;
  item: {
    iconName: string;
    menuItem: string;
  };
}
const props = defineProps<Props>();
</script>

<template>
  <div class="flex pl-[30px] justify-between mb-[20px]">
    <b>{{ item.iconName }}</b>
    <b>{{ item.menuItem }}</b>
    <b>ICON</b>
  </div>
</template>

<style scoped></style>
