<script setup lang="ts">
import BlogTag from "./BlogTag.vue";
interface Props {
  title: string;
  date: string;
  status: string /* "draft" | "published" | "freestyle" */;
  tags: string[];
  category: string;
}
const [showDropdown, toggleDropdown] = useToggle(true);
const dropdownRef = ref(null);

onClickOutside(dropdownRef, () => {
  showDropdown.value = false;
});
const contextClickHandler = (eventName: string) => {
  console.log(eventName);
};

const props = defineProps<Props>();
const emits = defineEmits(["emits"]);

const hanldeDropdown = () => {
  toggleDropdown();
};
</script>

<template>
  <div class="bloglist-wrapper">
    <div class="flex justify-between items-center min-w-[271px]">
      <h4 class="base-small">{{ title }}</h4>
      <h4 class="base-small">{{ date }}</h4>
    </div>
    <div class="flex justify-between items-center min-w-[556px]">
      <BlogTag :text="status" />
      <div class="flex flex-col gap-1 flex-wrap">
        <BlogTag v-for="tag in tags" :key="tag" :text="tag" />
      </div>
      <BlogTag :text="category" />
      <div
        @click="hanldeDropdown"
        class="w-[40px] hover:bg-light-400 rounded-md py-2 flex justify-center items-center relative cursor-pointer"
      >
        <EditIconThreeDots> </EditIconThreeDots>
        <BlogListDropdown
          ref="dropdownRef"
          :items="contextItems"
          :show-dropdown="showDropdown"
          :title="title"
          @context-click="contextClickHandler"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bloglist-wrapper {
  @apply w-full flex justify-between items-center px-[30px] py-[19px] gap-[127px];
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  border: 1px solid #e2e4ffaf;
  box-shadow: 0px 2px 8px rgba(224, 236, 255, 0.15);
  border-radius: 12px;
  border-left: solid 15px #2f83e4;
}
</style>
