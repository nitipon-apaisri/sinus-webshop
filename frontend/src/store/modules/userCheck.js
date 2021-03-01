import axios from "../../API";

export default {
  namespaced: true,
  state: {
    user: []
  },
  mutations: {
    checkUser(state, userInfo) {
      state.user = userInfo
    }
  },
  actions: {
    async user({ commit }) {
      axios
        .get("/me").then((response) => { commit("checkUser", response.data) })
        .catch((err) => { console.log(err) })
    },
  },
}