import axios from "axios";
export default {
   namespaced: true,
   state: {
   },
   mutations: {
      submitUser(state, tokenValue) {
         sessionStorage.setItem("user", tokenValue)
      },
   },
   actions: {
      async submitUser({ commit }, payload) {
         const responData = await axios.post("http://localhost:5000/api/auth", payload);
         console.log("User logged in and token is set");
         commit("submitUser", responData.data.token);
      },
   },
};
