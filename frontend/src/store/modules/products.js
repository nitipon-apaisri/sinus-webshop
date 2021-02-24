import axios from "axios";
export default {
  namespaced: true,
  state: {
    allProducts: [],
    product: []
  },
  mutations: {
    products(state, product) {
      product.forEach((r) => state.allProducts.push(r));
      //console.log(JSON.parse(JSON.stringify(state.allProducts)));
    },
    getOneProduct(state, product) {
      state.product.push(product)
      console.log(product);
    }
  },
  actions: {
    async getAllProducts({ commit }) {
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          commit("products", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getOneProduct({ commit }) {
      const payload = "KqhH2cqSLNW3Ae0Z"
      axios
        .get("http://localhost:5000/api/products/" + payload)
        .then((res) => {
          commit("getOneProduct", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    products(state) {
      return state.allProducts;
    },
  },
};
