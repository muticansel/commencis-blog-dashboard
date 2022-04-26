<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import IconDashboard from '../icons/iconDashboard.vue'
import IconArticles from '../icons/iconArticles.vue'
import IconPomodore from '../icons/iconPomodore.vue'
import IconPieChart from '../icons/iconPieChart.vue'
import IconLineChart from '../icons/iconLineChart.vue'
const { t } = useI18n()
const router = useRouter()
interface Props {
  isSidebarOpen: boolean
  item: {
    iconName: string
    menuItem: string
    menuPath: string
  }
  isActive?: boolean
}
const props = defineProps<Props>()

// Opens the related sidebar menu
const goToMenu = () => {
  router.push(props.item.menuPath)
}

// defines the which icon should be displayed
enum ICONS {
  DASHBOARD = 'dashboard',
  ARTICLES = 'articles',
  POMODORE = 'pomodore',
  INTERNAL_COMMENCIS = 'internal',
  IT_SUPPORT = 'IT support',
}

// dynamic icon decider
const iconComponent = computed(() => {
  switch (props.item.iconName) {
    case ICONS.DASHBOARD:
      return IconDashboard
    case ICONS.ARTICLES:
      return IconArticles
    case ICONS.POMODORE:
      return IconPomodore
    case ICONS.INTERNAL_COMMENCIS:
      return IconPieChart
    case ICONS.IT_SUPPORT:
      return IconLineChart
  }
})
</script>

<template>
  <div class="flex items-center pl-[16px] mb-[16px] ml-[24px] mr-[24px] h-[48px] rounded-t-lg rounded-b-lg" :class="{'activeMenu': isActive}" @click="goToMenu">
    <component :is="iconComponent" />
    <b v-if="isSidebarOpen" class="pl-[15px] base-body-18">{{ t(item.menuItem) }}</b>
  </div>
</template>

<style scoped>
  .activeMenu {
    background-color: #593DCD;
    color: white
  }
</style>
