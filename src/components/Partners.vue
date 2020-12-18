<template>
    <center><div class="page-container">
        <div class="text">
            <p>Our Major Partners</p>
        </div>
        <div class="img-rows">
            <div class="img-row">
                <img src="#">
                <img src="#">
                <img src="#">
            </div>
            <div class="img-row" id="second-imgrow">
                <img src="#">
                <img src="#">
                <img src="#">
            </div>
        </div>
    </div></center>
</template>

<script>
export default {
    name: 'Partners'
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
    overflow: hidden;
}
.page-container{
    padding-top: 10%;
    padding-bottom: 13%;
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
</style>