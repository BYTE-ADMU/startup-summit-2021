<template>
<Hero />
  <WhatIsSus/>
  <Opportunities />
  <Partners />
  <EventSchedule/>
  <Card/>
  <Card2/>
  <Card3/>
  <Card4/>
</template>

<script>
import Hero from './components/Hero.vue'
import Opportunities from './components/Opportunities.vue'
import Partners from './components/Partners.vue'
import EventSchedule from './components/EventSchedule.vue'
import WhatIsSus from './components/Home/WhatIsSus.vue'
import Card from './components/Card.vue'
import Card2 from './components/Card2.vue'
import Card3 from './components/Card3.vue'
import Card4 from './components/Card4.vue'

export default {
  name: 'App',
  components: {
    EventSchedule,
    WhatIsSus,
    Partners,
    Card,
    Card2,
    Card3,
    Card4,
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
  overflow-x: hidden;
}
</style>
