<template>
<Hero />
<WhatIsSus />
<EventSchedule />
<div class="card_container">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse4">
  <div class="row1">
    <Card class="card1"/>
    <Card class="card2"/>
  </div>
  <div class="row2">
    <Card class="card3"/>
    <Card class="card4"/>
  </div>
</div>
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
.card_container .card1 {
  margin-left: auto;
  z-index: 1;
}
.card_container .card3 {
  margin-left: auto;
  z-index: 1;
}
.card_container .card2 {
  margin-right: auto;
  z-index: 1;
}
.card_container .card4 {
  margin-right: auto;
  z-index: 1;
}
.card_container .row1 {
  display: flex;
  flex-wrap: wrap;
  margin: 24px auto 0 auto;
}
.card_container .row2 {
  display: flex;
  flex-wrap: wrap;
  margin: 16px auto 80px auto;
}
.ellipse1 {
  position: absolute;
  width: 80px;
  left: 24px;
  top: 1850px;
  background-color: transparent;
  z-index: 0;
}
.ellipse2 {
  position: absolute;
  width: 200px;
  left: 6.805vw;
  top: 2150px;
  border-radius: 0px;
  background-color: transparent;
  z-index: 0;
}
.ellipse3 {
  position: absolute;
  left: 65.62vw;
  top: 2100px;
  background-color: transparent;
  z-index: 0;
}
.ellipse4 {
  position: absolute;
  width: 80px;
  right: 25px;
  top: 2550px;
  background-color: transparent;
  z-index: 0;
}
@media (max-width: 1140px) {
  .ellipse1, .ellipse2, .ellipse3, .ellipse4 {
    display: none;
  }
  .card_container .row1, .card_container .row2 {
    margin-top: 0;
  }
  .card_container .row1 .card1, .card_container .row1 .card2 {
    margin: 12px auto 12px auto;
  }
  .card_container .row2 .card3, .card_container .row2  .card4 {
    margin: 12px auto 12px auto;
  }
}
</style>