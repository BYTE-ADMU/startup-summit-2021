<template>
    <div class="card3">
        <div class="speaker_img1">
            <div class="container">
                <img v-bind:src="img1" alt="Speaker image 1" class="picture">
            </div>
        <div class="speaker_img2">
            <div class="container">
                <img v-bind:src="img2" alt="Speaker image 2" class="picture">
            </div>
        </div>
        <div class="speaker_img3">
            <div class="container">
                <img v-bind:src="img3" alt="Speaker image 3" class="picture">
            </div>
        </div>
        <div class="speaker_img4">
            <div class="container">
                <img v-bind:src="img4" alt="Speaker image 4" class="picture">
            </div>
        </div>
        </div>
        <div class="talk_details">
            <button class="exit" v-on:click="exitButton"></button>
            <h1 class="talk_title">{{ panel }}</h1>
            <p class="date">{{ date }}, {{ time }} GMT+8</p>
            <div class="row1">
                <div class="col">
                    <p class="speaker1">{{ speaker_1 }}</p>
                    <p class="speaker_creds1">{{ creds1 }}</p>
                    <p class="speaker2">{{ speaker_2 }}</p>
                    <p class="speaker_creds2">{{ creds2 }}</p>
                </div>
                <div class="col">
                    <p class="speaker3">{{ speaker_3 }}</p>
                    <p class="speaker_creds3">{{ creds3 }}</p>
                    <p class="speaker4">{{ speaker_4 }}</p>
                    <p class="speaker_creds4">{{ creds4 }}</p>
                </div>
            </div>
            <p class="description">{{ description }}</p>
            <PrimaryBtn class="watch_now">Watch Now <Chevron/></PrimaryBtn>
        </div>
    </div>
</template>

<script>
import PrimaryBtn from "./PrimaryBtn.vue"
import Chevron from "./Chevron.vue"

export default {
    name: "PanelModal",
    components: {
        PrimaryBtn,
        Chevron
    },
    props: {
        img1: String,
        img2: String,
        img3: String,
        img4: String,
        panel: String,
        date: String,
        time: String,
        speaker_1: String,
        speaker_2: String,
        speaker_3: String,
        speaker_4: String,
        creds1: String,
        creds2: String,
        creds3: String,
        creds4:String,
        description: String
    },
    methods: {
        exitButton(exit) {
            exit = false;
            this.$emit("exit-button", exit)
        }
    }
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
    margin: 0 auto 100px auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border: 0.5px solid;
    border-radius: 3px;
    width: 864px;
    max-height: 650px;
    overflow: hidden;
}
.card3 .talk_details {
    display: flex;
    flex-direction: column;
    margin: 30px 64px 60px 0;
}
.card3 .talk_details .row1, .row2 {
    display: flex;
    flex-direction: row;
    margin-left: 0;
}
.col {
    display: flex;
    flex-direction: column;
}

/*General styling*/
/*images*/
.card3 .speaker_img1 {
    margin-right: 133.92px;
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
    overflow: hidden;
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
    top: -85px;
    left: 40px;
    border: 5px solid;
    border-color: #F46E26;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    overflow: hidden;
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
    top: -130px;
    left: -60px;
    border: 5px solid;
    border-color: #F46E26;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    overflow: hidden;
    z-index: inherit;
}
.card3 .speaker_img3 .container .picture {
    position: absolute;
    left: 29px;
    width: 144px;
    z-index: inherit;
}
.card3 .speaker_img4 {
    z-index: 2;
}
.card3 .speaker_img4 .container {
    position: relative;
    top: -180px;
    left: 40px;
    border: 5px solid;
    border-color: #F46E26;
    width: 205px;
    height: 205px;
    border-radius: 50%;
    overflow: hidden;
    z-index: inherit;
}
.card3 .speaker_img4 .container .picture {
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
    margin: -10px -40px 0 0;
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
.card3 .talk_details .speaker1, .speaker2, .speaker3, .speaker4 {
    font-family: "inter_bold";
    font-size: 16px;
    line-height: 26px;
    margin: 0 30px 0 0;
}
.card3 .talk_details .speaker_creds1, .speaker_creds2, .speaker_creds3, .speaker_creds4 {
    font-family: "inter";
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 24px 0;
    font-weight: bold;
    font-style: normal;

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
    border-radius: 4px;
    border: none;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    padding: 8px 24px;
    margin: 0;
    cursor: pointer;
    outline: none;
}

/*Tablet view*/
@media (min-width: 768px) and (max-width: 1024px){
    .card3 {
        width: 89.58vw;
        max-height: 700px;
    }
    .card3 .talk_details {
        margin-left: -50px;
    }
}

/*Mobile view*/
@media (max-width: 767px) {
    .card3 {
        width: 82.5vw;
        max-height: 1000px;
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