import axios from "axios";
export default {
   state: {
      products: [],
   },
   mutations: {
      getProducts(state, value) {
         value.forEach((r) => state.products.push(r));
         console.log(JSON.parse(JSON.stringify(state.products)));
      },
   },
   actions: {
      async getProducts({ commit }) {
         let res = await axios.get("http://localhost:5000/api/products/");
         commit("getProducts", res.data);
      },
   },
   getters: {
      Products(state) {
         return state.products;
      },
   },
};
