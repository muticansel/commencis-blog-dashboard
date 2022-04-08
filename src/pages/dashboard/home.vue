<script setup lang="ts">
import { useToggle } from "@vueuse/core";

const [sidebarVisible, sidebarToggle] = useToggle(false);
</script>

<template>
  <div class="flex w-full h-full">
    <div
      class="bg-red-300 w-2/7 sidebar"
      :class="{ 'w-1/7': !sidebarVisible }"
      id="sidebar"
    >
      <div
        class="w-full pl-[24px] pr-[24px] pt-[40px] pb-[50px]"
        id="user-info"
      >
        USER
      </div>
      <div class="flex flex-col h-lg justify-between">
        <div id="sidebar-menu">MENU</div>
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
