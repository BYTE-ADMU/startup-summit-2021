<template>
<button id="tertiary">
  <slot>Button</slot>
</button>
</template>

<script>
export default {
    name: 'Tertiary-Button'
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
    background-color: white;
}

#tertiary{
  color: #F46E26;
  background-color: white;
}
#tertiary:hover:not([disabled]){
  background: linear-gradient(93.62deg, #F2B430 0%, #F46E26 99.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #F2B430;
}
#tertiary:active:not([disabled]){
  background: #E75E25;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #E75E25;
}
#tertiary:disabled{
  box-sizing: border-box;
  color: #DCDCDC;
  cursor: not-allowed;
}
</style>