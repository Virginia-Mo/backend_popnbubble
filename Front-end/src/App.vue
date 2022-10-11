<script setup>
import { RouterView } from "vue-router";</script>
<script>
import {datasStore} from "@/stores/datasStore.js";
import { mapActions, mapState } from "pinia"
export default {
  computed : {
    ...mapState(datasStore, ["topTeas","teaSize","teas","poppings","jellies","sweetness"]),
  },
  async created() {
    this.handleDatas()
  },
  methods : {
    ...mapActions(datasStore,{handleDatas : "handleDatas"} ),}
}</script>



<template>
  <RouterView />
</template>
