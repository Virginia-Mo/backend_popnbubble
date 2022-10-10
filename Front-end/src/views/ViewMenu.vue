<template>
  <div class="bigContainer" :class="{background : background}">
    <NavBar></NavBar>
  <div class="menucontainer">
    <h1 class="h1menu" :class="{background : background}">Menu</h1>
    <h2 class="h2menu">Top Ventes</h2>
 <div id="swiperDiv">
      <swiper
      :slidesPerView="1"
    :spaceBetween="20"
    :breakpoints="swiperOptions.breakpoints"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
        <swiper-slide v-for="tea in topTeas" :key="tea.id" class="swiper-slide" >
          <div class="topTeas"> 
            <h3 class="h3menu">{{ tea.attributes.Title }}</h3>
        <div id="topContainer">
        <div id="topContainer__img">
        <img :src="url+tea.attributes.Photo.data.attributes.formats.small.hash+imgFormat" 
        alt="Top Ventes Bubble Tea" 
        class="imgTopTeas" @click="toggleModal($event)"/></div>
        <div id="topContainer__description">
        <p class="topTeasDetails">Thé : {{ tea.attributes.Tea }}</p>
        <p class="topTeasDetails">Saveur : {{ tea.attributes.Flavor }}</p>
        <p class="topTeasDetails">Perles : {{ tea.attributes.Pearl }}</p></div>
      </div></div>
       
      </swiper-slide>

  </swiper>
      
</div> 

    <h2 class="h2menu">Personnalise ton Bubble Tea avec un large choix d'ingrédients !</h2>
    <ol id="detailsContainer">
      <li class="menulist">
       <h3 class="h3" id="formatTitle"> 3 formats au choix :</h3>
<ul>
  <li v-for="size in teaSize" class="sizelist" :key="size.id"> 
    <p class="sizelist__details">{{size.attributes.Size}}ml.............{{size.attributes.Price}}€</p>
  </li>
</ul>
      </li>
      <li class="menulist">
        <h3 class="h3">Nos Thés et différentes saveurs associées</h3>
        <ul id="teaFlavorsContainer">
          <img :class="{opacity : opacity}" 
          src="@/assets/imgs/blacktea.jpg" 
          alt="Bubble tea au thé noir"  
          ref="img" 
          class="tealist__img" 
          @click="toggleModal($event)">
          <div id="tealistDiv">
  <div v-for="tealist in teas" class="tealist" :key="tealist.id"> 
    <p class="tealist__details">{{tealist.attributes.Name}}</p>
    <ul>
      <li v-for="flavor in tealist.attributes.flavors.data" class="flavorlist" :key="flavor.id">
        <p class="flavorlist__details">{{flavor.attributes.Name}}</p>
      </li>
     </ul>
    
  </div></div> <img 
  :class="{opacity : opacity}" 
  src="@/assets/imgs/milktea.jpg" 
  alt="Bubble tea au thé au lait" 
  ref="img1" 
  class="tealist__img"
  @click="toggleModal($event)">
</ul>
      </li>
      <li class="menulist" id="pearlJelly"> 
        <h3 class="h3">Les perles et gelées</h3>
        <div id="pearlJellydiv">
        <p id="pearlContainer"><span class="tealist__details">Perles originales :</span>
          
          <span class="flavorlist__details">Tapioca</span>
          <img :class="{opacity : opacity}" 
          src="@/assets/imgs/tapioca.jpg"
          alt="Perles" 
          ref="img2" 
          class="pearlImg"
          @click="toggleModal($event)">
      </p>
        <p><span class="tealist__details">Perles fruitées : </span>
          <ul class="listDiv">
            <li v-for="popping in poppings" class="poppingslist" :key="popping.id" >
              <p class="flavorlist__details">{{popping.attributes.Name}}</p></li>
          </ul>
          </p>
          <img 
          :class="{opacity : opacity}" 
          src="@/assets/imgs/pearl.jpg" 
          alt="Perles" 
          ref="img3" 
          class="pearlImg pearl"
          @click="toggleModal($event)">
        <p><span class="tealist__details">Gelées :</span>
          <ul class="listDiv">
            <li v-for="jelly in jellies" class="jellieslist" :key="jelly.id">
              <p class="flavorlist__details">{{jelly.attributes.Name}}</p></li>
          </ul>
        </p>
      </div>
      </li>
      <li class="menulist">
        <h3 class="h3 sugarTitle">Un bubble tea sucré? ou pas trop ? </h3>
        <p><span class="tealist__details">Les taux de sucre au choix : </span>
          <ul id="sugarUl">
            <li v-for="sweet in sweetness" class="sweetnesslist" :key="sweet">{{sweet.attributes.Rate}}%</li>
          </ul>
        </p>
      </li>
    </ol>
  
  </div>
    <FooterComponent/>
  </div>
  <Teleport to="#modals" v-if="isNotMobile">
        <Lightbox :srcTarget="srcTarget" :open="open" :isActive="isActive" @click="toggleModal" />
    </Teleport>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComponent from "../components/Footer.vue";
import Lightbox from "../components/Lightbox.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import "@/assets/styles/carousel.css";
import {datasStore} from "@/stores/datasStore.js";
import { mapActions, mapState } from "pinia"
export default {
  name: "MenuPop",
  components : {NavBar, FooterComponent, Swiper, SwiperSlide, Lightbox},
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  }, 
  data() {
    return {
      src : "",
      url :`${import.meta.env.VITE_URL_SIMPLE}uploads/`,
      imgFormat : ".jpg",
      urlimg : '../assets/imgs/',
      open: false,
      isActive: false,
      background : false,
      opacity : false,
      isMobile : false,
      srcTarget :" ",
      isNotMobile:true,
      swiperOptions: {
          breakpoints: {       
      1024: {       
         slidesPerView: 3,
         spaceBetween: 30     
      },             
      }, }  
    };
  },  computed : {
    ...mapState(datasStore, ["topTeas","teaSize","teas","poppings","jellies","sweetness"]),
  },
  async created() {
    this.handleDatas();
  },
  methods : {
    ...mapActions(datasStore,{handleDatas : "handleDatas"} ),
 toggleModal(){
  if (window.innerWidth < 768) { 
    this.isNotMobile  = false

  } else {
    this.isNotMobile  = true
    this.srcTarget = event.target.src
    this.open = !this.open
    this.isActive = !this.isActive
    this.background = !this.background
    this.opacity = !this.opacity}
  },
  
  }
};
</script>

<style>
.topTeas:hover {
  transform: scale(1.2);
  transition: 0.5s ease;
}
.opacity {
  opacity: 0.2;
}
  .tealist__img {
    max-width: 30%;
    height: 33rem;
    border-radius: 20px;
    box-shadow: 0.1rem 0.1rem 1.1rem black;
  }

  .imgTopTeas{
    border: solid 1px black;
    border-radius: 20px;
  }
  #TopTeas__ul {
    display: flex;
    justify-content: space-evenly;
  }
  .topTeas {
    border: solid 1px black;
    background-color:#ffffff82;
    list-style: none;
    box-shadow: 0.1rem 0.1rem 0.1rem black;
    border-radius: 5px;
    width: 32rem;
    height: 22rem;
    margin: 3rem;
  }
  #topContainer {
    display: flex;
    gap: 2rem;
    justify-content: space-around;
  }
  #detailsContainer {
    background-color: #ffffff82;
    border-radius: 10px;
    border: solid 0.5px grey;
    box-shadow: 0.1rem 0.1rem 0.5rem black;
    padding: 0.5rem;
}
#teaFlavorsContainer {
display: flex;
justify-content: space-around;
padding: 0;
}
#tealistDiv {
  display: flex;
}
#pearlJellydiv {
  display: flex;
  justify-content: space-around;
}
ol {
  list-style: none;
}
#sugarUl {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  padding: 2rem;
    font-size: 2rem;
}
.h3 {
  font-size: 3rem;
  border-top: solid 1px black;
    width: 50%;
    padding: 2rem;
margin: 3rem auto auto ;
}
.tealist__details {
  font-size: 2.5rem;
}
.flavorlist__details {
  font-size: 1.8rem;
  margin: 1.2rem;
}
.pearlImg{
  width: 25rem;
  height: 25rem;
  box-shadow: 0.1rem 0.1rem 1.1rem black;
  border-radius: 20px;
}
#pearlContainer {
  display: flex;
  flex-direction: column;
}
.pearl {
  margin: auto 0;
}
.sugarTitle {
  padding: 2rem 2rem 0;
}
#formatTitle {
  border-top: none;
}
.sizelist {
  font-size: 2rem;
    list-style: none;
}
.h2menu {
  border-bottom: solid 1px black;
  font-size: 3.5rem;
}

@media screen and (max-width: 1024px){

#teaFlavorsContainer, #pearlJellydiv {
    flex-direction: column;
    align-items: center;
    padding: 0;
}
.flavorlist__details {
    margin: 2.2rem;
}
.listDiv {
    display: flex;
    flex-wrap:wrap;
}
#detailsContainer {
    padding: 0;
}
    }
@media screen and (max-width: 768px){
  .listDiv {
    display: block;
  }
      .flavorlist__details{
        margin: 0;
      }
      .tealist__img{
        max-width: 100%;
      }
      #topContainer__description {
    font-size: 1.4rem;
}}
</style>
