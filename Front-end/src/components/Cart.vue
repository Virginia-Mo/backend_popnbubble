<template>
  <div id="bubbletea__img" v-if="this.order.length == 0">
    <img
      src="@/assets/imgs/bubbleteapng.png"
      alt="Image bubble tea"
      id="bubbletea__img"
    />
  </div>
  <div v-if="this.order.length > 0" class="cartContainer">
    <h2>Panier</h2>
    <ul id="orderList">
      <div
        :key="item.id"
        v-for="(item, index) in order"
        class="orders animate__animated animate__zoomIn"
      >
        <p class="orderTitle">
          Bubble Tea n° {{ index + 1 }}

          <img
            src="@/assets/imgs/bin.png"
            alt="Supprimer article"
            class="imgIcon"
            @click="cancel(name)"
          />
        </p>
        <p class="order__listP"><span class="orderSpan"> Thé :</span> {{ item[2] }}</p>
        <p class="order__listP"><span class="orderSpan"> Saveur :</span> {{ item[3] }}</p>
        <p class="order__listP">
          <span class="orderSpan">{{ item[4] }} :</span> {{ item[5] }}
        </p>
        <p class="order__listP"><span class="orderSpan">Sucré à :</span> {{ item[6] }}%</p>
        <p class="orderSpan order__listP">Servit {{ item[7].toLowerCase() }}</p>
      </div>
    </ul>
    <p class="totalPrice">
      <span class="orderSpan"> Total :</span> {{ total }}€
    </p>
    <div id="clientInfosContainer">
      <p class="pInfos">Quand désirez vous venir chercher votre commande ?</p>
      <div id="datediv">
        <label for="date">Jour :</label>
        <input type="date" id="orederDate" name="date" v-model="date" min="" />
      </div>
      <div id="timediv">
        <label for="time">Heure :</label>
        <input type="time" id="orderTime" name="time" v-model="time" required />
      </div>
      <small>Notre boutique est ouverte de 9h à 18h</small>
      <div id="formInfos">
        <label for="nom">Nom</label>
        <input
          type="text"
          id="nom"
          class="infosClient"
          name="nom"
          v-model="nom"
          required
        />
        <label for="prenom">Prenom</label>
        <input
          type="text"
          id="prenom"
          class="infosClient"
          name="prenom"
          v-model="prenom"
          required
        />
        <label for="email">Email :</label>

        <input
          type="email"
          id="email"
          class="infosClient"
          name="emil"
          v-model="email"
          required
        />
        <small>Nous ne vous enverrons pas d'email à visée commerciale</small>
      </div>
    </div>
    <button type="button" @click="submitForm" id="buttonConfirmOrder">
      <router-link to="/finalOrder" class="OrderLink"> Commander</router-link>
    </button>
  </div>
</template>

<script>
import { useStore } from "@/stores/cart.js";
import { datasStore } from "@/stores/datasStore.js";
import { mapActions, mapState } from "pinia";
const storeCart = useStore();

export default {
  name: "Cart",
  data() {
    return {
      order: storeCart.cart,
    };
  },
  computed: {
    ...mapState(useStore, ["cart", "total"]),
    ...mapState(datasStore, ["nom", "prenom", "email", "message", "date", "time"])
  },
  methods: {
    ...mapActions(useStore, { cancel: "cancel" }),
    async submitForm() {
      this.order = this.order.toString().replaceAll(/,/gi, " + ");
      let payload = {
        data: {
          order: this.order,
          fullname: this.nom + " " + this.prenom,
          email: this.email,
          date: this.date,
          time: this.time,
        },
      };
      const submission = await fetch(
        `${import.meta.env.VITE_BASE_URL}/orders`,
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

<style>
.orderSpan {
  font-size: 2.3rem;
  color: #723b00;
}
#bubbletea__img {
  width: 40rem;
  height: 50rem;
}
#orderList {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
}
.orderTitle {
  text-decoration: underline;
  font-size: 2.5rem;
  margin: 0 0 0.5rem
}
.order__listP {
  margin: 0.2rem;
}
.cartContainer {
  border: solid 1px black;
  border-radius: 10px;
  width: 50%;
  box-shadow: 0.1rem 0.1rem 1.1rem black;
}
.orders {
  width: 43%;
  background-image: url("@/assets/imgs/logoPnbPng.png");
  background-position: contain;
  background-size: 8rem;
  background-repeat: no-repeat;
  background-position: right bottom;
  text-align: left;
  font-size: 2rem;
  border: solid 1px black;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1.1rem rgb(39, 39, 39);
}
h2 {
  font-size: 3.5rem;
  font-style: italic;
}
.totalPrice {
  font-size: 2rem;
}
.imgIcon {
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
}
#formInfos {
  display: flex;
  flex-direction: column;
}
.infosClient {
  width: 40%;
  height: 2rem;
  margin: 0.5rem auto;
}
#datediv {
  margin-bottom: 1rem;
}
#clientInfos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#formInfos {
  display: flex;
  flex-direction: column;
}
#buttonConfirmOrder {
  height: 5rem;
  margin: 2rem;
  background-color: bisque;
  border-radius: 5px;
  border: solid 1px black;
  font-size: 1.7rem;
  font-family: inherit;
}
.OrderLink,.OrderLink:visited{
  text-decoration: none;
  color: black;
}
.pInfos {
  font-size: 2.3rem;
}

</style>
