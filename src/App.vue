<script setup>
import HeaderComp from "./components//HeaderComp.vue";
</script>

<template>
  <div id="app">
    <HeaderComp class="sticky-header" :title="'A NEWS FEED'" />
    <router-view />
  </div>
</template>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
