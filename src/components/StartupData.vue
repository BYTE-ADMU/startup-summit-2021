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
        job_check: ""
        job: [
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:""
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/startAPPPP/gallery1'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/startAPPPP/gallery2'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/startAPPPP/gallery3'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/startAPPPP/gallery4'),
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
              }
            ]
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
        name: "Mosaic Solutions",
        cover: require('@/assets/startups/mosaic/'),
        coverAlt: "Mosaic Solutions cover",
        icon: require('@/assets/startups/mosaic/logo.png'),
        iconAlt: "Mosaic Solutions logo",
        website: "https://www.mosaic-solutions.com",
        linkedin: "mosaicsolutions",
        linkedinlink: "https://www.linkedin.com/company/mosaicsolutions/",
        facebook: "mosaichospitalitysolutions",
        facebooklink: "https://www.facebook.com/mosaichospitalitysolutions",
        ig: "mosaichospitalitysolutions",
        iglink: "https://www.instagram.com/mosaichospitalitysolutions",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/mosaic/firstpic.jpg'),
        firstpicAlt: "Mosaic Solutions Summer Outing",
        aboutus: "Founded in 2016, Mosaic is a leading provider of profit optimisation solutions— data analytics, inventory management, point of sale and purchasing — offered primarily to the food and beverage sector across SE Asia.  This includes multi-unit restaurant and bar groups, cloud kitchens, hotels and casinos, and now retailers, such as supermarkets and convenience stores. Mosaic’s cloud-based solutions work together seamlessly, as well as with complementary products, enabling a fully integrated restaurant management solution.<br><br>Mosaic services over 100 customers, representing approximately 1,000 outlets, across the Philippines, Singapore, Vietnam, India and UAE, with a primary focus on the Philippines.  Mosaic also provides specialized outsourced solutions to hospitality clients and service providers in the US, Canada, UK, New Zealand, Australia and South Africa.",
        secondpic: require('@/assets/startups/mosaic/secondpic.png'),
        secondpicAlt: "Mosaic Solutions Sales Report Enterprise",
        ourproduct: "Find the best answer to every challenge.<br><br>Day-to-day F&B management is a constant opportunity to streamline and optimise.  Operators are presented with challenges based on dozens of moving factors.  Using Mosaics products will help you get a handle on which cash flow levers to pull to improve the bottom line.<br><br>You may need to analyse what changes you can make to your menus, your supply chain, your staff and your operations.  Or it may be time to reduce your inventory waste or over-spending on over-stocking.  Maybe your whole business model has changed as sales have shifted from dine-in to takeaway and delivery.<br><br>It’s all happening now and you need the accurate information to make informed decisions in real-time.  That’s where Mosaic Solutions come in.<br><br>You need all the information right at your fingertips. Our reports offer a combination of high-level insights and in-depth analysis at the outlet level. This provides a comprehensive and real-time view of your key cost and revenue drivers that help you make data-driven decisions to optimize profitability.<br><br>Our solution features an analytics dashboard with insights that help you confidently take action and make necessary changes to streamline operations. You will have remote access to sales trends, direct costs and inventory levels all in one place. You can engineer and optimise menus based on margin analysis.  You can create smarter targets using predictive analytics.  You can monitor performance versus targets at the outlet and brand level.<br><br>Our solutions are built specifically for today’s hospitality market by people who have real-life industry experience, this means our products are built to provide clarity and solve our clients’ challenges simply. Because we understand the needs of our clients, these cloud-based solutions allow remote monitoring of multiple units anytime and anywhere.  And you do not need to be a data geek to get simple but effective insights.",
        job_check: "yes"
        job: [
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:""
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/mosaic/gallery1.png'),
        gallery1Alt: "Mosaic Solutions Menu Engineering",
        gallery2: require('@/assets/startups/mosaic/gallery2.png'),
        gallery2Alt: "Mosaic Solutions POS App",
        gallery3: require('@/assets/startups/mosaic/gallery3.jpeg'),
        gallery3Alt: "Mosaic Solutions MS Teams Halloween Party",
        gallery4: require('@/assets/startups/mosaic/gallery4.png'),
        gallery4Alt: "Mosaic Solutions Zoom Christmas Party",
        },
        {
        name: "QBO Innovation Hub",
        cover: require('@/assets/startups/qbo/cover.png'),
        coverAlt: "QBO Innovation Hub cover",
        icon: require('@/assets/startups/qbo/icon.png'),
        iconAlt: "QBO Innovation Hub logo",
        website: "https://www.qbo.com.ph/",
        linkedin: "qbophilippines",
        linkedinlink: "https://www.linkedin.com/company/qbophilippines/",
        facebook: "QBOphilippines",
        facebooklink: "https://www.facebook.com/QBOphilippines",
        ig: "qbophilippines",
        iglink: "https://www.instagram.com/qbophilippines/",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/qbo/'),
        firstpicAlt: "",
        aboutus: "QBO (‘ku-bo’) is an innovation hub, or a platform for the startup community to collaborate, develop talent, and grow. We provide startups with support and resources through events and capacity building programs as well as focused interventions designed to improve access to markets, knowledge, capital, and talent.  We are the country’s first public-private initiative for startups, created through a partnership  between IdeaSpace, J.P. Morgan, DOST, and DTI. Spurred on by the vision of Filipinos startups changing the world, our mission is to create a globally competitive startup ecosystem in the Philippines.",
        secondpic: require('@/assets/startups/qbo/'),
        secondpicAlt: "",
        ourproduct: "",
        job_check: "yes"
        job: [
          {
            jobClass:"Programs",
            jobPosition:[
              {
                jobName:"Programs Intern",
                jobType:"internship"
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/qbo/'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/qbo/'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/qbo/'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/qbo/'),
        gallery4Alt: "",
        },
        {
        name: "Technology Application and Promotion Institute",
        cover: require('@/assets/startups/technoapp/'),
        coverAlt: "Technology Application and Promotion Institute cover",
        icon: require('@/assets/startups/technoapp/logo.png'),
        iconAlt: "Technology Application and Promotion Institute logo",
        website: "http://www.tapi.dost.gov.ph/",
        linkedin: "",
        linkedinlink: "",
        facebook: "DOST.TAPI",
        facebooklink: "https://www.facebook.com/DOST.TAPI",
        ig: "",
        iglink: "",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/technoapp/firstpic.png'),
        firstpicAlt: "About TAPI",
        aboutus: "The Technology Application and Promotion Institute (TAPI) created by virtue of Executive Order No. 128 on 30 January 1987, is one of DOST's service agencies whose primary responsibility is to promote the commercialization of technologies and market the services of other operating units of the Department.<br><br>On 28 April 1992, TAPI's function was expanded by virtue of RA 7459 otherwise known as the 'Inventors and Invention Incentives Act of the Philippines'. Among others, TAPI administers the Invention Development Assistance Fund for the initial experiments and prototype development and other invention-development related activities.",
        secondpic: require('@/assets/startups/technoapp/'),
        secondpicAlt: "",
        ourproduct: "MANDATED FUNCTIONS:<br><br>- Serve as the implementing arm of the DOST in promoting the commercialization of technologies and in marketing the services of the other operating units of the Department<br><br>- Undertake contract research, particularly at pilot plant and semi-commercial stage<br><br>- Provide technical consultancy including engineering design services, patenting and licensing services<br><br>- Provide grants and venture financing for new and emerging projects<br><br>- Administer the Invention Development Assistance Fund (IDAF) for the initial experiments and prototype development and other invention development-related activities<br><br>- Assist technology generators, inventors, and researchers avail of the laboratories and other facilities of the Research and Development Institutes including DOST Regional Offices and other government agencies, offices, and instrumentalities<br><br>- Accredit and recognize inventors' associations throughout their activities.",
        job_check: ""
        job: [
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:""
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/technoapp/gallery1'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/technoapp/gallery2'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/technoapp/gallery3'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/technoapp/gallery4'),
        gallery4Alt: "",
        },
        {
        name: "Ideaspace Foundation Inc.",
        cover: require('@/assets/startups/ideas/'),
        coverAlt: "cover",
        icon: require('@/assets/startups/ideas/'),
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
        firstpic: require('@/assets/startups/ideas/firstpic'),
        firstpicAlt: "",
        aboutus: "",
        secondpic: require('@/assets/startups/ideas/secondpic'),
        secondpicAlt: "",
        ourproduct: "",
        job_check: ""
        job: [
          {
            jobClass:"",
            jobPosition:[
              {
                jobName:"",
                jobType:""
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/ideas/gallery1'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/ideas/gallery2'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/ideas/gallery3'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/ideas/gallery4'),
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