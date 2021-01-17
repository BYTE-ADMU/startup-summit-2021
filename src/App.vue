<template>
  <Card/>
  <Card2/>
  <Card3/>
</template>

<script>
import Card from './components/Card.vue'
import Card2 from './components/Card2.vue'
import Card3 from './components/Card3.vue'

export default {
  name: 'App',
  components: {
    Card,
    Card2,
    Card3
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
