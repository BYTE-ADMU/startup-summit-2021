<template>
<div id="app">
  <nav :style="navHome">
    <div class="nav-content">
      <div id="nav-brand">
        <router-link to="/">
          <img
            alt="Start Up Summit Logo"
            id = "sus-logo"
            :src="require('@/assets/suslogo.png')"
          />
        </router-link>
      </div>

      <div id="burger-bg"></div>
      <div class="burger-button" v-on:click="showBurger()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    
      <ul
        v-if="isDesktop"
        id="desktop-nav"
      >
        <li>
            <router-link to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link to="/startups">
                Startups
            </router-link>
        </li>
        <li>
            <router-link to="/about">
                About
            </router-link>
        </li>
        <li>
            <router-link to="/partners">
                Partners
            </router-link>
        </li>
        <li>
            <router-link to="/faqs">
                FAQs
            </router-link>
        </li>
        <li>
            <a href="https://airtable.com/shrVSQ9HN8MwPq5ls" target="_blank" rel="noreferrer noopenner">
                <PrimaryBtn>
                    Register
                </PrimaryBtn>
            </a>
        </li>
      </ul>
    </div>
    <div v-if="!isDesktop" id="mobile-nav" class="slide">
      <ul class="d-flex f-even">
        <!-- <li>
          <img
            alt="Start Up Summit Logo"
            :src="require('@/assets/img/tayo-logo-black.png')"
          />
        </li> -->
        <li>
          <router-link to="/" v-on:click="showBurger(), handleScroll()">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/startups" v-on:click="showBurger(), handleScroll()">
            <span>Startups</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about" v-on:click="showBurger(), handleScroll()">
            <span>About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/partners" v-on:click="showBurger(), handleScroll()">
            <span>Partners</span>
          </router-link>
        </li>
        <li>
          <router-link to="/faqs" v-on:click="showBurger(), handleScroll()">
            <span>FAQs</span>
          </router-link>
        </li>
        <li>
           <a href="https://airtable.com/shrVSQ9HN8MwPq5ls">
                <PrimaryBtn>Register</PrimaryBtn>
            </a>
            
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
import PrimaryBtn from './PrimaryBtn.vue'
export default {
  name: 'Navbar',
  components: {
      PrimaryBtn
  },
  created() {
    window.addEventListener("resize", this.handleResizeNav);
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResizeNav);
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isHome: this.$route.path === "/" ? true : false,
      isDesktop: window.innerWidth >= 768 ? true : false,
      navHome: {
        background: "transparent",
        boxShadow: "none"
      },
    };
  },
  watch: {
    $route(to) {
      this.isHome = to.path === "/" ? true : false;
      (to.path === "/") ? document.querySelector('#sus-logo').style.visibility = 'hidden' : document.querySelector('#sus-logo').style.visibility = 'visible'
    //   (to.path === "/") ? this.navLink = {color: "#FAFAFA", transition: "color 0.25s ease-in-out"} : this.navLink = {color: "#333333", transition: "color 0.25s ease-in-out"}
    }
  },
  methods: {
    showBurger() {
      const mobileNav = document.querySelector("#mobile-nav");
      const burgerBtn = document.querySelector(".burger-button");
      if(mobileNav.style.top == '-100vh'){
        mobileNav.style.top = '0';
        burgerBtn.classList.add("open");
        document.querySelector(".black-overlay").style.display = "inline-block";
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector("body").style.overflow = "hidden";
      } 
      else {
        mobileNav.style.top = '-100vh';
        burgerBtn.classList.remove("open");
        document.querySelector(".black-overlay").style.display = "none";
        document.querySelector("html").style.overflow = "initial";
        document.querySelector("body").style.overflow = "initial";
      }
    },
    handleResizeNav() {
      if (window.innerWidth < 768) {
        this.isDesktop = false;
      } 
      else {
        this.isDesktop = true;
      }
    },
    handleScroll() {
      if ((this.isHome) & (this.isDesktop)) {
        if (window.scrollY > 20) {
          this.navHome = {
            background: "#FFFFFF",
            transition: "background 0.25s ease-in-out",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          };
          document.querySelector('#sus-logo').style.visibility = 'visible';
        } 
        else {
          this.navHome = {
            background: "transparent",
            transition: "background 0.25s ease-in-out",
            boxShadow: "none",
          };
          document.querySelector('#sus-logo').style.visibility = 'hidden';
        }
      }
      else if (this.isDesktop) {
        if (window.scrollY > 20) {
          this.navHome = {
              background: "#FFFFFF",
              transition: "background 0.25s ease-in-out",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          };
        } 
        else {
          this.navHome = {
            background: "transparent",
            transition: "background 0.25s ease-in-out",
            boxShadow: "none",
          };    
        }
      }
    }
  }
};
</script>

<style scoped>
 /* Import Fonts */
  @font-face {
    font-family: "Objectivity-ExtraBold";
    src: url('./../fonts/Objectivity-ExtraBold.otf') format("opentype");
  }
  @font-face {
    font-family: "Inter-Bold";
    src: url('./../fonts/Inter-Bold.ttf') format("truetype");
  }
  @font-face {
    font-family: "Inter-SemiBold";
    src: url('./../fonts/Inter-SemiBold.ttf') format("truetype");
  }
  @font-face {
    font-family: "Inter-Regular";
    src: url('./../fonts/Inter-Regular.ttf') format("truetype");
  }
  @font-face {
    font-family: "Inter-Light";
    src: url('./../fonts/Inter-Light.ttf') format("truetype");
}
  nav {
    width: 100%;
    position: fixed;
    z-index: 1000;
    /* background: #FFFFFF; */
    padding: 16px 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  
  nav img {
      width: 158px;
  }
  .nav-content {
      display: flex;
      background-color: transparent;
      justify-content: space-between;
      align-items: center;
  }
  .nav-brand{
    background-color: transparent !important;
    background: transparent !important;
    /* display: none; */
  }
  /* Desktop Nav */
  ul {
    list-style: none;
    letter-spacing: 0.02em;
    margin: 0;
    padding: 0;
  }
  #desktop-nav li {
    margin-left: 30px;
    display: inline;
  }
  #desktop-nav li > a {
    /* background: #FFFFFF; */
    color: #2C2C2C;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    font-family: "Inter";
  }

  #desktop-nav li > a > button {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    font-family: "Inter";
  }

  #desktop-nav li > a:hover,
  #desktop-nav li > a.router-link-active {
    color: #F46E26;
  }

  .nav-content {
    width: 95%;
    background-color: transparent;
  }

  #burger-bg {
    display: none;
  }

  /* Mobile Nav */
  .black-overlay {
    display: none;
    background: #2C2C2C;
    opacity: 0.4;
    position: absolute;
    height: 9999px;
    z-index: 10;
    width: 100%;
  }

  #mobile-nav {
    display: block;
    position: fixed;
    top: -100vh;
    width: 100%;
    left: 0;
    height: 100vh;
    background: #fcfcfc;
    transition: top 0.5s;
    /* transition: bottom 0.5s; */
  }
  #mobile-nav > ul {
    margin: 0;
    padding: 30px 0;
  }
  #mobile-nav li > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  #mobile-nav a > span {
    font-size: 16px;
    margin: 30px 0;
    font-weight: 700px;
  }
  #mobile-nav a > i,
  #mobile-nav a > span {
    color: #2C2C2C;
  }

  #mobile-nav li > .router-link-active > span {
    color: #EAA200;
    font-weight: 700;
    line-height: 24px;
  }

  #burger-bg {
    position: absolute;
    /* z-index: -1; */
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-top: 16px;
    transform: translateX(-8px);
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .burger_button {
      display: none;
      position: absolute;
      top: 25px;
      right: 25px;
      cursor: pointer;
      margin: 0 16px;
      -webkit-transition: .5s ease-in-out;
      -moz-transition: .5s ease-in-out;
      -o-transition: .5s ease-in-out;
      transition: .5s ease-in-out;
  }

@media screen and (max-width: 767px) {
  nav {
    padding-top: 30px;
  }

  #sus-logo {
    display: none;
  }

  #burger-bg {
    display: flex;
  }

  .nav-content {
    justify-content: initial;
  }

  li img {
    width: 50px;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  li:first-child {
    margin: 32px 0 0 0;
  }

  .burger-button {
    z-index: 4000;
    position: absolute;
    transform: translateY(10px);
  }


  .burger-button div {
    width: 32px;
    height: 2px;
    margin: 6px 0;
    opacity: 1;
    background-color: #333333;
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.burger-button div:nth-child(1) {
    /*won't inherit from .burger_button div*/
    height: 2px;
    margin: 4px 0 6px 0;
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}
  
.burger-button div:nth-child(2),.burger_button div:nth-child(3) {
    /*won't inherit from .burger_button div*/
    height: 2px;
    margin: 3px 0;
    opacity: 1;
    background-color: #333333;
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

.burger-button.open div{
  background-color: #333333;
}

.burger-button.open div:nth-child(1) {
    width: 0%;
    left: 50%;
    /* background-color: #375998; */
}
  
.burger-button.open div:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: translateY(4px) rotate(45deg);
    /* background-color: #375998; */
}
  
.burger-button.open div:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: translateY(-4px) rotate(-45deg);
    /* background-color: #375998; */
}

}
</style>