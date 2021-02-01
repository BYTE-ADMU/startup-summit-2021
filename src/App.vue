<template>
  <OpportunityTemplate v-for="opportunity in opportunityList" :key="opportunity"
  :name=opportunity.name
  :cover=opportunity.cover
  :coverAlt=opportunity.coverAlt
  :icon=opportunity.icon
  :iconAlt=opportunity.iconAlt
  :jobPosition=opportunity.jobPosition
  />
</template>

<script>
import OpportunityTemplate from './components/OpportunityTemplate.vue'

export default {
  name: 'App',
  components: {
    OpportunityTemplate
  },
  data: function(){
    return{
      opportunityList:[
        {
          name: 'Kumu',
          cover: require('@/assets/kumu/template_cover.png'),
          coverAlt: "Kumu cover",
          icon: require('@/assets/kumu/template_icon.png'),
          iconAlt: "Kumu logo",
          job: [
            {
              jobPosition: "Graphic Design Intern",
              responsibilities: [
              ]
            }
          ]
        }
      ]
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
