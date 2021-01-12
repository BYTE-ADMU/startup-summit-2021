<template>
    <div class="page-container">
        <div class="img-wrapper">
            <img src="@/assets/heroimg.png">
        </div>
        <div class="first-container">
            <div class="logo-wrapper">
                <img src="@/assets/suslogo.png">
            </div>
            <div class="text-wrapper">
                <p id="text">Stepping up for the Future</p>
                <p id="date">April 16-18, 2020</p>
            </div>
            <div class="register-btn">
                <button>Register ></button><button id="secondary-btn">View Schedule</button>
            </div>
        </div>
        <div class="messenger-btn">
            <button>
                <center><div class="mssngr-icon">
                        <img src="@/assets/mssngr.png">
                </div></center>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
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
    background-color: #fcfcfc;
    margin: 0px!important;
}
.page-container{
    display: flex;
    flex-direction: row;
    width: 100vw;
    overflow: hidden;
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
    transform: translate(-20%,25%);
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
.register-btn{
    padding-top: 32px;
}
.register-btn button{
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
.messenger-btn{
    transform: translate(-60%,70%);
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
    visibility: hidden;
}
@media screen and (max-width: 768px){
.page-container{
    display: flex;
    flex-direction: column;
}
.img-wrapper{
    width: 825.64px;
    height: 824.78px;
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
#secondary-btn{
    visibility: visible;
}

@media screen and (max-width: 320px){
.img-wrapper{
    width: 473.05px;
    height: 472.56px;
    transform: translate(-30%,-44%);
}
.img-wrapper img{
    transform: rotate(87deg);
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
    transform: translate(6%,-73%);
}
.register-btn{
    width: 151px;
    display: flex;
    flex-direction: column;
}
.register-btn button{
    font-size: 14px;
    line-height: 22px;
}
}
}
</style>