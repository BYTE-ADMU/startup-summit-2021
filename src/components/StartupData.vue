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
  :job_check=startup.job_check
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
        name: "",
        cover: require('@/assets/startups/'),
        coverAlt: "cover",
        icon: require('@/assets/startups/'),
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
        firstpic: require('@/assets/startups/'),
        firstpicAlt: "",
        aboutus: "",
        secondpic: require('@/assets/startups/'),
        secondpicAlt: "",
        ourproduct: "",
        job_check:
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
        gallery1: require('@/assets/startups/'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/'),
        gallery4Alt: "",
        },
        {
        name: "StartUp Village",
        cover: require('@/assets/startups/startupvillage/cover.png'),
        coverAlt: "StartUp Villag cover",
        icon: rrequire('@/assets/startups/startupvillage/icon.png'),
        iconAlt: "StartUp Village logo",
        website: "http://startupvillage.ph/",
        linkedin: "startupvillageph",
        linkedinlink: "https://www.linkedin.com/in/startupvillageph/",
        facebook: "startupvillageph",
        facebooklink: "https://www.facebook.com/startupvillageph",
        ig: "startupvillageph",
        iglink: "https://www.instagram.com/startupvillageph/",
        twitter: "suv_ph",
        twitterlink: "https://twitter.com/suv_ph",
        firstpic: require('@/assets/startups/startupvillage/firstpic'),
        firstpicAlt: "",
        aboutus: "StartUp Village is a one-stop startup enabler that enables startups to bring their unique ideas to reality. Its desire is to bring a Filipino startup to the global stage. The goal of StartUp Village is to help start-ups build disruptive technology that displaces an established technology and shakes up the industry or introduces a groundbreaking product that creates a completely new industry.",
        secondpic: require('@/assets/startups/startupvillage/secondpic'),
        secondpicAlt: "",
        ourproduct: "StartUp Village provides startups with all the support it needs to grow and succeed. We execute different programs including training and mentoring startups as they traverse this entrepreneurial path. We also provide other support activities including mentoring, shared services (HR, Accounting/Bookkeeping, Legal), linkage to customers and investors, actual working space, and more.",
        job_check: ""
        job: [
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:""
              },
              {
                jobName: '',
                jobType: ""
              }
            ],
          },
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:""
              },
              {
                jobName: '',
                jobType: ""
              },
              {
                jobName: '',
                jobType: ""
              },
              {
                jobName: '',
                jobType: ""
              }
            ],
          }
        ],
        gallery1: require('@/assets/startups/startupvillage/gallery1'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/startupvillage/gallery2'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/startupvillage/gallery3'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/startupvillage/gallery4'),
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
        job_check: ""
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