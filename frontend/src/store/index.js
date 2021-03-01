import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import user from "./modules/user";
import cat from "./modules/cat";
import userCheck from "./modules/userCheck";
import addProduct from "./modules/addProduct";
import deleteProduct from "./modules/deleteProduct";

Vue.use(Vuex);

export default new Vuex.Store({
   state: {},
   mutations: {},
   actions: {},
   modules: {
      auth,
      products,
      user,
      cat,
      userCheck,
      addProduct,
      deleteProduct
   },
   getters: {},
});
