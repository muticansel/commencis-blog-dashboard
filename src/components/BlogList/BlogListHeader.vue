<script setup lang="ts"></script>

<template>
  <div class="header-wrapper">
    <div class="flex justify-between items-center min-w-[271px]">
      <h4 class="pre-title">TITLE</h4>
      <h4 class="pre-title">DATE</h4>
    </div>
    <div class="flex justify-between items-center min-w-[556px]">
      <h4 class="pre-title">STATUS</h4>
      <h4 class="pre-title">TAGS</h4>
      <h4 class="pre-title">CATEGORY</h4>
      <h4 class="pre-title">EDIT</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  @apply w-full flex justify-between items-center px-[30px] py-[19px] gap-[127px];
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
</style>
