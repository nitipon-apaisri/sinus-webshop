import api from "../../api/api";
const userToken = sessionStorage.getItem("user");
api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
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
         api.get("/me")
            .then((response) => {
               commit("checkUser", response.data);
               commit("setLoader", false);
            })
            .catch((err) => {
               console.log(err);
            });
         commit("setLoader", true);
      },
   },
   getters: {
      getUser(state) {
         return state.user;
      },
   },
};
