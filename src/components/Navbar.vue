<template>
  <div>
    <div class="black-overlay"></div>
  <nav :style="navHome">
    <div class="nav-content">
      <div id="nav-brand">
        <router-link to="/">
          <img
            alt="TAYO Logo"
            id = "tayo-logo"
            :src="require('@/assets/img/' + brand + '')"
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
          <router-link :style="(isHome || isService)  ? navLink : {}" to="/"
            >Home</router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService)  ? navLink : {}" to="/services"
            >Services</router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService) ? navLink : {}" to="/projects"
            >Projects</router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService) ? navLink : {}" to="/about"
            >Who We Are</router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService) ? navLink : {}" to="/contactus"
            >Contact Us</router-link>
        </li>
      </ul>
    </div>
    <div v-if="!isDesktop" id="mobile-nav" class="slide">
      <ul class="d-flex f-even">
        <li>
          <img
            alt="TAYO Logo"
            :src="require('@/assets/img/tayo-logo-black.png')"
          />
        </li>
        <li>
          <router-link :style="(isHome || isService) ? navLink : {}" to="/" v-on:click="showBurger(), handleScroll()">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService) ? navLink : {}" to="/services" v-on:click="showBurger(), handleScroll()">
            <span>Services</span>
          </router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService)  ? navLink : {}" to="/projects" v-on:click="showBurger(), handleScroll()">
            <span>Projects</span>
          </router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService)  ? navLink : {}" to="/about" v-on:click="showBurger(), handleScroll()">
            <span>Who We Are</span>
          </router-link>
        </li>
        <li>
          <router-link :style="(isHome || isService)  ? navLink : {}" to="/contactus" v-on:click="showBurger(), handleScroll()">
            <span>Contact Us</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("resize", this.handleResizeNav);
    window.addEventListener("scroll", this.handleScroll);
    this.setColor("#333333");
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResizeNav);
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isHome: this.$route.path === "/" ? true : false,
      isService: this.$route.path === "/services" ? true : false,
      isDesktop: window.innerWidth >= 768 ? true : false,
      brand: "tayo-logo-black.png",
      navHome: {
        background: "transparent",
        boxShadow: "none"
      },
      navLink: {
        color: "#FAFAFA"
      }
    };
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      // var target = document.querySelectorAll(".bar");
      this.isHome = to.path === "/" ? true : false;
      this.isService = to.path === "/services" ? true : false;
      this.setColor("#333333");
      (to.path === "/" || to.path === "/services") ? document.querySelector('#tayo-logo').style.visibility = 'hidden' : document.querySelector('#tayo-logo').style.visibility = 'visible';
      // this.brand = this.isHome ? "tayo-logo-black.png" : "tayo-logo-black.png";
      // to.path === "/services" || to.path === "/" ? this.setColor("#FAFAFA") : this.setColor("#333333"); 
      (to.path === "/" || to.path === "/services") ? this.navLink = {color: "#FAFAFA", transition: "color 0.25s ease-in-out"} : this.navLink = {color: "#333333", transition: "color 0.25s ease-in-out"}
      // to.path === "/" ? document.querySelector(".bar").style.backgroundColor = "#FAFAFA" : document.querySelector(".bar").style.backgroundColor = "#333333";   
    }
  },
  methods: {
    setColor(color) {
      document.querySelectorAll('.bar').forEach((item) => {
        item.style.backgroundColor = color;
      })
    },
    showBurger() {
      const mobileNav = document.querySelector("#mobile-nav");
      const burgerBtn = document.querySelector(".burger-button");
      if(mobileNav.style.top == '-420px'){
        mobileNav.style.top = '0';
        burgerBtn.classList.add("open");
        document.querySelector(".black-overlay").style.display = "inline-block";
        document.querySelector("html").style.overflow = "hidden";
        document.querySelector("body").style.overflow = "hidden";
        this.setColor("#333333");
      } 
      else {
        mobileNav.style.top = '-420px';
        burgerBtn.classList.remove("open");
        document.querySelector(".black-overlay").style.display = "none";
        document.querySelector("html").style.overflow = "initial";
        document.querySelector("body").style.overflow = "initial";
        this.setColor("#333333");
      }
    },
    handleResizeNav() {
      if (window.innerWidth < 768) {
        this.isDesktop = false;
        this.setColor("#333333");
      } 
      else {
        this.isDesktop = true;
      }
    },
    handleScroll() {
      if ((this.isHome || this.isService) & (this.isDesktop)) {
        if (window.scrollY > 20) {
          this.navHome = {
            background: "#FAFAFA",
            transition: "background 0.25s ease-in-out",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
          };
          this.navLink = {
            color: "#333333",
            transition: "color 0.25s ease-in-out"
          };
          this.brand = "tayo-logo-black.png";
          document.querySelector('#tayo-logo').style.visibility = 'visible';
        } 
        else {
          this.navHome = {
            background: "transparent",
            transition: "background 0.25s ease-in-out",
            boxShadow: "none",
          };
          this.navLink = {
            color: "#FAFAFA",
            transition: "color 0.25s ease-in-out"
          };
          this.brand = "tayo-logo-black.png";
          document.querySelector('#tayo-logo').style.visibility = 'hidden';
        }
      }
      else if (this.isDesktop) {
        if (window.scrollY > 20) {
          this.navHome = {
              background: "#FAFAFA",
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
          this.navLink = {
            color: "#333333",
            transition: "color 0.25s ease-in-out"
          };
          
        }
      }
    if (!this.isDesktop) {
      this.setColor("#333333");
    }
    }
  }
};
</script>

<style scoped>
 /* Import Fonts */
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");
  nav {
    width: 100%;
    position: fixed;
    z-index: 1000;
    background: #FAFAFA;
    padding: 16px 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    top: 0;
  }
  
  nav img {
      width: 48px;
  }
  .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  /* Desktop Nav */
  ul {
    list-style: none;
    letter-spacing: 0.02em;
  }
  #desktop-nav li {
    margin-left: 30px;
    display: inline;
  }
  #desktop-nav li > a {
    color: #333333;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    font-family: "Karla";
  }
  #desktop-nav li > a:hover,
  #desktop-nav li > a.router-link-active {
    padding-bottom: 4px;
  }
  #desktop-nav li > a:hover,
  #desktop-nav li > a.router-link-active {
    border-bottom: 4px solid #EAA200;
  }

  #burger-bg {
    display: none;
  }

  /* Mobile Nav */
  .black-overlay {
    display: none;
    background: #333333;
    opacity: 0.4;
    position: absolute;
    height: 9999px;
    z-index: 10;
    width: 100%;
  }

  #mobile-nav {
    display: block;
    position: fixed;
    top: -420px;
    width: 100%;
    left: 0;
    height: 420px;
    background: #FAFAFA;
    transition: top 0.5s;
    /* transition: bottom 0.5s; */
  }
  #mobile-nav > ul {
    margin: 0;
    padding: 12px 0;
  }
  #mobile-nav li > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  #mobile-nav a > span {
    font-size: 16px;
    margin-bottom: 24px;
    font-weight: 700px;
  }
  #mobile-nav a > i,
  #mobile-nav a > span {
    color: #333333;
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
    transform: translateX(-8px);
    background-color: #FAFAFA;
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

  #tayo-logo {
    display: none;
  }

  #mobile-nav {
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
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
    margin: 32px 0;
  }

  .burger-button {
    z-index: 4000;
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
    background-color: #FAFAFA;
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