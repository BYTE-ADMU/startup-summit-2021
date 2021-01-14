<template>
    <div class="page-container">
        <div class="first-container">
            <div class="text-wrapper">
                <p id="header">Looking for opportunities to work in startups?</p>
                <p id="content">Startup Summit aims to provide students with access to opportunities that... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div class="img-rows">
                <div class="img-row">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img class="sixth-img" src="#">
                    <img class="seventh-img" src="#">
                    <img class="eight-img" src="#">
                </div>
                <div class="img-row" id="second-imgrow">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img class="sixth-img" src="#">
                    <img class="seventh-img" src="#">
                    <img class="eight-img" src="#">
                </div>
            </div>
            <div class="and-more">
                <p>...AND MORE!</p>
            </div>
            <div class="view-btn">
                <button>View featured startups ></button>
            </div>
        </div>
        <div class="img-wrapper">
            <img src="@/assets/sus1.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Opportunities'
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
    height: 100vh;
    overflow-x: hidden;
}
.first-container{
    display: flex;
    flex-direction: column;
    width: 760px;
    transform: translate(15%,19%);
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
    justify-content: space-between;
}
.img-row img{
    background-color: #C4C4C4;
    width: 80px;
    height: 80px;
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
.view-btn button{
    background-color: #F46E26;
    color: white;
    padding: 8px 24px;
    font-size: 16px;
    line-height: 26px;
    border: 0px;
    border-radius:4px!important;
    cursor: pointer;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    font-family: 'Inter-SemiBold';
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
    transform: translate(20%,19%);
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
@media screen and (max-width: 1024px){
.page-container{
    justify-content: flex-start;
}
.img-wrapper img{
    width: 0%;
    height: 0%;
    visibility: hidden;
}
.first-container{
    transform: translate(10%,15%);
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
    transform: translate(5%,15%);
}
}
@media screen and (max-width: 790px){
.first-container{
    transform: translate(4%,15%);
}
}
@media screen and (max-width: 768px){
.first-container{
    transform: translate(6.5%,15%);
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
    transform: translate(4%,15%);
}
}
@media screen and (max-width: 720px){
.first-container{
    transform: translate(3%,15%);
}
}
@media screen and (max-width: 700px){
.first-container{
    transform: translate(1.5%,15%);
}
}
@media screen and (max-width: 690px){
.first-container{
    transform: translate(0.8%,15%);
}
}
@media screen and (max-width: 680px){
.page-container{
    justify-self: center;
}
.first-container{
    transform: translate(4%,15%);
}
.text-wrapper #header{
    width: 50%;
}
.text-wrapper #content{
    width: 75%;
}
.seventh-img{
    width: 0%!important;
    height: 0%!important;
    visibility: hidden;
}
.and-more{
    transform: translate(69.7%,0%);
}
.view-btn button {
  visibility: hidden;
  padding-top: 0px;
  transform: translate(-54.5%,-20%);
}
.view-btn button:after{
  content:'View startups >';
  visibility: visible;
    background-color: #F46E26;
    color: white;
    padding: 8px 24px;
    font-size: 16px;
    line-height: 26px;
    border: 0px;
    border-radius:4px!important;
    cursor: pointer;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    font-family: 'Inter-SemiBold';
}
}
@media screen and (max-width: 653px){
.first-container{
    transform: translate(3.2%,15%);
}
.view-btn button {
  transform: translate(-52.5%,-20%);
}
}
@media screen and (max-width: 650px){
.first-container{
    transform: translate(3%,15%);
}
}
@media screen and (max-width: 640px){
.first-container{
    transform: translate(5.4%,15%);
}
.sixth-img{
    visibility: hidden;
}
.and-more{
    transform: translate(56%,0%);
}
}
@media screen and (max-width: 600px){
    .first-container{
        transform: translate(4%,10%);
    }
}
@media screen and (max-width: 580px){
    .first-container{
        transform: translate(2.5%,10%);
    }
}
@media screen and (max-width: 568px){
    .first-container{
        transform: translate(6.5%,10%);
    }
    .text-wrapper #header{
        font-size: 20px;
        line-height: 32px;
        width: 100%;
    }
    .text-wrapper #content{
        font-size: 16px;
        line-height: 26px;
        width: 67%
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
    .first-container{
        transform: translate(4%,10%);
    }
}
@media screen and (max-width: 520px){
    .first-container{
        transform: translate(3%,10%);
    }
}
@media screen and (max-width: 514px){
    .first-container{
        transform: translate(2%,10%);
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
@media screen and (max-width: 480px){
.first-container{
    transform: translate(4%,10%);
}
}
@media screen and (max-width: 450px){
.text-wrapper #content{
    width: 49%;
}
}
@media screen and (max-width: 414px){
.first-container{
    transform: translate(4%,10%);
}
}
@media screen and (max-width: 380px){
.text-wrapper #content{
    width: 41%;
}
}
@media screen and (max-width: 375px){
.first-container{
    transform: translate(5%,10%);
}
}
@media screen and (max-width: 380px){
.first-container{
    transform: translate(4%,10%);
}
}
@media screen and (max-width: 380px){
.first-container{
    transform: translate(2.5%,10%);
}
}
@media screen and (max-width: 320px){
.text-wrapper #content{
    width: 35%;
}
}
@media screen and (max-width: 280px){
.first-container{
    transform: translate(1%,10%);
}
}
</style>