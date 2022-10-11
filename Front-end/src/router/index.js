import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ViewHome,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/ViewAbout.vue"),
    },
    {
      path: "/menu",
      name: "MenuPop",
      component: () => import("../views/ViewMenu.vue"),
    },
    {
      path: "/order",
      name: "OrderPage",
      component: () => import("../views/ViewOrders.vue"),
    },
    {
      path: "/finalOrder",
      name: "finalOrder",
      component: () => import("../views/ViewFinalOrder.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ViewContact.vue"),
    },
    {
      path: "/error",
      name: "ErrorPage",
      component: () => import("../views/NotFound.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: "/error" },
  ],
});

export default router;
