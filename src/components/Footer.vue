<template>
    <div class="footer-wrapper">
        <center><div class="logo-wrapper">
            <img src="@/assets/suslogo.png">
        </div></center>
        <div class="footer-menu">
            <a href="#">Home</a>
        </div>
        <div class="register-btn">
            <button>Register</button>
        </div>
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
}
.footer-wrapper{
    background-color: #f8f8f8;
    color: black;
    width: 100%;
    height: 400px;
    overflow: hidden;
    z-index: 10;
    display: flex;
    flex-direction: column;
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
}
.footer-menu a{
    text-decoration: none;
    color: #333333!important;
    font-family: 'Inter-Bold';
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
    box-shadow: 0px 0px 20px rgba(244,110,38, 0.8);
    font-family: 'Inter-SemiBold';
}
</style>