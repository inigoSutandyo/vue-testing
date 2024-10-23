<script setup lang="ts">
const mainLinks = [
{ url: "/", label: "Home" },
{ url: "/about", label: "About" },
{ url: "/contact", label: "Contact Us" }
];
const subLinks = [
{ url: "/login", label: "Login" },
{ url: "/register", label: "Register" },
];
</script>
<template>
  <div class="h-24 w-full bg-slate-600 py-4 px-2 flex items-center justify-between">
    <ul class="flex flex-row gap-4 items-center text-white">
      <li
        v-for="({url, label}, i) in mainLinks"
        :key="i"
        class="py-1 px-2 hover:text-blue-100 hover:bg-slate-400/50 hover:shadow-md transition-all ease-linear duration-150"
      >
        <RouterLink :to="url">{{ label }}</RouterLink>
      </li>
    </ul>
    <ul class="flex flex-row gap-4 items-center text-gray-200">
      <li
        v-for="({url, label}, i) in subLinks"
        :key="i"
        class="py-1 px-2 hover:text-blue-100 hover:bg-slate-400/50 hover:shadow-md transition-all ease-linear duration-150"
      >
        <RouterLink :to="url">{{ label }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
