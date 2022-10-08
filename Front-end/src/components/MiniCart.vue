<template>
  <div id="MiniCart__MainContainer">
  <div id="miniCartContainer" @click="showOrder">
    <p id="imgCartDiv">
      <img
        src="@/assets/imgs/shopping-cart.png"
        alt="Mini Panier"
        id="imgCart" 
   
      />
    </p>
    <p id="MiniCart__articlesNumber">
    <p >
      ( {{ this.orders.length }})
    </p>
  </p>
  </div>
  <div id="MiniCartDetails" class="borders animate__animated animate__fadeInDown" v-if="showMiniCart">
      <div id="MiniCart__NoProduct" v-if="this.orders.length == 0"> Pas de produit dans le panier</div>
      <div
        :key="item.id"
        v-for="(item, index) in this.orders"
        class="MiniCart__order"
        v-else
      >
      <div class="MiniCart__number">
        <p class="orderTitle">
          {{ index + 1 }}:
 
        </p></div>
        <div class="MiniCart__Order">
          <ul id="MiniCart__ul">
        <li><span class="miniCart__span"> Thé :</span> {{ item[2] }}</li>
        <li><span class="miniCart__span"> Saveur :</span> {{ item[3] }}</li>
        <li>
          <span class="miniCart__span">{{ item[4] }} :</span> {{ item[5] }}
        </li>
        <li><span class="miniCart__span">Sucré à :</span> {{ item[6] }}%</li>
        <span class="miniCart__span">Servit {{ item[7].toLowerCase() }}</span>
      </ul>
      
      </div>
      <div id="MiniCart__delete">
 <img
            src="@/assets/imgs/delete.png"
            alt="Supprimer article"
            class="imgIcon deleteImg"
            @click="cancel(name)"
          />
        </div> 
      </div> <p id="total">Total : {{total}}€</p>
      <p id="MiniCart__ButtonDiv" v-if="this.orders.length > 0"><router-link to="/order" id="MiniCart__Button">Commander</router-link></p>
    </div>
 

</div>
</template>
<script>
import { useStore } from "@/stores/cart.js";
import { mapActions, mapState } from "pinia"
const storeCart = useStore()

export default {
  name: "MiniCart",
  data() {
    return {
      orders: storeCart.cart,
      showMiniCart : false
    };
  },
  computed : {
    ...mapState(useStore, ["cart", "total"]),
  },
  methods: {
    showOrder() {
      this.showMiniCart = !this.showMiniCart; 
     let wrap = document.querySelector(".wrapTarget")
     if (wrap.classList.contains("wrap5")){
      wrap.classList.remove("wrap5")
     }
     else {
      wrap.classList.add("wrap5")
     }
    },
    ...mapActions(useStore,{cancel : "cancel"} ),
  },
};
</script>
<style>

#imgCart {
  max-width: 100%;
}
#imgCartDiv {
  width: 3rem;
}
.MiniCart__order {
  display: flex;
  height: 30rem;
}
#miniCartContainer {
  display: flex;
    justify-content: center;
    margin-top: 20%;
    text-align: center;
}
#MiniCartDetails div {
  width: auto;
  height: auto;
  position: relative;
}
#MiniCart__MainContainer {
  display: flex;
  flex-direction: column;
}
#MiniCart__ul {
  text-align: left;
  width: 17rem;
  font-size: 1.7rem;
  margin: 0.9rem 0 0;
}
#MiniCart__delete {
  top: 2rem;
}
#MiniCartDetails {
  top:50%;
  right: 50%;
  overflow: auto;
  width: 30rem;
  height: 20rem;
 background-color: #fde9d1;
 background-image: url("@/assets/imgs/logoPnbPng.png");
  background-position: contain;
  background-size: 8rem;
  background-repeat: no-repeat;
  background-position: right bottom;
  padding: 1rem;
perspective: 0px;
rotate: 359deg;
}
#MiniCart__NoProduct {
padding:2rem 1rem;
}
#MiniCart__Button {
  text-decoration: none;
  color: black;
  border: double 1px black;
  padding: 0.5rem;
  font-size: 1.7rem;
}
#MiniCart__ButtonDiv {
  margin: 0;
}
#total {
  margin: 0.5rem;
}
.miniCart__span {
  font-size: 2rem;
 color: #723b00 ;
}
@media screen and (max-width:1024px){
  #MiniCartDetails {
    left:-15rem ;
  }
}
</style>
