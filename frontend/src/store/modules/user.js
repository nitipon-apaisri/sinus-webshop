import axios from "axios";
export default {
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    checkUser(state, userInfo) {
      state.user.push(userInfo)
      console.log(state.user);
    }
  },
  actions: {
    async userData({ commit }) {

      const userToken = sessionStorage.getItem("user")

      axios
        .get("http://localhost:5000/api/me", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
        )
        .then((response) => {
          commit("checkUser", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
