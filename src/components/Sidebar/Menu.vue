<script setup lang="ts">
const route = useRoute()
interface Props {
  isSidebarOpen: boolean
  items: [{
    id: string
    iconName: string
    menuItem: string
    menuPath: string
  }]
}
const props = defineProps<Props>()

const menuIsActive = (menuId: string) => {
  const routeArr = route.path.split('/')
  const found = props.items.find(x => x.id === menuId)
  return routeArr[routeArr.length - 1] === found?.id
}
</script>

<template>
  <div class="flex-col justify-center align-middle">
    <MenuItem
      v-for="item in items"
      :key="item.id" :item="item" :is-active="menuIsActive(item.id)"
      :is-sidebar-open="isSidebarOpen"
    />
  </div>
</template>

<style scoped>
</style>
