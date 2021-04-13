<template>
    <div v-for="opportunity in opportunityList" :key="opportunity" class="page-container">
        <div v-if="jbId == opportunity.jobId">
        <center><div class="cover-wrapper"><img :alt="opportunity.coverAlt" :src="opportunity.cover"></div></center>
        <div class="header-container">
            <div class="icon-wrapper"><img :alt="opportunity.iconAlt" :src="opportunity.icon"></div>
            <div class="header-content">
                <div class="header">
                    <p>{{opportunity.jobName}}</p>
                </div>
                <div class="subheader">
                    <p>{{opportunity.name}}</p>
                </div>
            </div>
        </div>
        <div class="first-container" id="first-container">
            <div class="side-nav-wrapper">
                <div class="sidenav-container">
                    <div class="nav-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div class="nav-section">
                        <p>Responsibilities</p>
                    </div>
                </div>
                <div class="vl" :style="vlStyle1"></div>
                <div class="sidenav-container">
                    <div class="nav-icon light-orange" :style="svgStyle1">
                        <svg id="svg2" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5917 0.965249L18.5995 0.973125L18.6076 0.980648C18.6922 1.05868 18.7597 1.15339 18.8059 1.25881C18.8521 1.36423 18.8759 1.47807 18.8759 1.59315C18.8759 1.70823 18.8521 1.82207 18.8059 1.92748C18.7597 2.0329 18.6922 2.12761 18.6076 2.20565L18.6002 2.21248L18.5931 2.21959L7.71313 13.0996L7.71168 13.101C7.63421 13.1792 7.54205 13.2411 7.4405 13.2835L7.63278 13.745L7.4405 13.2835C7.33895 13.3258 7.23003 13.3475 7.12002 13.3475C7.01 13.3475 6.90108 13.3258 6.79953 13.2835C6.69799 13.2411 6.60582 13.1792 6.52835 13.101L6.5269 13.0996L1.4069 7.97959L1.40695 7.97954L1.40073 7.97353C1.31926 7.89483 1.25409 7.80086 1.20894 7.69697C1.16379 7.59309 1.13954 7.48132 1.13758 7.36807C1.13562 7.25481 1.15599 7.14228 1.19752 7.03689L0.732339 6.85357L1.19752 7.03689C1.23905 6.93151 1.30093 6.83534 1.37963 6.75387C1.45833 6.6724 1.55231 6.60722 1.65619 6.56207C1.76008 6.51692 1.87184 6.49267 1.98509 6.49071C2.09835 6.48875 2.21088 6.50912 2.31627 6.55065C2.42035 6.59167 2.51545 6.65254 2.59627 6.72986L6.7659 10.9128L7.11969 11.2677L7.47381 10.9131L17.4071 0.966466L17.4083 0.965249C17.4858 0.88714 17.578 0.825145 17.6795 0.782839C17.7811 0.740532 17.89 0.71875 18 0.71875C18.11 0.71875 18.2189 0.740532 18.3205 0.782839C18.422 0.825145 18.5142 0.88714 18.5917 0.965249Z" fill="white" stroke="white"/>
</svg>
                    </div>
                    <div class="nav-section">
                        <p>Requirements</p>
                    </div>
                </div>
                <div class="vl" :style="vlStyle2"></div>
                <div class="sidenav-container">
                    <div class="nav-icon light-orange" :style="svgStyle2">
                        <svg id="svg3" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3166 7.90233L14.3166 7.90242L14.3259 7.90602C14.4247 7.94432 14.5152 8.00109 14.5926 8.07325C14.7433 8.23533 14.829 8.44731 14.8333 8.66871C14.8318 8.80358 14.7977 8.93611 14.7337 9.05491C14.669 9.17508 14.5758 9.27753 14.4622 9.35324C14.3487 9.42895 14.2182 9.4756 14.0824 9.48911C13.9471 9.50256 13.8105 9.48269 13.6846 9.43122C13.5804 9.38746 13.484 9.3269 13.3994 9.25196C13.3264 9.17604 13.2683 9.08692 13.2285 8.98932C13.187 8.88778 13.166 8.77907 13.1666 8.6694L13.1667 8.66151L13.1665 8.65362C13.164 8.5568 13.1842 8.46074 13.2255 8.37315L13.2303 8.36299L13.2346 8.35263C13.2779 8.24919 13.3376 8.15352 13.4115 8.06933C13.488 7.99903 13.5771 7.94362 13.6741 7.90602L13.6741 7.90612L13.6833 7.90233C13.8862 7.81898 14.1137 7.81898 14.3166 7.90233ZM13.4107 13.4106C13.567 13.2543 13.779 13.1665 14 13.1665C14.221 13.1665 14.4329 13.2543 14.5892 13.4106C14.7455 13.5669 14.8333 13.7788 14.8333 13.9998V19.3332C14.8333 19.5542 14.7455 19.7661 14.5892 19.9224C14.4329 20.0787 14.221 20.1665 14 20.1665C13.779 20.1665 13.567 20.0787 13.4107 19.9224C13.2544 19.7661 13.1666 19.5542 13.1666 19.3332V13.9998C13.1666 13.7788 13.2544 13.5669 13.4107 13.4106ZM6.87015 3.32931C8.98058 1.91917 11.4618 1.1665 14 1.1665C15.6853 1.1665 17.3541 1.49845 18.9111 2.14338C20.4681 2.78832 21.8828 3.73361 23.0745 4.9253C24.2662 6.11699 25.2115 7.53172 25.8564 9.08873C26.5014 10.6457 26.8333 12.3145 26.8333 13.9998C26.8333 16.538 26.0806 19.0192 24.6705 21.1297C23.2603 23.2401 21.2561 24.885 18.9111 25.8563C16.5661 26.8276 13.9857 27.0818 11.4963 26.5866C9.00688 26.0914 6.7202 24.8692 4.92543 23.0744C3.13065 21.2796 1.9084 18.9929 1.41322 16.5035C0.918044 14.0141 1.17219 11.4337 2.14351 9.08873C3.11484 6.74375 4.75972 4.73946 6.87015 3.32931ZM7.7961 23.2846C9.63245 24.5116 11.7914 25.1665 14 25.1665C16.9615 25.1665 19.8018 23.99 21.896 21.8959C23.9901 19.8017 25.1666 16.9614 25.1666 13.9998C25.1666 11.7913 24.5117 9.63232 23.2847 7.79597C22.0577 5.95962 20.3137 4.52836 18.2733 3.68318C16.2328 2.838 13.9876 2.61687 11.8215 3.04774C9.65534 3.4786 7.66563 4.54213 6.10394 6.10381C4.54225 7.6655 3.47873 9.65521 3.04786 11.8213C2.617 13.9875 2.83813 16.2327 3.68331 18.2731C4.52849 20.3136 5.95975 22.0576 7.7961 23.2846Z" fill="white" stroke="white"/>
</svg>
                    </div>
                    <div class="nav-section" id="nav-addtl">
                        <p>Additional<br>Information</p>
                    </div>
                </div>
                <div class="vl third-vl" :style="vlStyle3"></div>
                <div class="sidenav-container third-vl">
                    <div class="nav-icon light-orange" :style="svgStyle3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 18H3.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H3.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6H3.01" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div class="nav-section">
                        <p>Application</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
            <div class="content-wrapper">
                <div class="responsibilities" id="responsibilities">
                <div class="content-header">
                    <p>Responsibilities</p>
                </div>
                <div class="bullet-wrapper">
                    <div class="bullet-content" v-for="responsibilities in opportunity.responsibilities" :key="responsibilities">
                        <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#1EACB5"/>
</svg></p><p>{{responsibilities.responsibility}}</p>
                    </div>
                </div>
            </div>
                <div class="other-containers" id="requirements">
                <div class="content-header">
                    <p>Requirements</p>
                </div>
                <div class="bullet-wrapper">
                    <div class="bullet-content" v-for="requirements in opportunity.requirements" :key="requirements">
                        <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#1EACB5"/>
</svg></p><p>{{requirements.requirement}}</p>
                    </div>
                </div>
            </div>
                <div class="other-containers" id="addtl-info">
                <div class="content-header">
                    <p>Additional Information</p>
                </div>
                <div class="bullet-wrapper">
                    <div class="bullet-content" v-for="addtlInfo in opportunity.addtlInfo" :key="addtlInfo">
                        <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#1EACB5"/>
</svg></p><p>{{addtlInfo.info}}</p>
                    </div>
                </div>
            </div>
            <div class="app_process" id="application">
                <div class="content-header">
                    <p>Application Process</p>
                </div>
                <div class="bullet-wrapper">
                    <div class="bullet-content" v-for="appProcess in opportunity.appProcess" :key="appProcess">
                        <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#1EACB5"/>
</svg></p><p>{{appProcess.process}}</p>
                    </div>
                </div>
            </div>
            <span class="btn" id="btn"><PrimaryBtn>Apply<Chevron id="chevron" /></PrimaryBtn></span>
        </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'
import Chevron from './Chevron.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    el: "#app",
    name: 'Opportunity-Template',
    components:{
        PrimaryBtn,
        Chevron
    },
    created(){
        AOS.init(
            {
                disable: function() {
                var maxWidth = 1025;
                return window.innerWidth < maxWidth;
            }
            }
        ),
        AOS.refresh(
            {
                disable: function() {
                var maxWidth = 1025;
                return window.innerWidth < maxWidth;
            }
            }
        )
    },
    data () {
    return {
        scrolled: false,
        vlStyle1: "",
        svgStyle1: "",
        vlStyle2: "",
        svgStyle2: "",
        vlStyle3: "",
        svgStyle3: "",
        jbId:this.$route.params.Jid,
        cId:this.$route.params.Cid,
        jbnId:this.$route.params.JNid,
      opportunityList:[
        {
          name: 'QBO Innovation Hub',
          cover: require('@/assets/startups/qbo/cover.png'),
          coverAlt: "QBO Innovation Hub cover",
          icon: require('@/assets/startups/qbo/icon.png'),
          iconAlt: "QBO Innovation Hub logo",
          jobName: "Programs Intern",
          jobId: 1,
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
          cover: require('@/assets/startups/clink/cover.png'),
          coverAlt: "ClinkIT Solutions cover",
          icon: require('@/assets/startups/clink/logo.png'),
          iconAlt: "ClinkIT Solutions logo",
          jobName: "Operations and Project Management Intern",
          jobId: 2,
          responsibilities: [
            {
              responsibility: "Learn as you work with involvement across the company: (a) project teams; (b) internal management and admin; (c) recruitment; (d) marketing"
            },
            {
              responsibility: "Support Operations Managers and Project Managers in implementation and overall management of the company’s projects"
              },
            {
              responsibility: "Support HR and Recruitment in acquiring and retaining high-level talent"
              },
            {
              responsibility: "Adopt viewpoints, company policies, practices and operations which are significant in the navigation of an IT consulting business"
              },
            {
              responsibility: "Collaborate across the company with setting and tracking objectives, tasks, and performance goals"
              },
            {
              responsibility: "Acquiring knowledge needed for managing high-level technical resources"
              },
            {
              responsibility: "Performing additional duties which are often assigned by other departments / teams apart apart from the above-mentioned duties"
              },
            {
              responsibility: "Proactively contribute to the general work culture at Skykomish, Inc."
              },
            {
              responsibility: "Performs other related duties as assigned by your supervisor"
            }
          ],
          requirements: [
            {
              requirement: "Currently in senior or junior year, taking up a Bachelor’s of Science degree"
              },
            {
              requirement: "Demonstrates leadership experience in university organization, team projects, and/or extracurricular endeavours"
              },
            {
              requirement: "Demonstrates personal excellence in extracurricular endeavours which may include: entrepreneurial ventures; innovation competitions; hackathons; sports; music; literature; etc."
              },
            {
              requirement: "Demonstrates ability to make analytical decisions under pressure and unknowns"
              },
            {
              requirement: "High organized person with excellent time management"
              },
            {
              requirement: "Good level of emotional intelligence and self-awareness"
              },
            {
              requirement: "Self-start mindset and demonstrates ability to simultaneously manage multiple objectives and manage complex tasks with minimal direction"
              },
            {
              requirement: "Adaptable and flexible in mind-set and behaviour"
              },
            {
              requirement: "Impeccable ability to speak and write in English"
              },
            {
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
          cover: require('@/assets/startups/clink/cover.png'),
          coverAlt: "ClinkIT Solutions cover",
          icon: require('@/assets/startups/clink/logo.png'),
          iconAlt: "ClinkIT Solutions logo",
          jobName: "Junior Software Developer",
          jobId: 3,
          responsibilities: [
            {
              responsibility: "Support software design process based on functional requirements"
              },
            {
              responsibility: "Consult with project teams and end users to identify application requirements"
              },
            {
              responsibility: "Design, develop, implement new software or modifications to existing software"
              },
            {
              responsibility: "Troubleshoot and identify bugs in existing software, design and release fixes"
              },
            {
              responsibility: "Create development environment for efficient testing and integration"
              },
            {
              responsibility: "Properly evaluate, assess and recommend software solutions"
              },
            {
              responsibility: "Design and model solutions that fit the problem domain"
              },
            {
              responsibility: "Liaise and develop long-term relationship with clients"
              },
            {
              responsibility: "Conduct sales presentations and provide technical assistance to clients"
              },
            {
              responsibility: "Collaborate with the Sales team in understanding clients’ requirements and provide sales support"
              },
            {
              responsibility: "Assist the sales team with developing sales proposals and strategies"
              },
            {
              responsibility: "Assist project managers in daily operations such as creating project plans and monitoring progress of projects"
              },
            {
              responsibility: "Attend technical trainings as well as study for technical exams and certifications as required"
            }
          ],
          requirements: [
            {
              requirement: "Candidate must possess at least Bachelor's/College Degree in Computer Science/Information Technology or equivalent"
              },
            {
              requirement: "At most 1 year of working experience in the related field, but fresh grads are welcome to apply"
              },
            {
              requirement: "Exposure to Microsoft .NET development using C# and with AngularJS"
              },
            {
              requirement: "Exposure to web development using HTML5, CSS and JavaScript"
              },
            {
              requirement: "Attending and actively contributing in internal team and client meetings as required"
              },
            {
              requirement: "Problem solving and ability to think laterally as part of a team, or individually, to meet the needs of the project"
              },
            {
              requirement: "Ability to attend and actively contribute in internal and client meetings"
              },
            {
              requirement: "Ability to self-learn, positively adapt to changes, and work under pressure"
            }
          ],
          addtlInfo: [
            {
              info: "Work remotely, but ready to work in our Makati office occasionally as required"
              },
            {
              info: "Reliable and stable internet at home and backup for remote set-up"
              },
            {
              info: "Bring your own device (BYOD)"
              },
            {
              info: "Guaranteed monthly salary"
              },
            {
              info: "SSS, PHIC, HMDF still covered"
              },
            {
              info: "Can commit to full-time, long-term employment"
              },
            {
              info: "HMO upon regularization"
            }
          ],
          appProcess: [
            {
              process: "Learn the qualifications and review your skills if you embody the qualities of a sidekick."
              },
            {
              process: "Send us your most updated resume and show us that you have what it takes to be a sidekick."
              },
            {
              process: "Test your technical strength. Shortlisted candidates will be notified on taking the short exam to gauge your technical skills."
              },
            {
              process: "After passing the test, you will be scheduled for an interview with our ClinkIT Superheroes. Inspire us with stories of your triumphs and ordeals."
              },
            {
              process: "At the final stage, you will meet our ace engineers and impress everyone with a final project."
              },
            {
              process: "After persevering and overcoming these trials, the finals day will close with an invitation to join forces with our ClinkIT superheroes."
            }
          ]
        },
        {
          name: "ARPACORP",
          cover: require('@/assets/startups/arpacorp/logo2.png'),
          coverAlt: "ARPACORP cover",
          icon: require('@/assets/startups/arpacorp/logo.png'),
          iconAlt: "ARPACORP logo",
          jobName: "Social Media Manager Intern",
          jobId: 4,
          responsibilities: [
            {
              responsibility: "Assist the Social Media Specialist in developing and managing overall social media strategy for the product"
              },
            {
              responsibility: "Perform creative writing and ensure that content is informative and appealing"
            }
          ],
          requirements: [
            {
              requirement: "Computer an Internet/Social Media Savvy"
              },
            {
              requirement: "Good written, oral and visual communication skills"
              },
            {
              requirement: "Excellent time-management skills"
              },
            {
              requirement: "Flexibility and ability to multi-task"
              },
            {
              requirement: "Keen attention to details"
            }
          ],
          addtlInfo: [
            {
              info: "Arpacorp is looking for three (3) Social Media Marketing Interns to be part of our social media community team."
              },
            {
              info: "We are an equal opportunity employer. This position requires no experience."
              },
            {
              info: "Open to currently enrolled university students."
              },
            {
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
          cover: require('@/assets/startups/arpacorp/logo2.png'),
          coverAlt: "ARPACORP cover",
          icon: require('@/assets/startups/arpacorp/logo.png'),
          iconAlt: "ARPACORP logo",
          jobName: "Social Media Specialist",
          jobId: 5,
          responsibilities: [
            {
              responsibility: "Developing and managing overall social media strategy for the product"
              },
            {
              responsibility: "Planning, designing, and implementing campaigns on social media to boost brand awareness"
              },
            {
              responsibility: "Monitoring, analyzing and reporting on website performance and marketing metrics"
              },
            {
              responsibility: "Tapping into online platforms such as Facebook, LinkedIn and Google"
              },
            {
              responsibility: "Performs creative writing and ensure that content is informative and appealing"
            }
          ],
          requirements: [
            {
              requirement: "Extensive experience in a social medial marketing or related role"
              },
            {
              requirement: "Deep understanding of social media marketing and production"
              },
            {
              requirement: "Knowledge on social media campaigns and other social media marketing tools"
              },
            {
              requirement: "Good written, oral and visual communication skills"
              },
            {
              requirement: "Excellent time-management skills"
              },
            {
              requirement: "Flexibility and ability to multi-task"
              },
            {
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
          jobName: "Marketing Intern",
          jobId: 6,
          responsibilities: [
            {
              responsibility: "Support marketing campaign planning and execution"
              },
            {
              responsibility: "Write copy for social media posts, promotional emails, and other marketing collateral"
              },
            {
              responsibility: "Create written, video, and image content for marketing channels"
              },
            {
              responsibility: "Support in managing website SEO"
              },
            {
              responsibility: "Take part in formal and informal training opportunities"
              },
            {
              responsibility: "Measure and report the results of marketing initiatives"
              },
            {
              responsibility: "Build and manage XPERTO Facebook and LinkedIn Ads Manager accounts"
              },
            {
              responsibility: "Assist in customer support activities"
            }
          ],
          requirements: [
            {
              requirement: "Self-starter, motivated, and able to take initiative and work independently"
              },
            {
              requirement: "Solid understanding of different marketing techniques"
              },
            {
              requirement: "Excellent verbal and written communication skills"
              },
            {
              requirement: "Attention to detail is essential"
              },
            {
              requirement: "Familiarity with marketing computer software and online applications (e.g. CRM tools, Online analytics, and Google Adwords)"
              },
            {
              requirement: "Passion for the marketing industry and its best practices"
              },
            {
              requirement: "Current enrollment in a related BS or Masters degree"
              },
            {
              requirement: "Experience working with Facebook Advertising is a plus"
              },
            {
              requirement: "Experience in basic design platforms (i.e. Canva) is a plus"
              },
            {
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
          jobName: "Research Intern",
          jobId: 7,
          responsibilities: [
            {
              responsibility: "Conduct user research and is comfortable with ideation and user-centered design"
              },
            {
              responsibility: "Conduct interviews and surveys, customer journey maps, service blueprints, wireframes, and prototypes"
              },
            {
              responsibility: "Participate in team brainstorming sessions"
              },
            {
              responsibility: "Take part in formal and informal training opportunities"
              },
            {
              responsibility: "Assist in customer support activities"
            }
          ],
          requirements: [
            {
              requirement: "Passion for user experience research and human-computer interaction to help us understand user needs, workflows, and pain points"
              },
            {
              requirement: "Self-starter, motivated, and able to take initiative and work independently"
              },
            {
              requirement: "Knowledgeable in user research methodology, qualitative and quantitative"
              },
            {
              requirement: "Ability to identify stakeholder needs and pain points"
              },
            {
              requirement: "Experience translating user needs and developing empathy for the user thru a deep understanding of user-centered design methods and applications"
              },
            {
              requirement: "Have software development skills"
              },
            {
              requirement: "Familiarity with REST or GraphQL APIs and JSON"
              },
            {
              requirement: "Strong verbal and written communication skills"
              },
            {
              requirement: "Attention to detail is essential"
              },
            {
              requirement: "Familiarity with prototyping platforms is a plus"
              },
            {
              requirement: "Comfortable in a fast-paced environment with tight deadlines"
              },
            {
              requirement: "Be able to openly communicate user insights in to diverse teams"
              },
            {
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
    },
    mounted: function(){
        this.handleScroll()
        document.getElementById('first-container').addEventListener('scroll', this.handleScroll);
  console.log('scrolling Injected');
    },
    beforeUnmount () {
    document.getElementById('first-container').removeEventListener('scroll', this.handleScroll);
    console.log('scrolling Destroyed');
    },
    methods: {
    handleScroll () {
        this.scrolled = window.scrollY > 0;
        var st = document.getElementById('first-container').scrollTop;
        var sh = document.getElementById('first-container').scrollHeight;
        var oh = document.getElementById('first-container').offsetHeight;
        var sh1 = document.getElementById('responsibilities').scrollHeight;
        var sh2 = document.getElementById('requirements').clientHeight;
        var sh3 = document.getElementById('addtl-info').scrollHeight;
        var sh4 = document.getElementById('application').scrollHeight;
        var sh5 = document.getElementById('btn').scrollHeight;
        if (oh>=sh1+sh2+sh3+sh4+sh5){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
        }
        else if (oh<sh1+sh2+sh3+sh4+sh5 && oh>=sh1+sh2+sh3+sh4){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"

                if (sh-oh==st){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
            }
        }
        else if (oh<sh1+sh2+sh3+sh4 && oh>=sh1+sh2+sh3){
            this.vlStyle1 = "border-left: 4px solid #FFEBE1;";
            this.svgStyle1 = "background: #FFEBE1;"
            this.vlStyle2 = "border-left: 4px solid #FFEBE1;";
            this.svgStyle2 = "background: #FFEBE1;"
            this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
            this.svgStyle3 = "background: #FFEBE1;"
            if (st>(sh1/2)){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
            if (sh-oh==st){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
            }
        }
        else if (oh<sh1+sh2+sh3 && oh>=sh1+sh2){
            if (st>=sh1){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle2 = "background: #FFEBE1;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
            if (st>=sh1+sh2){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
            if (st>=sh1+sh2+sh3){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
            }
            if (sh-oh==st){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
            }
            else if (st<sh1){
                this.vlStyle1 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle1 = "background: #FFEBE1;"
                this.vlStyle2 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle2 = "background: #FFEBE1;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
        }
        else{
            if (st>=sh1){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle2 = "background: #FFEBE1;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
            if (st>=sh1+sh2){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
            if (st>=sh1+sh2+sh3){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
            }
            if (sh-oh==st){
                this.vlStyle1 = "border-left: 4px solid #F46E26;";
                this.svgStyle1 = "background: #F46E26;"
                this.vlStyle2 = "border-left: 4px solid #F46E26;";
                this.svgStyle2 = "background: #F46E26;"
                this.vlStyle3 = "border-left: 4px solid #F46E26;";
                this.svgStyle3 = "background: #F46E26;"
            }
            else if (st<sh1){
                this.vlStyle1 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle1 = "background: #FFEBE1;"
                this.vlStyle2 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle2 = "background: #FFEBE1;"
                this.vlStyle3 = "border-left: 4px solid #FFEBE1;";
                this.svgStyle3 = "background: #FFEBE1;"
            }
        }
    }
    }
}
</script>

<style scoped>
@font-face {
  font-family: "Objectivity-ExtraBold";
  src: url('./../fonts/Objectivity-ExtraBold.otf') format("opentype");
}
@font-face {
  font-family: "Inter-Bold";
  src: url('./../fonts/Inter-Bold.ttf') format("truetype");
}
@font-face {
  font-family: "Inter-SemiBold";
  src: url('./../fonts/Inter-SemiBold.ttf') format("truetype");
}
@font-face {
  font-family: "Inter-Regular";
  src: url('./../fonts/Inter-Regular.ttf') format("truetype");
}
@font-face {
  font-family: "Inter-Light";
  src: url('./../fonts/Inter-Light.ttf') format("truetype");
}
*{
    background-color: #fcfcfc;
}
.page-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0px!important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-x: hidden;
}
.cover-wrapper{
min-width: 100vw!important;
height: 120px;
}
.cover-wrapper img{
width: 100%;
height: 100%;
}
.header-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transform: translate(0px,13px);
    width: 1152px;
    padding-left: 144px;
}
.icon-wrapper{
width: 160px;
height: 160px;
}
.icon-wrapper img{
    width: 100%;
    height: 100%;
    transform: translate(0px,-69px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border-radius: 5px;
}
.header-content{
    padding-left: 32px;
    display: flex;
    flex-direction: column;
}
.header{
    font-size: 28px;
    line-height: 40px;
    color: #000;
    font-family: 'Objectivity-ExtraBold';
    font-weight: 800;
    text-align: left;
}
.subheader{
    font-size: 14px;
    line-height: 22px;
    color: #000;
    font-family: 'Inter-Regular';
    font-weight: 400;
    text-align: left;
    height: 30px;
}
.first-container{
    display: flex;
    flex-direction: row;
    z-index: 1;
    margin-left: 0px!important;
    margin-right: 0px!important;
    overflow: auto;
    width: 100%;
    padding-left: 292px;
    margin-top: 5px!important;
    height: 100vh!important;
}
.side-nav-wrapper{
    display: flex;
    flex-direction: column;
    width: 168px;
    position: sticky;
    top:0;
}
.sidenav-container{
    display: flex;
    flex-direction: row;
}
.nav-icon{
    background: #F46E26;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    z-index: 2;
}
.nav-icon svg{
    background: #F46E26;
    padding: auto;
    margin-top: 12px!important;
    margin-left: 12px!important;
    background: transparent!important;
}
.nav-section p{
    font-size: 14px;
    line-height: 22px;
    color: #2C2C2C;
    font-family: 'Inter-Regular';
    padding-left: 17px;
    margin-top: 14px!important;
    display: block;
    z-index: 20!important;
}
.content-wrapper{
    padding-left: 180px;
    width: 656px;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.content-header p{
    font-size: 28px;
    line-height: 40px;
    color: #000;
    font-family: 'Objectivity-ExtraBold';
}
.bullet-wrapper{
    margin-top: -5px!important;
}
img{
    object-fit: cover;
}
.bullet-content{
    padding-top: 21px;
    display: flex;
    flex-direction: row;
}
.bullet-content p{
    font-size: 16px;
    line-height: 26px;
    font-family: 'Inter-Regular';
    color: #333;
}
.bullet-content svg{
    margin-top: 7px!important;
    margin-right: 12px!important;
}
.other-containers{
    padding-bottom: 60px;
    height: 100vh;
    padding-top: 60px;
}
.app_process{
    padding-top: 60px;
    height: 100vh;
}
.responsibilities{
    height: 100vh;
    padding-bottom: 60px;
}
.vl{
    border-left: 4px solid #FFEBE1;
    height: 52px;
    margin-left: 22px!important;
    width: 20px;
    transition-property: border-left;
    transition-delay: 0s;
    transition-duration: 0.5s;
}
.light-orange{
    background: #FFEBE1;
    transition-property: background;
    transition-delay: 0s;
    transition-duration: 1s;
}
#svg2{
    margin-top: 17.185px!important;
    margin-left: 14px!important;
}
#svg3{
    margin-top: 10.45px!important;
    margin-left: 10.45px!important;
}
#nav-addtl p{
    margin-top: 0px!important;
}
.btn{
    margin-top: 48px!important;
    padding-bottom: 100px;
}
#chevron{
    margin-left: 8px!important;
}
@media screen and (max-width: 1366px){
    .first-container{
        padding-left: 219px;
    }
    .header-container{
        padding-left: 108px;
    }
}
@media screen and (max-width: 1280px){
    .first-container{
        padding-left: 146px;
    }
    .header-container{
        padding-left: 72px;
    }
}
@media screen and (max-width: 1194px){
    .cover-wrapper{
        height: 176px;
    }
    .icon-wrapper{
    width: 155px;
    height: 155px;
    }
    .header-container{
        transform: translate(0px,25px);
        margin-left: 0px!important;
        margin-right: 0px!important;
        padding-left: 180px;
    }
    .icon-wrapper img{
        transform: translate(0px,-73px);
    }
    .side-nav-wrapper{
        display: none;
    }
    .first-container{
        transform: translate(0%,0%);
    padding-left: 180px;
    margin-top: 29px!important;
    overflow: visible;
    }
    .content-wrapper{
        padding-left: 0px;
        width: 688.29px;
    }
    .other-containers{
    padding-top: 94px;
    height: 100vh;
    }
    .btn{
        margin-top: 62px!important;
        padding-bottom: 106px;
    }
}
@media screen and (max-width: 1024px){
    .first-container{
    padding-left: 120px;
    }
    .header-container{
    padding-left: 120px;
    }
}
@media screen and (max-width: 950px){
    .first-container{
    padding-left: 80px;
    }
    .header-container{
    padding-left: 80px;
    }
}
@media screen and (max-width: 823px){
    .first-container{
    padding-left: 40px;
    }
    .header-container{
    padding-left: 40px;
    }
}
@media screen and (max-width: 765px){
    .content-wrapper{
        width: auto;
    padding-left: 16px;
    padding-right: 16px;
    }
    .first-container{
    padding-left: 0px;
    }
    .header-container{
    padding-left: 16px;
    }
}
@media screen and (max-width: 765px){
    .icon-wrapper{
    width: 96px;
    height: 96px;
    margin-left: auto!important;
    margin-right: auto!important;
    }
    .icon-wrapper img{
        transform: translate(0px,-40px);
    }
    .header-container{
        flex-direction: column;
        transform: translate(0px,0px);
        padding-left: 0px;
        width: auto;
        margin-left: auto!important;
    margin-right: auto!important;
    }
    .cover-wrapper{
        height: 112px;
    }
    .header-content{
        transform: translate(0px,-16px);
        padding-left: 0px;
    }
    .header-content p{
        text-align: center;
    }
    .header{
        font-size: 20px;
    line-height: 40px;
    }
    .first-container{
        margin-top: 24px!important;
    }
    .content-header p{
    font-size: 20px;
    line-height: 40px;
    }
    .other-containers{
    padding-top: 80px;
    }
    .btn{
        margin-top: 48!important;
        padding-bottom: 80px;
    }
}
</style>