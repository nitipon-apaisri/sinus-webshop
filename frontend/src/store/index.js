import Vue from "vue";
import Vuex from "vuex";

import postUser from "./modules/postUser";
import getUser from "./modules/getUser";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {},
   mutations: {},
   actions: {},
   modules: {
      postUser,
      getUser,
   },
   getters: {
      getToken() {
         return postUser.state.token;
      },
   },
});
