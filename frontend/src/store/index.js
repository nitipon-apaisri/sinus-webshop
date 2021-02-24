import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
   },
   mutations: {
   },
   modules: {
      auth, products, user,
   },
   getters: {
   },
});
