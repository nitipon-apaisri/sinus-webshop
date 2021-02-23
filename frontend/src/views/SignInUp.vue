<template>
  <div class="sing-in-up">
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
    <button @click="getUser">Get User</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "customer@example.com",
      password: "password",
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("submitUser", payload);
      // ...mapActions(["submitUser"], payload),
    },
    getUser() {
      this.$store.dispatch("getUser", this.getToken);
      // console.log(this.getToken);
    },
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
};
</script>

<style lang="scss" scoped>
</style>