import Vue from "vue";
import Vuex from "vuex";

import postUser from "./modules/postUser";
import getUser from "./modules/getUser";
import getProducts from "./modules/getProducts";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {},
   mutations: {},
   actions: {},
   modules: {
      postUser,
      getUser,
      getProducts,
   },
   getters: {
      getToken() {
         return postUser.state.token;
      },
   },
});
