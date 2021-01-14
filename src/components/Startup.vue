<template>
    <div class="page-container">
        <center><div class="first-container">
            <div class="big-img-wrapper">
                <center><img id="main-img" src="#"></center>
                <img class="circle-design" src="@/assets/circledesign.png">
            </div>
            </div>
        </center>
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
    overflow-x: hidden;
}
.first-container{
    height: 100vh;
    padding-top: 5%;
}
.big-img-wrapper{
    background-color: #C4C4C4;
    width: 906px;
    height: 510px;
    position: relative;
    z-index: 10!important;
}
.circle-design{
    position: relative;
    z-index: 0!important;
    transform: translate(0%,0%);
}
</style>