<template>
    <div id="pearlsDiv">
  <div :class="'Pearls' + pearl"  class="ball bubbles" v-for="pearl in 38" :key="pearl">
    <span class="shadow"></span>
  </div></div>
</template>
<script>
export default {
  name: "Pearls",
};
</script>
<style scoped>

</style>
