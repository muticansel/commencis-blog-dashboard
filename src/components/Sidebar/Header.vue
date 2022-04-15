<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '@/composables/dark'
import { useUserStore } from '@/stores/user'
const user = useUserStore()
const { username } = toRefs(user)
const { t } = useI18n()

</script>

<template>
  <div class="header-wrapper bg-white dark:bg-gray-800 dark:text-white">
    <div class="flex items-center gap-[16px]">
      <BaseIconButton rounded="full" class="icon-button">
        <arrow-left class="arrow" />
      </BaseIconButton>
      <h4 class="title-35">
        {{ t('greet') }}   {{ username }}
      </h4>
    </div>
    <div class="flex items-center gap-[24px]">
      <BaseIconButton class="icon-button" @click="toggleDark()">
        <!-- TODO: add transition to change color mode   -->
        <sun v-if="isDark" class=" fill-gray-50 " />
        <moon v-else />
      </BaseIconButton>
      <BaseIconButton><notification /></BaseIconButton>
      <BaseButton text="basebutton" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
    height: 96px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    .icon-button:hover svg {
        fill: gray;
    }
}

</style>
