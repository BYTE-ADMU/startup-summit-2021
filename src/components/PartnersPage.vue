<template>

<!-- nav -->

<div class="wrapper">
  <div class="whole-container">
    <div class="header">
      <h2 class="title">Community Partners</h2>
    </div> 
    <!--Terabyte -->
  <div class="container">
    <div class="container-items">
      <li class="container-title">TeraByte</li>
      <li class="title-body">We would like to thank:</li>
      <div class="company-logo-block">
        <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="terabyte-logo">
          <img src="../assets/kumu-logo.png" id="terabyte-logo">
          <img src="../assets/kumu-logo.png" id="terabyte-logo">
      </div>
      <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="terabyte-logo">
          <img src="../assets/kumu-logo.png" id="terabyte-logo">
          <img src="../assets/kumu-logo.png" id="terabyte-logo">
      </div> 
    </div>
    </div> 
  </div> 
<!-- Gigabyte -->
  <div class="container">
    <div class="container-items">
      <li class="container-title">GigaByte</li>
      <li class="title-body">We would like to thank:</li>
      <div class="company-logo-block">
        <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
       </div>
       <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
          <img src="../assets/kumu-logo.png" id="gigabyte-logo">
       </div> 
     </div>
    </div>  
  </div>
<!-- Megabyte -->
  <div class="container">
    <div class="container-items">
      <br>
      <br>
      <li class="container-title">MegaByte</li>
      <li class="title-body">We would like to thank:</li>
      <div class="company-logo-block">
        <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
       </div>
       <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
       </div> 
       <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
       </div>    
       <div class="company-logo-row">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
          <img src="../assets/kumu-logo.png" id="megabyte-logo">
       </div>            
     </div>
    </div>  
  </div>

<!--bg-->
  <div class="bg">
    <img src="../assets/top-right-bg.jpg" id="top-right-bg">
    <img src="../assets/top-left-bg.jpg" id="top-left-bg">
    <img src="../assets/bottom-right-bg.jpg" id="bottom-right-bg">
    <img src="../assets/bottom-left-bg.jpg" id="bottom-left-bg">

<!--circles-->
  <img src="../assets/circle1.jpg" id="circle1">
  <img src="../assets/circle2.jpg" id="circle2">
  <img src="../assets/circle3.jpg" id="circle3">
  <img src="../assets/circle4.jpg" id="circle4">
  <img src="../assets/circle5.jpg" id="circle5">

  </div>
<!-- footer -->
 </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
}
html, body {
  box-sizing:border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
}
/* Big divs */
.wrapper {
  width: 100vw;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.whole-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #f8f8f8;
  max-height: 760px;
  max-width: 1100px;
  margin-top: 96px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.container-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.company-logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0vh 10vw 4vh 10vw;
}

.company-logo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 3vh;

}

/* texts */
.title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
  margin-top: 120px;
}
.container-title {
  list-style: none;
  font-family: Objectivity;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 25px;
  padding-top: 56px;
  color: #000000;
}
.title-body {
  list-style: none;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  padding-top: 16px;
  padding-bottom: 32px;
  color: #000000;
}
/*company logos */
#terabyte-logo {
  width: auto;
  height: auto;
  max-width: 160px;
  max-height: 160px;
}
#gigabyte-logo {
  width: auto;
  height: auto;
  max-width: 120px;
  max-height: 120px;
  padding-bottom: 10px;
}
#megabyte-logo {
  width: auto;
  height: auto;
  max-width: 80px;
  max-height: 80px;
  padding-bottom: 10px;
}

/*bg*/
#top-right-bg {
  position: absolute;
  left: 976px;
  top: 359px;
  z-index: -1;
}
#top-left-bg {
  position: absolute;
  left: 0px;
  top: 908px;
  z-index: -1;
}
#bottom-right-bg {
  position: absolute;
  left: 926px;
  top: 2058px;
  z-index: -1;
}
#bottom-left-bg {
  position: absolute;
  left: 0px;
  top: 2363px;
  z-index: -1;
}
#circle1 {
  position: absolute;
  left: 1105px;
  top: 224px;
  z-index: -1;
}
#circle2 {
  position: absolute;
  left: 164px;
  top: 265px;
  z-index: -1;
}
#circle3 {
  position: absolute;
  left: 1150px;
  top: 1112px;
  z-index: -1;
}
#circle4 {
  position: absolute;
  left: 88px;
  top: 1832px;
  z-index: -1;
}
#circle5 {
  position: absolute;
  left: 1368px;
  top: 1592px;
  z-index: -1;
}
</style>