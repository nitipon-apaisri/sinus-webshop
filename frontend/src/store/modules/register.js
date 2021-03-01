import api from "../../api/api";
export default {
   namespaced: true,
   state: {},
   mutations: {
      addUser(state, value) {
         console.log(value);
      },
   },
   actions: {
      async addUser({ commit }, value) {
         const req = await api.post("/register", value);
         console.log(req);
         commit("addUser", value);
      },
   },
   getters: {},
};
