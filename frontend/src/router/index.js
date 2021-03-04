import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Register from "../views/Register.vue";
import User from "../views/User.vue";
import Admin from "../views/Admin.vue";
import Info from "../views/Info.vue";
import Checkout from "../views/Checkout.vue";
import Shipping from "../views/Shipping.vue";
import Summarize from "../views/Summarize.vue";
import Payment from "../views/Payment.vue";
import Confirm from "../views/ConfirmStatus.vue";
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
   {
      path: "/account/admin",
      name: "Admin",
      component: Admin,
   },
   {
      path: "/info/:id",
      name: "Info",
      component: Info,
   },
   {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
   },
   {
      path: "/shipping",
      name: "Shipping",
      component: Shipping,
   },
   {
      path: "/summarize",
      name: "Summarize",
      component: Summarize,
   },
   {
      path: "/payment",
      name: "Payment",
      component: Payment,
   },
   {
      path: "/confirm",
      name: "Confirm",
      component: Confirm,
   },
];

const router = new VueRouter({
   mode: "history",
   base: process.env.BASE_URL,
   routes,
});

export default router;
