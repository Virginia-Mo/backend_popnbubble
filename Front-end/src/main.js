import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'

import "@/assets/styles/main.css";
const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(AOS.init());

app.mount("#app");
