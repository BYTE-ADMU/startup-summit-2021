<template>
  <Partners />
  <EventSchedule/>
</template>

<script>
import Partners from './components/Partners'
import EventSchedule from './components/EventSchedule.vue'

export default {
  name: 'App',
  components: {
    EventSchedule
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
