<script setup lang="ts">
const name = ref('')
</script>

<template>
  <main>
    <div class="container flex flex-col gap-7 text-black justify-between items-center bg-orange-500 p-6">
      <!-- <RouterLink to="/login">
        Login
      </RouterLink> -->
      <BaseInput v-model="name" placeholder="whatsyourname" />
      <h2 class="text-xl">
        <span class="font-bold italic">Your name is:</span> {{ name }}
      </h2>
    </div>
  </main>
</template>
<style lang="scss" scoped>
</style>
