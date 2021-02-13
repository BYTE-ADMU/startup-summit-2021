<template>
<div class="page-container">
    <div class="what-is-sus">
        <div class="text">
            <h1>What is Startup Summit?</h1>
            <p>The Startup Summit is a 3-day online tech conference that amasses a community of diverse personalities creating groundbreaking innovations. Students, storytellers, and startups cross paths and gather together in this event to build on each other’s futures and become catalysts for impactful change.</p>
            <a href="" class="learn-more"><PrimaryBtn>Learn more<Chevron id="primary-svg"/></PrimaryBtn></a>
        </div>
        <img src="../../assets/what_is_sus_poster.svg" class="picture" alt="start up summit poster">
    </div>
</div>
</template>

<script>
import PrimaryBtn from "../PrimaryBtn.vue"
import Chevron from "../Chevron.vue"

export default {
    name: "WhatIsSus",
    components: {
        PrimaryBtn,
        Chevron
    }
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

.page-container{
    background-color: #fcfcfc;
    border: 1px solid #fcfcfc; 
    width: 100%;
    height: 100%;
}

/*Applying flex box*/
.what-is-sus {
    display: flex;
    flex-direction: row;
    margin: 50px 0 120px 144px;
    background-color: #fcfcfc;
}

/*What is sus section*/
.what-is-sus .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    margin: 140px 120px 0 0;
    line-height: 26px;
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
    margin-top: 32px;
    font-family: "Inter";
}
.what-is-sus .text .learn-more #test {
    font-size: 50px;
}
.what-is-sus .picture {
    width: 32.222vw;
    height: 42.222vw;
    border-radius: 0px;
    background-color: #fcfcfc;
    z-index: 2;
}
#primary-svg{
    background: transparent;
    margin-left: 8px!important;
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
@media (max-width: 1100px) {
    .what-is-sus .text {
        transform: translate(-10%,0%);
    }
    .what-is-sus .picture{
        transform: translate(-5%,0%);
    }
}

/*Tablet view*/
@media (min-width: 768px) and (max-width: 1024px) {
    /*What is sus section*/
    .what-is-sus {
        margin: 0 104px 100px 40px;
        padding: 0;
    }
    .what-is-sus .picture {
        display: none;
    }
    .what-is-sus .text {
        margin: 58px 56px 74px 0;
        transform: translate(-0%,0%);
    }
    .what-is-sus .text p {
        width: 74vw;
    }
}

/*Mobile view*/
@media (max-width: 767px) {
    /*what is sus section*/
    .what-is-sus {
        margin: 0 16px 88px 10px;
    }
    .what-is-sus .picture {
        display: none;
    }
    .what-is-sus .text {
        margin-top: 0;
        transform: translate(-0%,0%);
    }
    .what-is-sus .text p{
        margin: 8px 0 32px 0;
        width: 90vw;
        font-size: 16px;
    }
    .what-is-sus .text h1 {
        font-size: 20px;
    }
}
</style>