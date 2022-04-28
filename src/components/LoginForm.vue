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
  <h1 class="title title-30">
    Join Our Community
  </h1>
  <h2 class="base-body-20 mb-[27px]">
    Start Journey With us
  </h2>
  <div class="text-left w-[80%]">
    <label class="block" for="">Email</label>
    <input ref="emailinput" v-model="loginForm.name" type="text" class="mt-2 login-input">
    <label class="block mt-5" for="">Password</label>
    <input v-model="loginForm.password" type="password" class="mt-2 login-input">
  </div>
  <div class="flex justify-center items-center">
    <BaseButton text="Sign In" button-class="mt-10 my-3 w-[80%] button__sign-in" @click="handleBaseClick" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @apply bg-orange-200 text-black w-full h-full flex;
}

.title {
  @apply text-gray-900;
}

.login-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  position: static;
  width: 100%;
  height: 46px;
  left: 0px;
  top: 30px;
  @apply bg-white;
  border: 1px solid #D5DAE1;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.button__sign-in {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 18px;
  width: 80%;
  height: 46px;

  /* Cobalt/400 */

  @apply bg-blue-400;
  box-shadow: 0px 1px 2px rgba(105, 81, 255, 0.05);
  border-radius: 6px;
}

.bg-right {
  background-image: url("../assets/images/login-right.png");
  background-size: cover;
}
</style>
