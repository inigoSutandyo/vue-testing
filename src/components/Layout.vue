<script setup lang="ts">
import Navbar from "./template/Navbar.vue"
</script>

<template>
    <div class="h-screen flex flex-col">
        <Navbar/>
         <main class="flex-1 p-4">
            <slot ></slot>
         </main>
    </div>
</template>