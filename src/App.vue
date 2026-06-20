<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<style scoped>
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
