<template>
    <div class="what-is-sus">
        <div class="text">
            <h1>What is Startup Summit?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <button class="learn-more" type="button">Learn more</button>
        </div>
        <div class="picture"></div>
    </div>
</template>

<script>
export default {
    name: "WhatIsSus"
}
</script>

<style scoped>
@font-face {
    font-family: "Inter";
    src: url("../../assets/fonts/Inter-Regular.ttf");
}

@font-face {
    font-family: "Objectivity";
    src: url("../../assets/fonts/objectivity.extra-bold.otf");
}

/*Applying flex box*/
.what-is-sus {
    display: flex;
    flex-direction: row;
    margin: 50px 0 10px 144px;
}

/*What is sus section*/
.what-is-sus .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 120px 120px 0 0;
}
.what-is-sus .text h1 {
    color: #2C2C2C;
    font-family: "Objectivity";
    margin: 0;
    padding: 0;
}
.what-is-sus .text p {
    width: 40vw;
    font-family: "Inter";
    margin: 16px 0 0 0;
}
.what-is-sus .text .learn-more {
    background-color: rgba(244, 110, 38, 1);
    border-color: rgba(244, 110, 38, 1);
    color: white;
    border-radius: 4px;
    border: none;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    font-family: "Inter";
    padding: 8px 24px;
    font-weight: 700;
    line-height: 26px;
    font-style: normal;
    margin-top: 32px;
    cursor: pointer;
    outline: none;
}
.what-is-sus .picture {
    width: 24.167vw;
    height: 31.667vw;
    border-radius: 0px;
    background-color: #C4C4C4;
}

/*wide screen*/
@media (min-width: 1920px) {
    /*What is sus section*/
    .what-is-sus .text {
        margin: 200px 169px 200px 200px;
    }
    .what-is-sus .text p {
        width: 29.583vw;
    }
    .what-is-sus .picture {
        margin-right: 311px;
    }
}

/*Tablet view*/
@media (min-width: 768px) and (max-width: 1024px) {
    /*What is sus section*/
    .what-is-sus {
        margin: 251.35px 104px 120px 40px;
        padding: 0;
    }
    .what-is-sus .picture {
        display: none;
    }
    .what-is-sus .text {
        margin: 58px 56px 74px 0;
    }
    .what-is-sus .text p {
        width: 74vw;
    }
}

/*Mobile view*/
@media (max-width: 767px) {
    /*what is sus section*/
    .what-is-sus {
        margin: 109.95px 16px 88px 10px;
    }
    .what-is-sus .picture {
        display: none;
    }
    .what-is-sus .text p{
        margin: 8 0 32 0;
        width: 90vw;
        font-size: 16px;
    }
    .what-is-sus .text h1 {
        font-size: 20px;
    }
}
</style>