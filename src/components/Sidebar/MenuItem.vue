<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconDashboard from '../icons/iconDashboard.vue'
import IconArticles from '../icons/iconArticles.vue'
const router = useRouter()
interface Props {
  isSidebarOpen: boolean
  item: {
    iconName: string
    menuItem: string
    menuPath: string
  }
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
}

// dynamic icon decider
const iconComponent = computed(() => {
  switch (props.item.iconName) {
    case ICONS.DASHBOARD:
      return IconDashboard
    case ICONS.ARTICLES:
      return IconArticles
  }
})
</script>

<template>
  <div class="flex items-center pl-[30px] mb-[20px]" @click="goToMenu">
    <component :is="iconComponent" />
    <b v-if="isSidebarOpen" class="pl-[15px] base-body-18">{{ item.menuItem }}</b>
  </div>
</template>

<style scoped>
</style>
