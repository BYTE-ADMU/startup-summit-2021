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
                    <img src="#">
                    <img src="#">
                    <img src="#">
                </div>
                <div class="img-row" id="second-imgrow">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
                    <img src="#">
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
    margin: 0px;
    overflow: hidden;
}
.page-container{
    display: flex;
    flex-direction: row;
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
    transform: translate(34%,0%);
}
.img-wrapper img{
    width: 100%;
    height: 100%;
}
</style>