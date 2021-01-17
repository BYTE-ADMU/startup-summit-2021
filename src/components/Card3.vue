<template>
    <div class="card3">
        <div class="speaker_img1">
            <div class="container">
                <img src="../assets/logo.png" alt="Speaker image 1" class="picture">
            </div>
        <div class="speaker_img2">
            <div class="container">
                <img src="../assets/logo.png" alt="Speaker image 2" class="picture">
            </div>
        </div>
        <div class="speaker_img3">
            <div class="container">
                <img src="../assets/logo.png" alt="Speaker image 3" class="picture">
            </div>
        </div>
        </div>
        <div class="talk_details">
            <button class="exit"></button>
            <h1 class="talk_title">Talk title</h1>
            <p class="date">March 20, 5-6pm GMT+8</p>
            <p class="speaker1">Speaker Name</p>
            <p class="speaker_creds1">Credential</p>
            <p class="speaker2">Speaker Name</p>
            <p class="speaker_creds2">Credential</p>
            <p class="speaker3">Speaker Name</p>
            <p class="speaker_creds3">Credential</p>
            <p class="description">Panel description will go here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <button class="watch_now">Watch Now</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card3"
}
</script>

<style scoped>
@font-face {
    font-family: "inter";
    src: url(../assets/fonts/Inter/Inter-Regular.ttf);
}
@font-face {
    font-family: "inter_bold";
    src: url(../assets/fonts/Inter/Inter-Bold.ttf);
}
@font-face {
    font-family: "objectivity";
    src: url(../assets/fonts/objectivity.extra-bold.otf);
}

/*Applying flexbox*/
.card3 {
    display: flex;
    flex-direction: row;
    margin: 0 auto 0 auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border: 0.5px solid;
    border-radius: 3px;
    width: 60vw;
}
.card3 .talk_details {
    display: flex;
    flex-direction: column;
    margin: 30px 64px 60px 0;
}

/*General styling*/
/*images*/
.card3 .speaker_img1 {
    margin-right: 9.3vw;
    z-index: 3;
}
.card3 .speaker_img1 .container{
    position: relative;
    top: -50px;
    left: -50px;
    border: 5px solid;
    border-color: #F46E26;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    z-index: inherit;
}
.card3 .speaker_img1 .container .picture {
    position: absolute;
    left: 50px;
    top: 40px;
    width: 144px;
    z-index: inherit;
}
.card3 .speaker_img2 {
    z-index: 2;
}
.card3 .speaker_img2 .container {
    position: relative;
    top: -100px;
    left: 28px;
    border: 5px solid;
    border-color: #F46E26;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    z-index: inherit;
}
.card3 .speaker_img2 .container .picture {
    position: absolute;
    left: 29px;
    width: 144px;
    z-index: inherit;
}
.card3 .speaker_img3 {
    z-index: 1;
}
.card3 .speaker_img3 .container {
    position: relative;
    top: -170px;
    left: -60px;
    border: 5px solid;
    border-color: #F46E26;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    z-index: inherit;
}
.card3 .speaker_img3 .container .picture {
    position: absolute;
    left: 29px;
    width: 144px;
    z-index: inherit;
}


/*text portion*/
.card3 .talk_details .exit {
    align-self: flex-end;
    width: 24px;
    height: 24px;
    border: none;
    background: url(../assets/icons/exit.svg);
    box-shadow: none;
    cursor: pointer;
    outline: none;
    margin: 0 -20px 0 0;
}
.card3 .talk_details .talk_title {
    font-family: "objectivity";
    font-size: 28px;
    color: #F46E26;
    margin: 0;
    line-height: 40px;
}
.card3 .talk_details .date {
    font-family: "inter_bold";
    font-size: 16px;
    color: #F46E26;
    margin: 0 0 16px 0;
    line-height: 26px;
} 
.card3 .talk_details .speaker1, .speaker2, .speaker3 {
    font-family: "inter_bold";
    font-size: 16px;
    line-height: 26px;
    margin: 0;
}
.card3 .talk_details .speaker_creds1, .speaker_creds2, .speaker_creds3 {
    font-family: "inter";
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 24px 0;
    font-weight: bold;
}
.talk_details .description {
    font-style: "inter";
    font-size: 16px;
    line-height: 26px;
    margin: 14px 0 40px 0;
}
.talk_details .watch_now {
    width: 162px;
    height: 42px;
    background-color: rgba(244, 110, 38, 1);
    border-color: rgba(244, 110, 38, 1);
    color: white;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    font-family: "inter_bold";
    padding: 8px 24px;
    font-weight: 700;
    line-height: 26px;
    margin: 0;
    cursor: pointer;
    outline: none;
}

/*Tablet view*/
@media (min-width: 768px) and (max-width: 1024px){
    .card3 {
        width: 89.58vw;
    }
}

/*Mobile view*/
@media (max-width: 767px) {
    .card3 {
        width: 82.5vw;
    }
    .card3 .speaker_img1 {
        display: none;
    }
    .card3 .talk_details {
        margin: 33px 20px 33px 21px;
    }
    .card3 .talk_details .exit {
        margin-right: 0px;
    }
}
</style>