<template>
    <div class="page-container">
        <center><div class="first-container">
            <p id="header">Got Questions?</p>
            <div class="btn-wrapper"></div>
        </div></center>
    </div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'
import SecondaryBtn from './SecondaryBtn.vue'

export default {
    name: 'FAQ',
    components:{
      PrimaryBtn,
      SecondaryBtn
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
  font-family: "Inter-Regular";
  src: url('./../fonts/Inter-Regular.ttf') format("truetype");
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
    width: 100%;
    height: 100%;
    margin: 0px!important;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
.first-container{
    padding-top: 70px;
    display: flex;
    flex-direction: column;
}
#header{
    font-size: 28px;
    line-height: 40px;
    font-family: 'Objectivity-ExtraBold';
}
.btn-wrapper{
    max-width: 780px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 19px;
}
</style>