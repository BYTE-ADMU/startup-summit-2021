<template>
    <div class="page-container">
        <center><div class="first-container">
            <div class="big-img-wrapper">
                <center><div class="vid"><video autoplay><source src="#" type="video/mp4"></video></div></center>
                <div class="circle-design"><img id="big-circle" src="@/assets/circledesign.png"><img id="small-circle1" src="@/assets/circledesign.png"><img id="small-circle2" src="@/assets/circledesign.png"></div>
            </div>
            </div>
        </center>
        <center><div class="second-container">
            <div class="text-wrapper">
                <p id="header">Exhibitorsʼ showcase</p>
                <div class="search-wrapper">
                    <input type="text" v-model="search" placeholder="Looking for anything specific? (Startups, jobs)" class="search-txt" />
                </div>
            </div>
    </div></center>
    </div>
</template>

<script>
export default {
    name: 'Start-Up'
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
    flex-direction: column;
    width: 100vw;
    margin: 0px!important;
    overflow: hidden;
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
    z-index: 10!important;
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
}
.search-txt{
    font-size: 16px!important;
    line-height: 26px!important;
    font-family: "Inter-Light";
    color: #A3A3A3;
    border: none!important;
    width: 348px;
    vertical-align: middle;
    background-color: #f8f8f8;
    transform: translate(0%,52.5%);
}
.search-txt:focus {
    outline: none;
}
</style>