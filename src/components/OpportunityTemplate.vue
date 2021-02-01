<template>
    <div class="page-container">
        <center><div class="cover-wrapper"><img :alt="coverAlt" :src="cover"></div></center>
        <div class="header-container">
            <div class="icon-wrapper"><img :alt="iconAlt" :src="icon"></div>
            <div class="header-content">
                <div class="header">
                    <p>{{jobPosition}}</p>
                </div>
                <div class="subheader">
                    <p>{{name}}</p>
                </div>
            </div>
        </div>
        <div class="first-container">
            <div class="side-nav-wrapper">
                <div class="sidenav-container">
                    <div class="nav-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    <div class="nav-section">
                        <p>Responsibilities</p>
                    </div>
                </div>
            </div>
            <div class="content-wrapper">
                <div class="content-header">
                    <p>Responsibilities</p>
                </div>
                <div class="bullet-wrapper">
                    <div class="bullet-content" v-for="responsibilities in responsibilities" :key="responsibilities">
                        <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#1EACB5"/>
</svg></p><p>{{responsibilities.responsibility}}</p>
                    </div>
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
        },
        jobPosition:{
            required: true
        },
        responsibilities:{
            required: true
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
}
.page-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px!important;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
.subheader{
    font-size: 14px;
    line-height: 22px;
    color: #000;
    font-family: 'Inter-Regular';
    font-weight: 400;
    text-align: left;
    height: 30px;
}
.first-container{
    display: flex;
    flex-direction: row;
    padding-left: 292px;
    z-index: 1;
}
.side-nav-wrapper{
    display: flex;
    flex-direction: column;
}
.sidenav-container{
    display: flex;
    flex-direction: row;
}
.nav-icon{
    background: #F46E26;
    border-radius: 50%;
    width: 48px;
    height: 48px;
}
.nav-icon svg{
    background: #F46E26;
    padding: auto;
    margin-top: 12px!important;
    margin-left: 12px!important;
}
.nav-section p{
    font-size: 14px;
    line-height: 22px;
    color: #2C2C2C;
    font-family: 'Inter-Regular';
    padding-left: 17px;
    height: 48px;
    padding-top: 17px;
}
.content-wrapper{
    padding-left: 180px;
    width: 656px;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.content-header p{
    font-size: 28px;
    line-height: 40px;
    color: #000;
    font-family: 'Objectivity-ExtraBold';
}
.bullet-wrapper{
    margin-top: -5px!important;
}
.bullet-content{
    padding-top: 21px;
    display: flex;
    flex-direction: row;
}
.bullet-content p{
    font-size: 16px;
    line-height: 26px;
    font-family: 'Inter-Regular';
    color: #333;
}
.bullet-content svg{
    margin-top: 7px!important;
    margin-right: 12px!important;
}
</style>