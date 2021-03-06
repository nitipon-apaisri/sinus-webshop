import api from "../../api/api";
const userToken = sessionStorage.getItem("user");
api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
export default {
   namespaced: true,
   state: {
      loading: null,
      user: {
         name: "",
         email: "",
         role: "",
         address: {
            street: "",
            city: "",
            zip: "",
         },
      },
      userStatus: false,
   },
   mutations: {
      setLoader(state, value) {
         state.loading = value;
      },
      checkUser(state, userInfo) {
         state.user.name = userInfo.name;
         state.user.email = userInfo.email;
         state.user.role = userInfo.role;
         state.user.address.street = userInfo.address.street;
         state.user.address.city = userInfo.address.city;
         state.user.address.zip = userInfo.address.zip;
         state.userStatus = true;
      },
      editUser() {
         console.log("Edited");
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
      async editUser({ commit }, payload) {
         try {
            api.patch("/me", payload);
            commit("editUser");
            location.reload();
         } catch (err) {
            return false;
         }
      },
   },
   getters: {
      getUser(state) {
         return state.user;
      },
   },
};
