<template>
  <Partners />
  <EventSchedule/>
  <WhatIsSus/>
</template>

<script>
import Partners from './components/Partners'
import EventSchedule from './components/EventSchedule.vue'
import WhatIsSus from './components/Home/WhatIsSus.vue';

export default {
  name: 'App',
  components: {
    EventSchedule,
    WhatIsSus,
    Partners
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
