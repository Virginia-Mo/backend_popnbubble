<template>
  <div id="aboutContainer">
    <NavBar />
    <div class="menucontainer">
      <h1 id="mainTitle">Bienvenue dans notre boutique de Bubble tea !</h1>

      <div id="description1__container">
        <h2 class="secondTitle formTitles">
          Mais qu'est-ce qu'un bubble tea ?!
        </h2>
        <div
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div class="detailsDiv containerdescription borders">
            <img
              alt="descriptionBubbleTea"
              class="descriptionImg"
              src="@/assets/imgs/TeaDescription.png"
              width="400"
              height="300"
              id="imgLogo"
            />
            <p class="mainDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
              dolorum illo? Minima id velit ipsum suscipit molestiae, debitis
              sunt laudantium facere corporis soluta minus possimus libero
              magnam sint quos quo. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolorem, dolorum illo? Minima id velit ipsum
              suscipit molestiae, debitis sunt laudantium facere corporis soluta
              minus possimus libero magnam sint quos quo.
            </p>
          </div>
        </div>
      </div>
      <div id="description2__container">
        <h2 class="secondTitle formTitles">Qui Sommes Nous ?</h2>
        <div
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div class="detailsDiv borders">
            <div id="descriptionDiv">
              <p class="mainDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                quisquam accusamus, reprehenderit alias minus voluptate neque
                vel iure dolore, consequatur distinctio, doloribus labore sunt
                deserunt amet hic exercitationem soluta laudantium? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laborum, ut
                possimus! Praesentium excepturi ratione harum cum maiores velit
                est similique vitae quo ducimus. Facilis id animi iusto aperiam
                ullam cupiditate.
              </p>
              <p class="mainDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                quisquam accusamus, reprehenderit alias minus voluptate neque
                vel iure dolore, consequatur distinctio, doloribus labore sunt
                deserunt amet hic exercitationem soluta laudantium?
              </p>
            </div>
            
              <img
              class="descriptionImg"
                src="@/assets/imgs/shop.jpg"
                alt="photo de la boutique"
                id="imgDescription"
              />
            
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "AboutPage",
  components: { NavBar, FooterComponent },
};
</script>

<style scoped>

#imgDescriptionContainer {
  width: 160rem;
}
#imgDescription {
  max-width: 100%;
  height: 33rem;
  border-radius: 20px;
  border: solid 1px black;
}
.containerdescription {
  display: flex;
  gap: 3rem;
}
#aboutContainer {
  font-size: 1.8rem;
}
#mainTitle {
  padding: 2rem;
  font-size: 6rem;
}
.detailsDiv {
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
}
.descriptionImg {
  border: solid 1px #9e9e9e;
  border-radius: 10px;
}
@media screen and (max-width: 1024px){
/* ----------HOME--------- */
#aboutContainer {
font-size: 1.6rem;
        width: 100%;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .detailsDiv {
        flex-direction: column;
        align-items:center ;
    }
  }
  @media screen and (max-width: 768px){
    .descriptionImg, #imgDescription{
    max-width: 100%;
}
#mainTitle {
    font-size: 4rem;
}
.formTitles {
  overflow: inherit;
}}
</style>
