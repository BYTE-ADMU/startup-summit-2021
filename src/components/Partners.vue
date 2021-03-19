<template>
<div data-aos="fade-up">
    <center><div class="page-container">
        <div class="text">
            <p>Our Major Partners</p>
        </div>
        <div class="img-rows">
            <div class="img-row">
                <img alt="Major Partner logo" src="#">
                <img alt="Major Partner logo" src="#">
                <img alt="Major Partner logo" src="#">
            </div>
            <div class="img-row" id="second-imgrow">
                <img alt="Major Partner logo" src="#">
                <img alt="Major Partner logo" src="#">
                <img alt="Major Partner logo" src="#">
            </div>
        </div>
    </div></center>
</div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    name: 'Partners',
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
*{
    background-color: #fcfcfc;
    margin: 0px;
}
.page-container{
    padding-top: 0%;
    padding-bottom: 184px;
    width: 100vw;
    margin: 0px!important;
    overflow-x: hidden;
}
.text p{
    font-size: 28px;
    line-height: 40px;
    color: #2C2C2C;
    font-family: "Objectivity-ExtraBold";
}
.img-rows{
    width: 645px;
}
.img-row{
    padding-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.img-row img{
    background-color: #C4C4C4;
    width: 175px;
    height: 174px;
}
#second-imgrow{
    padding-top: 48px;
}
@media screen and (max-width: 1024px){
.page-container{
    position: relative;
    z-index: 2;
    padding-top: 0%;
    transform: translate(0px,144px);
    padding-bottom: 35%;
}
}
@media screen and (max-width: 700px){
.text p{
font-size: 24px;
line-height: 40px;
}
.img-row img{
    background-color: #C4C4C4;
    width: 127px;
    height: 127px;
}
.img-rows{
    width: 466.5px;
}
}
@media screen and (max-width: 667px){
    .page-container{
        padding-bottom: 30%;
    }
}
@media screen and (max-width: 600px){
    .page-container{
        padding-bottom: 50%;
    }
}
@media screen and (max-width: 500px){
.text p{
font-size: 22px;
line-height: 40px;
}
.img-row img{
    background-color: #C4C4C4;
    width: 103.5px;
    height: 103.5px;
}
.img-rows{
    width: 377.25px;
}
}
@media screen and (max-width: 400px){
    .page-container{
        transform: translate(0px,110px);
        padding-top: 0px;
        padding-bottom: 50%;
    }
.text p{
font-size: 20px;
line-height: 40px;
}
.img-row img{
    background-color: #C4C4C4;
    width: 80px;
    height: 80px;
}
.img-rows{
    width: 288px;
}
}
@media screen and (max-width: 300px){
.text p{
font-size: 18px;
line-height: 40px;
}
.img-row img{
    background-color: #C4C4C4;
    width: 60px;
    height: 60px;
}
.img-rows{
    width: 216px;
}
}
</style>