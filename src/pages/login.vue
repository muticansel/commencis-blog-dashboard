<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import commencisLogo from "../assets/images/commencis-logo-purple.png";
const loginForm = reactive({ name: "", password: "" });
const x = ref("");
const emailinput = ref(null);

onMounted(() => {
  //loginForm.name;
  emailinput.value.focus();
  console.log(x.value);
});
const submitForm = (event: Event) => {
  console.log(event);
  console.log({ ...loginForm });
};
</script>

<template>
  <div class="wrapper">
    <div class="w-3/6 bg-blue-100 flex justify-center items-center">
      <div class="w-[358px] flex justify-center items-center flex-col bg-white">
        <img :src="commencisLogo" class="w-[180px]" alt="" />
        <h1 class="title-30">Join Our Community</h1>
        <h2>Start Journey With us</h2>
        <div class="text-left">
          <label class="block" for="">Email</label>
          <input
            type="text"
            ref="emailinput"
            v-model="loginForm.name"
            class="p-1 mt-2"
          />
          <label class="block mt-5" for="">Password</label>
          <input
            type="password"
            v-model="loginForm.password"
            class="p-1 mt-2"
          />
        </div>
        <button
          class="mt-4 bg-blue-500 text-white px-5 py-2"
          @click="submitForm"
        >
          Sign in
        </button>
      </div>
    </div>
    <div class="w-3/6 bg-right"></div>
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
