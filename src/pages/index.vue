<script setup lang="ts">
import { dummyBlogs } from "@/common/constants/dummyData";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <h1 class="title-30 mt-[20px]">My Articles 🤓</h1>
  <BlogListHeader class="mt-[30px]"></BlogListHeader>
  <BlogList
    class="mt-2"
    v-for="blog in dummyBlogs"
    :key="blog.title"
    :title="blog.title"
    :date="blog.date"
    :status="blog.status"
    :tags="blog.tags"
    :category="blog.category"
  ></BlogList>
</template>

<route lang="yaml">
meta:
  layout: default
</route>

<style lang="scss" scoped></style>
