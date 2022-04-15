<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { dummyBlogs } from '@/common/constants/dummyData'
const { t } = useI18n()
</script>

<template>
  <h1 class="title-30 mt-[20px]">
    {{ t('blog.myArticles') }} 🤓
  </h1>
  <BlogListHeader class="mt-[30px]" />
  <BlogList
    v-for="blog in dummyBlogs"
    :key="blog.title"
    class="mt-2"
    :title="blog.title"
    :date="blog.date"
    :status="blog.status"
    :tags="blog.tags"
    :category="blog.category"
  />
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<style lang="scss" scoped></style>
