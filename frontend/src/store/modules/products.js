import api from "../../api/api";
const userToken = sessionStorage.getItem("user");
api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
export default {
   namespaced: true,
   state: {
      loading: undefined,
      allProducts: [],
      oneProduct: { category: "", imgFile: "", longDesc: "", price: 0, title: "", _id: "", shortDesc: "" },
   },
   mutations: {
      products(state, product) {
         product.forEach((r) => state.allProducts.push(r));
      },
      getOneProduct(state, product) {
         state.oneProduct.category = product.category;
         state.oneProduct.imgFile = product.imgFile;
         state.oneProduct.longDesc = product.longDesc;
         state.oneProduct.shortDesc = product.shortDesc;
         state.oneProduct.price = product.price;
         state.oneProduct.title = product.title;
         state.oneProduct._id = product._id;
      },
      setLoader(state, value) {
         state.loading = value;
      },
      changeProductInfo() {
         console.log("Changed");
      },
   },
   actions: {
      async getAllProducts({ commit }) {
         commit("setLoader", true);
         api.get("/products")
            .then((res) => {
               commit("products", res.data);
               commit("setLoader", false);
            })
            .catch((err) => {
               console.log(err);
            });
      },
      async getOneProduct({ commit }, payload) {
         api.get("/products/" + payload)
            .then((res) => {
               commit("getOneProduct", res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      },
      async changeProductInfo({ commit }, payload) {
         let product = {};
         product = payload;
         try {
            api.patch(`/products/${product._id}`, payload);
            commit("changeProductInfo");
            location.reload();
         } catch (err) {
            return false;
         }
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
