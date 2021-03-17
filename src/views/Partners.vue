<template>
<div id="app">
  <div class="bg-image">
   <img src="../assets/partner-background.png" class = "bg-image">
  </div>

  <div class="header">
    <li class="title">Community Partners</li>
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

<!-- footer -->
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
* {
  margin: 0;
  padding: 0;
}
/* background div */
.bg-image {
  position: absolute;
  width: 100vw;
  height: 2492px;
  margin: 0;
  padding: 0;
  top:0px;
  left: 0px;
  border: transparent;
  z-index: 0;
}
/* divs */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  width: 100vw;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #f8f8f8;
  max-height: 760px;
  min-height: 616px;
  /* width: 960px; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 80px 120px 130px 120px;
}

.container-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
}
.company-logo-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.company-logo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px 50px 80px;
  width: 70vw;
}
/* texts */
.title {
  list-style: none;
  font-family: "objectivity";
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
  margin-top: 120px;
  z-index: 2;
}
.container-title {
  list-style: none;
  font-family: "objectivity";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 25px;
  padding-top: 40px;
  color: #000000;
  text-align: center;
}
.title-body {
  list-style: none;
  font-family: "inter";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  padding-top: 10px;
  padding-bottom: 50px;
  color: #000000;
  text-align: center;
}
/*company logos */
#terabyte-logo {
  width: auto;
  height: auto;
  max-width: 160px;
  max-height: 160px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
}
#gigabyte-logo {
  width: auto;
  height: auto;
  max-width: 120px;
  max-height: 120px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  margin: 0px 10px 0px 10px;
}
#megabyte-logo {
  width: auto;
  height: auto;
  max-width: 80px;
  max-height: 80px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  margin: 0px 10px 0px 10px;
}
</style>