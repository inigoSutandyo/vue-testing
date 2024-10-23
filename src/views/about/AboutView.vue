<script lang="ts" setup>
const images = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/300/400",
  "https://picsum.photos/300/300",
  "https://picsum.photos/400/600",
  "https://picsum.photos/800/600",
];
</script>
<template>
  <div class="grid grid-cols-2 gap-y-4 items-start">
    <div class="col-span-2 text-4xl font-extrabold p-4">About Us</div>
    <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        <span class="text-black/60 text-base">Ipsam dolore consequuntur nulla architecto recusandae eos. Esse itaque nostrum blanditiis deleniti?</span>
        <p class="text-lg font-semibold px-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          excepturi repellendus recusandae fugiat possimus libero iste doloribus
          nostrum. Nemo odio tempore ipsa ducimus saepe atque. Tempore amet quam
          fuga doloribus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquam dolores repellat fugit. Eveniet sapiente unde illo nulla dolor similique, ullam reprehenderit officiis esse aut ducimus consectetur nihil id odit?
        </p>
        
    </div>
    <div
      class="w-full gap-2 lg:gap-4 columns-2 md:columns-3"
    >
      <img
        v-for="(image, i) in images"
        :src="image"
        :key="i"
        class="w-full mb-4 rounded-lg hover:scale-105 transition-all ease-linear duration-150 shadow-md border border-black/20"
      />
    </div>
  </div>
</template>
