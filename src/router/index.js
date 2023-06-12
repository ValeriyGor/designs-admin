import { createRouter, createWebHistory } from "vue-router";
import DesignsList from "../views/DesignsList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DesignsList,
  },
  {
    path: "/design",
    name: "design",
    component: DesignsList,
  },
  {
    path: "/design/add",
    name: "add-design",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DesignAdd"),
  },
  {
    path: "/design/:hash",
    name: "edit-design",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DesignEdit"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
