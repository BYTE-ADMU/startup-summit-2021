<template>
<Hero />
<WhatIsSus />
<div data-aos="fade-up">
  <Home />
</div>
  <Opportunities />
<Partners />
</template>

<script>
import Hero from "@/components/Hero.vue"
import Opportunities from "@/components/Opportunities.vue"
import Partners from "@/components/Partners.vue"
import Home from "@/components/Home.vue"
import WhatIsSus from "@/components/WhatIsSus.vue"

export default {
  name: "App",
  components: {
    Home,
    WhatIsSus,
    Partners,
    Hero,
    Opportunities
  }
}
</script>
<style scoped>
</style>