import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Register from "../views/Register.vue";
import User from "../views/User.vue";
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
      path: "/auth",
      name: "Auth",
      component: Auth,
   },
   {
      path: "/register",
      name: "Register",
      component: Register,
   },
   {
      path: "/account",
      name: "User",
      component: User,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
