<template>
  <div>{{ title }}</div>

  <!-- <div class="nav py-6 mb-6">
    <router-link class="px-4 py-2 mx-1 text-white border border-gray-300 border-solid rounded-md" to="/about">About</router-link>
    <router-link class="px-4 py-2 mx-1 text-white border border-gray-300 border-solid rounded-md" to="/vision">Vision</router-link>
  </div> -->

  <router-view/>
</template>

<script setup>
const title="This is Home"
</script>
