<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
interface Props {
  isSidebarOpen: boolean
  item: {
    iconName: string
    menuItem: string
  }
}
const props = defineProps<Props>()

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="flex pl-[30px] mb-[20px]" @click="goToLogin">
    <b class="pr-5">{{ item.iconName }}</b>
    <b>{{ item.menuItem }}</b>
  </div>
</template>

<style scoped>
</style>
