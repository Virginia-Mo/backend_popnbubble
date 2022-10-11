import { defineStore } from "pinia";
import {
  getTopTeas,
  getTeaSize,
  getTeas,
  getPoppings,
  getJellies,
  getSweetness,
} from "@/datas/apiData.js";
export const datasStore = defineStore("datasStore", {
  state: () => ({
    topTeas: "[]",
    teaSize: " ",
    teas: " ",
    poppings: " ",
    jellies: " ",
    sweetness: " ",
    Size:"",
    Rate:"",
    nom: " ",
    prenom: " ",
    email: " ",
    message: " ",
    date: "",
    time: "",
  }),
  actions: {
    async handleDatas() {
      this.topTeas = await getTopTeas();
      this.teaSize = await getTeaSize();
      this.teas = await getTeas();
      this.poppings = await getPoppings();
      this.jellies = await getJellies();
      this.sweetness = await getSweetness();
      return (
        this.topTeas,
        this.teaSize,
        this.teas,
        this.poppings,
        this.jellies,
        this.sweetness
      );
    },
  },
});
