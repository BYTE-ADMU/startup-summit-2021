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
@font-face {
    font-family: "objectivity";
    src: url(../assets/fonts/objectivity.extra-bold.otf);
}

@font-face {
    font-family: "inter";
    src: url(../assets/fonts/Inter-Regular.ttf);
}

p {
    font-size: 16px;
    font-family: "inter";
    line-height: 26px;
    font-weight: 400px;
    color: rgba(0, 0, 0, 1);
}

h1 {
    font-size: 28px;
    font-family: "objectivity";
    color: rgba(0, 0, 0, 1);;
    line-height: 40px;
}

.about_video {
    border-color: black;
    border-style: solid;
    position: absolute;
    width: 960px;
    height: 100vh;
    top: 160px;
    left: 240px;
}

.about_startup-summit .design{
    position: absolute;
    width: 681px;
    height: 959.9px;
    left: 0px;
    top: 1100px;
    background-image: url(../assets/desktop/about_design.png);
    background-repeat: no-repeat;
}

.about_startup-summit .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 663px;
    height: 639px;
    left: 650px;
    top: 1193px;
}

.about_startup-summit .text p{
    margin-bottom: 30px;
    margin-top: 0px;
}

.about_byte .text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: absolute;
    width: 640px;
    height: 337px;
    left: 144px;
    top: 2237px;
}

.about_byte .text p {
    margin-top: 7px;
}

.about_byte .text h1 {
    margin-bottom: 10px;
}

.about_byte .byte_picture {
    position: absolute;
    width: 632px;
    height: 360px;
    left: 810px;
    top: 2240px;
}

@media (min-width: 768px) and (max-width: 1024px){
    .about_video {
        position: absolute;
        width: 688px;
        height: 384px;
        left: 40px;
        top: 152px;
        z-index: 5;
    }

    .about_startup-summit .design {
        position: absolute;
        width: 760px;
        height: 759px;
        left: -5px;
        top: 0;
        z-index: 3;
        background-image: url(../assets/tablet/about_design.svg)
    }

    .about_startup-summit .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;

        position: absolute;
        width: 664px;
        height: 639px;
        left: 32px;
        top: 656px;
    }

    .about_byte .byte_picture {
        position: absolute;
        width: 768px;
        height: 436px;
        left: 0px;
        top: 1446px;
    }

    .about_byte .text {
        position: absolute;
        width: 640px;
        height: 337px;
        left: 40px;
        top: 1972px;
    }
}


</style>