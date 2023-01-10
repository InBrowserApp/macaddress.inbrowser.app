import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OUIView from "../views/OUIView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/oui/:prefix",
      name: "oui",
      component: OUIView,
    },
  ],
});

export default router;
