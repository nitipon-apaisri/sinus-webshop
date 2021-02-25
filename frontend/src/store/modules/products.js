import axios from "axios";
export default {
<<<<<<< HEAD
  namespaced: true,
  state: {
    loading: undefined,
    allProducts: [],
    oneProduct: []
  },
  mutations: {
    products(state, product) {
      product.forEach((r) => state.allProducts.push(r));
      console.log(JSON.parse(JSON.stringify(state.allProducts)));
    },
    getOneProduct(state, product) {
      state.oneProduct = product
      console.log(product);
    },
    setLoader(state, value) {
      state.loading = value
    }
  },
  actions: {
    async getAllProducts({ commit }) {
      commit("setLoader", true)
      axios
        .get("http://localhost:5000/api/products")
        .then((res) => {
          commit("products", res.data)
          commit("setLoader", false)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getOneProduct({ commit }) {
      const payload = "FwCV5mTzyzSRKG3n"
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
    product(state) {
      return state.oneProduct
    }
  },
=======
   namespaced: true,
   state: {
      allProducts: [],
      product: [],
   },
   mutations: {
      products(state, product) {
         product.forEach((r) => state.allProducts.push(r));
         console.log(JSON.parse(JSON.stringify(state.allProducts)));
      },
      getOneProduct(state, product) {
         state.product.push(product);
         console.log(product);
      },
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
         const payload = "KqhH2cqSLNW3Ae0Z";
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
>>>>>>> main
};
