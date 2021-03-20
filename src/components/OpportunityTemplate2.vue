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
          name: '',
          cover: require('@/assets/startups/startapp/cover'),
          coverAlt: "cover",
          icon: require('@/assets/startups/startapp/icon.png'),
          iconAlt: "logo",
          jobPosition: "",
          responsibilities: [
            {
              responsibility: ""
            }
          ],
          requirements: [
            {
              requirement: ""
            }
          ],
          addtlInfo: [
            {
              info: ""
            }
          ],
          appProcess: [
            {
              process: ""
            }
          ]
        },
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
        },
        {
          name: 'ClinkIT Solutions',
          cover: require('@/assets/startups/clink/cover'),
          coverAlt: "ClinkIT Solutions cover",
          icon: require('@/assets/startups/clink/icon.png'),
          iconAlt: "ClinkIT Solutions logo",
          jobPosition: "Operations and Project Management Intern",
          responsibilities: [
            {
              responsibility: "Learn as you work with involvement across the company: (a) project teams; (b) internal management and admin; (c) recruitment; (d) marketing",
              responsibility: "Support Operations Managers and Project Managers in implementation and overall management of the company’s projects",
              responsibility: "Support HR and Recruitment in acquiring and retaining high-level talent",
              responsibility: "Adopt viewpoints, company policies, practices and operations which are significant in the navigation of an IT consulting business",
              responsibility: "Collaborate across the company with setting and tracking objectives, tasks, and performance goals",
              responsibility: "Acquiring knowledge needed for managing high-level technical resources",
              responsibility: "Performing additional duties which are often assigned by other departments / teams apart apart from the above-mentioned duties",
              responsibility: "Proactively contribute to the general work culture at Skykomish, Inc.",
              responsibility: "Performs other related duties as assigned by your supervisor"
            }
          ],
          requirements: [
            {
              requirement: "Currently in senior or junior year, taking up a Bachelor’s of Science degree",
              requirement: "Demonstrates leadership experience in university organization, team projects, and/or extracurricular endeavours",
              requirement: "Demonstrates personal excellence in extracurricular endeavours which may include: entrepreneurial ventures; innovation competitions; hackathons; sports; music; literature; etc.",
              requirement: "Demonstrates ability to make analytical decisions under pressure and unknowns",
              requirement: "High organized person with excellent time management",
              requirement: "Good level of emotional intelligence and self-awareness",
              requirement: "Self-start mindset and demonstrates ability to simultaneously manage multiple objectives and manage complex tasks with minimal direction",
              requirement: "Adaptable and flexible in mind-set and behaviour",
              requirement: "Impeccable ability to speak and write in English",
              requirement: "Can work under pressure"
            }
          ],
          addtlInfo: [
            {
              info: ""
            }
          ],
          appProcess: [
            {
              process: ""
            }
          ]
        }
      ]
    }
  }
}
</script>