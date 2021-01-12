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
    font-size: 16px;
    line-height: 26px;
    padding: 8px 24px;
    border: 0px;
    border-radius: 4px!important;
    font-family: 'Inter-SemiBold';
    text-decoration: none!important;
    cursor: pointer;
    background-color: white;
}
#tertiary{
  background: #F46E26;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#tertiary:hover{
  background: linear-gradient(93.62deg, #F2B430 0%, #F46E26 99.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#tertiary:active{
  background: #E75E25;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
#tertiary:disabled{
  background: #dcdcdc;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: not-allowed;
}
</style>