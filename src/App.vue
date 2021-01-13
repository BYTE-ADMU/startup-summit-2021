<template>
  <a href="www.google.com" id="primary"><PrimaryBtn>Primary</PrimaryBtn></a>
  <br>
  <a href="www.google.com"><SecondaryBtn>></SecondaryBtn></a>
  <br>
  <a href="www.google.com"><TertiaryBtn disabled>Tertiary</TertiaryBtn></a>
</template>

<script>
import PrimaryBtn from './components/PrimaryBtn.vue'
import SecondaryBtn from './components/SecondaryBtn.vue'
import TertiaryBtn from './components/TertiaryBtn.vue'

export default {
  name: 'App',
  components: {
    PrimaryBtn,
    SecondaryBtn,
    TertiaryBtn
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
#primary{
  font-size: 16px;
  line-height: 26px;
}
</style>
