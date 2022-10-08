<template>
  <div id="homeContainer">
    <div id="iceContainer" class="iceContainer" :class="{ animationCube: disabled }" >
      <IceHome />
    </div>
    <Bubbles />
    <div class="welcomediv">
      <div id="mainDivWelcome">
      <h1 class="welcome__mainTitle h1Home">
       Pop'n'Bubble
      </h1>
      <h2 id="welcome__detailsTitle" class="h2Home">Le paradis du bubble tea !</h2>
      <div class="logoArrowsDiv">
      <div class="arrows">     
         <span>&#92;</span>
       <span>&#8260;</span> </div>

      <RouterLink to="/about">
      
        <img
          alt="logo"
          class="logo"
          src="@/assets/imgs/logoPnbPng.png"
          width="150"
          height="170"
        />
      
      </RouterLink>  
      <div class="arrows">
      <span>&#8260;</span>
      <span>&#92;</span></div>
    </div></div></div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Bubbles from "@/components/Bubbles.vue";
import IceHome from "@/components/IceHome.vue";
export default {
  name: "Home",
  components: { Bubbles, IceHome},
  data() {
    return {
      disabled: false,
    };
  },
  mounted() {
    this.changeClass();
  },
  methods: {
    changeClass() {
      setTimeout(() => {
        this.disabled = true;
      }, 3000);
    },
  },
};
</script>

<style scoped>
 .iceContainer {
  display: none;
 }
body {
  overflow: hidden;
}
.logo {
  border-radius: 31%;
}

.animationCube {
  display: flex;
  justify-content: center;
  gap: 2rem;
  animation: drop3 2.5s ease forwards 1;
}
@keyframes drop3 {
  10% {
    transform: translateY(4vh); 
  }
  50% {
    transform: translateY(6vh); 
  }
  100% {
    transform: translateY(4vh);
  }
}
#mainDivWelcome {
  margin-top: 26rem;
}
.welcome__mainTitle {
  transform: rotate(352deg);
  font-size: 10rem;
  color: #000000cf;
  letter-spacing: 0.4rem;
  border: none;
  background-color: transparent;
  text-shadow: 1.1rem 0.5rem 1.1rem #2e2d2db8;
}
#welcome__detailsTitle {
  font-size: 3.5rem;
}
.welcomediv {
  padding: 0.7rem 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
  background-image: url("@/assets/imgs/drink.jpg");
  background-repeat: no-repeat;
  background-size: 100% 200%;
  animation: makeItfadeIn 3s 1s forwards;
}

@keyframes makeItfadeIn {
  100% {
    background-position: 150% 70%;
  }
}


.logo:hover {
  transform: scale(1.1);
}
.logo {
  transition: transform 0.5s;
}
.arrows {
  font-size: 3rem;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.logoArrowsDiv {
  display: flex;
    justify-content: center;
}
@media screen and (max-width: 1024px){
/* ----------HOME--------- */
#mainDivWelcome {
    margin: 26rem 3rem 0;
    word-wrap: break-word;
}
#aboutContainer {
        /* margin: 0 40%; */
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
  }
  @media screen and (max-width: 768px){
    .h1Home {
    font-size: 7rem;
}
.h2Home {
    font-size: 2.5rem;
}
#navBar__container {
    gap: 10rem;
}
.navbar__link {
    padding: 2rem;
}
  }
</style>
