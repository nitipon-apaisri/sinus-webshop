import axios from "../../API";

export default {
  namespaced: true,

  actions: {
    async deleteProduct(context, id) {
      axios
        .delete("/products/" + id)
        .then(() => { })
        .catch((err) => { console.log(err) })
    },
  },
}