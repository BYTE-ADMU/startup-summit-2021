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
    :pic_url1=first_day[0].pic_url
    :pic_url2=first_day[1].pic_url
    :pic_url3=first_day[2].pic_url
    :pic_url4=first_day[3].pic_url
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
      :linkedin1=true
      :linked1=first_day[0].modal.linked1
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
      :linkedin1=true
      :linkedin2=true
      :website1=true
      :linked1=first_day[1].modal.linked1
      :linked2=first_day[1].modal.linked2
      :web1=first_day[1].modal.web1
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
      :linkedin1=true
      :facebook1=true
      :website1=true
      :linked1=first_day[2].modal.linked1
      :face1=first_day[2].modal.face1
      :web1=first_day[2].modal.web1
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
      :linkedin1=true
      :instagram1=true
      :linked1=first_day[3].modal.linked1
      :insta1=first_day[3].modal.insta1
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
    :pic_url1=second_day[0].pic_url
    :pic_url2=second_day[1].pic_url
    :pic_url3=second_day[2].pic_url
    :pic_url4=second_day[3].pic_url
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
      :linkedin1=true
      :facebook1=true
      :website1=true
      :website2=true
      :website3=true
      :linked1=second_day[0].modal.linked1
      :face1=second_day[0].modal.face1
      :web1=second_day[0].modal.web1
      :web2=second_day[0].modal.web2
      :web3=second_day[0].modal.web3
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
      :website1=true
      :web1=second_day[1].modal.web1
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
      :twitter1=true
      :twt1=second_day[2].modal.twt1
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
      :facebook1=true
      :face1=second_day[3].modal.face1
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
    :pic_url1=third_day[0].pic_url
    :pic_url2=third_day[1].pic_url
    :pic_url3=third_day[2].pic_url
    :pic_url4=third_day[3].pic_url
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
      :linkedin1=true
      :website1=true
      :website2=true
      :linked1=third_day[0].modal.linked1
      :web1=third_day[0].modal.web1
      :web2=third_day[1].modal.web2
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
      :linkedin1=true
      :linked1=third_day[1].modal.linked1
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
      :linkedin1=true
      :website1=true
      :web1=third_day[2].modal.web1
      :linked1=third_day[2].modal.linked1
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
      :linkedin1=true
      :linkedin2=true
      :facebook1=true
      :facebook2=true
      :instagram1=true
      :instagram2=true
      :twitter1=true
      :twitter2=true
      :website1=true
      :linked1=third_day[3].modal.linked1
      :linked2=third_day[3].modal.linked2
      :face1=third_day[3].modal.face1
      :face2=third_day[3].modal.face2
      :insta1=third_day[3].modal.insta1
      :insta2=third_day[3].modal.insta2
      :twit1=third_day[3].modal.twt1
      :twit2=third_day[3].modal.twt2
      :web1=third_day[3].modal.web1
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
      date: "April 16, 2021",

      //All card info for first day
      first_day: [
        {
          class: "card1",
          time: "1:00",
          talk: "1 Name of talk",
          description: "Talk description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Serban Mogos",
          pic_url: require('@/assets/speakers/SerbanMogos.jpeg'),
          modal: {
            time: "1-2pm",
            creds: "Co-founder and COO of Eyeware Tech",
            linked1: "https://www.linkedin.com/in/mogos/?originalSubdomain=ch",
            description: "Serban is the Co-founder & COO of Eyeware, a Swiss startup that develops eye tracking solutions for consumer applications. With a background in computer science, his startup experience involves strategy, fundraising, and product management. Serban also founded two NGOs in Romania for promoting entrepreneurship education and obtained a PhD in Strategy & Entrepreneurship from Carnegie Mellon University."
          }
        },
        { 
          class: "card2",
          time: "2:00",
          talk: "Bots and Brains",
          description: "No matter how high tech your bots are, you need to understand where the human aspect comes in.",
          speaker: "Gian dela Rama",
          pic_url: require('@/assets/speakers/GiandelaRama.jpeg'),
          modal: {
            time: "2-4pm",
            creds: "Co-founder and CEO of Aiah.Ai",
            linked1: "https://www.linkedin.com/in/giandlr/",
            linked2: "https://www.linkedin.com/company/aiah-automation/",
            web1: "https://aiah.ai/",
            description: "Gian dela Rama is a serial entrepreneur, co-founder, and CEO of Aiah.Ai - making automation accessible for companies large and small using fit for purpose bots that can be deployed in minutes.\n\nGian is also an active contributor in the Philippine startup community, regularly speaking on entrepreneurship, automation and AI as well as mentoring current and aspiring startup founders.\n\nBefore Aiah.Ai, Gian started several companies in the systems integration, digital media delivery and software development industries and worked in enterprise IT for global giants such as Hewlett-Packard and Unilever."
          }
        },
        { 
          class: "card3",
          time: "3:00",
          talk: "New Knowledge about the Brain and how it is Shaping Tech",
          description: "New knowledge about the nature of the brain in the last two decades has turned many things on its head. This talk attempts to highlight how this is impacting the tech world. In particular, it speaks about the journey of SynPhNe, the world’s first wearable technology that re-integrates brain and body after brain damage, childhood disability and the challenges of aging.",
          speaker: "Dr. Subhasis Banerji",
          pic_url: require('@/assets/speakers/SubhasisBanerji.png'),
          modal: {
            time: "5-6pm",
            creds: "Founder and Managing Director of SynPhNe",
            linked1: "https://www.linkedin.com/in/subhasisbanerji/",
            web1: "https://www.synphne.com",
            face1: "https://www.facebook.com/synphne.sg",
            description: "Dr. Subhasis Banerji is the Inventor and Founder of SynPhNe Pte. Ltd. in Singapore.  SynPhNe is the world's first wearable, connected, home-use health solution that trains brain and muscle in ONE system. It has helped those disabled by stroke, brain injury, childhood disorders and aging recover cognitive function and use of paralyzed limbs. With three decades of experience in creating engineering and software solutions, Dr. Banerji specializes in technologies for physio-neuro rehabilitation, digital neurological therapeutics, fitness, and health enhancement."
          }
        },
        { 
          class: "card4",
          time: "4:00",
          talk: "1 Name of talk",
          description: "Rama earned Master of Science from Management Information Technology of Strayer University, Washington DC in 2007 before returning back to Jakarta in the same year. He then worked as IT auditor and advisor in various companies such as PWC (Pricewaterhouse Coopers), Ernst & Young, and PT Geoteq Integrasi Semesta.",
          speaker: "Rama Raditya",
          pic_url: require('@/assets/speakers/RamaRaditya.jpg'),
          modal: {
            time: "5-6pm",
            creds: "Founder and CEO of Qlue",
            linked1: "https://www.linkedin.com/in/rama-raditya-2039ba39/",
            insta1: "https://www.instagram.com/ramaqlue/",
            description: "Raditya Maulana Rusdi, also known as Rama Raditya, is the Founder and CEO of Qlue, a Smart City Technology company which has a mission to accelerate positive changes worldwide. He initiates an invention connecting the Government and Citizens through technology innovation in smartphones.Rama earned Master of Science from Management Information Technology of Strayer University, Washington DC in 2007 before returning back to Jakarta in the same year. He then worked as IT auditor and advisor in various companies such as PWC (Pricewaterhouse Coopers), Ernst & Young, and PT Geoteq Integrasi Semesta.\n\nAfter staying in Jakarta for five years, he realized that some issues such as illegal parking, sanitation, violation, and others are never taken care of seriously. In 2014 he then came up with the idea of having a tool for the government to identify problems by empowering citizens to report issues. This idea led him to found Qlue with his Co-Founder, Andre Hutagalung. Both of them then started their mission by streamlining the problem handling process for government and private sectors, started from their hometown, Jakarta.\n\nThrough his innovation, Qlue managed to achieve National as well as International Acknowledgement and Awards including Google Playstore Nominated as Best Application in Indonesia, Grand Finalist Startup World Cup in South East Asia, Google Launchpad Accelerator Program, Sustainable Development Award 2017,  Best Mobility Project by The  World’s Smart Cities Organizations (WSCO), The Best m-Government Service Award by World Government Summit 2019. For Rama, those acknowledge become a motivation for him to develop more comprehensive innovation through AI, IoT, and Smart City Solutions."
          }
        },
        {
          class: "card5",
          time: "5:00",
          panel: "1 Name of panel",
          description: "1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...No matter how high tech your bots are, you need to understand where the human aspect comes in. 1 Talk description will be here Lorem Ipsum is simply dummy text of ",
          modal: {
            time: "7-8pm",
            description: "Panel description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
        },
        {
          class: "card6",
          time: "6:00",
          exhibit: "Startup Exhibitors' Showcase",
          description: "Learn more about the different startup partners we have as they showcase and present who they are, what they do, and how their startup got to where it is today!No matter how high tech your bots are, you need to understand where the human aspect comes in. 1 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          pic_url1: require("@/assets/startups/arpacorp/logo.png"),
          pic_url2: require("@/assets/startups/clink/logo1.png"),
          pic_url3: require("@/assets/startups/ideas/logo.png"),
          pic_url4: require("@/assets/startups/mosaic/logo.png"),
          pic_url5: require("@/assets/startups/qbo/icon.png"),
          pic_url6: require("@/assets/startups/startupvillage/icon.png"),
          modal: {
            exhibit: "Startup Exhibit",
            time: "1-6 PM",
            img1: require("@/assets/startups/arpacorp/logo.png"),
            img2: require("@/assets/startups/clink/logo1.png"),
            img3: require("@/assets/startups/ideas/logo.png"),
            img4: require("@/assets/startups/mosaic/logo.png"),
            img5: require("@/assets/startups/qbo/icon.png"),
            img6: require("@/assets/startups/startupvillage/icon.png"),
            img7: require("@/assets/startups/technoapp/logo.png"),
            img8: require("@/assets/startups/makeracademy/logo.png"),
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
          talk: "Inclusive Innovation: Upskilling Women for the Future of Work",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Gina Romero",
          pic_url: require('@/assets/speakers/GinaRomero.jpg'),
          modal: {
            time: "1-2pm",
            creds: "Co-founder and CEO of Connected Women",
            linked1: "https://www.linkedin.com/in/iamginaromero",
            web1: "https://www.connectedwomen.com/",
            web2: "https://www.connectedwomen.co/",
            web3: "https://www.ginaromero.com/",
            face1: "https://www.facebook.com/weareconnectedwomen",
            description: "A finalist awardee of the prestigious “Asia CEO Awards” in the Shero of the Year category, Gina is an unconventional entrepreneur, community builder, and technology advocate. As part of her mission to better equip women entrepreneurs and professionals with the technology skills to scale their businesses and careers, she launched Connected Women, a social impact tech startup that matches talented Filipino women with meaningful remote work opportunities."
          }
        },
        {
          class: "card2",
          time: "6:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Teresa Condicion",
          pic_url: require('@/assets/speakers/TeresaCondicion.jpg'),
          modal: {
            time: "3-4pm",
            creds: "Co-founder and CEO for Shoplinks Singapore",
            web1: "https://www.pageexecutive.com/asia-pacific/leading-women/a-journey-from-poverty-to-empowerment",
            description: "Teresa Condicion spent the last 20 years doing what she loves – building data capabilities and starting businesses and organisations across Asia, from her long tenure at P&G as head of ASEAN consumer and retail analytics to founding and building two data-driven tech startups. Teresa strongly advocates for bringing a broader economic impact towards even the smallest retailers out there, to have the capabilities of data and technology to compete in an increasingly digitised world."
          }
        },
        {
          class: "card3",
          time: "7:00",
          talk: "Tech for Social Impact",
          description: "How Notion leverages its people, product, and community for good. How Notion leverages its people, product, and community for good. How Notion leverages its people, product, and community for good. 2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Andy Rapista",
          pic_url: require('@/assets/speakers/AndyRapista.jpg'),
          modal: {
            time: "5-6pm",
            creds: "Program Manager of Notion",
            twt1: "https://twitter.com/andyrapista",
            description: "Andy is currently a Program Manager at Notion building Notion for Good - the corporate social justice program that is dedicated to inclusion, diversity, equity, and anti-racism (IDEA) and sustainability. Andy believes that we can create a more equitable world if we dedicate our time, energy, creativity, and talent towards eliminating barriers for people to thrive. She'd like to see a world where everyone is able to live with dignity and reach their fullest potential. Her hope is that her work is the highest expression of that belief."
          }
        },
        {
          class: "card4",
          time: "7:00",
          talk: "2 Name of talk",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Dr. Chari Cheng",
          pic_url: require('@/assets/speakers/DrChari.png'),
          modal: {
            time: "6-7pm",
            creds: "Co-founder and CRO of Senti AI",
            face1: "https://facebook.com/SentiPH",
            description: "Charibeth Cheng is Senti AI’s co-founder and Head of Research and an Associate Dean and Assistant Professor at De La Salle University, where she has received multiple awards as an outstanding teacher. Additionally, Chari is one of the pioneer researchers of the university’s Center for Language Technologies (DLSU-CELT). Having specialized in the area of Natural Language Processing and Machine Learning, she works with her students to develop computation models, tools, and electronic resources that help process, understand, and generate text written in local languages. She also received her Master’s Degree and Ph.D. in Computer Science and published numerous papers on AI, NLP, information systems, and related interdisciplinary venues. "
          }
        },
        {
          class: "card5",
          time: "8:00",
          panel: "2 Name of panel",
          description: "2 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
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
          speaker: "Rene “Butch” Meily",
          pic_url: require('@/assets/speakers/ReneMeily.jpg'),
          modal: {
            time: "1-2pm",
            creds: "President of IdeaSpace Foundation, QBO Innovation Hub, and Philippine Disaster Resilience Foundation",
            linked1: "https://www.linkedin.com/in/rene-butch-meily-7a87224/",
            web1: "https://drive.google.com/file/d/18YXNdu9zk4ejbYTYuSOx5ZoWn1bJWxe6/view?usp=sharing",
            web2: "https://www.philstar.com/lifestyle/business-life/2014/06/02/1329490/business-lessons-three-ceos",
            description: "Butch has made a massive impact on the local startup community through IdeaSpace Foundation, a technology accelerator for early-stage startups, and QBO Innovation Hub, a public-private partnership launched to mentor startups. Aside from carrying a presidential role in both of these organizations, Butch is also the President of the Philippine Disaster Resilience Foundation, a private sector disaster management organization that is dedicated to the sustainable development and general welfare of the Filipino people."
          }
        },
        {
          class: "card2",
          time: "10:00",
          talk: "Building a Fintech Company that is both Filipino and Global",
          description: "Mikko Perez, Founder & CEO of Ayannah will tell us about Ayannah's journey.  Why he started it and the roller coaster ride of starting a tech company in the Philippines and how Ayannah has grown from being a Filipino company to a global fintech company",
          speaker: "Miguel (Mikko) Perez",
          pic_url: require('@/assets/speakers/MikoPerez.jpg'),
          modal: {
            time: "3-4pm",
            creds: "Founder and CEO of Ayannah",
            linked1: "https://www.linkedin.com/in/mperez5/?originalSubdomain=ph",
            description: "Mikko is the Founder & CEO of Ayannah, an award-winning fintech start up providing affordable and accessible digital financial services to the world's emerging middle class. Prior to this, Mikko was part of the founding team of Chikka, a mobile instant messaging start up where he helped in expanding to China, India, Japan and the US prior to Chikka's acquisition by PLDT (NYSE: PHI).  He has also worked as a private equity investment manager in Singapore and an investment banker at JP Morgan in San Francisco.\n\nHaving begun his career as a community organizer helping build social enterprises in rural Philippines, Mikko remains actively involved in initiatives that support social entrepreneurship and sustainable development. Mikko holds a BSc in Management (with Honors) and a BA in Development Studies (with Honors & Award for Excellence) from the Ateneo de Manila University, and an MBA from the Harvard Business School."
          }
        },
        {
          class: "card3",
          time: "11:00",
          talk: "3 Name of talk",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
          speaker: "Ruel Amparo",
          pic_url: require('@/assets/speakers/RuelAmparo.jpg'),
          modal: {
            time: "5-6pm",
            creds: "Founder and CEO of Cropital",
            web1: "https://events.development.asia/author/ruel-amparo",
            linked1: "https://ph.linkedin.com/in/ruelamparo",
            description: "Ruel Amparo is the Chief Executive Officer and Founder of Cropital, the largest peer to peer lending platform for smallholder farmers in the Philippines. He is an industrial engineer who previously worked for different companies in the oil and gas industry and an active volunteer who has led several socio civic project initiatives in the past. Recognized for student leadership, data analytics, and community development, Ruel also graduated Cum Laude and was awarded with Garrick Yao Student Excellence Award for Service."
          }
        },
        {
          class: "card4",
          time: "11:00",
          talk: "Systems Change in Diversity and Inclusion",
          description: "Starting a business doesn’t just require wanting to help people and working in a silo. Solving a problem involves understanding the various underlying systems that surround the issue. ",
          speaker: "Ryan Gersava",
          pic_url: require('@/assets/speakers/RyanGersava.jpeg'),
          modal: {
            time: "5-6pm",
            creds: "Founder and President of Virtualahan",
            linked1: "https://www.linkedin.com/in/rdgersava/",
            linked2: "https://www.linkedin.com/company/virtualahan/",
            face1: "https://www.facebook.com/rdgersava",
            face2: "http://www.facebook.com/virtualahan",
            twt1: "https://twitter.com/ryangersava",
            twt2: "https://twitter.com/virtualahan",
            insta1: "https://www.instagram.com/ryangersava/",
            insta2: "https://www.instagram.com/virtualahan/",
            web1: "https://businessmirror.com.ph/2020/04/15/how-ryan-gersavas-virtualahan-sprang-to-life/",
            description: "Ryan is the Founder and President of Virtualahan, a social enterprise that is breaking down employment barriers for Persons with Disabilities and other disadvantaged groups using the equalizing power of technology. The company was founded after he experienced employment discrimination because of his chronic disease. Ryan is also an Ashoka Fellow and the first Filipino to ever receive the Inspired Leadership Awards. He is an emerging leader in the fields of innovative education, diversity and inclusion, impact sourcing, and the future of work. Coming from a humble background in Sultan Kudarat province, he is committed to creating a change through Virtualahan to get people out of poverty using systemic empathy and technology."
          }
        },
        {
          class: "card5",
          time: "12:00",
          panel: "3 Name of panel",
          description: "3 Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
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
          pic_url1: require("@/assets/startups/technoapp/logo.png"),
          pic_url2: require("@/assets/startups/makeracademy/logo.png"),
          pic_url3: require("@/assets/startups/pickaroo/logo.png"),
          pic_url4: require("@/assets/startups/xperto/logo2.png"),
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
      document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    },
    showTalkModal(value) {
      this.show_talk_modal = value;
      document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    }
  },
  computed: {
    modal_date: function() {
      return this.date.replace(", 2021", "")
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
  z-index: 1000!important;
  overflow-y: hidden;
}
.card_container .modal_container .talk_modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card_container .modal_container .panel_modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card_container .modal_container .exhibit_modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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