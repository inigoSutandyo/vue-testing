<script setup lang="ts">
const links = [
{ url: "/", label: "Home" },
{ url: "/about", label: "About" },
{ url: "/contact", label: "Contact Us" }
];
</script>
<template>
  <div class="h-24 w-full bg-slate-600 py-4 px-2 flex items-center">
    <ul class="flex flex-row gap-4 items-center text-white">
      <li
        v-for="({url, label}, i) in links"
        :key="i"
        class="py-1 px-2 hover:text-blue-100 hover:bg-slate-400/50 hover:shadow-md transition-all ease-linear duration-150"
      >
        <RouterLink :to="url">{{ label }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
