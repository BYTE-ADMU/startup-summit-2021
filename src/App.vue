<template>
  <Card/>
  <Card2/>
  <TalkModal/>
  <PanelModal/>
  <RedirectModal/>
</template>

<script>
import Card from './components/Card.vue'
import Card2 from './components/Card2.vue'
import TalkModal from './components/TalkModal.vue'
import PanelModal from './components/PanelModal.vue'
import RedirectModal from './components/RedirectModal.vue'

export default {
  name: 'App',
  components: {
    Card,
    Card2,
    TalkModal,
    PanelModal,
    RedirectModal
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
