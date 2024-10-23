<script setup lang="ts">
const props = defineProps<{
  class?: string;
  onClick?: (e: Event) => void;
  type?: "submit" | "button" | "reset";
}>();
import { twMerge } from "tailwind-merge";
</script>

<template>
  <button
    @click="props.onClick"
    :type="props.type ?? `button`"
    :class="
      twMerge(
        'shadow-md border border-gray-600/40 rounded-xl px-4 py-2 bg-blue-500 text-white hover:shadow-lg hover:bg-opacity-85 hover:scale-105 transition-all ease-linear duration-150 ',
        props.class
      )
    "
  >
    <slot></slot>
  </button>
</template>
