<template>
<button id="primary">
  <slot>Button</slot>
</button>
</template>

<script>
export default {
    name: 'Primary-Button'
}
</script>

<style scoped>
@font-face {
  font-family: "Inter-SemiBold";
  src: url('./../fonts/Inter-SemiBold.ttf') format("truetype");
}
*{
    font-family: 'Inter', sans-serif;
    padding: 8px 24px;
    border: 0px;
    border-radius: 4px!important;
    font-family: 'Inter-SemiBold';
    text-decoration: none!important;
    cursor: pointer;
    font-size: 16px;
    line-height: 26px;
}

#primary{
    color: #f8f8f8;
    background: linear-gradient(90deg,#c45af4,#7163de 33%,#c45af4);
    background: linear-gradient(93.62deg, #F2B430,#F46E26 33%, #F2B430);
    background-size: 300% auto;
    text-decoration: none;
    transition: background-position .2s ease-in-out;
    transition-property: background-position;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    cursor: pointer;
    border: 0;
}
#primary:hover:not([disabled]){
    background-position: -66%;
    background-position-x: -66%;
    background-position-y: center;
}
#primary:active:not([disabled]){
    border: 1px solid #E75E25;
    color: #E75E25;
    color: #f8f8f8;
    box-sizing: border-box;
    background: #E75E25;
}
#primary:disabled{
    background: #DCDCDC;
    box-shadow: none;
    cursor: not-allowed;
}
</style>