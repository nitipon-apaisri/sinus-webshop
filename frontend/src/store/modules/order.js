export default {
   namespaced: true,
   state: {
      preOrder: [],
      makeOrder: [],
      cartStatus: true,
   },
   mutations: {
      toCart(state, productIndex) {
         state.cartStatus = false;
         const productId = state.preOrder.find((e) => e._id == productIndex._id);
         if (productId != undefined) {
            const productIndex = state.preOrder.indexOf(productId);
            state.preOrder[productIndex].amount++;
         } else {
            state.preOrder.push(productIndex);
         }
         console.log(JSON.parse(JSON.stringify(state.preOrder)));
      },
   },
   actions: {
      addToCart({ commit }, productIndex) {
         let amount = { amount: 1 };
         Object.assign(productIndex, amount);
         commit("toCart", productIndex);
      },
   },
   getters: {
      order(state) {
         return state.preOrder;
      },
      cartStatus(state) {
         return state.cartStatus;
      },
   },
};
