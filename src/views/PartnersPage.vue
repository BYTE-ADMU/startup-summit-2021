<template>
<div class="wrapper1">
    <div class="header">
      <h2 class="title">Community Partners</h2>
    </div> 
    <!--Terabyte -->
  <div class="container">
    <div class="container-items">
      <div class="container-header">
      <li class="container-title">TeraByte</li>
      <li class="title-body">We would like to thank:</li>
      </div>
      <div class="company-logo-block">
        <div class="company-logo-row">
          <img src="../assets/partners/DLSU-englicom-logo.png" id="terabyte-logo">
          <img src="../assets/partners/BCG-logo.png" id="terabyte-logo">
          <img src="../assets/partners/tungkodph-logo.png" id="terabyte-logo">
      </div>
    </div>
    </div> 
  </div> 
<!-- Gigabyte -->
  <div class="container">
    <div class="container-items">
      <div class="container-header">
      <li class="container-title">GigaByte</li>
      <li class="title-body">We would like to thank:</li>
      </div>
      <div class="company-logo-block">
        <div class="company-logo-row">
          <img src="../assets/partners/ALTA-logo.png" id="gigabyte-logo">
          <img src="../assets/partners/ARCH-logo.png" id="gigabyte-logo">
          <img src="../assets/partners/DSC-logo.png" id="dsc-gigabyte-logo">
          <img src="../assets/partners/uxsoc-logo.png" id="usx-gigabyte-logo">
       </div>
     </div>
    </div>  
  </div>
<!-- Megabyte -->
  <div class="container">
    <div class="container-items">
      <div class="container-header">
      <li class="container-title">MegaByte</li>
      <li class="title-body">We would like to thank:</li>
      </div>
      <div class="company-logo-block">
        <div class="company-logo-row">
          <img src="../assets/partners/ama-logo.png" id="megabyte-logo">
          <img src="../assets/partners/meco-logo.png" id="megabyte-logo">
          <img src="../assets/partners/bluerep-logo.png" id="megabyte-logo">
          <img src="../assets/partners/the-butterfly-effect-ph-logo.png" id="megabyte-logo">
          <img src="../assets/partners/lemon-pop-logo.png" id="megabyte-logo">
       </div>
       <div class="company-logo-row">
          <img src="../assets/partners/ams-logo.png" id="megabyte-logo">
          <img src="../assets/partners/mayari-logo.jpeg" id="megabyte-logo">
          <img src="../assets/partners/dscd-logo.png" id="megabyte-logo">
          <img src="../assets/partners/witech-logo.png" id="megabyte-logo">
       </div>           
     </div>
    </div>  
  </div>
    <img src="../assets/partners/partner-background/circle1.svg" id="circle1">
    <img src="../assets/partners/partner-background/circle2.svg" id="circle2">
    <img src="../assets/partners/partner-background/circle3.svg" id="circle3">
    <img src="../assets/partners/partner-background/circle4.svg" id="circle4">
    <img src="../assets/partners/partner-background/circle4.svg" id="circle5"> 
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
  overflow:hidden;
}

@media screen and (min-width: 1068px) {
/* Big divs */
.wrapper1 {
  width: 100vw;
  height: 100%;
  margin: 0 0 60px 0;
  display: flex;
  background:none;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: #f8f8f8;
  max-width: 1100px;
  height: 38rem;
  margin-top: 96px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2;
}
.container-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #f8f8f8;
}
.container-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
}
.company-logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0vh 10vw 4vh 10vw;
  background-color: #f8f8f8;
}

.company-logo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  padding: 3vh;
  background-color: #f8f8f8;
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
  background-color: #f8f8f8;
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
  background-color: #f8f8f8;
}
/*company logos */
#terabyte-logo {
  max-width: 15rem;
  max-height: 15rem;
  padding: 4rem 0;
  background-color: #f8f8f8;
}
#gigabyte-logo {
  max-width: 9rem;
  max-height: 9rem;
  padding: 6rem 0;
  background-color: #f8f8f8;
}
#dsc-gigabyte-logo {
  max-width: 13rem;
  max-height: 13rem;
  padding: 6rem 0;
  background-color: #f8f8f8;
}
#usx-gigabyte-logo {
  max-width: 13rem;
  max-height: 8rem;
  padding: 6rem 0;
  background-color: #f8f8f8;
}
#megabyte-logo {
  max-width: 10rem;
  max-height: 5rem;
  padding: 1.5rem 0;
  background-color: #f8f8f8;
}

/*bg*/
#circle1 {
  position: absolute;
  left: 85%;
  top: 194px;
  z-index: 1;
}
#circle2 {
  position: absolute;
  left: 20%;
  top: 165px;
  z-index: 1;
}
#circle3 {
  position: absolute;
  left: 90%;
  top: 1000px;
  z-index: 1;
}
#circle4 {
  position: absolute;
  left: 5%;
  top: 1432px;
  z-index: 1;
}
#circle5 {
  position: absolute;
  left: 90%;
  top: 1692px;
  z-index: 1;
}
}
@media screen and (min-width: 768px) and (max-width: 1067px) {
/* Big divs */
.wrapper1 {
  width: 100vw;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 38rem;
  max-width: 1100px;
  margin-top: 96px;
  width: 90%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2;
}
.container-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.container-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  background-color: transparent;
}
.company-logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0vh 6vw 4vh 6vw;
  background-color: transparent;
}
.company-logo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  width: 100%;
  padding: 2.5vh;
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
  background-color: transparent;
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
  background-color: #f8f8f8;
}
/*company logos */
#terabyte-logo {
  width: auto;
  height: auto;
  max-width: 13rem;
  max-height: 13rem;
  padding: 4rem 0;
  background-color: #f8f8f8;
}
#gigabyte-logo {
  width: 7rem;
  height: 7rem;
  padding: 8rem 0;
  background-color: #f8f8f8;
}
#dsc-gigabyte-logo {
  max-width: 12rem;
  max-height: 12rem;
  padding: 6rem 0;
  background-color: #f8f8f8;
}
#usx-gigabyte-logo {
  max-width: 11rem;
  max-height: 7rem;
  padding: 6rem 0;
  background-color: #f8f8f8;
}
#megabyte-logo {
  max-width: 6rem;
  max-height: 6rem;
  padding: 1.5rem 0;
  background-color: #f8f8f8;
}

/*bg*/
#circle1 {
  position: absolute;
  left: 85%;
  top: 184px;
  z-index: 1;
}
#circle2 {
  position: absolute;
  left: 10%;
  top: 205px;
  z-index: 1;
}
#circle3 {
  position: absolute;
  left: 85%;
  top: 1340px;
  z-index: 1;
}
#circle4 {
  position: absolute;
  left: 0;
  top: 1860px;
  z-index: 1;
}
#circle5 {
  position: absolute;
  right: 0;
  top: 1960px;
  z-index: 1;
}
}
@media screen and (max-width: 768px) {
/* Big divs */
* {
  background-color: #FCFCFC;
}
.wrapper1 {
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
  background-color: transparent;
  max-height: 760px;
  max-width: 1100px;
  margin-top: 96px;
  width: 100%;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2;
}
.container-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  background-color: transparent;
}
.container-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.company-logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0vh 6vw 4vh 6vw;
  background-color: transparent;
}
.company-logo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.5vh;
  background-color: transparent;
}
/* texts */
.title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #000000;
  margin-top: 10rem;
}
.container-title {
  list-style: none;
  font-family: Objectivity;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 25px;
  padding-top: 4rem;
  color: #000000;
  background-color: transparent;
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
  background-color: transparent;
}
/*company logos */
#terabyte-logo {
  max-width: 12rem;
  max-height: 12rem;
  background-color: transparent;
}
#gigabyte-logo {
  max-width: 8rem;
  max-height: 8rem;
  padding-bottom: 0px;
  background-color: transparent;
}
#dsc-gigabyte-logo {
  max-width: 10rem;
  max-height: 10rem;
  padding: 6rem 0;
  background-color: transparent;
}
#usx-gigabyte-logo {
  max-width: 10rem;
  max-height: 6rem;
  padding: 5.5rem 0;
  background-color: transparent;
}
#megabyte-logo {
  max-width: 6rem;
  max-height: 6rem;
  padding-bottom: 40px;
  background-color: transparent;
}

/*bg*/
#circle1 {
  display: none;
  position: absolute;
  left: 1105px;
  top: 224px;
  z-index: 1;
}
#circle2 {
  display: none;
  position: absolute;
  left: 164px;
  top: 265px;
  z-index: 1;
}
#circle3 {
  display: none;
  position: absolute;
  left: 1150px;
  top: 1112px;
  z-index: 1;
}
#circle4 {
  display: none;
  position: absolute;
  left: 88px;
  top: 1832px;
  z-index: 1;
}
#circle5 {
  display: none;
  position: absolute;
  left: 88px;
  top: 1832px;
  z-index: 1;
}
@media screen and (max-width: 768px) {
/* Big divs */
* {
  background-color: #FCFCFC;
}
.wrapper1 {
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
  background-color: transparent;
  max-height: 760px;
  max-width: 1100px;
  margin-top: 96px;
  width: 100%;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 2;
}
.container-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  background-color: transparent;
}
.container-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.company-logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0vh 6vw 4vh 6vw;
  background-color: transparent;
}
.company-logo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.5vh;
  background-color: transparent;
}
/* texts */
.title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: #000000;
  margin-top: 10rem;
}
.container-title {
  list-style: none;
  font-family: Objectivity;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 5px;
  padding-top: 2rem;
  color: #000000;
  background-color: transparent;
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
  background-color: transparent;
}
/*company logos */
#terabyte-logo {
  max-width: 6rem;
  max-height: 6rem;
  background-color: transparent;
}
#gigabyte-logo {
  max-width: 4rem;
  max-height: 4rem;
  padding-bottom: 0px;
  background-color: transparent;
}
#dsc-gigabyte-logo {
  max-width: 4rem;
  max-height: 4rem;
  padding: 0rem 0;
  background-color: transparent;
}
#usx-gigabyte-logo {
  max-width: 4rem;
  max-height: 4rem;
  padding: 0rem 0;
  background-color: transparent;
}
#megabyte-logo {
  max-width: 3rem;
  max-height: 3rem;
  padding-bottom: 2rem;
  background-color: transparent;
}

/*bg*/
#circle1 {
  display: none;
  position: absolute;
  left: 1105px;
  top: 224px;
  z-index: 1;
}
#circle2 {
  display: none;
  position: absolute;
  left: 164px;
  top: 265px;
  z-index: 1;
}
#circle3 {
  display: none;
  position: absolute;
  left: 1150px;
  top: 1112px;
  z-index: 1;
}
#circle4 {
  display: none;
  position: absolute;
  left: 88px;
  top: 1832px;
  z-index: 1;
}
#circle5 {
  display: none;
  position: absolute;
  left: 88px;
  top: 1832px;
  z-index: 1;
}
}
}
</style>