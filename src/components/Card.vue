<template>
    <div class="card">
        <div class="time">
            <h1><!--var here-->00:00</h1>
            <p><strong><!--var here-->GMT+8</strong></p>
        </div>
        <div class="talk_details">
            <h3 class="talk_name"><!--var here-->Name of Talk</h3>
            <p class="talk_description"><!--var here-->Talk description will be here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
            <div class="speaker">
                <div class="speaker_details">
                    <div class="picture"></div>
                    <div class="name">Bea Baker</div>
                </div>
                <button class="button"><!--add clarz's button here-->></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card"
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
.card {
    display: flex;
    flex-direction: row;
    width: 568px;
    margin: auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0;
}
.card .time {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
.card .talk_details {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 26px 39px 19px 0;
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
.time h1{
    font-family: "objectivity";
    color: rgba(244, 110, 38, 1);
    margin: 105px 50px 0px 33px;
}
.time p {
    font-family: "inter_bold";
    font-size: 14px;
    font-weight: bold;
    margin: 0 72px 122px 60px;
}
.talk_details .talk_name {
    font-family: "inter_bold";
    color: rgba(244, 110, 38, 1);
    margin: 0 0 8px 0;
}
.talk_details .talk_description {
    font-family: "inter";
    line-height: 26px;
    font-size: 16px;
    margin: 0 0 19px 0;
} 
.talk_details .speaker .picture {
    background-image: url(../assets/logo.png);
    background-size: 100%;
    width: 48px;
    height: 48px;
    border: solid;
    border-radius: 25px;
    background-repeat: no-repeat;
    margin: 0 16px 0 0;
}
.talk_details .speaker .name {
    font-family: "inter_bold";
    font-size: 16px;
    margin: 15px 130px 34px 0;
}
.talk_details .speaker .button {
    font-family: "inter";
    margin: 9px -10px 0 0;
    height: 32px;
    width: 64px;
    border-radius: 4px;
    padding: 8px, 24px, 8px, 24px;
    border: 1px solid #F46E26;
    box-sizing: border-box;
    border-radius: 4px;
    color: #F46E26;
    background-color: white;
    cursor: pointer;
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