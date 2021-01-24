<template>
    <div class="page-container">
        <div class="cover-wrapper"><img :src="cover"></div>
        <center><div class="header-container">
            <div class="icon-wrapper"><img :src="icon"></div>
            <div class="header-content">
                <div class="header">
                    <p>{{name}}</p>
                </div>
            </div>
    </div></center>
    </div>
</template>

<script>
export default {
    name: 'Startup-Template',
    props: {
        cover:{
            required: true,
            type: String
        },
        icon:{
            required: true,
            type: String
        },
        name:{
            required: true,
            type: String
        }
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
.cover-wrapper{
width: 100vw!important;
height: 120px;
}
.cover-wrapper img{
width: 100%;
height: 100%;
}
.header-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1014px;
}
.icon-wrapper{
width: 160px;
height: 160px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
border-radius: 5px;
}
.icon-wrapper img{
    width: 100%;
    height: 100%;
}
</style>