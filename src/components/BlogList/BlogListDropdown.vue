<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { allColors } from '@/common/constants/style/colors'
import { isDark } from '@/composables/dark'

interface Props {
  title: string
  showDropdown: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['contextClick'])
const { t } = useI18n()

const iconColor = computed(() => {
  return isDark.value ? allColors.gray['200'] : allColors.gray['900']
})

const handleContextClick = (eventName: string) => {
  emit('contextClick', eventName)
}
</script>

<template>
  <transition name="dropdown-content">
    <div>
      <div
        v-if="showDropdown"
        ref="dropdownRef"
        class="origin-top-bottom absolute dropdown-item base-body-12 z-10 right-0 mt-5 w-40 rounded-[6px] bg-white dark:bg-dark-300 py-[12px]"
      >
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('title')"
        >
          <span class="h-[24px] title-short">{{ title }}</span>
        </button>
        <BaseDivider class="py-1" />
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('share')"
        >
          <share-icon class="fillClass" :svg-color="iconColor" />
          <span>{{ t("blogdropdown.share") }}</span>
        </button>
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('copy')"
        >
          <copy-icon class="symbol-icons" :svg-color="iconColor" />
          <span>{{ t("blogdropdown.copy") }}</span>
        </button>
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('star')"
        >
          <star-icon :svg-color="iconColor" />
          <span>{{ t("blogdropdown.star") }}</span>
        </button>
        <BaseDivider class="py-1" />
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('delete')"
        >
          <delete-icon :svg-color="iconColor" />
          <span>{{ t("blogdropdown.delete") }}</span>
        </button>
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('move')"
        >
          <move-icon :svg-color="iconColor" />
          <span>{{ t("blogdropdown.move") }}</span>
        </button>
        <button
          class="dropdown-common-item"
          @click.prevent="handleContextClick('edit')"
        >
          <edit-icon :svg-color="iconColor" />
          <span>{{ t("blogdropdown.edit") }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.dropdown-common-item {
  @apply block w-full px-[24px]  hover:bg-gray-200
  text-left text-gray-800 py-[5px] flex gap-3 bg-transparent
  dark:bg-dark-200 dark:text-gray-100 dark:hover:bg-dark-700;
}
.dropdown-item {
  border: 1px solid #dfe0eb;
  box-shadow: 0px 4px 4px rgba(11, 20, 44, 0.06);
  color: #fbfaf9;
  .title-short {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.icon-fill svg path{
  fill: white !important;
}
.dark .dropdown-item {
  box-shadow: 0px 4px 4px rgba(2, 9, 29, 0.06);
  border: 1px solid #5a5a5a;
}
.dropdown-content-enter-active,
.dropdown-content-leave-active {
  transition: all ease 0.3s;
}
.fillClass path{
  fill: aqua;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
