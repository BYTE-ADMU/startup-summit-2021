<template>
<div id="app">
    <div class="page-container">
        <div data-aos="fade-right">
        <center><div class="first-container" @click="focused=false">
            <div class="big-img-wrapper">
                <center><div class="vid"><video controls><source src="../assets/videos/What_Are_Startups_[FINAL].mp4" type="video/mp4"></video></div></center>
                <div class="circle-design"><img id="big-circle" src="@/assets/circledesign.png"><img id="small-circle1" src="@/assets/circledesign.png"><img id="small-circle2" src="@/assets/circledesign.png">
                <img id="weird-circle" src="@/assets/weirdcircle.png"></div>
            </div>
            </div>
        </center></div>
        <div data-aos="fade-right">
        <center><div class="second-container">
            <div class="text-wrapper">
                <p id="header">Exhibitorsʼ showcase</p>
                <div class="search-wrapper" :style="focusedStyle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F46E26" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input @click="focused=true" type="text" v-model="search" placeholder="Looking for anything specific? (Startups, jobs)" class="search-txt" />
                    <input type="text" v-model="search" placeholder="Looking for anything specific?" class="search-txt2" />
                </div>
                <span class="primary" @click="focused=false"><PrimaryBtn @click="modalShow = true"><Filter id="primary-svg"/>Filter</PrimaryBtn></span>
            </div>
            <div id="filter-modal" class="modal" v-if="modalShow">
                <div class="modal-content">
                    <div class="first-modal">
                        <p class="modal-header">Opportunities Available</p>
                        <svg @click="modalShow = false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div class="second-modal">
                        <p class="modal-header">Industry</p>
                        <div class="industry-wrapper">
                        <div class="industry2 first-i">
                            <div class="industry">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">E-commerce</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">EdTech</div>
                                </div>
                            </div>
                        </div>
                        <div class="industry2 second-i">
                            <div class="industry">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Energy</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Entertainment</div>
                                </div>
                            </div>
                        </div>
                        <div class="industry2 third-i">
                            <div class="industry">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">FinTech</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">FoodTech</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
        <div class="second-modal">
                        <p class="modal-header">Field of Work</p>
                        <div class="industry-wrapper">
                        <div class="industry2 first-i">
                            <div class="industry">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Design</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Development</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Engineering</div>
                                </div>
                            </div>
                        </div>
                        <div class="industry2 second-i">
                            <div class="industry">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Finance</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Human Resources</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Management</div>
                                </div>
                            </div>
                        </div>
                       <div class="industry2 third-i">
                            <div class="industry">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Marketing</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Retail</div>
                                </div>
                            </div>
                            <div class="industry second-row">
                                <div class="checkbox-container">
                                <label class="checkbox-label">
                                    <input type="checkbox">
                                    <span class="checkbox-custom"></span>
                                </label>
                                <div class="input-title">Sales</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="fourth-modal">
                        <PrimaryBtn disabled>Save Filters</PrimaryBtn>
                    </div>
                </div>
            </div>
            <div class="startups-wrapper" @click="focused=false">
            <div class="startup-card" v-for="startup in filteredList" :key="startup">
                <div class="cover">
                    <img :alt="startup.coverAlt" :src="startup.cover">
                </div>
                <div class="icon">
                    <img :alt="startup.iconAlt" :src="startup.icon">
                </div>
                <div class="startup-content">
                    <p class="startup-name">{{startup.name}}</p>
                    <p class="startup-industry">{{startup.industry}}</p>
                    <p v-if="startup.opportunity" v-bind:style="{visibility: visible}" class="opportunities">OPPORTUNITIES AVAILABLE!</p>
                </div>
            </div>
            </div>
    </div></center></div>
    </div>
</div>
</template>

<script>
import PrimaryBtn from '../components/PrimaryBtn.vue'
import Filter from '../components/Filter.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: 'Start-Up',
    components:{
        PrimaryBtn,
        Filter
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
    data() {
  return {
    startupList: [
      {name: 'Kumu', industry: 'Entertainment', icon: require('../assets/icons/kumu.png'), iconAlt: 'Kumu logo', cover: require('../assets/covers/kumu.png'), coverAlt: 'Kumu cover', opportunity: true},
      {name: 'NextPay', industry: 'FinTech', icon: require('../assets/icons/nextpay.png'), iconAlt: 'NextPay logo', cover: require('../assets/covers/nextpay.png'), coverAlt: 'Nextpay cover', opportunity: false},
      {name: 'Edukasyon.ph', industry: 'EduTech', icon: require('../assets/icons/edukasyon.png'), iconAlt: 'Edukasyon.ph logo', cover: require('../assets/covers/edukasyon.png'), coverAlt: 'Edukasyon.ph cover', opportunity: true},
      {name: 'Edukasyon.ph', industry: 'EduTech', icon: require('../assets/icons/edukasyon.png'), iconAlt: 'Edukasyon.ph logo', cover: require('../assets/covers/edukasyon.png'), coverAlt: 'Edukasyon.ph cover', opportunity: false}
    ],
    search: '',
    modalShow: false,
    focused: false
  }
},
    computed: {
      filteredList: function(){
        return this.startupList.filter((startup) => {
            return startup.name.toLowerCase().startsWith(this.search.toLowerCase()) || startup.industry.toLowerCase().startsWith(this.search.toLowerCase())
        })
      },
      focusedStyle() {
    if (this.focused == true) {
       return {
           border: "1px solid #F46E26"
       };
    }
    if (this.focused == false) {
        return {
           border: "none"
       };
    }
    else {
      return '';
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
    /* background-color: #fcfcfc; */
    margin: 0px!important;
}
.page-container{
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 80px 0px 200px 0px!important;
    overflow-x: hidden;
}
.first-container{
    padding-top: 5%;
}
.vid video{
    position: relative;
    z-index: 1!important;
    background-color: #C4C4C4;
    width: 906px;
    height: 510px;
}
.circle-design img{
    position: relative;
    z-index: 0!important;
}
#big-circle{
    width: 320px;
    height: 320px;
    transform: translate(165%,-145%);
}
#small-circle1{
    width: 120px;
    height: 120px;
    transform: translate(125%,-235%);
}
#small-circle2{
    width: 120px;
    height: 120px;
    transform: translate(-560%,-550%);
}
#weird-circle{
    display: none;
    width: 473.05px;
height: 472.56px;
}
.text-wrapper #header{
    font-size: 28px;
    line-height: 40px;
    font-family: "Objectivity-ExtraBold";
    color: #000000;
}
.search-wrapper{
    position: relative;
    width: 624px;
    /* height: 56px; */
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    background-color: #f8f8f8;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 35px!important;
    border-radius: 4px;
}
.search-wrapper input{
    border-radius: 4px;
}
.search-txt::-webkit-input-placeholder{
    color: #A3A3A3;
}
.search-txt{
    font-size: 16px!important;
    line-height: 26px!important;
    font-family: "Inter-Regular";
    border: none!important;
    width: 100%;
    color: #2c2c2c;
    vertical-align: middle;
    background-color: #f8f8f8;
    margin-left: 20px!important;
}
.search-txt2{
    display: none;
}
.search-txt:focus {
    outline: none;
}
.search-wrapper svg{
    width: 32px;
    height: 32px;
    margin-left: 12px!important;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    padding: 0px!important;
    transform: translate(0%,35%);
    background-color: #f8f8f8;
}
.primary button{
    font-size: 16px;
    line-height: 26px;
    margin-top: 32px!important;
}
#primary-svg{
    width: 16px;
    height: 16px;
    padding-right: 8px!important;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    padding: 0px!important;
    transform: translate(0px, 2px);
    margin-right: 8px!important;
    background-color: transparent;
}
.startups-wrapper{
    max-width: 1176px;
    /* height: 288px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 30px;
}
.startup-card{
    width: 368px;
    /* height: 100%; */
    height: 300px;
    background-color: #F8F8F8;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border-radius: 3px;
    margin-top: 40px!important;
    margin-left: 12px!important;
    margin-right: 12px!important;
}
.startup-card p{
    background-color: #F8F8F8;
}
.startup-card .cover{
    height: 88px;
}
.cover img{
    height: 100%;
    width: 100%;
    border-radius: 3px 3px 0px 0px;
}
.icon{
    width: 112px;
    height: 112px;
    background-color: #F8F8F8;
}
.icon img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    transform: translate(0px,-65px);

}
.startup-content{
    transform: translate(0px,-44px);
    background-color: #F8F8F8;
}
.startup-name{
    font-size: 24px;
    line-height: 25px;
    color: #000;
    font-family: "Objectivity-ExtraBold";
}
.startup-industry{
    font-size: 16px;
    line-height: 26px;
    color: #000;
    font-family: "Inter-Regular";
    padding-top: 8px;
}
.opportunities{
    color: #F8F8F8;
    background: linear-gradient(93.62deg, #F2B430 0%, #F46E26 99.35%);
    border-radius: 4px;
    padding: 8px;
    letter-spacing: 1.5px;
    font-size: 10px;
    line-height: 16px;
    font-family: "Inter-Bold";
    width: fit-content;
    margin-top: 8px!important;
}
.modal{
    position: fixed;
    z-index: 2!important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 7%;
}
.modal-content {
  background-color: #F8F8F8!important;
  width: 537px;
  padding: 32px;
  display: flex;
  flex-direction: column;
}
.modal-content p{
background-color: #F8F8F8;
}
.modal-header{
    font-size: 16px;
line-height: 26px;
    color: #2C2C2C;
    font-family: 'Inter-Bold';
}
.first-modal{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #F8F8F8;
    padding-right: 16px;
}
.first-modal svg{
    transform: translate(345px,-16px);
  background-color: #F8F8F8!important;
}
.industry-wrapper{
    padding-top: 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    background-color: #f8f8f8;
}
.second-modal{
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    padding-top: 32px;
}
.industry{
    font-family: 'Inter-Regular';
    color: #2C2C2C;
    background-color: #F8F8F8;
    clear: both;
}
.industry2{
    display: flex;
    flex-direction: column;
}
.second-row{
    padding-top: 16px;
}
.fourth-modal{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: #F8F8F8;
    padding-top: 32px;
}
.industry::after{
    clear: both;
    display: block;
    content: "";
}
.checkbox-container {
    box-sizing: border-box;
    background-color: #F8F8F8;
}
.input-title {
    clear: both;
    font-size: 16px;
    background-color: #F8F8F8;
    color: #2C2C2C;
    display: inline-block;
    transform: translate(0%,-20%);
    margin-left: 20px!important;
}
.checkbox-label {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 24px;
    width: 24px;
    clear: both;
}
.checkbox-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
.checkbox-label .checkbox-custom {
    position: absolute;
    height: 24px;
    width: 24px;
    background-color: transparent;
    border: 2px solid #f3b33c;
}
.checkbox-label input:checked ~ .checkbox-custom {
    background-color: #f3b33c;
    -webkit-transform: rotate(0deg) scale(1);
    -ms-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
    opacity:1;
    border: 2px solid #f3b33c;
}
.checkbox-label .checkbox-custom::after {
    position: absolute;
    content: "";
    border: solid #f3b33c;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(0deg) scale(0);
    -ms-transform: rotate(0deg) scale(0);
    transform: rotate(0deg) scale(0);
    opacity:1;
}
.checkbox-label input:checked ~ .checkbox-custom::after {
  -webkit-transform: rotate(45deg) scale(1);
  -ms-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
  opacity:1;
  left: 8px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  background-color: transparent;
  border-radius: 0;
}
@media screen and (min-width: 1024px){
    .big-img-wrapper{
        height: 100vh;
    }
}
@media screen and (max-width: 1194px){
    .startups-wrapper{
        max-width: 784px;
    }
}
@media screen and (max-width: 1024px){
.vid video{
width: 688px;
height: 384px;
}
.startup-card{
    height: 290px;
}
#small-circle2{
    transform: translate(-485%,-465%);
}
#big-circle{
    transform: translate(160%,-115%);
}
#small-circle1{
    transform: translate(45%,-235%);
}
}
@media screen and (max-width: 1023px){
    .second-container{
        margin-top: -208px!important;
    }
}
@media screen and (max-width: 823px){
    .startup-card{
        width: 320px;
        height: 280px;
    }
.startups-wrapper{
    max-width: 688px;
}
}
@media screen and (max-width: 740px){
    .page-container{
        height:100vh;
    }
.first-container{
    padding-top: 112px;
}
.text-wrapper #header{
    font-size: 20px;
line-height: 32px;
}
.search-wrapper{
    width: 288px;
height: 48px;
    margin-top: 8px!important;
}
.search-wrapper svg{
    width: 16px;
    height: 16px;
    padding: 0px 8px!important;
    padding-top: 8px!important;
    margin-left: 0px!important;
}
.search-txt{
    display: none;
}
.search-txt2{
    display: inline-block;
    font-size: 12px!important;
    line-height: 16px!important;
    font-family: "Inter-Light";
    border: none!important;
    width: 100%;
    vertical-align: middle;
    background-color: #f8f8f8;
    margin-left: 0px!important;
}
.primary{
    display: none;
}
.startups-wrapper{
    padding-top: 0px;
    max-width: 312px;
}
.startup-card{
    width: 288px;
}
    #small-circle2{
    display: none;
}
#big-circle{
    display: none;
}
#small-circle1{
    display: none;
}
#weird-circle{
    transform: translate(-29.5%,-128%);
    display: block;
}
.first-container{
    padding-top: 112px;
}
.vid video{
    width: 288px;
height: 162px;
}
.second-container{
    margin-top: -400px!important;
}
}
@media screen and (max-width: 330px){
    .search-wrapper{
    width: auto;
    margin-left: 16px!important;
    margin-right: 16px!important;
    }
    .startups-wrapper{
            margin-left: 4px!important;
    margin-right: 4px!important;
    }
}
</style>