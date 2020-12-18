<template>
  <Hero />
  <Opportunities />
  <Partners />
</template>

<script>
import Hero from './components/Hero'
import Opportunities from './components/Opportunities'
import Partners from './components/Partners'

export default {
  name: 'App',
  components: {
    Hero,
    Opportunities,
    Partners
  }
}
</script>

<style>
*{
  margin: 0px;
}
</style>
