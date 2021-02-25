import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000/api" });
export default {
   namespaced: true,
   state: {
      user: {},
   },
   mutations: {
      checkUser(state, userInfo) {
         state.user = userInfo;
      },
   },
   actions: {
      async userData({ commit }) {
         const userToken = sessionStorage.getItem("user");

         api.get("/me", {
            headers: {
               Authorization: `Bearer ${userToken}`,
            },
         })
            .then((response) => {
               commit("checkUser", response.data);
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
