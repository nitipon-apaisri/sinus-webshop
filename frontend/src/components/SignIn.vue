<template>
  <section class="sign-in">
    <div class="contents">
      <div class="mock-img"></div>
      <div class="sign-in-content">
        <form @submit.prevent="login">
          <h1>SIGN IN</h1>
          <input type="text" name="email" placeholder="Email" v-model="email" />
          <input
            type="password"
            name="password"
            placeholder="password"
            v-model="password"
          />
          <p v-if="err" class="err">E-mail or Password is not correct</p>
          <router-link to="/register">No Account ?</router-link>
          <button>Log in</button>
        </form>
        <div class="divide">
          <hr />
          <p>Or with</p>
          <hr />
        </div>
        <div class="alt-sign-in">
          <div class="mock-log"></div>
          <div class="mock-log"></div>
          <div class="mock-log"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      err: false,
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
      this.$store.dispatch("auth/submitUser", payload);
      setTimeout(() => {
        if (this.getErr !== "Err") {
          this.err = false;
          this.$router.push("/");
          location.reload();
        } else {
          this.err = true;
        }
      }, 300);
    },
  },
  computed: {
    ...mapGetters("auth", ["getErr"]),
  },
};
</script>

<style lang="scss" scoped>
.err {
  color: red;
}
</style>