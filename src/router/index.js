import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mandala",
    name: "Mandala",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Mandala.vue")
  },
  {
    path: "/Hexagons",
    name: "Hexagons",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Hexagons.vue")
  },
  {
    path: "/parallax",
    name: "Parallax",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Parallax.vue")
  },
  {
    path: '*',
    redirect: '/'
  }, // catch all use case
];

const router = new VueRouter({
  mode: "history",
  base: process.env.SUB_URL,
  hash: false,
  routes
});

export default router;