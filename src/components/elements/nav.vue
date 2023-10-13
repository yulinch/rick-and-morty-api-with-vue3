<template>
  <div class="w-full flex border-b-2 border-gray-700 shadow-lg">
    <router-link class="nav-item py-3 text-lg w-1/4 text-gray-400 border-r-2 border-gray-700 hover:active:text-green-500 hover:active:bg-black transition-all duration-300 hover:transition-all" to="/">Home</router-link>
    <router-link class="nav-item py-3 text-lg w-1/4 text-gray-400 border-r-2 border-gray-700 hover:text-green-500 hover:bg-black transition-all duration-300 hover:transition-all" to="/character">Character</router-link>
    <router-link class="nav-item py-3 text-lg w-1/4 text-gray-400 border-r-2 border-gray-700 hover:text-green-500 hover:bg-black transition-all duration-300 hover:transition-all" to="/location">Location</router-link>
    <router-link class="nav-item py-3 text-lg w-1/4 text-gray-400 hover:text-green-500 hover:bg-black transition-all duration-300 hover:transition-all" to="/episode">Episode</router-link>
  </div>
</template>

<script>
export default{
  name: "Nav"
}
</script>

<style scoped>
.router-link-active{
  @apply text-green-500 bg-black
}
</style>


