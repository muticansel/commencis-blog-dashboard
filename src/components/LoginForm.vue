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
  <img :src="_commencisLogo" class="w-[180px]" alt="">
  <h1 class="title-30">
    {{ t("login.joinOurCommunity") }}
  </h1>
  <h2>{{ t("login.startJourneyWithUs") }}</h2>
  <div class="text-left">
    <label class="block" for="">{{ t("login.email") }}</label>
    <input ref="emailinput" v-model="loginForm.name" type="text" class="p-1 mt-2">
    <label class="block mt-5" for="">{{ t("login.password") }}</label>
    <input v-model="loginForm.password" type="password" class="p-1 mt-2">
  </div>
  <BaseButton text="Sign In" button-class="mt-4" @click="handleBaseClick" />
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
