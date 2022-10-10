<template>
  <div id="bubblesContainer">
    <div
      class="ball bubbles"
      v-for="index in 38"
      :id="'Bubble' + index"
      :class="'Pearls' + index"
      :key="index"
    >
      <span class="shadow"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bubbles", 
};
</script>
<style>

</style>
