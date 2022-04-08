<script setup lang="ts">
interface Props {
  isSidebarOpen: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="flex align-middle h-[48px]">
    <div
      id="user-avatar"
      class="w-[48px] h-[48px] bg-gray-100 justify-center rounded-full"
    ></div>
    <div
      v-if="isSidebarOpen"
      class="flex flex-col h-full align-middle justify-center"
    >
      WELCOME
    </div>
    <!-- <div id="settings">SETTINGS</div> -->
  </div>
</template>

<style scoped></style>
