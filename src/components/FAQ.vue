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
              plat_clicked=false"><PrimaryBtn v-if="general_clicked">General</PrimaryBtn>
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
              plat_clicked=false"><PrimaryBtn v-if="reg_clicked">Registration</PrimaryBtn>
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
              plat_clicked=false"><PrimaryBtn v-if="part_clicked">Participants</PrimaryBtn>
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
              plat_clicked=false"><PrimaryBtn v-if="speakers_clicked">Speakers</PrimaryBtn>
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
              plat_clicked=true"><PrimaryBtn v-if="plat_clicked">Platform</PrimaryBtn>
              <SecondaryBtn v-if="plat_unclicked">Platform</SecondaryBtn></span>
            </div></center>
        </div></center>
        <center><p v-if="general_clicked">hi</p>
        <p v-if="reg_clicked">hello</p>
        <p v-if="part_clicked">hey</p>
        <p v-if="speakers_clicked">hihi</p>
        <p v-if="plat_clicked">hewwo</p></center>
    </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'
import SecondaryBtn from './SecondaryBtn.vue'

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
        plat_unclicked: true
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
    height: 100%;
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
    justify-content: center;
    padding-top: 19px;
}
</style>