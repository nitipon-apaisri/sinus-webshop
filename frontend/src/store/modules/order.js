export default {
   namespaced: true,
   state: {
      items: [],
      cartStatus: true,
      bagStatus: false,
   },
   mutations: {
      toCart(state, productIndex) {
         state.cartStatus = false;
         state.bagStatus = true;
         const productId = state.items.find((r) => r._id == productIndex._id && r.size == productIndex.size);
         if (productId != undefined) {
            const productIndex = state.items.indexOf(productId);
            state.items[productIndex].amount++;
         } else {
            state.items.push(productIndex);
         }
      },
      increaseAmount(state, index) {
         state.items[index].amount++;
         console.log(state.items[index]);
      },
      decreaseAmount(state, index) {
         if (state.items[index].amount !== 1) {
            state.items[index].amount--;
         }
         console.log(state.items[index]);
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
         return state.items;
      },
      cartStatus(state) {
         return state.cartStatus;
      },
      totalCost(state) {
         let allCost = [];
         state.items.forEach((r) => allCost.push(r.price * r.amount));
         return allCost.reduce((a, b) => a + b);
      },
   },
};
