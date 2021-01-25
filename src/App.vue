<template>
<StartUp />
</template>

<script>
import StartUp from './components/Startup.vue'

export default {
  name: 'App',
  components: {
    StartUp
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
  background-color: #fcfcfc;
}
*{
  margin: 0px!important;
}
</style>
