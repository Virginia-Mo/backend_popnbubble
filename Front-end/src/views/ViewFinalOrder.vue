<template>
    <div id="finalOrderContainer">
        <NavBar/>
    <div id="finalMessage__container">
      <div id="finalMessage__p">
       <p class="finalMessage__message">Merci pour votre commande ! </p>
       <p class="finalMessage__message">Vous pourrez venir la chercher à l'heure souhaitée.</p>
       </div>
       <img src="@/assets/imgs/thxImg.jpg" alt="Image de remerciement pour la commande" id="thxImg">
       <p id="finalMessage__linkdiv"><router-link to="/about" id="finalMessage__link">Retour</router-link></p>
    </div>
    <FooterComponent/>
    </div>
</template>

<script>
     import NavBar from "../components/NavBar.vue";
     import FooterComponent from "../components/Footer.vue";

export default {
  name: "FinalOrderPage",
  components: { NavBar, FooterComponent },
};
</script>

<style scoped>
#thxImg {
  box-shadow: 0.2rem 0.2rem 0.5rem black;
    width: 40rem;
    height: 45rem;
    border-radius: 30px;
    border: solid 1px black;
    margin: 2rem;
}
.finalMessage__message {
  font-size: 3rem;
}
#finalMessage__p {
  border: solid 1px black;
  width: 40%;
  border-radius: 20px;
margin: auto;
box-shadow: 0.1rem 0.1rem 1.1rem  black;
}
#finalMessage__link {
  text-decoration: none;
    font-size: 3rem;
    border: solid 1px black;
    padding: 2rem;
    border-radius: 50%;
    box-shadow: 0.1rem 0.1rem 1.1rem  black;
}
#finalMessage__link:visited {
  color: black;
}
#finalMessage__link:hover {
  background-color: bisque;
}
@media screen and (max-width: 768px){
  #thxImg {
    max-width: 85%;
  }
}
</style>