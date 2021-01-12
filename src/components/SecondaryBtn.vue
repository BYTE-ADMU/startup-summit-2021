<template>
<button id="secondary">
  <slot>Button</slot>
</button>
</template>

<script>
export default {
    name: 'Secondary-Button'
}
</script>

<style scoped>
@font-face {
  font-family: "Inter-SemiBold";
  src: url('./../fonts/Inter-SemiBold.ttf') format("truetype");
}
*{
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 26px;
    padding: 8px 24px;
    border: 0px;
    border-radius: 4px!important;
    font-family: 'Inter-SemiBold';
    text-decoration: none!important;
    cursor: pointer;
}
#secondary{
    border: 1px solid #F46E26;
    box-sizing: border-box;
    color: #F46E26;
    background-color: white;
}
#secondary:hover{
    background: linear-gradient(93.62deg, #F2B430 0%, #F46E26 99.35%);
}
#secondary:active{
    border: 1px solid #E75E25;
    box-sizing: border-box;
    color: #E75E25;
}
#secondary:disabled{
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    color: #DCDCDC;
}
</style>