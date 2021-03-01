import axios from "../../API";

export default {
  namespaced: true,
  state: {
  },
  mutations: {

  },
  actions: {
    async addProduct() {
      axios
        .post("/products",
          {
            title: 'Mike Pite',
            price: 1223,
            shortDesc: 'male',
            longDesc: 'Skate ipsum dolor sit amet...',
          }
        )
        .then((res) => { console.log(res); })
        .catch((err) => { console.log(err) })
    },
  },
}