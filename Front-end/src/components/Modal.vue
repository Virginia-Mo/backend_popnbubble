<template>
     <div
          v-if="open"
          id="modalContainer"
          class="animate__animated"
          :class="{ animate__fadeIn: isActive }">
          <div id="closeImgContainer">
            <img src="@/assets/imgs/cancel.png" alt="fermer la fenêtre" id="closeModal" @click="$emit('closeModal')"/></div>
          <p id="modalMessage">
            <span>Merci pour votre message! </span>
            <br>
            Nous y répondrons dans les meilleurs délais.
          </p>
          <div id="glassesImgContainer">
            <img src="@/assets/imgs/cool.png" alt="bubble tea avec lunettes" id="imgModal"/></div>
    
        </div>
</template>

<script>
    export default {
      props: {
        open: Boolean,
        isActive : Boolean
      }
    }
    </script>

<style>
    #modalContainer {
  position: absolute;
  background-color: grey;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 28rem;
  width: 25rem;
  background-color:#ffe4c4eb;
  border: solid 1px black;
  border-radius: 20px;
  font-size: 2.5rem;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1.1rem black;
}
#closeModal, #imgModal {
 max-width: 100%;
}
#closeImgContainer {
  width: 4rem;
  margin-left: 81%;
}
#glassesImgContainer {
  width: 5rem;
    text-align: center;
    margin: auto;
}
#modalMessage {
  margin: 0.9rem;
}
</style>