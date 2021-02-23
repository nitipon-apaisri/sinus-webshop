import axios from "axios";
export default {
   state: {},
   mutations: {
      getUser() {
         console.log("User!");
      },
   },
   actions: {
      async getUser({ commit }, payload) {
         axios
            .get("http://localhost:5000/api/me", {
               headers: {
                  Authorization: `Bearer ${payload}`,
               },
            })
            .then((res) => {
               console.log(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
         commit("getUser");
      },
   },
};
