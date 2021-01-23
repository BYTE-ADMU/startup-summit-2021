<template>
<Hero />
<WhatIsSus />
<EventSchedule />
<Card />
<Opportunities />
<Partners />
</template>

<script>
import Hero from './components/Hero.vue'
import Opportunities from './components/Opportunities.vue'
import Partners from './components/Partners.vue'
import EventSchedule from './components/EventSchedule.vue'
import WhatIsSus from './components/Home/WhatIsSus.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    EventSchedule,
    WhatIsSus,
    Partners,
    Card,
    Hero,
    Opportunities
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
*{
  background-color:#fcfcfc;
  margin: 0;
}
</style>
