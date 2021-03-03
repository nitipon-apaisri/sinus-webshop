import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import user from "./modules/user";
import order from "./modules/order";
import register from "./modules/register";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      mockUserContact: {},
      mockCreditCard: {
         cardNumber: "1234 5678 9101 1121",
         cardValit: "10 / 25",
         cvc: "XXX",
      },
   },
   mutations: {
      postAddress(state, info) {
         state.mockUserContact = info;
      },
   },
   actions: {
      postAddress({ commit }, info) {
         commit("postAddress", info);
      },
   },
   modules: {
      auth,
      products,
      user,
      order,
      register,
   },
   getters: {
      getMockUserContact(state) {
         return state.mockUserContact;
      },
      getMockCreditCard(state) {
         return state.mockCreditCard;
      },
   },
});
