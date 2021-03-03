import api from "../../api/api";
export default {
   namespaced: true,
   state: {
      status: "",
   },
   mutations: {
      submitUser(state, tokenValue) {
         state.status = "";
         sessionStorage.setItem("user", tokenValue);
      },
      gotErr(state) {
         state.status = "Err";
      },
   },
   actions: {
      async submitUser({ commit }, payload) {
         await api
            .post("/auth", payload)
            .then((res) => {
               commit("submitUser", res.data.token);
               console.log("User logged in and token is set");
            })
            .catch((err) => commit("gotErr", err));
      },
   },
   getters: {
      getErr(state) {
         return state.status;
      },
   },
};
