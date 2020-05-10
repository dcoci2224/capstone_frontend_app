import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountriesIndex from "../views/CountriesIndex.vue";
import CountriesNew from "../views/CountriesNew.vue";
import CountriesShow from "../views/CountriesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/countries",
    name: "countries-index",
    component: CountriesIndex,
  },
  {
    path: "/countries/new",
    name: "countries-new",
    component: CountriesNew,
  },
  {
    path: "/countries/:id",
    name: "countries-show",
    component: CountriesShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
