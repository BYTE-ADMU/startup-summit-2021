<template>
  <a href="www.google.com" id="primary"><PrimaryBtn><Chevron id="chevron"/>Hello</PrimaryBtn></a>
  <br>
  <a href="www.google.com" id="secondary"><SecondaryBtn>Hi</SecondaryBtn></a>
  <br>
  <a href="www.google.com"><TertiaryBtn><Chevron id="chevron2"/>Tertiary</TertiaryBtn></a>
</template>

<script>
import PrimaryBtn from './components/PrimaryBtn.vue'
import SecondaryBtn from './components/SecondaryBtn.vue'
import TertiaryBtn from './components/TertiaryBtn.vue'
import Chevron from './components/Chevron.vue'

export default {
  name: 'App',
  components: {
    PrimaryBtn,
    SecondaryBtn,
    TertiaryBtn,
    Chevron
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
#chevron{
  width: 16px;
  height: 16px;
  padding-right: 8px!important;
  transform: translate(0%, 10%);
}
#chevron2{
  width: 16px;
  height: 16px;
  padding-right: 8px!important;
  transform: translate(0%, 10%);
}
</style>
