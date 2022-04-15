<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="flex w-full h-full">
    <div class="bg-yellow-100 flex-1">
      <div id="header" />
      <div id="content" />
    </div>
  </div>
</template>
