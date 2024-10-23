<script lang="ts" setup>
import { ref } from "vue";
import TextField from "../../components/ui/TextField.vue";
import Button from "../../components/ui/Button.vue";

const email = ref("");
const password = ref("");
const onSubmit = (e: Event) => {
  e.preventDefault();
  console.log(email.value);
  console.log(password.value);
};
</script>
<template>
  <div class="flex flex-col w-full h-full gap-4 items-center justify-center">
    <form
      v-on:submit="onSubmit"
      class="flex flex-col items-center justify-center gap-2 bg-black/80 p-4 rounded-[2rem] w-[24rem] min-h-[24rem]"
    >
      <h3 class="text-white text-2xl font-bold pb-4">Login</h3>
      <div class="flex flex-col gap-1 w-full">
        <label for="email" class="text-sm text-gray-200 px-2">Email</label>
        <TextField
          type="email"
          name="email"
          id="email"
          place-holder="john.doe@mail.com"
          class="rounded-3xl"
          @change="(e: Event) => {
            const val = (e.target as HTMLInputElement).value
            email = val
          }"
        />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label for="password" class="text-sm text-gray-200 px-2"
          >Password</label
        >
        <TextField
          type="password"
          name="password"
          id="password"
          place-holder="Secure Password"
          class="rounded-3xl"
          @change="(e: Event) => {
            const val = (e.target as HTMLInputElement).value
            password = val
          }"
        />
      </div>
      <Button class="w-48 mt-4" type="submit"> Login </Button>
      <span class="p-4 w-full text-center text-white"
        >If you don't have an account register
        <RouterLink
          to="/register"
          class="text-red-800 hover:text-red-700 transition-all ease-linear duration-150"
          >here</RouterLink
        ></span
      >
    </form>
  </div>
</template>
