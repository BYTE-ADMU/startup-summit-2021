<template>
    <div class="page-container">
        <center><div class="first-container">
            <p id="header">Got Questions?</p>
            <center><div class="btn-wrapper">
              <span class="general-btn" @click="
              general_clicked=true,
              general_unclicked=false,
              reg_unclicked=true,
              reg_clicked=false,
              part_unclicked=true,
              part_clicked=false,
              speakers_unclicked=true,
              speakers_clicked=false,
              plat_unclicked=true,
              plat_clicked=false"><PrimaryBtn id="btn" active v-if="general_clicked">General</PrimaryBtn>
              <SecondaryBtn v-if="general_unclicked">General</SecondaryBtn></span>
              <span class="reg-btn" @click="
              general_clicked=false,
              general_unclicked=true,
              reg_unclicked=false,
              reg_clicked=true,
              part_unclicked=true,
              part_clicked=false,
              speakers_unclicked=true,
              speakers_clicked=false,
              plat_unclicked=true,
              plat_clicked=false"><PrimaryBtn id="btn" v-if="reg_clicked">Registration</PrimaryBtn>
              <SecondaryBtn v-if="reg_unclicked">Registration</SecondaryBtn></span>
              <span class="part-btn" @click="
              general_clicked=false,
              general_unclicked=true,
              reg_unclicked=true,
              reg_clicked=false,
              part_unclicked=false,
              part_clicked=true,
              speakers_unclicked=true,
              speakers_clicked=false,
              plat_unclicked=true,
              plat_clicked=false"><PrimaryBtn id="btn" v-if="part_clicked">Participants</PrimaryBtn>
              <SecondaryBtn v-if="part_unclicked">Participants</SecondaryBtn></span>
              <span class="speakers-btn" @click="
              general_clicked=false,
              general_unclicked=true,
              reg_unclicked=true,
              reg_clicked=false,
              part_unclicked=true,
              part_clicked=false,
              speakers_unclicked=false,
              speakers_clicked=true,
              plat_unclicked=true,
              plat_clicked=false"><PrimaryBtn id="btn" v-if="speakers_clicked">Speakers</PrimaryBtn>
              <SecondaryBtn v-if="speakers_unclicked">Speakers</SecondaryBtn></span>
              <span class="plat-btn" @click="
              general_clicked=false,
              general_unclicked=true,
              reg_unclicked=true,
              reg_clicked=false,
              part_unclicked=true,
              part_clicked=false,
              speakers_unclicked=true,
              speakers_clicked=false,
              plat_unclicked=false,
              plat_clicked=true"><PrimaryBtn id="btn" v-if="plat_clicked">Platform</PrimaryBtn>
              <SecondaryBtn v-if="plat_unclicked">Platform</SecondaryBtn></span>
            </div></center>
        </div></center>
        <center>
          <div v-if="general_clicked" class="questions-container">
            <div v-for="q in genQuestions" :key="q" class="q-container">
              <p id="question">{{q.question}}</p>
              <p id="answer" v-html="q.answer"></p>
              <p id="answer2" v-html="q.answer2"></p>
            </div>
          </div>
          <div v-if="reg_clicked" class="questions-container">
            <div v-for="q in regQuestions" :key="q" class="q-container">
              <p id="question">{{q.question}}</p>
              <p id="answer" v-html="q.answer"></p>
            </div>
          </div>
          <div v-if="part_clicked" class="questions-container">
            <div v-for="q in partQuestions" :key="q" class="q-container">
              <p id="question">{{q.question}}</p>
              <p id="answer" v-html="q.answer"></p>
            </div>
          </div>
          <div v-if="speakers_clicked" class="questions-container">
            <div v-for="q in speakQuestions" :key="q" class="q-container">
              <p id="question">{{q.question}}</p>
              <p id="answer" v-html="q.answer"></p>
            </div>
          </div>
          <div v-if="plat_clicked" class="questions-container">
            <div v-for="q in platQuestions" :key="q" class="q-container">
              <p id="question">{{q.question}}</p>
              <p id="answer" v-html="q.answer"></p>
            </div>
          </div>
        </center>
    </div>
</template>

<script>
import PrimaryBtn from '../components/PrimaryBtn.vue'
import SecondaryBtn from '../components/SecondaryBtn.vue'

export default {
    name: 'FAQ',
    components:{
      PrimaryBtn,
      SecondaryBtn
    },
    data(){
      return{
        general_clicked: true,
        general_unclicked: false,
        reg_clicked: false,
        reg_unclicked: true,
        part_clicked: false,
        part_unclicked: true,
        speakers_clicked: false,
        speakers_unclicked: true,
        plat_clicked: false,
        plat_unclicked: true,
        genQuestions: [
          {
            question: 'What is Startup Summit?',
            answer: "Startup Summit 2021 is a flagship event by BYTE where a series of talks and an exhibit of startups will take place on April 16-18, 2020. You can read more about it <a href='' style='text-decoration: none; color:#F46E26'>here.</a>",
            answer2: "Startup Summit 2021 is a flagship event by BYTE where a series of talks and an exhibit of startups will take place on April 16-18, 2020. You can read more about it <a href='' style='text-decoration: none; color:#F46E26'>here.</a>"
          },
          {
            question: 'How will I know which speaker/s will be present for what day?',
            answer: "You may view the list of speakers for each day, as well as their schedule, on the home page found on the website.",
            answer2: "You may view the list of speakers for each day, as well as their schedule, on the home page found on the website."
          },
          {
            question: 'What does the theme Reimagining Possibilities with Tech entail?',
            answer: "With today’s sensational new technology, the line dividing the possible and impossible is no longer rigid as it once was.  “Reimagining Possibilities with Tech” seeks to showcase startups that are at the forefront of this industry of groundbreaking technology – startups that have the potential to make colossal change in the way people live and the way society operates.",
            answer2: "With today’s sensational new technology, the line dividing the possible and impossible is no longer rigid as it once was.  “Reimagining Possibilities with Tech” seeks to showcase startups that are at the forefront of this industry of groundbreaking technology – startups that have the potential to make colossal change in the way people live and the way society operates."
          },
          {
            question: 'What does the theme Breaking Barriers with Women in Startups entail?',
            answer: "Considering the male-dominated nature of the tech and startup industry, “Breaking Barriers with Women in Startups” revolves around showcasing the work of remarkable women in the industry in leadership roles thus breaking the glass ceiling that holds many of them back.",
            answer2: "Considering the male-dominated nature of the tech and startup industry, “Breaking Barriers with Women in Startups” revolves around showcasing the work of remarkable women in the industry in leadership roles thus breaking the glass ceiling that holds many of them back."
          },
          {
            question: 'What does the theme Social Entrepreneurship for a Better Tomorrow entail?',
            answer: "With the rise of different environmental and social issues that continue to emerge in today’s society, “Social Entrepreneurship for a Better Tomorrow” seeks to showcase innovative solutions that create positive environmental and social impacts, highlighting the importance of understanding one’s role in solving social and environmental problems for a better tomorrow.",
            answer2: "With the rise of different environmental and social issues that continue to emerge in today’s society, “Social Entrepreneurship for a Better Tomorrow” seeks to showcase innovative solutions that create positive environmental and social impacts, highlighting the importance of understanding one’s role in solving social and environmental problems for a better tomorrow."
          },
          {
            question: 'Who do I contact for further questions?',
            answer: "If you have any questions, you may send them to byte.startupsummit2021@gmail.com.",
            answer2: "If you have any questions, you may send them to our <a href='mailto:byte.startupsummit2021@gmail.com' style='text-decoration: none; color:#F46E26'>email.</a>"
          }
        ],
        regQuestions: [
          {
            question: 'Will there be any registration fees?',
            answer: "No, the Startup Summit is a free event open to all high school and university students."
          },
          {
            question: 'How do I register for this event?',
            answer: "You can register through the registration form below and through our website. After that, you will receive details regarding the 2nd phase of registration on Hopin."
          },
          {
            question: 'Who can access my data when I register for the event?',
            answer: "Your data will only be used by the Startup Summit Project team. Rest assured that your data will not be given out to any other participant or external partner."
          },
          {
            question: 'When will I receive the second phase details after accomplishing the registration form?',
            answer: "The Phase 2 registration link will be sent via email a few weeks before the event proper. You can like our <a href='' style='text-decoration: none; color:#F46E26'>Official Facebook Page</a> to stay updated on announcements regarding the event."
          }
        ],
        partQuestions: [
          {
            question: 'Is this event only open to BYTE’s members?',
            answer: "No, Startup Summit is open to not only BYTE members, but also open to anyone who has a passion for tech, innovation, business, and the budding startup scene."
          },
          {
            question: 'What do I need to attend the virtual conference?',
            answer: "To attend the virtual conference, you will need a stable internet connection, your device or computer, and a Hopin account. You will also need to fill up a registration form on our website and on Hopin in order to get an event ticket."
          },
          {
            question: 'Will I receive a certificate of attendance?',
            answer: "A certificate of attendance is only given to participants who have attended all three days of Startup Summit 2021."
          },
          {
            question: 'I only want to attend one day of the conference, is that possible?',
            answer: "Yes. It is up to the participants to attend certain talks they are interested in. However, to get the most out of this three-day event, we strongly encourage you to attend all conference days."
          },
          {
            question: 'Are walk-ins allowed?',
            answer: "Walk-ins are allowed on the first day of the conference, given that they go through the registration process. However, it will not be allowed on the succeeding days."
          },
          {
            question: 'What can I get if I attend this event?',
            answer: "In addition to the insightful talks from our roster of global startup leaders, participants will have the chance to network with like-minded participants of the event, building future partnerships and strategic relationships. SUS also offers internship and job opportunities, exclusively made available for its participants."
          }
        ],
        speakQuestions: [
          {
            question: 'Can I apply for different jobs and internships on the Startup Summit website?',
            answer: "You cannot apply to the different jobs and opportunities on the website. On each available position, there are specific instructions on how to apply to the different startups."
          },
          {
            question: 'Do all of the startups have open job and internship positions?',
            answer: "No, not all startups have job and opportunity offerings. On the startup page, there are tags that indicate which startups have open positions."
          }
        ],
        platQuestions: [
          {
            question: 'How will I watch the event?',
            answer: "The event will be happening live on Hopin beginning at 10:00 am on April 16, 17, and 18."
          },
          {
            question: 'Do I need a webcam for the event?',
            answer: "You don’t need a webcam to attend this event. However, during networking sessions, we encourage you to turn on your cameras for a more engaging experience with other virtual attendees."
          },
          {
            question: 'What’s the difference between Phase 1 and Phase 2 Registration, and do I need to register for both?',
            answer: "Yes. Phase 1 registration ensures your slot for the event since slots are limited, while Phase 2 registration ensures you have an account to access the actual Hopin event."
          },
          {
            question: 'Where do we receive updates and announcements about the event?',
            answer: "The Slack channel will serve as the main source of updates on the event. You can join the official SUS 2021 Slack through the link that will be sent to you in the Phase 2 Registration email."
          }
        ]
      }
    },
    methods: {
      buttons(){
        if (this.general_clicked == true){
            this.general_unclicked = false;
            this.reg_clicked = false;
            this.reg_unclicked = true;
            this.part_clicked = false;
            this.part_unclicked = true;
            this.speakers_clicked = false;
            this.speakers_unclicked = true;
            this.plat_clicked = false;
            this.plat_unclicked = true;
        }
        else if (this.reg_clicked == true){
            this.general_clicked = false;
            this.general_unclicked = true;
            this.reg_unclicked = false;
            this.part_clicked = false;
            this.part_unclicked = true;
            this.speakers_clicked = false;
            this.speakers_unclicked = true;
            this.plat_clicked = false;
            this.plat_unclicked = true;
        }
        else if (this.part_clicked == true){
            this.general_clicked = false;
            this.general_unclicked = true;
            this.reg_clicked = false;
            this.reg_unclicked = true;
            this.part_unclicked = false;
            this.speakers_clicked = false;
            this.speakers_unclicked = true;
            this.plat_clicked = false;
            this.plat_unclicked = true;
        }
        else if (this.speakers_clicked == true){
            this.general_clicked = false;
            this.general_unclicked = true;
            this.reg_clicked = false;
            this.reg_unclicked = true;
            this.part_unclicked = true;
            this.part_clicked = false;
            this.speakers_unclicked = false;
            this.plat_clicked = false;
            this.plat_unclicked = true;
        }
        else if (this.plat_clicked == true){
            this.general_clicked = false;
            this.general_unclicked = true;
            this.reg_clicked = false;
            this.reg_unclicked = true;
            this.part_unclicked = true;
            this.part_clicked = false;
            this.speakers_unclicked = true;
            this.speakers_clicked = false;
            this.plat_unclicked = false;
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
    margin: 0px!important;
}
.page-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 100vh; */
    margin: 0px!important;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
.first-container{
    padding-top: 70px;
    display: flex;
    flex-direction: column;
}
#header{
    font-size: 28px;
    line-height: 40px;
    font-family: 'Objectivity-ExtraBold';
}
.btn-wrapper{
    max-width: 780px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 19px;
    padding-bottom: 10px;
}
.questions-container{
  width: 1126px;
  /* height: 578px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 200px;
}
.q-container{
  width: 484px;
  height: 252px;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  background: #F8F8F8;
  text-align: left;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
border-radius: 4px;
margin-top: 30px!important;
}
.q-container p{
  background: #F8F8F8;
}
#question{
  font-size: 20px;
  line-height: 28px;
  color: #F46E26;
  font-family: 'Inter-Bold';
}
#answer{
  padding-top: 16px;
  font-size: 16px;
  line-height: 26px;
  color: #2C2C2C;
  font-family: 'Inter-Regular';
}
#answer2{
  display: none;
  padding-top: 16px;
  font-size: 16px;
  line-height: 26px;
  color: #2C2C2C;
  font-family: 'Inter-Regular';
}
.plat-btn #primary:active:not([disabled]){
  background: #E75E25!important;
  color: #f8f8f8!important;
  box-shadow: 0px 0px 0px rgb(244 110 38 / 50%)!important;
}
#btn{
  background: #E75E25!important;
  color: #f8f8f8!important;
  box-shadow: 0px 0px 0px rgb(244 110 38 / 50%)!important;
}
@media screen and (max-width: 1150px) {
  .first-container{
    flex-direction: column-reverse;
    padding-top: 128px;
  }
  .btn-wrapper{
    flex-wrap: wrap;
    max-width: 478px;
    padding-top: 0px;
    padding-bottom: 56px;
  }
  .speakers-btn{
    margin-left: 100px!important;
    margin-top: 40px!important;
  }
  .plat-btn{
    margin-right: 100px!important;
    margin-top: 40px!important;
  }
  .questions-container{
    width: 548px;
    padding-top: 8px;
  }
  .q-container{
    margin-top: 16px!important;
  }
}
@media screen and (max-width: 568px) {
  .questions-container{
    width: auto;
    margin-left: 16px!important;
    margin-right: 16px!important;
  }
  .q-container{
    width: auto;
    height: auto;
  }
  .btn-wrapper{
    flex-wrap: wrap;
    padding-top: 0px;
    padding-bottom: 56px;
    margin-left: 16px!important;
    margin-right: 16px!important;
    justify-content: space-evenly;
  }
  .speakers-btn{
    margin-left: 40px!important;
    margin-top: 24px!important;
  }
  .plat-btn{
    margin-right: 40px!important;
    margin-top: 24px!important;
  }
}
@media screen and (max-width: 427px) {
  .part-btn{
    margin-top: 24px!important;
  }
  .speakers-btn{
    margin-left: 0px!important;
    margin-top: 24px!important;
  }
  .plat-btn{
    margin-right: 0px!important;
    margin-top: 24px!important;
  }
  .btn-wrapper{
    padding-bottom: 32px;
  }
  .questions-container{
    margin-top: 24px!important;
  }
}
@media screen and (max-width: 380px) {
  #answer{
    display: none;
  }
  #answer2{
    display: inline-block;
  }
}
@media screen and (max-width: 286px) {
  .reg-btn{
    margin-top: 24px!important;
  }
}
</style>