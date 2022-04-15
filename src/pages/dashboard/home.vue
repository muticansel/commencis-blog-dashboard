<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const [sidebarVisible, sidebarToggle] = useToggle(false)
const menuItems = [
  {
    id: 'dashboard',
    iconName: 'D',
    menuItem: 'Dashboard',
  },
  {
    id: 'myArticles',
    iconName: 'A',
    menuItem: 'My Articles',
  },
]

const classObject = computed(() => ({
  'w-1/6': !sidebarVisible.value,
  'w-1/3': sidebarVisible.value,
}))
</script>

<template>
  <div class="flex w-full h-full">
    <div id="sidebar" :class="classObject" class="sidebar">
      <div id="user-info" class="w-full pl-[24px] pr-[24px] pt-[40px] pb-[50px]">
        <UserInfo :is-sidebar-open="sidebarVisible" />
      </div>
      <div class="flex flex-col h-lg justify-between">
        <Menu :items="menuItems" :is-sidebar-open="sidebarVisible" />
        <div id="sidebar-logout">
          {{ t("login.logout") }}
        </div>
      </div>
    </div>
    <div class="bg-yellow-100 flex-1">
      <div id="header">
        <BaseButton text="Toggle" @click="sidebarToggle" />
      </div>
      <div id="content" />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  transition: 0.4s ease-in-out all;
}
</style>
