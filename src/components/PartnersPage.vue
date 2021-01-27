<template>

    <h1>Community Partners</h1>

      <div class="container">
          <div class="TeraByte">
            <h2>TeraByte</h2>
            <h3>We would like to thank:</h3>

            <!-- partner logos 1-3-->
            <div class="logo_column">
              <div class="logos">
              <img src="#" alt="">            
              </div>
              <div class="logos">
                2
              </div> 
              <div class="logos">
                3
              </div>                                                         
            </div>

            <!-- partner logos 4-6-->
            <div class="logo_column">            
              <div class="logos">
                4
              </div>  
              <div class="logos">
                5
              </div> 
              <div class="logos">
                6
              </div>    
            </div>                                                     
          </div>
       </div>


      <div class="container">
          <div class="GigaByte">
            <h2>GigaByte</h2>
            <h3>We would like to thank:</h3>

            <div class="partner_logos">
              partners                                                                
            </div>
          </div>
      </div>

      <div class="container">
          <div class="MegaByte">
            <h2>MegaByte</h2>
            <h3>We would like to thank:</h3>

            <div class="partner_logos">
              partners                                                        
            </div>
          </div>
      </div>
      <div class="background-design">
        <img id="background" src="@/assets/partners-background.png">
      </div>


        <!--
        <div class="background-design">
        <img id="background" src="@/assets/PartnersBackground.png">

      <div class="circle-design">
        <img id="small-circle1" src="@/assets/small-circle.png">
        <img id="small-circle2" src="@/assets/small-circle.png">     
        <img id="vector1" src="@/assets/vector-1.png">       
        <img id="vector-2" src="@/assets/circledesign.png">
        <img id="vector-3" src="@/assets/circledesign.png">
        <img id="vector-4" src="@/assets/circledesign.png"> 
        -->       


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
.background-design img{
    position: fixed;
    z-index: 1!important;
}
#background {
  width: 100%;
  height: 100%;
  margin: 0px;
}


/*
.background-design img{
    position: relative;
    z-index: 999!important;
}
#background {
  width: 100%;
  height: 100%;
  margin: 0px;
}
body {
 min-height: 100%;
 min-width: 100%;
 background: url("../assets/partners-background.png") no-repeat center center fixed;
}

background:url("@assets/src/partners-background.png");


.circle-design img{
    position: relative;
    z-index: -1!important;
}

#small-circle1{
    width: 120px;
    height: 120px;
    transform: translate(-420%,-1250%);
}

#small-circle2{
    width: 120px;
    height: 120px;
    transform: translate(360%,-1275%);
}

#vector1{
    width: 500px;
    height: 600px;
    transform: translate(460%,-1375%);
}
*/

h1 {
font-family: Objectivity;
font-style: normal;
font-weight: 800;
font-size: 28px;
line-height: 40px;
margin-top: 60px;
margin-bottom: 60px;
text-align: center;
color: #000000;
}

h2 {
font-family: Objectivity;
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 24px;
margin-top: 35px;
text-align: center;
color: #000000;
}

h3 {
font-family: Inter;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #000000;
}

.container {
display: flex;
min-height: 20%;
width: 70%;
margin-left: auto;
margin-right: auto;
margin-bottom: 140px;
flex-direction: column;
background-color: #F8F8F8;
align-items: center;
z-index: 2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.container div {
  padding: 2em;
}

.partner_logos {
display: flex;
margin: 0 5px;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
background-color: #C4C4C4;
}

.logo_column {
display: flex;
flex-direction: row;
background-color: #C4C4C4;
margin-block-end: 30px;
}

.logos {
  display: flex;
  margin: 1px;
}

.logos > * {
  flex-basis: 100%;
  justify-content: space-between;
}


</style>
