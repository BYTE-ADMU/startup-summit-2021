<template>
<Hero />
<WhatIsSus />
<EventSchedule @transfer-click="transferClickNum"/>

<!--Cards for First day -->
<div class="card_container" v-if="choice === 1">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse4">
  
  <!--1st day-->
  <div class="row1">
    <Card class="card1"
    v-bind:time="first_day[0].time"
    v-bind:talk="first_day[0].talk"
    v-bind:description="first_day[0].description"
    v-bind:speaker="first_day[0].speaker"
    v-bind:pic_url="first_day[0].pic_url"/>
    <Card class="card2"
    v-bind:time="first_day[1].time"
    v-bind:talk="first_day[1].talk"
    v-bind:description="first_day[1].description"
    v-bind:speaker="first_day[1].speaker"
    v-bind:pic_url="first_day[1].pic_url"/>
  </div>
  <div class="row2">
    <Card class="card3"
    v-bind:time="first_day[2].time"
    v-bind:talk="first_day[2].talk"
    v-bind:description="first_day[2].description"
    v-bind:speaker="first_day[2].speaker"
    v-bind:pic_url="first_day[2].pic_url"/>
    <Card2 class="card4"
    v-bind:time="first_day[3].time" 
    v-bind:panel="first_day[3].panel" 
    v-bind:description="first_day[3].description" 
    v-bind:pic_url="first_day[3].pic_url"/>
  </div>
</div>

<!--Cards for second day -->
<div class="card_container" v-if="choice === 2">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse4">

  <!--2nd day-->
  <div class="row1">
    <Card class="card1"
    v-bind:time="second_day[0].time"
    v-bind:talk="second_day[0].talk"
    v-bind:description="second_day[0].description"
    v-bind:speaker="second_day[0].speaker"
    v-bind:pic_url="second_day[0].pic_url"/>
    <Card class="card2"
    v-bind:time="second_day[1].time"
    v-bind:talk="second_day[1].talk"
    v-bind:description="second_day[1].description"
    v-bind:speaker="second_day[1].speaker"
    v-bind:pic_url="second_day[1].pic_url"/>
  </div>
  <div class="row2">
    <Card class="card3"
    v-bind:time="second_day[2].time"
    v-bind:talk="second_day[2].talk"
    v-bind:description="second_day[2].description"
    v-bind:speaker="second_day[2].speaker"
    v-bind:pic_url="second_day[2].pic_url"/>
    <Card2 class="card4"
    v-bind:time="second_day[3].time" 
    v-bind:panel="second_day[3].panel" 
    v-bind:description="second_day[3].description" 
    v-bind:pic_url="second_day[3].pic_url"/>
  </div>
</div>

<!--Cards for third day -->
<div class="card_container" v-if="choice === 3">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="./assets/ellipse_design.svg" alt="design" class="ellipse4">

  <!--3rd day-->
  <div class="row1">
    <Card class="card1"
    v-bind:time="third_day[0].time"
    v-bind:talk="third_day[0].talk"
    v-bind:description="third_day[0].description"
    v-bind:speaker="third_day[0].speaker"
    v-bind:pic_url="third_day[0].pic_url"/>
    <Card class="card2"
    v-bind:time="third_day[1].time"
    v-bind:talk="third_day[1].talk"
    v-bind:description="third_day[1].description"
    v-bind:speaker="third_day[1].speaker"
    v-bind:pic_url="third_day[1].pic_url"/>
  </div>
  <div class="row2">
    <Card class="card3"
    v-bind:time="third_day[2].time"
    v-bind:talk="third_day[2].talk"
    v-bind:description="third_day[2].description"
    v-bind:speaker="third_day[2].speaker"
    v-bind:pic_url="third_day[2].pic_url"/>
    <Card2 class="card4"
    v-bind:time="third_day[3].time" 
    v-bind:panel="third_day[3].panel" 
    v-bind:description="third_day[3].description" 
    v-bind:pic_url="third_day[3].pic_url"/>
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
import Card2 from './components/Card2.vue'

export default {
  name: 'App',
  components: {
    EventSchedule,
    WhatIsSus,
    Partners,
    Card,
    Card2,
    Hero,
    Opportunities
  },
  data() {
    return {
      choice: 1,

      //All card info for first day
      first_day: [
        {
          class: "card1",
          time: "1:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Giancarlo Divino",
          pic_url: "logo"
        },
        { 
          class: "card2",
          time: "2:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "./assets/logo.png"
        },
        { 
          class: "card3",
          time: "3:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "./assets/logo.png"
        },
        {
          class: "card4",
          time: "4:00",
          panel: "1 Name of panel",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          pic_url: "logo"
        }
      ],
      
      //All card info for second day
      second_day: [
        {
          class: "card2",
          time: "5:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "logo"
        },
        {
          class: "card2",
          time: "6:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "logo"
        },
        {
          class: "card3",
          time: "7:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "logo"
        },
        {
          class: "card4",
          time: "8:00",
          panel: "2 Name of panel",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          pic_url: "logo"
        }
      ],

      //All card info for third day
      third_day: [
      {
          class: "card1",
          time: "9:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "logo"
        },
        {
          class: "card2",
          time: "10:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "logo"
        },
        {
          class: "card3",
          time: "11:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bea Baker",
          pic_url: "logo"
        },
        {
          class: "card4",
          time: "12:00",
          panel: "3 Name of panel",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          pic_url: "logo"
        }
      ]
    }
  },
  methods: {
    transferClickNum(value) {
      this.choice = value
    }
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