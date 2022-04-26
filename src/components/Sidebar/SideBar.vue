<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const [sidebarVisible, sidebarToggle] = useToggle(false)

const menuItems = [
  {
    id: 'home',
    iconName: 'dashboard',
    menuItem: 'sidebar.menuDashboard',
    menuPath: '/dashboard/home',
  },
  {
    id: 'my-articles',
    iconName: 'articles',
    menuItem: 'sidebar.menuMyArticles',
    menuPath: '/dashboard/my-articles',
  },
  {
    id: 'pomodore',
    iconName: 'pomodore',
    menuItem: 'sidebar.menuPomodore',
    menuPath: '/dashboard/pomodore',
  },
  {
    id: 'internal',
    iconName: 'internal',
    menuItem: 'sidebar.menuInternal',
    menuPath: '/dashboard/internal',
  },
  {
    id: 'support',
    iconName: 'IT support',
    menuItem: 'sidebar.menuITSupport',
    menuPath: '/dashboard/support',
  },
]

const classObject = computed(() => ({
  'w-1/6': !sidebarVisible.value,
  'w-1/3': sidebarVisible.value,
}))

</script>

<template>
  <div id="sidebar" :class="classObject" class="sidebar ">
    <div id="user-info" class="w-full pl-[24px] pr-[24px] pt-[40px] pb-[50px]">
      <UserInfo :is-sidebar-open="sidebarVisible" />
    </div>
    <div class="flex flex-col h-lg justify-between">
      <Menu :items="menuItems" :is-sidebar-open="sidebarVisible" />
      <BaseButton text="Toggle" @click="sidebarToggle" />
      <div id="sidebar-logout">
        {{ t("login.logout") }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.example-class {
    display: flex;
}
.sidebar {
  @apply dark:bg-gray-900 bg-light-100;
  transition: 0.4s ease-in-out all;
}

</style>
