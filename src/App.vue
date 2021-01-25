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
  background-color: #fcfcfc;
}
#primary{
  font-size: 16px;
  line-height: 26px;
}
#chevron{
  /* customize the margin/padding to which direction but the placement and size should alr be good
  so no need for transform translate and width and height! but if it doesnt seem to be perfect u can customize it nalang din */
  padding-right: 8px!important;
}
</style>
