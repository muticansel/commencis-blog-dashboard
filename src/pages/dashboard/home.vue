<script setup lang="ts">
import { useToggle } from "@vueuse/core";

const [sidebarVisible, sidebarToggle] = useToggle(false);
const menuItems = [
  {
    id: "dashboard",
    iconName: "D",
    menuItem: "Dashboard",
  },
  {
    id: "myArticles",
    iconName: "A",
    menuItem: "My Articles",
  },
];

const classObject = computed(() => ({
  "w-1/6": !sidebarVisible.value,
  "w-1/3": sidebarVisible.value,
}));
</script>

<template>
  <div class="flex w-full h-full">
    <div :class="classObject" class="sidebar" id="sidebar">
      <div
        class="w-full pl-[24px] pr-[24px] pt-[40px] pb-[50px]"
        id="user-info"
      >
        <UserInfo :isSidebarOpen="sidebarVisible" />
      </div>
      <div class="flex flex-col h-lg justify-between">
        <Menu :items="menuItems" :isSidebarOpen="sidebarVisible" />
        <div id="sidebar-logout">LOGOUT</div>
      </div>
    </div>
    <div class="bg-yellow-100 flex-1">
      <div id="header"><BaseButton @click="sidebarToggle" text="Toggle" /></div>
      <div id="content"></div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  transition: 0.4s ease-in-out all;
}
</style>
