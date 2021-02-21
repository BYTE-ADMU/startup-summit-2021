<template>
  <About />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
    About

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
*{
  margin: 0;
}
</style>
