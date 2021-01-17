<template>
    <div class="card4">
        <button class="exit"></button>
        <h1 class="heads_up">Heads up!</h1>
        <p class="message">You’re being redirected to the registration website.</p>
        <button class="lets_go">Let's go! ></button>
    </div>
</template>

<script>
export default {
    name: "Card4"
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

.card4 {
    display: flex;
    flex-direction: column;
    margin: auto;
    border: 1px solid;
    border-radius: 3px;
    width: 480px;
}
.card4 .exit {
    align-self: flex-end;
    width: 24px;
    height: 24px;
    border: none;
    background: url(../assets/icons/exit.svg);
    box-shadow: none;
    cursor: pointer;
    outline: none;
    margin: 10px 10px -10px 0;
}
.card4 .heads_up {
    font-family: "objectivity";
    font-size: 28px;
    color: #F46E26;
    margin: 6px 0 16px 40px;
}
.card4 .message {
    font-family: "inter";
    font-size: 16px;
    margin: 0 0 32px 40px;
}
.card4 .lets_go {
    width: 138px;
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
    margin: 0 0 35px 40px;
    cursor: pointer;
    outline: none;
}
</style>