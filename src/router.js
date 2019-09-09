import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/logout",
      name: "logout",
      redirect: "/"
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
      path: "/contacts",
      name: "contactsList",
      component: () => import("./views/contacts/List.vue")
    },
    {
      path: "/my",
      name: "my",
      component: () => import("./views/my/Index.vue")
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
