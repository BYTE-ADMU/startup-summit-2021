<template>
<div class="page">
<Hero />
<WhatIsSus />
<div data-aos="fade-up">
<EventSchedule @transfer-click="transferClickNum" @transfer-date="transferDate"/>

<!--Cards for First day -->
<div class="card_container" v-if="choice === 1">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse4">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse5">

  <!--1st day-->
  <div class="row1">
    <Card class="card1"
    @toggle-modal1="showTalkModal"
    v-bind:time="first_day[0].time"
    v-bind:talk="first_day[0].talk"
    v-bind:description="first_day[0].description"
    v-bind:speaker="first_day[0].speaker"
    :pic_url=first_day[0].pic_url
    />
    <Card class="card2"
    @toggle-modal2="showTalkModal"
    v-bind:time="first_day[1].time"
    v-bind:talk="first_day[1].talk"
    v-bind:description="first_day[1].description"
    v-bind:speaker="first_day[1].speaker"
    :pic_url=first_day[1].pic_url
    />
  </div>
  <div class="row2">
    <Card class="card3"
    @toggle-modal3="showTalkModal"
    v-bind:time="first_day[2].time"
    v-bind:talk="first_day[2].talk"
    v-bind:description="first_day[2].description"
    v-bind:speaker="first_day[2].speaker"
    :pic_url=first_day[2].pic_url
    />
    <Card class="card4"
    @toggle-modal4="showTalkModal"
    v-bind:time="first_day[3].time"
    v-bind:talk="first_day[3].talk"
    v-bind:description="first_day[3].description"
    v-bind:speaker="first_day[3].speaker"
    :pic_url=first_day[3].pic_url
    />
  </div>
  <div class="row3">
    <Card2 class="card5"
    @toggle-modal5="showTalkModal"
    v-bind:time="first_day[4].time" 
    v-bind:panel="first_day[4].panel" 
    v-bind:description="first_day[4].description" 
    :pic_url1=first_day[4].pic_url1
    :pic_url2=first_day[4].pic_url2
    :pic_url3=first_day[4].pic_url3
    :pic_url4=first_day[4].pic_url4
    />
    <Card3 class="card6"
    @toggle-modal6="showTalkModal"
    v-bind:time="first_day[5].time"
    v-bind:exhibit="first_day[5].exhibit"
    v-bind:description="first_day[5].description"
    :pic_url1=first_day[5].pic_url1
    :pic_url2=first_day[5].pic_url2
    :pic_url3=first_day[5].pic_url3
    :pic_url4=first_day[5].pic_url4
    :pic_url5=first_day[5].pic_url5
    :pic_url6=first_day[5].pic_url6
    />
  </div>

  <!--Modals for day 1-->
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 1">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="first_day[0].talk"
      v-bind:date="modal_date"
      v-bind:time="first_day[0].modal.time"
      v-bind:speaker="first_day[0].speaker"
      v-bind:creds="first_day[0].modal.creds"
      v-bind:description="first_day[0].modal.description"
      :image=first_day[0].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 2">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="first_day[1].talk"
      v-bind:date="modal_date"
      v-bind:time="first_day[1].modal.time"
      v-bind:speaker="first_day[1].speaker"
      v-bind:creds="first_day[1].modal.creds"
      v-bind:description="first_day[1].modal.description"
      :image=first_day[1].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 3">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="first_day[2].talk"
      v-bind:date="modal_date"
      v-bind:time="first_day[2].modal.time"
      v-bind:speaker="first_day[2].speaker"
      v-bind:creds="first_day[2].modal.creds"
      v-bind:description="first_day[2].modal.description"
      :image=first_day[2].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 4">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="first_day[3].talk"
      v-bind:date="modal_date"
      v-bind:time="first_day[3].modal.time"
      v-bind:speaker="first_day[3].speaker"
      v-bind:creds="first_day[3].modal.creds"
      v-bind:description="first_day[3].modal.description"
      :image=first_day[3].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 5">
      <PanelModal
      class="panel_modal"
      @exit-button="exitModal"
      v-bind:panel="first_day[4].panel"
      v-bind:date="modal_date"
      v-bind:time="first_day[4].modal.time"
      v-bind:description="first_day[4].modal.description"
      :speaker_1="first_day[0].speaker"
      :speaker_2="first_day[1].speaker"
      :speaker_3="first_day[2].speaker"
      :speaker_4="first_day[3].speaker"
      :creds1="first_day[0].modal.creds"
      :creds2="first_day[1].modal.creds"
      :creds3="first_day[2].modal.creds"
      :creds4="first_day[3].modal.creds"
      :img1=first_day[0].pic_url
      :img2=first_day[1].pic_url
      :img3=first_day[2].pic_url
      :img4=first_day[3].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 6">
      <ExhibitModal
      class="exhibit_modal"
      @exit-button="exitModal"
      v-bind:exhibit="first_day[5].modal.exhibit"
      v-bind:date="modal_date"
      v-bind:time="first_day[5].modal.time"
      :startup1=first_day[5].modal.startup1
      :startup2=first_day[5].modal.startup2
      :startup3=first_day[5].modal.startup3
      :startup4=first_day[5].modal.startup4
      :startup5=first_day[5].modal.startup5
      :startup6=first_day[5].modal.startup6
      :startup7=first_day[5].modal.startup7
      :startup8=first_day[5].modal.startup8
      :sched1=first_day[5].modal.sched1
      :sched2=first_day[5].modal.sched2
      :sched3=first_day[5].modal.sched3
      :sched4=first_day[5].modal.sched4
      :sched5=first_day[5].modal.sched5
      :sched6=first_day[5].modal.sched6
      :sched7=first_day[5].modal.sched7
      :sched8=first_day[5].modal.sched8
      :img1=first_day[5].modal.img1
      :img2=first_day[5].modal.img2
      :img3=first_day[5].modal.img3
      :img4=first_day[5].modal.img4
      :img5=first_day[5].modal.img5
      :img6=first_day[5].modal.img6
      :img7=first_day[5].modal.img7
      :img8=first_day[5].modal.img8
      />
    </div>
  </transition>
</div>

<!--Cards for second day -->
<div class="card_container" v-if="choice === 2">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse4">

  <!--2nd day-->
  <div class="row1">
    <Card class="card1"
    @toggle-modal1="showTalkModal"
    v-bind:time="second_day[0].time"
    v-bind:talk="second_day[0].talk"
    v-bind:description="second_day[0].description"
    v-bind:speaker="second_day[0].speaker"
    :pic_url=second_day[0].pic_url
    />
    <Card class="card2"
    @toggle-modal2="showTalkModal"
    v-bind:time="second_day[1].time"
    v-bind:talk="second_day[1].talk"
    v-bind:description="second_day[1].description"
    v-bind:speaker="second_day[1].speaker"
    :pic_url=second_day[1].pic_url
    />
  </div>
  <div class="row2">
    <Card class="card3"
    @toggle-modal3="showTalkModal"
    v-bind:time="second_day[2].time"
    v-bind:talk="second_day[2].talk"
    v-bind:description="second_day[2].description"
    v-bind:speaker="second_day[2].speaker"
    :pic_url=second_day[2].pic_url
    />
    <Card class="card4"
    @toggle-modal4="showTalkModal"
    v-bind:time="second_day[3].time"
    v-bind:talk="second_day[3].talk"
    v-bind:description="second_day[3].description"
    v-bind:speaker="second_day[3].speaker"
    :pic_url=second_day[3].pic_url
    />
  </div>
  <div class="row3">
    <Card2 class="card5"
    @toggle-modal5="showTalkModal"
    v-bind:time="second_day[4].time" 
    v-bind:panel="second_day[4].panel" 
    v-bind:description="second_day[4].description" 
    :pic_url1=second_day[4].pic_url1
    :pic_url2=second_day[4].pic_url2
    :pic_url3=second_day[4].pic_url3
    :pic_url4=second_day[4].pic_url4
    />
    <Card3 class="card6"
    @toggle-modal6="showTalkModal"
    v-bind:time="second_day[5].time"
    v-bind:exhibit="second_day[5].exhibit"
    v-bind:description="second_day[5].description"
    :pic_url1=second_day[5].pic_url1
    :pic_url2=second_day[5].pic_url2
    :pic_url3=second_day[5].pic_url3
    :pic_url4=second_day[5].pic_url4
    :pic_url5=second_day[5].pic_url5
    :pic_url6=second_day[5].pic_url6
    />
  </div>

  <!--Modals for day 2-->
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 1">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="second_day[0].talk"
      v-bind:date="modal_date"
      v-bind:time="second_day[0].modal.time"
      v-bind:speaker="second_day[0].speaker"
      v-bind:creds="second_day[0].modal.creds"
      v-bind:description="second_day[0].modal.description"
      :image=second_day[0].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 2">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="second_day[1].talk"
      v-bind:date="modal_date"
      v-bind:time="second_day[1].modal.time"
      v-bind:speaker="second_day[1].speaker"
      v-bind:creds="second_day[1].modal.creds"
      v-bind:description="second_day[1].modal.description"
      :image=second_day[1].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 3">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="second_day[2].talk"
      v-bind:date="modal_date"
      v-bind:time="second_day[2].modal.time"
      v-bind:speaker="second_day[2].speaker"
      v-bind:creds="second_day[2].modal.creds"
      v-bind:description="second_day[2].modal.description"
      :image=second_day[2].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 4">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="second_day[3].talk"
      v-bind:date="modal_date"
      v-bind:time="second_day[3].modal.time"
      v-bind:speaker="second_day[3].speaker"
      v-bind:creds="second_day[3].modal.creds"
      v-bind:description="second_day[3].modal.description"
      :image=second_day[3].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 5">
      <PanelModal
      class="panel_modal"
      @exit-button="exitModal"
      v-bind:panel="second_day[4].panel"
      v-bind:date="modal_date"
      v-bind:time="second_day[4].modal.time"
      v-bind:description="second_day[4].modal.description"
      :speaker_1="second_day[0].speaker"
      :speaker_2="second_day[1].speaker"
      :speaker_3="second_day[2].speaker"
      :speaker_4="second_day[3].speaker"
      :creds1="second_day[0].modal.creds"
      :creds2="second_day[1].modal.creds"
      :creds3="second_day[2].modal.creds"
      :creds4="second_day[3].modal.creds"
      :img1=second_day[0].pic_url
      :img2=second_day[1].pic_url
      :img3=second_day[2].pic_url
      :img4=second_day[3].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 6">
      <ExhibitModal
      class="exhibit_modal"
      @exit-button="exitModal"
      v-bind:exhibit="second_day[5].modal.exhibit"
      v-bind:date="modal_date"
      v-bind:time="second_day[5].modal.time"
      :startup1=second_day[5].modal.startup1
      :startup2=second_day[5].modal.startup2
      :startup3=second_day[5].modal.startup3
      :startup4=second_day[5].modal.startup4
      :startup5=second_day[5].modal.startup5
      :startup6=second_day[5].modal.startup6
      :startup7=second_day[5].modal.startup7
      :startup8=second_day[5].modal.startup8
      :sched1=second_day[5].modal.sched1
      :sched2=second_day[5].modal.sched2
      :sched3=second_day[5].modal.sched3
      :sched4=second_day[5].modal.sched4
      :sched5=second_day[5].modal.sched5
      :sched6=second_day[5].modal.sched6
      :sched7=second_day[5].modal.sched7
      :sched8=second_day[5].modal.sched8
      :img1=second_day[5].modal.img1
      :img2=second_day[5].modal.img2
      :img3=second_day[5].modal.img3
      :img4=second_day[5].modal.img4
      :img5=second_day[5].modal.img5
      :img6=second_day[5].modal.img6
      :img7=second_day[5].modal.img7
      :img8=second_day[5].modal.img8
      />
    </div>
  </transition>
</div>

<!--Cards for third day -->
<div class="card_container" v-if="choice === 3">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse1">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse2">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse3">
  <img src="../assets/ellipse_design.svg" alt="design" class="ellipse4">

  <!--3rd day-->
  <div class="row1">
    <Card class="card1"
    @toggle-modal1="showTalkModal"
    v-bind:time="third_day[0].time"
    v-bind:talk="third_day[0].talk"
    v-bind:description="third_day[0].description"
    v-bind:speaker="third_day[0].speaker"
    :pic_url=third_day[0].pic_url
    />
    <Card class="card2"
    @toggle-modal2="showTalkModal"
    v-bind:time="third_day[1].time"
    v-bind:talk="third_day[1].talk"
    v-bind:description="third_day[1].description"
    v-bind:speaker="third_day[1].speaker"
    :pic_url=third_day[1].pic_url
    />
  </div>
  <div class="row2">
    <Card class="card3"
    @toggle-modal3="showTalkModal"
    v-bind:time="third_day[2].time"
    v-bind:talk="third_day[2].talk"
    v-bind:description="third_day[2].description"
    v-bind:speaker="third_day[2].speaker"
    :pic_url=third_day[2].pic_url
    />
    <Card class="card4"
    @toggle-modal4="showTalkModal"
    v-bind:time="third_day[3].time"
    v-bind:talk="third_day[3].talk"
    v-bind:description="third_day[3].description"
    v-bind:speaker="third_day[3].speaker"
    :pic_url=third_day[3].pic_url
    />
  </div>
  <div class="row3">
    <Card2 class="card5"
    @toggle-modal5="showTalkModal"
    v-bind:time="third_day[4].time" 
    v-bind:panel="third_day[4].panel" 
    v-bind:description="third_day[4].description" 
    :pic_url1=third_day[4].pic_url1
    :pic_url2=third_day[4].pic_url2
    :pic_url3=third_day[4].pic_url3
    :pic_url4=third_day[4].pic_url4
    />
    <Card3 class="card6"
    @toggle-modal6="showTalkModal"
    v-bind:time="third_day[5].time"
    v-bind:exhibit="third_day[5].exhibit"
    v-bind:description="third_day[5].description"
    :pic_url1=third_day[5].pic_url1
    :pic_url2=third_day[5].pic_url2
    :pic_url3=third_day[5].pic_url3
    :pic_url4=third_day[5].pic_url4
    :pic_url5=third_day[5].pic_url5
    :pic_url6=third_day[5].pic_url6
    />
  </div>

  <!--Talk modals for day 3-->
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 1">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="third_day[0].talk"
      v-bind:date="modal_date"
      v-bind:time="third_day[0].modal.time"
      v-bind:speaker="third_day[0].speaker"
      v-bind:creds="third_day[0].modal.creds"
      v-bind:description="third_day[0].modal.description"
      :image=third_day[0].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 2">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="third_day[1].talk"
      v-bind:date="modal_date"
      v-bind:time="third_day[1].modal.time"
      v-bind:speaker="third_day[1].speaker"
      v-bind:creds="third_day[1].modal.creds"
      v-bind:description="third_day[1].modal.description"
      :image=third_day[1].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 3">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="third_day[2].talk"
      v-bind:date="modal_date"
      v-bind:time="third_day[2].modal.time"
      v-bind:speaker="third_day[2].speaker"
      v-bind:creds="third_day[2].modal.creds"
      v-bind:description="third_day[2].modal.description"
      :image=third_day[2].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 4">
      <TalkModal 
      class="talk_modal"
      @exit-button="exitModal" 
      v-bind:talk="third_day[3].talk"
      v-bind:date="modal_date"
      v-bind:time="third_day[3].modal.time"
      v-bind:speaker="third_day[3].speaker"
      v-bind:creds="third_day[3].modal.creds"
      v-bind:description="third_day[3].modal.description"
      :image=third_day[3].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 5">
      <PanelModal
      class="panel_modal"
      @exit-button="exitModal"
      v-bind:panel="third_day[4].panel"
      v-bind:date="modal_date"
      v-bind:time="third_day[4].modal.time"
      v-bind:description="third_day[4].modal.description"
      :speaker_1="third_day[0].speaker"
      :speaker_2="third_day[1].speaker"
      :speaker_3="third_day[2].speaker"
      :speaker_4="third_day[3].speaker"
      :creds1="third_day[0].modal.creds"
      :creds2="third_day[1].modal.creds"
      :creds3="third_day[2].modal.creds"
      :creds4="third_day[3].modal.creds"
      :img1=third_day[0].pic_url
      :img2=third_day[1].pic_url
      :img3=third_day[2].pic_url
      :img4=third_day[3].pic_url
      />
    </div>
  </transition>
  <transition name="fade">
    <div class="modal_container" v-if="show_talk_modal === 6">
      <ExhibitModal
      class="exhibit_modal"
      @exit-button="exitModal"
      v-bind:exhibit="third_day[5].modal.exhibit"
      v-bind:date="modal_date"
      v-bind:time="third_day[5].modal.time"
      :startup1=third_day[5].modal.startup1
      :startup2=third_day[5].modal.startup2
      :startup3=third_day[5].modal.startup3
      :startup4=third_day[5].modal.startup4
      :startup5=third_day[5].modal.startup5
      :startup6=third_day[5].modal.startup6
      :startup7=third_day[5].modal.startup7
      :startup8=third_day[5].modal.startup8
      :sched1=third_day[5].modal.sched1
      :sched2=third_day[5].modal.sched2
      :sched3=third_day[5].modal.sched3
      :sched4=third_day[5].modal.sched4
      :sched5=third_day[5].modal.sched5
      :sched6=third_day[5].modal.sched6
      :sched7=third_day[5].modal.sched7
      :sched8=third_day[5].modal.sched8
      :img1=third_day[5].modal.img1
      :img2=third_day[5].modal.img2
      :img3=third_day[5].modal.img3
      :img4=third_day[5].modal.img4
      :img5=third_day[5].modal.img5
      :img6=third_day[5].modal.img6
      :img7=third_day[5].modal.img7
      :img8=third_day[5].modal.img8
      />
    </div>
  </transition>

</div>
</div>
<Opportunities />
<Partners />
</div>
</template>

<script>

import EventSchedule from '../components/EventSchedule.vue'
import Card from '../components/Card.vue'
import Card2 from '../components/Card2.vue'
import Card3 from '../components/Card3.vue'
import TalkModal from '../components/TalkModal.vue'
import PanelModal from '../components/PanelModal.vue'
import ExhibitModal from '../components/ExhibitModal.vue'
import Hero from '../components/Hero.vue'
import Opportunities from '../components/Opportunities.vue'
import Partners from '../components/Partners.vue'
import WhatIsSus from '../components/WhatIsSus.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    EventSchedule,
    Card,
    Card2,
    Card3,
    TalkModal,
    PanelModal,
    ExhibitModal,
    Hero,
    Opportunities,
    Partners,
    WhatIsSus
  },
  data() {
    return {
      choice: 1,
      show_talk_modal: 0,
      date: "April 16, 2020",

      //All card info for first day
      first_day: [
        {
          class: "card1",
          time: "1:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Gio Divino",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "1-2pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        { 
          class: "card2",
          time: "2:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Franz Taborlupa",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "2-4pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        { 
          class: "card3",
          time: "3:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Clarz Castillo",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "5-6pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        { 
          class: "card4",
          time: "4:00",
          talk: "1 Name of talk",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Another person",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "5-6pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card5",
          time: "5:00",
          panel: "1 Name of panel",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          pic_url1: require('@/assets/kumu-logo.png'),
          pic_url2: require('@/assets/kumu-logo.png'),
          pic_url3: require('@/assets/kumu-logo.png'),
          pic_url4: require('@/assets/kumu-logo.png'),
          modal: {
            time: "7-8pm",
            description: "Panel description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card6",
          time: "6:00",
          exhibit: "Startup Exhibitors' Showcase",
          description: "Learn more about the different startup partners we have as they showcase and present who they are, what they do, and how their startup got to where it is today!",
          pic_url1: require("@/assets/kumu-logo.png"),
          pic_url2: require("@/assets/kumu-logo.png"),
          pic_url3: require("@/assets/kumu-logo.png"),
          pic_url4: require("@/assets/kumu-logo.png"),
          pic_url5: require("@/assets/kumu-logo.png"),
          pic_url6: require("@/assets/kumu-logo.png"),
          modal: {
            exhibit: "Startup Exhibit",
            time: "1-6 PM",
            img1: require("@/assets/kumu-logo.png"),
            img2: require("@/assets/kumu-logo.png"),
            img3: require("@/assets/kumu-logo.png"),
            img4: require("@/assets/kumu-logo.png"),
            img5: require("@/assets/kumu-logo.png"),
            img6: require("@/assets/kumu-logo.png"),
            img7: require("@/assets/kumu-logo.png"),
            img8: require("@/assets/kumu-logo.png"),
            sched1: "Schedule",
            sched2: "Schedule",
            sched3: "Schedule",
            sched4: "Schedule",
            sched5: "Schedule",
            sched6: "Schedule",
            sched7: "Schedule",
            sched8: "Schedule",
            startup1: "Startup name",
            startup2: "Startup name",
            startup3: "Startup name",
            startup4: "Startup name",
            startup5: "Startup name",
            startup6: "Startup name",
            startup7: "Startup name",
            startup8: "Startup name",
          }
        }
      ],
      
      //All card info for second day
      second_day: [
        {
          class: "card1",
          time: "5:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "M Lee",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "1-2pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card2",
          time: "6:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Ceej Atienza",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "3-4pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card3",
          time: "7:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Ces Ong",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "5-6pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card4",
          time: "7:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Another person",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "6-7pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card5",
          time: "8:00",
          panel: "2 Name of panel",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          pic_url1: require('@/assets/kumu-logo.png'),
          pic_url2: require('@/assets/kumu-logo.png'),
          pic_url3: require('@/assets/kumu-logo.png'),
          pic_url4: require('@/assets/kumu-logo.png'),
          modal: {
            time: "7-8pm",
            description: "Panel description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card6",
          time: "7:00",
          exhibit: "Startup Exhibitors' Showcase",
          description: "Learn more about the different startup partners we have as they showcase and present who they are, what they do, and how their startup got to where it is today!",
          pic_url1: require("@/assets/kumu-logo.png"),
          pic_url2: require("@/assets/kumu-logo.png"),
          pic_url3: require("@/assets/kumu-logo.png"),
          pic_url4: require("@/assets/kumu-logo.png"),
          pic_url5: require("@/assets/kumu-logo.png"),
          pic_url6: require("@/assets/kumu-logo.png"),
          modal: {
            exhibit: "Startup Exhibit",
            time: "2-4 PM",
            img1: require("@/assets/kumu-logo.png"),
            img2: require("@/assets/kumu-logo.png"),
            img3: require("@/assets/kumu-logo.png"),
            img4: require("@/assets/kumu-logo.png"),
            img5: require("@/assets/kumu-logo.png"),
            img6: require("@/assets/kumu-logo.png"),
            img7: require("@/assets/kumu-logo.png"),
            img8: require("@/assets/kumu-logo.png"),
            sched1: "Schedule",
            sched2: "Schedule",
            sched3: "Schedule",
            sched4: "Schedule",
            sched5: "Schedule",
            sched6: "Schedule",
            sched7: "Schedule",
            sched8: "Schedule",
            startup1: "Startup name",
            startup2: "Startup name",
            startup3: "Startup name",
            startup4: "Startup name",
            startup5: "Startup name",
            startup6: "Startup name",
            startup7: "Startup name",
            startup8: "Startup name"
          }
        }
      ],

      //All card info for third day
      third_day: [
      {
          class: "card1",
          time: "9:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Bill Gates",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "1-2pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card2",
          time: "10:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Elon Musk",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "3-4pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card3",
          time: "11:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Mark Zuckerberg",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "5-6pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card4",
          time: "11:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Another person",
          pic_url: require('@/assets/kumu-logo.png'),
          modal: {
            time: "5-6pm",
            creds: "Credentials",
            description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card5",
          time: "12:00",
          panel: "3 Name of panel",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          pic_url1: require('@/assets/kumu-logo.png'),
          pic_url2: require('@/assets/kumu-logo.png'),
          pic_url3: require('@/assets/kumu-logo.png'),
          pic_url4: require('@/assets/kumu-logo.png'),
          modal: {
            time: "7-8pm",
            description: "Panel description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card6",
          time: "7:00",
          exhibit: "Startup Exhibitors' Showcase",
          description: "Learn more about the different startup partners we have as they showcase and present who they are, what they do, and how their startup got to where it is today!",
          pic_url1: require("@/assets/kumu-logo.png"),
          pic_url2: require("@/assets/kumu-logo.png"),
          pic_url3: require("@/assets/kumu-logo.png"),
          pic_url4: require("@/assets/kumu-logo.png"),
          pic_url5: require("@/assets/kumu-logo.png"),
          pic_url6: require("@/assets/kumu-logo.png"),
          modal: {
            exhibit: "Startup Exhibit",
            time: "2-4 PM",
            img1: require("@/assets/kumu-logo.png"),
            img2: require("@/assets/kumu-logo.png"),
            img3: require("@/assets/kumu-logo.png"),
            img4: require("@/assets/kumu-logo.png"),
            img5: require("@/assets/kumu-logo.png"),
            img6: require("@/assets/kumu-logo.png"),
            img7: require("@/assets/kumu-logo.png"),
            img8: require("@/assets/kumu-logo.png"),
            sched1: "Schedule",
            sched2: "Schedule",
            sched3: "Schedule",
            sched4: "Schedule",
            sched5: "Schedule",
            sched6: "Schedule",
            sched7: "Schedule",
            sched8: "Schedule",
            startup1: "Startup name",
            startup2: "Startup name",
            startup3: "Startup name",
            startup4: "Startup name",
            startup5: "Startup name",
            startup6: "Startup name",
            startup7: "Startup name",
            startup8: "Startup name"
          }
        }
      ]
    }
  },
  methods: {
    transferClickNum(value) {
      this.choice = value;
    },
    transferDate(value) {
      this.date = value;
    },
    exitModal(value) {
      this.show_talk_modal = value;
    },
    showTalkModal(value) {
      this.show_talk_modal = value;
    }
  },
  computed: {
    modal_date: function() {
      return this.date.replace(", 2020", "")
    }
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
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.page{
  background-color: #fcfcfc;
}
/*Universal styling*/
*{
  /* background-color: #fcfcfc; */
  margin: 0;
}

/*Modals*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.card_container .modal_container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5!important;
  margin: 0;
  overflow: auto;
}
.card_container .modal_container .talk_modal {
  transform: translateY(13.333vh);
}
.card_container .modal_container .panel_modal {
  transform: translateY(6vh);
}
.card_container .modal_container .exhibit_modal {
  transform: translateY(6vh);
}

/*Cards*/
.card_container .card1, .card_container .card3, .card_container .card5 {
  margin-left: auto;
  z-index: 1;
}
.card_container .card2, .card_container .card4, .card_container .card6 {
  margin-right: auto;
  z-index: 1;
}
.card_container .row1 {
  display: flex;
  flex-wrap: wrap;
  margin: 24px auto 0 auto;
}
.card_container .row2 {
  display: flex;
  flex-wrap: wrap;
  margin: 16px auto 0 auto;
}
.card_container .row3 {
  display: flex;
  flex-wrap: wrap;
  margin: 16px auto 80px auto;
}
.ellipse1 {
  position: absolute;
  width: 80px;
  left: 24px;
  top: 1850px;
  background-color: transparent;
  z-index: 0;
}
.ellipse2 {
  position: absolute;
  width: 200px;
  left: 6.805vw;
  top: 2150px;
  border-radius: 0px;
  background-color: transparent;
  z-index: 0;
}
.ellipse3 {
  position: absolute;
  left: 65.62vw;
  top: 2100px;
  background-color: transparent;
  z-index: 0;
}
.ellipse4 {
  position: absolute;
  width: 80px;
  right: 25px;
  top: 2550px;
  background-color: transparent;
  z-index: 0;
}
.ellipse5 {
  position: absolute;
  width: 80px;
  left: 20.833vw;
  top: 2800px;
  background-color: transparent;
  z-index: 0;
}
@media (max-height: 900px) {
  .card_container .modal_container .talk_modal {
    transform: translateY(10vh);
  }
}
@media (max-width: 1153px) {
  .ellipse1, .ellipse2, .ellipse3, .ellipse4, .ellipse5 {
    display: none;
  }
  .card_container .row1, .card_container .row2, .card_container .row3 {
    margin-top: 0;
  }
  .card_container .row1 .card1, .card_container .row1 .card2, .card_container .row2 .card3, .card_container .row2  .card4, .card_container .row3 .card5, .card_container .row3 .card6 {
    margin: 12px auto 12px auto;
  }
}
</style>