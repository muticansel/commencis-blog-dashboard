<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="w-full flex h-full bg-gray-100 dark:bg-dark-900">
    <SideBar />
    <div class="bg-white w-full dark:bg-gray-800">
      <Header />
      <div class="h-full w-full px-[24px] dark:bg-gray-800 dark:text-white">
        <RouterView />
      </div>
    </div>
  </div>
</template>
