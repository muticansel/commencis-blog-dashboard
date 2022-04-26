<script setup lang="ts">
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "@/assets/base.css";
body,
html,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html.dark{
  background-color: black;
  color: white;
}
html.dark  h1 {
  color: white;
}
</style>
