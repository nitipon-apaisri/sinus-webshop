import axios from "../../API";

export default {
  namespaced: true,
  state: {
    allProducts: [],
  },
  mutations: {
    products(state, products) {
      state.allProducts = products
    },
  },
  actions: {
    async getProducts({ commit }) {
      axios
        .get("/products")
        .then((res) => { commit("products", res.data) })
        .catch((err) => { console.log(err) })
    },
  },
  getters: {
    products(state) {
      return state.allProducts;
    },
  },
}