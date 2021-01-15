<template>
    <div class="about-page">
        <video width="960px" height="536px" class="about_video">
            <source src="" type="">
        </video>
        <div class="about_startup-summit">
            <div class="design"></div>
            <div class="text">
                <h1>What is Startup Summit 2021?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <h1>Why Startup Summit?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <h1>Why Stepping up for the Future?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </div>
        <div class="about_byte">
            <div class="text">
                <h1>About BYTE: Building Young Tech Entrepreneurs</h1>
                <p>BYTE, the home organization for B.S. Information Technology Entrepreneurship course, is an independent organization under LIONS.</p>
                <p>We strive to help our members develop technological skills and entrepreneurial principles in an inclusive, fun and welcoming environment, and to promote tech entrepreneurship inside and outside of the Ateneo De Manila University.</p>
                <p>BYTE envisions itself to be a technological and entrepreneurial network spearheaded by existing and potential catalysts for change.</p>
            </div>
            <img src="../assets/about_picture.png" class=byte_picture img draggable="false">
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutPage"
}
</script>

<style scoped>
/*Fonts*/
@font-face {
    font-family: "objectivity";
    src: url(../assets/fonts/objectivity.extra-bold.otf);
}
@font-face {
    font-family: "inter";
    src: url(../assets/fonts/Inter-Regular.ttf);
}

/*Universal css styles*/
p {
    font-size: 16px;
    font-family: "inter";
    line-height: 26px;
    font-weight: 400px;
    color: rgba(0, 0, 0, 1);
    text-shadow: 0 3px 3px rgb(145, 143, 143) ;
}
h1 {
    font-size: 28px;
    font-family: "objectivity";
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
    font-weight: 800px;
    text-shadow: 0 3px 3px rgb(145, 143, 143) ;
}

/*Applying flex box to the different parts of the website*/
.about-page {
    display: flex;
    flex-direction: column;
}
.about_startup-summit {
    display: flex;
    flex-direction: row;
}
.about_byte {
    display: flex;
    flex-direction: row;
    margin: 150px 0px 230px 130px;
    padding: 0px;
}

/*Video element*/
.about_video {
    border-color: black;
    border-style: solid;
    width: 70vw;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}

/*About startup summit portion*/
.about_startup-summit .design{
    display: flex;
    flex-direction: column;
    width: 48vw;
    height: 72vw;
    background-image: url(../assets/desktop/about_design.png);
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: -8px;
}
.about_startup-summit .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 100px 0px 0px -10px;
    width: 45vw;
}
.about_startup-summit .text p{
    margin-bottom: 30px;
    margin-top: 0px;
}

/*About byte portion*/
.about_byte .text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 45vw;
    padding: 0px;
    margin-right: 55px;
}
.about_byte .text p {
    margin-top: 7px;
}
.about_byte .text h1 {
    margin-bottom: 10px;
}
.about_byte .byte_picture {
    margin-right: -8px;
    padding-right: 0px;
    width: 45vw;
    height: 26vw;
}

/*wide screen*/
@media (min-width: 1920px) {
    /*about start up summit portion*/
    .about_startup-summit .text {
        margin: auto;
        width: 33vw;
    }
    .about_startup-summit {
        margin-bottom: 100px;
    }
    .about_startup-summit .design {
        margin-right: -60px;
    }

    /*about byte portion*/
    .about_byte {
        margin-left: auto;
        margin-right: auto;
        width: 65vw;
    }
    .about_byte .byte_picture {
        width: 55vw;
        height: 20vw;
    }
}

/*Tablet size and Mobile size*/
@media (max-width: 1024px){
    /*Changing flexbox elements due to rearrangement*/
    .about_byte {
        flex-direction: column-reverse;
        margin: 90px 0 200px -9px;
        padding: 0;
    }

    /*Video element*/
    .about_video {
        z-index: 5;
        margin-bottom: 20px;
        width: 90vw;
    }
    
    /*About start up summit portion*/
    /*hard coded positioning of the design element*/
    .about_startup-summit .design {
        position: absolute;
        width: 91vw;
        height: 80vw;
        left: -5px;
        top: 0;
        z-index: 3;
        background-image: url(../assets/tablet/about_design.svg);
        background-size: 91vw 80vw;
    }
    .about_startup-summit {
        margin-left: 30px;
        width: 85vw;
    }
    .about_startup-summit .text {
        width: 85vw;
    }

    /*About byte portion*/
    .about_byte .byte_picture {
        width: 100vw;
        height: 55vw;
    }
    .about_byte .text {
        margin: 90px 0 0 30px;
        width: 85vw;
    }
}
</style>