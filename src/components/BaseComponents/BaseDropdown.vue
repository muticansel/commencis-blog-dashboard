<script lang="ts" setup>
interface Props {
  items: string[]
  showDropdown: boolean
}
const props = defineProps<Props>()
const emit = defineEmits(['contextClick'])

const handleContextClick = (eventName: string) => {
  emit('contextClick', eventName)
}
const firstGroupOfItems = props.items.slice(0, 4)
const restItems = props.items.slice(4)
</script>

<template>
  <transition name="dropdown-content">
    <div>
      <div
        v-if="showDropdown"
        ref="dropdownRef"
        class="origin-top-bottom absolute dropdown-item z-10 right-0 mt-5 w-40 rounded-[4px] bg-white py-[24px]"
      >
        <button
          v-for="item in firstGroupOfItems"
          :key="item"
          class="dropdown-common-item"
          @click.prevent="handleContextClick(item)"
        >
          <span>{{ item }}</span>
        </button>
        <BaseDivider />
        <button
          v-for="item in restItems"
          :key="item"
          class="dropdown-common-item"
          @click.prevent="handleContextClick(item)"
        >
          <move-icon />
          <span>{{ item }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.dropdown-common-item {
  @apply block w-full px-[24px]
    hover:bg-gray-200 text-left
     font-medium text-gray-800
     py-[5px] flex gap-3;
}
.dropdown-item {
  border: 1px solid #dfe0eb;
  box-shadow: 0px 4px 4px rgba(11, 20, 44, 0.06);
  color: #fbfaf9;
}
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all ease 0.3s;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
