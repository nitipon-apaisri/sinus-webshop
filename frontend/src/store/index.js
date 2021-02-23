import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import auth from "./modules/postAuth";
Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      // token: "",
   },
   //
   mutations: {
      // submitUser(state, tokenValue) {
      //    state.token = tokenValue;
      //    console.log(state.token);
      // },
      getUser() {
         console.log("User!");
      },
   },
   actions: {
      // async submitUser({ commit }, payload) {
      //    const responData = await axios.post("http://localhost:5000/api/auth", payload);
      //    commit("submitUser", responData.data.token);
      //    console.log(responData);
      // },
      async getUser({ commit }, payload) {
         axios
            .get("http://localhost:5000/api/me", {
               headers: {
                  Authorization: `Bearer ${payload}`,
               },
            })
            .then((res) => {
               console.log(res);
            })
            .catch((err) => {
               console.log(err);
            });
         commit("getUser");
      },
   },
   modules: {
      auth,
   },
   getters: {
      getToken() {
         return auth.state.token;
      },
   },
});
