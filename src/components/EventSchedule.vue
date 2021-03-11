<template>
    <div class="event_schedule">
        <h1 class="title">Event Schedule</h1>
        <div class="day_buttons">
            <!--The div was made to center the button yusing flex wrap-->
            <div class="container1">
                <PrimaryBtn class="day1_clicked" v-on:click="click = 1, buttons()">Day 1</PrimaryBtn>
                <SecondaryBtn class="day1_unclicked" v-on:click="click = 1, buttons()">Day 1</SecondaryBtn>
            </div>
            <div class="container2">
                <SecondaryBtn class="day2_unclicked" v-on:click="click = 2, buttons()">Day 2</SecondaryBtn>
                <PrimaryBtn class="day2_clicked" v-on:click="click = 2, buttons()">Day 2</PrimaryBtn>
            </div>
            <div class="container3">
                <SecondaryBtn class="day3_unclicked" v-on:click="click = 3, buttons()">Day 3</SecondaryBtn>
                <PrimaryBtn class="day3_clicked" v-on:click="click = 3, buttons()">Day 3</PrimaryBtn>
            </div>
        </div>
        <div class="day_output">{{ day.daynum }}</div>
        <h2 class="date">{{ day.date }}</h2>
        <div><!--This div is a place holder for the cards component--></div>
    </div>
</template>

<script>
import PrimaryBtn from "./PrimaryBtn.vue"
import SecondaryBtn from "./SecondaryBtn.vue"

export default {
    name: "EventSchedule",
    components: {
        PrimaryBtn,
        SecondaryBtn
    },
    data() {
        return {
            click: 1,
            day: {
                daynum: "Day 1",
                date: "April 16, 2020"
            }
        }
    },
    methods: {
        buttons(choice, date) {
            var first_clicked = document.getElementsByClassName("day1_clicked");
            var second_clicked = document.getElementsByClassName("day2_clicked");
            var third_clicked = document.getElementsByClassName("day3_clicked");
            var first_unclicked = document.getElementsByClassName("day1_unclicked");
            var second_unclicked = document.getElementsByClassName("day2_unclicked");
            var third_unclicked = document.getElementsByClassName("day3_unclicked");
            choice = this.click;
            this.$emit("transfer-click", choice);
            if (this.click === 1) {
                this.day.daynum = "Day 1";
                this.day.date = "April 16, 2020";

                //unclick styling for unclicked buttons
                first_unclicked[0].style.display = "none";
                second_clicked[0].style.display = "none";
                third_clicked[0].style.display = "none";

                //click styling for button
                first_clicked[0].style.display = "block";
                second_unclicked[0].style.display = "block";
                third_unclicked[0].style.display = "block";
            }
            else if (this.click === 2) {
                this.day.daynum = "Day 2";
                this.day.date = "April 17, 2020";

                //unclick styling for unclicked buttons
                second_unclicked[0].style.display = "none";
                first_clicked[0].style.display = "none";
                third_clicked[0].style.display = "none";

                //click styling for button
                second_clicked[0].style.display = "block";
                first_unclicked[0].style.display = "block";
                third_unclicked[0].style.display = "block";
            }
            else if (this.click === 3) {
                this.day.daynum = "Day 3";
                this.day.date = "April 18, 2020";

                //unclick styling for unclicked buttons
                third_unclicked[0].style.display = "none";
                first_clicked[0].style.display = "none"
                second_clicked[0].style.display = "none"

                //click styling for button
                third_clicked[0].style.display = "block";
                first_unclicked[0].style.display = "block";
                second_unclicked[0].style.display = "block";
            }
            date = this.day.date;
            this.$emit("transfer-date", date);
        }
    }
}
</script>

<style scoped>
/*Fonts*/
@font-face {
    font-family: "objectivity_ebold";
    src: url(../assets/fonts/Objectivity/objectivity.extra-bold.otf);
}
@font-face {
    font-family: "objectivity_bold";
    src: url(../assets/fonts/Objectivity/objectivity.bold.otf);
}
@font-face {
    font-family: "inter";
    src: url(../assets/fonts/Inter/Inter-Regular.ttf);
}
@font-face {
    font-family: "inter_bold";
    src: url(../assets/fonts/Inter/Inter-Bold.ttf)
}

* {
    background-color: #fcfcfc;
}

/*Event section*/
/*Setting flex box*/
.event_schedule {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: #fcfcfc;
    border-width: 0 16px 24px 24px;
}
.event_schedule .day_buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 32px;
}

/*Event schedule*/
/*general styling*/
.event_schedule .title {
    font-family: "objectivity_ebold";
    font-size: 28px;
    margin-bottom: 24px;
}
.event_schedule .day_buttons .container1, .container2, .container3 {
    padding: 0;
    margin: 0;
}
.event_schedule .day_buttons .day1_clicked {
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    padding: 8px 24px;
    margin: 0 16px 0 16px;
    width: 96px;
    height: 42px;
}
.event_schedule .day_buttons .day1_unclicked {
    display: none;
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    padding: 8px 24px;
    margin: 0 16px 0 16px;
    width: 96px;
    height: 42px;
}
.event_schedule .day_buttons .day2_clicked {
    display: none;
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    padding: 8px 24px;
    margin: 0 16px 0 16px;
    border-radius: 4px;
    width: 96px;
    height: 42px;
}
.event_schedule .day_buttons .day2_unclicked {
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    padding: 8px 24px;
    margin: 0 16px 0 16px;
    border-radius: 4px;
    width: 96px;
    height: 42px;
}
.event_schedule .day_buttons .day3_clicked {
    display: none;
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    padding: 8px 24px;
    width: 96px;
    margin: 0;
    height: 42px;
}
.event_schedule .day_buttons .day3_unclicked {
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    padding: 8px 24px;
    width: 96px;
    margin: 0;
    height: 42px;
}
.event_schedule .day_buttons div {
    border: none;
    padding: 0;
    background-color: white;
    margin: 0 16px 0 16px;
    border-radius: 4px;
}
.event_schedule .day_output {
    margin-bottom: 8px;
    font-weight: bold;
    font-family: "inter_bold";
    color: rgba(244, 110, 38, 1);
}
.event_schedule .date {
    margin-bottom: 24px;
    font-family: "objectivity_bold";
}
/*I made the mobile with 464px because the day output moves down at this width*/
/*I have to start styling here because the 3rd day button goes the to the 1st column*/
@media (max-width: 464px) {
    /*Styling containers of day buttons*/
    .event_schedule .day_buttons .container1 {
        width: 40%;
        display: flex;
        align-items: flex-end;
        padding: 0;
    }
    .event_schedule .day_buttons .container2 {
        width: 40%;
        display: flex;
        align-items: flex-start;
        padding: 0;
    }
    .event_schedule .day_buttons .container3 {
        width: 100%;
        display: flex;
    }

    /*fixing positioning of buttons*/
    .event_schedule .day_buttons .day1_clicked {
        margin-left: auto;
        margin-right: -10px;
        width: 95px;
    }
    .event_schedule .day_buttons .day1_unclicked {
        margin-left: auto;
        margin-right: -10px;
        width: 95px;
    }
    .event_schedule .day_buttons .day2_clicked {
        margin-right: auto;
        margin-left: 2px;
        width: 95px;
    }
    .event_schedule .day_buttons .day2_unclicked {
        margin-left: auto;
        margin-left: 2px;
        width: 95px;
    }
    .event_schedule .day_buttons .day3_clicked {
        margin: 24px auto 0 auto;
        width: 95px;
        padding: 7px 23px;
    }
    .event_schedule .day_buttons .day3_unclicked {
        margin: 24px auto 0 auto;
        width: 95px;
        padding: 7px 23px;
    }
    /*Fix font*/
    .event_schedule .date {
        font-size: 24px;
    }

    .event_schedule .title {
    font-family: "objectivity_ebold";
    font-size: 20px;
    line-height: 40px;
    margin-bottom: 16px;
}
}
</style>