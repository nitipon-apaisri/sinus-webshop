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
      }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  max-width: 1200px;
  height: 500px;
  margin: 150px auto;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 24px;
  .contents {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(12, 1fr);
    box-sizing: border-box;
    height: 100%;
  }
  .mock-img {
    border-radius: 24px 0 0 24px;
    grid-column: span 7;
    background-color: #333;
  }
  .sign-in-content {
    grid-column: span 5;
    padding: 32px 32px 32px 16px;
    form {
      text-align: left;
      margin: 0 auto;
      width: 100%;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      input {
        margin: 6px 0;
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid #f2f2f2;
      }
      a {
        margin: 6px 0;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.03rem;
        font-size: 0.7rem;
      }
      button {
        margin: 0 0 12px 0;
        padding: 8px 12px;
        width: 80px;
        border-radius: 4px;
        border: 1px solid transparent;
      }
    }
    .divide {
      margin: 12px 0;
      width: 100%;
      justify-content: space-between;
      display: flex;
      hr {
        align-self: center;
        width: 170px;
        margin: 0;
      }
      p {
        color: #333;
        font-size: 0.8rem;
      }
    }
    .alt-sign-in {
      margin: 32px 0 0 0;
      display: flex;
      width: 300px;
      justify-content: space-between;
      .mock-log {
        border-radius: 4px;
        width: 80px;
        height: 35px;
        background-color: #333;
      }
    }
  }
}
</style>