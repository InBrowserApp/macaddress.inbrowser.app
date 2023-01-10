import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OUIView from "../views/OUIView.vue";
import OUI28View from "../views/OUI28View.vue";
import OUI36View from "../views/OUI36View.vue";
import CIDView from "../views/CIDView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/oui/:assignment",
      name: "oui",
      component: OUIView,
    },
    {
      path: "/oui28/:assignment",
      name: "oui28",
      component: OUI28View,
    },
    {
      path: "/oui36/:assignment",
      name: "oui36",
      component: OUI36View,
    },
    {
      path: "/cid/:assignment",
      name: "cid",
      component: CIDView,
    },
  ],
});

export default router;
