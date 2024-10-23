<script lang="ts" setup>
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  value?: any;
  onChange?: (e: Event) => void;
  class?: string;
  id?: string;
  name?: string;
  placeHolder?: string
}>();
</script>
<template>
  <input
    :id="props.id"
    :name="props.name"
    :type="props.type ?? `text`"
    :value="props.value"
    :placeholder="props.placeHolder"
    :class="
      twMerge(
        `focus:ring-0 focus:outline-1 focus:outline-gray-400/40 px-4 py-2 w-full bg-white rounded-xl`,
        props.class
      )
    "
    @change="props.onChange"
  />
</template>
<style lang=""></style>
