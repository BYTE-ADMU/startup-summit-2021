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
#primary{
    background-color: #F46E26;
    color: white;
    padding: 8px 24px;
    font-size: 16px;
    line-height: 26px;
    border: 0px;
    border-radius:4px!important;
    box-shadow: black!important;
    box-shadow: 50px black;
    cursor: pointer;
    box-shadow: 0px 4px 20px rgba(244, 110, 38, 0.5);
    font-family: 'Inter-SemiBold';
    text-decoration: none!important;
}
#primary:hover{
    background: linear-gradient(93.62deg, #F2B430 0%, #F46E26 99.35%);
    box-shadow: black!important;
    box-shadow: 50px black;
    box-shadow: 0px 4px 4px rgba(244, 110, 38, 0.25);
    border-radius: 4px;
}
#primary:active{
    background: #E75E25;
    border-radius: 4px;
}
#primary:disabled{
    background: #DCDCDC;
    box-shadow: none;
}

</style>