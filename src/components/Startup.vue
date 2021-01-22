<template>
    <div class="page-container">
        <center><div class="first-container">
            <div class="big-img-wrapper">
                <center><div class="vid"><video autoplay><source src="#" type="video/mp4"></video></div></center>
                <div class="circle-design"><img id="big-circle" src="@/assets/circledesign.png"><img id="small-circle1" src="@/assets/circledesign.png"><img id="small-circle2" src="@/assets/circledesign.png">
                <img id="weird-circle" src="@/assets/weirdcircle.png"></div>
            </div>
            </div>
        </center>
        <center><div class="second-container">
            <div class="text-wrapper">
                <p id="header">Exhibitorsʼ showcase</p>
                <div class="search-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F46E26" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" v-model="search" placeholder="Looking for anything specific? (Startups, jobs)" class="search-txt" />
                    <input type="text" v-model="search" placeholder="Looking for anything specific?" class="search-txt2" />
                </div>
                <span class="primary"><PrimaryBtn @click="modalShow = true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
<path d="M12.1706 5.9235L12.5 5.80394V5.4535V2.00016C12.5 1.95596 12.5176 1.91357 12.5488 1.88231C12.5801 1.85106 12.6225 1.8335 12.6667 1.8335C12.7109 1.8335 12.7533 1.85106 12.7845 1.88231C12.8158 1.91357 12.8333 1.95596 12.8333 2.00016V5.4535H13.3333L13.1627 5.9235C13.4523 6.0286 13.7025 6.22031 13.8793 6.47258C14.0561 6.72485 14.151 7.02544 14.151 7.3335C14.151 7.64156 14.0561 7.94215 13.8793 8.19441C13.7025 8.44668 13.4523 8.63839 13.1627 8.7435L12.8333 8.86306V9.2135V14.0002C12.8333 14.0444 12.8158 14.0868 12.7845 14.118C12.7533 14.1493 12.7109 14.1668 12.6667 14.1668C12.6225 14.1668 12.5801 14.1493 12.5488 14.118C12.5176 14.0868 12.5 14.0444 12.5 14.0002V9.2135V8.86306L12.1706 8.7435C11.881 8.63839 11.6308 8.44668 11.454 8.19441C11.2772 7.94215 11.1823 7.64156 11.1823 7.3335C11.1823 7.02544 11.2772 6.72485 11.454 6.47258C11.6308 6.22031 11.881 6.0286 12.1706 5.9235ZM8.16667 9.4535V9.80394L8.49608 9.9235C8.78565 10.0286 9.03585 10.2203 9.21266 10.4726C9.38947 10.7248 9.48432 11.0254 9.48432 11.3335C9.48432 11.6416 9.38947 11.9421 9.21266 12.1944C9.03585 12.4467 8.78565 12.6384 8.49608 12.7435L8.16667 12.8631V13.2135V14.0002C8.16667 14.0444 8.14911 14.0868 8.11785 14.118C8.08659 14.1493 8.0442 14.1668 8 14.1668C7.9558 14.1668 7.9134 14.1493 7.88215 14.118C7.85089 14.0868 7.83333 14.0444 7.83333 14.0002V13.2135V12.8631L7.50392 12.7435C7.21434 12.6384 6.96415 12.4467 6.78734 12.1944C6.61053 11.9421 6.51568 11.6416 6.51568 11.3335C6.51568 11.0254 6.61053 10.7248 6.78734 10.4726C6.96415 10.2203 7.21434 10.0286 7.50392 9.9235L7.83333 9.80394V9.4535V2.00016C7.83333 1.95596 7.85089 1.91357 7.88215 1.88231C7.9134 1.85106 7.9558 1.8335 8 1.8335C8.0442 1.8335 8.08659 1.85106 8.11785 1.88231C8.14911 1.91357 8.16667 1.95596 8.16667 2.00016V9.4535ZM2.83725 4.59016L3.16667 4.4706V4.12016V2.00016C3.16667 1.95596 3.18422 1.91357 3.21548 1.88231C3.24674 1.85106 3.28913 1.8335 3.33333 1.8335C3.37753 1.8335 3.41993 1.85106 3.45118 1.88231C3.48244 1.91357 3.5 1.95596 3.5 2.00016V4.12016H4L3.82941 4.59016C4.11899 4.69526 4.36918 4.88698 4.54599 5.13925C4.7228 5.39151 4.81765 5.6921 4.81765 6.00016C4.81765 6.30822 4.7228 6.60881 4.54599 6.86108C4.36918 7.11335 4.11899 7.30506 3.82941 7.41016L3.5 7.52972V7.88016V14.0002C3.5 14.0444 3.48244 14.0868 3.45118 14.118C3.41993 14.1493 3.37754 14.1668 3.33333 14.1668C3.28913 14.1668 3.24674 14.1493 3.21548 14.118C3.18423 14.0868 3.16667 14.0444 3.16667 14.0002V7.88016V7.52972L2.83725 7.41016C2.54768 7.30506 2.29748 7.11335 2.12067 6.86108C1.94386 6.60881 1.84901 6.30822 1.84901 6.00016C1.84901 5.6921 1.94386 5.39151 2.12067 5.13925C2.29748 4.88698 2.54768 4.69526 2.83725 4.59016ZM12.0185 8.30354C12.2104 8.43174 12.4359 8.50016 12.6667 8.50016C12.9761 8.50016 13.2728 8.37725 13.4916 8.15845C13.7104 7.93966 13.8333 7.64291 13.8333 7.3335C13.8333 7.10275 13.7649 6.87719 13.6367 6.68533C13.5085 6.49347 13.3263 6.34394 13.1131 6.25564C12.8999 6.16733 12.6654 6.14423 12.4391 6.18925C12.2127 6.23426 12.0049 6.34538 11.8417 6.50854C11.6785 6.6717 11.5674 6.87958 11.5224 7.10589C11.4774 7.3322 11.5005 7.56678 11.5888 7.77996C11.6771 7.99314 11.8266 8.17535 12.0185 8.30354ZM7.35183 12.3035C7.54369 12.4317 7.76926 12.5002 8 12.5002C8.30942 12.5002 8.60616 12.3772 8.82496 12.1585C9.04375 11.9397 9.16667 11.6429 9.16667 11.3335C9.16667 11.1028 9.09824 10.8772 8.97005 10.6853C8.84185 10.4935 8.65964 10.3439 8.44646 10.2556C8.23328 10.1673 7.9987 10.1442 7.77239 10.1892C7.54608 10.2343 7.3382 10.3454 7.17504 10.5085C7.01188 10.6717 6.90077 10.8796 6.85575 11.1059C6.81073 11.3322 6.83384 11.5668 6.92214 11.78C7.01044 11.9931 7.15997 12.1753 7.35183 12.3035ZM2.68517 6.97021C2.87702 7.09841 3.10259 7.16683 3.33333 7.16683C3.64275 7.16683 3.9395 7.04391 4.15829 6.82512C4.37708 6.60633 4.5 6.30958 4.5 6.00016C4.5 5.76942 4.43158 5.54385 4.30338 5.352C4.17518 5.16014 3.99298 5.01061 3.7798 4.9223C3.56662 4.834 3.33204 4.8109 3.10573 4.85591C2.87942 4.90093 2.67154 5.01204 2.50837 5.1752C2.34521 5.33837 2.2341 5.54625 2.18908 5.77256C2.14407 5.99887 2.16717 6.23345 2.25547 6.44663C2.34378 6.65981 2.49331 6.84202 2.68517 6.97021Z" fill="black" stroke="#F8F8F8"/>
</svg>Filter</PrimaryBtn></span>
            </div>
            <div id="filter-modal" class="modal" v-if="modalShow">
                <div class="modal-content">
                    <div class="first-modal">
                        <p class="modal-header">Opportunities Available</p>
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
                        <button>Save Filters</button>
                    </div>
                </div>
            </div>
            <div class="startups-wrapper">
            <div class="startup-card" v-for="startup in filteredList" :key="startup">
                <div class="cover">
                    <img :src="startup.cover">
                </div>
                <div class="icon">
                    <img :src="startup.icon">
                </div>
                <div class="startup-content">
                    <p class="startup-name">{{startup.name}}</p>
                    <p class="startup-industry">{{startup.industry}}</p>
                    <p v-if="startup.opportunity" v-bind:style="{visibility: visible}" class="opportunities">OPPORTUNITIES AVAILABLE!</p>
                </div>
            </div>
            </div>
    </div></center>
    </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'
export default {
    name: 'Start-Up',
    components:{
        PrimaryBtn
    },
    data() {
  return {
    startupList: [
      {name: 'Kumu', industry: 'Entertainment', icon: require('../assets/icons/kumu.png'), cover: require('../assets/covers/kumu.png'), opportunity: true},
      {name: 'NextPay', industry: 'FinTech', icon: require('../assets/icons/nextpay.png'), cover: require('../assets/covers/nextpay.png'), opportunity: false},
      {name: 'Edukasyon.ph', industry: 'EduTech', icon: require('../assets/icons/edukasyon.png'), cover: require('../assets/covers/edukasyon.png'), opportunity: true},
      {name: 'Edukasyon.ph', industry: 'EduTech', icon: require('../assets/icons/edukasyon.png'), cover: require('../assets/covers/edukasyon.png'), opportunity: false}
    ],
    search: '',
    modalShow: false
  }
},
    computed: {
      filteredList: function(){
        return this.startupList.filter((startup) => {
            return startup.name.toLowerCase().includes(this.search.toLowerCase()) || startup.industry.toLowerCase().includes(this.search.toLowerCase())
        })
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
    width: 100vw;
    margin: 0px!important;
    overflow-x: hidden;
}
.first-container{
    height: 100vh;
    padding-top: 5%;
}
.big-img-wrapper{
    height: 100vh;
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
    height: 56px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    background-color: #f8f8f8;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 35px!important;
}
.search-txt::-webkit-input-placeholder{
    color: #A3A3A3;
}
.search-txt{
    font-size: 16px!important;
    line-height: 26px!important;
    font-family: "Inter-Light";
    border: none!important;
    width: 100%;
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
.primary svg{
    width: 16px;
    height: 16px;
    padding-right: 8px!important;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    padding: 0px!important;
    background-color:#F46E26;
    transform: translate(0px, 2px);
    margin-right: 8px!important;
}
.startups-wrapper{
    max-width: 1176px;
    height: 288px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-top: 30px;
}
.startup-card{
    width: 368px;
    height: 100%;
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
    padding-top: 10%;
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
.first-container{
    height: 100vh;
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
@media screen and (max-width: 823px){
    .startup-card{
        width: 320px;
    }
.startups-wrapper{
    max-width: 688px;
}
}
@media screen and (max-width: 740px){
.first-container{
    padding-top: 112px;
    height: 80vh;
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
}
@media screen and (max-width: 700px){
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
    height: 45vh;
}
.vid video{
    width: 288px;
height: 162px;
}
}
</style>