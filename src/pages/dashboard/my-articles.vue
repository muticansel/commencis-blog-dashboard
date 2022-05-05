<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-wrap h-full p-[24px]">
    <CardArticle />
    <CardArticle />
    <CardArticle />
    <CardArticle />
  </div>
</template>
