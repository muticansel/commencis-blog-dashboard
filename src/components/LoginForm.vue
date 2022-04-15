<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import _commencisLogo from '../assets/images/commencis-logo-purple.png'
const { t } = useI18n()
const loginForm = reactive({ name: '', password: '' })
const emailinput = ref<HTMLInputElement>()

onMounted(() => {
  emailinput.value?.focus()
})

const submitForm = (event: Event) => {
  // console.log(event)
  // console.log({ ...loginForm })
}

const handleBaseClick = () => {
  // console.log(a)
}
</script>

<template>
  <img :src="_commencisLogo" class="w-[180px] px-3 py-5" alt="">
  <h1 class="title-30">
    Join Our Community
  </h1>
  <h2>Start Journey With us</h2>
  <div class="text-left">
    <label class="block" for="">Email</label>
    <input
      ref="emailinput"
      v-model="loginForm.name"
      type="text"
      class="p-1 mt-2"
    >
    <label class="block mt-5" for="">Password</label>
    <input v-model="loginForm.password" type="password" class="p-1 mt-2">
  </div>
  <BaseButton
    text="Sign In"
    button-class="mt-4 my-3"
    @click="handleBaseClick"
  />
</template>

<style lang="scss" scoped>
.wrapper {
  @apply bg-orange-200 text-black w-full h-full flex;
}

.bg-right {
  background-image: url("../assets/images/login-right.png");
  background-size: cover;
}
</style>
