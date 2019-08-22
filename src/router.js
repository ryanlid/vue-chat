import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/list",
      name: "list",
      component: () => import("./views/chat/List.vue")
    },
    {
      path: "/s/:id",
      name: "single",
      component: () => import("./views/chat/Single.vue")
    },
    {
      path: "/s/:id/info",
      name: "chatInfo",
      component: () => import("./views/chat/Info.vue")
    },
    {
      path: "/g/:id",
      name: "group",
      component: () => import("./views/chat/Group.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
