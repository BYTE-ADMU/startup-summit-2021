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
    padding: 8px 24px;
    border: 0px;
    border-radius: 4px!important;
    font-family: 'Inter-SemiBold';
    text-decoration: none!important;
    cursor: pointer;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 26px;
}
#secondary{
    border: 1px solid #F46E26;
    color: #F46E26;
    background: #fcfcfc;
    transition: background 200ms ease-in-out;
    transition: color 200ms ease-in-out;
}
#secondary:hover:not([disabled]){
    background: #F46E26;
    color: #f8f8f8;
}
#secondary:active:not([disabled]){
    border: 1px solid #E75E25;
    color: #E75E25;
    box-sizing: border-box;
    background: #fcfcfc;
}
#secondary:disabled{
    border: 1px solid #DCDCDC;
    box-sizing: border-box;
    color: #DCDCDC;
    cursor: not-allowed;
}
</style>