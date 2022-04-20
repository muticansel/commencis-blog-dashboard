<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const [sidebarVisible, sidebarToggle] = useToggle(false)

const menuItems = [
  {
    id: 'dashboard',
    iconName: 'dashboard',
    menuItem: 'Dashboard',
    menuPath: '/login',
  },
  {
    id: 'myArticles',
    iconName: 'articles',
    menuItem: 'My Articles',
  },
]

const classObject = computed(() => ({
  'w-1/6': !sidebarVisible.value,
  'w-1/3': sidebarVisible.value,
}))

</script>

<template>
  <div id="sidebar" :class="classObject" class="sidebar">
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
    background-color: white;
  transition: 0.4s ease-in-out all;
}
</style>
