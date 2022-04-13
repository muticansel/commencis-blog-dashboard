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
</script>

<template>
  <div class="flex w-full h-full">
    <div
      class="w-1/3 sidebar"
      :class="{ 'w-1/6': !sidebarVisible }"
      id="sidebar"
    >
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
    <div class="bg-yellow-100 w-full" id="main">
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
