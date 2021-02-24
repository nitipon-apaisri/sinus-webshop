<template>
  <div class="home">
    <form @submit.prevent="login">
      <input type="text" name="email" placeholder="Email" v-model="email" />
      <input
        type="password"
        name="password"
        placeholder="password"
        v-model="password"
      />
      <button>Log in</button>
    </form>
    <button @click="user">Get User</button>
    <button @click="getProduct">Get Products</button>
    <button @click="getOneProduct">One products</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "customer@example.com",
      password: "password",
    };
  },
  name: "Home",
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("auth/submitUser", payload);
    },

    getProduct() {
      this.$store.dispatch("products/getAllProducts");
    },
    user() {
      this.$store.dispatch("user/userData");
    },
    getOneProduct() {
      this.$store.dispatch("products/getOneProduct");
    },
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
};
</script>
