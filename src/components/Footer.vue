<template>
    <div class="footer-wrapper">
        <center><div class="logo-wrapper">
            <img src="@/assets/suslogo.png">
        </div></center>
        <center><div class="footer-menu">
            <a href="#">Home</a>
            <a href="#">Startups</a>
            <a href="#">About</a>
            <a href="#">Partners</a>
            <a href="#">FAQs</a>
        </div></center>
        <div class="register-btn">
            <button>Register</button>
        </div>
        <center><div class="icon-links">
            <a href="#"><img src="@/assets/u_facebook.png"></a>
            <a href="#"><img src="@/assets/u_linkedin.png"></a>
            <a href="#"><img src="@/assets/u_twitter.png"></a>
            <a href="#"><img src="@/assets/u_instagram-alt.png"></a>
        </div></center>
    </div>
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style scoped>
@font-face {
  font-family: "Objectivity-Bold";
  src: url('./../fonts/Objectivity-Bold.otf') format("opentype");
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
    font-family: 'Inter', sans-serif;
    margin: 0;
    background-color: #f8f8f8;
    overflow: hidden;
}
.footer-wrapper{
    color: black;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0;
}
.logo-wrapper{
    padding-top: 5%;
    width: 285px;
    height: 72px;
}
.logo-wrapper img{
    width: 100%;
    height: 100%;
}
.footer-menu{
    padding-top: 32px;
    width: 577px;
    display: flex;
    justify-content: space-evenly;
}
.footer-menu a{
    text-decoration: none;
    color: #333333!important;
    font-family: 'Inter-Bold';
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
    box-shadow: black!important;
    box-shadow: 50px black;
    cursor: pointer;
    box-shadow: 0px 0px 15px rgba(255,151,79, 0.8);
    font-family: 'Inter-SemiBold';
}
.icon-links{
    padding-top: 48px;
    width: 176px;
    display: flex;
    justify-content: space-evenly;
}

@media screen and (max-width: 768px){
.logo-wrapper{
    padding-top: 7%;
    width: 234px;
    height: 59px;
}
.footer-wrapper{
    width: 100%;
    height: 350px;
}
.footer-menu{
    padding-top: 24px;
}
.register-btn{
    padding-top: 24px;
}
.icon-links{
    padding-top: 40px;
}
}

@media screen and (max-width: 577px){
.logo-wrapper{
    padding-top: 10%;
    width: 234px;
    height: 59px;
}
.footer-wrapper{
    width: 100%;
    height: 350px;
}
.footer-menu{
    padding-top: 24px;
    width: 500px;
}
.register-btn{
    padding-top: 24px;
}
.icon-links{
    padding-top: 40px;
}
}

@media screen and (max-width: 500px){
    .footer-menu{
    padding-top: 24px;
    width: 450px;
}
}

@media screen and (max-width: 450px){
.logo-wrapper{
    padding-top: 13%;
}
.footer-wrapper{
    width: 100%;
    height: 334px;
}
.footer-menu{
    padding-top: 24px;
    width: 450px;
}
.footer-menu{
    visibility: hidden;
    width: 0px;
    height: 0px;
    padding-top: 0px;
}
.footer-menu a{
    visibility: hidden;
    width: 0px;
    height: 0px;
    padding-top: 0px;
}
.register-btn{
    padding-top: 48px;
}
}

@media screen and (max-width: 380px){
.logo-wrapper{
    padding-top: 15%;
}
}

@media screen and (max-width: 350px){
.logo-wrapper{
    padding-top: 17%;
}
}

@media screen and (max-width: 320px){
.footer-wrapper{
    width: 100%;
    height: 320px;
}
.logo-wrapper{
    padding-top: 17%;
    width: 198px;
    height: 49px;
}
}
</style>