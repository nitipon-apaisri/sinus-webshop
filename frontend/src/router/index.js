import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignInUp from "../views/SignInUp.vue";
import Info from "../views/Info.vue";

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
   },
   {
      path: "/sign-in-up",
      name: "SignInUp",
      component: SignInUp,
   },
   {
      path: "/info",
      name: "Info",
      component: Info,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
