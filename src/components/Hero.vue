<template>
    <div class="hero">
    <div class="page-container">
        <div data-aos="fade-right">
        <div class="img-wrapper">
            <img src="@/assets/heroimg.png">
        </div></div>
        <div data-aos="fade-left">
        <div class="first-container">
            <div class="logo-wrapper">
                <img alt="Startup Summit Logo" src="@/assets/suslogo.png">
            </div>
            <div class="text-wrapper">
                <p id="text">Stepping up for the Future</p>
                <p id="date">April 16-18, 2021</p>
            </div>
            <div class="btn-wrapper">
                <span id="primary-btn"><PrimaryBtn>Register Now</PrimaryBtn></span><span id="secondary-btn"><SecondaryBtn>View Schedule</SecondaryBtn></span>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: 'Hero',
    components:{
    PrimaryBtn,
    SecondaryBtn
    },
    created(){
        AOS.init()
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
*{
    background-color:#fcfcfc;
    margin: 0px!important;
}
.page-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    margin: 0px!important;
}
.img-wrapper{
    width: 954px;
    height: 953px;
    transform: translate(-30%,-8%);
}
.img-wrapper img{
    width: 100%;
    height: 100%;
}
.first-container{
    display: flex;
    flex-direction: column;
    z-index: 0;
    transform: translate(-35%,26%);
    height: fit-content;
}
.logo-wrapper{
    width: 448px;
    height: 113.65px;
}
.logo-wrapper img{
    width: 100%;
    height: 100%;
}
.text-wrapper{
    padding-top: 32px;
    display: flex;
    flex-direction: column;
}
.text-wrapper #text{
    font-family: "Objectivity-ExtraBold";
    color: #2c2c2c;
    font-size: 28px;
    line-height: 40px;
}
.text-wrapper #date{
    font-family: "Inter-SemiBold";
    color: #A3A3A3;
    padding-top: 8px;
    font-size: 16px;
    line-height: 26px;
}
.btn-wrapper{
    padding-top: 32px;
}
.btn-wrapper #primary-btn{
    font-size: 16px;
    line-height: 26px;
}
.messenger-btn{
    transform: translate(105%,160%);
}
.messenger-btn button{
    background-color: #ffffff;
    border: 0px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
}
.mssngr-icon{
    width: 48px;
    height: 48px;
}
.mssngr-icon img{
    width: 100%;
    height: 100%;
}
#secondary-btn{
    margin-left: 24px!important;
}
@media screen and (max-width: 1920px){
.first-container{
    transform: translate(-60%,76%);
}
}
@media screen and (max-width: 1505px){
.first-container{
    transform: translate(-35%,76%);
}
}
@media screen and (max-width: 1440px){
.img-wrapper{
    width: 954px;
    height: 953px;
    transform: translate(-30%,-8%);
}
}
@media screen and (max-width: 1250px){
.img-wrapper{
    width: 954px;
    height: 953px;
    transform: translate(-40%,-8%);
}
.first-container{
    transform: translate(-60%,76%);
}
}
@media screen and (max-width: 1180px){
.img-wrapper{
    width: 954px;
    height: 953px;
    transform: translate(-50%,-8%);
}
.first-container{
    transform: translate(-90%,76%);
}
}
@media screen and (max-width: 1024px){
.page-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
}
.img-wrapper{
    width: 825.64px;
    height: 824.78px;
    transform: translate(-27%,-20%);
}
.img-wrapper img{
    width: 100%;
    height: 100%;
    transform: rotate(80deg);
}
.first-container{
    transform: translate(47%,-73%);
}
.messenger-btn{
    transform: translate(0%,0%);
    visibility: hidden;
}
.messenger-btn button{
    width: 0px!important;
    height: 0px!important;
    visibility: hidden;
}
}
@media screen and (max-width: 950px){
    .first-container{
        transform: translate(40%,-73%);
    } 
}
@media screen and (max-width: 900px){
    .first-container{
        transform: translate(40%,-73%);
    }
}
@media screen and (max-width: 768px){
.img-wrapper{
    transform: translate(-30%,-20%);
}
.img-wrapper img{
    width: 100%;
    height: 100%;
    transform: rotate(80deg);
}
.first-container{
    transform: translate(38%,-73%);
}
.messenger-btn{
    transform: translate(0%,0%);
    visibility: hidden;
}
.messenger-btn button{
    width: 0px!important;
    height: 0px!important;
    visibility: hidden;
}
}
@media screen and (max-width: 736px){
.first-container{
    transform: translate(37%,-73%);
}
}
@media screen and (max-width: 713px){
.img-wrapper{
    transform: translate(-34%,-20%);
}
.first-container{
    transform: translate(34%,-73%);
}
}
@media screen and (max-width: 667px){
.img-wrapper{
    transform: translate(-40%,-20%);
}
.first-container{
    transform: translate(27%,-73%);
}
}
@media screen and (max-width: 653px){
.img-wrapper{
    transform: translate(-28%,-45%);
}
.img-wrapper img{
    transform: rotate(87deg);
}
.first-container{
    transform: translate(6%,-75%);
}
.btn-wrapper{
    width: 151px;
    display: flex;
    flex-direction: column;
}
.btn-wrapper #primary-btn button{
    font-size: 14px;
    line-height: 22px;
    padding: 8px 29.5px;
}
.btn-wrapper #secondary-btn button{
    font-size: 14px;
    line-height: 22px;
}
#secondary-btn{
    margin-left: 0px!important;
    margin-top: 16px!important;
}
}
@media screen and (max-width: 540px){
.img-wrapper{
    transform: translate(-31%,-45%);
}
}
@media screen and (max-width: 480px){
.first-container{
    transform: translate(4%,-75%);
}
}
@media screen and (max-width: 470px){
.logo-wrapper img{
    width: 80%;
    height: 80%;
}
}
@media screen and (max-width: 440px){
.img-wrapper{
    width: 473.05px;
    height: 472.56px;
    transform: translate(-27%,-44%);
}
.logo-wrapper{
    width: 217px;
    height: 55.05px;
}
.text-wrapper{
    padding-top: 16px;
}
.text-wrapper #text{
    font-family: "Objectivity-ExtraBold";
    color: #2c2c2c;
    font-size: 16px;
    line-height: 17px;
}
.text-wrapper #date{
    font-family: "Inter-SemiBold";
    color: #A3A3A3;
    padding-top: 16px;
    font-size: 14px;
    line-height: 22px;
}
.first-container{
    transform: translate(6%,-58%);
}
.btn-wrapper{
    width: 151px;
    display: flex;
    flex-direction: column;
}
.btn-wrapper #primary-btn{
    font-size: 14px;
    line-height: 22px;
} 
}
@media screen and (max-width: 320px){
.img-wrapper{
    transform: translate(-30%,-44%);
}
}
</style>