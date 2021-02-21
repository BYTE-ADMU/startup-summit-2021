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
    background-color: #F46E26;
    color: #f8f8f8;
    box-shadow: black!important;
    box-shadow: 50px black;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);   
}
#primary:hover:not([disabled]){
    background: linear-gradient(93.62deg, #F2B430 0%, #F46E26 99.35%);
    box-shadow: black!important;
    box-shadow: 50px black;
    box-shadow: 0px 4px 4px rgba(244, 110, 38, 0.25);
}
#primary:active:not([disabled]){
    background: #E75E25;
}
#primary:disabled{
    background: #DCDCDC;
    box-shadow: none;
    cursor: not-allowed;
}

</style>