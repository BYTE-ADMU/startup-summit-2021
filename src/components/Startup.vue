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
                <button class="primary" @click="modalShow = true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
<path d="M20 8.18V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3V8.18C17.4208 8.3902 16.9205 8.77363 16.5668 9.27816C16.2132 9.7827 16.0235 10.3839 16.0235 11C16.0235 11.6161 16.2132 12.2173 16.5668 12.7218C16.9205 13.2264 17.4208 13.6098 18 13.82V21C18 21.2652 18.1054 21.5196 18.2929 21.7071C18.4804 21.8946 18.7348 22 19 22C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V13.82C20.5792 13.6098 21.0795 13.2264 21.4332 12.7218C21.7868 12.2173 21.9765 11.6161 21.9765 11C21.9765 10.3839 21.7868 9.7827 21.4332 9.27816C21.0795 8.77363 20.5792 8.3902 20 8.18ZM19 12C18.8022 12 18.6089 11.9414 18.4444 11.8315C18.28 11.7216 18.1518 11.5654 18.0761 11.3827C18.0004 11.2 17.9806 10.9989 18.0192 10.8049C18.0578 10.6109 18.153 10.4327 18.2929 10.2929C18.4327 10.153 18.6109 10.0578 18.8049 10.0192C18.9989 9.98063 19.2 10.0004 19.3827 10.0761C19.5654 10.1518 19.7216 10.28 19.8315 10.4444C19.9414 10.6089 20 10.8022 20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12ZM13 14.18V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V14.18C10.4208 14.3902 9.92046 14.7736 9.56684 15.2782C9.21322 15.7827 9.02352 16.3839 9.02352 17C9.02352 17.6161 9.21322 18.2173 9.56684 18.7218C9.92046 19.2264 10.4208 19.6098 11 19.82V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19.82C13.5792 19.6098 14.0795 19.2264 14.4332 18.7218C14.7868 18.2173 14.9765 17.6161 14.9765 17C14.9765 16.3839 14.7868 15.7827 14.4332 15.2782C14.0795 14.7736 13.5792 14.3902 13 14.18ZM12 18C11.8022 18 11.6089 17.9414 11.4444 17.8315C11.28 17.7216 11.1518 17.5654 11.0761 17.3827C11.0004 17.2 10.9806 16.9989 11.0192 16.8049C11.0578 16.6109 11.153 16.4327 11.2929 16.2929C11.4327 16.153 11.6109 16.0578 11.8049 16.0192C11.9989 15.9806 12.2 16.0004 12.3827 16.0761C12.5654 16.1518 12.7216 16.28 12.8315 16.4444C12.9413 16.6089 13 16.8022 13 17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18ZM6 6.18V3C6 2.73478 5.89464 2.48043 5.7071 2.29289C5.51957 2.10536 5.26521 2 5 2C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V6.18C3.42085 6.3902 2.92046 6.77363 2.56684 7.27817C2.21322 7.7827 2.02352 8.38388 2.02352 9C2.02352 9.61612 2.21322 10.2173 2.56684 10.7218C2.92046 11.2264 3.42085 11.6098 4 11.82V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22C5.26521 22 5.51957 21.8946 5.7071 21.7071C5.89464 21.5196 6 21.2652 6 21V11.82C6.57915 11.6098 7.07954 11.2264 7.43316 10.7218C7.78678 10.2173 7.97647 9.61612 7.97647 9C7.97647 8.38388 7.78678 7.7827 7.43316 7.27817C7.07954 6.77363 6.57915 6.3902 6 6.18ZM5 10C4.80222 10 4.60888 9.94135 4.44443 9.83147C4.27998 9.72159 4.15181 9.56541 4.07612 9.38268C4.00043 9.19996 3.98063 8.99889 4.01921 8.80491C4.0578 8.61093 4.15304 8.43275 4.29289 8.29289C4.43274 8.15304 4.61093 8.0578 4.80491 8.01921C4.99889 7.98063 5.19996 8.00043 5.38268 8.07612C5.56541 8.15181 5.72159 8.27998 5.83147 8.44443C5.94135 8.60888 6 8.80222 6 9C6 9.26522 5.89464 9.51957 5.7071 9.70711C5.51957 9.89464 5.26521 10 5 10Z"/>
</svg>Filter</button>
            </div>
            <div id="filter-modal" class="modal" v-if="modalShow">
                <div class="modal-content">
                    <div class="first-modal">
                        <p class="modal-header">Opportunities Available</p>
                    </div>
                    <div class="second-modal">
                        <p class="modal-header">Industry</p>
                        <div class="industry-wrapper">
                            <div class="industry">
                                <label class="container">
                                    <input type="checkbox">
                                    <span class="checkmark"></span>E-commerce
                                </label>
                            </div>
                        </div>
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
export default {
    name: 'Start-Up',
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
    background-color: #f8f8f8;
    transform: translate(0%,35%);
}
.primary{
    margin-top: 32px!important;
}
.primary svg{
    width: 16px;
    height: 16px;
    padding-right: 8px!important;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    padding: 0px!important;
    fill: black;
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
.container{
    display: block;
  position: relative;
  padding-right: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-top: 1px;
  padding-bottom: 1px;
}
.industry-wrapper{
    padding-top: 12px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 466px;
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