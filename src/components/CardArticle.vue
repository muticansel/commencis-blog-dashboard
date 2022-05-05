<script setup lang="ts">
import _articleDefaultImage from '../assets/images/article-default-image.png'
</script>

<template>
  <div class="article-card__wrapper w-[30%] mr-[24px] mb-[16px]">
    <div class="w-full">
      <img :src="_articleDefaultImage" alt="">
    </div>
    <div class="px-[30px] py-[16px]">
      <div class="body-text mb-[10px]">
        01.01.2022
      </div>
      <div class="article-card__title mb-[60px]">
        HEADLINE
      </div>
      <div class="body-text">
        Meta description
      </div>
    </div>
  </div>
</template>

<style scoped>
    .article-card__wrapper {
        height: 70%;
        background-color: #EEF0F3;
        @apply text-purple-500;
    }
    .article-card__title {
      font-family: 'Raleway';
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 26px;
    }
</style>
