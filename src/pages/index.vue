<script setup lang="ts">
import { dummyBlogs } from "@/common/constants/dummyData";
</script>

<template>
  <div class="w-full flex h-full bg-gray-100">
    <div class="w-2/7 h-full bg-gray-400"></div>
    <div class="bg-white w-full">
      <div class="p-7 bg-blue-400">
        <h1>Hello</h1>
      </div>
      <div class="h-full w-full px-[24px]">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
