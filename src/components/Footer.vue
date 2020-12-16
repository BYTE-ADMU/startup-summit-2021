<template>
    <div class="footer-wrapper">
        <center><div class="logo-wrapper">
            <img src="@/assets/suslogo.png">
        </div></center>
        hi
    </div>
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style scoped>
@font-face {
  font-family: "Objectivity-Bold";
  src: url('./../fonts/Objectivity-Bold.otf') format("opentype");
}
*{
    font-family: "Objectivity-Bold";
}
.footer-wrapper{
    background-color: #f8f8f8;
    color: black;
    width: 100%;
    height: 400px;
    overflow: hidden;
    z-index: 10;
    display: flex;
    flex-direction: column;
}
.logo-wrapper{
    padding-top: 5%;
    width: 285px;
    height: 72px;
}
.logo-wrapper img{
    width: 100%;
    height: 100%;
}
</style>