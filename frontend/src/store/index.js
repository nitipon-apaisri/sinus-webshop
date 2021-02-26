import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import user from "./modules/user";
import order from "./modules/order";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {},
   mutations: {},
   actions: {},
   modules: {
      auth,
      products,
      user,
      order,
   },
   getters: {},
});
