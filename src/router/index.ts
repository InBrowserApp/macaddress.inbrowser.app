import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MALView from "../views/MALView.vue";
import MAMView from "../views/MAMView.vue";
import MASView from "../views/MASView.vue";
import CIDView from "../views/CIDView.vue";
import IABView from "../views/IABView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/MA-L/:assignment",
      name: "MA-L",
      component: MALView,
    },
    {
      path: "/MA-M/:assignment",
      name: "MA-M",
      component: MAMView,
    },
    {
      path: "/MA-S/:assignment",
      name: "MA-S",
      component: MASView,
    },
    {
      path: "/CID/:assignment",
      name: "CID",
      component: CIDView,
    },
    {
      path: "/IAB/:assignment",
      name: "IAB",
      component: IABView,
    },
  ],
});

export default router;
