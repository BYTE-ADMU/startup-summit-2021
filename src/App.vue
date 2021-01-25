<template>
  <StartupTemplate v-for="startup in startupList" :key="startup"
  :name=startup.name
  :cover=startup.cover
  :icon=startup.icon
  :website=startup.website
  :linkedin=startup.linkedin
  :facebook=startup.facebook
  :ig=startup.ig
  :twitter=startup.twitter
  :firstpic=startup.firstpic
  :secondpic=startup.secondpic
  :aboutus=startup.aboutus
  :ourproduct=startup.ourproduct
  jobclass="Social Development"
  jobposition="Partnerships-Manager"
  jobtype="internship"
  :gallery1=gallery1
  :gallery2=gallery2
  :gallery3=gallery3
  :gallery4=gallery4
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
      startupList:[
        {
        name: "Edukasyon.ph",
        cover: require('@/assets/edukasyon/template_cover.png'),
        icon: require('@/assets/edukasyon/template_icon.png'),
        website: "www.nextpay.ph",
        linkedin: "username",
        linkedinwebsite: "#",
        facebook: "facebookhandle",
        facebookwebsite: "#",
        ig: "ighandle",
        igwebsite: "#",
        twitter: "twitterhandle",
        twitterwebsite: "#",
        firstpic: require('@/assets/edukasyon/firstpic.png'),
        aboutus: "Edukasyon.ph is the largest edtech platform in the Philippines empowering millions of Gen Z students aged 13 to 24 to make self-aware education decisions that lead to a fulfilling career and life. Students use the website to gain access to schools, scholarships, online courses, and other resources that enable them to find and take the paths best suited to their own interests, skills and priorities. Edukasyon.ph has worked with hundreds of partners - schools, corporations and foundations - to enable them to reach and engage with its student community along the journey from education to career.",
        secondpic: require('@/assets/edukasyon/secondpic.png'),
        ourproduct: "Students use our website to gain access to courses, schools, scholarships, online education, and other resources and opportunities that enable them to find and take the paths best suited to their own interests, skills and priorities.<br><br>We’ve worked with hundreds of partners - schools, corporations and foundations - to enable them to reach and engage with our student community along the journey from education to career.",
        gallery1: require('@/assets/edukasyon/gallery1.png'),
        gallery2: require('@/assets/edukasyon/gallery2.png'),
        gallery3: require('@/assets/edukasyon/gallery3.png'),
        gallery4: require('@/assets/edukasyon/gallery4.png'),
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
