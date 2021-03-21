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
        },
        {
          name: 'ClinkIT Solutions',
          cover: require('@/assets/startups/clink/cover'),
          coverAlt: "ClinkIT Solutions cover",
          icon: require('@/assets/startups/clink/icon.png'),
          iconAlt: "ClinkIT Solutions logo",
          jobPosition: "Junior Software Developer",
          responsibilities: [
            {
              responsibility: "Support software design process based on functional requirements",
              responsibility: "Consult with project teams and end users to identify application requirements",
              responsibility: "Design, develop, implement new software or modifications to existing software",
              responsibility: "Troubleshoot and identify bugs in existing software, design and release fixes",
              responsibility: "Create development environment for efficient testing and integration",
              responsibility: "Properly evaluate, assess and recommend software solutions",
              responsibility: "Design and model solutions that fit the problem domain",
              responsibility: "Liaise and develop long-term relationship with clients",
              responsibility: "Conduct sales presentations and provide technical assistance to clients",
              responsibility: "Collaborate with the Sales team in understanding clients’ requirements and provide sales support",
              responsibility: "Assist the sales team with developing sales proposals and strategies",
              responsibility: "Assist project managers in daily operations such as creating project plans and monitoring progress of projects",
              responsibility: "Attend technical trainings as well as study for technical exams and certifications as required"
            }
          ],
          requirements: [
            {
              requirement: "Candidate must possess at least Bachelor's/College Degree in Computer Science/Information Technology or equivalent",
              requirement: "At most 1 year of working experience in the related field, but fresh grads are welcome to apply",
              requirement: "Exposure to Microsoft .NET development using C# and with AngularJS",
              requirement: "Exposure to web development using HTML5, CSS and JavaScript",
              requirement: "Attending and actively contributing in internal team and client meetings as required",
              requirement: "Problem solving and ability to think laterally as part of a team, or individually, to meet the needs of the project",
              requirement: "Ability to attend and actively contribute in internal and client meetings",
              requirement: "Ability to self-learn, positively adapt to changes, and work under pressure"
            }
          ],
          addtlInfo: [
            {
              info: "Work remotely, but ready to work in our Makati office occasionally as required",
              info: "Reliable and stable internet at home and backup for remote set-up",
              info: "Bring your own device (BYOD)",
              info: "Guaranteed monthly salary",
              info: "SSS, PHIC, HMDF still covered",
              info: "Can commit to full-time, long-term employment",
              info: "HMO upon regularization"
            }
          ],
          appProcess: [
            {
              process: "Learn the qualifications and review your skills if you embody the qualities of a sidekick.",
              process: "Send us your most updated resume and show us that you have what it takes to be a sidekick.",
              process: "Test your technical strength. Shortlisted candidates will be notified on taking the short exam to gauge your technical skills.",
              process: "After passing the test, you will be scheduled for an interview with our ClinkIT Superheroes. Inspire us with stories of your triumphs and ordeals.",
              process: "At the final stage, you will meet our ace engineers and impress everyone with a final project.",
              process: "After persevering and overcoming these trials, the finals day will close with an invitation to join forces with our ClinkIT superheroes."
            }
          ]
        }
        {
          name: "ARPACORP",
          cover: require('@/assets/startups/arpacorp/cover'),
          coverAlt: "ARPACORP cover",
          icon: require('@/assets/arpacorp/logo.png'),
          iconAlt: "ARPACORP logo",
          jobPosition: "Social Media Manager Intern",
          responsibilities: [
            {
              responsibility: "Assist the Social Media Specialist in developing and managing overall social media strategy for the product"
              responsibility: "Perform creative writing and ensure that content is informative and appealing"
            }
          ],
          requirements: [
            {
              requirement: "Computer an Internet/Social Media Savvy",
              requirement: "Good written, oral and visual communication skills",
              requirement: "Excellent time-management skills",
              requirement: "Flexibility and ability to multi-task",
              requirement: "Keen attention to details"
            }
          ],
          addtlInfo: [
            {
              info: "Arpacorp is looking for three (3) Social Media Marketing Interns to be part of our social media community team.",
              info: "We are an equal opportunity employer. This position requires no experience.",
              info: "Open to currently enrolled university students.",
              info: "A minimum allowance of ₱5,000/month will be given to successful interns until you finish your internship hours."
            }
          ],
          appProcess: [
            {
              process: "Send your resume at info@arpa.ph"
            }
          ]
        },
        {
          name: "ARPACORP",
          cover: require('@/assets/startups/arpacorp/cover'),
          coverAlt: "ARPACORP cover",
          icon: require('@/assets/arpacorp/logo.png'),
          iconAlt: "ARPACORP logo",
          jobPosition: "Social Media Specialist",
          responsibilities: [
            {
              responsibility: "Developing and managing overall social media strategy for the product",
              responsibility: "Planning, designing, and implementing campaigns on social media to boost brand awareness",
              responsibility: "Monitoring, analyzing and reporting on website performance and marketing metrics",
              responsibility: "Tapping into online platforms such as Facebook, LinkedIn and Google",
              responsibility: "Performs creative writing and ensure that content is informative and appealing"
            }
          ],
          requirements: [
            {
              requirement: "Extensive experience in a social medial marketing or related role",
              requirement: "Deep understanding of social media marketing and production",
              requirement: "Knowledge on social media campaigns and other social media marketing tools",
              requirement: "Good written, oral and visual communication skills",
              requirement: "Excellent time-management skills",
              requirement: "Flexibility and ability to multi-task",
              requirement: "Keen attention to detail"
            }
          ],
          addtlInfo: [
            {
              info: "Arpacorp is looking for a part-time Social Media Specialist to be part of marketing team for its portfolio of leading software solutions. This position will be Work at Home. "
            }
          ],
          appProcess: [
            {
              process: "Send your resume at info@arpa.ph"
            }
          ]
        },
        {
          name: "XPERTO",
          cover: require('@/assets/startups/xperto/cover.jpg'),
          coverAlt: "XPERTO cover",
          icon: require('@/assets/startups/xperto/logo.png'),
          iconAlt: "XPERTO logo",
          jobPosition: "Marketing Intern",
          responsibilities: [
            {
              responsibility: "Support marketing campaign planning and execution",
              responsibility: "Write copy for social media posts, promotional emails, and other marketing collateral",
              responsibility: "Create written, video, and image content for marketing channels",
              responsibility: "Support in managing website SEO",
              responsibility: "Take part in formal and informal training opportunities",
              responsibility: "Measure and report the results of marketing initiatives",
              responsibility: "Build and manage XPERTO Facebook and LinkedIn Ads Manager accounts",
              responsibility: "Assist in customer support activities"
            }
          ],
          requirements: [
            {
              requirement: "Self-starter, motivated, and able to take initiative and work independently",
              requirement: "Solid understanding of different marketing techniques",
              requirement: "Excellent verbal and written communication skills",
              requirement: "Attention to detail is essential",
              requirement: "Familiarity with marketing computer software and online applications (e.g. CRM tools, Online analytics, and Google Adwords)",
              requirement: "Passion for the marketing industry and its best practices",
              requirement: "Current enrollment in a related BS or Masters degree",
              requirement: "Experience working with Facebook Advertising is a plus",
              requirement: "Experience in basic design platforms (i.e. Canva) is a plus",
              requirement: "Be able to openly communicate the produced designs in Tagalog, English, or Taglish to a small team of web developers"
            }
          ],
          addtlInfo: [
            {
              info: "Allowance: P5000++"
            }
          ],
          appProcess: [
            {
              process: "Send resume to support@xperto.ph"
            }
          ]
        },
        {
          name: "XPERTO",
          cover: require('@/assets/startups/xperto/cover.jpg'),
          coverAlt: "XPERTO cover",
          icon: require('@/assets/startups/xperto/logo.png'),
          iconAlt: "XPERTO logo",
          jobPosition: "Research Intern",
          responsibilities: [
            {
              responsibility: "Conduct user research and is comfortable with ideation and user-centered design",
              responsibility: "Conduct interviews and surveys, customer journey maps, service blueprints, wireframes, and prototypes",
              responsibility: "Participate in team brainstorming sessions",
              responsibility: "Take part in formal and informal training opportunities",
              responsibility: "Assist in customer support activities"
            }
          ],
          requirements: [
            {
              requirement: "Passion for user experience research and human-computer interaction to help us understand user needs, workflows, and pain points",
              requirement: "Self-starter, motivated, and able to take initiative and work independently",
              requirement: "Knowledgeable in user research methodology, qualitative and quantitative",
              requirement: "Ability to identify stakeholder needs and pain points",
              requirement: "Experience translating user needs and developing empathy for the user thru a deep understanding of user-centered design methods and applications",
              requirement: "Have software development skills",
              requirement: "Familiarity with REST or GraphQL APIs and JSON",
              requirement: "Strong verbal and written communication skills",
              requirement: "Attention to detail is essential",
              requirement: "Familiarity with prototyping platforms is a plus",
              requirement: "Comfortable in a fast-paced environment with tight deadlines",
              requirement: "Be able to openly communicate user insights in to diverse teams",
              requirement: "Current enrollment in a related BS or Masters degree"
            }
          ],
          addtlInfo: [
            {
              info: "Allowance: P5,000++"
            }
          ],
          appProcess: [
            {
              process: "Send resume to support@xperto.ph"
            }
          ]
        },
      ]
    }
  }
}
</script>