
<template>
  <Nav/>
  <router-view/>
</template>

<script setup>
import {RouterView, RouterLink} from 'vue-router'
import Nav from './components/elements/nav.vue'

</script>

<style>
#app{
  @apply w-full m-0 p-0 pb-16 max-w-none;
}
</style>
