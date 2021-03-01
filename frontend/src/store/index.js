import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import user from "./modules/user";
import order from "./modules/order";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      mokcUser: {
         name: "Miyamoto Musashi",
         address: "Fatburs Kvarngata 25",
         post: "155 96",
         city: "Solna",
         phone: "0727456465",
         country: "Sweden",
         cardNo: "1324 5678 9100 5566",
         exp: "10 / 25",
         CVC: "557",
      },
   },
   mutations: {},
   actions: {},
   modules: {
      auth,
      products,
      user,
      order,
   },
   getters: {
      getMockUser(state) {
         return state.mokcUser;
      },
   },
});
