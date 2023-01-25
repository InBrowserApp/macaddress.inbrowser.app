import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AssignmentView from "../views/AssignmentView.vue";
import BlockView from "../views/BlockView.vue";
import OrganizationView from "../views/OrganizationView.vue";
import OrganizationsView from "../views/OrganizationsView.vue";

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
      name: "assignment:MA-L",
      component: AssignmentView,
    },
    {
      path: "/MA-M/:assignment",
      name: "assignment:MA-M",
      component: AssignmentView,
    },
    {
      path: "/MA-S/:assignment",
      name: "assignment:MA-S",
      component: AssignmentView,
    },
    {
      path: "/CID/:assignment",
      name: "assignment:CID",
      component: AssignmentView,
    },
    {
      path: "/IAB/:assignment",
      name: "assignment:IAB",
      component: AssignmentView,
    },
    {
      path: "/MA-L",
      name: "block:MA-L",
      component: BlockView,
    },
    {
      path: "/MA-M",
      name: "block:MA-M",
      component: BlockView,
    },
    {
      path: "/MA-S",
      name: "block:MA-S",
      component: BlockView,
    },
    {
      path: "/CID",
      name: "block:CID",
      component: BlockView,
    },
    {
      path: "/IAB",
      name: "block:IAB",
      component: BlockView,
    },
    {
      path: "/organizations/:organization",
      name: "organization",
      component: OrganizationView,
    },
    {
      path: "/organizations",
      name: "organizations",
      component: OrganizationsView,
    },
  ],
});

export default router;
