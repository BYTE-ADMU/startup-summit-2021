<template>
  <OpportunityTemplate v-for="opportunity in opportunityList" :key="opportunity"
  :name=opportunity.name
  :cover=opportunity.cover
  :coverAlt=opportunity.coverAlt
  :icon=opportunity.icon
  :iconAlt=opportunity.iconAlt
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
          name: 'Kumu'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  margin: 0px!important;
  background-color: #fcfcfc;
}
</style>
