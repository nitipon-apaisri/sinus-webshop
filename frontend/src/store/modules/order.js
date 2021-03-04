import api from "../../api/api";
const userToken = sessionStorage.getItem("user");
api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
export default {
   namespaced: true,
   state: {
      preOrder: {
         items: [],
      },
      makeOrder: {
         items: [],
      },
      userOrder: [],
      bagStatus: false,
      cartStatus: true,
   },
   mutations: {
      toCart(state, productIndex) {
         state.cartStatus = false;
         state.bagStatus = true;
         const productId = state.preOrder.items.find((r) => r._id == productIndex._id && r.size == productIndex.size);
         if (productId != undefined) {
            const productIndex = state.preOrder.items.indexOf(productId);
            state.preOrder.items[productIndex].amount++;
         } else {
            state.preOrder.items.push(productIndex);
         }
      },
      increaseAmount(state, id) {
         state.preOrder.items.find((r) => r._id == id).amount++;
         console.log(state.preOrder.items);
      },
      decreaseAmount(state, index) {
         if (state.preOrder.items.length !== 1) {
            state.preOrder.items.splice(index, 1);
         } else {
            location.reload();
         }
         console.log(state.preOrder.items.length);
      },
      async confirm(state) {
         state.preOrder.items.forEach((r) => state.makeOrder.items.push(r._id));
         // console.log(state.preOrder);
         await api.post("/orders", state.makeOrder);
      },
      async getOrder(state) {
         let req = await api.get("/orders");
         req.data.forEach((r) => state.userOrder.push(r));
      },
   },
   actions: {
      addToCart({ commit }, [productIndex, productSize]) {
         let amount = { amount: 1 };
         let size = { size: productSize };
         Object.assign(productIndex, amount);
         Object.assign(productIndex, size);
         commit("toCart", productIndex);
      },
      increaseAmount({ commit }, index) {
         commit("increaseAmount", index);
      },
      decreaseAmount({ commit }, index) {
         commit("decreaseAmount", index);
      },
      confirm({ commit }) {
         commit("confirm");
      },
      getOrder({ commit }) {
         commit("getOrder");
      },
   },
   getters: {
      order(state) {
         return state.preOrder.items;
      },
      cartStatus(state) {
         return state.cartStatus;
      },
      totalCost(state) {
         let allCost = [];
         state.preOrder.items.forEach((r) => allCost.push(r.price * r.amount));
         return allCost.reduce((a, b) => a + b);
      },
      getUserOrder(state) {
         return state.userOrder;
      },
   },
};
