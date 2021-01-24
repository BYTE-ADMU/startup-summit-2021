<template>
  <StartupTemplate
  :name="Edukasyon.ph"
  :cover="template_cover.png"
  />
</template>

<script>
import StartupTemplate from './components/StartupTemplate.vue'

export default {
  name: 'App',
  components: {
    StartupTemplate
  }
}
</script>

<style>
*{
  margin: 0px!important;
}
</style>
