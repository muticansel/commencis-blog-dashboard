<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '@/composables/dark'
import { useUserStore } from '@/stores/user'
import { allColors } from '@/common/constants/style/colors'
const user = useUserStore()
const { username } = toRefs(user)
const { t } = useI18n()

const sunColor = allColors.orange['300']
const notificationColor = allColors.teal['500']
const leftArrowColor = allColors.blue['200']

</script>

<template>
  <div class="header-wrapper bg-white dark:bg-dark-200 dark:text-white">
    <div class="flex items-center gap-[16px]">
      <BaseIconButton rounded="full" class="icon-button">
        <arrow-left class="arrow" :svg-color="leftArrowColor" />
      </BaseIconButton>
      <h4 class="title-35">
        {{ t('greet') }}   {{ username }}
      </h4>
    </div>
    <div class="flex items-center gap-[24px]">
      <BaseIconButton class="icon-button" @click="toggleDark()">
        <!-- TODO: add transition to change color mode   -->
        <sun v-if="isDark" :svg-color="sunColor" />
        <moon v-else />
      </BaseIconButton>
      <BaseIconButton><notification :svg-color="notificationColor" /></BaseIconButton>
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
    .icon-button:hover {
      background-color: rgb(75, 75, 75);
    }
}

</style>
