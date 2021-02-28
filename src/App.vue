<template>
    <Navbar />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
*{
  background-color: #fcfcfc;
  margin: 0;
}
</style>
