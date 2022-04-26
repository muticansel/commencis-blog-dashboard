<script setup lang="ts">
interface Props {
  isSidebarOpen: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['toggle-sidebar'])

const toggleSidebar = () => {
  emit('toggle-sidebar')
}
</script>

<template>
  <div class="flex align-middle h-[48px]">
    <div
      id="user-avatar"
      class="w-[48px] h-[48px] bg-gray-100 justify-center rounded-full"
    />
    <div
      v-if="isSidebarOpen"
      class="flex flex-col h-full align-middle justify-center"
    >
      WELCOME
    </div>
    <div class="flex h-full w-max items-center justify-end w-[calc(40%)]" @click="toggleSidebar">
      <IconArrowLeftCircle v-if="isSidebarOpen" />
      <IconArrowRightCircle v-else />
    </div>
    <!-- <div id="settings">SETTINGS</div> -->
  </div>
</template>

<style scoped></style>
