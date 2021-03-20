<template>
<div data-aos="fade-right">
    <div class="page-container">
        <div class="first-container">
            <div class="text-wrapper">
                <p id="header">Looking for opportunities to work in startups?</p>
                <p id="content">Startup Summit aims to provide students with access to several opportunities that would not only be a springboard for them to step up into various business functions, but also equip them with various knowledge and skills for their future. Start your journey into creating a positive impact in your community! Explore exciting and life-changing opportunities lined up for you in Startup Summit 2021!</p>
            </div>
            <div class="img-rows">
                <div class="img-row">
                    <img alt="Featured Startup logo" src="@/assets/startups/arpacorp/logo.png">
                    <img alt="Featured Startup logo" src="@/assets/startups/clink/logo1.png">
                    <img alt="Featured Startup logo" src="@/assets/startups/ideas/logo.png">
                    <img alt="Featured Startup logo" src="@/assets/startups/mosaic/logo.png">
                    <img alt="Featured Startup logo" src="@/assets/startups/qbo/icon.png">
                    <img alt="Featured Startup logo" class="sixth-img" src="@/assets/startups/startupvillage/icon.png">
                    <img alt="Featured Startup logo" class="seventh-img" src="@/assets/startups/technoapp/logo.png">
                    <img alt="Featured Startup logo" class="eight-img" src="@/assets/startups/makeracademy/logo.png">
                </div>
                <div class="img-row" id="second-imgrow">
                    <img alt="Featured Startup logo" src="@/assets/startups/pickaroo/logo.png">
                    <img alt="Featured Startup logo" src="@/assets/startups/xperto/logo2.png">
                    <!--
                    <img alt="alt" src="#">
                    <img alt="Featured Startup logo" src="#">
                    <img alt="Featured Startup logo" src="#">
                    <img alt="Featured Startup logo" class="sixth-img" src="#">
                    <img alt="Featured Startup logo" class="seventh-img" src="#">
                    <img alt="Featured Startup logo" class="eight-img" src="#">
                    -->
                </div>
            </div>
            <div class="and-more">
                <p>...AND MORE!</p>
            </div>
            <div class="view-btn">
                <span class="primary-btn"><PrimaryBtn>View featured startups<Chevron id="chevron"/></PrimaryBtn></span>
                <span class="primary-btn2"><PrimaryBtn>View startups<Chevron id="chevron"/></PrimaryBtn></span>
            </div>
        </div>
        <div class="img-wrapper">
            <img src="@/assets/sus1.png">
        </div>
    </div>
</div>
</template>

<script>
import PrimaryBtn from "./PrimaryBtn.vue"
import Chevron from "./Chevron.vue"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: 'Opportunities',
    components: {
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
  font-family: "Inter-Light";
  src: url('./../fonts/Inter-Light.ttf') format("truetype");
}
*{
    background-color: #fcfcfc;
    margin: 0px!important;
}
.page-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    margin: 0px!important;
    transform: translate(0%, 3%);
}
.first-container{
    display: flex;
    flex-direction: column;
    width: 760px;
    transform: translate(15%,0%);
    height: fit-content;
    padding-top: 200px;
}
.text-wrapper{
    display: flex;
    flex-direction: column;
}
.text-wrapper #header{
    font-family: "Objectivity-ExtraBold";
    font-size: 28px;
    line-height: 40px;
    color: #2C2C2C;
}
.text-wrapper #content{
    padding-top: 16px;
    width: 664px;
    font-family: "Inter-Light";
    font-size: 16px;
    line-height: 26px;
}
.img-rows{
    width: 752px;
}
.img-row{
    padding-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.img-row img{
    object-fit: contain;
    width: 80px;
    height: auto;
}
#second-imgrow{
    padding-top: 16px;
}
.and-more{
    padding-top: 12px;
    transform: translate(88%,0%);
}
.and-more p{
    font-family: "Inter-SemiBold";
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    color: #2C2C2C;
}
.view-btn{
    padding-top: 32px;
}
.view-btn .primary-btn{
    font-size: 16px;
    line-height: 26px;
}
.view-btn .primary-btn2{
    font-size: 16px;
    line-height: 26px;
    display: none;
}
.img-wrapper{
    width: 642.96px;
    height: 925px;
    transform: translate(28%,0%);
}
.img-wrapper img{
    width: 100%;
    height: 100%;
}
#chevron{
    background: transparent;
    margin-left: 8px!important;
}
@media screen and (max-width: 1920px){
.first-container{
    transform: translate(23%,19%);
}
.img-wrapper{
    transform: translate(22%,0%);
}
}
@media screen and (max-width: 1550px){
.first-container{
    transform: translate(20%,0%);
}
.img-wrapper{
    transform: translate(22%,0%);
}
}
@media screen and (max-width: 1550px){
.first-container{
    transform: translate(15%,19%);
}
}
@media screen and (max-width: 1388px){
.first-container{
    transform: translate(10%,19%);
}
.and-more{
    transform: translate(89%,0%);
}
.img-wrapper{
    transform: translate(22%,0%);
}
}
@media screen and (max-width: 1225px){
.first-container{
    transform: translate(7.5%,19%);
}
.img-wrapper{
    transform: translate(28%,0%);
}
}
@media screen and (min-width: 1025px){
    .page-container{
        margin-bottom: 15%!important;
    }
}
@media screen and (max-width: 1024px){
.page-container{
    justify-content: flex-start;
}
.img-wrapper img{
    width: 0%;
    height: 0%;
    display: none;
}
.img-wrapper{
    width: 0%;
    height: 0%;
    display: none;
}
.first-container{
    transform: translate(10%,0%);
    padding-top: 183px;
}
.eight-img{
    width: 0%!important;
    height: 0%!important;
    visibility: hidden;
}
.and-more{
    transform: translate(85.5%,0%);
}
}
@media screen and (max-width: 924px){
.first-container{
    transform: translate(5%,0%);
}
}
@media screen and (max-width: 790px){
.first-container{
    transform: translate(4%,0%);
}
}
@media screen and (max-width: 768px){
.first-container{
    transform: translate(6.5%,0%);
}
.img-row{
    width: 656px;
}
.and-more{
    transform: translate(74.5%,0%);
}
}
@media screen and (max-width: 736px){
.first-container{
    transform: translate(4%,0%);
}
}
@media screen and (max-width: 720px){
.first-container{
    transform: translate(0%,0%);
    margin-left: 16px!important;
    margin-right: 16px!important;
    padding-top: 88px;
}
}
@media screen and (max-width: 700px){
.text-wrapper #header{
    width: 50%;
}
}
@media screen and (max-width: 680px){
.page-container{
    justify-self: center;
}
.text-wrapper #header{
    width: 50%;
}
.text-wrapper #content{
    width: 87%;
}
.seventh-img{
    width: 0%!important;
    height: 0%!important;
    visibility: hidden;
}
.and-more{
    transform: translate(69.7%,0%);
}
.view-btn .primary-btn {
  display: none;
  padding-top: 0px;
  transform: translate(-54.5%,-20%);
}
.view-btn .primary-btn2{
display: inline-block;
  padding-top: 0px;
  transform: translate(0%,-20%);
}
}
@media screen and (max-width: 653px){
.view-btn .primary-btn2 {
  transform: translate(0%,-20%);
}
}
@media screen and (max-width: 640px){
.sixth-img{
    visibility: hidden;
}
.and-more{
    transform: translate(56%,0%);
}
}
.text-wrapper #content{
    width: 81%;
}
@media screen and (max-width: 620px){
    .text-wrapper #content{
    width: 77%;
}
}
@media screen and (max-width: 600px){
    .text-wrapper #content{
    width: 75%;
}
}
@media screen and (max-width: 580px){
    .text-wrapper #content{
    width: 74%;
}
}
@media screen and (max-width: 568px){
    .text-wrapper #header{
        font-size: 20px;
        line-height: 32px;
        width: 100%;
    }
    .text-wrapper #content{
        font-size: 16px;
        line-height: 26px;
        width: 69%;
    }
.sixth-img{
    width: 0%!important;
    height: 0%!important;
    visibility: hidden;
}
.img-row img{
    width: 60px;
    height: 60px;
}
.img-row{
    width: 508px;
}
.and-more{
    transform: translate(20.7%,0%);
    width: 0%!important;
    height: 0%!important;
    visibility: hidden;
}
.view-btn{
    padding-top: 25px;
}
}
@media screen and (max-width: 540px){
    .text-wrapper #content{
        width: 65%;
    }
}
@media screen and (max-width: 514px){
    .text-wrapper #header{
        width: 39%;
}
    .text-wrapper #content{
        width: 62%;
    }
}
@media screen and (max-width: 500px){
    .text-wrapper #header{
        width: 39%;
    }
    .text-wrapper #content{
        width: 57%;
    }
.img-row img{
    width: 40px;
    height: 40px;
}
.img-row{
    width: 264px;
}
}
@media screen and (max-width: 450px){
.text-wrapper #content{
    width: 52%;
}
}
@media screen and (max-width: 414px){
.text-wrapper #content{
    width: 49%;
}
.first-container{
    padding-top: 88px;
}
}
@media screen and (max-width: 386px){
.text-wrapper #content{
    width: 47%;
}
}
@media screen and (max-width: 375px){
.text-wrapper #content{
    width: 44%;
}
}
@media screen and (max-width: 350px){
.text-wrapper #content{
    width: 41%;
}
}
@media screen and (max-width: 330px){
.text-wrapper #content{
    width: 38%;
}
}
@media screen and (max-width: 305px){
.text-wrapper #content{
    width: 35%;
}
}
</style>