<template>
  <div class="register">
    <form @submit.prevent="register">
      <section class="personal-data">
        <h2>PERSONAL INFORMAION</h2>
        <hr />
        <label for="name">Name</label>
        <input type="text" name="name" v-model="user.name" />
        <div class="address-info-1">
          <div class="street">
            <label for="street">Street</label>
            <input type="text" name="street" v-model="user.address.street" />
          </div>
          <div class="zip">
            <label for="zip">Zip</label>
            <input type="text" name="zip" v-model="user.address.zip" />
          </div>
        </div>
        <div class="address-info-2">
          <div class="city">
            <label for="street">City</label>
            <input type="text" name="city" v-model="user.address.city" />
          </div>
          <div class="country">
            <label for="zip">Country</label>
            <input type="text" name="country" />
          </div>
        </div>
      </section>
      <section class="account-data">
        <h2>ACCOUNT INFORMAION</h2>
        <hr />
        <div class="email">
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="user.email" />
        </div>
        <div class="password-info">
          <div class="password">
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div class="confirm-password">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              v-model="user.password"
            />
          </div>
        </div>
      </section>
      <div class="form-footer">
        <button class="register-button form-button">Register</button>
        <router-link to="/auth" class="sign-in-button form-button"
          >SIGN IN</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        address: {
          street: "",
          zip: "",
          city: "",
        },
      },
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register/addUser", this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>