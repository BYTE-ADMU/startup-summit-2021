<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <a href="www.google.com"><PrimaryBtn>Primary</PrimaryBtn></a>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PrimaryBtn from './components/PrimaryBtn.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimaryBtn
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
