<template>
  <div class="bigContainer" :class="{ background: background }">
    <NavBar />
    <div class="menucontainer">
      <h1 class="h1title" :class="{ background: background }">Contact</h1>

      <h2 id="subTitle">
        Pour toute question ou suggestion, n'hesitez pas à nous contacter !
      </h2>
      <div class="mainContainer">
        <div class="formMessage__container formcontainers">
          <form action="" method="post" id="formMessage">
            <h2 id="formMessage__title" class="formTitles">Message</h2>
            <label class="formMessage__label" for="nom">Nom</label>
            <input
              id="nom"
              class="formMessage__input"
              type="text"
              name="nom"
              v-model="nom"
              :class="{ background: background }"
            />
            <label class="formMessage__label" for="prenom">Prénom</label>
            <input
              class="formMessage__input"
              type="text"
              name="prenom"
              v-model="prenom"
              :class="{ background: background }"
            />
            <label class="formMessage__label" for="email">Email</label>
            <input
              class="formMessage__input"
              type="email"
              name="email"
              id="email"
              v-model="email"
              :class="{ background: background }"
            />
            <label class="formMessage__label" for="messageTextArea"
              >Message</label
            >
            <textarea
              name="messageTextArea"
              id="messageTextArea"
              cols="30"
              rows="10"
              class="formMessage__textArea"
              v-model="message"
              :class="{ background: background }"
            ></textarea>
            <button type="button" @click.prevent="toggleModal" id="buttonOrder">
              <img
                src="@/assets/imgs/send.png"
                alt="Envoi d'un message"
                class="buttonMessage"
              />
            </button>
          </form>
        </div>

        <div id="contact__container" class="formcontainers">
          <div class="contact__details">
            <h2 class="contact__title formTitles">Contact</h2>
            <p id="timediv">
              <img
                class="contact__Icon"
                src="../assets/imgs/clock.png"
                alt="Icone horaires"
              />
              <span class="contact__description">
                <div id="timeContact">
                  <span id="days"> Du mardi au samedi</span>
                  <span id="time">9:00 - 18:00</span>
                </div>
              </span>
            </p>
            <p>
              <img
                class="contact__Icon"
                src="../assets/imgs/phone.png"
                alt="Icone telephone"
              />
              <span class="contact__description">01 02 03 04 05</span>
            </p>
            <p>
              <img
                class="contact__Icon"
                src="../assets/imgs/email.png"
                alt="Icone email"
              />

              <span class="contact__description">popnbubble@pnp.io</span>
            </p>

            <p>
              <img
                class="contact__Icon"
                src="../assets/imgs/home.png"
                alt="Icone adresse"
              />
              <span class="contact__description"
                >Champ de Mars, 5 Av. Anatole France, 75007 Paris</span
              >
            </p>
          </div>
          <div id="iframeDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167929.9240869006!2d2.336120457212265!3d48.879086325442536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1663232666409!5m2!1sfr!2sfr"
              width="300"
              height="200"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="#modals">
      <Modal :open="open" :isActive="isActive" @closeModal="toggleModal" />
    </Teleport>

    <FooterComponent />
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import FooterComponent from "../components/Footer.vue";
import Modal from "../components/Modal.vue";
import { datasStore } from "@/stores/datasStore.js";
import { mapState } from "pinia";
export default {
  name: "ContactPage",
  components: { NavBar, FooterComponent, Modal },
  data() {
    return {
      open: false,
      isActive: false,
      background: false,
    };
  },
  computed: {
    ...mapState(datasStore, ["nom", "prenom", "email", "message", "date", "time"])
  },
  methods: {
    toggleModal() {
      this.open = !this.open;
      this.isActive = !this.isActive;
      this.background = !this.background;
      this.submitForm();
    },
    // openModal() {
    //   this.open = true;
    //   this.isActive = true;
    //   document.querySelector("#app").style.backgroundColor = "#808080c4";
    //   document.querySelector("h1").style.backgroundColor = "#808080c4";
    //
    // },
    // closeModal() {
    //   this.open = false;
    //   document.querySelector("#app").style.backgroundColor = "";
    //   document.querySelector("h1").style.backgroundColor = "bisque";
    // },

    async submitForm() {
      this.open == true;
      let payload = {
        data: {
          fullname: this.nom + " " + this.prenom,
          email: this.email,
          message: this.message,
          open: false,
        },
      };
      const submission = await fetch(
        `${import.meta.env.VITE_BASE_URL}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const response = await submission.json();
      console.log(response);
    },
  },
};
</script>
<style scoped>
.mainContainer {
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
}

.formcontainers {
  border: solid 1px black;
  border-radius: 20px;
  box-shadow: 0.1rem 0.1rem 1.1rem black;
}
#formMessage {
  display: flex;
  flex-direction: column;
}
#contact__container {
  text-align: left;
}
.contact__details {
  padding: 1rem 4rem;
}
.contact__Icon {
  width: 3rem;
  height: 3rem;
  padding-right: 1rem;
}
.buttonMessage {
  width: 3rem;
  height: 3rem;
}
#buttonOrder {
  border: solid 1px black;
  border-radius: 10px;
  width: 50%;
  margin: 1rem auto;
  background-color: transparent;
}
#buttonOrder:hover {
  background-color: bisque;
}
.formMessage__input,
#messageTextArea {
  width: 80%;
  padding: 0.5rem;
  margin: 1rem auto;
}
.formMessage__container {
  width: 30%;
}

.contact__title {
  text-align: center;
}
#timeContact {
  display: flex;
  flex-direction: column;
}
#iframeDiv {
  text-align: center;
  margin-bottom: 2rem;
}
#subTitle {
  font-size: 4rem;
  margin-bottom: 4rem;
}
#timediv {
  display: flex;
}
@media screen and (max-width: 1024px){
  #subTitle{
    font-size: 3rem;
  }
  .mainContainer {
    flex-direction: column;
    gap: 2rem;
    font-size: 1.6rem;
  }
  .formMessage__container {
    width: 100%;
}
.h1title{
  font-size: 5rem;
}
iframe{
  max-width: 85%;
  margin: 2rem;
}}
</style>
