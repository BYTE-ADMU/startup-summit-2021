<template>
  <OpportunityTemplate v-for="opportunity in opportunityList" :key="opportunity"
  :name=opportunity.name
  :cover=opportunity.cover
  :coverAlt=opportunity.coverAlt
  :icon=opportunity.icon
  :iconAlt=opportunity.iconAlt
  :jobPosition=opportunity.jobPosition
  :responsibilities=opportunity.responsibilities
  :requirements=opportunity.requirements
  :addtlInfo=opportunity.addtlInfo
  :appProcess=opportunity.appProcess
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
          jobPosition: "Graphic Design Intern",
          responsibilities: [
            {
              responsibility: "Execute digital visual materials such as online banners and social media posts, according to the specifications and direction of the Art Director and/or Marketing Head"
            },
            {
              responsibility: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
            },
            {
              responsibility: "Edit and adjust existing online marketing materials"
            },
            {
              responsibility: "Create and/or source additional graphical elements (illustrations or editing of existing icons/screenshots) as needed"
            }
          ],
          requirements: [
            {
              requirement: "Execute digital visual materials such as online banners and social media posts, according to the specifications and direction of the Art Director and/or Marketing Head"
            },
            {
              requirement: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
            },
            {
              requirement: "Edit and adjust existing online marketing materials"
            },
            {
              requirement: "Create and/or source additional graphical elements (illustrations or editing of existing icons/screenshots) as needed"
            }
          ],
          addtlInfo: [
            {
              info: "Execute digital visual materials such as online banners and social media posts, according to the specifications and direction of the Art Director and/or Marketing Head"
            },
            {
              info: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
            },
            {
              info: "Execute digital visual materials such as online banners and social media posts, according to the specifications and direction of the Art Director and/or Marketing Head"
            },
            {
              info: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
            }
          ],
          appProcess: [
            {
              process: "Execute digital visual materials such as online banners and social media posts, according to the specifications and direction of the Art Director and/or Marketing Head"
            },
            {
              process: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
            },
            {
              process: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
            },
            {
              process: "Assist in creating internal and external graphical elements for pitch decks and internal reports"
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
