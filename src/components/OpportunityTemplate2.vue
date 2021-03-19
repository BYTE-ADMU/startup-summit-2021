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
import OpportunityTemplate from '@/components/OpportunityTemplate.vue'

export default {
  name: 'App',
  components: {
    OpportunityTemplate
  },
  data: function(){
    return{
      opportunityList:[
        {
          name: 'QBO Innovation Hub',
          cover: require('@/assets/startups/qbo/cover.png'),
          coverAlt: "QBO Innovation Hub cover",
          icon: require('@/assets/startups/qbo/icon.png'),
          iconAlt: "QBO Innovation Hub logo",
          jobPosition: "Programs Intern",
          responsibilities: [
            {
              responsibility: "Assist the Programs team in: a. liaising with Ideaspace-QBO partners; b.conducting research;"
            }
          ],
          requirements: [
            {
              requirement: "Excellent in MS applications"
            },
            {
              requirement: "Good project management skills"
            }
          ],
          addtlInfo: [
            {
              info: ""
            }
          ],
          appProcess: [
            {
              process: "Send a PDF attachment of your CV as well as a link to your LinkedIn profile via email to hello@qbo.com.ph"
            },
            {
              process: "Use “Intern - <Last Name>” for your subject line."
            }
          ]
        }
      ]
    }
  }
}
</script>