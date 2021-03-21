<template>
    <div class="card">
        <div class="upper_dots">
            <div class="ellipse"></div>
            <div class="ellipse"></div>
            <div class="ellipse"></div>
        </div>
        <div class="text">Stay tuned, something's coming real soon.</div>
        <div class="lower_dots">
            <div class="ellipse"></div>
            <div class="ellipse"></div>
            <div class="ellipse"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ComingSoon"
}
</script>

<style scoped>
@font-face {
    font-family: "objectivity_ebold";
    src: url(../assets/fonts/Objectivity/objectivity.extra-bold.otf);
}
.card {
    display: flex;
    flex-direction: column;
    width: 568px;
    margin: 0 8px 0 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0;
    background-color: #f8f8f8;
    z-index: 1;
    height: 400px;
}
.upper_dots {
    display: flex;
    flex-direction: row;
    margin: 32px auto 52px auto;
}
.lower_dots {
    display: flex;
    flex-direction: row;
    margin: 52px auto 32px auto;
}
.ellipse {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #F46E26;
    margin-left: 8px;
    margin-right: 8px;
}
.text {
    display: flex;
    font-family: "objectivity_ebold";
    margin: auto;
    text-align: center;
    font-size: 28px;
    width: 363px;
}

@media (max-width: 768px) {
    .card {
        width: 100%;
    }
    .text {
    font-family: "objectivity_ebold";
    margin: auto;
    text-align: center;
    font-size: 20px;
    max-width: 300px;
}
}
</style>