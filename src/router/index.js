import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/mandala",
    alias: '/',
    name: "Mandala",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "mandala" */ "../views/Mandala.vue")
  },
  // {
  //   path: "/Hexagons",
  //   name: "Hexagons",
  //   component: () =>
  //     import( /* webpackChunkName: "about" */ "../views/Hexagons.vue")
  // },
  {
    path: "/leaflet",
    name: "Leaflet",
    component: () =>
      import( /* webpackChunkName: "leaflet" */ "../views/Leaflet.vue")
  },
  {
    path: "/parallax",
    name: "Parallax",
    component: () =>
      import( /* webpackChunkName: "paralax" */ "../views/Parallax.vue")
  },
  {
    path: "/circle",
    name: "Circle",
    component: () =>
      import( /* webpackChunkName: "paralax" */ "../views/Circle.vue")
  },
  {
    path: "*",
    redirect: "/"
  } // catch all use case
];

const router = new VueRouter({
  mode: "history",
  base: '/play/',
  hash: false,
  routes
});

export default router;