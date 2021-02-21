<template>
  <div id="app">
    <!-- <Navbar /> -->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import About from './views/About.vue'

export default {
  name: 'App',
  components: {
    About
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
