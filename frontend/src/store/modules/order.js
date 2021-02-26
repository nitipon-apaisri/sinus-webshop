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
      },
      increaseAmount(state, index) {
         state.preOrder[index].amount++;
         console.log(state.preOrder[index].amount);
      },
      decreaseAmount(state, index) {
         if (state.preOrder[index].amount !== 1) {
            state.preOrder[index].amount--;
         }
         console.log(state.preOrder[index].amount);
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
   },
   getters: {
      order(state) {
         return state.preOrder;
      },
      cartStatus(state) {
         return state.cartStatus;
      },
      totalCost(state) {
         let allCost = [];
         state.preOrder.forEach((r) => allCost.push(r.price * r.amount));
         return allCost.reduce((a, b) => a + b);
      },
   },
};
