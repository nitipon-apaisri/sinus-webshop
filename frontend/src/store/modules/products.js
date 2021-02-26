import api from "../../api/api";
export default {
   namespaced: true,
   state: {
      loading: undefined,
      allProducts: [],
      oneProduct: {},
   },
   mutations: {
      products(state, product) {
         if (state.allProducts.length <= 0) {
            product.forEach((r) => state.allProducts.push(r));
         }
      },
      getOneProduct(state, product) {
         state.oneProduct = product;
         console.log(state.oneProduct);
      },
      setLoader(state, value) {
         state.loading = value;
      },
   },
   actions: {
      async getAllProducts({ commit }) {
         commit("setLoader", true);
         api.get("http://localhost:5000/api/products")
            .then((res) => {
               commit("products", res.data);
               commit("setLoader", false);
            })
            .catch((err) => {
               console.log(err);
            });
      },
      async getOneProduct({ commit }, payload) {
         api.get("http://localhost:5000/api/products/" + payload)
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
         return state.oneProduct;
      },
   },
};
