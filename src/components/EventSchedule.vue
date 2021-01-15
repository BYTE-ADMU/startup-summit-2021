<template>
    <div class="event_schedule">
        <h1 class="title">Event Schedule</h1>
        <div class="day_buttons">
            <!--The div was made to center the button yusing flex wrap-->
            <div class="container1"><button class="day1">Day 1</button></div>
            <div class="container2"><button class="day2">Day 2</button></div>
            <div class="container3"><button class="day3">Day 3</button></div>
        </div>
        <div class="day_output"><!--Var here-->Day 1</div>
        <div class="date"><!--Var here-->April 16, 2020</div>
        <div><!--This div is a place holder for the cards component--></div>
    </div>
</template>

<script>
export default {
    name: "EventSchedule"
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

/*Event section*/
/*Setting flex box*/
.event_schedule {
    display: flex;
    flex-direction: column;
    align-items: center;
    /*already added margin bottom for what is sus sec so no need for this*/
    margin: 0 16px 24px 24px;
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
.event_schedule .day_buttons .day1, .day2 {
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    color: rgba(244, 110, 38, 1);
    border: 1.5px solid #F46E26;
    padding: 8px 24px;
    background-color: white;
    margin: 0 16px 0 16px;
    border-radius: 4px;
    width: 96px;
    height: 42px;
}
.event_schedule .day_buttons div {
    border: none;
    padding: 0;
    background-color: white;
    margin: 0 16px 0 16px;
    border-radius: 4px;
}
.event_schedule .day_buttons .day3 {
    font-family: "inter_bold";
    font-size: 16px;
    font-weight: bold;
    color: rgba(244, 110, 38, 1);
    background-color: white;
    border: 1.5px solid #F46E26;
    border-radius: 4px;
    margin: 0;
    padding: 8px 24px;
    width: 96px;
    height: 42px;
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
    .event_schedule .day_buttons .day1 {
        margin-left: auto;
        margin-right: -10px;
    }
    .event_schedule .day_buttons .day2 {
        margin-right: auto;
        margin-left: 2px;
    }
    .event_schedule .day_buttons .day3 {
        margin: 24px auto 0 auto;
    }

    /*Fix font*/
    .event_schedule .date {
        font-size: 24px;
    }
}
</style>