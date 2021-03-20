<template>
    <div class="sus_exhibit">
        <button class="exit" v-on:click="exitButton"></button>
        <h1 class="exhibit_title"><strong>{{ exhibit }}</strong></h1>
        <p class="date">{{ date }}, {{ time }} GMT+8</p>
        <div class="startups">
            <div class="col1">
                <div class="startup_1">
                    <img v-bind:src="img1" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup1 }}</p>
                        <p class="sched">{{ sched1 }}</p>
                    </div>
                </div>
                <div class="startup_2">
                    <img v-bind:src="img2" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup2 }}</p>
                        <p class="sched">{{ sched2 }}</p>
                    </div>
                </div>
                <div class="startup_3">
                    <img v-bind:src="img3" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup3 }}</p>
                        <p class="sched">{{ sched3 }}</p>
                    </div>
                </div>
                <div class="startup_4">
                    <img v-bind:src="img4" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup4 }}</p>
                        <p class="sched">{{ sched4 }}</p>
                    </div>
                </div>
            </div>
            <div class="col2">
                <div class="startup_5">
                    <img v-bind:src="img5" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup5 }}</p>
                        <p class="sched">{{ sched5 }}</p>
                    </div>
                </div>
                <div class="startup_6">
                    <img v-bind:src="img6" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup6 }}</p>
                        <p class="sched">{{ sched6 }}</p>
                    </div>
                </div>
                <div class="startup_7">
                    <img v-bind:src="img7" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup7 }}</p>
                        <p class="sched">{{ sched7 }}</p>
                    </div>
                </div>
                <div class="startup_8">
                    <img v-bind:src="img8" alt="Startup image" class="pic">
                    <div class="details">
                        <p class="startup_name">{{ startup8 }}</p>
                        <p class="sched">{{ sched8 }}</p>
                    </div>
                </div>
            </div>
        </div>
        <PrimaryBtn class="watch_now">Watch Now <Chevron/></PrimaryBtn>
    </div>
</template>

<script>
import PrimaryBtn from "./PrimaryBtn.vue"
import Chevron from "./Chevron.vue"

export default {
    name: "ExhibitModal",
    components: {
        PrimaryBtn,
        Chevron
    },
    props: {
        exhibit: String,
        date: String,
        time: String,
        img1: String,
        img2: String,
        img3: String,
        img4: String,
        img5: String,
        img6: String,
        img7: String,
        img8: String,
        startup1: String,
        startup2: String,
        startup3: String,
        startup4: String,
        startup5: String,
        startup6: String,
        startup7: String,
        startup8: String,
        sched1: String,
        sched2: String,
        sched3: String,
        sched4: String,
        sched5: String,
        sched6: String,
        sched7: String,
        sched8: String
    },
    methods: {
        exitButton(exit) {
            exit=false
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

/*Apply flexbox*/
.sus_exhibit {
    display: flex;
    flex-direction: column;
    width: 864px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    border: none;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fcfcfc;
}
.sus_exhibit .startups {
    display: flex;
    flex-direction: row;
    margin: 0 0 40px 80px;
} 
.sus_exhibit .startups .col1 {
    display: flex;
    flex-direction: column;
}
.sus_exhibit .startups .col2 {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
}
.startup_1, .startup_2, .startup_3, .startup_4, .startup_5, .startup_6, .startup_7, .startup_8 {
    display: flex;
    flex-direction: row;
}

/*General styling*/
.sus_exhibit .exhibit_title {
    font-family: "objectivity";
    font-size: 28px;
    color: #F46E26;
    margin: 0 0 0 80px;
    line-height: 40px;
}
.sus_exhibit .date {
    font-family: "inter_bold";
    font-size: 16px;
    color: #F46E26;
    margin: 0 0 40px 80px;
    line-height: 26px;
}
.sus_exhibit .exit {
    align-self: flex-end;
    width: 24px;
    height: 24px;
    border: none;
    background: url(../assets/icons/exit.svg);
    box-shadow: none;
    cursor: pointer;
    outline: none;
    margin: 16px 16px 0 0;
}
.pic {
    width: 64px;
    height: 64px;
    border-radius: 40px;
    border: solid 1px;
    margin: 12px 16px 12px 0;
}
.startup_name {
    position: relative;
    top: 20px;
    font-family: "inter_bold";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
}
.sched {
    position: relative;
    top: 20px;
    font-family: "inter";
    font-style: normal;
    font-weight: 400;
    color: black;
    font-size: 16px;
    line-height: 26px;
    margin: 0 130px 0 0;
}
.sus_exhibit .watch_now {
    width: 162px;
    height: 42px;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    padding: 8px 24px;
    margin: 0 0 78px 80px;
    cursor: pointer;
    outline: none;
}

/*Tablet*/
@media (min-width: 763px) and (max-width: 1024px) {
    .sus_exhibit {
        width: 89.58vw;
    }
    .sus_exhibit .startups .col2 {
        margin-left: 0;
    }
}

/*Mobile*/
@media (max-width: 763px) {
    .sus_exhibit {
        width: 82.5vw;
    }
    .sus_exhibit .startups .col2 {
        display: none
    }
}
@media (max-width: 430px) {
    .sus_exhibit {
        width: 82.5vw;
    }
    .sus_exhibit .exhibit_title, .sus_exhibit .date, .sus_exhibit .startups, .sus_exhibit .watch_now {
        margin-left: 35px
    }
    .sus_exhibit .exhibit_title {
        margin-right: 50px;
    }
    .sus_exhibit .startups .col2 {
        display: none;
    }
}
</style>