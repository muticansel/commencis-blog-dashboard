<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<template>
  <div class="w-full flex h-full bg-gray-100">
    <div class="w-2/7 h-full bg-gray-400"></div>
    <div class="bg-white w-full">
      <div class="p-7 bg-blue-400">
        <h1>Hello</h1>
        <h2>{{ t("greet") }}</h2>
      </div>
      <div class="h-full w-full px-[24px]">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
