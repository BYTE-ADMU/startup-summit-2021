<template>
<Hero />
<WhatIsSus />
<div data-aos="fade-up">
  <Home />
</div>
  <Opportunities />
<Partners />
<Navbar />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <Footer />
</template>
<script>
import Hero from "@/components/Hero.vue"
import Opportunities from "@/components/Opportunities.vue"
import Partners from "@/components/Partners.vue"
import Home from "./components/Home.vue"
import WhatIsSus from "@/components/WhatIsSus.vue"
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Home,
    WhatIsSus,
    Partners,
    Hero,
    Opportunities,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
* {
  background-color: #fcfcfc;
  margin: 0;
}
</style>
