import axios from "axios";
export default {
   state: {
      token: "",
   },
   mutations: {
      submitUser(state, tokenValue) {
         state.token = tokenValue;
      },
   },
   actions: {
      async submitUser({ commit }, payload) {
         const responData = await axios.post("http://localhost:5000/api/auth", payload);
         commit("submitUser", responData.data.token);
         console.log(responData);
      },
   },
};
