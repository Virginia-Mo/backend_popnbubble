<template>
  <footer id="footer">
    <div class="footer__containers" id="footer__details">
      <h3
        class="footer__title ball"
        v-if="footer__titleMain"
        @click="showContentMain"
      > 
        Pop'n'<br />
        Bubble
      </h3>
      <div
        class="footer__content animate__animated"
        :class="{ animate__zoomIn: disabled }"
        v-if="footer__contentMain"
        @click="showContentMain"
      >
        <p class="footer__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          laboriosam illum expedita ipsam, officiis nobis sunt quas, pariatur
          minima id molestiae. Consequuntur ad harum quae cupiditate, amet vitae
          voluptas! Impedit!
        </p>
        <router-link to="/about">En savoir +</router-link>
      </div>
    </div>
    <div class="footer__containers" id="footer__linksContainer">
      <h3
        class="footer__title animate__animated ball"
        v-if="footer__titleLinks"
        @click="showContentLinks"
      >
        Liens
      </h3>

      <div
        class="footer__content animate__animated"
        :class="{ animate__zoomIn: disabled }"
        v-if="footer__contentLinks"
        @click="showContentLinks"
      >
        <router-link class="footer__links" to="/menu">Menu</router-link>
        <router-link class="footer__links" to="/order"
          >Click'n'Collect</router-link
        >
        <router-link class="footer__links" to="/contact">Contact</router-link>
      </div>
    </div>
    <div class="footer__containers" id="footer__contactContainer">
      <h3
        class="footer__title ball"
        id="footer__blastBall"
        v-if="footer__titleContact"
        @click="showContentContact"
      >
        Contact
      </h3>
      <div
      id="contactDiv"
        class="footer__content animate__animated"
        :class="{ animate__zoomIn: disabled }"
        v-if="footer__contentContact"
        @click="showContentContact"
      >
        <p class="contact__p">
          <img class="imgIcon" src="../assets/imgs/placeholder.png" alt="Icone adresse" />
          <span class="footer__description"
            >Champ de Mars, 5 Av. Anatole France, 75007 Paris</span
          >
        </p>
        <p id="timeContainer" class="contact__p">
          <img class="imgIcon" src="../assets/imgs/clock1.png" alt="Icone horaires" />
          <span class="footer__description" id="timeDiv">
            <span id="days"> Du mardi au samedi</span>
            <span id="time">9:00 - 18:00</span>
          </span>
        </p>
        <p class="contact__p">
          <img
            class="imgIcon"
            src="../assets/imgs/phone-call1.png"
            alt="Icone telephone"
          />
          <span class="footer__description">01 02 03 04 05</span>
        </p>
        <p class="contact__p">
          <img class="imgIcon" src="../assets/imgs/email1.png" alt="Icone email" />

          <span class="footer__description">popnbubble@pnp.io</span>
        </p>
      </div>
    </div>
    <div class="footer__containers" id="footer__MediaContainer">
      <h3
        class="footer__title ball"
        id="footer__lastBall"
        v-if="footer__titleMedia"
        @click="showContentMedia"
      >
        Nos réseaux !
      </h3>
      <div
        class="footer__content animate__animated"
        :class="{ animate__zoomIn: disabled }"
        v-if="footer__contentMedia"
        @click="showContentMedia"
      >
        <a class="media__links" href="https://fr-fr.facebook.com/" target="_blank">
          <img
            class="mediaImg"
            src="../assets/imgs/facebook1.png"
            alt="Icone facebook"
        /></a>
        <a class="media__links" href="https://www.instagram.com/" target="_blank">
          <img
            class="mediaImg"
            src="../assets/imgs/instagram1.png"
            alt="Icone instagram"
        /></a>
        <a class="media__links" href="https://snapchat.com/" target="_blank">
          <img
            class="mediaImg"
            src="../assets/imgs/snapchat1.png"
            alt="Icone snapchat"
        /></a>
      </div>
    </div> 

</footer>   <div id="PearlsContainer__footer"> <Pearls /></div>
</template>

<script>
import Pearls from "@/components/Pearls.vue";
export default {
  name: "FooterComponent",
  components: { Pearls },
  data() {
    return {
      footer__titleMain: true,
      footer__titleLinks: true,
      footer__titleContact: true,
      footer__titleMedia: true,
      footer__contentLinks: false,
      footer__contentMain: false,
      footer__contentContact: false,
      footer__contentMedia: false,
      disabled: false,
    };
  },
  methods: {
    addclass() {
      this.disabled = true;
    },
    showContentMain() {
      this.addclass();
      this.footer__titleMain = !this.footer__titleMain;
      this.footer__contentMain = !this.footer__contentMain;
    },
    showContentLinks() {
      this.addclass();
      this.footer__titleLinks = !this.footer__titleLinks;
      this.footer__contentLinks = !this.footer__contentLinks;
    },
    showContentContact() {
      this.addclass();
      this.footer__titleContact = !this.footer__titleContact;
      this.footer__contentContact = !this.footer__contentContact;
    },
    showContentMedia() {
      this.footer__titleMedia = !this.footer__titleMedia;
      this.footer__contentMedia = !this.footer__contentMedia;
    },

  },
};
</script>
<style>

</style>
