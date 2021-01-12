<template>
  <a href="www.google.com"><PrimaryBtn>Primary</PrimaryBtn></a>
  <br>
  <a href="www.google.com"><SecondaryBtn>Secondary</SecondaryBtn></a>
</template>

<script>
import PrimaryBtn from './components/PrimaryBtn.vue'
import SecondaryBtn from './components/SecondaryBtn.vue'

export default {
  name: 'App',
  components: {
    PrimaryBtn,
    SecondaryBtn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
