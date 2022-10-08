<template>
  <h1>Voici mon compteur</h1>
  <p>Vous avez cliqué {{ count }} fois</p>
  <button @click="increment">Click</button>
</template>

<style>
h1 {
  color: pink;
}
button {
  background-color: aquamarine;
}
</style>

<script scoped>
export default {
  name: "Compteur",
  data() {
    return {
      count: 0,
    };
  },
  methods : {
    increment(){
        this.count++
    }
  }
};
</script>
