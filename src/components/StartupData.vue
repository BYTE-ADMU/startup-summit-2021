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
        cover: require('@/assets/startups/startapppp/cover'),
        coverAlt: "cover",
        icon: require('@/assets/startups/startapp/logo'),
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
        firstpic: require('@/assets/startups/startappppp/firstpic'),
        firstpicAlt: "",
        aboutus: "",
        secondpic: require('@/assets/startups/startappppp/secondpic'),
        secondpicAlt: "",
        ourproduct: "",
        job_check: "",
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
        icon: require('@/assets/startups/startupvillage/icon.png'),
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
        job_check: "",
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
        job_check: "yes",
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
        job_check: "yes",
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
        job_check: "",
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
        cover: require('@/assets/startups/ideas/cover'),
        coverAlt: "cover",
        icon: require('@/assets/startups/ideas/logo.png'),
        iconAlt: "Ideaspace Foundation Inc. logo",
        website: "https://ideaspacefoundation.org/",
        linkedin: "ideaspace-foundation-inc-",
        linkedinlink: "https://www.linkedin.com/company/ideaspace-foundation-inc-/",
        facebook: "ideaspaceph",
        facebooklink: "https://www.facebook.com/ideaspaceph",
        ig: "",
        iglink: "",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/ideas/firstpic'),
        firstpicAlt: "",
        aboutus: "IdeaSpace Philippines runs an accelerator for early-stage science and technology startups solving emerging market issues in the Philippines and around Southeast Asia; an alumni program for graduates of our accelerator program, where we provide them training and resources to support them as they build stable, scalable, and sustainable businesses; an Opportunity Fund for founders looking for smaller loans or investments, and an External Relations program to form meaningful partnerships with the government, the private sector, and the academe.",
        secondpic: require('@/assets/startups/ideas/secondpic'),
        secondpicAlt: "",
        ourproduct: "",
        job_check: "",
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
        name: "ClinkIT Solutions",
        cover: require('@/assets/startups/clink/cover.png'),
        coverAlt: "ClinkIT Solutions cover",
        icon: require('@/assets/startups/clink/logo.png'),
        iconAlt: "ClinkIT Solutions logo",
        website: "https://www.clinkitsolutions.com/ ",
        linkedin: "clinkitsolutions",
        linkedinlink: "https://www.linkedin.com/company/clinkitsolutions/",
        facebook: "ClinkITsolutions",
        facebooklink: "https://www.facebook.com/ClinkITsolutions/",
        ig: "clinkitsolutions",
        iglink: "https://www.instagram.com/clinkitsolutions/",
        twitter: "ClinkITph",
        twitterlink: "https://twitter.com/clinkitph",
        firstpic: require('@/assets/startups/clink/firstpic.jpg'),
        firstpicAlt: "",
        aboutus: "ClinkIT Solutions is a Software Consulting Services Company and Microsoft Solutions Partner that is in the business of delivering top-of-the-line I.T. solutions to businesses across the globe. We boast 20 years of experience in the I.T. industry, offering expertise on a wide range of implementations from simple web design to sophisticated software solutions.<br><br>Our company is a part of the Microsoft Partner Network. We have a stellar team of software engineers, developers and technical specialists who have solid years of experience and backed with impressive credentials and globally recognized certifications. With our competent and talented engineers, ClinkIT Solutions offers fresh and creative ideas that transcend mundane implementations and haphazardly designed I.T. solutions.",
        secondpic: require('@/assets/startups/clink/secondpic'),
        secondpicAlt: "",
        ourproduct: "ClinkIT creates proven business solutions by providing software, hardware, and services to more than 100 startups and multinational clients worldwide.",
        job_check: "yes"
        job: [
          {
            jobClass:"Operations",
            jobPosition:[
              {
                jobName:"Operations and Project Management Intern",
                jobType:"internship",
                jobName:"Junior Software Developer",
                jobType:"internship",
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/clink/gallery1.jpg'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/clink/gallery2.jpg'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/clink/gallery3.jpg'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/clink/gallery4.jpg'),
        gallery4Alt: "",
        },
        name: "ARPACORP",
        cover: require('@/assets/startups/arpacorp/cover'),
        coverAlt: "ARPACORP cover",
        icon: require('@/assets/startups/arpacorp/logo.png'),
        iconAlt: "ARPACORP logo",
        website: "https://arpa.ph",
        linkedin: "arpacorp",
        linkedinlink: "https://www.linkedin.com/company/arpacorp",
        facebook: "arpacorporation",
        facebooklink: "https://www.facebook.com/arpacorporation",
        ig: "",
        iglink: "",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/arpacorp/firstpic.jpg'),
        firstpicAlt: "",
        aboutus: "ARPACORP (ARPA), is a Philippine based, government registered corporation providing cost-effective Information Technology integrations, solutions and consulting. Founded in 2010 as Arpa Information Technology Solutions, we have moved and evolved into a mature business that caters different technology-based solutions to our portfolio. Our goal is to provide each customer a professional level of service through our expertise.",
        secondpic: require('@/assets/startups/arpacorp/secondpic.jpg'),
        secondpicAlt: "",
        ourproduct: "To continuously drive innovative solutions that will focus in the area of decentralized application development using Blockchain technology and maintaining or exceeding existing customers’ satisfaction towards business success.",
        job_check: "yes",
        job: [
          {
            jobClass:"Social Media",
            jobPosition:[
              {
                jobName:"Social Media Manager Intern",
                jobType:"internship"
              },
              {
                jobName:"Social Media Specialist",
                jobType:"part-time"
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/arpacorp/gallery1.png'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/arpacorp/gallery2.png'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/arpacorp/gallery3.png'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/arpacorp/gallery4.png'),
        gallery4Alt: "",
        },
        name: "XPERTO",
        cover: require('@/assets/startups/xperto/cover.jpg'),
        coverAlt: "XPERTO cover",
        icon: require('@/assets/startups/xperto/logo.png'),
        iconAlt: "XPERTO logo",
        website: "https://www.xperto.ph",
        linkedin: "",
        linkedinlink: "",
        facebook: "XPERTOPH",
        facebooklink: "https://www.facebook.com/XPERTOPH",
        ig: "",
        iglink: "",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/xperto/firstpic.jpg'),
        firstpicAlt: "",
        aboutus: "XPERTO is a startup company registered as Wayvent Innovations, Inc. under the Securities and Exchange Commission (SEC) and incorporated on June 11, 2019. It is founded to empower professionals who aspire to create paths for career advancement and self-improvement. By linking professionals to relevant opportunities for professional growth and development, XPERTO aims to provide mechanisms for career progression and enhance the competence of the professions.",
        secondpic: require('@/assets/startups/xperto/secondpic.jpg'),
        secondpicAlt: "",
        ourproduct: "XPERTO provides online platforms that enable entirely new ways of serving professionals and creating value. We help professional organizations take care of all the nitty-gritty freeing them to focus more on important tasks such developing and delivering the program and doing assessment for professional development. We provide end-to-end services which includes registrations up to sending out certificate emails to the credential earners. By doing this, we aim to unlock the potential of the professional network as dynamic sources and providers of relevant professional development and life-long learning.",
        job_check: "yes",
        job: [
          {
            jobClass:"Marketing",
            jobPosition:[
              {
                jobName:"Marketing Intern",
                jobType:"internship"
              }
            ]
          },
          {
            jobClass:"Research and Development",
            jobPosition:[
              {
                jobName:"Research Intern",
                jobType:"internship"
              }
            ]
          }
        ],
        gallery1: require('@/assets/startups/xperto/gallery1.jpg'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/xperto/gallery2'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/xperto/gallery3'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/xperto/gallery4'),
        gallery4Alt: "",
        },
        {
        name: "maker academy",
        cover: require('@/assets/startups/makeracademy/cover'),
        coverAlt: "maker academy cover",
        icon: require('@/assets/startups/makeracademy/logo.png'),
        iconAlt: "maker academy logo",
        website: "https://www.maker-academy.com/",
        linkedin: "",
        linkedinlink: "",
        facebook: "",
        facebooklink: "",
        ig: "",
        iglink: "",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/makeracademy/firstpic.jpg'),
        firstpicAlt: "",
        aboutus: "We provide STEM education resources and solutions to educational institutions through our robotics and development products.",
        secondpic: require('@/assets/startups/makeracademy/secondpic.jpg'),
        secondpicAlt: "",
        ourproduct: "Adding value in a form of system integration that was defined in engineering as the process of bringing together the component of sub-systems and ensuring that it function as one.",
        job_check: "",
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
        gallery1: require('@/assets/startups/makeracademy/gallery1.jpeg'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/makeracademy/gallery2.jpeg'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/makeracademy/gallery3.jpeg'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/makeracademy/gallery4.jpeg'),
        gallery4Alt: "",
        },
        {
        name: "Pick.A.Roo",
        cover: require('@/assets/startups/pickaroo/cover.png'),
        coverAlt: "Pick.A.Roo cover",
        icon: require('@/assets/startups/pickaroo/logo.png'),
        iconAlt: "Pick.A.Roo logo",
        website: "https://www.pickaroo.com",
        linkedin: "",
        linkedinlink: "",
        facebook: "pickarooph",
        facebooklink: "https://www.facebook.com/pickarooph",
        ig: "pickarooapp",
        iglink: "https://www.instagram.com/pickarooapp/",
        twitter: "",
        twitterlink: "",
        firstpic: require('@/assets/startups/pickaroo/firstpic'),
        firstpicAlt: "",
        aboutus: "PICK.A.ROO is your all-in-one on-demand delivery app. We are more than just food and grocery. We are more affordable, more reliable, and—with over 800 trusted brands—we have more options to choose from. Browse, shop, and checkout in one go.",
        secondpic: require('@/assets/startups/pickaroo/secondpic'),
        secondpicAlt: "",
        ourproduct: "",
        job_check: "",
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
        gallery1: require('@/assets/startups/pickaroo/gallery1'),
        gallery1Alt: "",
        gallery2: require('@/assets/startups/pickaroo/gallery2'),
        gallery2Alt: "",
        gallery3: require('@/assets/startups/pickaroo/gallery3'),
        gallery3Alt: "",
        gallery4: require('@/assets/startups/pickaroo/gallery4'),
        gallery4Alt: "",
        }
      ]
    }
  }
}
</script>