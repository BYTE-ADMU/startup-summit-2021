<template>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet">

  <nav>
    <div class="sus-logo">
      <img src="@/assets/logo.png">
    </div>
    
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Startups</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Partners</a></li>
      <li><a href="#">FAQs</a></li>
    </ul>

    <div class="nav-button">Register</div>
  </nav>
</template>


<!-- js portion -->
<script>
export default {
  name: 'Navbar'
  }
</script>


<!-- css portion -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  min-height: 10vh; /* ask to pick from 8-10vh */
  background-color: #F8F8F8;
  font-family: 'Inter', sans-serif;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.sus-logo {
  align-items: left;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 35%;
  flex-wrap: nowrap;
}

.nav-links li {
  list-style: none;
}

.nav-links a{
  color: #2C2C2C;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700px;
}

.nav-button {
  padding-top: 32px;
}

.nav-button {
  background-color: #F46E26;
  color:#FFFFFF;
  padding: 8px 24px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 500px;
  border: 0px;
  border-radius:4px!important;
  box-shadow: black!important;
  box-shadow: 50px black;
  cursor: pointer;
  box-shadow: 0px 0px 15px rgba(255,151,79,0.8);
}
/* css when buttons are clicked */
.nav-links a:hover {
  color: #F46E26;
}
.nav-links a:active {
  color: #F46E26;
}

/* end of css clicked buttons */

@media screen and (max-width:1024px){
    .nav-links{
    width: 40%;
  }
}

@media screen and (max-width:768px){
  .nav-links{
    position: absolute;
    display: flex;
    right: 0px;
    height: 92vh;
    top: 10vh;
  }
}
</style>