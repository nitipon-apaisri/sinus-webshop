export default {
   namespaced: true,
   state: {
      preOrder: [],
      cartStatus: true,
      bagStatus: false,
   },
   mutations: {
      toCart(state, productIndex) {
         state.cartStatus = false;
         state.bagStatus = true;
         const productId = state.preOrder.find((r) => r._id == productIndex._id && r.size == productIndex.size);
         if (productId != undefined) {
            const productIndex = state.preOrder.indexOf(productId);
            state.preOrder[productIndex].amount++;
         } else {
            state.preOrder.push(productIndex);
         }
      },
      increaseAmount(state, index) {
         state.preOrder[index].amount++;
         console.log(state.preOrder[index]);
      },
      decreaseAmount(state, index) {
         if (state.preOrder[index].amount !== 1) {
            state.preOrder[index].amount--;
         }
         console.log(state.preOrder[index]);
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
