import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000/api" });
export default {
   namespaced: true,
   state: {
      loading: null,
      user: {},
   },
   mutations: {
      setLoader(state, value) {
         state.loading = value;
      },
      checkUser(state, userInfo) {
         state.user = userInfo;
      },
   },
   actions: {
      async userData({ commit }) {
         commit("setLoader", true);
         const userToken = sessionStorage.getItem("user");
         api.get("/me", {
            headers: {
               Authorization: `Bearer ${userToken}`,
            },
         })
            .then((response) => {
               commit("checkUser", response.data);
               commit("setLoader", false);
            })
            .catch((err) => {
               console.log(err);
            });
      },
   },
   getters: {
      getUser(state) {
         return state.user;
      },
   },
};
