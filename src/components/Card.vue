<template>
    <div class="card">
        <div class="time">
            <h1>{{ time }}</h1>
            <p><strong>GMT+8</strong></p>
        </div>
        <div class="talk_details">
            <h3 class="talk_name">{{ talk }}</h3>
            <p class="talk_description">{{ description }}</p>
            <div class="speaker">
                <div class="speaker_details">
                    <img v-bind:src="pic_url" alt="Speaker image" class="picture">
                    <div class="name">{{ speaker }}</div>
                </div>
                <SecondaryBtn class="button" v-on:click="toggleModal()"><Chevron id="svg"/></SecondaryBtn>
            </div>
        </div>
    </div>
</template>

<script>
import SecondaryBtn from "./SecondaryBtn.vue"
import Chevron from "./Chevron.vue"

export default {
    name: "Card",
    components: {
        SecondaryBtn,
        Chevron
    },
    props: {
        click: Number,
        speaker: String,
        description: String,
        talk: String,
        pic_url: String,
        time: String
    },
    methods: {
        toggleModal(showModal) {
            showModal = true;
            this.$emit("toggle-modal", showModal)
        }
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

/*apply flexbox*/
* {
    background-color: transparent;
}
#svg{
    transform: translate(0%,-65%);
}
.card {
    display: flex;
    flex-direction: row;
    width: 568px;
    margin: 0 8px 0 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0;
    background-color: #f8f8f8;
    z-index: 1;
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
.talk_details .talk_name {
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
.talk_details .speaker .picture {
    width: 48px;
    height: 48px;
    border: solid;
    border-radius: 25px;
    margin: 0 16px 0 0;
    overflow: hidden;
}
.talk_details .speaker .name {
    font-family: "inter_bold";
    font-size: 16px;
    margin: 15px 0 34px 0;
}
.talk_details .speaker .button {
    margin: 9px 36px 0 auto;
    height: 32px;
    width: 64px;
    padding: 8px, 24px, 8px, 24px;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
    outline: none;
}

@media (max-width: 426px) {
    /*reconfigure flex box to column*/
    .card {
        display: flex;
        flex-direction: column;
        width: 100vw;
    }
    .card .time {
        margin: 30.64px 25px 16px 24px;
    }
    .card .talk_details {
        margin: 0 25px 33.36px 24px; 
    }
    .card .talk_details .speaker {
        display: flex;
        flex-direction: column;
    }

    /*general styling*/
    .card .time h1 {
        margin: 0 176px 8px 0;
    }
    .card .time p {
        margin: 0 219px 0 0;
    }
    .card .talk_details .talk_name {
        margin: 0 0 16px 0;
    }
    .card .talk_details .talk_description {
        width: 80vw;
        line-height: 22px;
    }
}
</style>