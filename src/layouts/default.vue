<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="w-full flex h-full bg-gray-100">
    <div class="w-2/7 h-full bg-gray-400" />
    <div class="bg-white w-full">
      <Header />
      <div class="h-full w-full px-[24px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>
