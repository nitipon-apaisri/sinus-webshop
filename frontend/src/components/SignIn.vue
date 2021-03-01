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
      this.$store.dispatch("auth/submitUser", payload);
      setTimeout(() => {
        this.$router.push("/");
        location.reload();
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>