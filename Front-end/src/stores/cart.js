import { defineStore } from "pinia";

export const useStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
    priceArray: [],
    sum: "",
  }),
  getters: {
    total() {
      return this.calculatePrice();
    },
  },
  actions: {
    calculatePrice() {
      this.priceArray = [];
      for (let product of this.cart) {
        this.priceArray.push(product[1]);
      }
      this.sum = this.priceArray.reduce((a, b) => a + b, 0);
      return this.sum;
    },
    cancel(index) {
      this.cart.splice(index, 1);
    },
  },
});
