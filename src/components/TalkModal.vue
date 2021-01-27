<template>
    <div class="card2">
        <div class="container1">
            <div class="container2">
                <img src="../assets/logo.png" alt="Speaker image" class="picture">
            </div>
        </div>
        <div class="talk_details">
            <button class="exit" v-on:click="exitButton"></button>
            <h1 class="talk_title">{{ talk }}</h1>
            <p class="date">{{ date }}, {{ time }} GMT+8</p>
            <p class="speaker_name">{{ speaker }}</p>
            <p class="speaker_credentials">{{ creds }}</p>
            <div class="icons">
                <div class="icon1"></div>
                <div class="icon2"></div>
                <div class="icon3"></div>
                <div class="icon4"></div>
            </div>
            <p class="description">{{ description }}</p>
            <PrimaryBtn class="watch_now">Watch Now<Chevron/></PrimaryBtn>
        </div>
    </div>
</template>

<script>
import PrimaryBtn from "./PrimaryBtn.vue"
import Chevron from "./Chevron.vue"

export default {
    name: "TalkModal",
    components: {
        PrimaryBtn,
        Chevron
    },
    props: {
        talk: String,
        description: String,
        time: String,
        date: String,
        creds: String
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
.card2 {
    display: flex;
    flex-direction: row;
    margin: 0 auto 100px auto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border: 0.5px solid;
    border-radius: 3px;
    width: 60vw;
    overflow: auto;
}
.card2 .talk_details {
    display: flex;
    flex-direction: column;
    margin: 30px 64px 60px 0;
}
.card2 .talk_details .icons {
    display: flex;
    flex-direction: row;
}

/*General styling*/
/*Picture*/
.card2 .container1 {
    margin-right: -70px;
}
.card2 .container1 .container2{
    position: relative;
    top: -13.889vw;
    left: -100px;
    border: 5px solid;
    border-color: #F46E26;
    width: 27.78vw;
    height: 27.78vw;
    border-radius: 50%;
    overflow: hidden;
}
.card2 .container1 .container2 .picture {
    position: absolute;
    left: 10.417vw;
    top: 13.194vw;
    width: 14.583vw;
}

/*Talk details*/
.card2 .talk_details .exit {
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
.card2 .talk_details .talk_title {
    font-family: "objectivity";
    font-size: 28px;
    color: #F46E26;
    margin: 0;
    line-height: 40px;
}
.card2 .talk_details .date {
    font-family: "inter_bold";
    font-size: 16px;
    color: #F46E26;
    margin: 0 0 16px 0;
    line-height: 26px;
} 
.card2 .talk_details .speaker_name {
    font-family: "inter_bold";
    font-size: 16px;
    line-height: 26px;
    margin: 0;
}
.card2 .talk_details .speaker_credentials {
    font-family: "inter";
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 16px 0;
    font-weight: bold;
}
.talk_details .icons .icon1, .icon2, .icon3, .icon4{
    width: 19.872px;
    height: 20px;
    margin: 0 16px 40px 0;
    background-repeat: no-repeat;
}
.talk_details .icons .icon1 {
    background-image: url(../assets/icons/linkedin.svg);
}
.talk_details .icons .icon2 {
    background-image: url(../assets/icons/insta.svg);
}
.talk_details .icons .icon3 {
    background-image: url(../assets/icons/twitter.svg);
}
.talk_details .icons .icon4 {
    background-image: url(../assets/icons/website.svg);
}
.talk_details .description {
    font-style: "inter";
    font-size: 16px;
    line-height: 26px;
    margin: 0 0 40px 0;
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
    .card2 {
        width: 89.58vw;
    }
}

/*Mobile view*/
@media (max-width: 767px) {
    .card2 {
        width: 82.5vw;
    }
    .card2 .container1 {
        display: none;
    }
    .card2 .talk_details {
        margin: 33px 20px 33px 21px;
        z-index: 0;
    }
    .card2 .talk_details .talk_title {
        z-index: 0;
    }
    .card2 .talk_details .exit {
        margin-right: 0;
        z-index: 2;
    }
}
</style>