<template>
    <div class="card">
        <div class="time">
            <h1>{{ time }}</h1>
            <p><strong>GMT+8</strong></p>
        </div>
        <div class="talk_details">
            <h3 class="panel_name">{{ panel }}</h3>
            <p class="talk_description">{{ description }}</p>
            <div class="speaker">
                <div class="speaker_details">
                    <img v-bind:src="pic_url1" class="picture1" alt="speaker img">
                    <img v-bind:src="pic_url2" class="picture2" alt="speaker img">
                    <img v-bind:src="pic_url3" class="picture3" alt="speaker img">
                </div>
                <SecondaryBtn class="button"><Chevron/></SecondaryBtn>
            </div>
        </div>
    </div>
</template>

<script>
import SecondaryBtn from "./SecondaryBtn.vue"
import Chevron from "./Chevron.vue"

export default {
    name: "Card2",
    components: {
        SecondaryBtn,
        Chevron
    },
    props: {
        click: Number,
        panel: String,
        description: String,
        pic_url1: String,
        pic_url2: String,
        pic_url3: String,
        time: String
    }
}
</script>

<style scoped>
/*fonts*/
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
* {
    background-color: transparent;
}

/*apply flexbox*/
.card {
    display: flex;
    flex-direction: row;
    width: 568px;
    margin: 0 8px 0 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0;
    background-color: #f8f8f8;
}
.card .time {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 33px;
    padding: 0;
}
.card .talk_details {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 26px 39px 19px 37px;
}
.card .talk_details .speaker {
    display: flex;
    flex-direction: row;
    margin: 0 24px 23px 0 0;
    padding: 0;
}
.card .talk_details .speaker .speaker_details {
    display: flex;
    flex-direction: row;
}

/*general styling*/
/*time section*/
.time h1{
    font-family: "objectivity";
    color: rgba(244, 110, 38, 1);
    margin: 105px auto 0px auto;
}
.time p {
    font-family: "inter_bold";
    font-size: 14px;
    font-weight: bold;
    margin: 0 auto 122px auto;
}

/*talk details*/
.talk_details .panel_name {
    font-family: "inter_bold";
    color: rgba(244, 110, 38, 1);
    margin: 0 0 8px 0;
    font-size: 20px;
}
.talk_details .talk_description {
    font-family: "inter";
    line-height: 26px;
    font-size: 16px;
    margin: 0 0 19px 0;
} 
.talk_details .speaker .picture1 {
    width: 48px;
    height: 48px;
    border: solid;
    border-radius: 25px;
    margin: 0 16px 0 0;
}
.talk_details .speaker .picture2 {
    width: 48px;
    height: 48px;
    border: solid;
    border-radius: 25px;
    margin: 0 16px 0 0;
}
.talk_details .speaker .picture3 {
    width: 48px;
    height: 48px;
    border: solid;
    border-radius: 25px;
    margin: 0 0 0 0;
}
.talk_details .speaker .button {
    margin: 9px 36px 0 auto;
    height: 32px;
    width: 64px;
    border-radius: 4px;
    padding: 8px, 24px, 8px, 24px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
}
</style>