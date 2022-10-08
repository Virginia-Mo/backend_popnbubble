<template>
  <div class="bigContainer">
    <NavBar />
    <div class="menucontainer">
      <h1 class="h1order">
        Click'n'Collect !
        <img
          src="@/assets/imgs/bubble-tea.png"
          alt="image de bubble tea"
          class="buttonImg"
        />
      </h1>

      <h2 class="h3order">
        Commandez votre bubble tea et récupérez le à l'heure de votre choix
      </h2>

      <div class="formContainer">
        <div id="formdiv">
          <form action="" method="post" id="formOrder">
            <div id="formatdiv">
              <label for="format" class="formTitles">Format :</label>
              <br />
              <select name="format" id="format" v-model="choosedFormat">
                <option
                  v-for="format in teaSize"
                  :value="format"
                  :key="format.id"
                >
                  {{ format.attributes.Size }}ml
                </option>
              </select>
            </div>
            <div id="teasdiv">
              <p class="formTitles">Thé</p>

              <input
                type="radio"
                id="one"
                value="Thé Noir"
                name="tea"
                v-model="picked"
              />
              <label for="one">Thé Noir</label>
              <br />
              <input
                type="radio"
                id="two"
                value="Thé au lait"
                name="tea"
                v-model="picked"
              />
              <label for="two">Thé au lait</label>
            </div>

            <div id="flavorsdiv">
              <label for="flavors" class="formTitles">Saveurs</label>
              <br />
              <select
                v-if="picked == 'Thé Noir'"
                name="flavors"
                id="flavors"
                v-model="flavor"
              >
                <option
                  v-for="flavor in teas[0].attributes.flavors.data"
                  :value="flavor"
                  :key="flavor.id"
                >
                  {{ flavor.attributes.Name }}
                </option>
              </select>

              <select
                v-else-if="picked == 'Thé au lait'"
                name="flavors"
                id="flavors"
                v-model="flavor"
              >
                <option
                  v-for="flavor in teas[1].attributes.flavors.data"
                  :value="flavor"
                  :key="flavor.id"
                >
                  {{ flavor.attributes.Name }}
                </option>
              </select>
            </div>
            <div id="pearlsdiv">
              <p class="formTitles">Perles :</p>

              <input
                type="radio"
                id="two"
                name="pearl"
                value="Perles"
                v-model="choosedPearl"
              />

              <label for="two">Perles (ou sans perle) </label>
              <br />
              <input
                type="radio"
                id="three"
                name="pearl"
                value="Gelées"
                v-model="choosedPearl"
              />
              <label for="two">Gelées de fruits</label>
            </div>

            <div id="tastediv">
              <label class="formTitles">Gout</label>
              <br />
              <select
                v-if="choosedPearl == 'Perles'"
                name="fruitsPearl"
                id="fruitsPearl"
                v-model="fruit"
              >
                <option
                  v-for="fruit in poppings"
                  :value="fruit"
                  :key="fruit.id"
                >
                  {{ fruit.attributes.Name }}
                </option>
              </select>

              <select
                v-else-if="choosedPearl == 'Gelées'"
                name="jelly"
                id="jelly"
                v-model="fruit"
              >
                <option v-for="fruit in jellies" :value="fruit" :key="fruit.id">
                  {{ fruit.attributes.Name }}
                </option>
              </select>
            </div>
            <div id="sugarRatediv">
              <label for="sweet" class="formTitles">Taux de sucre</label>
              <br />
              <select
                name="sweetnessRate"
                id="sweetnessRate"
                v-model="sugarRate"
              >
                <option
                  v-for="sugarRate in sweetness"
                  :value="sugarRate"
                  :key="sugarRate.id"
                >
                  {{ sugarRate.attributes.Rate }}%
                </option>
              </select>
            </div>
            <div id="temperaturediv">
              <p class="formTitles">Température</p>
              <input
                type="radio"
                id="cold"
                name="temp"
                value="Froid"
                v-model="choosedTemperature"
              />
              <label for="cold">Froid</label>
              <br />
              <input
                type="radio"
                id="hot"
                name="temp"
                value="Chaud"
                v-model="choosedTemperature"
              />
              <label for="hot">Chaud</label>
            </div>
            <p v-if="choosedFormat">
              Prix : {{ choosedFormat.attributes.Price }}euros
            </p>
            <button type="button" @click="getFormValues" id="buttonOrder">
              <img
                src="@/assets/imgs/laugh.png"
                alt="Validation de la commande"
                class="buttonImg"
              />
            </button>
          </form>
        </div>
        <Cart />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import { useStore } from "@/stores/cart.js";
import { datasStore } from "@/stores/datasStore.js";
import Cart from "@/components/Cart.vue";
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/Footer.vue";
import { mapState, mapActions } from "pinia";

export default {
  name: "OrderPage",
  components: { Cart, NavBar, FooterComponent },
  computed: {
    ...mapState(useStore, ["cart"]),
    ...mapState(datasStore, [
      "topTeas",
      "teaSize",
      "teas",
      "poppings",
      "jellies",
      "sweetness",
    ]),
  },
  data() {
    return {
      showCart: true,
      picked: "",
      choosedPearl: "",
      choosedFormat: "",
      choosedTemperature:"",
      sugarRate:" ",
      fruit:"",
      flavor:""
    };
  },
  async created() {
    this.handleDatas();
  },
  methods: {
    ...mapActions(datasStore, { handleDatas: "handleDatas" }),
    getFormValues() {
      let formData = [
        this.choosedFormat.attributes.Size,
        this.choosedFormat.attributes.Price,
        this.picked,
        this.flavor.attributes.Name,
        this.choosedPearl,
        this.fruit.attributes.Name,
        this.sugarRate.attributes.Name,
        this.choosedTemperature.replace("d", "d \n"),
      ];
      this.cart.push(formData);
    },
  },
};
</script>

<style>
.formContainer {
  background-color: #ffffff82;
  border-radius: 10px;
  border: solid 0.5px grey;
  width: 80%;
  margin: auto;
  box-shadow: 0.1rem 0.1rem 1.1rem black;
  display: flex;
  justify-content: space-around;
  padding: 2rem 5rem;
}
.formTitles {
  font-weight: 700;
  font-size: 3rem;
  margin: 1rem;

  overflow: hidden;
}
.formTitles:before,
.formTitles:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 0.2rem;
  position: relative;
  vertical-align: middle;
  width: 5rem;
}
.formTitles:before {
  right: 0.5rem;
  margin-left: -50%;
}
.formTitles:after {
  left: 0.5rem;
  margin-right: -50%;
}
#formdiv {
  font-size: 2rem;
}
#format {
  width: 50%;
}
#formOrder {
  width: 40rem;
  border: solid 1px black;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0.1rem 0.1rem 1.1rem black;
}
#teasdiv,
#pearlsdiv {
  line-height: 3rem;
}
#sugarRatediv {
  margin-top: 1rem;
}
#buttonOrder {
  margin-top: 1rem;
  width: 8rem;
  height: 8rem;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.6s;
}
#buttonOrder:hover {
  background-color: rgb(175, 166, 154);
  transform: scale(1.1);
}
.buttonImg {
  height: 7rem;
  width: 5rem;
}
@media screen and (max-width: 1300px){
  .formContainer {
   flex-direction: column;
    padding: 0 0;
    border: none;
    box-shadow: none;} 
    .h1order {
    word-break: break-word;
    font-size: 6rem;
}
/* .menucontainer {
    margin-top: 11rem;
} */

#formOrder {
    width: 100%;
}
.formTitles {
    font-size: 2rem;
}
.cartContainer {
  width: 112%;
}
#bubbletea__img {
  max-width: 100%;
  height: auto;
}}

</style>
