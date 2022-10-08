<template>
  <header>
    <Lines />
    <nav id="navBar">
      
      <div id="navBar__container">
        <IceCube />
       
      <div class="wrap4">
          <div class="cube">
            <div class="front4 cubeface">
              
        <div id="imgContainer"><router-link to="/">
          <img
            alt="logo"
            class="logo"
            src="@/assets/imgs/logoPnbPng.png"
            width="100"
            height="120"
          />
      </router-link>
        </div>
            </div>
            <div class="back4 cubeface"></div>
            <div class="top4 cubeface"></div>
            <div class="bottom4 cubeface"></div>
            <div class="left4 cubeface"></div>
            <div class="right4 cubeface"></div>
          </div>
        </div>
        <div class="wrap1">
          <div class="cube">
            <div class="front1 cubeface">
              <router-link to="/about" class="navbar__link">Home</router-link>
            </div>
            <div class="back1 cubeface"></div>
            <div class="top1 cubeface"></div>
            <div class="bottom1 cubeface"></div>
            <div class="left1 cubeface"></div>
            <div class="right1 cubeface"></div>
          </div>
        </div>

        <div class="wrap2">
          <div class="cube">
            <div class="front2 cubeface">
              <router-link to="/menu" class="navbar__link">Menu</router-link>
            </div>
            <div class="back2 cubeface"></div>
            <div class="top2 cubeface"></div>
            <div class="bottom2 cubeface"></div>
            <div class="left2 cubeface"></div>
            <div class="right2 cubeface"></div>
          </div>
        </div>

        <div class="wrap3">
          <div class="cube">
            <div class="front3 cubeface">
              <router-link to="/order" class="navbar__link"
                >Click'n'Collect</router-link
              >
            </div>
            <div class="back3 cubeface"></div>
            <div class="top3 cubeface"></div>
            <div class="bottom3 cubeface"></div>
            <div class="left3 cubeface"></div>
            <div class="right3 cubeface"></div>
          </div>
        </div>

        <div class="wrap4">
          <div class="cube">
            <div class="front4 cubeface">
              <router-link to="/contact" class="navbar__link"
                >Contact</router-link
              >
            </div>
            <div class="back4 cubeface"></div>
            <div class="top4 cubeface"></div>
            <div class="bottom4 cubeface"></div>
            <div class="left4 cubeface"></div>
            <div class="right4 cubeface"></div>
          </div>
        </div>
        <div class="wrap5 wrapTarget">
          <div class="cube">
            <div class="front5 cubeface">
              <MiniCart/>
            </div>
            <div class="back5 cubeface"></div>
            <div class="top5 cubeface"></div>
            <div class="bottom5 cubeface"></div>
            <div class="left5 cubeface"></div>
            <div class="right5 cubeface"></div>
          </div>
        </div>

        <IceCube />
      </div>
    </nav>
  </header>
</template>

<script>
import { useStore } from "@/stores/cart.js";
const storeCart = useStore();
import IceCube from "@/components/IceCube.vue";
import Lines from "@/components/Lines.vue";
import MiniCart from "@/components/MiniCart.vue";

export default {
  name: "NavBar",
  components: { IceCube, Lines, MiniCart },
};
</script>

<style>
header {
  color: black;
  padding-bottom: 13rem;
}
#navBar {
  display: flex;
  justify-content: center;
}
#navBar__container {
  display: flex;
   flex-wrap: wrap;
    
}
.navbar__link {
  padding: 5rem;
  text-decoration: none;
  font-size: 2rem;
}
.navbar__link:visited {
  color: black;
}
.collect {
  margin-left: 1rem;
}
#teaImg {
  width: 3rem;
}
@media screen and (max-width: 1024px){
#navBar {
    height: 14rem;
    margin: 0 5rem;
}
#navBar__container {
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 4rem;
    }
    #navBar__container {
    flex-wrap: wrap;
    justify-content: flex-start;
}
.navbar__link {
  padding: 2rem;
}
    }
</style>
