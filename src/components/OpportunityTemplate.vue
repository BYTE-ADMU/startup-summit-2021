<template>
    <div class="page-container">
        <center><div class="cover-wrapper"><img :alt="coverAlt" :src="cover"></div></center>
        <div class="header-container">
            <div class="icon-wrapper"><img :alt="iconAlt" :src="icon"></div>
            <div class="header-content">
                <div class="header">
                    <p>{{name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Opportunity-Template',
    props:{
        cover:{
            required: true,
            type: String
        },
        coverAlt:{
            required: true,
            type: String
        },
        icon:{
            required: true,
            type: String
        },
        iconAlt:{
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
.page-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin: 0px!important;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}
.cover-wrapper{
min-width: 100vw!important;
height: 120px;
}
.cover-wrapper img{
width: 100%;
height: 100%;
}
.header-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transform: translate(0px,13px);
    width: 1152px;
    margin-left: auto!important;
    margin-right: auto!important;
}
.icon-wrapper{
width: 160px;
height: 160px;
}
.icon-wrapper img{
    width: 100%;
    height: 100%;
    transform: translate(0px,-69px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border-radius: 5px;
}
.header-content{
    padding-left: 32px;
    display: flex;
    flex-direction: column;
}
.header{
    font-size: 28px;
    line-height: 40px;
    color: #000;
    font-family: 'Objectivity-ExtraBold';
    font-weight: 800;
    text-align: left;
}
</style>