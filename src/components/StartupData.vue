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
  :job=startup.job
  :gallery1=startup.gallery1
  :gallery2=startup.gallery2
  :gallery3=startup.gallery3
  :gallery4=startup.gallery4
  :iconAlt=startup.iconAlt
  :coverAlt=startup.coverAlt
  :firstpicAlt=startup.firstpicAlt
  :secondpicAlt=startup.secondpicAlt
  :gallery1Alt=startup.gallery1Alt
  :gallery2Alt=startup.gallery2Alt
  :gallery3Alt=startup.gallery3Alt
  :gallery4Alt=startup.gallery4Alt
  />
</template>

<script>
import StartupTemplate from '@/components/StartupTemplate.vue'

export default {
  components: {
    StartupTemplate
  },
  data: function(){
    return{
      startupList:[
        {
        name: "StartUp Village",
        cover: require('@/assets/'),
        coverAlt: "cover",
        icon: require('@/assets/'),
        iconAlt: "logo",
        website: "",
        linkedin: "",
        linkedinlink: "",
        facebook: "",
        facebooklink: "",
        ig: "",
        iglink: "",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/'),
        firstpicAlt: "",
        aboutus: "",
        secondpic: require('@/assets'),
        secondpicAlt: "",
        ourproduct: "",
        job: [
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:"internship"
              },
              {
                jobName: '',
                jobType: "full-time"
              }
            ],
          },
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:"internship"
              },
              {
                jobName: '',
                jobType: "part-time"
              },
              {
                jobName: '',
                jobType: "full-time"
              },
              {
                jobName: '',
                jobType: "internship"
              }
            ],
          }
        ],
        gallery1: require('@/assets/'),
        gallery1Alt: "",
        gallery2: require('@/assets/'),
        gallery2Alt: "",
        gallery3: require('@/assets/'),
        gallery3Alt: "",
        gallery4: require('@/assets/'),
        gallery4Alt: "",
        },
        {
        name: "Edukasyon.ph",
        cover: require('@/assets/edukasyon/template_cover.png'),
        coverAlt: "Edukasyon.ph cover",
        icon: require('@/assets/edukasyon/template_icon.png'),
        iconAlt: "Edukasyon.ph logo",
        website: "www.nextpay.ph",
        linkedin: "username",
        linkedinlink: "#",
        facebook: "facebookhandle",
        facebooklink: "#",
        ig: "ighandle",
        iglink: "#",
        twitter: "twitterhandle",
        twitterlink: "#",
        firstpic: require('@/assets/edukasyon/firstpic.png'),
        firstpicAlt: "First Pic",
        aboutus: "Edukasyon.ph is the largest edtech platform in the Philippines empowering millions of Gen Z students aged 13 to 24 to make self-aware education decisions that lead to a fulfilling career and life. Students use the website to gain access to schools, scholarships, online courses, and other resources that enable them to find and take the paths best suited to their own interests, skills and priorities. Edukasyon.ph has worked with hundreds of partners - schools, corporations and foundations - to enable them to reach and engage with its student community along the journey from education to career.",
        secondpic: require('@/assets/edukasyon/secondpic.png'),
        secondpicAlt: "Second Pic",
        ourproduct: "Students use our website to gain access to courses, schools, scholarships, online education, and other resources and opportunities that enable them to find and take the paths best suited to their own interests, skills and priorities.<br><br>We’ve worked with hundreds of partners - schools, corporations and foundations - to enable them to reach and engage with our student community along the journey from education to career.",
        job: [
          {
            jobClass:"Social Development",
            jobPosition:[
              {
                jobName:"Partnerships-Manager",
                jobType:"internship"
              },
              {
                jobName: 'Partnerships Project Manager',
                jobType: "full-time"
              }
            ],
          },
          {
            jobClass:"Design",
            jobPosition:[
              {
                jobName:"Digital Marketing Associate",
                jobType:"internship"
              },
              {
                jobName: 'Multimedia Artist',
                jobType: "part-time"
              },
              {
                jobName: 'Creative Consultant',
                jobType: "full-time"
              },
              {
                jobName: 'Web Designer',
                jobType: "internship"
              }
            ],
          }
        ],
        gallery1: require('@/assets/edukasyon/gallery1.png'),
        gallery1Alt: "Gallery 1 pic",
        gallery2: require('@/assets/edukasyon/gallery2.png'),
        gallery2Alt: "Gallery 1 pic",
        gallery3: require('@/assets/edukasyon/gallery3.png'),
        gallery3Alt: "Gallery 1 pic",
        gallery4: require('@/assets/edukasyon/gallery4.png'),
        gallery4Alt: "Gallery 1 pic",
        }
      ]
    }
  }
}
</script>