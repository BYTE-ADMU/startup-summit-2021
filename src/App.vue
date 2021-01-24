<template>
  <StartupTemplate
  name="Edukasyon.ph"
  :cover=cover
  :icon=icon
  website="www.nextpay.ph"
  />
</template>

<script>
import StartupTemplate from './components/StartupTemplate.vue'

export default {
  name: 'App',
  components: {
    StartupTemplate
  },
  data: function(){
    return{
      cover: require('@/assets/template_cover.png'),
      icon: require('@/assets/template_icon.png')
    }
  }
}
</script>

<style>
*{
  margin: 0px!important;
  background-color: #fcfcfc;
}
</style>
