<template>
  <div class="wrapper">
    <div class="w-3/6 bg-blue-100 flex justify-center items-center">
      <div class="w-[80%] h-[60%] flex justify-center items-center flex-col bg-white">
        <RouterView />
      </div>
    </div>
    <div class="w-3/6 bg-right" />
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  @apply bg-orange-200  text-black w-full h-full flex;
}
.bg-right {
  background-image: url("../assets/images/login-right.png");
  background-size: cover;
}
</style>
