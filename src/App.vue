<template>
  <StartupTemplate
  name="Edukasyon.ph"
  :cover=cover
  :icon=icon
  website="www.nextpay.ph"
  linkedin="username"
  facebook="facebookhandle"
  ig="ighandle"
  twitter="twitterhandle"
  :firstpic=firstpic
  :secondpic=secondpic
  aboutus="Edukasyon.ph is the largest edtech platform in the Philippines empowering millions of Gen Z students aged 13 to 24 to make self-aware education decisions that lead to a fulfilling career and life. Students use the website to gain access to schools, scholarships, online courses, and other resources that enable them to find and take the paths best suited to their own interests, skills and priorities. Edukasyon.ph has worked with hundreds of partners - schools, corporations and foundations - to enable them to reach and engage with its student community along the journey from education to career."
  ourproduct="Students use our website to gain access to courses, schools, scholarships, online education, and other resources and opportunities that enable them to find and take the paths best suited to their own interests, skills and priorities. We’ve worked with hundreds of partners - schools, corporations and foundations - to enable them to reach and engage with our student community along the journey from education to career."
  jobclass="Social Development"
  job="Partnerships-Manager"
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
      cover: require('@/assets/edukasyon/template_cover.png'),
      icon: require('@/assets/edukasyon/template_icon.png'),
      firstpic: require('@/assets/edukasyon/firstpic.png'),
      secondpic: require('@/assets/edukasyon/secondpic.png'),
      gallery1: require('@/assets/edukasyon/gallery1.png'),
      gallery2: require('@/assets/edukasyon/gallery2.png'),
      gallery3: require('@/assets/edukasyon/gallery3.png'),
      gallery4: require('@/assets/edukasyon/gallery4.png')
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
